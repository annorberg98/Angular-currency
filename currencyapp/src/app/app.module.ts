import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RatesComponent } from './rates/rates.component';
import { UiSwitchModule } from 'ngx-toggle-switch';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
