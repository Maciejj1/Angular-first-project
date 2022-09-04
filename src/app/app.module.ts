import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// \/-Import Lokalizacji dla naszej strony(Domyślnie Angular ma EN_US{Przydaje się jeśli chodzi o daty itd.})
import localPl from '@angular/common/locales/pl'
import localBn from '@angular/common/locales/bn'
import {registerLocaleData} from "@angular/common";
registerLocaleData(localPl);
registerLocaleData(localBn);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pl-PL'}],//LocaleID - Nadanie czytania wartości dla angulara aby zmienił lokalizację z EN-US na PL
  bootstrap: [AppComponent]
})
export class AppModule { }
