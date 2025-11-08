import { unstableSetRender } from 'antd-mobile/es/utils/unstable-render';
import { createRoot } from 'react-dom/client';

import '@ant-design/v5-patch-for-react-19';

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
