import React from 'react';

import { Boxes } from './style';

export default () => (
  <Boxes>
    {[...Array(4)].map((_, index) => (
      <div key={`key-${index + 1}`} className="box">
        {[...Array(4)].map((_, index) => (
          <div key={`key-${index + 1}`} />
        ))}
      </div>
    ))}
  </Boxes>

);
