import React from 'react';

import { Container } from './style';
import { NormalInput } from '../../../Forms/Inputs';
import { PrimaryButton } from '../../../Buttons';

const AddTask = ({ useAddTask }) => {
  const { formik } = useAddTask();
  return (
    <Container onSubmit={formik.handleSubmit}>
      <NormalInput
        placeholder="Username"
        type={formik.touched.username && formik.errors.username && 'error'}
        helperText={formik.touched.username
        && formik.errors.username
        && formik.errors.username}
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue('username', e.target.value)}
      />
      <NormalInput
        placeholder="Email"
        type={formik.touched.email && formik.errors.email && 'error'}
        helperText={formik.touched.email
        && formik.errors.email
        && formik.errors.email}
        value={formik.values.email}
        onChange={(e) => formik.setFieldValue('email', e.target.value)}
      />
      <NormalInput
        placeholder="Description"
        type={formik.touched.description && formik.errors.description && 'error'}
        helperText={formik.touched.description
        && formik.errors.description
        && formik.errors.description}
        value={formik.values.description}
        onChange={(e) => formik.setFieldValue('description', e.target.value)}
      />
      <PrimaryButton
        title="Save"
        size="large"
        type="submit"
      />
    </Container>
  );
};
export default AddTask;
