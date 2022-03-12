import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import * as fromSecondaryNav from './selector';



describe('Selectors', () => {
  
  it('should select the tabs state', () => {
    const result = fromSecondaryNav.selectTabs({
      [fromSecondaryNav.secondaryNavigationFeatureKey]: {
        ...fromSecondaryNav.initialState,
        tabs: [],
      },
    });

    expect(result).toEqual([]);
  });
});
