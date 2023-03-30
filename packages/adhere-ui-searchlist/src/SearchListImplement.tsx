import { Avatar, Checkbox, Collapse, List } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ListItemMetaProps, ListItemProps } from 'antd/es/list';
import { TableRowSelection } from 'antd/es/table/interface';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject, createRef, forwardRef } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import SearchList, { defaultProps, propTypes } from './SearchList';
import type {
  ISearchListImplement,
  SearchListImplementFactoryFunction,
  SearchListImplementProps,
  SearchListImplementState,
  SearchListProps,
  SearchListState,
} from './types';
import { Metas } from './types';

export const selectorPrefix = 'adhere-ui-searchtableimplement';

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

const { Panel } = Collapse;

export class SearchListImplement<P extends SearchListProps, S extends SearchListState>
  extends SearchList<SearchListImplementProps, SearchListImplementState>
  implements ISearchListImplement
{
  innerWrapRef: RefObject<HTMLDivElement> = createRef();

  constructor(props) {
    super(props);

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
    super.componentDidMount();

    const { getListWrapperInstance } = this.props;

    if (getListWrapperInstance) {
      getListWrapperInstance(this.innerWrapRef);
    }
  }

  /**
   * getFetchListPropName
   * @override
   * @description - 获取调用列表接口的函数名
   */
  getFetchListPropName(): string {
    return '';
  }

  /**
   * getFetchListPropNameToFirstUpper
   * @override
   * @description - 获取调用列表接口的函数名首字母大写
   * @return string
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
   * @param property
   * @param v
   */
  onSelectChange = (property: string, v: string): void => {
    this.setState({
      [property]: v,
    });
  };

  /**
   * onInputChange
   * @description - onInputChange
   * @param property
   * @param e
   */
  onInputChange = (property: string, e): void => {
    this.setState({
      [property]: e.target.value.trim(),
    });
  };

  /**
   * onDateTimeRangeChange
   * @description - onDateTimeRangeChange
   * @param propertys
   * @param dayjs
   */
  onDateTimeRangeChange = (propertys: string[], dayjs: any[]) => {
    this.setState({
      [propertys[0]]: dayjs && dayjs.length ? dayjs[0] : null,
      [propertys[1]]: dayjs && dayjs.length ? dayjs[1] : null,
    });
  };

  /**
   * getParams
   * @override
   * @description - 获取查询参数对象
   */
  getParams(): object {
    return {};
  }

  /**
   * getServiceName
   * @override
   * @description - 获取接口服务的model名称
   */
  getServiceName(): string {
    return '';
  }

  /**
   * getFetchDataParams
   * @override
   * @description - 获取调用数据接口的参数
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
   */
  getNumberGeneratorRule(): symbol {
    return SearchList.NUMBER_GENERATOR_RULE_CONTINUITY;
  }

  /**
   * getRowKey
   * @override
   * @description - 数据的主键
   */
  getRowKey(): string {
    return 'id';
  }

  /**
   * getDataKey
   * @description - 获取数据的key
   * @protected
   */
  getDataKey(): string {
    return 'list';
  }

  /**
   * getTotalKey
   * @description - 获取total的key
   * @protected
   */
  getTotalKey(): string {
    return 'totalCount';
  }

  /**
   * getData
   * @description - Table的数据(Table的dataSource字段)
   * @override
   * @return {Array}
   */
  getData(): object[] {
    return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  /**
   * getTotal
   * @description - Table数据的总条数
   * @override
   */
  getTotal(): number {
    return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  /**
   * getRowSelection
   * @override
   * @description - 获取表格行选择对象
   */
  getRowSelection(): TableRowSelection<object> {
    const filter = (selected: boolean, records: any[]): void => {
      const rowKey = this.getRowKey();

      if (selected) {
        // add

        this.setState({
          selectedRowKeys: [
            ...(this.state.selectedRowKeys || []),
            ...records.map((r) => r[rowKey]),
          ],
          selectedRows: [...(this.state.selectedRows || []), ...records],
        });
      } else {
        // remove

        this.setState({
          selectedRows: (this.state.selectedRows || []).filter(
            (row) => !records.find((r) => r[rowKey] === row[rowKey]),
          ),

          selectedRowKeys: (this.state.selectedRowKeys || []).filter(
            (key) => !records.find((r) => r[rowKey] === key),
          ),
        });
      }
    };

    return {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
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
   */
  renderSearchForm(): ReactElement | null {
    return null;
  }

  /**
   * renderInner
   * @override
   * @description - 渲染主体
   */
  renderInner(): ReactElement | null {
    const innerJSX = super.renderInner();
    return (
      <div ref={this.innerWrapRef} className={`${selectorPrefix}-tablewrapper`}>
        {innerJSX}
      </div>
    );
  }

  /**
   * renderSearchFooterItems
   * @description - 渲染表格的工具栏
   * @override
   */
  renderSearchFooterItems(): any[] {
    return [];
  }

  /**
   * clear
   * @description - 清空查询条件
   * @override
   */
  clear(): Promise<void> {
    return new Promise<void>((resolve) => {
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
   * showLoading
   * @description - 是否显示遮罩
   * @override
   */
  showLoading(): boolean {
    return this.props.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * getSearchParams
   * @description - 获取查询参数
   * @protected
   */
  getSearchParams(): any {
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
      const page = this.state.page as number;

      if (page === 1) {
        resolve(this.fetchData());
        return;
      }

      const res = this.fetchData().then(() => {
        const data = this.getData();

        if (data.length) {
          resolve(res);
        } else {
          this.setState(
            {
              page: page - 1,
            },
            () => resolve(this.fetchData()),
          );
        }
      });
    });
  }

  /**
   * fetchDataExecute
   * @description - 真正的执行获取列表数据的接口
   * @param searchParams
   * @protected
   */
  fetchDataExecute(searchParams: object): Promise<any> {
    return this.props[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }

  /**
   * onSearch
   * @description - 点击查询
   * @override
   */
  onSearch(): Promise<void> {
    const keys = Object.keys(this.getParams());
    const params = {};
    keys.forEach((key) => {
      params[key] = this.state[key];
    });

    return new Promise<void>((resolve) => {
      this.setState(
        {
          searchParams: {
            ...params,
          },
        },
        () => {
          this.fetchData().then(() => {
            resolve();
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

  renderSearchFormAfter(): ReactElement | null {
    return null;
  }

  renderSearchFormBefore(): ReactElement | null {
    return null;
  }

  renderSearchFooter(): ReactElement | null {
    return null;
  }

  renderSearchHeader(): ReactElement | null {
    return null;
  }

  /**
   * renderItemSelection
   * @description 渲染selection
   * @param {ReactNode} Item
   * @param {object} record
   * @return {ReactNode}
   */
  renderItemSelection(Item: ReactNode, record: any): ReactNode {
    const checked = this.state.selectedRowKeys?.includes(record[this.getRowKey()]);

    return (
      <div className={`${selectorPrefix}-list-rowSelection-checkbox-wrap`}>
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
   * renderNormalItem
   * @description 渲染列表的行(标准模式)
   * @param {any} record
   * @param {number} rowIndex
   * @return {ReactNode}
   */
  renderNormalItem(record: any, rowIndex: number): ReactNode {
    const metas: Metas<any> = {
      ...defaultMetas,
      ...(this.getMetas() || {}),
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
        {content ? content : null}
      </>
    );
  }

  /**
   * renderNumberColumn
   * @description - 渲染序号列
   * @param {string | number} number
   * @param {record: any; index: number} params
   * @return {ReactNode}
   */
  renderNumberColumn(number: string | number, params: { record: any; index: number }) {
    return <span className={`${selectorPrefix}-list-number`}>{number}</span>;
  }

  /**
   * renderItem
   * @description 渲染列表的item
   * @param record
   * @param rowIndex
   */
  renderItem(record: any, rowIndex: number): ReactNode {
    const rowSelection = this.getRowSelection();

    const id = record[this.getRowKey()];

    const listProps: ListItemProps = {};

    const metas: Metas<any> = {
      ...defaultMetas,
      ...(this.getMetas() || {}),
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

    let Item = this.renderNormalItem(record, rowIndex);

    // 可选的
    if (!!rowSelection) {
      Item = (
        <>
          {this.renderItemSelection(Item, record)}
          {Item}
        </>
      );
    }

    // 序号列
    const numberGeneratorRule =
      this.getNumberGeneratorRule() ?? SearchList.NUMBER_GENERATOR_RULE_ALONE;

    const { page = 0, limit = 10 } = this.state;

    Item = this.isShowNumber() ? (
      <>
        <ConditionalRender
          conditional={numberGeneratorRule === SearchList.NUMBER_GENERATOR_RULE_ALONE}
          noMatch={() =>
            this.renderNumberColumn((page - 1) * limit + (rowIndex + 1), {
              record,
              index: rowIndex,
            })
          }
        >
          {() => this.renderNumberColumn(rowIndex + 1, { record, index: rowIndex })}
        </ConditionalRender>
        {Item}
      </>
    ) : (
      Item
    );

    const checked = !!rowSelection && this.state.selectedRowKeys?.includes(id);

    // 如果此项激活了
    const selectedClassName = checked ? `${selectorPrefix}-list-item-active` : null;

    return (
      <List.Item
        className={classNames(`${selectorPrefix}-list-item`, selectedClassName)}
        key={this.getRowKey()}
        {...listProps}
      >
        {Item}
      </List.Item>
    );
  }

  /**
   * renderListHeader
   * @description
   * @return {ReactNode}
   */
  renderListHeader(): ReactNode {
    return (
      <div className={`${selectorPrefix}-list-rowSelection-header`}>
        <div className={`${selectorPrefix}-list-rowSelection-header-info`}>
          {Intl.v('已选择{count}项', {
            count: this.state.selectedRowKeys?.length,
          })}
        </div>
        <div className={`${selectorPrefix}-list-rowSelection-header-cancel`}>
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
