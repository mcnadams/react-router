import React from 'react';
import { shallow } from 'enzyme';
import Yellow from './Yellow';

describe('Yellow', () => {
  it('Yellow', () => {
    const wrapper = shallow(<Yellow />);
    expect(wrapper).toMatchSnapshot();
  });
});
