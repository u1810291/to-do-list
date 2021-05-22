import React from 'react';

import Tasks from '../../components/Tasks';
import TasksHeader from '../../components/Headers/TasksHeader';
import { Container } from './style';

export default () => (
  <Container>
    <TasksHeader />
    <Tasks />
  </Container>
);
