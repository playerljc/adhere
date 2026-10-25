import { Form, Select, TreeSelect } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

const { ArrayEntityValueHOC, AsyncTreeEntityValueHOC, TreeEntityValueHOC } = FieldGeneratorToDict;

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

const staleOption = { label: '旧', value: 'stale', id: 'id-stale', title: '旧' };

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function selectionText(root) {
  const select = root.querySelector('.ant-select-content') || root.querySelector('.ant-select');
  return select?.innerText?.trim() ?? '';
}

function expectEntity(value, key, label) {
  assert(value && typeof value === 'object' && !Array.isArray(value), `期望实体，实际 ${JSON.stringify(value)}`);
  assert(value[key] != null, `实体缺少 ${key}：${JSON.stringify(value)}`);
  if (label) {
    assert(value.label === label || value.title === label, `期望 ${label}，实际 ${JSON.stringify(value)}`);
  }
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
      setText(`${pass} pass, ${fail} fail, ${pending} pending / ${nodes.length}`);
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
      Dict ValueHOC {text}
    </h1>
  );
}

function pickerValueProps(value, defaultValue) {
  return {
    ...(value !== undefined ? { value } : {}),
    ...(defaultValue !== undefined ? { defaultValue } : {}),
  };
}

function MiniSelect({ value, defaultValue, onChange, onDataSourceChange, fieldNames }) {
  useEffect(() => {
    onDataSourceChange?.(arrayOptions);
  }, []);

  return (
    <Select
      style={{ width: 220 }}
      options={arrayOptions}
      fieldNames={fieldNames}
      onChange={onChange}
      {...pickerValueProps(value, defaultValue)}
    />
  );
}

function MiniPaging({ value, onChange, onDataSourceChange }) {
  useEffect(() => {
    onDataSourceChange?.({ data: [staleOption] }, { type: 'paging', info: { page: 2 } });
    onDataSourceChange?.({ data: arrayOptions }, { type: 'paging', info: { page: 1 } });
  }, []);

  return (
    <Select style={{ width: 220 }} options={arrayOptions} onChange={onChange} {...pickerValueProps(value)} />
  );
}

function MiniTree({ value, defaultValue, onChange, onDataSourceChange, fieldNames }) {
  useEffect(() => {
    onDataSourceChange?.(treeData);
  }, []);

  return (
    <TreeSelect
      style={{ width: 220 }}
      treeData={treeData}
      fieldNames={fieldNames}
      onChange={onChange}
      {...pickerValueProps(value, defaultValue)}
    />
  );
}

