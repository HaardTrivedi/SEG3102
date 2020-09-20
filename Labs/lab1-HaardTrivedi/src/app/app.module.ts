import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
