import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import {
  ExerciseConfigTemplate,
  Ng2TsExercises,
} from '../../../../../../../ng2ts/ng2ts';
import { extractMessages } from '@codelab/utils';
import { CodelabFile } from '../../../shared/helpers/codelabFile';

declare const require;

interface FileHighlights {
  appModule?: RegExp;
  appHtml?: RegExp;
}

function matExercise(
  modules,
  html,
  highlights: FileHighlights = {},
  theme = 'purple'
) {
  const moduleCode =
    require('!!raw-loader!./samples/basic/app.module.ts').default.replace(
      /MatCardModule, MatToolbarModule/g,
      modules
    );

  return {
    files: [
      CodelabFile.TypeScriptFile('app.module')
        .setCode(moduleCode)
        .withHighlight(highlights.appModule),
      CodelabFile.Html('app').setCode(html).withHighlight(highlights.appHtml),
      CodelabFile.TypeScriptFile('app.component').setCode(
        require('!!raw-loader!./samples/basic/app.component.ts').default
      ),
      CodelabFile.TypeScriptFile('bootstrap')
        .setCode(require('!!raw-loader!./samples/basic/main.ts').default)
        .makeBootstrappable(),
      CodelabFile.Css('styles').setCode(
        'TODO(kirjs)'
        // require('!!raw-loader!@angular/material/prebuilt-themes/indigo-pink.css')
        //   .default
      ),
      CodelabFile.Css('extra').setCode('body {padding: 0; margin: 0;}'),
    ],
  };
}

@Component({
  selector: 'codelab-slides-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MaterialComponent implements AfterViewInit {
  exercise: ExerciseConfigTemplate;
  @ViewChild('themePlayground', { static: false }) themePlayground;
  @ViewChild('translations', { static: false }) translations;

  themes = {
    indigo: 'TODO(kirjs)',
    // require('!!raw-loader!@angular/material/prebuilt-themes/indigo-pink.css')
    //   .default,
    deeppurple: 'TODO(kirjs)',
    pink: 'TODO(kirjs)',
    purple: 'TODO(kirjs)',
  };

  code = {
    material: {
      step1: {
        code: {
          'app.component.ts':
            require('!!raw-loader!./samples/basic/app.component.ts').default,
          'app.module.ts': require('!!raw-loader!./samples/step1/app.module.ts')
            .default,
          'app.html': require('!!raw-loader!./samples/step1/app.html').default,
          'bootstrap.ts': require('!!raw-loader!./samples/basic/main.ts')
            .default,
          'styles.css': this.themes.indigo,
        },
        files: ['app.module.ts', 'app.html'],
        highlights: {
          'app.module.ts': 'MatToolbarModule,',
          'app.html': /<mat-toolbar[\s\S]*<\/mat-toolbar>/,
        },
      },
      step2: {
        code: {
          'app.component.ts':
            require('!!raw-loader!./samples/basic/app.component.ts').default,
          'app.module.ts': require('!!raw-loader!./samples/step2/app.module.ts')
            .default,
          'app.html': require('!!raw-loader!./samples/step2/app.html').default,
          'bootstrap.ts': require('!!raw-loader!./samples/basic/main.ts')
            .default,
          'styles.css': this.themes.indigo,
        },
        files: ['app.module.ts', 'app.html'],
        highlights: {
          'app.module.ts': /MatCardModule,/,
          'app.html': /<mat-card[\s\S]*<\/mat-card>/,
        },
      },
      step3: {
        code: {
          'app.component.ts':
            require('!!raw-loader!./samples/basic/app.component.ts').default,
          'app.module.ts': require('!!raw-loader!./samples/step2/app.module.ts')
            .default,
          'app.html': require('!!raw-loader!./samples/step3/app.html').default,
          'bootstrap.ts': require('!!raw-loader!./samples/basic/main.ts')
            .default,
          'styles.css': this.themes.indigo,
        },
        files: ['app.html'],
        highlights: {
          'app.html': /<mat-card-header[\s\S]*?Photo of a Shiba Inu[\s\S]*?>/,
        },
      },
      step4: {
        code: {
          'app.component.ts':
            require('!!raw-loader!./samples/basic/app.component.ts').default,
          'app.module.ts': require('!!raw-loader!./samples/step4/app.module.ts')
            .default,
          'app.html': require('!!raw-loader!./samples/step4/app.html').default,
          'bootstrap.ts': require('!!raw-loader!./samples/basic/main.ts')
            .default,
          'styles.css': this.themes.indigo,
        },
        files: ['app.module.ts', 'app.html'],
        highlights: {
          'app.module.ts': /MatButtonModule\n/,
          'app.html': /<mat-card-actions[\s\S]*<\/mat-card-actions>/,
        },
      },
      themes: {
        code: {
          'app.component.ts':
            require('!!raw-loader!./samples/basic/app.component.ts').default,
          'app.module.ts': require('!!raw-loader!./samples/step4/app.module.ts')
            .default,
          'app.html': require('!!raw-loader!./samples/step4/app.html').default,
          'bootstrap.ts': require('!!raw-loader!./samples/basic/main.ts')
            .default,
          'styles.css': this.themes.indigo,
        },
        files: ['app.html', 'styles.css'],
      },
      theme: matExercise(
        `MatToolbarModule,\n    MatCardModule,\n    MatButtonModule`,
        require('!!raw-loader!./samples/basic/app.4.html').default
      ),
    },
  };
  private theme = 'indigo';
  private t: Record<string, string>;

  constructor(private exercises: Ng2TsExercises) {
    this.exercise = exercises.getExercises(6, 0);
  }

  ngAfterViewInit() {
    this.t = extractMessages(this.translations);
  }

  setTheme(theme) {
    this.theme = theme;
    this.code.material.themes.code['styles.css'] = this.themes[theme];
    this.code.material.themes.code = { ...this.code.material.themes.code };
  }
}
