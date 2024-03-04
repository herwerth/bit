import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartModule } from './line-chart.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';




@NgModule({
  declarations: [

    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LineChartModule
  ]
})
export class AppModule { }


export { LineChartModule };

