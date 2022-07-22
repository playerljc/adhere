import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import { Slider } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import { IFontSizeSettingProps, IFontSizeSettingState } from './types';

const selectorPrefix = 'adhere-ui-fontsizesetting';

/**
 * FontSizeSetting
 * @class FontSizeSetting
 * @classdesc FontSizeSetting
 */
class FontSizeSetting extends React.Component<IFontSizeSettingProps, IFontSizeSettingState> {
  static defaultProps: any;
  static propTypes: any;

  private el: any;

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps: Readonly<IFontSizeSettingProps>, nextContext: any) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  render() {
    // @ts-ignore
    const { className, style } = this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(
          selectorPrefix,
          // @ts-ignore
          className.split(/\s+/),
        )}
        style={{ ...style }}
        ref={(el) => (this.el = el)}
      >
        <div className={`${selectorPrefix}-rangeWrap`}>
          <div className={`${selectorPrefix}-separatedtool`}>
            <div className={`${selectorPrefix}-separated`}>
              <span>{Intl.v('小')}</span>
            </div>
            <div className={`${selectorPrefix}-separated`}>
              <span>{Intl.v('中')}</span>
            </div>
            <div className={`${selectorPrefix}-separated`}>
              <span>{Intl.v('大')}</span>
            </div>
            <div className={`${selectorPrefix}-separated`}>
              <span>{Intl.v('特大')}</span>
            </div>
          </div>
          <Slider
            {...omit(this.props, ['className', 'style', 'value', 'onChange'])}
            value={this.state.value}
            // @ts-ignore
            onChange={(v) => {
              this.setState(
                {
                  value: v,
                },
                () => {
                  this.props.onChange(v);
                },
              );
            }}
          />
        </div>
      </div>
    );
  }
}

FontSizeSetting.defaultProps = {
  className: '',
  style: {},
};

FontSizeSetting.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default FontSizeSetting;
