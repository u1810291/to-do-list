import React, { useState } from 'react';
import Button from '../../../components/Buttons/Primary';
import DropDown from '../../../components/Forms/DropDown/Single';
import { UpdateCell } from './style';

export default () => {
  const status = [
    { id: 0, title: 'Not completed' },
    { id: 1, title: 'Not completed edited by admin' },
    { id: 10, title: 'Completed' },
    { id: 11, title: 'Completed and edited by admin' }
  ];
  const [statusId, setStatusId] = useState();
  const onSelect = (value) => {
    setStatusId(value);
  };
  return (
    <UpdateCell>
      <DropDown
        onSelect={onSelect}
        className="my-1"
        placeholder="select"
        options={status}
      />
      <Button
        className="my-1"
        title="UPDATE"
        block
        onClick={() => console.log(statusId)}
      />
    </UpdateCell>
  );
};
