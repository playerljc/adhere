# Adhere Util Intl

A comprehensive internationalization utility service built on top of `react-intl-universal` with enhanced TypeScript support and improved developer experience.

## Features

- 🚀 **TypeScript First**: Full TypeScript support with comprehensive type definitions
- 📚 **Comprehensive Documentation**: Detailed JSDoc comments with examples
- 🔧 **Flexible Configuration**: Support for multiple locales and custom configurations
- 🎯 **Chinese Key Support**: Special support for using Chinese text as keys
- 🛡️ **Error Handling**: Robust error handling with helpful warnings
- 🧪 **Testing Support**: Built-in reset functionality for testing

## Installation

```bash
npm install @baifendian/adhere-util-intl
```

## Quick Start

```typescript
import IntlService from '@baifendian/adhere-util-intl';

// Initialize the service
await IntlService.init({
  currentLocale: 'en_US',
  mainLanguage: 'zh_CN',
  locales: {
    en_US: ['Hello', 'World'],
    zh_CN: ['你好', '世界']
  }
});

// Use the service
const message = IntlService.v('你好'); // Returns: "Hello"
```

## API Reference

### Types

#### `SupportedLocale`
Supported locale codes: `'en_US' | 'zh_CN' | 'pt_PT' | 'ar_EG' | string`

#### `InitConfig`
Configuration interface for service initialization:

```typescript
interface InitConfig {
  prefix?: string;                    // Prefix for generated keys
  currentLocale?: SupportedLocale;    // Current locale to use
  mainLanguage?: SupportedLocale;     // Main language for fallback
  locales: LocalesConfig;            // Locale data configuration
  [key: string]: any;                // Additional react-intl-universal options
}
```

#### `Variables`
Variables object for interpolation: `Record<string, string | number | boolean>`

#### `HtmlOptions`
Options object for HTML formatting: `Record<string, any>`

### Methods

#### `init(config, reload?)`
Initialize the internationalization service.

```typescript
await IntlService.init({
  prefix: 'local',
  currentLocale: 'en_US',
  mainLanguage: 'zh_CN',
  locales: {
    en_US: [
      'Hello',
      'Welcome',
      { customKey: 'Custom message' }
    ],
    zh_CN: [
      '你好',
      '欢迎',
      { customKey: '自定义消息' }
    ]
  }
}, false);
```

**Parameters:**
- `config: InitConfig` - Initialization configuration
- `reload?: boolean` - Whether to reload if already initialized (default: false)

**Returns:** `Promise<void>`

**Throws:** `Error` if initialization fails

#### `isInit()`
Check if the service has been initialized.

```typescript
const initialized = IntlService.isInit(); // boolean
```

#### `v(key, variables?)`
Get internationalized value using Chinese text as key.

```typescript
// Simple usage
const message = IntlService.v('你好'); // "Hello"

// With variables
const message = IntlService.v('欢迎 {name}', { name: 'World' }); // "Welcome World"
```

**Parameters:**
- `key: string` - Chinese text key
- `variables?: Variables | null` - Variables for interpolation

**Returns:** `string`

#### `vHtml(key, options?)`
Get internationalized HTML using Chinese text as key.

```typescript
const html = IntlService.vHtml('欢迎 <strong>{name}</strong>', { name: 'User' });
// Returns: "Welcome <strong>User</strong>"
```

**Parameters:**
- `key: string` - Chinese text key
- `options?: HtmlOptions | null` - HTML formatting options

**Returns:** `string`

#### `get(key, variables?)`
Get internationalized value using locale key.

```typescript
const message = IntlService.get('hello', { name: 'World' });
```

**Parameters:**
- `key: string` - Locale key
- `variables?: Variables | null` - Variables for interpolation

**Returns:** `string`

#### `getHTML(key, options?)`
Get internationalized HTML using locale key.

```typescript
const html = IntlService.getHTML('welcome', { name: 'User' });
```

**Parameters:**
- `key: string` - Locale key
- `options?: HtmlOptions | null` - HTML formatting options

**Returns:** `string`

#### `formatMessage(options, variables?)`
Format message using ReactIntlUniversalMessageDescriptor.

```typescript
const message = IntlService.formatMessage(
  { id: 'welcome', defaultMessage: 'Welcome' },
  { name: 'User' }
);
```

**Parameters:**
- `options: ReactIntlUniversalMessageDescriptor` - Message descriptor options
- `variables?: Variables | null` - Variables for interpolation

**Returns:** `string`

#### `formatHTMLMessage(options, variables?)`
Format HTML message using ReactIntlUniversalMessageDescriptor.

```typescript
const html = IntlService.formatHTMLMessage(
  { id: 'welcome', defaultMessage: 'Welcome <strong>{name}</strong>' },
  { name: 'User' }
);
```

**Parameters:**
- `options: ReactIntlUniversalMessageDescriptor` - Message descriptor options
- `variables?: Variables | null` - Variables for interpolation

**Returns:** `string`

#### `load(locales)`
Load additional locales after initialization.

```typescript
IntlService.load({
  'fr_FR': ['Bonjour', 'Monde']
});
```

**Parameters:**
- `locales: Record<string, any>` - Additional locale data to load

#### `getInitOptions()`
Get initialization options from react-intl-universal.

```typescript
const options = IntlService.getInitOptions();
```

**Returns:** `any`

### Utility Functions

#### `getLocal(prefix, data)`
Generate a key-value object from an array of strings.

```typescript
import { getLocal } from '@baifendian/adhere-util-intl';

const result = getLocal('prefix', ['Hello', 'World']);
// Returns: { prefix1: 'Hello', prefix2: 'World' }
```

**Parameters:**
- `prefix: string` - Prefix for generated keys (default: 'local')
- `data: string[]` - Array of strings to convert

**Returns:** `ProcessedLocale`

#### `getLocales()`
Get all processed locales.

```typescript
import { getLocales } from '@baifendian/adhere-util-intl';

const locales = getLocales();
// Returns: Copy of the main locales object
```

**Returns:** `MainLocales`

## Advanced Usage

### Custom Locale Configuration

```typescript
const customLocales = {
  en_US: [
    'Hello',
    'Welcome',
    { 
      customKey: 'Custom message',
      welcomeMessage: 'Welcome to our application'
    }
  ],
  zh_CN: [
    '你好',
    '欢迎',
    { 
      customKey: '自定义消息',
      welcomeMessage: '欢迎使用我们的应用'
    }
  ]
};

await IntlService.init({
  currentLocale: 'en_US',
  mainLanguage: 'zh_CN',
  locales: customLocales
});
```

### Error Handling

```typescript
try {
  await IntlService.init(config);
} catch (error) {
  console.error('Failed to initialize internationalization service:', error);
}

// The service will warn if used before initialization
const message = IntlService.v('你好'); // Logs warning and returns empty string
```

### Testing Support

```typescript
// Reset the service state for testing
IntlService._reset();

// Reinitialize for tests
await IntlService.init(testConfig);
```

## Migration Guide

### From Previous Version

1. **Import Changes:**
   ```typescript
   // Old
   import Intl from '@baifendian/adhere-util-intl';
   
   // New
   import IntlService from '@baifendian/adhere-util-intl';
   ```

2. **Type Improvements:**
   ```typescript
   // Old
   const config: Init = { ... };
   
   // New
   const config: InitConfig = { ... };
   ```

3. **Better Error Handling:**
   ```typescript
   // Old - silent failure
   if (!isInit) return '';
   
   // New - warning with fallback
   if (!isInitialized) {
     console.warn('Service not initialized');
     return '';
   }
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License



