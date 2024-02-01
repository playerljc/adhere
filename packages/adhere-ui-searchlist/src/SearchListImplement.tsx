import { Avatar, Card, Checkbox, List } from 'antd';
import { CardProps } from 'antd/es/card';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ListItemMetaProps, ListItemProps } from 'antd/es/list';
import { TableRowSelection } from 'antd/es/table/interface';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject, createRef, forwardRef } from 'react';

import { DownOutlined, RightOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import SearchList, { defaultProps, propTypes } from './SearchList';
import type {
  ISearchListImplement,
  ListExpandable,
  SearchListImplementFactoryFunction,
  SearchListImplementProps,
  SearchListImplementState,
  SearchListProps,
  SearchListState,
} from './types';
import { Metas } from './types';

export const selectorPrefix = 'adhere-ui-search-table-implement';

const defaultMetas: any = {
  ...{
    title: {
      dataIndex: 'title',
    },
    subTitle: {
      dataIndex: 'subTitle',
    },
    description: {
      dataIndex: 'description',
    },
    avatar: {
      dataIndex: 'avatar',
    },
    actions: {
      dataIndex: 'actions',
      cardActionProps: 'actions',
    },
    content: {
      dataIndex: 'content',
    },
    extra: {
      dataIndex: 'extra',
    },
  },
};

export class SearchListImplement<P extends SearchListProps, S extends SearchListState>
  extends SearchList<SearchListImplementProps, SearchListImplementState>
  implements ISearchListImplement
{
  static displayName = 'SearchListImplement';

  innerWrapRef: RefObject<HTMLDivElement> = createRef();

  constructor(props) {
    super(props);

    // @ts-ignore
    Object.assign(this.state, {
      ...this.getParams(),
      // 查询参数
      searchParams: {
        ...this.getParams(),
      },
      selectedRowKeys: [],
      selectedRows: [],
    });

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    // @ts-ignore
    super.componentDidMount();

    // @ts-ignore
    const { getListWrapperInstance } = this.props;

    if (getListWrapperInstance) {
      getListWrapperInstance(this.innerWrapRef);
    }
  }

  /**
   * getFetchListPropName
   * @override
   * @description - 获取调用列表接口的函数名
   * @return {string}
   */
  getFetchListPropName(): string {
    return '';
  }

  /**
   * getFetchListPropNameToFirstUpper
   * @override
   * @description - 获取调用列表接口的函数名首字母大写
   * @return {string}
   */
  getFetchListPropNameToFirstUpper(): string {
    const fetchListPropName = this.getFetchListPropName();

    if (fetchListPropName.length > 1) {
      return `${fetchListPropName.charAt(0).toUpperCase()}${fetchListPropName.substring(1)}`;
    }

    return fetchListPropName;
  }

  /**
   * onSelectChange
   * @description - onSelectChange
   * @param {string} property
   * @param {string} v
   */
  onSelectChange = (property: string, v: string): void => {
    // @ts-ignore
    this.setState({
      [property]: v,
    });
  };

  /**
   * onInputChange
   * @description - onInputChange
   * @param {string} property
   * @param {any} e
   */
  onInputChange = (property: string, e): void => {
    // @ts-ignore
    this.setState({
      [property]: e.target.value.trim(),
    });
  };

  /**
   * onDateTimeRangeChange
   * @description - onDateTimeRangeChange
   * @param {string[]} propertys
   * @param {any[]} dayjs
   */
  onDateTimeRangeChange = (propertys: string[], dayjs: any[]) => {
    // @ts-ignore
    this.setState({
      [propertys[0]]: dayjs && dayjs.length ? dayjs[0] : null,
      [propertys[1]]: dayjs && dayjs.length ? dayjs[1] : null,
    });
  };

  /**
   * getParams
   * @override
   * @description - 获取查询参数对象
   * @return {object}
   */
  getParams(): object {
    return {};
  }

  /**
   * getServiceName
   * @override
   * @description - 获取接口服务的model名称
   * @return {string}
   */
  getServiceName(): string {
    return '';
  }

  /**
   * getFetchDataParams
   * @override
   * @description - 获取调用数据接口的参数
   * @return {object}
   */
  getFetchDataParams(): object {
    return {};
  }

  /**
   * isShowNumber
   * @description - 是否线上序号列
   * @override
   * @return {boolean}
   */
  isShowNumber(): boolean {
    return true;
  }

  /**
   * getNumberGeneratorRule
   * @override
   * @description - 表格序号列的生成规则
   * @return {symbol}
   */
  getNumberGeneratorRule(): symbol {
    return SearchList.NUMBER_GENERATOR_RULE_CONTINUITY;
  }

  /**
   * getRowKey
   * @override
   * @description - 数据的主键
   * @return {string}
   */
  getRowKey(): string {
    return 'id';
  }

  /**
   * getDataKey
   * @description - 获取数据的key
   * @protected
   * @return {string}
   */
  getDataKey(): string {
    return 'list';
  }

  /**
   * getTotalKey
   * @description - 获取total的key
   * @protected
   * @return {string}
   */
  getTotalKey(): string {
    return 'totalCount';
  }

  /**
   * getData
   * @description - Table的数据(Table的dataSource字段)
   * @override
   * @return {object[]}
   */
  getData(): object[] {
    // @ts-ignore
    return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  /**
   * getTotal
   * @description - Table数据的总条数
   * @override
   * @return {number}
   */
  getTotal(): number {
    // @ts-ignore
    return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  /**
   * getRowSelection
   * @override
   * @description - 获取表格行选择对象
   * @return {TableRowSelection<object>}
   */
  getRowSelection(): TableRowSelection<object> {
    const filter = (selected: boolean, records: any[]): void => {
      const rowKey = this.getRowKey();

      if (selected) {
        // add

        // @ts-ignore
        this.setState({
          selectedRowKeys: [
            // @ts-ignore
            ...(this.state.selectedRowKeys || []),
            ...records.map((r) => r[rowKey]),
          ],
          // @ts-ignore
          selectedRows: [...(this.state.selectedRows || []), ...records],
        });
      } else {
        // remove

        // @ts-ignore
        this.setState({
          // @ts-ignore
          selectedRows: (this.state.selectedRows || []).filter(
            (row) => !records.find((r) => r[rowKey] === row[rowKey]),
          ),

          // @ts-ignore
          selectedRowKeys: (this.state.selectedRowKeys || []).filter(
            (key) => !records.find((r) => r[rowKey] === key),
          ),
        });
      }
    };

    return {
      // @ts-ignore
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
        // @ts-ignore
        this.setState({
          selectedRowKeys,
          selectedRows,
        });
      },
    };
  }

  /**
   * renderSearchForm
   * @override
   * @description - 渲染Table查询的表单
   * @return {ReactNode}
   */
  renderSearchForm(): ReactNode {
    return null;
  }

  /**
   * renderInner
   * @override
   * @description - 渲染主体
   * @return {ReactElement | null}
   */
  renderInner() {
    const innerJSX = super.renderInner();
    return (
      <div ref={this.innerWrapRef} className={`${selectorPrefix}-table-wrapper`}>
        {innerJSX}
      </div>
    );
  }

  /**
   * renderSearchFooterItems
   * @description - 渲染表格的工具栏
   * @override
   * @return {any[]}
   */
  renderSearchFooterItems(): any[] {
    return [];
  }

  /**
   * clear
   * @description - 清空查询条件
   * @override
   */
  clearSearch(): Promise<void> {
    return new Promise<void>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          ...this.getParams(),
          // 查询参数
          searchParams: {
            ...this.getParams(),
          },
          selectedRowKeys: [],
          selectedRows: [],
        },
        () => {
          resolve();
        },
      );
    });
  }

  /**
   * clearPaging
   * @description 清除分页信息
   * @return {Promise<any>}
   */
  clearPaging(): Promise<void> {
    return new Promise((resolve) => {
      // @ts-ignore
      this.setState(
        {
          page: 1,
          // @ts-ignore
          limit: this.getLimit(),
        },
        () => {
          resolve();
        },
      );
    });
  }

  /**
   * showLoading
   * @description - 是否显示遮罩
   * @override
   */
  showLoading(): boolean {
    // @ts-ignore
    return this.props.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * getSearchParams
   * @description - 获取查询参数
   * @protected
   */
  getSearchParams(): any {
    // @ts-ignore
    const { page, limit, searchParams } = this.state;

    return {
      ...{
        page,
        limit,
        ...searchParams,
        ...this.getFetchDataParams(),
      },
    };
  }

  getMetas() {
    return {};
  }

  /**
   * fetchData
   * @description - 加载数据
   * @override
   */
  fetchData(): Promise<any> {
    return this.fetchDataExecute(this.getSearchParams());
  }

  /**
   * sync
   * @description 同步
   * @return Promise<any>
   */
  sync(): Promise<any> {
    return new Promise((resolve) => {
      // @ts-ignore
      const page = this.state.page as number;

      if (page === 1) {
        this.fetchData().then((res) => resolve(res));
      } else {
        const res = this.fetchData().then(() => {
          const data = this.getData();

          if (data.length) {
            resolve(res);
          } else {
            // @ts-ignore
            this.setState(
              {
                page: page - 1,
              },
              () => {
                this.fetchData().then((res) => resolve(res));
              },
            );
          }
        });
      }
    });
  }

  /**
   * fetchDataExecute
   * @description - 真正的执行获取列表数据的接口
   * @param searchParams
   * @protected
   */
  fetchDataExecute(searchParams: object): Promise<any> {
    // @ts-ignore
    return this.props[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }

  /**
   * onSearch
   * @description - 点击查询
   * @override
   */
  onSearch(): Promise<any> {
    const keys = Object.keys(this.getParams());
    const params = {};
    keys.forEach((key) => {
      // @ts-ignore
      params[key] = this.state[key];
    });

    return new Promise<void>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          searchParams: {
            ...params,
          },
        },
        () => {
          this.fetchData().then((res) => {
            resolve(res);
          });
        },
      );
    });
  }

  /**
   * selectCheckBoxChange
   * @description 选择的CheckBox改变
   * @param {CheckboxChangeEvent} e
   * @param {any} record
   */
  selectCheckBoxChange(e: CheckboxChangeEvent, record: any) {
    const rowSelection = this.getRowSelection();

    const rowKey = this.getRowKey();
    const checked = e.target.checked;
    // @ts-ignore
    const originSelectedRowKeys: any[] = [...(this.state.selectedRowKeys || [])];
    const data = this.getData();
    const id = record[rowKey];
    const selectedRowKeys = checked
      ? [id, ...originSelectedRowKeys]
      : originSelectedRowKeys.filter((_key) => _key !== id);
    const selectedRows: any[] = selectedRowKeys.map((_key) => data.find((t) => t[rowKey] === _key));

    rowSelection?.onChange?.(selectedRowKeys, selectedRows, {
      type: checked ? 'single' : 'invert',
    });
  }

  /**
   * unSelectedAll
   * @description 取消所有选取
   * @return {Promise<void>}
   */
  unSelectedAll(): Promise<void> {
    return new Promise((resolve) => {
      const rowSelection = this.getRowSelection();

      rowSelection?.onChange?.([], [], {
        type: 'multiple',
      });

      resolve();
    });
  }

  /**
   * renderItemSelection
   * @description 渲染selection
   * @param {object} record
   * @return {ReactNode}
   */
  renderItemSelection(record: any): ReactNode {
    // @ts-ignore
    const checked = this.state.selectedRowKeys?.includes(record[this.getRowKey()]);

    return (
      <div className={`${selectorPrefix}-list-row-selection-checkbox`}>
        <Checkbox
          checked={checked}
          onChange={(e) => {
            this.selectCheckBoxChange(e, record);
          }}
        />
      </div>
    );
  }

  /**
   * renderSmallNormalItem
   * @description 渲染Small的NormalItem
   * @param record
   * @param rowIndex
   */
  renderSmallNormalItem(record: any, rowIndex: number): ReactNode {
    const metas: Metas<any> = {
      ...defaultMetas,
      ...(this.getMetas() ?? {}),
    };

    const avatar =
      metas?.avatar?.render?.(record?.[metas.avatar.dataIndex], record, rowIndex) ||
      (metas.avatar && record?.[metas.avatar.dataIndex] && (
        <Avatar src={record?.[metas.avatar.dataIndex]} />
      ));

    const subTitle =
      metas?.subTitle?.render?.(record?.[metas.subTitle.dataIndex], record, rowIndex) ||
      (metas.subTitle && record?.[metas.subTitle.dataIndex]);

    const title =
      metas?.title?.render?.(record?.[metas.title.dataIndex], record, rowIndex) ||
      (metas.title && record?.[metas.title.dataIndex]);

    const metaProps: ListItemMetaProps = {};

    if (avatar) metaProps.avatar = avatar;
    if (title) {
      metaProps.title = title;

      if (subTitle) {
        metaProps.title = (
          <div className={`${selectorPrefix}-list-meta-title-wrap`}>
            <div className={`${selectorPrefix}-list-meta-title`}>{title}</div>
            <div className={`${selectorPrefix}-list-meta-subTitle`}>{subTitle}</div>
          </div>
        );
      }
    }

    return <List.Item.Meta {...metaProps} />;
  }

  /**
   * renderNormalItem
   * @description 渲染列表的行(标准模式)
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderNormalItem(record: any, rowIndex: number): ReactNode {
    const metas: Metas<any> = {
      ...defaultMetas,
      ...(this.getMetas() ?? {}),
    };

    // @ts-ignore
    const direction = !('itemLayout' in this.props.antdListProps)
      ? 'horizontal'
      : // @ts-ignore
        this.props.antdListProps.itemLayout;

    const avatar =
      metas?.avatar?.render?.(record?.[metas.avatar.dataIndex], record, rowIndex) ||
      (metas.avatar && record?.[metas.avatar.dataIndex] && (
        <Avatar src={record?.[metas.avatar.dataIndex]} />
      ));

    const subTitle =
      metas?.subTitle?.render?.(record?.[metas.subTitle.dataIndex], record, rowIndex) ||
      (metas.subTitle && record?.[metas.subTitle.dataIndex]);

    const title =
      metas?.title?.render?.(record?.[metas.title.dataIndex], record, rowIndex) ||
      (metas.title && record?.[metas.title.dataIndex]);

    const description =
      metas?.description?.render?.(record?.[metas.description.dataIndex], record, rowIndex) ||
      (metas.description && record?.[metas.description.dataIndex]);

    const content =
      metas?.content?.render?.(record?.[metas.content.dataIndex], record, rowIndex) ||
      (metas.content && record?.[metas.content.dataIndex]);

    const metaProps: ListItemMetaProps = {};

    if (avatar) metaProps.avatar = avatar;
    if (title) {
      metaProps.title = title;

      if (subTitle) {
        metaProps.title = (
          <div className={`${selectorPrefix}-list-meta-title-wrap`}>
            <div className={`${selectorPrefix}-list-meta-title`}>{title}</div>
            <div className={`${selectorPrefix}-list-meta-subTitle`}>{subTitle}</div>
          </div>
        );
      }
    }
    if (description) metaProps.description = description;

    return (
      <>
        <List.Item.Meta {...metaProps} />
        {content && (
          <div className={classNames(`${selectorPrefix}-list-item-content`, direction)}>
            {content}
          </div>
        )}
      </>
    );
  }

  /**
   * renderNumberColumnInner
   * @description - 渲染序号列
   * @param {string | number} number
   * @param {record: any; index: number} params
   * @return {ReactNode}
   */
  renderNumberColumnInner(number: string | number, params: { record: any; index: number }) {
    return <span className={`${selectorPrefix}-list-number`}>{number}</span>;
  }

  /**
   * renderNumberColumn
   * @description 渲染序号列
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderNumberColumn(record, rowIndex): ReactNode {
    // @ts-ignore
    const { page = 0, limit = 10 } = this.state;

    // 序号列
    const numberGeneratorRule =
      this.getNumberGeneratorRule() ?? SearchList.NUMBER_GENERATOR_RULE_ALONE;

    return (
      <ConditionalRender
        conditional={numberGeneratorRule === SearchList.NUMBER_GENERATOR_RULE_ALONE}
        noMatch={() =>
          this.renderNumberColumnInner((page - 1) * limit + (rowIndex + 1), {
            record,
            index: rowIndex,
          })
        }
      >
        {() => this.renderNumberColumnInner(rowIndex + 1, { record, index: rowIndex })}
      </ConditionalRender>
    );
  }

  /**
   * getExpandable
   */
  getExpandable(): ListExpandable | null | undefined {
    return undefined;
  }

  /**
   * getListProps
   * @param record
   * @param rowIndex
   */
  getListProps(record, rowIndex) {
    const listProps: ListItemProps = {};

    const metas: Metas<any> = {
      ...defaultMetas,
      ...(this.getMetas() ?? {}),
    };

    const extra =
      metas?.extra?.render?.(record?.[metas.extra.dataIndex], record, rowIndex) ||
      (metas.extra && record?.[metas.extra.dataIndex]);

    const actions =
      metas?.actions?.render?.(record?.[metas.actions.dataIndex], record, rowIndex) ||
      (
        metas.actions &&
        record?.[metas.actions.dataIndex] &&
        record?.[metas.actions.dataIndex]
      )?.map((t) => <span>{t}</span>);

    if (extra) listProps.extra = extra;
    if (actions) listProps[metas.actions?.cardActionProps || 'actions'] = actions;

    return listProps;
  }

  /**
   * getSelectionClassName
   * @param {string} id
   */
  getSelectionClassName(id) {
    const rowSelection = this.getRowSelection();

    return classNames({
      [`${selectorPrefix}-list-selection`]:
        // @ts-ignore
        !!rowSelection && this.state.selectedRowKeys?.includes?.(id),
    });
  }

  /**
   * renderHorizontalNormal
   * @description 横向 默认的渲染
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderHorizontalNormal({ record, rowIndex }): ReactNode {
    const id = record[this.getRowKey()];

    const className = classNames(
      {
        [`${selectorPrefix}-list-item`]: true,
      },
      this.getSelectionClassName(id),
    );

    const rowSelection = this.getRowSelection();

    return (
      <List.Item
        className={className}
        key={record[this.getRowKey()]}
        {...this.getListProps(record, rowIndex)}
      >
        {this.isShowNumber() && (
          <div className={`${selectorPrefix}-list-number-wrap`}>
            {this.renderNumberColumn(record, rowIndex)}
          </div>
        )}
        {!!rowSelection && (
          <div className={`${selectorPrefix}-list-row-selection-checkbox-wrap`}>
            {this.renderItemSelection(record)}
          </div>
        )}
        {this.renderNormalItem(record, rowIndex)}
      </List.Item>
    );
  }

  /**
   * renderVerticalNormal
   * @description 纵向 默认的渲染
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderVerticalNormal({ record, rowIndex }): ReactNode {
    const id = record[this.getRowKey()];

    const className = classNames(
      {
        [`${selectorPrefix}-list-item-vertical`]: true,
        // @ts-ignore
        split: !('split' in this.props.antdListProps) || !!this.props.antdListProps.split,
      },
      this.getSelectionClassName(id),
    );

    const rowSelection = this.getRowSelection();

    return (
      <div className={className} key={record[this.getRowKey()]}>
        {this.isShowNumber() && (
          <div className={`${selectorPrefix}-list-number-wrap`}>
            {this.renderNumberColumn(record, rowIndex)}
          </div>
        )}
        {!!rowSelection && (
          <div className={`${selectorPrefix}-list-row-selection-checkbox-wrap`}>
            {this.renderItemSelection(record)}
          </div>
        )}

        <div className={`${selectorPrefix}-list-item-vertical-body`}>
          <List.Item
            className={`${selectorPrefix}-list-item`}
            {...this.getListProps(record, rowIndex)}
          >
            {this.renderNormalItem(record, rowIndex)}
          </List.Item>
        </div>
      </div>
    );
  }

  /**
   * renderCard
   * @description 使用Card渲染item
   * @param {any} record
   * @param {number} rowIndex
   * @param {any} grid
   * @return {ReactNode}
   */
  renderCard({ record, rowIndex, grid }): ReactNode {
    const metas: Metas<any> = {
      ...defaultMetas,
      ...(this.getMetas() ?? {}),
    };

    const rowSelection = this.getRowSelection();

    const avatar =
      metas?.avatar?.render?.(record?.[metas.avatar.dataIndex], record, rowIndex) ||
      (metas.avatar && record?.[metas.avatar.dataIndex] && (
        <Avatar src={record?.[metas.avatar.dataIndex]} />
      ));

    const subTitle =
      metas?.subTitle?.render?.(record?.[metas.subTitle.dataIndex], record, rowIndex) ||
      (metas.subTitle && record?.[metas.subTitle.dataIndex]);

    const title =
      metas?.title?.render?.(record?.[metas.title.dataIndex], record, rowIndex) ||
      (metas.title && record?.[metas.title.dataIndex]);

    const description =
      metas?.description?.render?.(record?.[metas.description.dataIndex], record, rowIndex) ||
      (metas.description && record?.[metas.description.dataIndex]);

    const metaProps: ListItemMetaProps = {};

    if (avatar) metaProps.avatar = avatar;
    if (title) {
      metaProps.title = title;

      if (subTitle) {
        metaProps.title = (
          <div className={`${selectorPrefix}-list-meta-title-wrap`}>
            <div className={`${selectorPrefix}-list-meta-title`}>{title}</div>
            <div className={`${selectorPrefix}-list-meta-subTitle`}>{subTitle}</div>
          </div>
        );
      }
    }
    if (description) metaProps.description = description;

    const cardProps: CardProps = {};

    const content =
      metas?.content?.render?.(record?.[metas.content.dataIndex], record, rowIndex) ||
      (metas.content && record?.[metas.content.dataIndex]);

    const extra =
      metas?.extra?.render?.(record?.[metas.extra.dataIndex], record, rowIndex) ||
      (metas.extra && record?.[metas.extra.dataIndex]);

    const actions =
      metas?.actions?.render?.(record?.[metas.actions.dataIndex], record, rowIndex) ||
      (
        metas.actions &&
        record?.[metas.actions.dataIndex] &&
        record?.[metas.actions.dataIndex]
      )?.map((t) => <span>{t}</span>);

    if (extra) cardProps.extra = extra;
    if (actions) cardProps[metas.actions?.cardActionProps || 'actions'] = actions;
    if (this.isShowNumber() || !!rowSelection) {
      cardProps.title = (
        <div className={`${selectorPrefix}-list-card-title`}>
          {this.isShowNumber() && this.renderNumberColumn(record, rowIndex)}
          {!!rowSelection && this.renderItemSelection(record)}
        </div>
      );
    }

    const id = record[this.getRowKey()];

    return (
      <Card {...cardProps} className={this.getSelectionClassName(id)}>
        <Card.Meta {...metaProps} />

        {content && <p>{content}</p>}
      </Card>
    );
  }

  /**
   * renderHorizontalGrid
   * @description 横向 Card渲染item
   * @param {any} record
   * @param {number} rowIndex
   * @param {} grid
   * @return {ReactNode}
   */
  renderHorizontalGrid({ record, rowIndex, grid }): ReactNode {
    return (
      <List.Item key={record[this.getRowKey()]}>
        {this.renderCard({ record, rowIndex, grid })}
      </List.Item>
    );
  }

  /**
   * renderVerticalGrid
   * @description 横向 Card渲染item
   * @param {any} record
   * @param {number} rowIndex
   * @param {} grid
   * @return {ReactNode}
   */
  renderVerticalGrid({ record, rowIndex, grid }): ReactNode {
    return this.renderHorizontalGrid({ record, rowIndex, grid });
  }

  /**
   * renderExpandable
   * @param record
   * @param rowIndex
   * @param collapseChildren
   * @param children
   */
  renderExpandable({ record, rowIndex, collapseChildren, children }) {
    // @ts-ignore
    const direction = !('itemLayout' in this.props.antdListProps)
      ? 'horizontal'
      : // @ts-ignore
        this.props.antdListProps.itemLayout;

    const id = record[this.getRowKey()];

    const className = classNames(
      {
        [`${selectorPrefix}-list-item-${direction}`]: true,
        // @ts-ignore
        split: !('split' in this.props.antdListProps) || !!this.props.antdListProps.split,
      },
      this.getSelectionClassName(id),
    );

    const rowSelection = this.getRowSelection();

    const { expandedRowKeys, onExpandedRowsChange } = this.getExpandable() as ListExpandable;

    // 是否已经折叠(合上了)
    const collapse = !expandedRowKeys.includes(id);

    return (
      <div className={className} key={id}>
        {this.isShowNumber() && (
          <div className={`${selectorPrefix}-list-number-wrap`}>
            {this.renderNumberColumn(record, rowIndex)}
          </div>
        )}

        {!!rowSelection && (
          <div className={`${selectorPrefix}-list-row-selection-checkbox-wrap`}>
            {this.renderItemSelection(record)}
          </div>
        )}

        <div className={`${selectorPrefix}-list-expandable-trigger`}>
          {collapse && (
            <RightOutlined
              onClick={() => {
                const _expandedRowKeys = this.getExpandable()?.expandedRowKeys || [];
                onExpandedRowsChange?.([..._expandedRowKeys, id]);
              }}
            />
          )}
          {!collapse && (
            <DownOutlined
              onClick={() => {
                const _expandedRowKeys = this.getExpandable()?.expandedRowKeys || [];
                onExpandedRowsChange?.(_expandedRowKeys.filter((t) => t !== id));
              }}
            />
          )}
        </div>

        <div className={`${selectorPrefix}-list-item-${direction}-body`}>
          {collapse && collapseChildren}
          {!collapse && children}
        </div>
      </div>
    );
  }

  /**
   * renderHorizontalExpandable
   * @description 横向 可展开渲染item
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderHorizontalExpandable({ record, rowIndex }): ReactNode {
    const listProps = this.getListProps(record, rowIndex);

    return this.renderExpandable({
      record,
      rowIndex,
      collapseChildren: (
        <List.Item className={`${selectorPrefix}-list-item`} {...listProps}>
          {this.renderSmallNormalItem(record, rowIndex)}
        </List.Item>
      ),
      children: (
        <List.Item className={`${selectorPrefix}-list-item`} {...listProps}>
          {this.renderNormalItem(record, rowIndex)}
        </List.Item>
      ),
    });
  }

  /**
   * renderVerticalExpandable
   * @description 纵向 可展开渲染item
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderVerticalExpandable({ record, rowIndex }): ReactNode {
    const listProps = this.getListProps(record, rowIndex);

    return this.renderExpandable({
      record,
      rowIndex,
      collapseChildren: (
        <List.Item className={`${selectorPrefix}-list-item`} {...listProps}>
          {this.renderSmallNormalItem(record, rowIndex)}
        </List.Item>
      ),
      children: (
        <List.Item className={`${selectorPrefix}-list-item`} {...listProps}>
          {this.renderNormalItem(record, rowIndex)}
        </List.Item>
      ),
    });
  }

  /**
   * renderItem
   * @description 渲染列表的item
   * @param record
   * @param rowIndex
   */
  renderItem(record: any, rowIndex: number): ReactNode {
    //  横向
    //    普通的
    //    卡片的
    //    可折叠的
    //  纵向
    //    普通的
    //    卡片的
    //    可折叠的
    const {
      antdListProps: { itemLayout, grid },
    } =
      // @ts-ignore
      this.props;

    const expandable = this.getExpandable();

    // 横向
    if (!itemLayout || itemLayout === 'horizontal') {
      // 卡片的
      if (!!grid && !!grid.column) {
        return this.renderHorizontalGrid({ record, rowIndex, grid });
      }

      // 可折叠的
      if (expandable) {
        return this.renderHorizontalExpandable({ record, rowIndex });
      }

      // 默认的
      return this.renderHorizontalNormal({ record, rowIndex });
    }
    // 纵向
    else if (itemLayout === 'vertical') {
      // 卡片的
      if (!!grid && !!grid.column) {
        return this.renderVerticalGrid({ record, rowIndex, grid });
      }

      // 可折叠的
      if (expandable) {
        return this.renderVerticalExpandable({ record, rowIndex });
      }

      // 默认的
      return this.renderVerticalNormal({ record, rowIndex });
    }

    return null;
  }

  /**
   * renderSelectionListHeader
   * @description 渲染SelectionListHeader
   * @return {ReactNode}
   */
  renderSelectionListHeader(): ReactNode {
    return (
      <div className={`${selectorPrefix}-list-row-selection-header`}>
        <div className={`${selectorPrefix}-list-row-selection-header-info`}>
          {Intl.v('已选择{count}项', {
            // @ts-ignore
            count: this.state.selectedRowKeys?.length,
          })}
        </div>
        <div className={`${selectorPrefix}-list-row-selection-header-cancel`}>
          <a
            onClick={() => {
              this.unSelectedAll();
            }}
          >
            {Intl.v('取消选择')}
          </a>
        </div>
      </div>
    );
  }

  /**
   * renderListHeader
   * @description 选人列表的header
   * @return {ReactNode}
   */
  renderListHeader(): ReactNode {
    const rowSelection = this.getRowSelection();

    // 如果是选取模式则header上显示选取信息
    if (rowSelection) {
      // @ts-ignore
      if (!!this.state.selectedRowKeys?.length) {
        return this.renderSelectionListHeader();
      }
    }

    return null;
  }

  renderSearchFormAfter(): ReactNode {
    return null;
  }

  renderSearchFormBefore(): ReactNode {
    return null;
  }

  renderSearchFooter(): ReactNode {
    return null;
  }

  renderSearchHeader(): ReactNode {
    return null;
  }

  renderSearchFormToolBarDefaultPanel(): ReactNode {
    return null;
  }

  renderSearchFormToolBarItems(defaultItems: ReactElement[]): ReactNode[] {
    return defaultItems;
  }
}

