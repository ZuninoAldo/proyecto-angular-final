import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/students';
import { StudentsService } from '../../../../Core/services/students.service';

@Component({
  selector: 'students-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'lastName',
    'email',
    'career',
  ];

  dataSource: Student[] = [];

  constructor(private studentsService: StudentsService) { }
  
  ngOnInit(): void {
    this.studentsService.getStudentsObs();
    this.studentsService.students$.subscribe((data) => {
      this.dataSource = data;
    });
}

}
