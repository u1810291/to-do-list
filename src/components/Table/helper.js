import React from 'react';
import StatusCell from './CellStatus';

export const headerMaker = (data) => data
  .map(({ type, ...rest }) => {
    if (type === 'status') {
      return {
        ...rest,
        // eslint-disable-next-line react/jsx-props-no-spreading
        Cell: ({ cell: { value } }) => <StatusCell {...value} />
      };
    }
    return rest;
  });
