import { createFeature, createReducer, on } from '@ngrx/store';

import { CareerActions } from './career.actions';
import { Career } from '../interfaces/careers';

export const careersFeatureKey = 'careers';

export interface careersState {
  careers: Career[];
  isLoading: boolean;
  error: any;
}


export const initialState: careersState = {
  careers: [],
  isLoading: false,
  error: null,
}

export const reducer = createReducer(
  initialState,
  on(CareerActions.loadCareers, (state) => {


    return {
      ...state,
      isLoading: true,
    };
  }),
  on(CareerActions.loadCareersSuccess, (state, { careers }) => {
    return {
      ...state,
      isLoading: false,
      careers,
    };
  }),
  on(CareerActions.loadCareersFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error,
    };
  }),
);

export const careerFeature = createFeature({
  name: careersFeatureKey,
  reducer,
})