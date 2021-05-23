import React, { useState, useMemo } from 'react';

import Tasks from '../../components/Tasks';
import TasksHeader from '../../components/Headers/TasksHeader';
import { Container } from './style';

export default () => {
  const [pageIndex, setPageIndex] = useState();
  const [pageSize, setPageSize] = useState();
  const [sort, setSort] = useState();
  const data = [{
    id: 1,
    email: 'some@mail.com',
    description: 'Complete Todo task manager',
    status: 'open'
  }, {
    id: 2,
    email: 'some2@mail.com',
    description: '2 Complete Todo task manager',
    status: 'open'
  }, {
    id: 3,
    email: '3some@mail.com',
    description: '3 Complete Todo task manager',
    status: 'open'
  }, {
    id: 4,
    email: '4some@mail.com',
    description: '4 Complete Todo task manager',
    status: 'open'
  }, {
    id: 5,
    email: '5some@mail.com',
    description: '5 Complete Todo task manager',
    status: 'open'
  }];
  const header = [
    {
      id: 1,
      accessor: 'id'
    },
    {
      id: 2,
      accessor: 'email'
    },
    {
      id: 3,
      accessor: 'description'
    },
    {
      id: 4,
      accessor: 'status'
    }
  ];

  const sortQuery = useMemo(() => {
    const found = sort && header.find(({ id }) => id === sort.id).accessor;
    return found
      ? `&sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const query = useMemo(
    () => `?page=${pageIndex}&size=${pageSize}&${sortQuery}`,
    [pageIndex, pageSize, sortQuery]
  );

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  return (
    <Container>
      <TasksHeader />
      <Tasks
        query={query}
        data={data}
        total={5}
        header={header}
        loading={false}
        setSort={setSort}
        onChange={handleOnChange}
      />
    </Container>
  );
};
