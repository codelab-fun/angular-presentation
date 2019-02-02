import { Component, OnInit, ViewChild } from '@angular/core';

import { ng2tsConfig } from '../../../../../../../ng2ts/ng2ts';
import { extractMessages } from '../../../../../../../libs/presentation/src/lib/i18n-tools';

@Component({
  selector: 'slides-create-first-app',
  templateUrl: './create-first-app.component.html',
  styleUrls: [
    '../../../components/css/codelab-styles.scss',
    './create-first-app.component.css'
  ]
})
export class CreateFirstAppComponent implements OnInit {
  t: { [key: string]: string };

  isDiv:Boolean = false
  value = ""
  onKey(event: KeyboardEvent) {
    this.value = (<HTMLInputElement>event.target).value;
    console.log(this.value)
    if(this.value=="div") {
      this.isDiv = true
    } else {
      this.isDiv = false
    }
  }

  @ViewChild('translations') translation;
  //  Exercises
  exercises = [
    ng2tsConfig.milestones[1].exercises[1],
    ng2tsConfig.milestones[1].exercises[2],
    ng2tsConfig.milestones[1].exercises[3],
    {
      name: 'Create a component',
      description: '<p>Create first Angular component!</p>',
      files: [
        {
          bootstrap: false,
          excludeFromTesting: false,
          type: 'typescript',
          path: 'app.component.ts',
          template: 'import {Component} from \'@angular/core\';\n\n',
          moduleName: 'app.component',
          code: `import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello MewTube!</h1>',
})
export class AppComponent {
}
`,
          solution:
            'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'my-app\',\n  template: \'<h1>Hello MewTube!</h1>\',\n})\nexport class AppComponent {\n}\n',
          after: 'export function evalJs( js ){ return eval(js);}'
        },
        {
          bootstrap: false,
          excludeFromTesting: false,
          type: 'typescript',
          path: 'app.module.ts',
          template:
            'import { BrowserWindowModule } from \'@angular/platform-browser\';\nimport { NgModule } from \'@angular/core\';\nimport { AppComponent } from \'./app.component\';\n\n@NgModule({\n  imports: [BrowserWindowModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n',
          moduleName: 'app.module',
          code:
            'import { BrowserWindowModule } from \'@angular/platform-browser\';\nimport {NgModule} from \'@angular/core\';\nimport { AppComponent } from \'./app.component\';\n\n@NgModule({\n  imports: [BrowserWindowModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n',
          readonly: true,
          collapsed: true
        },
        {
          bootstrap: true,
          excludeFromTesting: true,
          type: 'typescript',
          path: 'main.ts',
          template:
            'import { platformBrowserDynamic } from \'@angular/platform-browser-dynamic\';\nimport {AppModule} from \'./app.module\';\n\nconst platform = platformBrowserDynamic();\nplatform.bootstrapModule(AppModule);\n',
          moduleName: 'main',
          code:
            'import { platformBrowserDynamic } from \'@angular/platform-browser-dynamic\';\nimport {AppModule} from \'./app.module\';\n\nconst platform = platformBrowserDynamic();\nplatform.bootstrapModule(AppModule);\n',
          readonly: true,
          collapsed: true
        }
      ]
    }
  ];

  // tslint:disable:max-line-length TODO: Clean up exercises and remove this comment.
  private code: any = {};

  // tslint:enable:max-line-length

  ngOnInit() {
    this.t = extractMessages(this.translation);

    this.code = {
      decorators: {
        code: `// ${this.t.componentIsDecorator}
@Component({
  // metadata
}) // ${this.t.noSemicolon}
export class AppComponent {
  // ${this.t.decoratorGoesAboveEntity}
  // ${this.t.componentNameIsClassName}
}`
      },
      selectorExercise: {
        storeComponentHTML: {
          code:`
<h1>My Store</h1>
<div *ngFor="let category of categories">
  <app-categories category={{category}}></app-categories>
  <ul>
    <li *ngFor="let item of items[category]">
      <app-item itemName={{item}}></app-item>
    </li>
  </ul>
</div>`,
        },
        storeComponentTS: {
          code:`
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  categories: string[] = ['Fruits', 'Vegetables']
  items = {
    "Fruits": ['Apples', 'Oranges', 'Bananas'],
    "Vegetables": ['Lettuce', 'Tomato', 'Cucumber']
  }
  ngOnInit() {}
}`
        },
        categoriesComponentHTML: {
          code:`
<h2>{{category}}</h2>
          `
        },
        categoriesComponentTS: {
          code:`
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() category: string
  ngOnInit() {}
}`
        },
        itemComponentHTML: {
          code:`
<b><i><font color="gray">{{itemName}}</font></i></b>`
        },
        itemComponentTS: {
          code:`
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemName: string
  ngOnInit() {}
}`
        }
      },
      componentAnatomy: {
        // Component Anatomy - Milestone #1
        code: `import { Component } from '@angular/core';
@Component({
  selector: '<what selector goes here>',
  template: '<h1>Welcome to my store!</h1>',
})
export class StoreComponent {}`,
        matches: {
          exportClass: /export.*/,
          decorator: /@C[^]*?\)[^]/,
          selector: /selector.*'.*'/,
          template: /template.*'.*'/
        },
        readonly: true,
        path: 'component.anatomy.ts',
        type: 'typescript'
      },

      moduleAnatomy: {
        // Module Anatomy - Milestone #1
        code: `/* Imports */

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HelloWorldComponent ],
  bootstrap: [ HelloWorldComponent ],
})
export class AppModule {}`,
        matches: {
          exportClass: /export.*/,
          ngModule: /@N[^]*?\)[^]/,
          importsArr: /imports.*/,

          declarationsArr: /declarations.*/,
          bootstrapArr: /bootstrap.*/
        },
        readonly: true
      },
      moduleBootstrapping: {
        // Module Bootstrapping - Milestone #1
        code: {
          mainTs: `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);`,
          indexHTML: `<!DOCTYPE>
<body>
  <hello-world>
    Loading...
  </hello-world>

  <!--this is main.ts compiled.
    Often build system will insert the script tag for you-->
  <script src="main.js"></script>
</body>`
        },
        matches: {
          index: /<hello-[^]*world>/,
          hello: /hello-world/,
          bootstrap: /platformBrowserDynamic\(\).*/
        },
        readonly: true,
        path: 'main.ts',
        type: 'typescript'
      }
    };
  }
}
