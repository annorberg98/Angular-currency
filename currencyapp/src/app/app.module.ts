import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { AppComponent } from './app.component';
import { RatesComponent } from './rates/rates.component';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    RatesComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    UiSwitchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
