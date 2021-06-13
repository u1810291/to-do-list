import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hide, show, pushFullScreen, popFullScreen
} from '../redux/modules/modal/actions';

export const useModal = () => useSelector(({ modalReducer }) => modalReducer);

export const useShowModal = () => {
  const dispatch = useDispatch();
  const showBlured = useCallback((props) => {
    dispatch(show({ ...props }));
  }, [dispatch]);
  const pushFullScreenModal = useCallback((props) => {
    dispatch(pushFullScreen({ ...props }));
  }, [dispatch]);
  return { showBlured, showFullScreen: pushFullScreenModal };
};

export const useHideModal = () => {
  const dispatch = useDispatch();
  const hideModal = useCallback(() => {
    dispatch(hide());
  }, [dispatch]);
  const popFullScreenModal = useCallback(() => {
    dispatch(popFullScreen());
  }, [dispatch]);

  return { hideModal, hideFullScreen: popFullScreenModal };
};