SearchListImplement.defaultProps = {
  ...defaultProps,
};

SearchListImplement.propTypes = {
  ...propTypes,
  getListWrapperInstance: PropTypes.func,
};

/**
 * SearchListImplementFactory
 * @description 创建SearchListImplementFactory
 * @param serviceNames
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @constructor
 */
const SearchListImplementFactory: SearchListImplementFactoryFunction<any, any> = ({
  serviceNames = [],
  mapStateToProps,
  mapDispatchToProps,
}) => {
  const _mapStateToProps = (state) => ({
    ...ServiceRegister.mapStateToProps({
      namespaces: serviceNames || [],
      state,
    }),
    ...{
      loading: state.loading,
    },
    ...(mapStateToProps ? mapStateToProps(state) : {}),
  });

  const _mapDispatchToProps = (dispatch) => ({
    ...ServiceRegister.mapDispatchToProps({
      namespaces: serviceNames || [],
      dispatch,
    }),
    ...(mapDispatchToProps ? mapDispatchToProps(dispatch) : {}),
  });

  return (Component) =>
    ServiceRegister.connect(serviceNames || [])(_mapStateToProps, _mapDispatchToProps)(
      forwardRef<any, any>((props, ref) => (
        // @ts-ignore
        <Component
          ref={ref}
          className={`${selectorPrefix}-wrap`}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          {...props}
        />
      )),
    );
};

export default SearchListImplementFactory;
