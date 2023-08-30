import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localesEs  from '@angular/common/locales/es';
import localesFr  from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PersonalizedPipe } from './pipes/personalized.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localesEs);
registerLocaleData(localesFr);

@NgModule({
  declarations: [
    AppComponent,
    PersonalizedPipe,
    DomsafePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
