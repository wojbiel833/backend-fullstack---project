import React from 'react';
import { shallow } from 'enzyme';
import { AnnouncementsComponent } from './Announcements';

describe('Component Announcements', () => {
  it('should render without crashing', () => {
    const posts = [
      {
        id: 'id',
        name: 'name',
        content: 'content',
        email: 'email',
        phone: 'phone',
        localization: 'localization',
        publicationDate: 'publicationDate',
        actualisationDate: 'actualisationDate',
        status: 'status',
      },
    ];

    const component = shallow(<AnnouncementsComponent posts={posts} />);
    expect(component).toBeTruthy();
  });
});
