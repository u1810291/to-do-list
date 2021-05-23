import React from 'react';
import { SearchInput } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

import { Container } from './style';

export default () => (
  <Container>
    <SearchInput placeholder="Search..." />
    <PrimaryButton title="Add Task" size="large" />
  </Container>
);
