import { Employee } from '../employee';
import { Injectable } from '@angular/core';
import { EmployeesTime } from '../employees-time';

@Injectable()
export class EmployeesTimeDataService {
  testStartDate: Date;
  testEndDate: Date;
  totalHoursPerDay: number;

  constructor() {}

  SetTotalHoursPerMonth(
    employees: Employee[],
    employeesWithHours: EmployeesTime[]
  ) {
    this.SetTotalHoursPerDay(employees);

    let totalHoursPerMonth = new Map<string, number>();

    employees.forEach((e) => {
      if (!totalHoursPerMonth.get(e.EmployeeName)) {
        totalHoursPerMonth.set(e.EmployeeName, 0);
      }
      totalHoursPerMonth.set(
        e.EmployeeName,
        totalHoursPerMonth.get(e.EmployeeName)! + e.TotalHoursPerDay
      );
    });

    totalHoursPerMonth.forEach((value, key) => {
      employeesWithHours.push({
        name: key,
        value: Math.round(value),
      });
    });
  }

  SetTotalHoursPerDay(employees: Employee[]) {
    employees.forEach((employee) => {
      this.testStartDate = new Date(employee.StarTimeUtc);
      this.testEndDate = new Date(employee.EndTimeUtc);
      this.totalHoursPerDay = parseFloat(
        (
          (this.testEndDate.getHours() * 60 +
            this.testEndDate.getMinutes() -
            (this.testStartDate.getHours() * 60 +
              this.testStartDate.getMinutes())) /
          60
        ).toFixed(5)
      );
      employee.TotalHoursPerDay = this.totalHoursPerDay;
    });
  }

  SortByTotalHours(employees: EmployeesTime[]) {
    employees.sort((e1, e2) => {
      if (e1.value < e2.value) return 1;
      if (e1.value > e2.value) return -1;
      return 0;
    });
  }
}
