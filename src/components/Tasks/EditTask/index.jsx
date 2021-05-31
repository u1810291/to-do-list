import React from 'react';

import { NormalInput } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';
import { Container, Form } from '../style';

export default ({ id, edit }) => {
  const { formik } = edit(id);
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <NormalInput
          placeholder="Text"
          value={formik.values.text}
          onChange={(e) => formik.setFieldValue('text', e.target.value)}
          size="large"
          white
        />
        <PrimaryButton title="Save" type="submit" size="large" />
      </Form>
    </Container>
  );
};
