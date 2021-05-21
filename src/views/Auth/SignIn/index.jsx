import React from 'react';

import { NormalInput } from '../../../components/Forms/Inputs';
import { useHandleSubmit } from './helper';

export default () => {
  const { formik } = useHandleSubmit();
  return (
    <div>
      <NormalInput title="Email" value={formik.values.email} onChange={(e) => formik.setFieldValue(e.target.value)} size="large" />
    </div>
  );
};
