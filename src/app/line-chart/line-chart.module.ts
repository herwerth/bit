import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';


import { LineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [LineChartComponent],
  imports: [ChartsModule],
  exports: [LineChartComponent],
})
export class LineChartModule {}
