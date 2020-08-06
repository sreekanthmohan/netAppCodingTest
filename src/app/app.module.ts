import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DropdownComponent } from './shared-components/dropdown/dropdown.component';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer } from './store';
import { UsersActions } from './actions/users.actions';
import { UserListComponent } from './components/dashboard/user-list/user-list.component';
import { FiltersComponent } from './components/dashboard/filters/filters.component';
import { FilterActions } from './actions/filter.actions';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DropdownComponent,
    UserListComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [UsersActions, FilterActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [ ],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]
    );
  }
}
