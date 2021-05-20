/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useRef, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IconWrapper,
  InnerLabel,
  InputWrapper,
  Options,
  OptionsItem,
  OptionsItemImg,
  OptionsWrap,
  SearchInput,
  Select,
  SelectContainer,
  SelectedValue,
  SelectLabel,
  Helper
} from './style';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrowClose.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';
import { PureCheckbox as Checkbox } from '../../CheckBox';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

const FilterSelect = ({
  value,
  onChange,
  label,
  multiple,
  searchable,
  searchValue,
  setSearchValue,
  options,
  placeholder,
  size,
  type,
  helperText,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(undefined);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const selectRef = useRef(null);
  useEffect(() => {
    if (value) {
      let displayValue = null;
      let $selected = { ...setSelected };

      if (Array.isArray(value) && value.length > 0) {
        for (let i = 0; i < value.length; i += 1) {
          $selected[value[i]] = options.find((item) => item.id === value[i]);
        }
        if (options && value.length !== options.length) {
          displayValue = `${options.find((item) => item.id === value[0]).value} (${value.length})`;
        } else {
          displayValue = 'All';
        }
      } else {
        $selected = {};
        const element = options.find((item) => item.id === value);
        displayValue = element.value;
        $selected[value] = element;
        setIsPopoverOpen(false);
      }
      setSelected($selected);
      setSelectedValue(displayValue);
    } else {
      setSelectedValue(undefined);
      setSelected({});
    }
  }, [value, options]);

  const handleClick = useCallback(
    (item) => {
      let $selected = { ...selected };
      let data;
      if (multiple) {
        data = [];
        if ($selected[item.id]) {
          delete $selected[item.id];
        } else {
          $selected[item.id] = item;
        }

        if (value === undefined) {
          data.push(item.id);
        } else {
          const idx = value.findIndex((x) => x === item.id);
          if (idx === -1) {
            data = [...value, item.id];
          } else {
            data = [...value.slice(0, idx), ...value.slice(idx + 1)];
            if (data.length === 0) {
              data = undefined;
            }
          }
        }
      } else {
        $selected = {};
        data = item.id;
        $selected[item.id] = item;
      }

      setSelected($selected);
      onChange(data);
    },
    [multiple, selected, onChange, value]
  );

  const handleSearch = (e) => {
    if (setSearchValue) {
      setSearchValue(e.target.value);
    }
  };

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(selectRef, () => setIsPopoverOpen(false));

  return (
    <SelectContainer ref={selectRef}>
      {label && <SelectLabel size={size}>{label}</SelectLabel>}
      <Select
        type={type}
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        {...props}
        size={size}
        color={!multiple
          && selected[value]
          && selected[value].color
          ? selected[value].color : undefined}
      >
        {!multiple && placeholder && !selectedValue && <InnerLabel>{placeholder}</InnerLabel>}
        {multiple && placeholder && <InnerLabel>{placeholder}</InnerLabel>}
        {selectedValue && <SelectedValue>{selectedValue}</SelectedValue>}
        {isPopoverOpen ? <ArrowUp /> : <ArrowDown />}
      </Select>
      <Options open={isPopoverOpen}>
        {searchable && options.length > 4 && (
          <InputWrapper>
            <SearchInput
              iconType="prefix"
              type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search..."
              className={classNames('caption', 'weight-medium')}
            />
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
          </InputWrapper>
        )}
        <OptionsWrap>
          {options.map((item) => (
            <OptionsItem
              key={item.id}
              onClick={() => handleClick(item)}
              active={!!selected[item.id]}
              className={classNames('body-medium-14', 'weight-regular')}
            >
              {multiple && <Checkbox type="checkbox" readOnly checked={!!selected[item.id]} />}
              {item.img && (
                <OptionsItemImg>
                  <img src={item.img} alt="avatar" />
                </OptionsItemImg>
              )}
              {item.value}
            </OptionsItem>
          ))}
        </OptionsWrap>
      </Options>

      <Helper type={type} size={size}>
        {helperText}
      </Helper>
    </SelectContainer>
  );
};

export default FilterSelect;

FilterSelect.propTypes = {
  size: PropTypes.string
};

FilterSelect.defaultProps = {
  size: 'medium'
};
