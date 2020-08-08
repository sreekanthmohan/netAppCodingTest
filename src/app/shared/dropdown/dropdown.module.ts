import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
    ],
    declarations: [
        DropdownComponent
    ],
    exports: [DropdownComponent]
})
export class DropdownModule {
}
