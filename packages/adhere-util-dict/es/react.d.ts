import type { DictReactComponentObj, UseDictOptions, UseDictState } from './types';
/**
 * Set up dictionary component for the given key
 * @param key - Dictionary key
 */
export declare function set(key: string): void;
/**
 * Hook for using dictionaries in React components
 * @param dictName - Dictionary name (e.g., 'SystemUser')
 * @param _options - Configuration options
 * @returns Dictionary state with data, loading status, and refresh function
 */
export declare const useDict: (dictName: string, _options?: UseDictOptions) => UseDictState;
/**
 * Dictionary React components - automatically populated after init
 * Maps dictionary keys to their corresponding React components
 */
declare const DictReactComponents: DictReactComponentObj;
export default DictReactComponents;
