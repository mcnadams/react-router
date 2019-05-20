import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color', () => {
  it('Color', () => {
    const match = {
      params: {
        color: 'pink'
      }
    };
    const wrapper = shallow(<Color match={match} />);
    expect(wrapper).toMatchSnapshot();
  });
});
