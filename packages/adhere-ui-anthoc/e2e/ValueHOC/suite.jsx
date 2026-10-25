import { Form, Select, TreeSelect } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';

import ArrayEntityValueHOC from '../../src/array-entity-value-hoc';
import AsyncTreeEntityValueHOC from '../../src/async-tree-entity-value-hoc';
import CalendarFormatValueHOC from '../../src/calendar-format-value-hoc';
import CalendarTimestampValueHOC from '../../src/calendar-timestamp-value-hoc';
import DatePickerFormatValueHOC from '../../src/date-picker-format-value-hoc';
import DatePickerTimestampValueHOC from '../../src/date-picker-timestamp-value-hoc';
import PagingEntityValueHOC from '../../src/paging-entity-value-hoc';
import RangePickerFormatValueHOC from '../../src/range-picker-format-value-hoc';
import RangePickerTimestampValueHOC from '../../src/range-picker-timestamp-value-hoc';
import TimePickerFormatValueHOC from '../../src/time-picker-format-value-hoc';
import TimePickerTimestampValueHOC from '../../src/time-picker-timestamp-value-hoc';
import TreeEntityValueHOC from '../../src/tree-entity-value-hoc';

const DATE = '2026-10-25';
const DATE_DEFAULT = '2026-01-15';
const DATE_INITIAL = '2026-02-02';
const DATE_SET = '2026-03-03';
const TIME = '08:30:00';
const TIME_DEFAULT = '09:15:00';
const TIME_INITIAL = '10:20:30';
const TIME_SET = '11:45:00';
const RANGE_START = '2026-04-01';
const RANGE_END = '2026-04-30';
const RANGE_DEFAULT_START = '2026-05-01';
const RANGE_DEFAULT_END = '2026-05-20';
const RANGE_INITIAL_START = '2026-06-01';
const RANGE_INITIAL_END = '2026-06-18';
const RANGE_SET_START = '2026-07-01';
const RANGE_SET_END = '2026-07-16';

const arrayOptions = [
  { label: '甲', value: 'a', id: 'id-a' },
  { label: '乙', value: 'b', id: 'id-b' },
];

