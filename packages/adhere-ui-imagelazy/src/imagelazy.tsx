import React from 'react';
import PropTypes from 'prop-types';

import { IImageLazyProps } from './types';

// import placeholder from './good_default.png';

const selectorPrefix = 'adhere-ui-imagelazy';

const placeholder =
  'data:image/png;base64,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';

const error =
  'data:image/png;base64,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';

/**
 * ImageLazy
 * @class ImageLazy
 * @classdesc ImageLazy
 */
class ImageLazy extends React.Component<IImageLazyProps, any> {
  static defaultProps: any;
  static propTypes: any;
  private el: HTMLDivElement | null | undefined;

  componentWillReceiveProps(nextProps) {
    if (this.props.imgArgs.targetSrc === nextProps.imgArgs.targetSrc) return;

    const {
      className,
      imgArgs: { originSrc },
    } = nextProps;

    // div
    // @ts-ignore
    this.el.className = `${selectorPrefix} ${className}`;

    // img src
    // @ts-ignore
    this.el.children[0].src = originSrc || placeholder;

    // update
    this.update(nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.update(this.props);
  }

  update(props) {
    const {
      imgArgs: { originSrc, errorSrc, targetSrc, ...imgProps },
    } = props;

    const img = new Image();

    for (const p in imgProps) {
      if (imgProps[p] !== undefined && imgProps[p] !== null) {
        img.setAttribute(p.toLowerCase() === 'classname' ? 'class' : p, imgProps[p]);
      }
    }

    img.onload = () => {
      const parent = this.el;

      // @ts-ignore
      const imgEl = this.el.children[0];

      // @ts-ignore
      parent.removeChild(imgEl);

      // @ts-ignore
      parent.appendChild(img);
    };

    img.onerror = () => {
      // @ts-ignore
      const imgEl: HTMLImageElement = this.el.children[0];

      imgEl.src = errorSrc || error;
    };

    img.src = targetSrc;
  }

  render() {
    const {
      imgArgs: { originSrc },
      className,
    } = this.props;

    return (
      <div className={`${selectorPrefix} ${className}`} ref={(el) => (this.el = el)}>
        <img src={originSrc || placeholder} />
      </div>
    );
  }
}

ImageLazy.defaultProps = {
  className: '',
  imgArgs: {
    originSrc: placeholder,
    errorSrc: error,
    targetSrc: '',
  },
};

ImageLazy.propTypes = {
  className: PropTypes.string,
  imgArgs: PropTypes.shape({
    originSrc: PropTypes.string,
    errorSrc: PropTypes.string,
    targetSrc: PropTypes.string,
  }),
};

export default ImageLazy;
