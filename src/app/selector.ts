import { createSelector, createFeatureSelector } from '@ngrx/store';

export const secondaryNavigationFeatureKey = 'feature_key';

export interface GlobalState {
  [secondaryNavigationFeatureKey]: LocalState;
}

export interface LocalState {
  page: string;
  tabs: { name: string }[];
}

export const initialState: LocalState = { page: 'default', tabs: [] };

export const selectSecondaryNavigationState = createFeatureSelector<LocalState>(
  secondaryNavigationFeatureKey
);

export const selectTabs = createSelector(
  selectSecondaryNavigationState,
  (state) => state.tabs
);
