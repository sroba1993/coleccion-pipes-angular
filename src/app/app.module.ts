import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localesEs  from '@angular/common/locales/es';
import localesFr  from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PersonalizedPipe } from './pipes/personalized.pipe';

registerLocaleData(localesEs);
registerLocaleData(localesFr);

@NgModule({
  declarations: [
    AppComponent,
    PersonalizedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
