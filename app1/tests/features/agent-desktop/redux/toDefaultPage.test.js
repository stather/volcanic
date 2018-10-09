import {
  AGENT_DESKTOP_TO_DEFAULT_PAGE,
} from '../../../../src/features/agent-desktop/redux/constants';

import {
  toDefaultPage,
  reducer,
} from '../../../../src/features/agent-desktop/redux/toDefaultPage';

describe('agent-desktop/redux/toDefaultPage', () => {
  it('returns correct action by toDefaultPage', () => {
    expect(toDefaultPage()).toHaveProperty('type', AGENT_DESKTOP_TO_DEFAULT_PAGE);
  });

  it('handles action type AGENT_DESKTOP_TO_DEFAULT_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: AGENT_DESKTOP_TO_DEFAULT_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
