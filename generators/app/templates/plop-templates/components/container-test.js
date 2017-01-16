import React from 'react';
import { shallow } from 'enzyme';

import {{properCase componentName }}Container from '../{{dashCase componentName}}-container';

describe('<{{properCase componentName }}Container />', () => {
  const props = {
    store: {
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {}
    }
  };
  const container = shallow(<{{properCase componentName }}Container {...props} />);

  it('renders itself', () => {
    expect(container).toBeDefined();
  });
});
