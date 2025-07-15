import type { ReactElement, ReactNode } from 'react';

/**
 * Dictionary initialization interface
 * Defines the structure for dictionary initialization methods
 */
export interface IDict {
  /** Initialize static dictionaries - called during dictionary setup */
  initStatic?: () => void;
  /** Initialize remote dictionaries - called during dictionary setup */
  initRemote?: () => void;
}

/**
 * Dictionary configuration interface
 * Controls global behavior of the dictionary system
 */
export interface IConfig {
  /** Whether to use memoization for function results to improve performance */
  isUseMemo: boolean;
}

/**
 * Props for non-promise dictionary components
 * Used for static dictionary data that doesn't require async loading
 */
export interface DictNoPromiseComponentProps {
  /** Render function for dictionary data with state information */
  children?: (params?: StateData) => ReactNode;
  /** Function to check if data is empty or should be considered empty */
  isEmpty?: (params?: any) => boolean;
  /** Custom empty state renderer when data is empty */
  renderEmpty?: () => ReactNode;
}

/**
 * Props for promise-based dictionary components
 * Used for async dictionary data that returns promises
 */
export interface DictPromiseComponentProps extends DictNoPromiseComponentProps {
  /** Loading component displayed during first load */
  firstLoading?: ReactElement;
  /** Custom loading renderer with loading state and children */
  renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
}

/**
 * Props for function-based dictionary components
 * Used for dictionary functions that can accept arguments
 */
export interface DictFunctionComponentProps extends DictPromiseComponentProps {
  /** Arguments to pass to the dictionary function */
  args?: readonly any[];
  /** Whether to use memoization for this specific component instance */
  isUseMemo?: boolean;
}

/**
 * Handler interface for dictionary components
 * Provides methods to control dictionary component behavior
 */
export interface DictComponentHandler {
  /** Reload the dictionary data and return a promise */
  reload: () => Promise<any> | undefined;
  /** Reset the dictionary data to initial state and return a promise */
  reset: () => Promise<any> | undefined;
}

/**
 * Dictionary React components object type
 * Maps dictionary keys to their corresponding React components
 */
export interface DictReactComponentObj {
  [prop: string | symbol]: React.ComponentType<any>;
}

/**
 * State data structure for dictionary components
 * Represents the current state of dictionary data
 */
export interface StateData {
  /** The dictionary data value */
  data: any;
  /** Whether the data is valid (not an error) */
  isValidate: boolean;
  /** Whether the data is currently being loaded */
  isPending: boolean;
}

/**
 * Extended state data with refresh function
 * Used by the useDict hook to provide refresh capabilities
 */
export interface UseDictState extends StateData {
  /** Function to refresh the dictionary data */
  refresh(): Promise<void>;
}

/**
 * Options for useDict hook
 * Configures the behavior of the useDict hook
 */
export interface UseDictOptions {
  /** Arguments to pass to dictionary function */
  functionArgs?: readonly any[];
  /** Whether to use memoization for this hook instance */
  isUseMemo?: boolean;
}

/**
 * Module dictionary expansion function type
 * Function that can modify or extend module dictionary handler options
 */
export type ModuleDictExpansion<T> = (handlerOptions: T) => T;

/**
 * Array of module dictionary expansion functions
 * Collection of expansion functions to apply to module dictionaries
 */
export type ModuleDictExpansions<T> = readonly ModuleDictExpansion<T>[];

/**
 * Label-value pair structure
 * Common structure for dictionary data with display labels and values
 */
export interface LabelValue {
  /** Display label for the dictionary item */
  label: string;
  /** Value associated with the label (string, number, or symbol) */
  value: string | number | symbol;
}

/**
 * Handler target value with optional memoization flag
 * Extends Function to include memoization configuration
 */
export interface HandlerTargetValue extends Function {
  /** Whether to use memoization for this specific handler */
  isUseMemo?: boolean;
}

/**
 * Handler target object type
 * Maps dictionary keys to their handler functions
 */
export type HandlerTarget = Partial<{
  [key: string]: HandlerTargetValue;
}>;

/**
 * Target object with value and refresh function
 * Represents a dictionary value with its associated refresh method
 */
export interface TargetValue<T = any> {
  /** The dictionary value */
  value: T;
  /** Function to refresh the dictionary value */
  refresh: () => T;
}

/**
 * Target object type
 * Maps dictionary keys to their values with refresh capabilities
 */
export type Target<T = any> = Partial<{
  [key: string]: TargetValue<T>;
}>;

/**
 * Module dictionary entry type
 * Defines the structure for individual module dictionary entries
 */
export interface ModuleDictEntry<H extends (...args: any[]) => any> {
  /** Whether this is a static dictionary (data doesn't change) */
  isStatic?: boolean;
  /** Dictionary handler function that returns the data */
  handler: H;
  /** Whether to access immediately (only affects non-function values) */
  isImmediateAccess?: boolean;
}

/**
 * Module dictionary handler options type
 * Collection of module dictionary entries
 */
export type ModuleDictHandlerOptions<T extends Record<string, ModuleDictEntry<any>>> = T;

/**
 * Names object type for module dictionaries
 * Maps friendly names to internal dictionary names
 */
export type NamesObject = Partial<{ [key: string]: string }>;

/**
 * Values object type for module dictionaries
 * Provides access to dictionary values with proper typing
 */
export type ValuesObject<T extends Record<string, ModuleDictEntry<any>>> = Partial<{
  [K in keyof T]: { value: ReturnType<T[K]['handler']> };
}>;

/**
 * Module dictionary expansion context
 * Provides context for expansion functions during module dictionary generation
 */
export interface ModuleDictExpansionContext<
  T extends Record<string, ModuleDictEntry<any>>,
  H extends (...args: any[]) => any
> {
  /** Dictionary entry being processed */
  entry: ModuleDictEntry<H>;
  /** Dictionary name being processed */
  name: string;
  /** Names object for the module dictionary */
  names: NamesObject;
  /** Values object for the module dictionary */
  values: ValuesObject<T>;
}

/**
 * Function parameters cache entry
 * Stores cached function arguments and results for memoization
 */
export interface FunctionParamsCacheEntry {
  /** Cached function arguments */
  argArray: readonly any[];
  /** Cached function result */
  result: any;
}

/**
 * Function parameters cache type
 * Maps function identifiers to their cached parameters and results
 */
export type FunctionParamsCache = Map<string, FunctionParamsCacheEntry>;
