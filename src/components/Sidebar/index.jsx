/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from './Header';
import Body from './Body';
import { BodyContainer } from './style';
import ContainerLayout from './Wrapper';

export default () => (
  <ContainerLayout>
    <Header />
    <BodyContainer>
      <Body />
    </BodyContainer>
  </ContainerLayout>
);
