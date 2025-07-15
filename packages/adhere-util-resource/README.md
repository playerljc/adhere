# Adhere Util Resource

一个提供资源管理和配置的工具模块，支持表单验证、GIS配置、国际化、MIME类型、日期格式化等功能。

## 特性

- 🚀 **TypeScript 优先**: 完整的 TypeScript 支持，包含全面的类型定义
- 📚 **完整文档**: 详细的 JSDoc 注释和示例
- 🔧 **模块化设计**: 按功能分组的配置字典
- 🛡️ **类型安全**: 严格的类型检查和验证
- 🌍 **国际化支持**: 多语言支持和 Ant Design 国际化资源
- 📅 **日期格式化**: 丰富的日期格式化模板
- 🗺️ **GIS 支持**: 地理信息系统相关配置
- 📄 **MIME 类型**: 常用文件类型的 MIME 类型映射

## 安装

```bash
npm install @baifendian/adhere-util-resource
```

## 快速开始

### 基本使用

```typescript
import Resource from '@baifendian/adhere-util-resource';

// 访问字典值
const formRules = Resource.Dict.value.FormInputNumberRule.value;
const gisConfig = Resource.Dict.value.ResourceGisEpsg4326.value;
const mimeTypes = Resource.Dict.value.ResourceMimepdf.value;
```

### 表单验证规则

```typescript
import Resource from '@baifendian/adhere-util-resource';
import type { FormValidationRule } from '@baifendian/adhere-util-resource';

// 获取数字输入验证规则
const numberRule: FormValidationRule = Resource.Dict.value.FormInputNumberRule.value;
// { type: 'number', message: '输入范围1-200', min: 1, max: 200 }

// 获取空白字符验证规则
const whitespaceRule: FormValidationRule = Resource.Dict.value.FormWhitespaceRule.value;
// { message: '不能输入空白字符', whitespace: true }
```

### GIS 配置

```typescript
import Resource from '@baifendian/adhere-util-resource';
import type { GisCoordinate, GisMapExtent } from '@baifendian/adhere-util-resource';

// 获取坐标系统
const epsg4326: string = Resource.Dict.value.ResourceGisEpsg4326.value;
// 'EPSG:4326'

// 获取地图范围
const mapExtent: GisMapExtent = Resource.Dict.value.ResourceGisXinbeiquMapExtent.value;
// [[119.438, 32.13607], [120.33419, 31.74221]]

// 获取中心点
const centerPoint: GisCoordinate = Resource.Dict.value.ResourceGisXinbeiquCenterPoint.value;
// [119.879673, 31.933156]
```

### 国际化配置

```typescript
import Resource from '@baifendian/adhere-util-resource';
import type { LocaleResource, AntdLocaleResource } from '@baifendian/adhere-util-resource';

// 获取支持的语言列表
const locales: LocaleResource = Resource.Dict.value.Locals.value;
// { zh_CN: 'zh_CN', pt_PT: 'pt_PT', en_US: 'en_US', ar_EG: 'ar_EG' }

// 获取 Ant Design 国际化资源
const antdLocales: AntdLocaleResource = Resource.Dict.value.LocalsAntd.value;
// 包含各语言的 Ant Design 组件国际化配置
```

### MIME 类型

```typescript
import Resource from '@baifendian/adhere-util-resource';

// 获取常用文件类型的 MIME 类型
const pdfMime: string = Resource.Dict.value.ResourceMimepdf.value;
// 'application/pdf'

const jpgMime: string = Resource.Dict.value.ResourceMimejpg.value;
// 'image/jpeg'

const mp4Mime: string = Resource.Dict.value.ResourceMimemp4.value;
// 'video/mp4'
```

### 日期格式化

```typescript
import Resource from '@baifendian/adhere-util-resource';

// 获取日期格式化模板
const formatYYYY: string = Resource.Dict.value.ResourceMomentFormatYYYY.value;
// 'YYYY'

const format10: string = Resource.Dict.value.ResourceMomentFormat10.value;
// 'YYYY-MM-DD'

// 使用带参数的格式化函数
const format13 = Resource.Dict.value.ResourceMomentFormat13.value;
const customFormat: string = format13('/', ':');
// 'YYYY/M/D H:m:s'
```

### 通用配置

```typescript
import Resource from '@baifendian/adhere-util-resource';
import type { Option, RomanNumeralsMap, WhetherMap } from '@baifendian/adhere-util-resource';

// 获取分页配置
const pageSize: number = Resource.Dict.value.ResourceNormalPageSize.value;
// 10

// 获取是/否选项
const whetherOptions: Option[] = Resource.Dict.value.ResourceNormalWhether.value;
// [{ label: '全部', value: '' }, { label: '是', value: '1' }, { label: '否', value: '0' }]

// 获取罗马数字映射
const romanMap: RomanNumeralsMap = Resource.Dict.value.ResourceNormalRomanNumeralsMap.value;
// Map { 1 => 'Ⅰ', 2 => 'Ⅱ', 3 => 'Ⅲ', ... }
```

### 正则表达式

