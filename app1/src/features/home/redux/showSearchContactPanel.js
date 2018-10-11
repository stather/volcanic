// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { appStates } from './constants';

import {
  HOME_SHOW_SEARCH_CONTACT_PANEL,
} from './constants';

export function showSearchContactPanel() {
  return {
    type: HOME_SHOW_SEARCH_CONTACT_PANEL,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_SHOW_SEARCH_CONTACT_PANEL:
      return {
        ...state, module: appStates.MOD_CONTACT_SEARCH
      };

    default:
      return state;
  }
}
