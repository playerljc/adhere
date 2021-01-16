import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

import intl from '@baifendian/adhere-util-intl';

import Actions from './actions';
import Emitter from './emitter';
import IModalDialogProps from './types';

const selectorPrefix = 'adhere-ui-messagedialog';

/**
 * ModalDialog
 * @class Modal
 * @classdesc Modal
 */
class ModalDialog extends React.Component<IModalDialogProps, any> {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    Emitter.on(Actions.close, this.onClose);
  }

  componentWillUnmount() {
    Emitter.remove(Actions.close, this.onClose);
  }

  /**
   * onClose
   * @param {HTMLElement} - el
   */
  onClose(el) {
    const { parent } = this.props;

    function close() {
      const flag = ReactDOM.unmountComponentAtNode(parent);
      if (flag) {
        parent.parentElement.removeChild(parent);
      }
    }

    if (el) {
      if (el === parent) {
        close();
      }
    } else {
      close();
    }
  }

  /**
   * renderCloseBtn
   * @return {ReactNode}
   */
  renderCloseBtn() {
    const {
      config: { footer = [] },
    } = this.props;

    const props = {
      key: 'close',
      title: intl.v('取消'),
      onClick: () => {
        this.onClose();
      },
    };

    if (footer.length === 0) {
      props.type = 'primary';
    }

    return <Button {...props}>{intl.v('取消')}</Button>;
  }

  render() {
    const { config, cloneBtn, children } = this.props;

    const { footer = [], centered = true, ...other } = config;

    return (
      <Modal
        {...other}
        footer={cloneBtn ? footer.concat(this.renderCloseBtn()) : footer}
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          this.onClose();
        }}
        visible
      >
        {children}
      </Modal>
    );
  }
}

ModalDialog.defaultProps = {
  parent: null,
  config: {},
  cloneBtn: true,
};

ModalDialog.propTypes = {
  parent: PropTypes.object,
  config: PropTypes.object,
  cloneBtn: PropTypes.boolean,
};

export default ModalDialog;
