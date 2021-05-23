import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PageButtons,
  ChangeButtons,
  Button,
  ChangeButton,
  IconLeft,
  IconRight
} from './style';
import { useButtons } from './useButtons';

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  pageIndex
}) => {
  const buttons = useButtons({ pageCount, pageIndex });

  const handlePageChange = (title) => {
    if (title !== '...') gotoPage(Number(title));
  };

  return (
    <Container>
      <PageButtons repeat={pageCount > 3 ? 3 : pageCount}>
        {buttons.map((title, index) => (
          <Button
            key={`${index + 1}`}
            onClick={() => handlePageChange(title)}
            // eslint-disable-next-line eqeqeq
            active={pageIndex == title}
          >
            {title !== '...' ? title + 1 : title}
          </Button>
        ))}
      </PageButtons>
      <ChangeButtons>
        <ChangeButton
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          <IconRight
            color={!canPreviousPage ? '#C4C4C4' : '#262626'}
          />
        </ChangeButton>
        <ChangeButton
          disabled={!canNextPage}
          onClick={nextPage}
        >
          <IconLeft
            color={!canNextPage ? '#C4C4C4' : '#262626'}
          />
        </ChangeButton>
      </ChangeButtons>
    </Container>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number
};
Pagination.defaultProps = {
  pageCount: 40
};

export default Pagination;
