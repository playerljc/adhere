import { Button, Image, List } from 'antd-mobile';
import _ from 'lodash';
import Mockjs, { Random } from 'mockjs';
import React, { useMemo, useState } from 'react';
import Highlighter from 'react-highlight-words';

import { ShareAltOutlined, UserAddOutlined } from '@ant-design/icons';
import { FieldGeneratorToDict, Popup } from '@baifendian/adhere';
import {
  CalendarDialog,
  CalendarModal,
  DateDialog,
  DateModal,
  Dialog,
  Input,
  Modal,
  TimeDialog,
  TimeModal,
} from '@baifendian/adhere-mobile-ui-anthoc';

import PRSL from '../../src/index';

import '../../src/index.less';
import './index.less';

const dataSource = Array.from({ length: 100 })
  .fill(0)
  .map(() => ({
    id: Mockjs.mock('@guid'),
    name: Mockjs.mock('@cname'),
    describe: Mockjs.mock('@name'),
    avatar: Random.image(),
  }));

function getData({ page, pageSize, searchKeyWord, filterValues = {}, sortValues = [] }) {
  console.log(page, pageSize, searchKeyWord, filterValues, sortValues);
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

export default () => {
  const [loading, setLoading] = useState(true);

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
        render: () => <TimeDialog />,
      },
      {
        key: 'birthDay',
        name: 'birthDay',
        label: '生日',
        render: () => <DateDialog />,
      },
      {
        key: 'startTime',
        name: 'startTime',
        label: '开始时间',
        render: () => <CalendarDialog.RangeCalendarDialog />,
      },
      {
        key: 'birthPlace',
        name: 'birthPlace',
        label: '出生地',
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

  return (
    <div className="Wrapper">
      <PRSL
        searchKeyWordHistoryStoreType="local"
        isUseFirstLoading
        isUseLocal={false}
        className="PRSLWrapper"
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
        filterConfig={filterConfig}
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
      >
        {({ dataSource }) => (
          <List header="用户列表">
            {dataSource.map((user) => (
              <List.Item
                key={user.id}
                prefix={
                  <Image
                    src={user.avatar}
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description={user.describe}
              >
                {user.name}
              </List.Item>
            ))}
          </List>
        )}
      </PRSL>
    </div>
  );
};
