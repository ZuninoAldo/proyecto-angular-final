import { ActionReducerMap } from "@ngrx/store";
import { authFeatureName, authReducer, AuthState } from "./auth/auth.reducer";
import { careersFeatureKey, careersState, reducer as careersReducer } from "../../Features/dashboard/careers/store/career.reducer"; // <-- Importa tu reducer de carreras

export interface RootState {
    [authFeatureName]: AuthState;
    [careersFeatureKey]: careersState;
}

export const rootReducer: ActionReducerMap<RootState> = {
    [authFeatureName]: authReducer,
    [careersFeatureKey]: careersReducer,
}