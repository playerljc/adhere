# TableGridLayout

A flexible table grid layout component that supports both horizontal and vertical layouts with comprehensive TypeScript support.

## Features

- 🎯 **Flexible Layouts**: Support for both horizontal and vertical table layouts
- 📱 **Responsive Design**: Built-in media query support for responsive layouts
- 🎨 **Customizable Styling**: Multiple density options and styling modes
- 🔧 **TypeScript Support**: Full TypeScript support with comprehensive type definitions
- 📦 **Modular Design**: Sub-components for Label and Value with proper separation of concerns
- ⚡ **Performance Optimized**: Memoized components and efficient rendering

## Installation

```bash
npm install @baifendian/adhere-ui-tablegridlayout
```

## Basic Usage

```tsx
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';

const MyComponent = () => {
  const data = [
    {
      columnCount: 3,
      colgroup: [120, 200, 150],
      data: [
        {
          key: 'name',
          label: <TableGridLayout.Label>Name:</TableGridLayout.Label>,
          value: <TableGridLayout.Value>John Doe</TableGridLayout.Value>,
        },
        {
          key: 'email',
          label: <TableGridLayout.Label>Email:</TableGridLayout.Label>,
          value: <TableGridLayout.Value>john@example.com</TableGridLayout.Value>,
        },
        {
          key: 'phone',
          label: <TableGridLayout.Label>Phone:</TableGridLayout.Label>,
          value: <TableGridLayout.Value>+1 234 567 8900</TableGridLayout.Value>,
        },
      ],
    },
  ];

  return (
    <TableGridLayout
      data={data}
      layout="horizontal"
      bordered
      density="middle"
    />
  );
};
```

## API Reference

### TableGridLayout Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `DataItem[]` | `[]` | Array of data items for each table |
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout type |
| `bordered` | `boolean` | `false` | Whether to show borders |
| `density` | `'default' \| 'middle' \| 'small'` | `'default'` | Table density |
| `mode` | `'normal' \| 'parity' \| 'bordered'` | `'normal'` | Display mode |
| `requirePosition` | `'before' \| 'after'` | `'before'` | Position of the required asterisk relative to the label text |
| `className` | `string` | - | Additional CSS class name |
| `style` | `CSSProperties` | - | Additional CSS styles |
| `innerClassName` | `string` | - | Inner wrapper class name |
| `innerStyle` | `CSSProperties` | - | Inner wrapper styles |

### DataItem Interface

```tsx
interface DataItem {
  className?: string;
  style?: CSSProperties;
  name?: string;
  width?: string | number;
  defaultLabelWidth?: number;
  padding?: string;
  colgroup?: (number | 'auto')[];
  columnCount?: number;
  data?: DataItemRow[];
}
```

### DataItemRow Interface

```tsx
interface DataItemRow {
  key: string;
  require?: boolean;
  requirePosition?: 'before' | 'after';
  label: ReactElement;
  value: ReactElement;
  show?: boolean;
}
```

### Sub-components

#### TableGridLayout.Label

Renders a table cell with label styling.

```tsx
<TableGridLayout.Label className="custom-label">
  Field Name:
</TableGridLayout.Label>
```

#### TableGridLayout.Value

Renders a table cell with value styling.

```tsx
<TableGridLayout.Value className="custom-value">
  Field Value
</TableGridLayout.Value>
```

## Layout Types

### Horizontal Layout

Labels and values are displayed in the same row.

```tsx
<TableGridLayout
  data={data}
  layout="horizontal"
/>
```

### Vertical Layout

Labels and values are displayed in separate rows.

```tsx
<TableGridLayout
  data={data}
  layout="vertical"
/>
```

## Density Options

- `default`: Standard spacing
- `middle`: Medium spacing
- `small`: Compact spacing

## Display Modes

- `normal`: Standard display
- `parity`: Alternating row colors
- `bordered`: Labels with background color

## Advanced Usage

### Multiple Table Groups

