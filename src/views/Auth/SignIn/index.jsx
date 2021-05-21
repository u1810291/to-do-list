import React from 'react';

import { NormalInput } from '../../../components/Forms/Inputs';
import { useHandleSubmit } from './helper';
import { AuthContainer } from './style';

export default () => {
  const { formik } = useHandleSubmit();
  return (
    <AuthContainer>
      <NormalInput
        size="small"
        placeholder="Username"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username && formik.errors.username && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <NormalInput
        size="small"
        placeholder="Password"
        type={formik.touched.password && formik.errors.password && 'error'}
        helperText={formik.touched.password && formik.errors.password && formik.errors.password}
        value={formik.values.password}
        onChange={(e) => formik.setFieldValue('password', e.target.value)}
      />
    </AuthContainer>
  );
};
