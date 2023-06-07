import classNames from 'classnames';
import React, { useState } from 'react';

import { ColorPicker } from '@baifendian/adhere-ui-anthoc';

import { render } from '@/index';

import token, { getThemeValue } from '../../Util';

import styles from './index.less';

/**
 * ChangePrimaryColor
 * @param className
 * @param style
 * @return {JSX.Element}
 */
export default ({ className, style }) => {
  const [colorPrimary, setColorPrimary] = useState(getThemeValue().token['common-primary-color']);

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