```tsx
const data = [
  {
    name: 'Personal Information',
    columnCount: 2,
    colgroup: [150, 200],
    data: [
      {
        key: 'name',
        label: <TableGridLayout.Label>Name:</TableGridLayout.Label>,
        value: <TableGridLayout.Value>John Doe</TableGridLayout.Value>,
      },
      {
        key: 'email',
        label: <TableGridLayout.Label>Email:</TableGridLayout.Label>,
        value: <TableGridLayout.Value>john@example.com</TableGridLayout.Value>,
      },
    ],
  },
  {
    name: 'Contact Information',
    columnCount: 2,
    colgroup: [150, 200],
    data: [
      {
        key: 'phone',
        label: <TableGridLayout.Label>Phone:</TableGridLayout.Label>,
        value: <TableGridLayout.Value>+1 234 567 8900</TableGridLayout.Value>,
      },
      {
        key: 'address',
        label: <TableGridLayout.Label>Address:</TableGridLayout.Label>,
        value: <TableGridLayout.Value>123 Main St, City, State</TableGridLayout.Value>,
      },
    ],
  },
];
```

### Required Fields

```tsx
{
  key: 'email',
  require: true,
  label: <TableGridLayout.Label>Email:</TableGridLayout.Label>,
  value: <TableGridLayout.Value>john@example.com</TableGridLayout.Value>,
}
```

The required asterisk is placed before the label by default. Use `requirePosition` to put it after the label:

```tsx
<TableGridLayout
  data={data}
  requirePosition="after"
/>
```

A row can override the component-level position:

```tsx
{
  key: 'email',
  require: true,
  requirePosition: 'before',
  label: <TableGridLayout.Label>Email:</TableGridLayout.Label>,
  value: <TableGridLayout.Value>john@example.com</TableGridLayout.Value>,
}
```

### Conditional Display

```tsx
{
  key: 'optional',
  show: shouldShowOptional,
  label: <TableGridLayout.Label>Optional:</TableGridLayout.Label>,
  value: <TableGridLayout.Value>Optional Value</TableGridLayout.Value>,
}
```

### Custom Styling

```tsx
<TableGridLayout
  data={data}
  layout="horizontal"
  bordered
  density="small"
  mode="bordered"
  className="custom-table"
  style={{ maxWidth: '800px' }}
  innerClassName="custom-inner"
  innerStyle={{ padding: '20px' }}
/>
```

## Static Methods

### renderGridSearchFormGroup

Renders a group of table grids with proper grouping.

```tsx
const renderedTables = TableGridLayout.renderGridSearchFormGroup(
  data,
  { layout: 'horizontal', bordered: true },
  { isUseMedia: true, designWidth: 1920 }
);
```

### getRenderDetail

Gets detailed information about the rendering structure.

```tsx
const renderDetail = TableGridLayout.getRenderDetail(data, {
  layout: 'horizontal',
  bordered: true,
});
```

## TypeScript Support

The component provides comprehensive TypeScript support with full type definitions for all props, interfaces, and return types.

```tsx
import type {
  TableGridLayoutProps,
  DataItem,
  DataItemRow,
  LabelProps,
  ValueProps,
} from '@baifendian/adhere-ui-tablegridlayout';
```

## CSS Classes

The component uses the following CSS class naming convention:

- `.adhere-ui-table-grid-layout`: Main container
- `.adhere-ui-table-grid-layout-inner-wrap`: Inner wrapper
- `.adhere-ui-table-grid-layout-border`: Border styling
- `.adhere-ui-table-grid-layout-table`: Table element
- `.adhere-ui-table-grid-layout-table-row`: Table row
- `.adhere-ui-table-grid-layout-table-row-label`: Label cell
- `.adhere-ui-table-grid-layout-table-row-value`: Value cell
- `.adhere-ui-table-grid-layout-table-no-border`: Empty cell
- `.require`: Required label (asterisk before the text)
- `.require.require-after`: Required label with asterisk after the text

## Browser Support

- React 18+
- TypeScript 4.5+
- Modern browsers (ES2015+)

## License

ISC
