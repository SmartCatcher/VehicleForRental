import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactusComponent } from '../../modules/contactus/contactus.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class DefaultModule { }
