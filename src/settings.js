export const api = {
  url:
    '//' +
    window.location.hostname +
    (window.location.hostname === 'localhost' ? ':3131' : ''),
  tables: 'tables',
  products: 'products',
  order: 'order',
  booking: 'booking',
  event: 'event',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';

export const POSTS_URL =
  process.env.NODE_ENV === 'production'
    ? '/uploads'
    : 'http://localhost:8000/posts';
