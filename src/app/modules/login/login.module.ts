import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
