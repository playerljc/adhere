import type { IConfig, IDict, ModuleDictEntry, NamesObject, ValuesObject } from './types';
/**
 * Generate module dictionary with automatic expansion capabilities
 * @param handlerOptions - Dictionary handler options
 * @param isUseMemo - Whether to use memoization (overrides global config)
 * @returns Object containing names and values accessors
 */
export declare function genModuleDict<T extends Record<string, ModuleDictEntry<any>>, H extends (...args: any[]) => any>(handlerOptions: T, isUseMemo?: boolean): {
    names: NamesObject;
    values: ValuesObject<T>;
};
/**
 * Main Dictionary object with all functionality
 * Provides a centralized interface for dictionary management
 */
declare const Dict: {
    /**
     * Dictionary handlers - stores function definitions with memoization support
     */
    handlers: Partial<{
        [key: string]: import("./types").HandlerTargetValue;
    }>;
    /**
     * Dictionary values - provides access to dictionary data with lazy initialization
     *
     * Function values:
     *   - Always cached in target (original behavior)
     *   - isUseMemo only controls CreateFunProxy arg memoization (in initValue)
     *
     * Non-function values:
     *   - isUseMemo true: cache in target (original behavior)
     *   - isUseMemo false: recompute on every .value access
     */
    value: Partial<{
        [key: string]: import("./types").TargetValue<any>;
    }>;
    /**
     * Initialize dictionaries with configuration
     * @param dictArray - Array of dictionary definitions
     * @param _config - Dictionary configuration
     */
    init: (dictArray?: IDict[], _config?: IConfig) => void;
    /**
     * React components for dictionaries
     */
    React: import("./types").DictReactComponentObj;
    /**
     * Hook for using dictionaries in React components
     */
    useDict: (dictName: string, _options?: import("./types").UseDictOptions) => import("./types").UseDictState;
    /**
     * Generate module dictionaries
     */
    genModuleDict: typeof genModuleDict;
};
export default Dict;
