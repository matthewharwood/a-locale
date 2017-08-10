import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldbankModule } from './worldbank/worldbank.module';
import { WorldbankService } from './worldbank/worldbank.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorldbankModule,
  ],
  providers: [WorldbankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
