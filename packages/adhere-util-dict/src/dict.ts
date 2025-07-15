import Util from '@baifendian/adhere-util';

import DictReactComponent, { set, useDict } from './react';
import type {
  FunctionParamsCache,
  HandlerTarget,
  IConfig,
  IDict,
  LabelValue,
  ModuleDictEntry,
  ModuleDictExpansionContext,
  NamesObject,
  Target,
  ValuesObject,
} from './types';

/** Dictionary target object for storing values */
const target: Target = {};

/** Dictionary handler target object for storing handlers */
const handlerTarget: HandlerTarget = {};

/** Function parameters cache for memoization */
const funParams: FunctionParamsCache = new Map();

/** Default configuration for dictionary system */
const defaultConfig: IConfig = {
  isUseMemo: true,
};

/** Current configuration for dictionary system */
let config: IConfig = defaultConfig;

/**
 * Compare two argument arrays to determine if they are identical
 * @param preArgArray - Previous argument array
 * @param curArgArray - Current argument array
 * @returns True if arrays are identical, false otherwise
 */
function diffParams(preArgArray: readonly any[], curArgArray: readonly any[]): boolean {
  if (preArgArray.length !== curArgArray.length) return false;

  for (let i = 0; i < preArgArray.length; i++) {
    if (preArgArray[i] !== curArgArray[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Create a function proxy for memoization
 * @param fun - Function to proxy
 * @param property - Property name for caching
 * @returns Proxied function with memoization capabilities
 */
function CreateFunProxy<T extends (...args: any[]) => any>(fun: T, property: string): T {
  return new Proxy(fun, {
    apply(funTarget, thisArg, argArray) {
      const context = thisArg || window;

      const entry = funParams.get(property);

      if (!entry || !diffParams(entry.argArray, argArray)) {
        const result = funTarget.apply(context, argArray);
        funParams.set(property, {
          argArray,
          result,
        });
        return result;
      }

      return entry.result;
    },
  }) as T;
}

/**
 * Initialize dictionary value with proper memoization handling
 * @param p - Dictionary property name
 * @returns Initialized dictionary value
 * @throws Error if dictionary handler doesn't exist
 */
function initValue(p: string): any {
  const handler = Dict.handlers[p];

  if (!handler) {
    throw new Error(`Dictionary handler for '${p}' does not exist`);
  }

  let value: any = handler();

  // Apply memoization if value is a function
  if (typeof value === 'function') {
    // Check handler-specific memoization setting first
    if ('isUseMemo' in handler) {
      if (handler.isUseMemo) {
        value = CreateFunProxy(value, p);
      }
    } else {
      // Fall back to global memoization setting
      if (config.isUseMemo) {
        value = CreateFunProxy(value, p);
      }
    }
  }

  return value;
}

/**
 * Generate unique dictionary full name with UUID prefix
 * @param name - Base dictionary name
 * @returns Unique dictionary name with UUID prefix
 */
function genDictFullName(name: string): string {
  return `${Util.uuid()}_${name}`;
}

/**
 * Check if value is a LabelValue array
 * @param originValue - Value to check
 * @returns True if value is a LabelValue array
 */
function isLabelValueBeanArray(originValue: any): originValue is LabelValue[] {
  if (Array.isArray(originValue)) {
    return originValue.every(
      (t) =>
        typeof t === 'object' &&
        t !== null &&
        'label' in t &&
        'value' in t &&
        typeof t.label === 'string' &&
        ['string', 'number', 'symbol'].includes(typeof t.value),
    );
  }

  return false;
}

/**
 * Convert LabelValue array to Map for efficient lookups
 * @param originValue - LabelValue array
 * @returns Map with value as key and label as value
 */
function genLabelValueBeanMap<T extends LabelValue>(originValue: T[]): Map<T['value'], T['label']> {
  return originValue.reduce<Map<T['value'], T['label']>>((map, { label, value }) => {
    map.set(value, label);
    return map;
  }, new Map());
}

/**
 * Generate module dictionary with automatic expansion capabilities
 * @param handlerOptions - Dictionary handler options
 * @param isUseMemo - Whether to use memoization (overrides global config)
 * @returns Object containing names and values accessors
 */
export function genModuleDict<
  T extends Record<string, ModuleDictEntry<any>>,
  H extends (...args: any[]) => any,
>(
  handlerOptions: T,
  isUseMemo?: boolean,
): {
  names: NamesObject;
  values: ValuesObject<T>;
} {
  const moduleDictExpansions: Array<(args: ModuleDictExpansionContext<T, H>) => void> = [
    // Expand static dictionaries with labelValue data
    ({ name, entry, names, values }) => {
      if (entry?.isStatic) {
        const value = entry.handler({ names, values });

        // Create Map version for LabelValue arrays
        if (isLabelValueBeanArray(value)) {
          const labelValueMapName = `${name}Map`;
          const dictName = genDictFullName(labelValueMapName);
          names[labelValueMapName] = dictName;

          // Create value accessor
          Object.defineProperty(values, labelValueMapName, {
            get() {
              return Dict.value[dictName];
            },
          });

          // Create dictionary handler
          Dict.handlers[dictName] = () =>
            genLabelValueBeanMap(entry.handler({ names, values }) as LabelValue[]);

          // Immediate access if configured
          if (entry?.isImmediateAccess) {
            values[labelValueMapName]?.value;
          }
        }
      }
    },
  ];

  // Generate dictionary structure
  const { names, values } = Object.keys(handlerOptions).reduce<{
    names: NamesObject;
    values: ValuesObject<T>;
  }>(
    ({ names, values }, name) => {
      const entry = handlerOptions[name];
      const dictName = genDictFullName(name);

      // Create name accessor
      names[name] = dictName;

      // Create value accessor
      Object.defineProperty(values, name, {
        get() {
          return Dict.value[dictName];
        },
      });

      // Create dictionary handler
      Dict.handlers[dictName] = () => entry.handler({ names, values });

      // Apply expansions for static dictionaries
      if (entry?.isStatic) {
        moduleDictExpansions.forEach((moduleDictExpansion) =>
          moduleDictExpansion({ name, entry, names, values }),
        );
      }

      // Immediate access if configured
      if (entry?.isImmediateAccess) {
        values[name]?.value;
      }

      return { names, values };
    },
    { names: {}, values: {} },
  );

  // Initialize dictionary
  Dict.init(
    [
      {
        initStatic: () => {},
        initRemote: () => {},
      },
    ],
    {
      isUseMemo: isUseMemo ?? config.isUseMemo,
    },
  );

  return { names, values };
}

/**
 * Main Dictionary object with all functionality
 * Provides a centralized interface for dictionary management
 */
const Dict = {
  /**
   * Dictionary handlers - stores function definitions with memoization support
   */
  handlers: new Proxy<HandlerTarget>(handlerTarget, {
    set(target, property, value, receiver) {
      const result = Reflect.set(target, property, value, receiver);

      // React component processing
      set(property as string);

      return result;
    },
  }),

  /**
   * Dictionary values - provides access to dictionary data with lazy initialization
   */
  value: new Proxy(target, {
    get(target, property: string, receiver) {
      if (!(property in target)) {
        receiver[property] = {
          value: initValue(property),
          refresh() {
            delete receiver[property];
            return this;
          },
        };
      }

      return Reflect.get(target, property, receiver);
    },
  }),

  /**
   * Initialize dictionaries with configuration
   * @param dictArray - Array of dictionary definitions
   * @param _config - Dictionary configuration
   */
  init: (dictArray: IDict[] = [], _config: IConfig = defaultConfig): void => {
    config = _config;

    dictArray.forEach((dict) => {
      if (dict) {
        dict.initStatic?.();
        dict.initRemote?.();
      }
    });
  },

  /**
   * React components for dictionaries
   */
  React: DictReactComponent,

  /**
   * Hook for using dictionaries in React components
   */
  useDict,

  /**
   * Generate module dictionaries
   */
  genModuleDict,
};

export default Dict;
