// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  CONTACT_CONTACTS_LOADED,
} from './constants';

export function contactsLoaded(contacts) {
  return {
    type: CONTACT_CONTACTS_LOADED,
    contacts: contacts
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CONTACT_CONTACTS_LOADED:
      return {
        ...state, contacts: action.contacts
      };

    default:
      return state;
  }
}
