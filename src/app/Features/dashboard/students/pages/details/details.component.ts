import { Component } from '@angular/core';
import { StudentsService } from '../../../../../Core/services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../interfaces/students';

@Component({
  selector: 'StudentsDetailsComponent',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  student: Student | undefined;
  isLoading: boolean = true;
  error: string | undefined;

  constructor(
    private StudentsService: StudentsService,
    private ActivatedRoute: ActivatedRoute ) {

    const id = this.ActivatedRoute.snapshot.paramMap.get('id');

    this.StudentsService.getById(id!).subscribe({
      next: (student: Student) => {
        this.isLoading = false;
        this.student = student;
      },
      error: (error: any) => {
        this.isLoading = false;
        this.error = error;
      }
    })
  }
}
