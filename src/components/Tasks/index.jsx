import React from 'react';
import { Container } from './style';
import Table from '../Table';

export default ({
  data,
  total,
  toolTips,
  header,
  loading,
  setSort,
  onChange,
  headerToolTips,
  stack,
  setStack
}) => (
  <Container>
    <Table
      data={data}
      total={total}
      toolTips={toolTips}
      headers={header}
      loading={loading}
      setSort={setSort}
      onChange={onChange}
      stack={stack}
      setStack={setStack}
      headerToolTips={headerToolTips}
    />
  </Container>
);
