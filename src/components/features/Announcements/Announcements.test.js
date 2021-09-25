import React from 'react';
import { shallow } from 'enzyme';
import { AnnouncementsComponent } from './Announcements';

describe('Component Announcements', () => {
  it('should render without crashing', () => {
    const component = shallow(<AnnouncementsComponent />);
    expect(component).toBeTruthy();
  });
});
