import React from 'react';
import { shallow } from 'enzyme';
import { FailureComponent } from './Failure';

describe('Component Failure', () => {
  it('should render without crashing', () => {
    const component = shallow(<FailureComponent />);
    expect(component).toBeTruthy();
  });
});
