import React, { useState, useMemo } from 'react';

import { useSelector } from 'react-redux';
import Tasks from '../../components/Tasks';
import TasksHeader from '../../components/Headers/TasksHeader';
import { Container } from './style';
import { useAddTask, header, data } from './helper';

export default () => {
  const [pageIndex, setPageIndex] = useState();
  const [pageSize, setPageSize] = useState();
  const [sort, setSort] = useState();
  const { error } = useSelector((state) => state.tasksReducer);
  console.log(error);
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
      <TasksHeader useAddTask={useAddTask} />
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
