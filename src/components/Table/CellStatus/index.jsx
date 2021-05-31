import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Container, Wrapper, Header, Body
} from './style';
import { ClickOutside } from '../../../hooks/click-outside';

const titleClass = classNames(
  'body-large',
  'weight-semibold',
  'text-black-800'
);
const CellStatus = ({
  id, name, color, title, component
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      onClick={() => setOpen(true)}
      status={id}
      color={color}
      className={classNames('overline', 'weight-regular', 'table-status-cell')}
    >
      {name}
      <ClickOutside outsideClicked={() => setOpen(false)}>
        {open && title && component && (
          <Wrapper className="shadow-primary-2">
            <Header className={titleClass}>{title}</Header>
            <Body>{component}</Body>
          </Wrapper>
        )}
      </ClickOutside>
    </Container>
  );
};

export default CellStatus;
