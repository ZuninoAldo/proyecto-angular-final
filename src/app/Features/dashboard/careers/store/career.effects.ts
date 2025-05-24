import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CareerActions } from './career.actions';
import { catchError, concatMap, map } from 'rxjs';
import { CareersService } from '../../../../Core/services/careers.service';


@Injectable()
export class CareerEffects {

  loadCareers$: any;

  constructor(private actions$: Actions, private careersService: CareersService) {

      this.loadCareers$ = createEffect(
        () => {
    
          return this.actions$.pipe(ofType(CareerActions.loadCareers),
            concatMap(() =>
              this.careersService.getCareers().pipe(
                map((careers) => {
                  return CareerActions.loadCareersSuccess({ careers });
                }),
                catchError((error) => {
                  return [CareerActions.loadCareersFailure({ error })];
                })
              )
            )
          );
        },
    
        { dispatch: true } 
      );
  }
}
