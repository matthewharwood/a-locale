import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldbankService } from './worldbank.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [WorldbankService],
  declarations: []
})
export class WorldbankModule { }
