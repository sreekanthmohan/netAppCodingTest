import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  imports: [
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatRippleModule
  ],
  exports: [
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatRippleModule
  ],
  declarations: []
})
export class MaterialModule { };