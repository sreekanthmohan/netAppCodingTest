import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer } from './store';
import { UsersActions } from './actions/users.actions';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DropdownModule } from './shared/dropdown/dropdown.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule,
    MaterialModule,
    BrowserAnimationsModule,
    UsersModule,
    DashboardModule,
    DropdownModule
  ],
  providers: [UsersActions],
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
