import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePwdComponent } from './change-pwd.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ChangePwdComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ChangePwdComponent]
})
export class ChangePwdModule { }
