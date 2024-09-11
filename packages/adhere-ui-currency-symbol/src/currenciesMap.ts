import currencies from './currencies';
import type { CurrenciesItem } from './types';

export default currencies.reduce((map, config) => {
  map.set(config.code, config);
  return map;
}, new Map<string, CurrenciesItem>());
