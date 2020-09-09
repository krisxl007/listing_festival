import tokenValidator from './index';
import { createMemoryHistory } from 'history'

test('tokenValidator with invalid token', () => {
  const history = createMemoryHistory('/dashboard')

  expect(tokenValidator('name', history, '/')).toBeNull();
});

describe('matching cities to foods', () => {
  beforeAll(() => {
    sessionStorage.setItem('name', 'xxxxx');
  });

  afterAll(() => {
    sessionStorage.removeItem('name');
  });

  test('tokenValidator with valid token', () => {
    const history = createMemoryHistory('/dashboard')
  
    expect(tokenValidator('name', history, '/')).toMatch('xxxxx');
  });
});


