# Adhere Dictionary Utility

A comprehensive dictionary management system for React applications with TypeScript support, memoization, and automatic component generation.

## Features

- 🚀 **TypeScript First**: Full TypeScript support with comprehensive type definitions
- ⚡ **Performance Optimized**: Built-in memoization and caching mechanisms
- 🔄 **React Integration**: Automatic React component generation and hooks
- 📦 **Module Support**: Module-based dictionary organization
- 🎯 **Flexible**: Support for static, promise-based, and function-based dictionaries
- 🛡️ **Type Safe**: Strict type checking and validation

## Installation

```bash
npm install @baifendian/adhere-util-dict
```

## Quick Start

### Basic Usage

```typescript
import Dict from '@baifendian/adhere-util-dict';

// Define dictionary handlers
Dict.handlers.SystemUser = () => [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Guest', value: 'guest' }
];

// Initialize the dictionary system
Dict.init();

// Access dictionary values
const users = Dict.value.SystemUser.value;
console.log(users); // [{ label: 'Admin', value: 'admin' }, ...]
```

### React Component Usage

```tsx
import React from 'react';
import Dict from '@baifendian/adhere-util-dict';

// Dictionary will automatically generate React components
const UserSelect = () => (
  <Dict.React.SystemUser>
    {({ data, isPending, isValidate }) => {
      if (isPending) return <div>Loading...</div>;
      if (!isValidate) return <div>Error loading data</div>;
      
      return (
        <select>
          {data?.map(user => (
            <option key={user.value} value={user.value}>
              {user.label}
            </option>
          ))}
        </select>
      );
    }}
  </Dict.React.SystemUser>
);
```

### Using the Hook

```tsx
import React from 'react';
import { useDict } from '@baifendian/adhere-util-dict';

const UserList = () => {
  const { data, isPending, isValidate, refresh } = useDict('SystemUser');

  if (isPending) return <div>Loading...</div>;
  if (!isValidate) return <div>Error loading data</div>;

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <ul>
        {data?.map(user => (
          <li key={user.value}>{user.label}</li>
        ))}
      </ul>
    </div>
  );
};
```

## Advanced Features

### Module Dictionaries

```typescript
import { genModuleDict } from '@baifendian/adhere-util-dict';

const userModule = genModuleDict({
  roles: {
    isStatic: true,
    handler: () => [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]
  },
  permissions: {
    handler: ({ names, values }) => {
      // Access other dictionaries in the module
      const roles = values.roles?.value;
      return fetchPermissions(roles);
    }
  }
});

// Access module dictionaries
const roles = userModule.values.roles?.value;
const permissions = userModule.values.permissions?.value;
```

### Function-based Dictionaries with Arguments

```typescript
// Define function-based dictionary
Dict.handlers.UserPermissions = (userId: string) => 
  fetch(`/api/users/${userId}/permissions`).then(res => res.json());

// Use in React component
const UserPermissions = ({ userId }: { userId: string }) => (
  <Dict.React.UserPermissions args={[userId]}>
    {({ data, isPending }) => {
      if (isPending) return <div>Loading permissions...</div>;
      return <div>{/* Render permissions */}</div>;
    }}
  </Dict.React.UserPermissions>
);
```

### Promise-based Dictionaries

```typescript
// Define promise-based dictionary
Dict.handlers.AsyncData = () => 
  fetch('/api/data').then(res => res.json());

// Use with loading states
const AsyncDataComponent = () => (
  <Dict.React.AsyncData
    firstLoading={<div>Initial loading...</div>}
    renderNormalLoading={({ children, loading }) => 
      loading ? <div>Loading...</div> : children
    }
  >
    {({ data }) => <div>{/* Render data */}</div>}
  </Dict.React.AsyncData>
);
```

## Configuration

### Global Configuration

```typescript
import Dict from '@baifendian/adhere-util-dict';

// Configure global settings
Dict.init([], {
  isUseMemo: true // Enable memoization for all function-based dictionaries
});
```

### Per-Handler Configuration

```typescript
// Configure memoization for specific handlers
Dict.handlers.ExpensiveOperation = () => {
  // Expensive computation
  return heavyCalculation();
};
Dict.handlers.ExpensiveOperation.isUseMemo = true;
```

## TypeScript Support

### Type Definitions

```typescript
import type { 
  LabelValue, 
  UseDictState, 
  ModuleDictEntry 
} from '@baifendian/adhere-util-dict';

// Define typed dictionary entries
const typedModule = genModuleDict<{
  users: ModuleDictEntry<() => LabelValue[]>;
  settings: ModuleDictEntry<() => Promise<Settings>>;
}>({
  users: {
    isStatic: true,
    handler: () => [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]
  },
  settings: {
    handler: () => fetch('/api/settings').then(res => res.json())
  }
});
```

### Custom Types

```typescript
interface User {
  id: string;
  name: string;
  role: string;
}

// Type-safe dictionary usage
const users = Dict.value.UserList.value as User[];
```

## Performance Optimization

### Memoization

The dictionary system automatically memoizes function results to improve performance:

```typescript
// Results are cached based on function arguments
Dict.handlers.ExpensiveCalculation = (param1: number, param2: string) => {
  // This will only execute once for each unique combination of param1 and param2
  return heavyComputation(param1, param2);
};
```

### Component Caching

React components are automatically memoized to prevent unnecessary re-renders:

```tsx
// Components are cached and reused
const MyComponent = () => (
  <Dict.React.SystemUser>
    {({ data }) => <div>{/* Component is memoized */}</div>}
  </Dict.React.SystemUser>
);
```

## API Reference

### Core Functions

- `Dict.init(dictArray?, config?)` - Initialize the dictionary system
- `Dict.handlers` - Register dictionary handlers
- `Dict.value` - Access dictionary values
- `Dict.React` - React components for dictionaries
- `useDict(dictName, options?)` - React hook for dictionary usage
- `genModuleDict(handlerOptions, isUseMemo?)` - Generate module dictionaries

### Configuration Options

- `isUseMemo: boolean` - Enable/disable memoization globally

### Component Props

- `children: (StateData) => ReactNode` - Render function
- `isEmpty?: (data: any) => boolean` - Custom empty check
- `renderEmpty?: () => ReactNode` - Custom empty renderer
- `firstLoading?: ReactElement` - Initial loading component
- `renderNormalLoading?: (params) => ReactNode` - Custom loading renderer
- `args?: readonly any[]` - Function arguments (function components only)
- `isUseMemo?: boolean` - Per-component memoization setting

## Best Practices

1. **Use TypeScript**: Leverage the comprehensive type system for better development experience
2. **Organize with Modules**: Use `genModuleDict` for related dictionaries
3. **Enable Memoization**: Use memoization for expensive operations
4. **Handle Loading States**: Always provide loading and error states in components
5. **Use Hooks for Simple Cases**: Use `useDict` hook for simple dictionary access
6. **Cache Appropriately**: Use static dictionaries for data that doesn't change

## Examples

See the `examples/` directory for complete working examples of all features.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details.



