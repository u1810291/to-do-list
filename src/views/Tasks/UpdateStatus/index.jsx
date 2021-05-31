import React from 'react';
import Button from '../../../components/Buttons/Primary';
import DropDown from '../../../components/Forms/DropDown/Single';
import { UpdateCell } from './style';

export default ({ id, edit }) => {
  const { formik } = edit(id);
  const status = [
    { id: 0, value: 'Not completed' },
    { id: 1, value: 'Not completed edited by admin' },
    { id: 10, value: 'Completed' },
    { id: 11, value: 'Completed and edited by admin' }
  ];
  return (
    <UpdateCell onSubmit={formik.handleSubmit}>
      <DropDown
        size="large"
        onSelect={(e) => formik.setFieldValue('status', e)}
        className="my-1"
        placeholder="select"
        options={status}
      />
      <Button
        size="medium"
        className="my-1"
        title="UPDATE"
        type="submit"
        block
      />
    </UpdateCell>
  );
};
