import { Form } from 'antd-mobile';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';

import TimePickerView from '@baifendian/adhere-mobile-ui-time-picker-view';

import Calendar from '../../src/calendar';
import CalendarFormatValueHOC from '../../src/calendar-format-value-hoc';
import CalendarTimestampValueHOC from '../../src/calendar-timestamp-value-hoc';
import DateFormatValueHOC from '../../src/date-format-value-hoc';
import DatePickerView from '../../src/date-picker-view';
import DateTimestampValueHOC from '../../src/date-timestamp-value-hoc';
import TimeFormatValueHOC from '../../src/time-format-value-hoc';
import TimeTimestampValueHOC from '../../src/time-timestamp-value-hoc';

const DATE = '2026-10-25';
const DATE_DEFAULT = '2026-01-15';
const DATE_INITIAL = '2026-02-02';
const DATE_SET = '2026-03-03';
const TIME = '08:30:00';
const TIME_DEFAULT = '09:15:00';
const TIME_INITIAL = '10:20:30';
const TIME_SET = '11:45:00';
const RANGE_START = '2026-06-01';
const RANGE_END = '2026-06-18';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function columnText(root) {
  return [...root.querySelectorAll('.adm-picker-view-column-accessible-current')]
    .map((node) => {
      const label = node.getAttribute('aria-label') || '';
      const mark = '当前选择的是：';
      return label.startsWith(mark) ? label.slice(mark.length) : '';
    })
    .filter(Boolean)
    .join('|');
}

function selectedDays(root) {
  return [...root.querySelectorAll('.adm-calendar-cell-selected .adm-calendar-cell-top')].map((node) =>
    node.textContent.trim(),
  );
}

function dateColumns(text) {
  const value = dayjs(text);
  return `${value.year()}|${value.month() + 1}|${value.date()}`;
}

function timeColumns(text) {
  return text.split(':').join('|');
}

function dayText(text) {
  return String(dayjs(text).date());
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
        if (attempts >= 40) {
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
      Mobile ValueHOC {text}
    </h1>
  );
}

function Basic({ id, title, render, marker }) {
  return (
    <Probe
      id={id}
      title={`${title} 基本使用`}
      check={(root) => {
        assert(root.querySelector(marker), '控件未渲染');
        return 'rendered';
      }}
    >
      {render({})}
    </Probe>
  );
}

