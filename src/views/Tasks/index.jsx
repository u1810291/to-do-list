import React, { useState, useMemo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Tasks from '../../components/Tasks';
import { headerMaker } from '../../components/Table/helper';
import TasksHeader from '../../components/Headers/TasksHeader';
import { Container } from './style';
import {
  useAddTask, header, toolTips, dataMaker
} from './helper';
import { notify } from '../../redux/modules/notifications/actions';
import { fetchData } from '../../redux/modules/tasks/actions';

export default () => {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [sort, setSort] = useState();
  const [stack, setStack] = useState([]);
  const {
    data, loading, total, error, success
  } = useSelector((state) => state.tasksReducer);
  const tasks = useMemo(() => dataMaker(data), [data]);
  const sortQuery = useMemo(() => {
    const found = sort && header.find(({ id }) => id === sort.id).accessor;
    return found
      ? `sort_field=${found}&sort_direction=${sort.desc ? 'desc' : 'asc'}`
      : '';
  }, [sort]);
  const headers = useMemo(() => headerMaker(header), [header]);

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
        toolTips={toolTips}
        data={tasks}
        stack={stack}
        setStack={setStack}
        total={total}
        header={headers}
        loading={loading}
        setSort={setSort}
        onChange={handleOnChange}
      />
    </Container>
  );
};
