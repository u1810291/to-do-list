import React, { useState } from 'react';
import Button from '../../../components/Buttons/Primary';
import DropDown from '../../../components/Forms/DropDown/Single';
import { UpdateCell } from './style';

export default () => {
  const status = [
    { id: 0, value: 'Not completed' },
    { id: 1, value: 'Not completed edited by admin' },
    { id: 10, value: 'Completed' },
    { id: 11, value: 'Completed and edited by admin' }
  ];
  const [statusId, setStatusId] = useState(0);
  const onSelect = (value) => {
    setStatusId(value);
  };
  return (
    <UpdateCell>
      <DropDown
        size="large"
        onSelect={onSelect}
        className="my-1"
        placeholder="select"
        options={status}
      />
      <Button
        size="medium"
        className="my-1"
        title="UPDATE"
        block
        // eslint-disable-next-line no-console
        onClick={() => console.log(statusId)}
      />
    </UpdateCell>
  );
};
