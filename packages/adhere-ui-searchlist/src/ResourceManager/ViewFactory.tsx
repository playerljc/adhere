import React from 'react';

/**
 * ViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    isMount = true;

    constructor(props) {
      super(props);

      this.state = {
        ...(this.state || {}),
        ...this.props.defaultValues,
      };

      this.isFirst = false;
    }

    componentDidMount() {
      super.componentDidMount();

      this.props?.context?.forceUpdate?.();
    }

    fetchData(): Promise<any> {
      if (this.isMount) {
        this.isMount = false;
        return Promise.resolve([]);
      }

      const { context } = this.props;

      return context?.fetchData?.();
    }

    getParams() {
      const { context } = this.props;

      return context?.getViewParams.call?.(this);
    }

    getData(): object[] {
      const { context } = this.props;

      return context?.getData?.();
    }

    getServiceName(): string {
      const { context } = this.props;

      return context?.getServiceName?.();
    }

    getFetchListPropName() {
      const { context } = this.props;

      return context?.getFetchListPropName?.();
    }

    getTotalKey() {
      const { context } = this.props;

      return context?.getTotalKey?.();
    }

    getColumns() {
      const { context } = this.props;

      return context?.getTableViewColumns.call?.(this);
    }

    renderSearchFormBefore() {
      return null;
    }

    renderSearchForm() {
      return null;
    }

    renderSearchToolBar() {
      return null;
    }

    renderSearchFormAfter() {
      return null;
    }

    renderSearchHeader() {
      return null;
    }

    renderSearchFooter() {
      return null;
    }
  };
}
