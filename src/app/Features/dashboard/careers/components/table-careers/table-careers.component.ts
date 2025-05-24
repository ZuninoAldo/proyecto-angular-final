import { Component, OnInit } from '@angular/core';
import { Career } from '../../interfaces/careers';
import { CareersService } from '../../../../../Core/services/careers.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../../../../Core/store';
import { Observable } from 'rxjs';
import { selectCareers, selectError, selectIsLoading } from '../../store/career.selectors';
import { CareerActions } from '../../store/career.actions';

@Component({
  selector: 'app-table-careers',
  standalone: false,
  templateUrl: './table-careers.component.html',
  styleUrl: './table-careers.component.scss'
})
export class TableCareersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'vermas'];
  dataSource2: Career[] = [];

  careers$: Observable<Career[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private careerService: CareersService,
    private store: Store<RootState>
  ) {
    this.careers$ = this.store.select(selectCareers);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(CareerActions.loadCareers());
    this.store.select(selectCareers).subscribe({
      next: (careers) => {
        this.dataSource2 = careers;
      },
      error: (error) => {
        console.error('Error al cargar las carreras:', error);
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