import type { CSSProperties, NamedExoticComponent, ReactElement, ReactNode, HTMLAttributes } from 'react';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';

import Label from './Label';
import Value from './Value';

/**
 * Density type for table layout
 */
export type DensityType = 'default' | 'middle' | 'small';

/**
 * Layout type for table grid
 */
export type LayoutType = 'vertical' | 'horizontal';

/**
 * Mode type for table styling
 */
export type ModeType = 'normal' | 'parity' | 'bordered';

/**
 * Row count reference for tracking row numbers
 */
export interface RowCountRef {
  current: number;
}

/**
 * Parameters for horizontal rendering
 */
export interface RenderHorizontalParams {
  data: DataItem;
  rowCountRef: RowCountRef;
  layout?: LayoutType;
  density?: DensityType;
  mode?: ModeType;
  media?: ConfigProviderProps['media'];
}

/**
 * Result of horizontal rendering
 */
export interface RenderHorizontalResult {
  element: ReactElement[];
  detail: GroupRenderDetail;
}

/**
 * Horizontal rendering function type
 */
export type RenderHorizontal = (params: RenderHorizontalParams) => RenderHorizontalResult;

/**
 * Vertical rendering function type
 */
export type RenderVertical = (
  data: DataItem,
  rowCountRef: RowCountRef,
) => RenderHorizontalResult;

/**
 * Parameters for grid search form rendering
 */
export interface RenderGridSearchFormParams {
  data: DataItem;
  layout?: LayoutType;
  density?: DensityType;
  mode?: ModeType;
  rowCountRef: RowCountRef;
  media?: ConfigProviderProps['media'];
}

/**
 * Grid search form rendering function type
 */
export type RenderGridSearchForm = (params: RenderGridSearchFormParams) => ReactElement;

/**
 * Data item for table grid layout
 */
export interface DataItem {
  /** CSS class name */
  className?: string;
  /** CSS styles */
  style?: CSSProperties;
  /** Group name */
  name?: string;
  /** Table width */
  width?: string | number;
  /** Default label width */
  defaultLabelWidth?: number;
  /** Padding */
  padding?: string;
  /** Column group configuration */
  colgroup?: (number | 'auto')[];
  /** Number of columns */
  columnCount?: number;
  /** Data items */
  data?: DataItemRow[];
}

/**
 * Individual data row item
 */
export interface DataItemRow {
  /** Unique key */
  key: string;
  /** Whether the field is required */
  require?: boolean;
  /** Label component */
  label: ReactElement;
  /** Value component */
  value: ReactElement;
  /** Whether to show this item */
  show?: boolean;
}

/**
 * Props for TableGridLayout component
 */
export interface TableGridLayoutProps {
  /** Whether to show borders */
  bordered?: boolean;
  /** Inner wrapper class name */
  innerClassName?: string;
  /** Inner wrapper styles */
  innerStyle?: CSSProperties;
  /** Data configuration */
  data?: DataItem[];
  /** Component class name */
  className?: string;
  /** Component styles */
  style?: CSSProperties;
  /** Layout type */
  layout: LayoutType;
  /** Density setting */
  density?: DensityType;
  /** Display mode */
  mode?: ModeType;
}

/**
 * Group render detail for tracking row information
 */
export interface GroupRenderDetailItem {
  /** Start index of the row */
  startIndex: number;
  /** End index of the row */
  endIndex: number;
}

/**
 * Array of group render details
 */
export type GroupRenderDetail = GroupRenderDetailItem[];

/**
 * Complete render detail information
 */
export interface RenderDetail {
  /** Total row count */
  rowCount: number;
  /** Layout type used for rendering */
  layout: LayoutType;
  /** Detailed information for each group */
  detail: {
    /** Group name */
    name: string;
    /** Row count for this group */
    rowCount: number;
    /** Group render details */
    detail: GroupRenderDetail;
  }[];
}

/**
 * Extended TableGridLayout component type with static methods
 */
export type TableGridLayoutComponent = NamedExoticComponent<TableGridLayoutProps> & {
  /** PropTypes for runtime validation */
  propTypes: object;
  /** Default props */
  defaultProps: object;
  /** Label sub-component */
  Label: typeof Label;
  /** Value sub-component */
  Value: typeof Value;
  /** Render grid search form group */
  renderGridSearchFormGroup(
    data?: DataItem[],
    props?: Omit<TableGridLayoutProps, 'data'>,
    media?: ConfigProviderProps['media'],
  ): ReactNode;
  /** Get render detail information */
  getRenderDetail(data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>): RenderDetail;
};

/**
 * Props for Label component
 */
export interface LabelProps extends HTMLAttributes<HTMLTableCellElement> {
  /** Additional CSS class name */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
}

/**
 * Props for Value component
 */
export interface ValueProps extends HTMLAttributes<HTMLTableCellElement> {
  /** Additional CSS class name */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
}