const treeData = [
  {
    title: '父',
    value: 'p',
    id: 'id-p',
    children: [{ title: '子', value: 'c', id: 'id-c' }],
  },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function inputText(root) {
  return root.querySelector('input')?.value ?? '';
}

function rangeText(root) {
  return [...root.querySelectorAll('input')].map((input) => input.value);
}

function selectedDay(root) {
  return root.querySelector('.ant-picker-cell-selected .ant-picker-cell-inner')?.textContent?.trim() ?? '';
}

function selectionText(root) {
  const select = root.querySelector('.ant-select-content') || root.querySelector('.ant-select');
  return select?.innerText?.trim() ?? '';
}

function dayOf(text) {
  return String(dayjs(text).date()).padStart(2, '0');
}

const probeEpoch = 2;

function Probe({ id, title, check, children }) {
  const [state, setState] = useState({ status: 'pending', detail: '' });
  const checkRef = useRef(check);
  checkRef.current = check;

  useEffect(() => {
    setState({ status: 'pending', detail: '' });
    let attempts = 0;
    const timer = window.setInterval(() => {
      const root = document.querySelector(`[data-probe="${id}"]`);
      attempts += 1;
      try {
        const detail = checkRef.current(root);
        setState({ status: 'pass', detail });
        window.clearInterval(timer);
      } catch (error) {
        if (attempts >= 30) {
          setState({ status: 'fail', detail: error.message });
          window.clearInterval(timer);
        }
      }
    }, 50);

    return () => window.clearInterval(timer);
  }, [id, probeEpoch]);

  return (
    <section
      data-probe={id}
      data-status={state.status}
      style={{
        marginBottom: 12,
        padding: 12,
        border: `1px solid ${state.status === 'fail' ? '#ff4d4f' : '#d9d9d9'}`,
        background: state.status === 'pass' ? '#f6ffed' : state.status === 'fail' ? '#fff2f0' : '#fff',
      }}
    >
      <div>
        <strong>{state.status.toUpperCase()}</strong> {title}
      </div>
      <div data-role="detail">{state.detail}</div>
      <div data-role="body">{children}</div>
    </section>
  );
}

function Summary() {
  const [text, setText] = useState('running');

  useEffect(() => {
    const timer = window.setInterval(() => {
      const nodes = [...document.querySelectorAll('[data-probe]')];
      const pass = nodes.filter((node) => node.dataset.status === 'pass').length;
      const fail = nodes.filter((node) => node.dataset.status === 'fail').length;
      const pending = nodes.filter((node) => node.dataset.status === 'pending').length;
      const summary = `${pass} pass, ${fail} fail, ${pending} pending / ${nodes.length}`;
      setText(summary);
      window.__VALUE_HOC_RESULTS__ = {
        pass,
        fail,
        pending,
        total: nodes.length,
        failures: nodes
          .filter((node) => node.dataset.status === 'fail')
          .map((node) => ({
            id: node.dataset.probe,
            detail: node.querySelector('[data-role="detail"]')?.textContent ?? '',
          })),
      };
      if (pending === 0 && nodes.length > 0) {
        window.__VALUE_HOC_DONE__ = true;
        window.clearInterval(timer);
      }
    }, 100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <h1 data-summary={text} style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 1 }}>
      ValueHOC {text}
    </h1>
  );
}

function PickerBasic({ id, title, render }) {
  return (
    <Probe
      id={id}
      title={`${title} 基本使用`}
      check={(root) => {
        assert(root.querySelector('input, .ant-picker-calendar'), '控件未渲染');
        return 'rendered';
      }}
    >
      {render({})}
    </Probe>
  );
}

function PickerDefault({ id, title, render, defaultValue, read, expected }) {
  return (
    <Probe
      id={id}
      title={`${title} 默认值`}
      check={(root) => {
        const actual = read(root);
        assert(actual === expected, `期望 ${expected}，实际 ${actual}`);
        return actual;
      }}
    >
      {render({ defaultValue })}
    </Probe>
  );
}

function PickerControlled({ id, title, render, sample, read, expected }) {
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    setValue(sample);
  }, [sample]);

  return (
    <Probe
      id={id}
      title={`${title} 设置值`}
      check={(root) => {
        const actual = read(root);
        assert(value !== undefined, '值尚未写入');
        assert(actual === expected, `期望 ${expected}，实际 ${actual}`);
        return actual;
      }}
    >
      {render({ value })}
    </Probe>
  );
}

