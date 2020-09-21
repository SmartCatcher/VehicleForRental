import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookavehicleComponent } from './bookavehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [BookavehicleComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    LayoutModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BookavehicleComponent]
})
export class BookavehicleModule { }
