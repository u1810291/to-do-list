import React, { useState, useMemo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Tasks from '../../components/Tasks';
import TasksHeader from '../../components/Headers/TasksHeader';
import { Container } from './style';
import { useAddTask, header } from './helper';
import { notify } from '../../redux/modules/notifications/actions';
import { fetchData } from '../../redux/modules/tasks/actions';

export default () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [sort, setSort] = useState();
  const { data, loading, error } = useSelector((state) => state.tasksReducer);
  const sortQuery = useMemo(() => {
    const found = sort && header.find(({ id }) => id === sort.id).accessor;
    return found
      ? `sort=${found},${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const query = useMemo(
    () => (pageIndex || sortQuery ? `&page=${pageIndex}&${sortQuery}` : ''),
    [pageIndex, pageSize, sortQuery]
  );

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(query));
  }, []);
  useEffect(() => {
    if (error) dispatch(notify({ message: error, icon: 'cross' }));
  }, [error]);

  return (
    <Container>
      <TasksHeader useAddTask={useAddTask} />
      <Tasks
        data={data}
        total={5}
        header={header}
        loading={loading}
        setSort={setSort}
        onChange={handleOnChange}
      />
    </Container>
  );
};
