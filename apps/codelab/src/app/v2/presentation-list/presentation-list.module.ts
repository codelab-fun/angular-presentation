import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationListComponent } from './presentation-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SmallSlidePreviewModule } from '../../admin/content/views/presentation-preview/slide-preview/small-slide-preview';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    SmallSlidePreviewModule,
  ],
  declarations: [PresentationListComponent],
  exports: [PresentationListComponent],
})
export class PresentationListModule {
}
