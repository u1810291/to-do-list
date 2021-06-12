import Dashboard from '../views/Tasks';

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
