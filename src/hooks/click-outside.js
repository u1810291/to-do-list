import React, { useEffect, useRef } from 'react';

export function ClickOutside({ outsideClicked, children, outClickRef }) {
  const wrapper = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapper.current && !wrapper.current.contains(event.target)) {
        if (outClickRef && outClickRef.current && outClickRef.current.contains(event.target)) {
          return;
        }
        outsideClicked();
      }
    }
    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [wrapper, outsideClicked, outClickRef]);
  return <div ref={wrapper}>{children}</div>;
}
