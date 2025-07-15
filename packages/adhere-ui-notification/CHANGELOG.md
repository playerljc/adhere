# Changelog

All notable changes to the Adhere UI Notification component will be documented in this file.

## [2.0.0] - 2024-01-15

### 🚀 Major Improvements

#### TypeScript Enhancements
- **Complete Type Safety**: Added comprehensive TypeScript interfaces and type definitions
- **Interface Implementation**: Notification class now implements `NotificationInstance` interface
- **Type Exports**: All types are now properly exported for external use
- **Generic Types**: Improved generic type usage throughout the codebase

#### Code Quality Improvements
- **JSDoc Documentation**: Added comprehensive JSDoc comments for all methods and interfaces
- **Error Handling**: Enhanced error handling with proper null checks and validation
- **Code Structure**: Improved code organization and readability
- **Naming Conventions**: Updated variable names for better clarity and consistency

#### Performance Optimizations
- **Memory Management**: Improved memory management with proper cleanup
- **Event Handling**: Enhanced event listener management
- **Animation Performance**: Optimized CSS transition handling
- **React Integration**: Better React 18 integration with createRoot

### ✨ New Features

#### Enhanced Configuration
- **Callback Parameters**: All callback functions now receive the notification element as parameter
- **Flexible Rendering**: Improved render wrapper functionality
- **Better Defaults**: Enhanced default configuration handling

#### Developer Experience
- **Type Exports**: All interfaces are now exported for external use
- **Better Error Messages**: More descriptive error messages
- **Example Component**: Added comprehensive example component
- **Documentation**: Complete API documentation with usage examples

### 🔧 Technical Improvements

#### Code Structure
```typescript
// Before
private notifications = {};
private key: boolean = false;

// After
private readonly notifications: Record<string, HTMLLIElement> = {};
private isClosing: boolean = false;
```

#### Type Safety
```typescript
// Before
private trigger(action: string, params?: any): void

// After
private trigger(action: keyof Config, element?: HTMLElement): void
```

#### Error Handling
```typescript
// Before
this.notificationContainer.appendChild(n);

// After
if (!this.notificationContainer) {
  throw new Error('Notification container not initialized');
}
this.notificationContainer.appendChild(notificationElement);
```

### 📚 Documentation

#### New Files
- **README.md**: Comprehensive documentation with usage examples
- **example.tsx**: Interactive example component
- **index.d.ts**: TypeScript declaration file
- **CHANGELOG.md**: This changelog file

#### API Documentation
- Complete interface documentation
- Usage examples for all features
- Configuration options
- Callback function documentation

### 🎯 Breaking Changes

#### Type Changes
- All callback functions now receive `HTMLElement` parameter instead of `any`
- Stricter type checking for configuration objects
- Interface implementations are now required

#### Method Signatures
- `trigger` method now uses `keyof Config` instead of `string`
- All private methods have improved type signatures

### 🔄 Migration Guide

#### For Existing Users

1. **Update TypeScript Usage**:
```typescript
// Before
const config = {
  style: 'material',
  type: 'top',
  onCreate: () => console.log('created'),
};

// After
const config: Config = {
  style: 'material',
  type: 'top',
  onCreate: (element) => console.log('created', element),
};
```

2. **Import Types**:
```typescript
// New: Import types for better type safety
import type { Config, ShowConfig, ShowStandardConfig } from '@baifendian/adhere-ui-notification';
```

3. **Callback Functions**:
```typescript
// Before
onCreate: () => void

// After
onCreate: (element?: HTMLElement) => void
```

### 🐛 Bug Fixes

- Fixed potential memory leaks in event listeners
- Improved null checking for DOM elements
- Enhanced error handling for missing containers
- Fixed animation timing issues
- Improved React 18 compatibility

### 📦 Dependencies

- Updated to support React 18+ features
- Enhanced TypeScript support
- Improved integration with ConfigProvider

### 🧪 Testing

- Added comprehensive example component
- Improved error handling coverage
- Enhanced type safety validation

---

## [1.x.x] - Previous Versions

### Features
- Basic notification functionality
- iOS and Material Design styles
- Top and bottom positioning
- Custom and standard notification types
- Basic animation support

### Limitations
- Limited TypeScript support
- Basic error handling
- Minimal documentation
- No comprehensive examples 