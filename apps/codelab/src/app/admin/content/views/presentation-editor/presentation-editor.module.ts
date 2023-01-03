import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SlideEditorModule } from './slide-editor';
import { SidePanelModule } from './side-panel';
import { PresentationEditorComponent } from './presentation-editor.component';

@NgModule({
  imports: [
    CommonModule,
    SlideEditorModule,
    SidePanelModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [PresentationEditorComponent],
})
export class PresentationEditorModule {
}