function DefaultValue({ id, title, render, defaultValue, read, expected }) {
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

function Controlled({ id, title, render, sample, read, expected }) {
  return (
    <Probe
      id={id}
      title={`${title} 设置值`}
      check={(root) => {
        const actual = read(root);
        assert(actual === expected, `期望 ${expected}，实际 ${actual}`);
        return actual;
      }}
    >
      {render({ value: sample })}
    </Probe>
  );
}

function InForm({ id, title, render }) {
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

function FormInitial({ id, title, render, initial, read, expected, accept }) {
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
        if (accept) accept(stored, initial);
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

function FormSet({ id, title, render, sample, read, expected, accept }) {
  const [form] = Form.useForm();
  const [version, setVersion] = useState(0);

  useEffect(() => {
    form.setFieldValue('field', sample);
    setVersion(1);
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
        if (accept) accept(stored, sample);
        return `${actual} / ${JSON.stringify(stored)}`;
      }}
    >
      <Form form={form}>
        <Form.Item name="field" label="字段">
          {render({ key: version })}
        </Form.Item>
      </Form>
    </Probe>
  );
}

function Cases({ id, title, render, read, marker, samples }) {
  return (
    <div>
      <h2>{title}</h2>
      <Basic id={`${id}-basic`} title={title} render={render} marker={marker} />
      <DefaultValue
        id={`${id}-default`}
        title={title}
        render={render}
        defaultValue={samples.defaultValue}
        read={read}
        expected={samples.defaultText}
      />
      <Controlled
        id={`${id}-value`}
        title={title}
        render={render}
        sample={samples.value}
        read={read}
        expected={samples.valueText}
      />
      <InForm id={`${id}-form`} title={title} render={render} />
      <FormInitial
        id={`${id}-initial`}
        title={title}
        render={render}
        initial={samples.initial}
        read={read}
        expected={samples.initialText}
        accept={samples.acceptStored}
      />
      <FormSet
        id={`${id}-set`}
        title={title}
        render={render}
        sample={samples.set}
        read={read}
        expected={samples.setText}
        accept={samples.acceptStored}
      />
      {samples.range ? (
        <Controlled
          id={`${id}-range`}
          title={`${title} 区间`}
          render={(props) => render({ ...props, selectionMode: 'range' })}
          sample={samples.range}
          read={samples.rangeRead}
          expected={samples.rangeText}
        />
      ) : null}
    </div>
  );
}

function sameNumber(stored, sample) {
  assert(stored === sample, `期望 ${sample}，实际 ${stored}`);
}

const dateMs = dayjs(DATE).startOf('day').valueOf();
const dateDefaultMs = dayjs(DATE_DEFAULT).startOf('day').valueOf();
const dateInitialMs = dayjs(DATE_INITIAL).startOf('day').valueOf();
const dateSetMs = dayjs(DATE_SET).startOf('day').valueOf();
const rangeMs = [dayjs(RANGE_START).startOf('day').valueOf(), dayjs(RANGE_END).startOf('day').valueOf()];

function timeUnix(text) {
  return dayjs(`2026-10-25 ${text}`).unix();
}

export default function ValueHOCSuite() {
  return (
    <div style={{ padding: 16 }}>
      <Summary />
      <Cases
        id="date-format"
        title="DateFormatValueHOC"
        marker=".adm-picker-view"
        render={(props) => (
          <DateFormatValueHOC format="YYYY-MM-DD" {...props}>
            <DatePickerView />
          </DateFormatValueHOC>
        )}
        read={columnText}
        samples={{
          defaultValue: DATE_DEFAULT,
          defaultText: dateColumns(DATE_DEFAULT),
          value: DATE,
          valueText: dateColumns(DATE),
          initial: DATE_INITIAL,
          initialText: dateColumns(DATE_INITIAL),
          set: DATE_SET,
          setText: dateColumns(DATE_SET),
          acceptStored: (stored, sample) => assert(stored === sample, `期望 ${sample}，实际 ${stored}`),
        }}
      />
      <Cases
        id="date-timestamp"
        title="DateTimestampValueHOC"
        marker=".adm-picker-view"
        render={(props) => (
          <DateTimestampValueHOC {...props}>
            <DatePickerView />
          </DateTimestampValueHOC>
        )}
        read={columnText}
        samples={{
          defaultValue: dateDefaultMs,
          defaultText: dateColumns(DATE_DEFAULT),
          value: dateMs,
          valueText: dateColumns(DATE),
          initial: dateInitialMs,
          initialText: dateColumns(DATE_INITIAL),
          set: dateSetMs,
          setText: dateColumns(DATE_SET),
          acceptStored: sameNumber,
        }}
      />
      <Cases
        id="time-format"
        title="TimeFormatValueHOC"
        marker=".adm-picker-view"
        render={(props) => (
          <TimeFormatValueHOC format="HH:mm:ss" {...props}>
            <TimePickerView format="HH:mm:ss" />
          </TimeFormatValueHOC>
        )}
        read={columnText}
        samples={{
          defaultValue: TIME_DEFAULT,
          defaultText: timeColumns(TIME_DEFAULT),
          value: TIME,
          valueText: timeColumns(TIME),
          initial: TIME_INITIAL,
          initialText: timeColumns(TIME_INITIAL),
          set: TIME_SET,
          setText: timeColumns(TIME_SET),
          acceptStored: (stored, sample) => assert(stored === sample, `期望 ${sample}，实际 ${stored}`),
        }}
      />
      <Cases
        id="time-timestamp"
        title="TimeTimestampValueHOC"
        marker=".adm-picker-view"
        render={(props) => (
          <TimeTimestampValueHOC type="seconds" {...props}>
            <TimePickerView format="HH:mm:ss" />
          </TimeTimestampValueHOC>
        )}
        read={columnText}
        samples={{
          defaultValue: timeUnix(TIME_DEFAULT),
          defaultText: timeColumns(TIME_DEFAULT),
          value: timeUnix(TIME),
          valueText: timeColumns(TIME),
          initial: timeUnix(TIME_INITIAL),
          initialText: timeColumns(TIME_INITIAL),
          set: timeUnix(TIME_SET),
          setText: timeColumns(TIME_SET),
          acceptStored: sameNumber,
        }}
      />
      <Cases
        id="calendar-format"
        title="CalendarFormatValueHOC"
        marker=".adm-calendar"
        render={(props) => (
          <CalendarFormatValueHOC format="YYYY-MM-DD" {...props}>
            <Calendar selectionMode={props.selectionMode || 'single'} />
          </CalendarFormatValueHOC>
        )}
        read={(root) => selectedDays(root).join('|')}
        samples={{
          defaultValue: DATE_DEFAULT,
          defaultText: dayText(DATE_DEFAULT),
          value: DATE,
          valueText: dayText(DATE),
          initial: DATE_INITIAL,
          initialText: dayText(DATE_INITIAL),
          set: DATE_SET,
          setText: dayText(DATE_SET),
          acceptStored: (stored, sample) => assert(stored === sample, `期望 ${sample}，实际 ${stored}`),
          range: [RANGE_START, RANGE_END],
          rangeText: `${dayText(RANGE_START)}|${dayText(RANGE_END)}`,
          rangeRead: (root) => {
            const days = selectedDays(root);
            return `${days[0] ?? ''}|${days[days.length - 1] ?? ''}`;
          },
        }}
      />
      <Cases
        id="calendar-timestamp"
        title="CalendarTimestampValueHOC"
        marker=".adm-calendar"
        render={(props) => (
          <CalendarTimestampValueHOC type={props.selectionMode === 'range' ? ['milliseconds', 'milliseconds'] : 'milliseconds'} {...props}>
            <Calendar selectionMode={props.selectionMode || 'single'} />
          </CalendarTimestampValueHOC>
        )}
        read={(root) => selectedDays(root).join('|')}
        samples={{
          defaultValue: dateDefaultMs,
          defaultText: dayText(DATE_DEFAULT),
          value: dateMs,
          valueText: dayText(DATE),
          initial: dateInitialMs,
          initialText: dayText(DATE_INITIAL),
          set: dateSetMs,
          setText: dayText(DATE_SET),
          acceptStored: sameNumber,
          range: rangeMs,
          rangeText: `${dayText(RANGE_START)}|${dayText(RANGE_END)}`,
          rangeRead: (root) => {
            const days = selectedDays(root);
            return `${days[0] ?? ''}|${days[days.length - 1] ?? ''}`;
          },
        }}
      />
    </div>
  );
}
