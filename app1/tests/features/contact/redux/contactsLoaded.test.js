import {
  CONTACT_CONTACTS_LOADED,
} from '../../../../src/features/contact/redux/constants';

import {
  contactsLoaded,
  reducer,
} from '../../../../src/features/contact/redux/contactsLoaded';

describe('contact/redux/contactsLoaded', () => {
  it('returns correct action by contactsLoaded', () => {
    expect(contactsLoaded()).toHaveProperty('type', CONTACT_CONTACTS_LOADED);
  });

  it('handles action type CONTACT_CONTACTS_LOADED correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CONTACT_CONTACTS_LOADED }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
