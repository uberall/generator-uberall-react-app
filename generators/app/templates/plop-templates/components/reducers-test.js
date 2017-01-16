import {{ camelCase componentName }}Reducer from '../reducers';

describe('{{ camelCase name }}Reducer', () => {
  it('returns the initial state', () => {
    expect({{camelCase componentName }}Reducer(undefined, {})).toEqual({});
  });
});
