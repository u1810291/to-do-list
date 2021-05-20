import React from 'react';
import {
  Container,
  Content,
  Header,
  Title,
  CloseButton,
  CloseIcon,
  Body
} from './style';
import { useModal, useHideModal } from '../../../hooks/modal';

export default () => {
  const { blured: modal } = useModal();
  const { hideModal } = useHideModal();

  return (
    <Container show={modal.show}>
      <Content maxWidth={modal.maxWidth} overflow={modal.overflow}>
        <Header>
          <Title className="noselect">{modal.title || 'Title'}</Title>
          <CloseButton onClick={hideModal}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <Body overflow={modal.overflow}>
          {(modal.body && <modal.body />) || 'Body'}
        </Body>
      </Content>
    </Container>
  );
};
