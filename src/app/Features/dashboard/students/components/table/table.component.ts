import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../interfaces/students';
import { StudentsService } from '../../../../../Core/services/students.service';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from '../../../../../Core/services/users.service';
import { AuthService } from '../../../../../Core/services/auth.service';

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
  currentUserRole: string | undefined;

  private destroy$ = new Subject<void>();

  constructor(
    private studentsService: StudentsService,
    private usersService: UsersService,
    private AuthService: AuthService,
  ) {
    this.currentUserRole = 'admin';
  }
  
  ngOnInit(): void {
    this.studentsService.getStudentsObs();
    this.studentsService.students$.subscribe((data) => {
      this.dataSource = data;
    });

    this.AuthService.authUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.currentUserRole = user?.role; 
        
      });
}

deleteStudent(id: string){
this.studentsService.deleteStudent(id);
}

editStudent(id: string){
  this.studentsService.setUpdateStudent(id);
}

}
