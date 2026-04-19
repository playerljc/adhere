import React, { useContext } from 'react';

import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const FullScreen = () => {
  const { fullscreenRootRef } = useContext(DesignContext);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(fullscreenRootRef, {
    pageFullscreen: false,
  });

  const title = isFullscreen ? Intl.get('exit_full_screen') : Intl.get('full_screen');

  return (
    <span key={config.key} title={title} onClick={() => toggleFullscreen()}>
      {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
    </span>
  );
};

const config = {
  key: 'fullScreen',
  label: Intl.get('full_screen'),
  icon: <FullscreenOutlined />,
  render: () => <FullScreen />,
};

export default config;
