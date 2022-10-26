import { EmployeesOverviewResolver } from './employees-overview.resolver';
import { EmployeesOverviewComponent } from './employees-overview/employees-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeesOverviewComponent,
    resolve: {
      employees: EmployeesOverviewResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
