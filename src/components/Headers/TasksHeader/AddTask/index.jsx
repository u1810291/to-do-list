import React from 'react';

import { Container } from './style';
import { NormalInput } from '../../../Forms/Inputs';
import { PrimaryButton } from '../../../Buttons';

export default ({ hide }) => (
  <Container>
    <NormalInput placeholder="Email" />
    <NormalInput placeholder="Description" />
    <PrimaryButton title="Save" size="large" onClick={() => hide()} />
  </Container>
);
