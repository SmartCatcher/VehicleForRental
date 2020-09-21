import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotpwdComponent } from './forgotpwd.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ForgotpwdComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  
  ]
})
export class ForgotpwdModule { }
