import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutComponent } from '../about/about.component';
import { PricingComponent } from '../pricing/pricing.component';
import { BookavehicleComponent } from '../bookavehicle/bookavehicle.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    PricingComponent,
    BookavehicleComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    PricingComponent,
    BookavehicleComponent,
    LoginComponent
  ]
})
export class HomeModule { }
