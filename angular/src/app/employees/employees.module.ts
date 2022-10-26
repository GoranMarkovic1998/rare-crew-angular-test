import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EmployeesTimeDataService } from './employees-time-data.service';
import { MaterialModule } from './../material/material.module';
import { EmployeesOverviewResolver } from './employees-overview.resolver';
import { EmployeesDataService } from './employees-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesOverviewComponent } from './employees-overview/employees-overview.component';

@NgModule({
  declarations: [EmployeesOverviewComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
    NgxChartsModule,
  ],
  providers: [
    EmployeesDataService,
    EmployeesOverviewResolver,
    EmployeesTimeDataService,
  ],
})
export class EmployeesModule {}
