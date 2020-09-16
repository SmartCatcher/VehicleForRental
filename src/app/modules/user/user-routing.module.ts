import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '',
    component: UserComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'changepwd', component: ChangePwdComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'bookinglist', component: BookinglistComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