```typescript
import Resource from '@baifendian/adhere-util-resource';
import type { RegexpPattern } from '@baifendian/adhere-util-resource';

// 获取正则表达式模式
const removeSplit: RegexpPattern = Resource.Dict.value.ResourceRegexpRemoveSplitTokenizer.value;
// /\/*/gim

const firstChar: RegexpPattern = Resource.Dict.value.ResourceRegexpFirstChat.value;
// /( |^)[a-z]/g

const mergeSplit: RegexpPattern = Resource.Dict.value.ResourceRegexpMergeSplit.value;
// /\/{2,}/
```

## API 参考

### 类型定义

#### 表单相关
- `FormValidationRule` - 表单验证规则接口
- `FormPopupContainer` - 表单弹窗容器函数类型

#### GIS 相关
- `GisCoordinate` - GIS 坐标点类型
- `GisMapExtent` - GIS 地图范围类型

#### 国际化相关
- `LocaleResource` - 国际化资源类型
- `AntdLocaleResource` - Ant Design 国际化资源类型
- `DateFormatFunction` - 日期格式化函数类型
- `DateFormatResource` - 日期格式化资源类型

#### 通用类型
- `Option` - 选项类型
- `RomanNumeralsMap` - 罗马数字映射类型
- `WhetherMap` - 是否选项映射类型
- `RegexpPattern` - 正则表达式类型

#### 配置字典类型
- `FormConfigDict` - 表单配置字典类型
- `GisConfigDict` - GIS 配置字典类型
- `LocalsConfigDict` - 国际化配置字典类型
- `MimeConfigDict` - MIME 类型配置字典类型
- `MomentConfigDict` - 日期格式化配置字典类型
- `NormalConfigDict` - 通用配置字典类型
- `RegexpConfigDict` - 正则表达式配置字典类型

### 字典处理器

#### 表单验证
- `FormInputNumberRule` - 数字输入验证规则
- `FormWhitespaceRule` - 空白字符验证规则
- `FormInputStringRule` - 字符串输入验证规则
- `FormPopupContainer` - 表单弹窗容器配置

#### GIS 配置
- `ResourceGisEpsg4326` - EPSG:4326 坐标系统
- `ResourceGisEpsg3857` - EPSG:3857 坐标系统
- `ResourceGisEarthRadius` - 地球半径
- `ResourceGisMapMaxZoom` - 地图最大缩放级别
- `ResourceGisMapMinZoom` - 地图最小缩放级别
- `ResourceGisXinbeiquMapExtent` - 新北区地图范围
- `ResourceGisDefaultExtent` - 默认地图范围
- `ResourceGisXinbeiquCenterPoint` - 新北区中心点

#### 国际化
- `Locals` - 支持的语言列表
- `AddLocals` - 添加语言选项
- `RemoveLocals` - 移除语言选项
- `LocalsAntd` - Ant Design 国际化资源
- `AddLocalsAntd` - 添加 Ant Design 语言选项
- `RemoveLocalsAntd` - 移除 Ant Design 语言选项
- `LocalsAntMobile` - Ant Design Mobile 国际化资源
- `AddLocalsAntMobile` - 添加 Ant Design Mobile 语言选项
- `RemoveLocalsAntMobile` - 移除 Ant Design Mobile 语言选项
- `LocalsMoment` - dayjs 国际化配置
- `AddLocalsMoment` - 添加 dayjs 语言选项
- `RemoveLocalsMoment` - 移除 dayjs 语言选项

#### MIME 类型
- `ResourceMimepdf` - PDF 文件
- `ResourceMimejpg` - JPEG 图像
- `ResourceMimepng` - PNG 图像
- `ResourceMimemp4` - MP4 视频
- `ResourceMimemp3` - MP3 音频
- `ResourceMimezip` - ZIP 压缩文件
- 等等...

#### 日期格式化
- `ResourceMomentFormat2` - 2位年份格式
- `ResourceMomentFormat4` - 4位年份格式
- `ResourceMomentFormat6` - 6位年月格式
- `ResourceMomentFormat8` - 8位年月日格式
- `ResourceMomentFormat10` - 10位年月日格式
- `ResourceMomentFormat13` - 13位年月日时分秒格式
- 等等...

#### 通用配置
- `ResourceNormalMaxZIndex` - 最大层级
- `ResourceNormalPageSize` - 分页数量
- `ResourceNormalRomanNumeralsMap` - 罗马数字映射
- `ResourceNormalWhether` - 是/否选项列表
- `ResourceNormalWhetherMap` - 是/否映射
- `ResourceNormalIsThere` - 有无选项列表
- `ResourceNormalIsThereMap` - 有无映射
- `ResourceNormalSex` - 男女选项列表
- `ResourceNormalSexMap` - 男女映射

#### 正则表达式
- `ResourceRegexpRemoveSplitTokenizer` - 移除分隔符
- `ResourceRegexpFirstChat` - 首字符大写
- `ResourceRegexpMergeSplit` - 合并多个斜杠
- `ResourceRegexpNSTRN` - 清理多余空白字符
- `ResourceRegexpSENRNT` - 清理首尾空白字符

## 最佳实践

1. **使用 TypeScript**: 利用完整的类型系统获得更好的开发体验
2. **按需导入**: 只导入需要的类型和功能
3. **类型安全**: 使用类型注解确保代码的类型安全
4. **文档优先**: 参考 JSDoc 注释了解 API 用法
5. **模块化**: 按功能分组使用不同的配置字典

## 贡献

1. Fork 仓库
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License



