import React from 'react';
import { Container } from './style';
import Table from '../Table';

export default ({
  data,
  total,
  header,
  loading,
  setSort,
  onChange
}) => (
  <Container>
    Tasks
    <Table
      data={data}
      total={total}
      header={header}
      loading={loading}
      setSort={setSort}
      onChange={onChange}
    />
  </Container>
);
