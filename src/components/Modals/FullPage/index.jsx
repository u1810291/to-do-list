import React, { useMemo } from 'react';
import {
  Container, Header, Backbutton, Content
} from './style';
import { useModal, useHideModal } from '../../../hooks/modal';

export default () => {
  const { fullScreen: { stack } } = useModal();
  const item = useMemo(() => stack[stack.length - 1], [stack]);
  const { hideFullScreen } = useHideModal();

  return item ? (
    <Container>
      <Header>
        <Backbutton onClick={hideFullScreen} />
        <Header.Title className="noselect">{item.title || 'Title'}</Header.Title>
      </Header>
      <Content>
        {(item.body && <item.body />) || 'Body'}
      </Content>
    </Container>
  ) : <></>;
};
