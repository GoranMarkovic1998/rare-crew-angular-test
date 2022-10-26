import { EmployeesDataService } from './employees-data.service';
import { Employee } from './employee';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployeesOverviewResolver implements Resolve<Employee[]> {
  constructor(private employeesService: EmployeesDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[]> {
    return this.employeesService.getEmployees();
  }
}
