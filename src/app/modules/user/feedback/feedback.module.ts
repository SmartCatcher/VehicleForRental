import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [FeedbackComponent]
})
export class FeedbackModule { }
