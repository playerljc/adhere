import React, { memo, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Collapse from './Collapse';
import Table from './Table';
import type { PropsProps, TableColumn } from './types';

const selectPrefix = 'adhere-ui-playground-props';

/**
 * Props组件
 * @component Props
 * @description 属性说明组件，用于展示组件的属性配置信息
 * @param props - 组件属性
 * @param props.data - 属性数据列表
 * @param props.children - 子组件
 * @param props.restProps - 其他传递给Collapse的属性
 * @returns JSX.Element
 * @example
 * ```tsx
 * <Props 
 *   data={[
 *     { params: 'name', desc: '组件名称', type: 'string', defaultVal: '-' },
 *     { params: 'disabled', desc: '是否禁用', type: 'boolean', defaultVal: 'false' }
 *   ]}
 *   title="组件属性"
 * >
 *   属性说明内容
 * </Props>
 * ```
 */
const Props = memo<PropsProps>((props) => {
  const { data = [], children, ...restProps } = props;

  /**
   * 表格列配置
   * @constant columns
   * @description 定义属性表格的列配置
   */
  const columns = useMemo<TableColumn[]>(
    () => [
      {
        title: Intl.get('parameter'),
        key: 'params',
        dataIndex: 'params',
        width: '20%',
      },
      {
        title: Intl.get('description'),
        key: 'desc',
        dataIndex: 'desc',
        width: '50%',
      },
      {
        title: Intl.get('type'),
        key: 'type',
        dataIndex: 'type',
        width: '15%',
        render: (value) => <code className={`${selectPrefix}-highlight`}>{value}</code>,
      },
      {
        title: Intl.get('default_value'),
        key: 'defaultVal',
        dataIndex: 'defaultVal',
        width: '15%',
        render: (value) => <code>{value ? value : '-'}</code>,
      },
    ],
    [],
  );

  return (
    <Collapse {...restProps}>
      <div className={selectPrefix}>
        <Table
          columns={columns}
          dataSource={(data || []).map((t, i) => ({ ...t, id: `${i + 1}` }))}
          rowKey="id"
        />
      </div>
    </Collapse>
  );
});

Props.displayName = 'Props';

export default Props;
