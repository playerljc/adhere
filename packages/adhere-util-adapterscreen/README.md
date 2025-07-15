# Adhere Util Adapter Screen

一个强大的屏幕适配工具，支持多种适配方案，包括缩放适配、弹性布局适配等。

## 特性

- 🎯 **多种适配方案**: 支持缩放适配和弹性布局适配
- 📱 **响应式设计**: 自动识别设备类型（手机、平板、PC）
- 🔧 **灵活配置**: 支持自定义设计稿尺寸、忽略元素等
- 🎨 **平滑过渡**: 支持过渡动画效果
- 🛡️ **TypeScript**: 完整的TypeScript类型支持
- 📚 **详细文档**: 完整的JSDoc文档

## 安装

```bash
npm install @baifendian/adhere-util-adapterscreen
```

## 使用方法

### 基础用法

```typescript
import adapterScreen from '@baifendian/adhere-util-adapterscreen';

// 使用默认配置初始化
adapterScreen.init();

// 使用自定义配置
adapterScreen.init({
  el: '#app',
  dw: 1920,
  dh: 1080,
  resize: true,
  transition: 0.3,
  delay: 100
});
```

### 高级配置

```typescript
adapterScreen.init({
  el: '#app',
  dw: 1920,           // 设计稿宽度
  dh: 1080,           // 设计稿高度
  resize: true,       // 是否监听resize事件
  transition: 0.3,    // 过渡时间（秒）
  delay: 100,         // 延迟时间（毫秒）
  ignore: [           // 忽略缩放的元素
    {
      el: '.fixed-element',
      scale: 1,
      fontSize: 14,
      width: 200,
      height: 100
    }
  ]
});
```

### 弹性布局适配

```typescript
// 使用弹性布局适配
adapterScreen.flexible({
  minWidth: 320,
  minHeight: 568
}, true); // 第二个参数为是否使用媒体查询
```

### 设备类型检测

```typescript
// 检测设备类型
if (adapterScreen.isPhoneSize()) {
  console.log('当前为手机设备');
} else if (adapterScreen.isPadSize()) {
  console.log('当前为平板设备');
} else if (adapterScreen.isPCSize()) {
  console.log('当前为PC设备');
}
```

### 元素修正

```typescript
// 对特定元素进行缩放修正
adapterScreen.elRectification('.special-element', 1.5);
```

### 设置页面最小尺寸

```typescript
// 设置页面最小尺寸到CSS
adapterScreen.setPageMinSizeToCSS(document.body);
```

### 检测浏览器缩放

```typescript
// 检测并调整浏览器缩放
adapterScreen.detectZoom();
```

### 关闭适配

```typescript
// 关闭适配效果
adapterScreen.off('#app');
```

## API 文档

### `init(options?, isShowInitTip?)`

初始化屏幕适配。

**参数:**
- `options` (可选): 配置选项或元素选择器字符串
- `isShowInitTip` (可选): 是否显示初始化提示，默认为 `true`

**配置选项:**
- `el`: 渲染的元素选择器，默认是 `"#app"`
- `dw`: 设计稿的宽度，默认是 `1920`
- `dh`: 设计稿的高度，默认是 `929`
- `resize`: 是否监听resize事件，默认是 `true`
- `ignore`: 忽略缩放的元素数组
- `transition`: 过渡时间，默认是 `0`
- `delay`: 延迟时间，默认是 `0`

### `off(id?)`

关闭autofit.js造成的影响。

**参数:**
- `id` (可选): 元素选择器，默认为 `'#app'`

### `elRectification(el, level?)`

元素修正。

**参数:**
- `el`: 元素选择器
- `level` (可选): 修正级别，默认为 `1`

### `flexible(minSize?, isUseMediaQuery?)`

弹性布局适配。

**参数:**
- `minSize` (可选): 最小尺寸配置
- `isUseMediaQuery` (可选): 是否使用媒体查询，默认为 `false`

### `setPageMinSizeToCSS(el?)`

设置页面最小尺寸到CSS。

**参数:**
- `el` (可选): 目标元素，默认为 `document.body`

### `detectZoom()`

检测浏览器缩放并调整。

### `isPhoneSize()`

判断是否为手机尺寸（宽度 <= 768px）。

**返回值:** `boolean`

### `isPadSize()`

判断是否为平板尺寸（768px < 宽度 <= 992px）。

**返回值:** `boolean`

### `isPCSize()`

判断是否为PC尺寸（宽度 > 992px）。

**返回值:** `boolean`

## 类型定义

### `IInitOptions`

初始化选项接口。

```typescript
interface IInitOptions {
  el?: string;
  dw?: number;
  dh?: number;
  resize?: boolean;
  ignore?: IIgnoreElement[];
  transition?: number | string;
  delay?: number;
}
```

### `IIgnoreElement`

忽略缩放的元素配置接口。

```typescript
interface IIgnoreElement {
  el?: string | HTMLElement;
  dom?: string | HTMLElement;
  scale?: number;
  fontSize?: number | string;
  width?: number | string;
  height?: number | string;
}
```

### `IMinSize`

最小尺寸配置接口。

```typescript
interface IMinSize {
  minWidth: number;
  minHeight: number;
  availWidth?: number;
}
```

## 注意事项

1. **初始化顺序**: 确保在DOM加载完成后再调用 `init()` 方法
2. **元素存在性**: 确保指定的元素选择器对应的元素存在
3. **性能考虑**: 在移动设备上，建议适当调整 `delay` 参数以优化性能
4. **兼容性**: 支持现代浏览器，IE需要polyfill支持

## 更新日志

### v2.0.0
- ✨ 完整的TypeScript类型支持
- 📚 详细的JSDoc文档
- 🔧 代码结构优化
- 🐛 修复类型错误
- 🎨 改进代码可读性

## 许可证

MIT License


