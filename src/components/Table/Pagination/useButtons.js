import { useMemo } from 'react';

export const useButtons = ({ pageCount, pageIndex }) => useMemo(() => {
  if (pageCount >= 7) {
    const bridge = Array.from({ length: 7 }).map((_, i) => i);
    const all = Array.from({ length: pageCount }).map((_, i) => i);
    if (pageIndex < 3) {
      bridge[5] = '...';
      bridge[6] = pageCount - 1;
    } else if (pageIndex >= 3 && pageIndex < pageCount - 3) {
      bridge[1] = '...';
      [bridge[2], bridge[3], bridge[4]] = all.splice(pageIndex - 1, 3);
      bridge[5] = '...';
      bridge[6] = pageCount - 1;
    } else {
      bridge[1] = '...';
      [bridge[2], bridge[3], bridge[4], bridge[5], bridge[6]] = all.splice(pageCount - 5);
    }
    return bridge;
  }
  return Array.from({ length: pageCount }).map((_, i) => i);
}, [pageIndex, pageCount]);
