import { MaterialModule } from './../material/material.module';
import { EmployeesOverviewResolver } from './employees-overview/employees-overview.resolver';
import { EmployeesDataService } from './employees-overview/employees-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesOverviewComponent } from './employees-overview/employees-overview.component';

@NgModule({
  declarations: [EmployeesOverviewComponent],
  imports: [CommonModule, EmployeesRoutingModule, MaterialModule],
  providers: [EmployeesDataService, EmployeesOverviewResolver],
})
export class EmployeesModule {}
