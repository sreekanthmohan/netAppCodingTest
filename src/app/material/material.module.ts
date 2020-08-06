import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatRippleModule
} from '@angular/material';


@NgModule({
  imports: [
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatRippleModule
  ],
  exports: [
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatRippleModule
  ],
  declarations: []
})
export class MaterialModule { };