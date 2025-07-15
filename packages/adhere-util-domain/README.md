# @baifendian/adhere-util-domain

Domain utility for error handling and event management in browser environments.

## ✨ Features
- Browser-compatible domain implementation
- Error handling across multiple operations
- EventEmitter integration
- TypeScript support
- Dynamic import support (babel-plugin-import)

## 🖥 Browser Compatibility
- Modern browsers
- IE11+

## 📦 Installation

```bash
npm install @baifendian/adhere-util-domain --save
```

```bash
yarn add @baifendian/adhere-util-domain
```

## 🚀 Quick Start

```typescript
import Domain from '@baifendian/adhere-util-domain';

// Create a domain
const domain = Domain.createDomain();

// Listen for errors
domain.on('error', (error) => {
  console.error('Domain error:', error);
});

// Run code within the domain
domain.run(() => {
  // Any errors thrown here will be caught by the domain
  throw new Error('Something went wrong');
});
```

## 📖 Documentation

### Basic Usage

```typescript
import Domain from '@baifendian/adhere-util-domain';

const domain = Domain.createDomain();

// Add EventEmitter to domain
const emitter = new EventEmitter();
domain.add(emitter);

// Bind function to domain
const boundFn = domain.bind((a: number, b: number) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
});

// Intercept callback-style functions
const interceptedFn = domain.intercept((error: Error | null, data: any) => {
  if (error) throw error;
  console.log('Processing:', data);
});
```

### API Reference

#### Domain Methods

- `add(emitter: EventEmitter): void` - Add EventEmitter to domain
- `remove(emitter: EventEmitter): void` - Remove EventEmitter from domain
- `bind<T>(fn: T): T` - Bind function to domain for error handling
- `intercept<T>(fn: T): T` - Intercept callback function for error handling
- `run(fn: () => void): IDomain` - Run function within domain context
- `dispose(): IDomain` - Dispose domain and remove all listeners
- `enter(): IDomain` - Enter domain context
- `exit(): IDomain` - Exit domain context

#### Factory Methods

- `Domain.createDomain(): Domain` - Create new domain instance
- `Domain.create(): Domain` - Alias for createDomain

## 🔗 Online Demo
[https://playerljc.github.io/adhere/index.html#/adhere/adhere/util/domain](https://playerljc.github.io/adhere/index.html#/adhere/adhere/util/domain)
