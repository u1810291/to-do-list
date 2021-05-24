import React, { useState, useMemo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Tasks from '../../components/Tasks';
import TasksHeader from '../../components/Headers/TasksHeader';
import { Container } from './style';
import { useAddTask, header, headerToolTips } from './helper';
import { notify } from '../../redux/modules/notifications/actions';
import { fetchData } from '../../redux/modules/tasks/actions';

export default () => {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [sort, setSort] = useState();
  const {
    data, loading, total, error, success
  } = useSelector((state) => state.tasksReducer);

  const sortQuery = useMemo(() => {
    const found = sort && header.find(({ id }) => id === sort.id).accessor;
    return found
      ? `sort_field=${found}&sort_direction=${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);

  const query = useMemo(
    () => `&page=${pageIndex}&${sortQuery}`,
    [pageIndex, sortQuery]
  );

  const handleOnChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(fetchData(query));
    if (error) dispatch(notify({ message: error, icon: 'cross' }));
    if (success) dispatch(notify({ message: success, icon: 'ok' }));
  }, [query, error, success]);

  return (
    <Container>
      <TasksHeader useAddTask={useAddTask} />
      <Tasks
        pageSize={pageSize}
        headerToolTips={headerToolTips}
        data={data}
        total={total}
        header={header}
        loading={loading}
        setSort={setSort}
        onChange={handleOnChange}
      />
    </Container>
  );
};
