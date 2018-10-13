import initialState from './initialState';
import { reducer as showSearchContactPanelReducer } from './showSearchContactPanel';
import {
  CONTACT_SHOW_ADD_CONTACT_PANEL,
} from '../../contact/redux/constants';
import {appStates} from './constants';

const reducers = [
  showSearchContactPanelReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
     case CONTACT_SHOW_ADD_CONTACT_PANEL:
      return {
        ...state, module: appStates.MOD_CONTACT
      };   default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
