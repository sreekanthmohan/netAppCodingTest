import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgReduxModule } from '@angular-redux/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DropdownModule } from './shared/dropdown/dropdown.module';
import { RootEffects } from './store/users.effects';
import { StoreModule } from '@ngrx/store';
import { fromRoot } from './store';

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
    DropdownModule,
    EffectsModule.forRoot([RootEffects]),
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
