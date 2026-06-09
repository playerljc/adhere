import { SnippetsOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import TemplateModal from './TemplateModal';

const menuItemPrefix = `${SELECT_PREFIX}-design-toolbar-menu-template`;

export const Template = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <span
        key={config.key}
        className={classNames(menuItemPrefix)}
        title={config.label}
        onClick={handleClick}
      >
        {config.icon} {config.label}
      </span>
      {open ? <TemplateModal open={open} onClose={handleClose} /> : null}
    </>
  );
};

const config = {
  key: 'template',
  label: Intl.get('template'),
  icon: <SnippetsOutlined />,
  render: () => <Template />,
};

export default config;
