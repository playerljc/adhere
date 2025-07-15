import arEGMobile from 'antd-mobile/es/locales/ar-SA';
import enUSMobile from 'antd-mobile/es/locales/en-US';
import ptPTMobile from 'antd-mobile/es/locales/pt-BR';
import zhCNMobile from 'antd-mobile/es/locales/zh-CN';
import arEG from 'antd/locale/ar_EG';
import enUS from 'antd/locale/en_US';
import ptPT from 'antd/locale/pt_PT';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';

import Dict from '@baifendian/adhere-util-dict';

import type {
  AntdLocaleResource,
  DateFormatResource,
  LocaleResource,
  LocalsConfigDict,
} from '../types';

/**
 * 国际化配置字典
 * 提供多语言支持和Ant Design国际化资源
 */
const LocalsConfig: LocalsConfigDict = {
  /**
   * 初始化静态国际化配置
   * 设置语言选项、Ant Design国际化资源和日期格式化
   */
  initStatic(): void {
    /**
     * 支持的语言列表
     * 包含中文、葡萄牙语、英语、阿拉伯语
     */
    Dict.handlers.Locals = (): LocaleResource => ({
      zh_CN: 'zh_CN',
      pt_PT: 'pt_PT',
      en_US: 'en_US',
      ar_EG: 'ar_EG',
    });

    /**
     * 添加语言选项
     * @param key - 语言键
     * @param value - 语言值
     */
    Dict.handlers.AddLocals =
      () =>
      (key: string, value: string): void => {
        const originValue = Dict.value.Locals?.value;

        Dict.handlers.Locals = (): LocaleResource => ({
          ...originValue,
          [key]: value,
        });

        Dict.value.Locals?.refresh();
      };

    /**
     * 移除语言选项
     * @param key - 要移除的语言键
     */
    Dict.handlers.RemoveLocals =
      () =>
      (key: string): void => {
        const originValue = Dict.value.Locals?.value;

        Dict.handlers.Locals = (): LocaleResource =>
          Object.keys(originValue)
            .filter((_key) => _key !== key)
            .reduce((obj, key) => {
              obj[key] = originValue[key];
              return obj;
            }, {} as LocaleResource);

        Dict.value.Locals?.refresh();
      };

    /**
     * Ant Design的国际化资源
     * 包含各语言的Ant Design组件国际化配置
     */
    Dict.handlers.LocalsAntd = (): AntdLocaleResource => ({
      zh_CN: zhCN,
      pt_PT: ptPT,
      en_US: enUS,
      ar_EG: arEG,
    });

    /**
     * 添加Ant Design语言选项
     * @param key - 语言键
     * @param value - 语言配置对象
     */
    Dict.handlers.AddLocalsAntd =
      () =>
      (key: string, value: any): void => {
        const originValue = Dict.value.LocalsAntd?.value;

        Dict.handlers.LocalsAntd = (): AntdLocaleResource => ({
          ...originValue,
          [key]: value,
        });

        Dict.value.LocalsAntd?.refresh();
      };

    /**
     * 移除Ant Design语言选项
     * @param key - 要移除的语言键
     */
    Dict.handlers.RemoveLocalsAntd =
      () =>
      (key: string): void => {
        const originValue = Dict.value.LocalsAntd?.value;

        Dict.handlers.LocalsAntd = (): AntdLocaleResource =>
          Object.keys(originValue)
            .filter((_key) => _key !== key)
            .reduce((obj, key) => {
              obj[key] = originValue[key];
              return obj;
            }, {} as AntdLocaleResource);

        Dict.value.LocalsAntd?.refresh();
      };

    /**
     * Ant Design Mobile的国际化资源
     * 包含各语言的Ant Design Mobile组件国际化配置
     */
    Dict.handlers.LocalsAntMobile = (): AntdLocaleResource => ({
      zh_CN: zhCNMobile,
      pt_PT: ptPTMobile,
      en_US: enUSMobile,
      ar_EG: arEGMobile,
    });

    /**
     * 添加Ant Design Mobile语言选项
     * @param key - 语言键
     * @param value - 语言配置对象
     */
    Dict.handlers.AddLocalsAntMobile =
      () =>
      (key: string, value: any): void => {
        const originValue = Dict.value.LocalsAntMobile?.value;

        Dict.handlers.LocalsAntMobile = (): AntdLocaleResource => ({
          ...originValue,
          [key]: value,
        });

        Dict.value.LocalsAntMobile?.refresh();
      };

    /**
     * 移除Ant Design Mobile语言选项
     * @param key - 要移除的语言键
     */
    Dict.handlers.RemoveLocalsAntMobile =
      () =>
      (key: string): void => {
        const originValue = Dict.value.LocalsAntMobile?.value;

        Dict.handlers.LocalsAntMobile = (): AntdLocaleResource =>
          Object.keys(originValue)
            .filter((_key) => _key !== key)
            .reduce((obj, key) => {
              obj[key] = originValue[key];
              return obj;
            }, {} as AntdLocaleResource);

        Dict.value.LocalsAntMobile?.refresh();
      };

    /**
     * dayjs国际化配置
     * 包含各语言的日期格式化函数
     */
    Dict.handlers.LocalsMoment = (): DateFormatResource => ({
      zh_CN: (): void => {
        dayjs.locale('zh-cn');
      },
      en_US: (): void => {
        dayjs.locale('en');
      },
      pt_PT: (): void => {
        dayjs.locale('pt');
      },
      ar_EG: (): void => {
        dayjs.locale('ar');
      },
    });

    /**
     * 添加dayjs语言选项
     * @param key - 语言键
     * @param value - 日期格式化函数
     */
    Dict.handlers.AddLocalsMoment =
      () =>
      (key: string, value: () => void): void => {
        const originValue = Dict.value.LocalsMoment?.value;

        Dict.handlers.LocalsMoment = (): DateFormatResource => ({
          ...originValue,
          [key]: value,
        });

        Dict.value.LocalsMoment?.refresh();
      };

    /**
     * 移除dayjs语言选项
     * @param key - 要移除的语言键
     */
    Dict.handlers.RemoveLocalsMoment =
      () =>
      (key: string): void => {
        const originValue = Dict.value.LocalsMoment?.value;

        Dict.handlers.LocalsMoment = (): DateFormatResource =>
          Object.keys(originValue)
            .filter((_key) => _key !== key)
            .reduce((obj, key) => {
              obj[key] = originValue[key];
              return obj;
            }, {} as DateFormatResource);

        Dict.value.LocalsMoment?.refresh();
      };
  },

  /**
   * 初始化远程国际化配置
   * 预留接口，用于加载远程国际化数据
   */
  initRemote(): void {
    // 预留接口，用于加载远程国际化数据
  },
};

export default LocalsConfig;
