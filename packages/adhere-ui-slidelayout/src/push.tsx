import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IPushProps, ISlideLayoutState } from './types';
import { slider } from './slidelayout';
import SlideLayout from './slide';

const selectorPrefix = 'adhere-ui-slidelayout-push';

/**
 * Push
 * @class Push
 * @classdesc Push
 */
class Push extends SlideLayout<IPushProps, ISlideLayoutState> {
  static defaultProps: any;
  static propTypes: any;

  private pMasterEl: HTMLDivElement | null | undefined;
  private pSlaveEl: HTMLDivElement | null | undefined;

  constructor(props) {
    super(props);

    this.positionConfig = {
      init: {
        left: () => {
          // @ts-ignore
          this.el.style.left = '0';
          // @ts-ignore
          this.pSlaveEl.style.left = `${this.el.offsetWidth}px`;
          // @ts-ignore
          slider(this.pMasterEl, `-${this.el.offsetWidth}px`, '0', '0', '0');
        },
        right: () => {
          // @ts-ignore
          this.el.style.right = '0';
          // @ts-ignore
          this.pSlaveEl.style.right = `${this.el.offsetWidth}px`;
          // @ts-ignore
          slider(this.pMasterEl, `${this.el.offsetWidth}px`, '0', '0', '0');
        },
      },
      show: {
        left: (time) => {
          slider(
            this.pMasterEl,
            '0',
            '0',
            '0',
            `${this.getDuration(time)}ms`,
            this.props.onAfterShow,
          );

          if (this.maskEl) this.maskEl.style.display = 'block';
        },
        right: (time) => {
          slider(
            this.pMasterEl,
            '0',
            '0',
            '0',
            `${this.getDuration(time)}ms`,
            this.props.onAfterShow,
          );

          if (this.maskEl) this.maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time) => {
          slider(
            this.pMasterEl,
            // @ts-ignore
            `-${this.el.offsetWidth}px`,
            '0',
            '0',
            `${this.getDuration(time)}ms`,
            this.props.onAfterClose,
          );

          if (this.maskEl) this.maskEl.style.display = 'none';
        },
        right: (time) => {
          slider(
            this.pMasterEl,
            // @ts-ignore
            `${this.el.offsetWidth}px`,
            '0',
            '0',
            `${this.getDuration(time)}ms`,
            this.props.onAfterClose,
          );

          if (this.maskEl) this.maskEl.style.display = 'none';
        },
      },
    };

    this.state = {
      collapse: this.props.collapse,
    };
  }

  render() {
    // @ts-ignore
    const {
      masterClassName,
      masterStyle,
      className,
      style,
      slaveClassName,
      slaveStyle,
      direction,
      slide,
      master,
      zIndex,
    } = this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(
          `${selectorPrefix}-master`,
          // @ts-ignore
          masterClassName.split(/\s+/),
        )}
        style={{ ...masterStyle, zIndex: zIndex - 1 }}
        ref={(el) => (this.pMasterEl = el)}
      >
        <div
          className={classNames(
            selectorPrefix,
            direction,
            // @ts-ignore
            className.split(/\s+/),
          )}
          style={{ ...style, zIndex }}
          ref={(el) => (this.el = el)}
        >
          {slide}
        </div>

        <div
          className={classNames(
            `${selectorPrefix}-slave`,
            // @ts-ignore
            slaveClassName.split(/\s+/),
          )}
          style={{ ...slaveStyle, zIndex: zIndex - 2 }}
          ref={(el) => (this.pSlaveEl = el)}
        >
          {master}
        </div>
      </div>
    );
  }
}

Push.defaultProps = {
  masterClassName: '',
  masterStyle: {},
  className: '',
  style: {},
  slaveClassName: '',
  slaveStyle: {},
  width: '80%',
  height: '40%',
  mask: true,
  zIndex: 9999,
  time: 300,
  direction: 'left',
  collapse: false,
  Slide: null,
  master: null,
};

Push.propTypes = {
  masterClassName: PropTypes.string,
  masterStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  slaveClassName: PropTypes.string,
  slaveStyle: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mask: PropTypes.bool,
  zIndex: PropTypes.number,
  time: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
  collapse: PropTypes.bool,
  onAfterShow: PropTypes.func,
  onAfterClose: PropTypes.func,
  onBeforeShow: PropTypes.func,
  onBeforeClose: PropTypes.func,
  slide: PropTypes.node,
  master: PropTypes.node,
};

export default Push;
