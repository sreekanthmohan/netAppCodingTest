import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { FiltersComponent } from './filters/filters.component';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    FiltersComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
