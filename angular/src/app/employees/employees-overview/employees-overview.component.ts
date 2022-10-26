import { EmployeesTime } from './../employees-time';
import { EmployeesTimeDataService } from '../employees-time-data.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-employees-overview',
  templateUrl: './employees-overview.component.html',
  styleUrls: ['./employees-overview.component.css'],
})
export class EmployeesOverviewComponent implements OnInit {
  employees: Employee[];
  employeesWithHours: EmployeesTime[] = [];
  displayedColumns: string[] = ['EmployeeName', 'TotalHoursPerMonth'];

  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Right;
  legendTitle: string = 'Employee name';

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeesTimeDataService: EmployeesTimeDataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data) => (this.employees = data['employees'])
    );

    this.employeesTimeDataService.SetTotalHoursPerMonth(
      this.employees,
      this.employeesWithHours
    );

    this.employeesWithHours = this.employeesWithHours.filter((e) => {
      return e.name == null ? false : true;
    });

    this.employeesTimeDataService.SortByTotalHours(this.employeesWithHours);
  }
}
