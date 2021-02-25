import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IRevealProps, ISlideLayoutState } from './types';
import { slider } from './slidelayout';
import SlideLayout from './slide';

const selectorPrefix = 'adhere-ui-slidelayout-reveal';

/**
 * Reveal
 * @class Reveal
 * @classdesc Reveal
 */
class Reveal extends SlideLayout<IRevealProps, ISlideLayoutState> {
  static defaultProps: any;
  static propTypes: any;

  private rMasterEl: HTMLDivElement | null | undefined;

  constructor(props) {
    super(props);

    this.positionConfig = {
      init: {
        left: () => {
          // @ts-ignore
          this.el.style.zIndex = this.props.zIndex;

          // @ts-ignore
          this.rMasterEl.style.zIndex = this.props.zIndex + 1;

          // @ts-ignore
          this.el.style.left = '0';
        },
        right: () => {
          // @ts-ignore
          this.el.style.zIndex = this.props.zIndex;

          // @ts-ignore
          this.rMasterEl.style.zIndex = this.props.zIndex + 1;

          // @ts-ignore
          this.el.style.right = '0';
        },
      },
      show: {
        left: (time) => {
          // @ts-ignore
          this.el.style.zIndex = this.props.zIndex;

          // @ts-ignore
          this.maskEl.style.zIndex = this.props.zIndex - 1;

          // @ts-ignore
          this.rMasterEl.style.zIndex = this.props.zIndex - 2;

          slider(
            this.rMasterEl,
            // @ts-ignore
            `${this.el.offsetWidth}px`,
            '0',
            '0',
            `${this.getDuration(time)}ms`,
            this.props.onAfterShow,
          );

          if (this.maskEl) this.maskEl.style.display = 'block';
        },
        right: (time) => {
          // @ts-ignore
          this.el.style.zIndex = this.props.zIndex;
          // @ts-ignore
          this.maskEl.style.zIndex = this.props.zIndex - 1;
          // @ts-ignore
          this.rMasterEl.style.zIndex = this.props.zIndex - 2;

          slider(
            this.rMasterEl,
            // @ts-ignore
            `-${this.el.offsetWidth}px`,
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
          // @ts-ignore
          this.el.style.zIndex = this.props.zIndex;

          // @ts-ignore
          this.rMasterEl.style.zIndex = this.props.zIndex + 1;

          slider(
            this.rMasterEl,
            '0',
            '0',
            '0',
            `${this.getDuration(time)}ms`,
            this.props.onAfterClose,
          );

          if (this.maskEl) this.maskEl.style.display = 'none';
        },
        right: (time) => {
          // @ts-ignore
          this.el.style.zIndex = this.props.zIndex;

          // @ts-ignore
          this.rMasterEl.style.zIndex = this.props.zIndex + 1;

          slider(
            this.rMasterEl,
            '0',
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
      slaveClassName,
      slaveStyle,
      direction,
      slide,
      master,
      zIndex,
    } = this.props;

    // @ts-ignore
    return (
      <>
        <div
          className={classNames(
            `${selectorPrefix}`,
            direction,
            // @ts-ignore
            slaveClassName.split(' '),
          )}
          style={{ ...slaveStyle, zIndex }}
          ref={(el) => (this.el = el)}
        >
          {slide}
        </div>
        <div
          className={classNames(
            `${selectorPrefix}-master`,
            // @ts-ignore
            masterClassName.split(' '),
          )}
          style={{ ...masterStyle, zIndex: zIndex + 1 }}
          ref={(el) => (this.rMasterEl = el)}
        >
          {master}
        </div>
      </>
    );
  }
}

Reveal.defaultProps = {
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
  slide: null,
  master: null,
};

Reveal.propTypes = {
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

export default Reveal;
