/* eslint-disable import/no-anonymous-default-export */
import Dashboard from '../views/Dashboard';

export default [
  {
    exact: true,
    path: '/tasks',
    component: Dashboard,
    icon: 'tasks',
    title: 'Tasks',
    children: []
  }
];
