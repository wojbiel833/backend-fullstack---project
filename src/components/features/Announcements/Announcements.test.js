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
        fetchPublishedPost: function () {},
      },
    ];

    const component = shallow(
      <AnnouncementsComponent
        fetchPublishedPost={posts.fetchPublishedPost}
        posts={posts}
      />
    );
    expect(component).toBeTruthy();
  });
});
