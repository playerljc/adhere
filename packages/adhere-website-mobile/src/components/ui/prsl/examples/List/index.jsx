import { Button, List } from 'antd-mobile';
import _ from 'lodash';
import Mockjs, { Random } from 'mockjs';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

import { ShareAltOutlined, UserAddOutlined } from '@ant-design/icons';
import {
  FieldGeneratorToDict,
  MobileGlobalIndicator,
  MobilePRSL,
  MobileSuccessPrompt,
} from '@baifendian/adhere';
import {
  CalendarDialog,
  DateDialog,
  Input,
  Modal,
  TimeDialog,
} from '@baifendian/adhere-mobile-ui-anthoc';

import bigImg from '../../images/u5_state0.png';
import GTList from './List/GTList';
import GTMList from './List/GTMList';
import TopicsList from './List/TopicsList';

import styles from './index.less';

const dataSource = Array.from({ length: 100 })
  .fill(0)
  .map(() => ({
    id: Mockjs.mock('@guid'),
    name: Mockjs.mock('@cname'),
    describe: Mockjs.mock('@name'),
    avatar: Random.image(),
    bigImg,
  }));

const UserSelectComponent1 =
  FieldGeneratorToDict.Components[
    `SystemUserByKw${FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Standard}`
  ];

const UserSelectComponent2 =
  FieldGeneratorToDict.Components[
    `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckListDynamic.FilterCheckAll}`
  ];

const UserSelectComponent3 =
  FieldGeneratorToDict.Components[
    `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckListPaginationDynamic.Filter}`
  ];

const UserSelectComponent4 =
  FieldGeneratorToDict.Components[
    `SystemUserByKPL${FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Paging}`
  ];

const UserSelectComponent5 =
  FieldGeneratorToDict.Components[
    `SystemUserPaging${FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckListPagination.Standard}`
  ];

const UserSelectComponent6 =
  FieldGeneratorToDict.Components[
    `SystemUser${FieldGeneratorToDict.ComponentNames.MobileSelectorDynamic.FilterCheckAll}`
  ];

const UserSelectComponent7 =
  FieldGeneratorToDict.Components[
    `SystemUserPaging${FieldGeneratorToDict.ComponentNames.MobileSelectorPagination.Standard}`
  ];

const UserSelectComponent8 =
  FieldGeneratorToDict.Components[
    `SystemUserByKw${FieldGeneratorToDict.ComponentNames.MobileSelectorAC.Standard}`
  ];

const BirthPlaceComponent =
  FieldGeneratorToDict.Components[
    `SystemTreeStatic${FieldGeneratorToDict.ComponentNames.MobileCascaderView.Filter}`
  ];

const BirthPlaceComponent2 =
  FieldGeneratorToDict.Components[
    `SystemDepartment${FieldGeneratorToDict.ComponentNames.MobileCascaderViewAsync.Standard}`
  ];

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

