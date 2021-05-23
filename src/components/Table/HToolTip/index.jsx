import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from '../../../hooks/use-window';
import { Container } from './style';
import { OptionButton } from '../ToolTip/style';
import Icon from '../../Icon';
import { useShowModal } from '../../../hooks/modal';

const caption = classNames(
  'button-medium',
  'weight-medium',
  'text-black-800',
  'ml-2'
);

const HeaderToolTip = ({
  open, data, stack, shipmentName, handleClose
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((globalState) => globalState);
  const modal = useShowModal();

  return (
    <Container open={open}>
      {data.map(({ name, icon, onClick: ItemClick }, index) => (
        <OptionButton
          onClick={() => {
            handleClose();
            ItemClick(index + 1, {
              history,
              dispatch,
              state,
              stack,
              shipmentName,
              ...modal
            });
          }}
          key={`${index + 1}`}
        >
          <Icon icon={icon} size="16px" color="#7e8299" />
          <span className={caption}>{name}</span>
        </OptionButton>
      ))}
    </Container>
  );
};
HeaderToolTip.propTypes = {
  open: PropTypes.bool
};

HeaderToolTip.defaultProps = {
  open: false
};

export default HeaderToolTip;
