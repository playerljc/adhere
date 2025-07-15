# Adhere UI ECharts

一个基于 ECharts 的图表配置工具库，提供便捷的图表配置生成器和丰富的预设颜色。

## 特性

- 🎨 **丰富的颜色配置**: 32种纯色 + 33种渐变色
- 📊 **完整的图表支持**: 支持柱状图、折线图、饼图、散点图等多种图表类型
- 🔧 **便捷的配置生成**: 提供各种图表变体的快速配置生成函数
- 📝 **完整的 TypeScript 支持**: 完整的类型定义和 JSDoc 文档
- 🛠️ **深度合并工具**: 基于 lodash.merge 的配置合并工具

## 安装

```bash
npm install @adhere/ui-echarts
```

## 快速开始

### 基础用法

```typescript
import { options, colors, merge } from '@adhere/ui-echarts';

// 创建基础柱状图配置
const barConfig = options.barChart([
  {
    name: '销量',
    data: [120, 200, 150, 80, 70, 110, 130]
  }
]);

// 使用预设颜色
const primaryColor = colors.color1; // '#404CE4'

// 合并配置
const customConfig = {
  title: { text: '销售数据' },
  xAxis: { data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'] }
};

const finalConfig = merge(barConfig, customConfig);
```

### 图表类型示例

#### 柱状图

```typescript
// 基础柱状图
const basicBar = options.barChart([
  { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] }
]);

// 堆叠柱状图
const stackedBar = options.barChartToStack('total', [
  { name: '线上', data: [120, 200, 150, 80, 70, 110, 130] },
  { name: '线下', data: [90, 150, 120, 60, 50, 80, 100] }
]);

// 动态排序柱状图
const realtimeBar = options.barChartToRealtimeSort([
  { name: '实时数据', data: [120, 200, 150, 80, 70, 110, 130] }
]);
```

#### 折线图

```typescript
// 基础折线图
const basicLine = options.lineChart([
  { name: '趋势', data: [120, 200, 150, 80, 70, 110, 130] }
]);

// 平滑曲线图
const smoothLine = options.lineChartToSmooth([
  { name: '平滑趋势', data: [120, 200, 150, 80, 70, 110, 130] }
]);

// 区域面积图
const areaLine = options.lineChartToArea(
  { color: colors.color1, opacity: 0.3 },
  [{ name: '面积图', data: [120, 200, 150, 80, 70, 110, 130] }]
);

// 堆叠折线图
const stackedLine = options.lineChartToStack('total', [
  { name: '系列1', data: [120, 200, 150, 80, 70, 110, 130] },
  { name: '系列2', data: [90, 150, 120, 60, 50, 80, 100] }
]);
```

#### 饼图

```typescript
// 基础饼图
const basicPie = options.pieChart([
  {
    name: '市场份额',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  }
]);

// 圆环图
const donutPie = options.pieChartToRadius('60%', [
  {
    name: '市场份额',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' }
    ]
  }
]);

// 玫瑰图
const rosePie = options.pieChartToRose('radius', [
  {
    name: '市场份额',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' }
    ]
  }
]);
```

#### 其他图表类型

```typescript
// 散点图
const scatter = options.scatterChart([
  { name: '散点', data: [[10, 20], [15, 25], [20, 30]] }
]);

// 雷达图
const radar = options.radarChart([
  {
    name: '能力评估',
    data: [
      { value: [80, 90, 70, 85, 75], name: '张三' },
      { value: [70, 85, 80, 90, 65], name: '李四' }
    ]
  }
]);

// 热力图
const heatmap = options.heatmapChart([
  {
    name: '热力图',
    data: [
      [0, 0, 5], [0, 1, 7], [0, 2, 3],
      [1, 0, 6], [1, 1, 2], [1, 2, 4]
    ]
  }
]);
```

### 颜色配置

#### 纯色

