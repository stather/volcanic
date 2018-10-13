import {
  CONTACT_SHOW_ADD_CONTACT_PANEL,
} from '../../../../src/features/contact/redux/constants';

import {
  showAddContactPanel,
  reducer,
} from '../../../../src/features/contact/redux/showAddContactPanel';

describe('contact/redux/showAddContactPanel', () => {
  it('returns correct action by showAddContactPanel', () => {
    expect(showAddContactPanel()).toHaveProperty('type', CONTACT_SHOW_ADD_CONTACT_PANEL);
  });

  it('handles action type CONTACT_SHOW_ADD_CONTACT_PANEL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CONTACT_SHOW_ADD_CONTACT_PANEL }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
