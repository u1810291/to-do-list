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
    {console.log(data)}
    <Table
      data={data}
      total={total}
      headers={header}
      loading={loading}
      setSort={setSort}
      onChange={onChange}
    />
  </Container>
);
