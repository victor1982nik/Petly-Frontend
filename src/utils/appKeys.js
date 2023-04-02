/**
 * File contains global application reusable keys.
 */

/**
 * Application main navigation routes.
 */
const ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  NEWS: '/news',
  NOTICES: '/notices',
  FRIENDS: '/friends',
  USERPAGE: '/user',
};

const CACHE_TAGS = {
  AUTH_LOGIN: 'AuthLogin',
  PETS: 'Pet',
};

/**
 * Application backend endpoints.
 */
const BACKEND_ENDPOINTS = {
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  CURRENT: 'auth/current',
  REFRESH: 'auth/refresh',
  USERS_PETS: 'users/pets',
  UPDATE_USER_INFO: 'users',
};

export const BACKEND_BASE_URL =
  // eslint-disable-next-line no-undef
  'https://petlybackend.onrender.com';
// process.env.REACT_APP_BACKEND_BASE_URL ?? 'http://localhost:4000';
export const FRONTEND_BASE_URL =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_FRONTEND_BASE_URL ?? 'http://localhost:3000';

export { ROUTES, BACKEND_ENDPOINTS, CACHE_TAGS };
