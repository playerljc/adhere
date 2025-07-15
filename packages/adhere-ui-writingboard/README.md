# Adhere UI WritingBoard

一个功能强大的画板组件库，提供多种绘制模式，支持自由绘制、直线、矩形、圆形、三角形等图形绘制，同时提供桌面端和移动端的签名组件。

## 特性

- 🎨 **多种绘制模式**: 支持自由绘制、直线、矩形、圆形、三角形、橡皮擦等模式
- 📱 **移动端适配**: 提供专门的移动端签名组件
- 🖊️ **签名功能**: 内置签名组件，支持模态框编辑
- 🎯 **TypeScript支持**: 完整的TypeScript类型定义
- 🎨 **主题支持**: 支持自定义主题和样式
- 📐 **响应式设计**: 支持窗口大小变化自动调整

## 安装

```bash
npm install @baifendian/adhere-ui-writingboard
```

## 基础用法

### 画板组件

```tsx
import WritingBoard, { Mode } from '@baifendian/adhere-ui-writingboard';

function App() {
  const writingBoardRef = useRef<WritingBoardHandle>(null);

  const handleClear = () => {
    writingBoardRef.current?.clear();
  };

  const handleSave = () => {
    const base64 = writingBoardRef.current?.toDataURL();
    console.log('画板内容:', base64);
  };

  return (
    <div>
      <WritingBoard
        ref={writingBoardRef}
        defaultMode={Mode.FREE}
        defaultLineWidth={2}
        defaultStrokeStyle="#000"
        style={{ width: '600px', height: '400px', border: '1px solid #ccc' }}
      />
      <button onClick={handleClear}>清除</button>
      <button onClick={handleSave}>保存</button>
    </div>
  );
}
```

### 桌面端签名组件

```tsx
import WritingBoard from '@baifendian/adhere-ui-writingboard';

function SignatureForm() {
  const [signature, setSignature] = useState<string>('');

  return (
    <div>
      <h3>请签名</h3>
      <WritingBoard.Signature
        value={signature}
        onChange={setSignature}
        modalProps={{
          title: '电子签名',
          width: '80%',
        }}
      />
      {signature && (
        <div>
          <h4>签名预览:</h4>
          <img src={signature} alt="签名" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}
```

### 移动端签名组件

```tsx
import WritingBoard from '@baifendian/adhere-ui-writingboard';

function MobileSignatureForm() {
  const [signature, setSignature] = useState<string>('');

  return (
    <div>
      <h3>请签名</h3>
      <WritingBoard.MobileSignature
        value={signature}
        onChange={setSignature}
      />
      {signature && (
        <div>
          <h4>签名预览:</h4>
          <img src={signature} alt="签名" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}
```

## API 文档

### WritingBoard Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义CSS类名 |
| style | CSSProperties | - | 自定义样式 |
| defaultMode | Mode | Mode.FREE | 默认绘制模式 |
| defaultStrokeStyle | string | '#000' | 默认线条颜色 |
| defaultLineWidth | number | 2 | 默认线条宽度 |
| resizeTime | number | 300 | 窗口大小变化防抖时间(毫秒) |

### WritingBoard Handle

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| setMode | mode: Mode | void | 设置绘制模式 |
| setStrokeStyle | style: string | void | 设置线条颜色 |
| setLineWidth | width: number | void | 设置线条宽度 |
| clear | - | void | 清除画布内容 |
| isEmpty | - | boolean | 检查画布是否为空 |
| toDataURL | backgroundColor?: string, type?: string, quality?: number | string \| undefined | 导出画布为DataURL |

### Signature Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义CSS类名 |
| style | CSSProperties | - | 自定义样式 |
| modalProps | ModalProps | - | 模态框属性 |
| coreProps | SignatureCoreProps | - | 核心组件属性 |
| value | string | - | 签名值(base64字符串) |
| onChange | (base64?: string) => void | - | 签名值变化回调 |

### Mode 枚举

| 值 | 说明 |
| --- | --- |
| FREE | 自由绘制模式 |
| LINE | 直线绘制模式 |
| RECTANGLE | 矩形绘制模式 |
| CIRCLE | 圆形绘制模式 |
| TRIANGLE | 三角形绘制模式 |
| RUBBER | 橡皮擦模式 |

## 绘制模式说明

### 自由绘制 (FREE)
- 支持鼠标拖拽自由绘制
- 支持触摸屏绘制
- 线条平滑连续

### 直线 (LINE)
- 点击起始点，拖拽到终点绘制直线
- 实时预览直线效果

### 矩形 (RECTANGLE)
- 点击起始点，拖拽绘制矩形
- 支持任意方向的矩形绘制

### 圆形 (CIRCLE)
- 点击圆心，拖拽绘制圆形
- 以起始点到当前点的距离为半径

### 三角形 (TRIANGLE)
- 点击起始点，拖拽绘制三角形
- 自动计算三个顶点位置

### 橡皮擦 (RUBBER)
- 擦除已绘制的内容
- 固定宽度为15像素

## 主题定制

组件支持通过CSS变量进行主题定制：

```css
:root {
  --signature-core-wrap-background-color: #f5f5f5;
}
```

## 浏览器支持

- Chrome >= 60
- Firefox >= 55
- Safari >= 12
- Edge >= 79

## 许可证

MIT License
