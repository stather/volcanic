import initialState from './initialState';
import { reducer as showSearchContactPanelReducer } from './showSearchContactPanel';
import { CONTACT_SHOW_ADD_CONTACT_PANEL, CONTACT_CONTACT_SELECTED } from '../../contact/redux/constants';
import { appStates } from './constants';

const reducers = [showSearchContactPanelReducer];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    case CONTACT_SHOW_ADD_CONTACT_PANEL:
      return {
        ...state,
        module: appStates.MOD_CONTACT,
      };
    case CONTACT_CONTACT_SELECTED:
      return {
        ...state,
        selected: action.selected,
        module: appStates.MOD_CONTACT_EDIT,
      };

    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
