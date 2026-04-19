import { CodeOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useCallback, useContext, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import DesignValueJsonViewerModal from '../../../../components/DesignValueJsonViewerModal';
import { SELECT_PREFIX } from '../../../../constant';
import { hasDesignCanvasUserContent } from '../../../../utils';
import { DesignContext } from '../../../Context';

const menuItemPrefix = `${SELECT_PREFIX}-design-toolbar-menu-gen-json`;
const menuItemDisabledClass = `${SELECT_PREFIX}-design-toolbar-menu-item-disabled`;

export const GenJSON = () => {
  const { getDesignValue } = useContext(DesignContext);
  const [open, setOpen] = useState(false);

  const canShow = hasDesignCanvasUserContent(getDesignValue());

  const handleClick = useCallback(() => {
    if (!hasDesignCanvasUserContent(getDesignValue())) return;
    setOpen(true);
  }, [getDesignValue]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <span
        key={config.key}
        className={classNames(menuItemPrefix, {
          [menuItemDisabledClass]: !canShow,
        })}
        title={canShow ? config.label : Intl.get('gen_json_disabled_hint')}
        aria-disabled={!canShow}
        onClick={canShow ? handleClick : undefined}
      >
        {config.icon} {config.label}
      </span>
      {open && getDesignValue() ? (
        <DesignValueJsonViewerModal
          open={open}
          onClose={handleClose}
          designValue={getDesignValue()!}
        />
      ) : null}
    </>
  );
};

const config = {
  key: 'genJSON',
  label: Intl.get('gen_json'),
  icon: <CodeOutlined />,
  render: () => <GenJSON />,
};

export default config;
