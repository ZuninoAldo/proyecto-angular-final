import { Component } from '@angular/core';
import { Student } from '../../interfaces/students';

@Component({
  selector: 'students-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = [
    'name',
    'lastName',
    'email',
    'career',
  ];

  dataSource: Student[] = [];

  students: Student[] = [];

  constructor() {
    this.dataSource = this.students;
  }

}
