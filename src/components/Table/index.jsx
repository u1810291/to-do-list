/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useRef, useMemo, useState, useEffect
} from 'react';

import { useTable, useSortBy, usePagination } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Container,
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Wrapper,
  Cell,
  Icon,
  TREmpty,
  CheckBox,
  MenuButton
} from './style';
import Pagination from './Pagination';
import Spinner from '../Spinner';

const textClass = classNames(
  'button-large',
  'weight-regular',
  'text-black-800',
  'content'
);
const headerClass = classNames(
  'body-medium',
  'text-black-800',
  'weight-medium'
);

const CustomCheckbox = ({
  row, setStack, stack
}) => (
  <CheckBox
    type="checkbox"
    defaultChecked={stack.includes(row.original.id)}
    onChange={() => {
      if (stack.includes(row.original.id)) {
        stack.splice(stack.indexOf(row.original.id), 1);
        return setStack(stack);
      }
      return setStack((prev) => [...prev, row.original.id]);
    }}
  />
);

// toolTips = [{ name: String, icon: String, onClick: Function }]
// HeaderToolTips = [{ name: String, icon: String, onClick: Function }]
const CustomTable = ({
  toolTips,
  headerToolTips,
  headers,
  data,
  total,
  height,
  fetchData,
  loading,
  onChange,
  setSort
}) => {
  const refClick = useRef(null);
  const [openH, setOpenH] = useState(false);
  const notCheckable = useMemo(() => !headerToolTips.length, [headerToolTips]);
  const noActions = useMemo(() => !toolTips.length, [toolTips]);
  const [allChecked, setAllChecked] = useState([]);
  const [pgCount, setPgCount] = useState(0);
  const [stack, setStack] = useState([]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    pageOptions,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy }
  } = useTable(
    {
      columns: headers,
      data,
      manualSortBy: true,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: true,
      pageCount: pgCount,
      autoResetPage: false
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    // fetchData will be removed
    if (fetchData) fetchData({ pageIndex, pageSize });
    else onChange({ pageIndex, pageSize });
  }, [pageIndex, pageSize, onChange, fetchData]);

  useEffect(() => {
    const count = Math.ceil(total / pageSize);
    setPgCount(count);
  }, [pageSize, total]);

  useEffect(() => {
    const [sorted] = sortBy;
    setSort(sorted);
  }, [sortBy, setSort]);

  const getIcon = (isSorted, isDesc) => ({
    down: isDesc,
    up: !isDesc,
    df: !isSorted
  });
  return (
    <Container>
      <Wrapper
        height={height}
        vertical={false}
        ignoreElements="input, .content>span"
      >
        {loading ? (
          <Spinner contain />
        ) : (
          <>
            <Table {...getTableProps()}>
              <THead>
                {headerGroups.map((headerGroup) => (
                  <TR
                    {...headerGroup.getHeaderGroupProps()}
                    notCheckable={notCheckable}
                  >
                    {!notCheckable && (
                      <TH left>
                        <Cell>
                          <CheckBox
                            type="checkbox"
                            onChange={() => setAllChecked({ ...page })}
                          />
                          <MenuButton
                            ref={refClick}
                            onClick={() => setOpenH(!openH)}
                          >
                            Menu
                          </MenuButton>
                        </Cell>
                      </TH>
                    )}
                    {headerGroup.headers.map((header) => (
                      <TH
                        {...header.getHeaderProps(
                          header.getSortByToggleProps()
                        )}
                        notCheckable={notCheckable}
                      >
                        <Cell className={headerClass}>
                          {header.render('Header')}

                          {header.canSort && (
                            <Icon
                              {...getIcon(header.isSorted, header.isSortedDesc)}
                            />
                          )}
                        </Cell>
                      </TH>
                    ))}
                    {!noActions && (
                      <TH right>
                        <Cell />
                      </TH>
                    )}
                  </TR>
                ))}
              </THead>
              <TBody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <React.Fragment key={`${index + 1}`}>
                      <TREmpty />
                      <TR notCheckable={notCheckable}>
                        {!notCheckable && (
                          <TD left>
                            <Cell>
                              <CustomCheckbox
                                row={row}
                                stack={stack}
                                setStack={setStack}
                                shouldCheck={allChecked}
                              />
                            </Cell>
                          </TD>
                        )}
                        {row.cells.map((cell, ind) => (
                          <TD key={`${ind + 1}`}>
                            <Cell
                              align={cell.column.align}
                              className={textClass}
                            >
                              {cell.column.prefix}
                              <span>{cell.render('Cell')}</span>
                              {` ${cell.column.suffix || ''}`}
                            </Cell>
                          </TD>
                        ))}
                      </TR>
                    </React.Fragment>
                  );
                })}
              </TBody>
            </Table>
          </>
        )}
      </Wrapper>

      {total ? (
        <Pagination
          canPreviousPage={canPreviousPage}
          pageOptions={pageOptions}
          canNextPage={canNextPage}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
          pageIndex={pageIndex}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

CustomTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fetchData: PropTypes.any,
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  headerToolTips: PropTypes.arrayOf(PropTypes.object),
  toolTips: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
  setSort: PropTypes.func
};

CustomTable.defaultProps = {
  headers: [],
  data: [],
  headerToolTips: [],
  toolTips: [],
  onChange: () => {},
  fetchData: undefined,
  total: 0,
  loading: false,
  setSort: () => {}
};

/**
 * If `headerToolTips` array is not empty then headerTooltip and checkboxes are visible
 * If `toolTips` array is not empty then table row menu options are visible
 * If `total` is not empty or equal to 0 then pagination is visible
 */
export default CustomTable;
