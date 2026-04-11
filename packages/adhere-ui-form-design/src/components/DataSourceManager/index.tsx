import classNames from 'classnames';
import React, {
  type FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import clone from 'rfdc';

import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  InputNumberInteger,
  Modal,
  Popconfirm,
  Radio,
  Space,
} from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';
import type { DataSourceItemConfig } from '../../types';
import PropertiesGridLayout, { Label, TopAlignValue } from '../TableGridLayout';

export interface DataSourceManagerProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-data-source-manager`;

const deepClone = clone();

type DataSourcePairField = {
  key?: string;
  value?: string;
};

type FormValues = {
  name: string;
  url: string;
  method: DataSourceItemConfig['request']['method'];
  headerPairs?: DataSourcePairField[];
  paramPairs?: DataSourcePairField[];
  codeKey: string;
  codeSuccess: number;
  dataKey: string;
};

function recordToPairs(
  record?: Record<string, string | number | undefined>,
): DataSourcePairField[] {
  if (!record || !Object.keys(record).length) return [];
  return Object.entries(record).map(([key, value]) => ({
    key,
    value: value === undefined || value === null ? '' : String(value),
  }));
}

function pairsToRecord(pairs: DataSourcePairField[] | undefined): Record<string, string> {
  const o: Record<string, string> = {};
  for (const p of pairs ?? []) {
    const k = p.key?.trim();
    if (k) o[k] = p.value ?? '';
  }
  return o;
}

function createEmptyDataSource(): DataSourceItemConfig {
  return {
    id: Util.uuid(),
    name: '',
    request: {
      url: '',
      method: 'get',
      headers: {},
      data: {},
      codeKey: 'code',
      codeSuccess: 200,
      dataKey: 'data',
    },
    response: {},
  };
}

function itemToFormValues(item: DataSourceItemConfig): FormValues {
  const { request } = item;
  return {
    name: item.name,
    url: request.url,
    method: request.method,
    headerPairs: recordToPairs(request.headers as Record<string, string> | undefined),
    paramPairs: recordToPairs(request.data as Record<string, string> | undefined),
    codeKey: request.codeKey ?? 'code',
    codeSuccess: request.codeSuccess ?? 200,
    dataKey: request.dataKey ?? 'data',
  };
}

function normalizeCodeSuccess(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 200;
}

function formValuesToItem(base: DataSourceItemConfig, v: FormValues): DataSourceItemConfig {
  return {
    ...base,
    name: v.name,
    request: {
      ...base.request,
      url: v.url,
      method: v.method,
      headers: pairsToRecord(v.headerPairs),
      data: pairsToRecord(v.paramPairs),
      codeKey: (v.codeKey ?? '').trim() || 'code',
      codeSuccess: normalizeCodeSuccess(v.codeSuccess),
      dataKey: (v.dataKey ?? '').trim() || 'data',
    },
  };
}

const DataSourceManager: FC<DataSourceManagerProps> = ({
  defaultOpen = false,
  open: openProp,
  onOpenChange,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;
  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  const [editingList, setEditingList] = useState<DataSourceItemConfig[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { getDesignValue, setDataSourceConfig } = useContext(DesignContext);

  const getDesignValueRef = useRef(getDesignValue);
  getDesignValueRef.current = getDesignValue;

  const openedDataSourceIdsRef = useRef<Set<string>>(new Set());

  /** 始终指向最新的 editingList，避免 useEffect 闭包读到过期值 */
  const editingListRef = useRef(editingList);
  editingListRef.current = editingList;

  /** 记录上一个 selectedId，用于切换时自动保存表单值 */
  const prevSelectedIdRef = useRef<string | null>(null);

  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) return;
    const cfg = getDesignValueRef.current()?.dataSourceConfig ?? [];
    openedDataSourceIdsRef.current = new Set(cfg.map((c) => c.id));
    const next = cfg.map((c) => deepClone(c) as DataSourceItemConfig);
    prevSelectedIdRef.current = null;
    setEditingList(next);
    setSelectedId(next[0]?.id ?? null);
  }, [open]);

  useEffect(() => {
    const prevId = prevSelectedIdRef.current;

    // 切换前把当前表单值写回 prevId 对应的条目
    if (prevId) {
      const values = form.getFieldsValue() as FormValues;
      const prevItem = editingListRef.current.find((i) => i.id === prevId);
      if (prevItem) {
        const updated = formValuesToItem(prevItem, values);
        setEditingList((prev) => prev.map((item) => (item.id === prevId ? updated : item)));
      }
    }

    prevSelectedIdRef.current = selectedId;

    if (!selectedId) {
      form.resetFields();
      return;
    }

    const item = editingListRef.current.find((i) => i.id === selectedId);
    if (item) {
      form.setFieldsValue(itemToFormValues(item));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const handleAdd = () => {
    const created = createEmptyDataSource();
    setEditingList((prev) => [...prev, created]);
    setSelectedId(created.id);
  };

  const handleCopy = (item: DataSourceItemConfig) => {
    const copy = deepClone(item) as DataSourceItemConfig;
    copy.id = Util.uuid();
    copy.name = `${item.name}_copy`;
    setEditingList((prev) => [...prev, copy]);
    setSelectedId(copy.id);
  };

  const handleDelete = (id: string) => {
    setEditingList((prev) => {
      const next = prev.filter((i) => i.id !== id);
      setSelectedId((sid) => (sid === id ? next[0]?.id ?? null : sid));
      return next;
    });
  };

  const handleSave = async () => {
    const rootId = getDesignValue()?.id;
    if (!rootId) return;

    if (!editingList.length) {
      setDataSourceConfig(rootId, []);
      setOpen(false);
      return;
    }

    if (!selectedId) {
      setDataSourceConfig(rootId, editingList);
      setOpen(false);
      return;
    }

    try {
      const v = (await form.validateFields()) as FormValues;
      const selectedItem = editingListRef.current.find((i) => i.id === selectedId);
      if (!selectedItem) return;
      const next = editingListRef.current.map((item) =>
        item.id === selectedId ? formValuesToItem(selectedItem, v) : item,
      );
      setDataSourceConfig(rootId, next);
      setOpen(false);
    } catch {
      // 校验失败
    }
  };

  const handleTestRequest = async () => {
    try {
      const v = (await form.validateFields([
        'url',
        'method',
        'headerPairs',
        'paramPairs',
      ])) as FormValues;
      const method = v.method.toUpperCase();
      let url = v.url;
      const headers = pairsToRecord(v.headerPairs);
      const data = pairsToRecord(v.paramPairs);

      const init: RequestInit = { method, headers: { ...headers } };

      if (method === 'GET' || method === 'DELETE') {
        const q = new URLSearchParams(data).toString();
        if (q) url += (url.includes('?') ? '&' : '?') + q;
      } else {
        init.headers = {
          'Content-Type': 'application/json',
          ...(init.headers as Record<string, string>),
        };
        init.body = JSON.stringify(data);
      }

      const res = await fetch(url, init);
      const text = await res.text();
      Modal.info({
        title: Intl.get('test_request'),
        width: 640,
        content: (
          <pre
            style={{
              maxHeight: 360,
              overflow: 'auto',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {text.length > 12000 ? `${text.slice(0, 12000)}\n…` : text}
          </pre>
        ),
      });
    } catch (e) {
      Modal.error({ title: Intl.get('test_request'), content: String(e) });
    }
  };

  const handleModalClose = () => setOpen(false);

  const handleActionsCancel = () => {
    if (!selectedId) return;
    if (openedDataSourceIdsRef.current.has(selectedId)) {
      // 已有记录：仅取消选中，不写回，相当于放弃本次修改
      prevSelectedIdRef.current = null; // 阻止 useEffect 保存
      setSelectedId(null);
    } else {
      handleDelete(selectedId);
    }
  };

  const renderPairList = useCallback(
    (name: 'headerPairs' | 'paramPairs') => (
      <Form.List name={name}>
        {(fields, { add, remove }) => (
          <div className={`${selectorPrefix}-pair-list`}>
            {fields.map(({ key, name: rowName, ...restField }) => (
              <div key={key} className={`${selectorPrefix}-pair-block`}>
                <div className={`${selectorPrefix}-pair-row`}>
                  <Form.Item
                    {...restField}
                    name={[rowName, 'key']}
                    className={`${selectorPrefix}-pair-key`}
                  >
                    <Input.OptimizedInput
                      placeholder={Intl.get('request_pair_key_placeholder')}
                      allowClear
                      showCount={false}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[rowName, 'value']}
                    className={`${selectorPrefix}-pair-value`}
                  >
                    <Input.OptimizedInput
                      placeholder={Intl.get('please_enter')}
                      allowClear
                      showCount={false}
                    />
                  </Form.Item>
                  <Button
                    type="text"
                    danger
                    className={`${selectorPrefix}-pair-remove`}
                    icon={<DeleteOutlined />}
                    aria-label={Intl.get('delete')}
                    onClick={() => remove(rowName)}
                  />
                </div>
              </div>
            ))}
            <div className={`${selectorPrefix}-pair-add`}>
              <Button
                type="link"
                htmlType="button"
                className={`${selectorPrefix}-pair-add-btn`}
                onClick={() => add({ key: '', value: '' })}
              >
                + {Intl.get('add')}
              </Button>
            </div>
          </div>
        )}
      </Form.List>
    ),
    [],
  );

  /**
   * formRows 完全稳定（renderPairList 为 useCallback 固定引用）。
   * TableGridLayout 用 memo + useMemo(data) 判断是否重算，formRows 稳定则表格不会重算，
   * Form.List 的 DOM 不会被销毁，add/remove 正常工作。
   */
  const formRows = useMemo<DataItemRow[]>(
    () => [
      {
        key: 'name',
        require: true,
        label: <Label>{Intl.get('name')}：</Label>,
        value: (
          <TopAlignValue>
            <Form.Item name="name" rules={[{ required: true, message: Intl.get('name') }]}>
              <Input.OptimizedInput allowClear showCount={false} placeholder={Intl.get('name')} />
            </Form.Item>
          </TopAlignValue>
        ),
      },
      {
        key: 'url',
        require: true,
        label: <Label>{Intl.get('request_url')}：</Label>,
        value: (
          <TopAlignValue>
            <Form.Item name="url" rules={[{ required: true, message: Intl.get('request_url') }]}>
              <Input.OptimizedInput
                allowClear
                showCount={false}
                placeholder={Intl.get('request_url')}
              />
            </Form.Item>
          </TopAlignValue>
        ),
      },
      {
        key: 'method',
        require: false,
        label: <Label>{Intl.get('request_method')}：</Label>,
        value: (
          <TopAlignValue>
            <Form.Item name="method">
              <Radio.ButtonRadio
                options={[
                  { label: 'GET', value: 'get' },
                  { label: 'POST', value: 'post' },
                  { label: 'PUT', value: 'put' },
                  { label: 'DELETE', value: 'delete' },
                ]}
              />
            </Form.Item>
          </TopAlignValue>
        ),
      },
      {
        key: 'headers',
        require: false,
        label: <Label>{Intl.get('request_headers')}：</Label>,
        value: <TopAlignValue>{renderPairList('headerPairs')}</TopAlignValue>,
      },
      {
        key: 'params',
        require: false,
        label: <Label>{Intl.get('request_params')}：</Label>,
        value: <TopAlignValue>{renderPairList('paramPairs')}</TopAlignValue>,
      },
      {
        key: 'codeKey',
        require: false,
        label: <Label>{Intl.get('data_source_code_key')}：</Label>,
        value: (
          <TopAlignValue>
            <Form.Item name="codeKey">
              <Input.OptimizedInput allowClear showCount={false} placeholder="code" />
            </Form.Item>
          </TopAlignValue>
        ),
      },
      {
        key: 'codeSuccess',
        require: false,
        label: <Label>{Intl.get('data_source_code_success')}：</Label>,
        value: (
          <TopAlignValue>
            <Form.Item name="codeSuccess">
              <InputNumberInteger placeholder="200" />
            </Form.Item>
          </TopAlignValue>
        ),
      },
      {
        key: 'dataKey',
        require: false,
        label: <Label>{Intl.get('data_source_data_key')}：</Label>,
        value: (
          <TopAlignValue>
            <Form.Item name="dataKey">
              <Input.OptimizedInput allowClear showCount={false} placeholder="data" />
            </Form.Item>
          </TopAlignValue>
        ),
      },
    ],
    [renderPairList],
  );

  const tableGridData = useMemo(
    () => [
      {
        name: 'dataSourceForm',
        width: '100%',
        columnCount: 1,
        colgroup: ['auto'] as ('auto' | number)[],
        data: formRows,
      },
    ],
    [formRows],
  );

  return (
    <Modal
      open={open}
      title={Intl.get('data_source_manager')}
      width={880}
      onCancel={handleModalClose}
      footer={null}
      destroyOnHidden
      zIndex={19999}
    >
      <div className={`${selectorPrefix}-modal-body-inner`}>
        <div className={selectorPrefix}>
          <div className={`${selectorPrefix}-fix`}>
            <div className={`${selectorPrefix}-list-actions`}>
              <Button type="primary" onClick={handleAdd}>
                + {Intl.get('add')}
              </Button>
            </div>

            <ul className={`${selectorPrefix}-list`}>
              {editingList.map((item) => (
                <li
                  key={item.id}
                  className={classNames(`${selectorPrefix}-list-item`, {
                    [`${selectorPrefix}-list-item-active`]: selectedId === item.id,
                  })}
                  onClick={() => setSelectedId(item.id)}
                >
                  <span
                    className={`${selectorPrefix}-list-item-text`}
                    title={`${item.request.method.toUpperCase()} -> ${item.name}`}
                  >
                    {item.request.method.toUpperCase()} -&gt; {item.name || '—'}
                  </span>
                  <span
                    className={`${selectorPrefix}-list-item-actions`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      type="link"
                      size="small"
                      icon={<CopyOutlined />}
                      aria-label={Intl.get('copy')}
                      onClick={() => handleCopy(item)}
                    />
                    <Popconfirm title={Intl.get('delete')} onConfirm={() => handleDelete(item.id)}>
                      <Button
                        type="link"
                        size="small"
                        danger
                        icon={<DeleteOutlined />}
                        aria-label={Intl.get('delete')}
                      />
                    </Popconfirm>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${selectorPrefix}-auto`}>
            {selectedId && (
              <div className={`${selectorPrefix}-actions`}>
                <Space>
                  <Button type="primary" onClick={handleSave}>
                    {Intl.get('save')}
                  </Button>
                  <Button onClick={handleTestRequest}>{Intl.get('test_request')}</Button>
                  <Button onClick={handleActionsCancel}>{Intl.get('cancel')}</Button>
                </Space>
              </div>
            )}

            <div className={`${selectorPrefix}-info`}>
              {selectedId ? (
                // 不使用 onValuesChange，避免每次输入触发 setEditingList → 组件重渲染 → Form.List 重建
                <Form form={form} layout="vertical">
                  <PropertiesGridLayout layout="vertical" data={tableGridData} />
                </Form>
              ) : (
                <div className={`${selectorPrefix}-info-empty`}>
                  {Intl.get('data_source_empty_hint')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DataSourceManager;
