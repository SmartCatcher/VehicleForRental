import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { DefaultComponent } from './default.component';
import { ContactusComponent } from '../../modules/contactus/contactus.component';
import { HomeComponent } from '../../modules/home/home.component';
import { UserComponent } from '../../modules/user/user.component';
import { BookavehicleComponent } from '../../modules/bookavehicle/bookavehicle.component';
import { LoginComponent } from '../../modules/login/login.component';
import { PricingComponent } from '../../modules/pricing/pricing.component';


const routes: Routes = [
  { path: '', component: DefaultComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'bookavehicle', component: BookavehicleComponent },
      { path: 'user', component: UserComponent, loadChildren: () => import('../../modules/user/user.module').then(m => m.UserModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
