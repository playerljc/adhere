# @baifendian/adhere-util-decorators

React装饰器工具包，提供了一系列实用的装饰器来增强React组件的功能。

## 功能特性

- 🛡️ **ReactErrorBoundaries**: React错误边界高阶组件，优雅处理组件错误
- 🔄 **ReactAop**: AOP装饰器，支持方法执行前后的钩子函数
- 🚨 **ReactAutoTryCatch**: 自动try-catch装饰器，简化错误处理

## 安装

```bash
npm install @baifendian/adhere-util-decorators
```

## 使用方法

### ReactErrorBoundaries - React错误边界

为React组件添加错误边界功能，当组件渲染出错时能够优雅地处理错误，防止整个应用崩溃。

```typescript
import { ReactErrorBoundaries } from '@baifendian/adhere-util-decorators';

// 基础用法 - 使用默认错误UI
const SafeComponent = ReactErrorBoundaries(MyComponent);

// 自定义错误UI
class MyComponent extends React.Component {
  getReactErrorBoundariesErrorUI = ({ error, errorInfo }) => {
    return (
      <div className="custom-error">
        <h3>出错了！</h3>
        <p>错误信息: {error?.message}</p>
        <button onClick={() => window.location.reload()}>
          刷新页面
        </button>
      </div>
    );
  }
  
  render() {
    // 组件渲染逻辑
    return <div>My Component</div>;
  }
}

const SafeComponent = ReactErrorBoundaries(MyComponent);

// 设置全局默认错误UI
ReactErrorBoundaries.setDefaultErrorUI(
  <div className="global-error">
    <h3>系统错误</h3>
    <p>请稍后重试</p>
  </div>
);
```

### ReactAop - AOP装饰器

实现面向切面编程（AOP），允许在方法执行前和执行后添加自定义的逻辑处理。

```typescript
import { ReactAop } from '@baifendian/adhere-util-decorators';

class MyClass {
  @ReactAop(
    // before钩子 - 方法执行前调用
    function() {
      console.log('方法执行前');
      return true; // 返回true允许方法执行，返回false阻止执行
    },
    // after钩子 - 方法执行后调用
    function() {
      console.log('方法执行后');
    }
  )
  myMethod() {
    console.log('方法执行中');
    return 'result';
  }
}

// 只使用before钩子
class MyClass2 {
  @ReactAop(
    function() {
      console.log('验证权限...');
      return this.hasPermission; // 根据权限决定是否执行
    }
  )
  sensitiveOperation() {
    console.log('执行敏感操作');
  }
}

// 只使用after钩子
class MyClass3 {
  @ReactAop(
    undefined, // before钩子为空
    function() {
      console.log('记录操作日志');
    }
  )
  logOperation() {
    console.log('执行操作');
  }
}
```

### ReactAutoTryCatch - 自动try-catch装饰器

自动为被装饰的方法添加try/catch错误处理，当方法执行出错时会调用指定的回调函数处理错误。

```typescript
import { ReactAutoTryCatch } from '@baifendian/adhere-util-decorators';

class MyClass {
  @ReactAutoTryCatch((error) => {
    console.error('方法执行出错:', error);
    // 可以在这里添加错误上报逻辑
    this.reportError(error);
  })
  async riskyMethod() {
    // 可能出错的方法
    const result = await this.apiCall();
    return result;
  }

  @ReactAutoTryCatch((error) => {
    // 静默处理错误
    console.warn('静默处理错误:', error.message);
  })
  silentMethod() {
    throw new Error('Something went wrong');
  }

  // 不提供回调函数，错误会被静默忽略
  @ReactAutoTryCatch()
  ignoreErrorMethod() {
    throw new Error('This error will be ignored');
  }
}
```

## API 参考

### ReactErrorBoundaries

#### 函数签名
```typescript
function ReactErrorBoundaries<ComponentProps>(
  Component: ReactComponent<ComponentProps>
): ReactComponent<ComponentProps>
```

#### 静态方法
```typescript
ReactErrorBoundaries.setDefaultErrorUI(defaultErrorUI: ReactElement): void
```

### ReactAop

#### 函数签名
```typescript
function ReactAop(
  before?: AopCallback,
  after?: AopCallback
): DecoratorFunction
```

#### 类型定义
```typescript
type AopCallback = () => boolean | void;
```

### ReactAutoTryCatch

#### 函数签名
```typescript
function ReactAutoTryCatch(
  callback?: AutoTryCatchCallback
): DecoratorFunction
```

#### 类型定义
```typescript
type AutoTryCatchCallback = (error: Error) => void;
```

## 类型定义

```typescript
// 错误边界状态
interface IReactErrorBoundariesState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

// 共享属性
interface SharedProps {
  getReactErrorBoundariesErrorUI?: (params: {
    error?: Error;
    errorInfo?: ErrorInfo;
  }) => ReactElement;
}

// React组件类型
type ReactComponent<Props = Record<string, any>> =
  | (FunctionComponent<Props> & SharedProps)
  | (ComponentClass<Props> & SharedProps);
```

## 最佳实践

### 1. 错误边界使用建议

- 在应用的关键路径上使用错误边界
- 为不同类型的组件提供不同的错误UI
- 在错误边界中处理代码分割加载错误

### 2. AOP装饰器使用建议

- 使用before钩子进行权限验证、参数检查等
- 使用after钩子进行日志记录、清理工作等
- 避免在钩子函数中执行过于复杂的逻辑

### 3. 自动try-catch使用建议

- 为异步方法提供错误处理回调
- 在回调中进行错误上报和用户提示
- 避免在回调中抛出新的错误

## 注意事项

1. 装饰器需要在支持装饰器的环境中使用（如TypeScript + 实验性装饰器）
2. 错误边界只能捕获子组件的JavaScript错误，不能捕获事件处理器、异步代码等错误
3. AOP装饰器会影响方法的执行流程，请谨慎使用
4. 自动try-catch装饰器会改变方法的返回值处理，需要注意Promise的处理

## 许可证

MIT License
  