export default () => {
  const prslRef = useRef();

  const [loading, setLoading] = useState(true);

  const [viewMode, setViewMode] = useState('GT');

  const filterConfig = useMemo(
    () => [
      {
        key: 'name',
        name: 'name',
        label: '姓名',
        render: () => <Input placeholder="姓名" />,
      },
      {
        key: 'user1',
        name: 'user1',
        label: '人员选择1',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择1"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <FieldGeneratorToDict.ArrayEntityValueHOC optionsProp="searchDataSource">
                <UserSelectComponent1
                  placeholder="请输入关键字"
                  style={{ height: '100%', overflowY: 'hidden' }}
                  checkListProps={{
                    multiple: true,
                  }}
                />
              </FieldGeneratorToDict.ArrayEntityValueHOC>
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user2',
        name: 'user2',
        label: '人员选择2',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择2"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent2
                filterProps={{ placeholder: '请输入关键字' }}
                style={{ height: '100%' }}
                bodyWrapperStyle={{ overflowY: 'auto' }}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user3',
        name: 'user3',
        label: '人员选择3',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择3"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent3
                multiple
                filterProps={{ placeholder: '请输入关键字' }}
                style={{ height: '100%' }}
                pagingProps={{
                  style: { height: '100%' },
                  defaultPaging: {
                    limit: 20,
                  },
                }}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user4',
        name: 'user4',
        label: '人员选择4',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择4"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent4
                checkListProps={{
                  multiple: true,
                }}
                placeholder="请输入关键字"
                style={{ height: '100%', overflowY: 'hidden' }}
                bodyStyle={{ padding: 0 }}
                pagingCheckListProps={{
                  multiple: true,
                  pagingProps: {
                    style: { height: '100%' },
                    isLocal: false,
                  },
                }}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user5',
        name: 'user5',
        label: '人员选择5',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择5"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent5
                multiple
                pagingProps={{
                  style: { height: '100%' },
                  defaultPaging: {
                    limit: 20,
                  },
                  isLocal: false,
                }}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user6',
        name: 'user6',
        label: '人员选择6',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择6"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent6
                filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
                style={{ height: '100%' }}
                bodyWrapperStyle={{ overflowY: 'auto' }}
                checkAllBodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
                checkAllWrapperStyle={{ paddingTop: 0 }}
                multiple
                columns={2}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user7',
        name: 'user7',
        label: '人员选择7',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择7"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent7
                multiple
                columns={2}
                pagingProps={{
                  style: { height: '100%', padding: 20 },
                  defaultPaging: {
                    limit: 20,
                  },
                  isLocal: false,
                }}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'user8',
        name: 'user8',
        label: '人员选择8',
        formItemProps: {
          arrow: true,
        },
        render: () => {
          return (
            <Modal.TriggerPrompt
              title="人员选择8"
              submitAction={{
                key: 'submit',
                primary: true,
                onClick: () => Promise.resolve(),
              }}
              popoverTriggerProps={{
                renderTrigger: (changeValue) => (
                  <Button color="primary" size="mini">
                    人员选择({changeValue?.length})
                  </Button>
                ),
              }}
            >
              <UserSelectComponent8
                placeholder="请输入关键字"
                style={{ height: '100%', overflowY: 'hidden' }}
                selectorProps={{
                  multiple: true,
                  columns: 2,
                }}
              />
            </Modal.TriggerPrompt>
          );
        },
      },
      {
        key: 'openTime',
        name: 'openTime',
        label: '开业时间',
        formItemProps: {
          arrow: true,
        },
        render: () => <TimeDialog />,
      },
      {
        key: 'birthDay',
        name: 'birthDay',
        label: '生日',
        formItemProps: {
          arrow: true,
        },
        render: () => <DateDialog />,
      },
      {
        key: 'startTime',
        name: 'startTime',
        label: '开始时间',
        formItemProps: {
          arrow: true,
        },
        render: () => <CalendarDialog.RangeCalendarDialog />,
      },
      {
        key: 'birthPlace',
        name: 'birthPlace',
        label: '出生地',
        formItemProps: {
          arrow: true,
        },
        render: () => (
          <Modal.TriggerPrompt
            title="人员选择"
            submitAction={{
              key: 'submit',
              primary: true,
              onClick: () => Promise.resolve(),
            }}
            popoverTriggerProps={{
              renderTrigger: (changeValue) => (
                <Button color="primary" size="mini">
                  {changeValue?.length ? changeValue.map((t) => t.title).join('/') : '出生地选择'}
                </Button>
              ),
            }}
          >
            <FieldGeneratorToDict.TreeEntityValueHOC treeDataProp="options">
              <BirthPlaceComponent
                filterProps={{ placeholder: '请选择出生地' }}
                style={{ height: '100%' }}
                bodyWrapperStyle={{ overflowY: 'auto' }}
                renderLabel={(item, filterValue) => (
                  <label>
                    <Highlighter
                      highlightClassName="Highlight"
                      searchWords={[filterValue]}
                      autoEscape={true}
                      textToHighlight={item.label}
                    />
                  </label>
                )}
              />
            </FieldGeneratorToDict.TreeEntityValueHOC>
          </Modal.TriggerPrompt>
        ),
      },
      {
        key: 'birthPlace2',
        name: 'birthPlace2',
        label: '出生地2',
        formItemProps: {
          arrow: true,
        },
        render: () => (
          <Modal.TriggerPrompt
            title="人员选择2"
            submitAction={{
              key: 'submit',
              primary: true,
              onClick: () => Promise.resolve(),
            }}
            popoverTriggerProps={{
              renderTrigger: (changeValue) => (
                <Button color="primary" size="mini">
                  {changeValue?.length ? changeValue.map((t) => t.title).join('/') : '出生地选择'}
                </Button>
              ),
            }}
          >
            <FieldGeneratorToDict.TreeEntityValueHOC treeDataProp="options">
              <BirthPlaceComponent2 style={{ height: '100%' }} isEveryAsync />
            </FieldGeneratorToDict.TreeEntityValueHOC>
          </Modal.TriggerPrompt>
        ),
      },
    ],
    [],
  );

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
        name: 'Topics',
        label: '专题列表',
      },
      {
        name: 'GT',
        label: '图文列表',
      },
      {
        name: 'GTM',
        label: '图文列表(多图)',
      },
      /*{
        name: 'GTB',
        label: '图文列表(大图)',
      },
      {
        name: 'Info',
        label: '文字列表',
      },
      {
        name: 'Video',
        label: '视频列表',
      },
      {
        name: 'Commodity',
        label: '商品列表',
      },
      {
        name: 'Message',
        label: '消息列表',
      },
      {
        name: 'Comment',
        label: '评论',
      },
      {
        name: 'Card',
        label: '卡卷列表',
      },*/
    ],
    [],
  );

  const renderList = useCallback(
    ({ dataSource }) => {
      let list;

      switch (viewMode) {
        case 'Topics':
          list = <TopicsList data={dataSource} />;
          break;
        case 'GT':
          list = <GTList data={dataSource} />;
          break;
        case 'GTM':
          list = <GTMList data={dataSource} />;
          break;
        // case 'GTB':
        //   list = <GTBList data={dataSource} />;
        //   break;
        // case 'Info':
        //   list = <InfoList data={dataSource} />;
        //   break;
        // case 'Video':
        //   list = <VideoList data={dataSource} />;
        //   break;
        // case 'Commodity':
        //   list = <CommodityList data={dataSource} />;
        //   break;
        // case 'Message':
        //   list = <MessageList data={dataSource} />;
        //   break;
        // case 'Comment':
        //   list = <CommentList data={dataSource} />;
        //   break;
        // case 'Card':
        //   list = <CardList data={dataSource} />;
        //   break;
      }

      return list;
    },
    [viewMode],
  );

  return (
    <div className={styles.Wrapper}>
      <MobilePRSL
        className={styles.PRSLWrapper}
        isUseFirstLoading
        searchKeyWordBarProps={{
          placeholder: '请输入查询关键字',
        }}
        searchKeyWordMode="history"
        isLoading={loading}
        toolbarConfig={(defaultElements) => {
          return [
            {
              key: 'add',
              label: '新增',
              icon: <UserAddOutlined />,
              onClick: () => {
                console.log('新增');
                const handler = MobileGlobalIndicator.show(document.body, '处理中...');

                setTimeout(() => {
                  MobileGlobalIndicator.hide(handler);

                  MobileSuccessPrompt.openSuccessMessage({
                    content: '操作成功',
                  });

                  prslRef.current.resetAll();
                }, 2000);
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
        filterConfig={filterConfig}
        sortConfig={sortConfig}
        viewSettingConfig={viewSettingConfig}
        onViewSetting={(viewMode) => {
          setViewMode(viewMode);
        }}
        onViewSettingReset={() => {
          setViewMode('GT');
        }}
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
      >
        {({ dataSource }) =>
          renderList({
            dataSource,
          })
        }
      </MobilePRSL>
    </div>
  );
};
