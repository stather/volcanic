import {
  CONTACT_CONTACT_SELECTED,
} from '../../../../src/features/contact/redux/constants';

import {
  contactSelected,
  reducer,
} from '../../../../src/features/contact/redux/contactSelected';

describe('contact/redux/contactSelected', () => {
  it('returns correct action by contactSelected', () => {
    expect(contactSelected()).toHaveProperty('type', CONTACT_CONTACT_SELECTED);
  });

  it('handles action type CONTACT_CONTACT_SELECTED correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CONTACT_CONTACT_SELECTED }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