function Basic({ id, title, render }) {
  const calls = useRef(0);

  return (
    <Probe
      id={id}
      title={`${title} 基本使用`}
      check={(root) => {
        assert(root.querySelector('.ant-select'), '控件未渲染');
        assert(calls.current === 0, `未匹配的值触发了 ${calls.current} 次 onChange`);
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

function DefaultValue({ id, title, render, defaultValue, expectedText }) {
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

function Controlled({ id, title, render, sample, valueProp, expectedText, accept }) {
  const stored = useRef(undefined);

  return (
    <Probe
      id={id}
      title={`${title} 设置值`}
      check={(root) => {
        const actual = selectionText(root);
        assert(actual === expectedText, `期望 ${expectedText}，实际 ${actual}`);
        if (accept) accept(stored.current);
        return `${actual} / ${JSON.stringify(stored.current)}`;
      }}
    >
      {render({
        value: sample,
        valueProp,
        onChange: (next) => {
          stored.current = next;
        },
      })}
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
        assert(form.getFieldValue('field') == null, `空表单不应有值 ${JSON.stringify(form.getFieldValue('field'))}`);
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

function FormInitial({ id, title, render, initial, expectedText, accept }) {
  const [form] = Form.useForm();

  return (
    <Probe
      id={id}
      title={`${title} 表单初始值`}
      check={(root) => {
        const stored = form.getFieldValue('field');
        assert(stored != null, '初始值未进入表单');
        const actual = selectionText(root);
        assert(actual === expectedText, `期望 ${expectedText}，实际 ${actual}`);
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

function FormSet({ id, title, render, sample, expectedText, accept }) {
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
        const actual = selectionText(root);
        assert(actual === expectedText, `期望 ${expectedText}，实际 ${actual}`);
        if (accept) accept(stored);
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

function Cases({ id, title, render, samples }) {
  return (
    <div>
      <h2>{title}</h2>
      <Basic id={`${id}-basic`} title={title} render={render} />
      <DefaultValue
        id={`${id}-default`}
        title={title}
        render={render}
        defaultValue={samples.defaultValue}
        expectedText={samples.defaultText}
      />
      <Controlled
        id={`${id}-value`}
        title={title}
        render={render}
        sample={samples.value}
        valueProp={samples.valueProp}
        expectedText={samples.valueText}
        accept={samples.acceptValue}
      />
      <InForm id={`${id}-form`} title={title} render={render} />
      <FormInitial
        id={`${id}-initial`}
        title={title}
        render={render}
        initial={samples.initial}
        expectedText={samples.initialText}
        accept={samples.acceptInitial}
      />
      <FormSet
        id={`${id}-set`}
        title={title}
        render={render}
        sample={samples.set}
        expectedText={samples.setText}
        accept={samples.acceptSet}
      />
    </div>
  );
}

export default function ValueHOCSuite() {
  return (
    <div style={{ padding: 16 }}>
      <Summary />
      <Cases
        id="array-entity"
        title="ArrayEntityValueHOC"
        render={(props) => (
          <ArrayEntityValueHOC {...props}>
            <MiniSelect fieldNames={props.valueProp === 'id' ? { label: 'label', value: 'id' } : undefined} />
          </ArrayEntityValueHOC>
        )}
        samples={{
          defaultValue: 'a',
          defaultText: '甲',
          valueProp: 'id',
          value: 'id-b',
          valueText: '乙',
          acceptValue: (value) => expectEntity(value, 'id', '乙'),
          initial: 'a',
          initialText: '甲',
          acceptInitial: (value) => expectEntity(value, 'value', '甲'),
          set: 'b',
          setText: '乙',
          acceptSet: (value) => expectEntity(value, 'value', '乙'),
        }}
      />
      <PagingResolve />
      <PagingStale />
      <Cases
        id="tree-entity"
        title="TreeEntityValueHOC"
        render={(props) => (
          <TreeEntityValueHOC {...props}>
            <MiniTree
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
          valueText: '子',
          acceptValue: (value) => expectEntity(value, 'id', '子'),
          initial: 'c',
          initialText: '子',
          acceptInitial: (value) => expectEntity(value, 'value', '子'),
          set: 'p',
          setText: '父',
          acceptSet: (value) => expectEntity(value, 'value', '父'),
        }}
      />
      <Cases
        id="async-tree-entity"
        title="AsyncTreeEntityValueHOC"
        render={(props) => (
          <AsyncTreeEntityValueHOC {...props}>
            <MiniTree />
          </AsyncTreeEntityValueHOC>
        )}
        samples={{
          defaultValue: 'c',
          defaultText: '子',
          value: 'c',
          valueText: '子',
          acceptValue: (value) => expectEntity(value, 'value', '子'),
          initial: 'c',
          initialText: '子',
          acceptInitial: (value) => expectEntity(value, 'value', '子'),
          set: 'p',
          setText: '父',
          acceptSet: (value) => expectEntity(value, 'value', '父'),
        }}
      />
    </div>
  );
}

function PagingResolve() {
  const stored = useRef(undefined);

  return (
    <Probe
      id="array-entity-paging"
      title="ArrayEntityValueHOC 分页数据还原实体"
      check={() => {
        expectEntity(stored.current, 'value', '甲');
        return JSON.stringify(stored.current);
      }}
    >
      <ArrayEntityValueHOC
        value="a"
        getOptionsByDataSource={(dataSource) => dataSource?.data}
        onChange={(next) => {
          stored.current = next;
        }}
      >
        <MiniPaging />
      </ArrayEntityValueHOC>
    </Probe>
  );
}

function PagingStale() {
  const stored = useRef(undefined);

  return (
    <Probe
      id="array-entity-paging-stale"
      title="ArrayEntityValueHOC 分页重新搜索清掉旧页"
      check={() => {
        assert(
          stored.current == null || typeof stored.current !== 'object',
          `旧页被还原成 ${JSON.stringify(stored.current)}`,
        );
        return 'stale dropped';
      }}
    >
      <ArrayEntityValueHOC
        value="stale"
        getOptionsByDataSource={(dataSource) => dataSource?.data}
        onChange={(next) => {
          stored.current = next;
        }}
      >
        <MiniPaging />
      </ArrayEntityValueHOC>
    </Probe>
  );
}
