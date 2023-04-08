import React, { createRef } from 'react';

/**
 * ResourceManagerFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    viewRenders = new Map([
      ['info', this.renderInfoView],
      ['thumbnail', this.renderThumbnailView],
    ]);

    constructor(props) {
      super(props);

      // 存储view的引用
      this.ref = createRef();
    }

    onSearch() {
      return new Promise<void>((resolve) => {
        const view = this.ref.current;

        view.setState(
          {
            page: 1,
            selectedRows: [],
            selectedRowKeys: [],
          },
          () => {
            super.onSearch().then(() => resolve());
          },
        );
      });
    }

    onClear() {
      const view = this.ref.current;

      return super.clear().then(() => view.onClear());
    }

    fetchData() {
      return super.fetchData();
    }

    getColumns() {
      const view = this.ref.current;
      return view?.getColumns?.() ?? [];
    }

    getDefaultValues() {
      const view = this.ref.current;

      return view
        ? {
            page: view.state.page,
            limit: view.state.limit,
            selectedRowKeys: view.state.selectedRowKeys,
            selectedRows: view.state.selectedRows,
          }
        : {
            page: 1,
            limit: this.getLimit(),
            selectedRowKeys: [],
            selectedRows: [],
          };
    }

    getSearchParams() {
      const searchParams = super.getSearchParams();

      const view = this.ref.current;

      if (!view || !view.state) {
        return {
          ...searchParams,
        };
      }

      const viewSearchParams = view?.getSearchParams();

      return {
        ...(viewSearchParams || {}),
        ...searchParams,
      };
    }

    renderView() {
      const { viewType } = this.state;

      return this.viewRenders.get(viewType)?.call?.(this);
    }

    renderBody() {
      return this.renderView();
    }
  };
}
