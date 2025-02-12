import { FilterOutline, UnorderedListOutline } from 'antd-mobile-icons';
import _ from 'lodash';
import Mockjs, { Random } from 'mockjs';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import { ShareAltOutlined, UserAddOutlined } from '@ant-design/icons';
import {
  FieldGeneratorToDict,
  FlexLayout,
  MobileGlobalIndicator,
  MobileSuccessPrompt,
  Space,
} from '@baifendian/adhere';
import {
  Card,
  Dropdown,
  Ellipsis,
  Image,
  List,
  Popup,
  Swiper,
} from '@baifendian/adhere-mobile-ui-anthoc';
import { Typography } from '@baifendian/adhere-ui-anthoc';

import PRSL from '../../src/index';

import '../../src/index.less';
import './index.less';

const { Title, Paragraph, Text } = Typography;

const { Fixed, Auto } = FlexLayout;

const dataSource = Array.from({ length: 100 })
  .fill(0)
  .map(() => ({
    id: Mockjs.mock('@guid'),
    name: Mockjs.mock('@cname'),
    describe: Mockjs.mock('@name'),
    avatar: Random.image(),
  }));

function getData({ page, pageSize, searchKeyWord, filterValues = {}, sortValues = [] }) {
  return new Promise((resolve) => {
    let filterData;

    // filter
    if (!searchKeyWord && _.isEmpty(filterValues) && !sortValues.length) {
      filterData = dataSource;
    } else {
      filterData = dataSource.filter(
        (record) =>
          (!searchKeyWord
            ? true
            : record.name.indexOf(searchKeyWord) !== -1 ||
              record.describe.indexOf(searchKeyWord) !== -1) &&
          (_.isEmpty(filterValues) ? true : record.name.indexOf(filterValues.name) !== -1),
      );
    }

    // sort
    if (sortValues.length) {
      filterData = sortValues.reduce((res, sortValue) => {
        res = res.sort((r1, r2) => {
          if (sortValue.order === 'asc') {
            if (r1[sortValue.name] > r2[sortValue.name]) return 1;
            else if (r1[sortValue.name] < r2[sortValue.name]) return -1;
            else return 0;
          } else {
            if (r1[sortValue.name] < r2[sortValue.name]) return 1;
            else if (r1[sortValue.name] > r2[sortValue.name]) return -1;
            else return 0;
          }
        });
        return [...res];
      }, filterData);
    }

    resolve({
      total: filterData.length,
      data: filterData.slice((page - 1) * pageSize, page * pageSize),
    });
  });
}

const swiperImages = Array.from({ length: 6 }).map(() => ({
  title: Mockjs.mock('@ctitle'),
  icon: `https://picsum.photos/375/200/?random=${Math.floor(Math.random() * 1000)}`,
}));

const BookCatalogComponent =
  FieldGeneratorToDict.Components[
    `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.MobileSelectorDynamic.Standard}`
  ];

