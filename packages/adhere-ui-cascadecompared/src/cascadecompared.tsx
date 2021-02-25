import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll-probe';
import StickupLayout from '@baifendian/adhere-ui-stickuplayout';

import { ICascadeComparedProps, IColumnConfig, IMasterItem } from './types';

const selectorPrefix = 'adhere-ui-cascadecompared';

const defaultCellWidth = 120;

/**
 * initTouch
 */
function initTouch() {
  function isPassive() {
    let supportsPassiveOption = false;
    try {
      // @ts-ignore
      addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
          get() {
            supportsPassiveOption = true;
          },
        }),
      );
    } catch (e) {}
    return supportsPassiveOption;
  }

  document.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
    },
    isPassive()
      ? {
          capture: false,
          passive: false,
        }
      : false,
  );
}

initTouch();

/**
 * CascadeCompared
 * @class CascadeCompared
 * @classdesc CascadeCompared
 */
class CascadeCompared extends React.Component<ICascadeComparedProps> {
  static defaultProps: any;
  static propTypes: any;

  private el: HTMLDivElement | null | undefined;
  private scrolls: Array<IScroll> = [];
  private stickup: StickupLayout | undefined;

  componentDidMount() {
    // @ts-ignore
    this.stickup.refresh();
    this.initScroll();
  }

  componentDidUpdate() {
    // @ts-ignore
    this.stickup.refresh();
    this.initScroll();
  }

  private initScroll() {
    // @ts-ignore
    const wrapEls = this.el.querySelectorAll(`.${selectorPrefix}-autoWrap`);

    for (let i = 0; i < this.scrolls.length; i++) {
      this.scrolls[i].destroy();
    }

    this.scrolls = [];

    for (let i = 0; i < wrapEls.length; i++) {
      const scroll = new IScroll(wrapEls[i], {
        probeType: 3,
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false,
      });

      this.scrolls.push(scroll);

      scroll.on('scroll', () => {
        for (let j = 0; j < this.scrolls.length; j++) {
          if (this.scrolls[j] !== scroll) {
            this.scrolls[j].scrollTo(scroll.x, scroll.y);
          }
        }
      });

      // scroll.on('scrollEnd', () => {
      //   if (self.stickup.events.scrollEnd) {
      //     self.stickup.events.scrollEnd();
      //   }
      // });
    }
  }

  private getFixedColumnConfig(columns: Array<IColumnConfig>): IColumnConfig | null {
    const config = columns.find((t) => t.isFixed);

    if (config) return config;

    return columns.length ? columns[0] : null;
  }

  private renderCell(config: IColumnConfig, dataSource: object): React.ReactElement {
    if (config.render) {
      return config.render(dataSource[config.dataIndex], dataSource);
    }

    return dataSource[config.dataIndex];
  }

