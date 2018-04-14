import authReducer from '../../reducers/auth.js';

test('should set user id upon login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'sicco34nfios34fsd3'
  };
  const state = authReducer(undefined, action)
  expect(state.uid).toEqual(action.uid);
});

test('should remove user id user upon logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer(undefined, action)
  expect(state).toEqual({});
});