export default () => {
  const ref = useRef();

  const [loading, setLoading] = useState(true);

  const sortConfig = useMemo(
    () => [
      {
        name: 'name',
        label: '姓名',
      },
      {
        name: 'describe',
        label: '说明',
      },
    ],
    [],
  );

  const viewSettingConfig = useMemo(
    () => [
      {
        name: 'normal',
        label: '列表',
      },
      {
        name: 'multi',
        label: '2列',
      },
      {
        name: 'waterfal',
        label: '瀑布',
      },
    ],
    [],
  );

  // 自定义电商工具栏
  const beforeToolBarRender = useCallback(
    () => (
      <FlexLayout direction="horizontal" className="ToolBarWrapper">
        <FlexLayout.Auto>
          <Dropdown>
            <Dropdown.Item key="sort" title="排序">
              <div className="ToolBarItemWrapper">
                <BookCatalogComponent />
              </div>
            </Dropdown.Item>

            <Dropdown.Item key="type" title="类型">
              <div className="ToolBarItemWrapper">
                <BookCatalogComponent />
              </div>
            </Dropdown.Item>

            <Dropdown.Item key="pinpai" title="品牌">
              <div className="ToolBarItemWrapper">
                <BookCatalogComponent />
              </div>
            </Dropdown.Item>
          </Dropdown>
        </FlexLayout.Auto>

        <FlexLayout.Fixed fit className="FilterBtnWrapper">
          <Popup.Trigger
            title="高级搜索"
            popoverTriggerProps={{
              renderTrigger: (changeValue) => (
                <div className="FilterBtn">
                  筛选
                  <FilterOutline />
                </div>
              ),
            }}
            position="right"
            actions={[
              {
                key: 'submit',
                text: '提交',
                primary: true,
                onClick: () => {
                  return Promise.resolve();
                },
              },
              {
                key: 'close',
                primary: false,
                text: '重置',
                onClick: () => {
                  return Promise.resolve();
                },
              },
            ]}
          >
            <FlexLayout direction="vertical" className="AdvancedSearchWrapper">
              <FlexLayout.Auto className="AdvancedSearchMain">
                <FlexLayout.ScrollLayout scrollY>
                  <Space.Group direction="vertical" size={10}>
                    <Card title="啊啊啊">
                      <BookCatalogComponent />
                    </Card>

                    <Card title="啊啊啊">
                      <BookCatalogComponent />
                    </Card>

                    <Card title="啊啊啊">
                      <BookCatalogComponent />
                    </Card>

                    <Card title="啊啊啊">
                      <BookCatalogComponent />
                    </Card>

                    <Card title="啊啊啊">
                      <BookCatalogComponent />
                    </Card>

                    <Card title="啊啊啊">
                      <BookCatalogComponent />
                    </Card>
                  </Space.Group>
                </FlexLayout.ScrollLayout>
              </FlexLayout.Auto>

              {/*<FlexLayout.Fixed fit className="AdvancedSearchBtns">
                <Button color="primary">查询</Button>
                <Button>重置</Button>
              </FlexLayout.Fixed>*/}
            </FlexLayout>
          </Popup.Trigger>
        </FlexLayout.Fixed>
      </FlexLayout>
    ),
    [],
  );

  // 走马灯
  const scrollLoadInnerBeforeRender = useCallback(
    () => (
      <div className="SwiperWrapper">
        <Swiper>
          {swiperImages.map(({ title, icon }) => (
            <Swiper.Item key={icon}>
              <div className="SwiperItemWrapper">
                <div className="SwiperItemMedia">
                  <Image src={icon} />
                </div>

                <div className="SwiperItemTitle">{title}</div>
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    ),
    [],
  );

  return (
    <div className="Wrapper">
      <PRSL
        ref={ref}
        beforeToolBarRender={beforeToolBarRender}
        scrollLoadInnerBeforeRender={scrollLoadInnerBeforeRender}
        headerExtra={() => [<UnorderedListOutline />]}
        className="PRSLWrapper"
        searchKeyWordHistoryStoreType="local"
        isUseFirstLoading
        isUseLocal={false}
        paging={{
          defaultPageSize: 30,
        }}
        toolbarConfig={(defaultElements) => {
          return [
            {
              key: 'add',
              label: '新增',
              icon: <UserAddOutlined />,
              onClick: () => {
                console.log('新增');
              },
            },
            {
              key: 'share',
              label: '分享',
              icon: <ShareAltOutlined />,
              onClick: () => {
                console.log('分享');
              },
            },
            ...defaultElements,
          ];
        }}
        isShowFilterTrigger={false}
        sortConfig={sortConfig}
        viewSettingConfig={viewSettingConfig}
        onViewSetting={(view) => {
          debugger;
        }}
        onViewSettingReset={() => {
          debugger;
        }}
        isLoading={loading}
        loadData={(params) => {
          return getData(params).then((res) => {
            setLoading(false);
            return res;
          });
        }}
        onLoadMore={(params) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              getData(params).then((res) => {
                resolve(res);
              });
            }, 1500);
          });
        }}
        onRefresh={(params) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              getData(params).then((res) => {
                resolve(res);
              });
            }, 1500);
          });
        }}
        searchKeyWordBarProps={{
          placeholder: '请输入查询关键字',
        }}
        searchKeyWordMode="history"
        actionTriggerMode="ActionSheet"
        onAction={(record, rowIndex) => {
          return [
            {
              key: 'edit',
              text: '编辑',
              disabled: false,
              onClick: () => {
                const handle = MobileGlobalIndicator.show();

                ref.current.resetAll().then(() => {
                  MobileGlobalIndicator.hide(handle);
                  MobileSuccessPrompt.openSuccessMessage({
                    content: '操作成功!',
                  });
                });
              },
            },
            {
              key: 'remove',
              text: '删除',
              // disabled: true,
              onClick: () => {
                console.log('id', record.id, rowIndex);
                const handle = MobileGlobalIndicator.show();
                ref.current.resetPagination().then(() => {
                  MobileGlobalIndicator.hide(handle);
                  MobileSuccessPrompt.openSuccessMessage({
                    content: '删除成功!',
                  });
                });
              },
            },
          ];
        }}
      >
        {({ dataSource }) => (
          <List header="用户列表">
            {dataSource.map((user) => (
              <PRSL.Item key={user.id} record={user}>
                {({ actionSheetTrigger }) => (
                  <List.Item className="grid-item" arrow>
                    <FlexLayout direction="horizontal">
                      <Space.Group direction="horizontal" size={10}>
                        <Fixed fit style={{ alignItems: 'center' }}>
                          <Image
                            lazy
                            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                            fit="cover"
                            width={70}
                            height={70}
                          />
                        </Fixed>

                        <Auto style={{ flexDirection: 'column' }}>
                          <FlexLayout direction="horizontal">
                            <Auto>
                              <Title level={4} ellipsis>
                                {user.name}
                              </Title>
                            </Auto>

                            <Fixed>
                              <Text type="secondary">2023-01-05</Text>
                            </Fixed>
                          </FlexLayout>

                          <Paragraph ellipsis>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
                            tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor
                            metus, ultrices condimentum sodales sit amet, pharetra sodales eros.
                            Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                            vel dui laoreet, commodo augue id, pulvinar lacus.
                          </Paragraph>

                          <Paragraph
                            type="secondary"
                            ellipsis={{
                              rows: 2,
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
                            tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor
                            metus, ultrices condimentum sodales sit amet, pharetra sodales eros.
                            Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                            vel dui laoreet, commodo augue id, pulvinar lacus.
                          </Paragraph>

                          <Ellipsis
                            rows={2}
                            direction="end"
                            expandText="展开"
                            collapseText="收起"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
                            tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor
                            metus, ultrices condimentum sodales sit amet, pharetra sodales eros.
                            Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                            vel dui laoreet, commodo augue id, pulvinar lacus"
                          />
                        </Auto>
                      </Space.Group>
                    </FlexLayout>
                  </List.Item>
                )}
              </PRSL.Item>
            ))}
          </List>
        )}
      </PRSL>
    </div>
  );
};
