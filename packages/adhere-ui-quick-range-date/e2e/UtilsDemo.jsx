import { Button, Space } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import QuickRangeDate, {
  datesToNumbers,
  getDataRangeByValue,
  getLabel,
  getValueEntityByStringValue,
  isCustomByType,
  numberToDayjs,
  stringValue,
  sync,
} from '../src/index';

export default () => {
  const [result, setResult] = useState('');

  const show = (title, data) => {
    setResult(`${title}\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div style={{ padding: 16 }}>
      <Space wrap>
        <Button
          onClick={() => {
            const synced = sync({ type: 'a-d', value: 3 });
            show('sync', {
              ...synced,
              startText: dayjs(synced.start).format('YYYY-MM-DD HH:mm:ss'),
              endText: dayjs(synced.end).format('YYYY-MM-DD HH:mm:ss'),
            });
          }}
        >
          sync
        </Button>
        <Button
          onClick={() => {
            show('stringValue / getLabel', {
              stringValue: stringValue({ type: 'a-w', value: 1 }),
              getLabel: getLabel({ type: 'a-w', value: 1 }),
              customLabel: getLabel({ type: 'custom' }),
            });
          }}
        >
          stringValue / getLabel
        </Button>
        <Button
          onClick={() => {
            show('getValueEntityByStringValue', getValueEntityByStringValue('a-M,3'));
          }}
        >
          getValueEntityByStringValue
        </Button>
        <Button
          onClick={() => {
            const range = getDataRangeByValue('b-d', 7);
            show('getDataRangeByValue(b-d, 7)', {
              range,
              startText: dayjs(range[0]).format('YYYY-MM-DD HH:mm:ss'),
              endText: dayjs(range[1]).format('YYYY-MM-DD HH:mm:ss'),
            });
          }}
        >
          getDataRangeByValue
        </Button>
        <Button
          onClick={() => {
            const days = numberToDayjs([dayjs().subtract(1, 'day').valueOf(), dayjs().valueOf()]);
            const numbers = datesToNumbers(days);
            show('numberToDayjs / datesToNumbers', {
              days: days?.map((d) => d.format('YYYY-MM-DD HH:mm:ss')),
              numbers,
            });
          }}
        >
          numberToDayjs / datesToNumbers
        </Button>
        <Button
          onClick={() => {
            show('isCustomByType', {
              custom: isCustomByType('custom'),
              pastDay: isCustomByType('a-d'),
            });
          }}
        >
          isCustomByType
        </Button>
        <Button
          onClick={() => {
            show('QuickRangeDate statics', {
              stringValue: QuickRangeDate.stringValue({ type: 'a-d', value: 1 }),
              sync: QuickRangeDate.sync({ type: 'a-d', value: 1 }),
            });
          }}
        >
          QuickRangeDate.* statics
        </Button>
      </Space>
      <pre style={{ marginTop: 16, padding: 12, background: '#f5f5f5', minHeight: 160 }}>
        {result || 'click a button...'}
      </pre>
    </div>
  );
};
