import React from 'react';
import { shallow } from 'enzyme';

import {{properCase componentName }} from '../{{dashCase componentName}}';

describe('<{{properCase componentName }} />', () => {
  const props = {};
  const component = shallow(<{{properCase componentName }} {...props} />);

  it('renders itself', () => {
    expect(component).toBeDefined();
  });
});
