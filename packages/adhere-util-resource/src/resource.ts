import Dict from '@baifendian/adhere-util-dict';
import type { IDict } from '@baifendian/adhere-util-dict';

import FormConfig from './dict/dict.form.config';
import GisConfig from './dict/dict.gis.config';
import LocalsConfig from './dict/dict.locals.config';
import MimeConfig from './dict/dict.mime.config';
import MomentConfig from './dict/dict.moment.config';
import NormalConfig from './dict/dict.normal.config';
import RegexpConfig from './dict/dict.regexp.config';
import type { ResourceModule } from './types';

/**
 * 初始化字典配置
 * @param dict - 字典配置对象
 */
function initDict(dict: IDict): void {
  dict?.initStatic?.();
  dict?.initRemote?.();
}

/**
 * 初始化基础字典配置
 * Resource提供的字典命名规范：Resource${业务分组}${实际业务名称}
 */
function initBasicDict(): void {
  const configs: IDict[] = [
    FormConfig,
    GisConfig,
    LocalsConfig,
    MimeConfig,
    MomentConfig,
    NormalConfig,
    RegexpConfig,
  ];

  configs.forEach((dict) => initDict(dict));

  // 注释掉的动态加载代码，保留作为参考
  // // @ts-ignore
  // const requireComponent = require.context('./dict', false, /.*\.(js)$/);
  //
  // requireComponent.keys().forEach((path) => {
  //   const dict = requireComponent(path).default;
  //
  //   if (dict && Util.isObject(dict)) {
  //     if ('initStatic' in dict && Util.isFunction(dict.initStatic)) {
  //       dict.initStatic();
  //     }
  //
  //     if ('initRemote' in dict && Util.isFunction(dict.initRemote)) {
  //       dict.initRemote();
  //     }
  //   }
  // });
}

// 初始化一些基本的字典配置
initBasicDict();

/**
 * 资源模块
 * 提供字典对象和相关的资源管理功能
 */
const Resource: ResourceModule = {
  Dict,
};

export default Resource;
