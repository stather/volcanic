// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { appStates } from '../../home/redux/constants';

import {
  CONTACT_CONTACT_SELECTED,
} from './constants';

export function contactSelected(selected) {
  return {
    type: CONTACT_CONTACT_SELECTED,
    selected: selected,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CONTACT_CONTACT_SELECTED:
      return {
        ...state, selected: action.selected, module: appStates.MOD_CONTACT_EDIT
      };

    default:
      return state;
  }
}
