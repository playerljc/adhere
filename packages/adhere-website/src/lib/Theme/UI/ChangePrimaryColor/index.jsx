import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { Emitter } from '@baifendian/adhere';
import { ColorPicker } from '@baifendian/adhere-ui-anthoc';

import { render } from '@/index';

import token from '../../Util';

import styles from './index.less';

/**
 * ChangePrimaryColor
 * @param className
 * @param style
 * @return {JSX.Element}
 */
export default ({ className, style }) => {
  const [colorPrimary, setColorPrimary] = useState(token.getCommonPrimaryColor());

  useEffect(() => {
    function onSystemThemeChange() {
      setColorPrimary(token.getCommonPrimaryColor());
    }

    Emitter.on('SystemThemeChange', onSystemThemeChange);

    return () => {
      Emitter.remove('SystemThemeChange', onSystemThemeChange);
    };
  }, []);

  return (
    <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
      <ColorPicker
        format="hex"
        trigger="click"
        value={colorPrimary}
        onChange={(color) => {
          setColorPrimary(color.toHexString());
          token.setCommonPrimaryColor(color.toHexString());
          render();
        }}
      />
    </div>
  );
};
