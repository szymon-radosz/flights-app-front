import '@testing-library/jest-dom/extend-expect';

// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock('next/router', () => require('next-router-mock'));

jest.mock('firebase/analytics', () => ({
  getAnalytics: () => ({}),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/404',
    push: jest.fn(),
    replace: jest.fn(),
    query: {},
    asPath: '/404',
  }),
}));
