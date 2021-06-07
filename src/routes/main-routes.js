/* eslint-disable import/no-anonymous-default-export */
import SignIn from '../views/Auth/SignIn';
import Dashboard from '../views/Tasks';

export default [
  {
    exact: true,
    path: '/tasks',
    component: Dashboard,
    icon: 'tasks',
    title: 'Tasks',
    children: []
  },
  {
    exact: true,
    path: '/signin',
    component: SignIn,
    icon: 'signin',
    title: 'Sign In',
    children: []
  }
];
