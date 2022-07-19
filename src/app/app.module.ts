import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { StarComponent } from './components/star/star.component';
import {menu, HeroIconModule} from 'ng-heroicon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    InputComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HeroIconModule.forRoot(
      {
        menu
      }, {
        defaultHostDisplay: "inlineBlock", // default ‘none’
        attachDefaultDimensionsIfNoneFound: true, // default ‘false’
      }
    ),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
