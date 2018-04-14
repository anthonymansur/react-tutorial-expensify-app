import { login, logout } from '../../actions/auth.js';

test('should setup login action object', () => {
  const uid = 'uashdf23iu5r9ds2';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});

