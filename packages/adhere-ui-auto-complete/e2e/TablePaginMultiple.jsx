import { Table } from 'antd';
import React, { useRef, useState } from 'react';

import AutoComplete from '../src/index';
import Book from './data';

import '../src/index.less';

export default () => {
  const [options, setOptions] = useState([]);

  const kw = useRef();

  const [totalCount, setTotalCount] = useState(0);

  const [value, setValue] = useState([0]);

  const defaultOptions = useRef([
    {
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12867066$index=0$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=5e6dfffac3b6153fd8bff47e87e8936af82c94a7',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/120451/32/2132/115695/5ec27278E6517693f/ce6ab5d066ea8306.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12867066',
      jp: '59.90',
      mp: '0',
      onTime: '2020-05-12 14:01:32.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12867066,
      spu: 12867066,
      subTag: 0,
      subsku: [],
      t: '云原生：运用容器、函数计算和数据构建下一代应用',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.4649,
      wt: '0.3400000035762787',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
      id: 0,
      value: 0,
      label: '云原生：运用容器、函数计算和数据构建下一代应用',
    },
  ]);

  const pagin = useRef({
    page: 1,
    limit: 10,
  });

  function loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const all = [...Book]
          .filter((_book) => {
            return _book.t.indexOf(kw.current) !== -1;
          })
          .map((t) => ({
            label: t.t,
            value: t.id,
            ...t,
          }));

        const result = all.slice(
          (pagin.current.page - 1) * pagin.current.limit,
          pagin.current.page * pagin.current.limit,
        );

        setTotalCount(all.length);
        setOptions(result);

        resolve();
      }, 500);
    });
  }

  return (
    <AutoComplete
      value={value}
      mode="multiple"
      style={{ width: 600 }}
      loadData={(_kw) => {
        kw.current = _kw;

        pagin.current = {
          page: 1,
          limit: 10,
        };

        if (!_kw) {
          setTotalCount(0);
          setOptions([]);
          return Promise.resolve();
        }

        return loadData();
      }}
      options={options}
      defaultOptions={defaultOptions.current}
      onChange={(_value) => {
        setValue(_value);
      }}
    >
      {({ value: _value, onChange: _onChange, options, loading }) => {
        return (
          <Table
            loading={loading}
            columns={[
              {
                title: '名称',
                key: 'label',
                dataIndex: 'label',
              },
              {
                title: '出版社',
                key: 'label',
                dataIndex: 'label',
              },
            ]}
            rowKey="id"
            dataSource={options}
            pagination={{
              current: pagin.page,
              pageSize: pagin.limit,
              total: totalCount,
              onChange: (page, pageSize) => {
                pagin.current = {
                  page,
                  limit: pageSize,
                };

                loadData();
              },
              onShowSizeChange: (current, size) => {
                pagin.current = {
                  page: current,
                  limit: size,
                };

                loadData();
              },
            }}
            scroll={{
              y: 500,
            }}
            rowSelection={{
              type: 'checkbox',
              selectedRowKeys: _value,
              onSelect: function (record, selected, selectedRows) {
                if (selected) {
                  const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                } else {
                  _onChange(_value.filter((t) => t !== record.id));
                }
              },
              onSelectAll: (selected, selectedRows, changeRows) => {
                if (selected) {
                  const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                } else {
                  const changeSelectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
                  _onChange(_value.filter((t) => !changeSelectedRowKeys.includes(t)));
                }
              },
            }}
          />
        );
      }}
    </AutoComplete>
  );
};
