import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookinglistComponent } from './bookinglist.component';



@NgModule({
  declarations: [BookinglistComponent],
  imports: [
    CommonModule
  ],
  exports: [BookinglistComponent]
})
export class BookinglistModule { }
