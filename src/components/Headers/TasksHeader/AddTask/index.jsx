import React from 'react';

import { Container } from './style';
import { NormalInput } from '../../../Forms/Inputs';
import { PrimaryButton } from '../../../Buttons';

export default ({ formik, hide }) => (
  <Container onSubmit={formik.handleSubmit}>
    <NormalInput 
      placeholder="Email" 
      value={} 
      />
    <NormalInput 
      placeholder="Description" 
    />
    <PrimaryButton 
      title="Save" 
      size="large" 
      onClick={() => hide()} 
    />
  </Container>
);
