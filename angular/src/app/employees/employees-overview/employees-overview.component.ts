import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-overview',
  templateUrl: './employees-overview.component.html',
  styleUrls: ['./employees-overview.component.css'],
})
export class EmployeesOverviewComponent implements OnInit {
  employees: Employee[];
  displayedColumns: string[] = [
    'Id',
    'EmployeeName',
    'StarTimeUtc',
    'EndTimeUtc',
    'TotalDailyHours',
    'EntryNotes',
    'DeletedOn',
  ];
  testStartDate: Date;
  testEndDate: Date;
  TotalDailyHours: number;
  result: Employee[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data) => (this.employees = data['employees'])
    );

    this.employees.forEach((employee) => {
      this.testStartDate = new Date(employee.StarTimeUtc);
      this.testEndDate = new Date(employee.EndTimeUtc);
      this.TotalDailyHours =
        this.testEndDate.getHours() * 60 +
        this.testEndDate.getMinutes() -
        (this.testStartDate.getHours() * 60 + this.testStartDate.getMinutes());
      this.TotalDailyHours = parseFloat((this.TotalDailyHours / 60).toFixed(3));
      employee.TotalDailyHours = this.TotalDailyHours;
    });
  }
}
