import React from 'react';
import { SearchInput } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

import { Container } from './style';
import { useShowModal, useHideModal } from '../../../hooks';
import AddTask from './AddTask';

export default ({ formik }) => {
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  return (
    <Container>
      <SearchInput placeholder="Search..." />
      <PrimaryButton
        title="Add Task"
        size="large"
        onClick={() => showBlured({
          title: 'Add Task',
          body: () => <AddTask formik={formik} hide={hideModal} />
        })}
      />
    </Container>
  );
};