```typescript
import { colors } from '@adhere/ui-echarts';

// 使用预设纯色
const primaryColor = colors.color1;    // '#404CE4'
const secondaryColor = colors.color2;  // '#238FFD'
const accentColor = colors.color15;    // '#FCC129'
```

#### 渐变色

```typescript
// 使用预设渐变色
const gradientColor = colors.color33; // 蓝色渐变
const gradientConfig = {
  type: 'bar',
  itemStyle: {
    color: gradientColor
  }
};
```

### 配置合并

```typescript
import { merge } from '@adhere/ui-echarts';

const baseConfig = options.barChart([
  { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] }
]);

const customConfig = {
  title: { text: '销售数据统计' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['销量'] },
  xAxis: { data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'] }
};

// 深度合并配置
const finalConfig = merge(baseConfig, customConfig);
```

## API 参考

### Options

#### 基础配置函数

- `baseOption()` - 生成基础网格配置
- `valueToYOption()` - 生成Y轴为数值的坐标轴配置
- `valueToXOption()` - 生成X轴为数值的坐标轴配置

#### 柱状图配置函数

- `barChart(series?)` - 基础柱状图
- `barChartToStack(stack, series?)` - 堆叠柱状图
- `barChartToRealtimeSort(series?)` - 动态排序柱状图
- `barChartValueToX(series?)` - 横向柱状图
- `barChartToStackValueToX(stack, series?)` - 横向堆叠柱状图
- `barChartToRealtimeSortValueToX(series?)` - 横向动态排序柱状图

#### 折线图配置函数

- `lineChart(series?)` - 基础折线图
- `lineChartToStack(stack, series?)` - 堆叠折线图
- `lineChartToArea(areaStyle, series?)` - 区域面积图
- `lineChartToSmooth(series?)` - 平滑曲线图
- `lineChartToStep(step, series?)` - 阶梯线图
- `lineChartValueToX(series?)` - 横向折线图
- `lineChartToStackValueToX(stack, series?)` - 横向堆叠折线图
- `lineChartToAreaValueToX(areaStyle, series?)` - 横向区域面积图
- `lineChartToSmoothValueToX(series?)` - 横向平滑曲线图
- `lineChartToStepValueToX(step, series?)` - 横向阶梯线图

#### 饼图配置函数

- `pieChart(series?)` - 基础饼图
- `pieChartToRadius(radius, series?)` - 圆环图
- `pieChartToRose(roseType, series?)` - 玫瑰图

#### 其他图表配置函数

- `scatterChart(series?)` - 散点图
- `scatterChartValueToX(series?)` - 横向散点图
- `radarChart(series?)` - 雷达图
- `sunburstChart(series?)` - 旭日图
- `boxplotChart(series?)` - 箱形图
- `candlestickChart(series?)` - K线图
- `heatmapChart(series?)` - 热力图
- `sankeyChart(series?)` - 桑基图
- `funnelChart(series?)` - 漏斗图
- `gaugeChart(series?)` - 仪表盘

### Colors

包含 32 种纯色 (`color1` 到 `color32`) 和 33 种渐变色 (`color33` 到 `color65`)。

### Merge

基于 lodash.merge 的深度对象合并工具，支持泛型类型。

## 类型定义

```typescript
// 区域样式配置
interface AreaStyle {
  color: string;
  origin: 'auto' | 'start' | 'end' | number;
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
  opacity: number;
}

// 半径类型
type Radius = number | string | Array<number | string>;

// 玫瑰图类型
type RoseType = boolean | 'area' | 'radius';

// 渐变色配置
interface GradientColorConfig {
  x: number;
  y: number;
  x2: number;
  y2: number;
  colorStops: Array<{
    offset: number;
    color: string;
  }>;
  global: boolean;
}

// 图表基础配置
interface BaseChartOption {
  grid?: {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
    containLabel?: boolean;
  };
  xAxis?: any;
  yAxis?: any;
  series?: any[];
  [key: string]: any;
}
```

## 许可证

MIT



