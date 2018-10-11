import {
  HOME_SHOW_SEARCH_CONTACT_PANEL,
} from '../../../../src/features/home/redux/constants';

import {
  showSearchContactPanel,
  reducer,
} from '../../../../src/features/home/redux/showSearchContactPanel';

describe('home/redux/showSearchContactPanel', () => {
  it('returns correct action by showSearchContactPanel', () => {
    expect(showSearchContactPanel()).toHaveProperty('type', HOME_SHOW_SEARCH_CONTACT_PANEL);
  });

  it('handles action type HOME_SHOW_SEARCH_CONTACT_PANEL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SHOW_SEARCH_CONTACT_PANEL }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
