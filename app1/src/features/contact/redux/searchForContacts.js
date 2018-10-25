// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  CONTACT_SEARCH_FOR_CONTACTS,
} from './constants';

export function searchForContacts(val) {
  return {
    type: CONTACT_SEARCH_FOR_CONTACTS,
    val: val
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CONTACT_SEARCH_FOR_CONTACTS:
      return {
        ...state, val: action.val
      };

    default:
      return state;
  }
}