  private renderIndicator(): React.ReactElement {
    const {
      indicatorClassName = '',
      indicatorStyle = {},
      indicatorFixedWrapClassName = '',
      indicatorFixedWrapStyle = {},
      indicatorAutoWrapClassName = '',
      indicatorAutoWrapStyle = {},
      indicator: { columns = [], dataSource = {} },
    } = this.props;

    const fixedColumnConfig = this.getFixedColumnConfig(columns);

    return (
      <div
        className={classNames(
          `${selectorPrefix}-indicator`,
          // @ts-ignore
          (indicatorClassName || '').split(' '),
        )}
        style={{ ...indicatorStyle }}
      >
        <div
          className={classNames(
            `${selectorPrefix}-fixedWrap`,
            // @ts-ignore
            (indicatorFixedWrapClassName || '').split(' '),
          )}
          style={{
            ...(indicatorFixedWrapStyle || {}),
            width: fixedColumnConfig?.width || defaultCellWidth,
          }}
        >
          <div className={`${selectorPrefix}-item`}>
            <div
              className={classNames(
                `${selectorPrefix}-cell`,
                // @ts-ignore
                (fixedColumnConfig.className || '').split(' '),
              )}
              style={{
                // @ts-ignore
                ...(fixedColumnConfig.style || {}),
              }}
            >
              {this.renderCell(
                // @ts-ignore
                fixedColumnConfig,
                dataSource,
              )}
            </div>
          </div>
        </div>
        <div
          className={classNames(
            `${selectorPrefix}-autoWrap`,
            // @ts-ignore
            (indicatorAutoWrapClassName || '').split(' '),
          )}
          style={{ ...(indicatorAutoWrapStyle || {}) }}
        >
          <div className={`${selectorPrefix}-item`}>
            {columns
              .filter((column) => column !== fixedColumnConfig)
              .map((column) => (
                <div
                  key={column.dataIndex}
                  className={classNames(
                    `${selectorPrefix}-cell`,
                    // @ts-ignore
                    (column.className || '').split(' '),
                  )}
                  style={{ ...(column.style || {}), width: column?.width || defaultCellWidth }}
                >
                  {this.renderCell(column, dataSource)}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  private renderMastGroupContent({
    dataSource = [],
    columns = [],
    fixedWrapClassName = '',
    fixedWrapStyle = {},
    autoWrapClassName = '',
    autoWrapStyle = {},
    autoInnerClassName = '',
    autoInnerStyle = {},
  }: IMasterItem): React.ReactElement {
    const fixedColumnConfig = this.getFixedColumnConfig(columns);

    return (
      <>
        <div
          className={classNames(
            `${selectorPrefix}-fixedWrap`,
            // @ts-ignore
            (fixedWrapClassName || '').split(' '),
          )}
          style={{ ...(fixedWrapStyle || {}), width: fixedColumnConfig?.width || defaultCellWidth }}
        >
          {dataSource.map((record, index) => {
            return (
              <div key={index} className={`${selectorPrefix}-item`}>
                <div
                  className={classNames(
                    `${selectorPrefix}-cell`,
                    // @ts-ignore
                    (fixedColumnConfig.className || '').split(' '),
                  )}
                  style={{
                    // @ts-ignore
                    ...(fixedColumnConfig.style || {}),
                  }}
                >
                  {this.renderCell(
                    // @ts-ignore
                    fixedColumnConfig,
                    record,
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={classNames(
            `${selectorPrefix}-autoWrap`,
            // @ts-ignore
            (autoWrapClassName || '').split(' '),
          )}
          style={{ ...(autoWrapStyle || {}) }}
        >
          <div
            className={classNames(
              `${selectorPrefix}-autoInner`,
              // @ts-ignore
              (autoInnerClassName || '').split(' '),
            )}
            style={{ ...autoInnerStyle }}
          >
            {dataSource.map((record, index) => {
              return (
                <div key={index} className={`${selectorPrefix}-item`}>
                  {columns
                    .filter((column) => column !== fixedColumnConfig)
                    .map((column) => (
                      <div
                        key={column.dataIndex}
                        className={classNames(
                          `${selectorPrefix}-cell`,
                          // @ts-ignore
                          (column.className || '').split(' '),
                        )}
                        style={{
                          ...(column.style || {}),
                          width: column?.width || defaultCellWidth,
                        }}
                      >
                        {this.renderCell(column, record)}
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  private renderMasterGroup(config: IMasterItem, index): React.ReactElement {
    const { title = null, className = '', style = {} } = config;

    return (
      <StickupLayout.Item
        key={index}
        className={classNames((className || '').split(' '))}
        style={{ ...(style || {}) }}
        title={title}
        content={this.renderMastGroupContent(config)}
      />
    );
  }

  private renderMaster(): React.ReactElement {
    const {
      masterClassName = '',
      masterStyle = {},
      masterInnerClassName = '',
      masterInnerStyle = {},
      masterStickFixedClassName = '',
      masterStickFixedStyle = {},
      masterStickInnerClassName = '',
      masterStickInnerStyle = {},
      master = [],
      onStickChange,
    } = this.props;

    return (
      <div
        className={classNames(
          `${selectorPrefix}-master`,
          // @ts-ignore
          (masterClassName || '').split(' '),
        )}
        style={{ ...(masterStyle || {}) }}
      >
        <StickupLayout
          ref={(
            ins, // @ts-ignore
          ) => (this.stickup = ins)}
          className={classNames(
            `${selectorPrefix}-master-inner`,
            // @ts-ignore
            (masterInnerClassName || '').split(' '),
          )}
          style={{ ...(masterInnerStyle || {}) }}
          fixedClassName={classNames(
            // @ts-ignore
            (masterStickFixedClassName || '').split(' '),
          )}
          fixedStyle={{ ...(masterStickFixedStyle || {}) }}
          innerClassName={classNames(
            // @ts-ignore
            (masterStickInnerClassName || '').split(' '),
          )}
          innerStyle={{ ...(masterStickInnerStyle || {}) }}
          onChange={onStickChange}
        >
          {master.map((config, index) => this.renderMasterGroup(config, index))}
        </StickupLayout>
      </div>
    );
  }

  /**
   * scrollToByIndex
   * @param {number} index
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByIndex(index: number, duration = 300) {
    // @ts-ignore
    this.stickup.scrollToByIndex(index, duration);
  }

  /**
   * scrollToByHeaderEl
   * @param {HtmlElement} headerEl
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByHeaderEl(headerEl: HTMLElement, duration = 300) {
    // @ts-ignore
    this.stickup.scrollToByHeaderEl(headerEl, duration);
  }

  /**
   * scrollToByColumn
   * @param {number} columnIndex
   */
  scrollToByColumn(columnIndex: number) {
    const scroll = this.scrolls[0];

    const el = scroll.wrapper.querySelector(
      `.${selectorPrefix}-item .${selectorPrefix}-cell:nth-of-type(${columnIndex})`,
    );

    scroll.scrollToElement(el);
  }

  render() {
    // @ts-ignore
    const { className = '', style = {} } = this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(
          selectorPrefix,
          // @ts-ignore
          (className || '').split(' '),
        )}
        style={{ ...(style || {}) }}
        ref={(el) => (this.el = el)}
      >
        {this.renderIndicator()}
        {this.renderMaster()}
      </div>
    );
  }
}

CascadeCompared.defaultProps = {
  className: '',
  style: {},
  indicatorClassName: '',
  indicatorStyle: {},
  indicatorFixedWrapClassName: '',
  indicatorFixedWrapStyle: {},
  indicatorAutoWrapClassName: '',
  indicatorAutoWrapStyle: {},
  masterClassName: '',
  masterStyle: {},
  masterInnerClassName: '',
  masterInnerStyle: {},
  masterStickFixedClassName: '',
  masterStickFixedStyle: {},
  masterStickInnerClassName: '',
  masterStickInnerStyle: {},
  indicator: {
    columns: [],
    dataSource: [],
  },
  master: [],
  defaultCellWidth: defaultCellWidth,
};

CascadeCompared.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  indicatorClassName: PropTypes.string,
  indicatorStyle: PropTypes.object,
  indicatorFixedWrapClassName: PropTypes.string,
  indicatorFixedWrapStyle: PropTypes.object,
  indicatorAutoWrapClassName: PropTypes.string,
  indicatorAutoWrapStyle: PropTypes.object,
  masterClassName: PropTypes.string,
  masterStyle: PropTypes.object,
  masterInnerClassName: PropTypes.string,
  masterInnerStyle: PropTypes.object,
  masterStickFixedClassName: PropTypes.string,
  masterStickFixedStyle: PropTypes.object,
  masterStickInnerClassName: PropTypes.string,
  masterStickInnerStyle: PropTypes.object,
  indicator: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        dataIndex: PropTypes.string.isRequired,
        isFixed: PropTypes.bool,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        render: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
      }),
    ),
    dataSource: PropTypes.object.isRequired,
  }).isRequired,
  master: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          dataIndex: PropTypes.string.isRequired,
          isFixed: PropTypes.bool,
          render: PropTypes.func,
          className: PropTypes.string,
          style: PropTypes.object,
        }),
      ),
      dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
      fixedWrapClassName: PropTypes.string,
      fixedWrapStyle: PropTypes.object,
      autoWrapClassName: PropTypes.string,
      autoWrapStyle: PropTypes.object,
      autoInnerClassName: PropTypes.string,
      autoInnerStyle: PropTypes.object,
    }),
  ).isRequired,
  onStickChange: PropTypes.func,
  defaultCellWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CascadeCompared;