function PickerForm({ id, title, render }) {
  const [form] = Form.useForm();

  return (
    <Probe
      id={id}
      title={`${title} 在表单中使用`}
      check={() => {
        assert(form.getFieldValue('field') == null, `空表单不应有值 ${form.getFieldValue('field')}`);
        return 'empty form';
      }}
    >
      <Form form={form}>
        <Form.Item name="field" label="字段">
          {render({})}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function PickerFormInitial({ id, title, render, initial, read, expected, accept }) {
  const [form] = Form.useForm();

  return (
    <Probe
      id={id}
      title={`${title} 表单初始值`}
      check={(root) => {
        const stored = form.getFieldValue('field');
        assert(stored != null, '初始值未进入表单');
        const actual = read(root);
        assert(actual === expected, `期望 ${expected}，实际 ${actual}`);
        if (accept) accept(stored);
        return `${actual} / ${JSON.stringify(stored)}`;
      }}
    >
      <Form form={form} initialValues={{ field: initial }}>
        <Form.Item name="field" label="字段">
          {render({})}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function PickerFormSet({ id, title, render, sample, read, expected, accept }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('field', sample);
  }, [form, sample]);

  return (
    <Probe
      id={id}
      title={`${title} 设置表单字段值`}
      check={(root) => {
        const stored = form.getFieldValue('field');
        assert(stored != null, 'setFieldValue 未写入');
        const actual = read(root);
        assert(actual === expected, `期望 ${expected}，实际 ${actual}`);
        if (accept) accept(stored);
        return `${actual} / ${JSON.stringify(stored)}`;
      }}
    >
      <Form form={form}>
        <Form.Item name="field" label="字段">
          {render({})}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function PickerCases({ id, title, render, read, samples }) {
  return (
    <div>
      <h2>{title}</h2>
      <PickerBasic id={`${id}-basic`} title={title} render={render} />
      <PickerDefault
        id={`${id}-default`}
        title={title}
        render={render}
        defaultValue={samples.defaultValue}
        read={read}
        expected={samples.defaultText}
      />
      <PickerControlled
        id={`${id}-value`}
        title={title}
        render={render}
        sample={samples.value}
        read={read}
        expected={samples.valueText}
      />
      <PickerForm id={`${id}-form`} title={title} render={render} />
      <PickerFormInitial
        id={`${id}-initial`}
        title={title}
        render={render}
        initial={samples.initial}
        read={read}
        expected={samples.initialText}
        accept={samples.acceptStored}
      />
      <PickerFormSet
        id={`${id}-set`}
        title={title}
        render={render}
        sample={samples.set}
        read={read}
        expected={samples.setText}
        accept={samples.acceptStored}
      />
    </div>
  );
}

function EntityBasic({ id, title, render }) {
  const calls = useRef(0);

  return (
    <Probe
      id={id}
      title={`${title} 基本使用`}
      check={(root) => {
        assert(root.querySelector('.ant-select'), '选择器未渲染');
        assert(calls.current === 0, `未匹配的多选触发了 ${calls.current} 次 onChange`);
        return 'rendered';
      }}
    >
      {render({
        value: ['missing'],
        onChange: () => {
          calls.current += 1;
        },
      })}
    </Probe>
  );
}

function EntityDefault({ id, title, render, defaultValue, expectedText }) {
  return (
    <Probe
      id={id}
      title={`${title} 默认值`}
      check={(root) => {
        const actual = selectionText(root);
        assert(actual === expectedText, `期望 ${expectedText}，实际 ${actual}`);
        return actual;
      }}
    >
      {render({ defaultValue })}
    </Probe>
  );
}

function EntityControlled({ id, title, render, sample, accept }) {
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    setValue(sample);
  }, [sample]);

  return (
    <Probe
      id={id}
      title={`${title} 设置值`}
      check={(root) => {
        assert(value !== undefined, '值尚未写入');
        accept(value);
        const actual = selectionText(root);
        assert(actual.length > 0, '选项未回显');
        return `${actual} / ${JSON.stringify(value)}`;
      }}
    >
      {render({ value, onChange: setValue })}
    </Probe>
  );
}

function EntityForm({ id, title, render }) {
  const [form] = Form.useForm();

  return (
    <Probe
      id={id}
      title={`${title} 在表单中使用`}
      check={() => {
        assert(form.getFieldValue('field') == null, '空表单不应有值');
        return 'empty form';
      }}
    >
      <Form form={form}>
        <Form.Item name="field" label="字段">
          {render({})}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function EntityFormInitial({ id, title, render, initial, accept }) {
  const [form] = Form.useForm();

  return (
    <Probe
      id={id}
      title={`${title} 表单初始值`}
      check={(root) => {
        const stored = form.getFieldValue('field');
        accept(stored);
        const actual = selectionText(root);
        assert(actual.length > 0, `初始值未回显 ${JSON.stringify(stored)}`);
        return `${actual} / ${JSON.stringify(stored)}`;
      }}
    >
      <Form form={form} initialValues={{ field: initial }}>
        <Form.Item name="field" label="字段">
          {render({})}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function EntityFormSet({ id, title, render, sample, accept }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('field', sample);
  }, [form, sample]);

  return (
    <Probe
      id={id}
      title={`${title} 设置表单字段值`}
      check={(root) => {
        const stored = form.getFieldValue('field');
        accept(stored);
        const actual = selectionText(root);
        assert(actual.length > 0, `setFieldValue 未回显 ${JSON.stringify(stored)}`);
        return `${actual} / ${JSON.stringify(stored)}`;
      }}
    >
      <Form form={form}>
        <Form.Item name="field" label="字段">
          {render({})}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function EntityCases({ id, title, render, samples }) {
  return (
    <div>
      <h2>{title}</h2>
      <EntityBasic id={`${id}-basic`} title={title} render={render} />
      <EntityDefault
        id={`${id}-default`}
        title={title}
        render={render}
        defaultValue={samples.defaultValue}
        expectedText={samples.defaultText}
      />
      <EntityControlled
        id={`${id}-value`}
        title={title}
        render={(props) => render({ ...props, valueProp: samples.valueProp })}
        sample={samples.value}
        accept={samples.acceptValue}
      />
      <EntityForm id={`${id}-form`} title={title} render={render} />
      <EntityFormInitial
        id={`${id}-initial`}
        title={title}
        render={render}
        initial={samples.initial}
        accept={samples.acceptInitial}
      />
      <EntityFormSet
        id={`${id}-set`}
        title={title}
        render={render}
        sample={samples.set}
        accept={samples.acceptSet}
      />
    </div>
  );
}

function MiniPaging({ pagingProps, value, onChange, options, ...rest }) {
  useEffect(() => {
    pagingProps?.onDataSourceChange?.(1, options);
    // 只上报一次，避免分页 props 每次渲染都是新对象时反复清空第 1 页
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Select
      style={{ width: 220 }}
      {...rest}
      options={options}
      {...(value !== undefined ? { value } : {})}
      onChange={onChange}
    />
  );
}

function MiniAsyncTree({ onDataSourceChange, value, onChange, treeData: data, ...rest }) {
  useEffect(() => {
    onDataSourceChange?.(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TreeSelect
      style={{ width: 220 }}
      {...rest}
      treeData={data}
      {...(value !== undefined ? { value } : {})}
      onChange={onChange}
    />
  );
}

function expectEntity(value, key, label) {
  assert(value && typeof value === 'object' && !Array.isArray(value), `期望实体，实际 ${JSON.stringify(value)}`);
  assert(value[key] != null, `实体缺少 ${key}：${JSON.stringify(value)}`);
  if (label) assert(value.label === label || value.title === label, `期望 ${label}，实际 ${JSON.stringify(value)}`);
}

const dateMs = dayjs(DATE).startOf('day').valueOf();
const dateDefaultMs = dayjs(DATE_DEFAULT).startOf('day').valueOf();
const dateInitialMs = dayjs(DATE_INITIAL).startOf('day').valueOf();
const dateSetMs = dayjs(DATE_SET).startOf('day').valueOf();
const timeMs = dayjs(`2026-10-25 ${TIME}`).valueOf();
const timeDefaultMs = dayjs(`2026-10-25 ${TIME_DEFAULT}`).valueOf();
const timeInitialMs = dayjs(`2026-10-25 ${TIME_INITIAL}`).valueOf();
const timeSetMs = dayjs(`2026-10-25 ${TIME_SET}`).valueOf();
const rangeMs = [dayjs(RANGE_START).startOf('day').valueOf(), dayjs(RANGE_END).startOf('day').valueOf()];
const rangeDefaultMs = [
  dayjs(RANGE_DEFAULT_START).startOf('day').valueOf(),
  dayjs(RANGE_DEFAULT_END).startOf('day').valueOf(),
];
const rangeInitialMs = [
  dayjs(RANGE_INITIAL_START).startOf('day').valueOf(),
  dayjs(RANGE_INITIAL_END).startOf('day').valueOf(),
];
const rangeSetMs = [dayjs(RANGE_SET_START).startOf('day').valueOf(), dayjs(RANGE_SET_END).startOf('day').valueOf()];

export default function ValueHOCSuite() {
  return (
    <div style={{ padding: 16 }}>
      <Summary />
      <PickerCases
        id="date-format"
        title="DatePickerFormatValueHOC"
        render={(props) => <DatePickerFormatValueHOC format="YYYY-MM-DD" {...props} />}
        read={inputText}
        samples={{
          defaultValue: DATE_DEFAULT,
          defaultText: DATE_DEFAULT,
          value: DATE,
          valueText: DATE,
          initial: DATE_INITIAL,
          initialText: DATE_INITIAL,
          set: DATE_SET,
          setText: DATE_SET,
        }}
      />
      <PickerCases
        id="date-timestamp"
        title="DatePickerTimestampValueHOC"
        render={(props) => <DatePickerTimestampValueHOC format="YYYY-MM-DD" {...props} />}
        read={inputText}
        samples={{
          defaultValue: dateDefaultMs,
          defaultText: DATE_DEFAULT,
          value: dateMs,
          valueText: DATE,
          initial: dateInitialMs,
          initialText: DATE_INITIAL,
          set: dateSetMs,
          setText: DATE_SET,
          acceptStored: (stored) => assert(typeof stored === 'number', `期望毫秒时间戳，实际 ${stored}`),
        }}
      />
      <PickerCases
        id="time-format"
        title="TimePickerFormatValueHOC"
        render={(props) => <TimePickerFormatValueHOC format="HH:mm:ss" {...props} />}
        read={inputText}
        samples={{
          defaultValue: TIME_DEFAULT,
          defaultText: TIME_DEFAULT,
          value: TIME,
          valueText: TIME,
          initial: TIME_INITIAL,
          initialText: TIME_INITIAL,
          set: TIME_SET,
          setText: TIME_SET,
        }}
      />
      <PickerCases
        id="time-timestamp"
        title="TimePickerTimestampValueHOC"
        render={(props) => <TimePickerTimestampValueHOC format="HH:mm:ss" type="seconds" {...props} />}
        read={inputText}
        samples={{
          defaultValue: dayjs(`2026-10-25 ${TIME_DEFAULT}`).unix(),
          defaultText: TIME_DEFAULT,
          value: dayjs(`2026-10-25 ${TIME}`).unix(),
          valueText: TIME,
          initial: dayjs(`2026-10-25 ${TIME_INITIAL}`).unix(),
          initialText: TIME_INITIAL,
          set: dayjs(`2026-10-25 ${TIME_SET}`).unix(),
          setText: TIME_SET,
          acceptStored: (stored) => assert(typeof stored === 'number', `期望秒时间戳，实际 ${stored}`),
        }}
      />
      <PickerCases
        id="range-format"
        title="RangePickerFormatValueHOC"
        render={(props) => <RangePickerFormatValueHOC format="YYYY-MM-DD" {...props} />}
        read={(root) => rangeText(root).join('|')}
        samples={{
          defaultValue: [RANGE_DEFAULT_START, RANGE_DEFAULT_END],
          defaultText: `${RANGE_DEFAULT_START}|${RANGE_DEFAULT_END}`,
          value: [RANGE_START, null],
          valueText: `${RANGE_START}|`,
          initial: [RANGE_INITIAL_START, RANGE_INITIAL_END],
          initialText: `${RANGE_INITIAL_START}|${RANGE_INITIAL_END}`,
          set: [RANGE_SET_START, RANGE_SET_END],
          setText: `${RANGE_SET_START}|${RANGE_SET_END}`,
        }}
      />
      <PickerCases
        id="range-timestamp"
        title="RangePickerTimestampValueHOC"
        render={(props) => (
          <RangePickerTimestampValueHOC format="YYYY-MM-DD" type={['milliseconds', 'milliseconds']} {...props} />
        )}
        read={(root) => rangeText(root).join('|')}
        samples={{
          defaultValue: rangeDefaultMs,
          defaultText: `${RANGE_DEFAULT_START}|${RANGE_DEFAULT_END}`,
          value: [rangeMs[0], null],
          valueText: `${RANGE_START}|`,
          initial: rangeInitialMs,
          initialText: `${RANGE_INITIAL_START}|${RANGE_INITIAL_END}`,
          set: rangeSetMs,
          setText: `${RANGE_SET_START}|${RANGE_SET_END}`,
          acceptStored: (stored) =>
            assert(Array.isArray(stored) && stored.every((item) => item == null || typeof item === 'number'), `期望数字区间，实际 ${JSON.stringify(stored)}`),
        }}
      />
      <PickerCases
        id="calendar-format"
        title="CalendarFormatValueHOC"
        render={(props) => <CalendarFormatValueHOC {...props} />}
        read={selectedDay}
        samples={{
          defaultValue: DATE_DEFAULT,
          defaultText: dayOf(DATE_DEFAULT),
          value: DATE,
          valueText: dayOf(DATE),
          initial: DATE_INITIAL,
          initialText: dayOf(DATE_INITIAL),
          set: DATE_SET,
          setText: dayOf(DATE_SET),
          acceptStored: (stored) => assert(typeof stored === 'string', `期望字符串，实际 ${stored}`),
        }}
      />
      <PickerCases
        id="calendar-timestamp"
        title="CalendarTimestampValueHOC"
        render={(props) => <CalendarTimestampValueHOC {...props} />}
        read={selectedDay}
        samples={{
          defaultValue: dateDefaultMs,
          defaultText: dayOf(DATE_DEFAULT),
          value: dateMs,
          valueText: dayOf(DATE),
          initial: dateInitialMs,
          initialText: dayOf(DATE_INITIAL),
          set: dateSetMs,
          setText: dayOf(DATE_SET),
          acceptStored: (stored) => assert(typeof stored === 'number', `期望毫秒时间戳，实际 ${stored}`),
        }}
      />
      <EntityCases
        id="array-entity"
        title="ArrayEntityValueHOC"
        render={(props) => (
          <ArrayEntityValueHOC {...props}>
            <Select
              style={{ width: 220 }}
              options={arrayOptions}
              fieldNames={props.valueProp === 'id' ? { label: 'label', value: 'id' } : undefined}
            />
          </ArrayEntityValueHOC>
        )}
        samples={{
          defaultValue: 'a',
          defaultText: '甲',
          valueProp: 'id',
          value: 'id-b',
          acceptValue: (value) => expectEntity(value, 'id', '乙'),
          initial: 'a',
          acceptInitial: (value) => expectEntity(value, 'value', '甲'),
          set: 'b',
          acceptSet: (value) => expectEntity(value, 'value', '乙'),
        }}
      />
      <EntityCases
        id="paging-entity"
        title="PagingEntityValueHOC"
        render={(props) => (
          <PagingEntityValueHOC {...props}>
            <MiniPaging options={arrayOptions} />
          </PagingEntityValueHOC>
        )}
        samples={{
          defaultValue: 'a',
          defaultText: '甲',
          value: 'b',
          acceptValue: (value) => expectEntity(value, 'value', '乙'),
          initial: 'a',
          acceptInitial: (value) => expectEntity(value, 'value', '甲'),
          set: 'b',
          acceptSet: (value) => expectEntity(value, 'value', '乙'),
        }}
      />
      <EntityCases
        id="tree-entity"
        title="TreeEntityValueHOC"
        render={(props) => (
          <TreeEntityValueHOC {...props}>
            <TreeSelect
              style={{ width: 220 }}
              treeData={treeData}
              fieldNames={
                props.valueProp === 'id' ? { label: 'title', value: 'id', children: 'children' } : undefined
              }
            />
          </TreeEntityValueHOC>
        )}
        samples={{
          defaultValue: 'c',
          defaultText: '子',
          valueProp: 'id',
          value: 'id-c',
          acceptValue: (value) => expectEntity(value, 'id', '子'),
          initial: 'c',
          acceptInitial: (value) => expectEntity(value, 'value', '子'),
          set: 'p',
          acceptSet: (value) => expectEntity(value, 'value', '父'),
        }}
      />
      <EntityCases
        id="async-tree-entity"
        title="AsyncTreeEntityValueHOC"
        render={(props) => (
          <AsyncTreeEntityValueHOC {...props}>
            <MiniAsyncTree treeData={treeData} />
          </AsyncTreeEntityValueHOC>
        )}
        samples={{
          defaultValue: 'c',
          defaultText: '子',
          value: 'c',
          acceptValue: (value) => expectEntity(value, 'value', '子'),
          initial: 'c',
          acceptInitial: (value) => expectEntity(value, 'value', '子'),
          set: 'p',
          acceptSet: (value) => expectEntity(value, 'value', '父'),
        }}
      />
      <p>毫秒样例 {timeMs}，日期 {dateMs}</p>
    </div>
  );
}
