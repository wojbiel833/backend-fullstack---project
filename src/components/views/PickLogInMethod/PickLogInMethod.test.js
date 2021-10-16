import React from 'react';
import { shallow } from 'enzyme';
import { PickLogInMethodComponent } from './PickLogInMethod';

describe('Component PickLogInMethod', () => {
  it('should render without crashing', () => {
    const component = shallow(<PickLogInMethodComponent />);
    expect(component).toBeTruthy();
  });
});
