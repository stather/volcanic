import {
  CONTACT_SEARCH_FOR_CONTACTS,
} from '../../../../src/features/contact/redux/constants';

import {
  searchForContacts,
  reducer,
} from '../../../../src/features/contact/redux/searchForContacts';

describe('contact/redux/searchForContacts', () => {
  it('returns correct action by searchForContacts', () => {
    expect(searchForContacts()).toHaveProperty('type', CONTACT_SEARCH_FOR_CONTACTS);
  });

  it('handles action type CONTACT_SEARCH_FOR_CONTACTS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CONTACT_SEARCH_FOR_CONTACTS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
