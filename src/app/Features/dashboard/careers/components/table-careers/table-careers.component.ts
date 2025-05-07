import { Component, OnInit } from '@angular/core';
import { Career } from '../../interfaces/careers';
import { CareersService } from '../../../../../Core/services/careers.service';

@Component({
  selector: 'app-table-careers',
  standalone: false,
  templateUrl: './table-careers.component.html',
  styleUrl: './table-careers.component.scss'
})
export class TableCareersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'vermas'];
  dataSource2: Career[] = [];

  constructor(private careerService: CareersService) { }

  ngOnInit(): void {
    this.careerService.getCareers();
    this.careerService.career$.subscribe({
      next: (data) => {
        this.dataSource2 = data;
      },
      error: (error) => {
        console.error('Error al recibir los datos de las carreras.', error);
      },
    });
  }

  deleteCareer(id: string) {
    this.careerService.deleteCareer(id);
  }

  editCareer(id: string) {
    this.careerService.setUpdateCareer(id);
  }

}