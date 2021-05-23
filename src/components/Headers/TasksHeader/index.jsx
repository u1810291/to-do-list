import React from 'react';
import { SearchInput } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

import { Container } from './style';
import { useShowModal } from '../../../hooks';
import AddTask from './AddTask';

export default () => {
  const { showBlured } = useShowModal();
  return (
    <Container>
      <SearchInput placeholder="Search..." />
      <PrimaryButton
        title="Add Task"
        size="large"
        onClick={() => showBlured({
          title: 'Add Task',
          body: () => <AddTask />
        })}
      />
    </Container>
  );
};
