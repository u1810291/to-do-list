import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from '../../../hooks/use-window';
import { Button, ToolTip, OptionButton } from './style';
import Icon from '../../Icon';
import { ClickOutside } from '../../../hooks/click-outside';
import { useShowModal } from '../../../hooks/modal';

const caption = classNames(
  'button-medium',
  'weight-medium',
  'text-black-800',
  'ml-2'
);

export default ({ index, indexT, setIndexT, data, itemId, iconName, query }) => {
  const [open, setOpen] = useState(false);
  const refClick = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((globalState) => globalState);
  const modal = useShowModal();
  return (
    <>
      <Button
        ref={refClick}
        onClick={() => {
          setIndexT(index);
          setOpen((prevState) => !prevState);
        }}
      >
        {!!iconName ? (
          <Icon icon={iconName} size={16} />
        ) : (
          <Icon icon='menu-dot' />
        )}
      </Button>
      <ClickOutside
        outClickRef={refClick}
        outsideClicked={() => {
          setOpen(false);
        }}
      >
        <ToolTip index={index} indexT={indexT} open={open}>
          {data.map(({ name, icon, onClick: ItemClick }, positionIndex) => (
            <OptionButton
              onClick={() =>
                ItemClick(itemId, {
                  history,
                  dispatch,
                  state,
                  query,
                  ...modal,
                })
              }
              key={`${positionIndex + 1}`}
            >
              <Icon icon={icon} size='16px' color='#7e8299' />
              <span className={caption}>{name}</span>
            </OptionButton>
          ))}
        </ToolTip>
      </ClickOutside>
    </>
  );
};
