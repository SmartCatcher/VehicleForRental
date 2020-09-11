import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [{
  path: '', component: DefaultComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent }]
  },
  { path: '', component: FullwidthComponent,
    children: [
      { path: 'login', component: LoginComponent }]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
