import Tasks from '../views/Tasks';

export default [
  {
    exact: true,
    path: '/tasks',
    component: Tasks,
    icon: 'tasks',
    title: 'Tasks',
    children: []
  }
];
