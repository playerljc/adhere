import { Image } from 'antd-mobile';
import Mockjs from 'mockjs';
import React from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';
import Dict from '@baifendian/adhere-util-dict';

const { Province, City, County } = Mock;

function genChildren(length) {
  return Array.from({ length: length }).map(() => {
    const title = Mockjs.mock('@name');
    const value = Mockjs.mock('@guid');

    return {
      value,
      title,
      label: title,
      id: value,
      name: title,
      address: Mockjs.mock('@region'),
      height: Mockjs.mock('@integer(60, 100)'),
      width: Mockjs.mock('@integer(60, 100)'),
      nativePlace: Mockjs.mock('@city'),
    };
  });
}

const TREE_DATA = Array.from({ length: 100 }).map(() => {
  const title = Mockjs.mock('@name');
  const value = Mockjs.mock('@guid');

  return {
    value,
    title,
    label: title,
    id: value,
    name: title,
    address: Mockjs.mock('@region'),
    height: Mockjs.mock('@integer(60, 100)'),
    width: Mockjs.mock('@integer(60, 100)'),
    nativePlace: Mockjs.mock('@city'),
    children: genChildren(5).map((t) => ({
      ...t,
      children: genChildren(5),
    })),
  };
});

export default {
  initStatic() {},
  initRemote() {
    Dict.handlers.SystemDepartment = () => (pid, cascadeParams) => {
      if (!pid) {
        return Promise.resolve(
          Province.map((t) => ({
            title: t.name,
            label: t.name,
            value: t.id,
            id: t.id,
            pId: 0,
            isLeaf: false,
          })),
        );
      }

      const countyIds = Object.keys(County)
        .map((key) => County[key])
        .flat()
        .map((t) => t.id);

      const result = { ...City, ...County }[pid]?.map?.((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        pId: pid,
        isLeaf: countyIds.includes(t.id),
      }));

      return Promise.resolve(result);
    };

    Dict.handlers.SystemUser = () =>
      Promise.resolve(
        Array.from({ length: 1000 }).map((t, _index) => {
          const value = Mockjs.mock('@guid');
          const title = `${Mockjs.mock('@name')}1`;

          return {
            value,
            title,
            label: title,
            children: title,
            id: value,
            description: title,
          };
        }),
      );

    Dict.handlers.SystemUserStatic = () =>
      Array.from({ length: 1000 }).map((t, _index) => {
        const value = Mockjs.mock('@guid');
        const title = `${Mockjs.mock('@name')}1`;

        return {
          value,
          title,
          label: title,
          children: title,
          id: value,
          description: title,
        };
      });

    Dict.handlers.SystemUserByKw = () => (_kw) => {
      return new Promise((resolve) => {
        const options = Array.from({ length: 1000 }).map((t, _index) => {
          const value = Mockjs.mock('@guid');
          const title = `${Mockjs.mock('@name')}1`;

          return {
            value,
            title,
            label: title,
            children: title,
            id: value,
            description: title,
          };
        });

        if (!_kw) {
          resolve([]);
          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          MobileGlobalIndicator.hide(handler);
          resolve(options.filter((_option) => _option.title.indexOf(_kw) !== -1));
        }, 500);
      });
    };

    Dict.handlers.SystemUserByKPL = () => (_kw, page, limit) => {
      return new Promise((resolve) => {
        const options = Array.from({ length: 1000 }).map((t, _index) => {
          const value = Mockjs.mock('@guid');
          const title = `${Mockjs.mock('@name')}1`;

          return {
            value,
            title,
            label: title,
            children: title,
            id: value,
            description: title,
          };
        });

        if (!_kw) {
          resolve({
            total: 0,
            data: [],
          });

          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          const data = options.filter((t) => t.title.indexOf(_kw) > -1);

          MobileGlobalIndicator.hide(handler);

          resolve({
            total: data.length,
            data: data.slice((page - 1) * limit, page * limit),
          });
        }, 500);
      });
    };

    Dict.handlers.SystemUserPaging = () => (page, limit) => {
      const options = Array.from({ length: 1000 }).map((t, _index) => {
        const value = Mockjs.mock('@guid');
        const title = `${Mockjs.mock('@name')}1`;

        return {
          value,
          title,
          label: title,
          children: title,
          id: value,
          description: title,
        };
      });

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: options.slice((page - 1) * limit, page * limit),
            total: options.length,
          });
        }, 1000);
      });
    };

    Dict.handlers.SystemListStatic = () =>
      Array(1000)
        .fill({
          avatar:
            'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
          name: 'Novalee Spicer',
          description: 'Deserunt dolor ea eaque eos',
        })
        .map((t) => ({
          ...t,
          key: t.name,
          prefix: (
            <Image src={t.avatar} style={{ borderRadius: 20 }} fit="cover" width={40} height={40} />
          ),
        }));

    Dict.handlers.SystemListDynamic = () =>
      Promise.resolve(
        Array(1000)
          .fill({
            avatar:
              'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Novalee Spicer',
            description: 'Deserunt dolor ea eaque eos',
          })
          .map((t) => ({
            ...t,
            key: t.name,
            prefix: (
              <Image
                src={t.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            ),
          })),
      );

    Dict.handlers.SystemTreeStatic = () => TREE_DATA;

    Dict.handlers.SystemTreeDynamic = () => Promise.resolve(TREE_DATA);
  },
};
