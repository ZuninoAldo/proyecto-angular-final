import { createFeatureSelector, createSelector } from "@ngrx/store";
import { careersFeatureKey, careersState } from "./career.reducer";

export const selectCareersState = 
    createFeatureSelector<careersState>(careersFeatureKey);

export const selectCareers = createSelector(
    selectCareersState,
    (state) => state.careers
);

export const selectIsLoading = createSelector(
    selectCareersState,
    (state) => state.isLoading
);

export const selectError = createSelector(
    selectCareersState,
    (state) => state.error
);