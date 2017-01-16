const DEFAULT_ACTION = 'DEFAULT_ACTION';

const defaultAction = payload => ({
  type: DEFAULT_ACTION,
  payload
});

export {
  // Exported action types
  DEFAULT_ACTION,
  defaultAction
};
