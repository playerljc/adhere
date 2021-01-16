import React from 'react';
import PropTypes from 'prop-types';

import placeholder from './good_default.png';

import IImageLazyProps from './types';

const selectorPrefix = 'adhere-ui-imagelazy';

/**
 * ImageLazy
 * @class ImageLazy
 * @classdesc ImageLazy
 */
class ImageLazy extends React.Component<IImageLazyProps, any> {
  componentWillReceiveProps(nextProps) {
    if (this.props.imgArgs.targetSrc === nextProps.imgArgs.targetSrc) return;

    const {
      className,
      imgArgs: { originSrc },
    } = nextProps;

    // div
    this.el.className = `${selectorPrefix} ${className}`;

    // img src
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
      args: { originSrc, targetSrc, ...imgProps },
    } = props;

    const img = new Image();

    for (const p in imgProps) {
      if (imgProps[p] !== undefined && imgProps[p] !== null) {
        img.setAttribute(p.toLowerCase() === 'classname' ? 'class' : p, imgProps[p]);
      }
    }

    img.onload = () => {
      const parent = this.el;

      const imgEl = this.el.children[0];

      parent.removeChild(imgEl);

      parent.appendChild(img);
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
    targetSrc: '',
  },
};

ImageLazy.propTypes = {
  className: PropTypes.string,
  imgArgs: PropTypes.shape({
    originSrc: PropTypes.string,
    targetSrc: PropTypes.string,
  }),
};

export default ImageLazy;
