import { Component, OnInit } from '@angular/core';
import { Career } from '../../interfaces/careers';
import { CareersService } from '../../../../../Core/services/careers.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../../../../Core/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectCareers, selectError, selectIsLoading } from '../../store/career.selectors';
import { CareerActions } from '../../store/career.actions';
import { AuthService } from '../../../../../Core/services/auth.service';

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
  currentUserRole: string | undefined;

  private destroy$ = new Subject<void>();

  constructor(private careerService: CareersService,
    private store: Store<RootState>,
    private AuthService: AuthService,
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

    this.AuthService.authUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUserRole = user?.role; 
        
      });
  }

  deleteCareer(id: string) {
    this.careerService.deleteCareer(id);
  }

  editCareer(id: string) {
    this.careerService.setUpdateCareer(id);
  }

}