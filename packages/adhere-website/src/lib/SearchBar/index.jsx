import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from '@ctsj/router';
import Mark from 'mark.js';
import { Select, Empty } from 'antd';
import { ConditionalRender } from '@baifendian/adhere';

import Index from './index.json';

import styles from './index.less';

const searchIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTgiIHZlcnNpb249IjEuMSIgY2xhc3NOYW1lPSJpY29uIiB0PSIxNjQ0Mjk3NDYzMzE3Ij4KCiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHBhdGggaWQ9InN2Z18xIiBmaWxsPSIjZTZlNmU2IiBwLWlkPSIxMjU5IiBkPSJtOTUwLjE0OTA2LDkwOC4xOTY1M2wtMjcwLjI3MjM4LC0yNzEuOTI0MThjNTAuMzgxNDcsLTYwLjMyNzk5IDgwLjcxMjQ5LC0xMzcuOTc5NTQgODAuNzEyNDksLTIyMi43MjQ2NGMwLC0xOTIuMDMxNiAtMTU1LjY3MTcyLC0zNDcuNzA0MSAtMzQ3LjcxOTM3LC0zNDcuNzA0MWMtMTkyLjAzMjMsMCAtMzQ3LjcwNDAyLDE1NS42NzE0OCAtMzQ3LjcwNDAyLDM0Ny43MDQxYzAsMTkyLjAzMjYyIDE1NS42NzI3NCwzNDcuNzA0MSAzNDcuNzA0MDIsMzQ3LjcwNDFjODcuMjY0OTksMCAxNjcuMDE1NTMsLTMyLjE0ODE5IDIyOC4wNjc0NiwtODUuMjM5MzZsMjY5Ljg2NDA2LDI3MS41MjYxMWMxMC44NjM4NywxMC44NjU0NiAyOC40ODE4MywxMC44NjU0NiAzOS4zNDc3NCwwYzEwLjg1MjYxLC0xMC44NjY0OSAxMC44NTI2MSwtMjguNDc1NTQgMCwtMzkuMzQyMDN6bS01MzcuMjc5MjYsLTIwMi4xMTczYy0xNjEuNTUzOTIsMCAtMjkyLjUzMTIyLC0xMzAuOTcwOTEgLTI5Mi41MzEyMiwtMjkyLjUzMjU0YzAsLTE2MS41NTk1OSAxMzAuOTc3MywtMjkyLjUzMzU3IDI5Mi41MzEyMiwtMjkyLjUzMzU3YzE2MS41Nzk1MSwwIDI5Mi41NTk4OCwxMzAuOTcyOTYgMjkyLjU1OTg4LDI5Mi41MzM1N2MtMC4wMDEwMiwxNjEuNTYxNjMgLTEzMC45ODE0LDI5Mi41MzI1NCAtMjkyLjU1OTg4LDI5Mi41MzI1NHoiLz4KIDwvZz4KPC9zdmc+';

export default withRouter((props) => {
  const [searchVal, setSearchVal] = useState('');

  const [open, setOpen] = useState(false);

  const [filter, setFilter] = useState([]);

  const ref = useRef(null);

  const instance = useRef(null);

  useEffect(() => {
    if (ref.current && !instance.current) {
      instance.current = new Mark(ref.current);
    }

    if (instance.current) {
      instance.current.unmark();
      instance.current.mark(searchVal);
    }

    setFilter(
      (filter.current = searchVal
        ? Index.filter(({ kw }) =>
            kw.some((k) => k.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1),
          )
        : []),
    );

    if (!searchVal) {
      setOpen(false);
    }
  }, [searchVal]);

  function renderDropdown() {
    return (
      <div className={styles.List}>
        <ul className={styles.Fixed}>
          {filter.map(({ group, kw, path }, index) => (
            <li
              key={index}
              onClick={() => {
                props.history.push(path);
                setSearchVal('');
              }}
            >
              {group} - {kw[0]}
            </li>
          ))}
        </ul>
        <ul className={styles.Auto}>
          {filter.map(({ kw, path }, index) => (
            <li
              key={index}
              onClick={() => {
                props.history.push(path);
                setSearchVal('');
              }}
            >
              {kw[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.Wrap}>
      <div className={styles.Fixed}>
        <img src={searchIcon} alt="" />
      </div>

      <div className={styles.Auto} ref={ref}>
        <Select
          open={open}
          style={{ width: 600 }}
          autoFocus
          showSearch
          defaultActiveFirstOption={false}
          autoClearSearchValue={false}
          showArrow={false}
          filterOption={false}
          bordered={false}
          searchValue={searchVal}
          getPopupContainer={(e) => e.parentElement}
          onSearch={(val) => {
            setSearchVal(open ? val : searchVal);
          }}
          dropdownRender={() => {
            return (
              <ConditionalRender conditional={!!filter.length} noMatch={() => <Empty />}>
                {() => renderDropdown()}
              </ConditionalRender>
            );
          }}
          onDropdownVisibleChange={(visible) => {
            setOpen(visible);

            if (ref.current && !instance.current) {
              instance.current = new Mark(ref.current);
            }
          }}
        />
      </div>
    </div>
  );
});
