import { Avatar } from 'antd';
import React, { useContext, useState } from 'react';

import { ConfigProvider, FieldGeneratorToDict, Util } from '@baifendian/adhere';
import { List } from '@baifendian/adhere-ui-anthoc';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState([]);
  const { media } = useContext(ConfigProvider.Context);

  const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.Select}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      className={styles.DictComponent2}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflow: 'auto' }}
      value={value}
      onChange={setValue}
      pagingProps={{
        defaultLimit: 10,
      }}
      listPagingProps={{
        itemLayout: 'horizontal',
        renderItem: (item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        ),
      }}
    />
  );
};
