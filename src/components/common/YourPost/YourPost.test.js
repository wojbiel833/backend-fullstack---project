import React from 'react';
import { shallow } from 'enzyme';
import { YourPostComponent } from './YourPost';

describe('Component YourPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<YourPostComponent />);
    expect(component).toBeTruthy();
  });
});
