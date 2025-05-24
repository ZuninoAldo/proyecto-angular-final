import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Career } from '../interfaces/careers';



export const CareerActions = createActionGroup({
  source: 'Career/API',
  events: {
    'Load Careers': emptyProps(),
    'Load Careers Success': props<{ careers: Career[] }>(),
    'Load Careers Failure': props<{ error: string }>(),
    // 'Add Career': props<{ career: Career }>(),
    // 'Upsert Career': props<{ career: Career }>(),
    // 'Add Careers': props<{ careers: Career[] }>(),
    // 'Upsert Careers': props<{ careers: Career[] }>(),
    // 'Update Career': props<{ career: Update<Career> }>(),
    // 'Update Careers': props<{ careers: Update<Career>[] }>(),
    // 'Delete Career': props<{ id: string }>(),
    // 'Delete Careers': props<{ ids: string[] }>(),
    // 'Clear Careers': emptyProps(),
  }
});
