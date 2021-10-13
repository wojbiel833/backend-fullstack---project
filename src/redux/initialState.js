// initial state
export const initialState = {
  posts: {
    editMode: false,
    data: [
      {
        id: '00000000001',
        name: 'Kupię',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        email: 'example1@gmail.com',
        phone: '0 700 800 774',
        localization: 'Warszawa',
        publicationDate: '01.01.1900',
        actualisationDate: '02.02.1900',
        status: 'Opublikowane',
      },
      {
        id: '00000000002',
        name: 'Sprzedam',
        content:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        email: 'example2@gmail.com',
        phone: '0 700 800 774',
        localization: 'Wrocław',
        publicationDate: '01.01.1900',
        actualisationDate: '02.02.1900',
        status: 'Opublikowane',
      },
      {
        id: '00000000003',
        name: 'Wynajmę',
        content:
          'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        email: 'example3@gmail.com',
        phone: '0 700 800 774',
        localization: 'Katowice',
        publicationDate: '01.01.1900',
        actualisationDate: '02.02.1900',
        status: 'Opublikowane',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  login: { loggedIn: false, email: 'example1@gmail.com', admin: false },
};
