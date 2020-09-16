import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../../modules/home/home.module';
import { DefaultComponent } from './default.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
