import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/students';
import { StudentsService } from '../../../../../Core/services/students.service';

@Component({
  selector: 'students-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'lastName',
    'email',
    'career',
    'actions',
  ];

  dataSource: Student[] = [];
  currentUserRole: string;

  constructor(
    private studentsService: StudentsService,
  ) { 
    this.currentUserRole = 'admin';
  }
  
  ngOnInit(): void {
    this.studentsService.getStudentsObs();
    this.studentsService.students$.subscribe((data) => {
      this.dataSource = data;
    });
}

deleteStudent(id: string){
this.studentsService.deleteStudent(id);
}

editStudent(id: string){
  this.studentsService.setUpdateStudent(id);
}

}
