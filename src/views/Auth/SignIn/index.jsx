import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { NormalInput, PasswordInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import { useHandleSubmit } from './helper';
import { AuthContainer } from './style';
import { notify } from '../../../redux/modules/notifications/actions';

export default () => {
  const dispatch = useDispatch();
  const { formik } = useHandleSubmit();
  const { error } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (error) dispatch(notify({ message: error, icon: 'cross' }));
  }, [error]);
  return (
    <AuthContainer onSubmit={formik.handleSubmit}>
      <NormalInput
        size="small"
        placeholder="Username"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <PasswordInput
        size="small"
        placeholder="Password"
        type={formik.touched.password && formik.errors.password && 'error'}
        helperText={formik.touched.password && formik.errors.password && formik.errors.password}
        value={formik.values.password}
        onChange={(e) => formik.setFieldValue('password', e.target.value)}
      />
      <PrimaryButton size="small" title="login" type="submit" />
    </AuthContainer>
  );
};
