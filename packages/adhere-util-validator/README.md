# @adhere/util-validator

一个功能强大的验证器工具库，提供标准验证方法和中国特色的手机号验证功能。

## 特性

- ✅ 完整的 TypeScript 类型支持
- ✅ 标准验证方法（基于 validator.js）
- ✅ 中国手机号验证（支持所有运营商和卡类型）
- ✅ 高级验证类，提供详细验证结果
- ✅ 批量验证和统计功能
- ✅ 完整的 JSDoc 文档

## 安装

```bash
npm install @adhere/util-validator
```

## 基础用法

### 标准验证方法

```typescript
import Validator from '@adhere/util-validator';

// 邮箱验证
Validator.isEmail('test@example.com'); // true

// URL验证
Validator.isURL('https://example.com'); // true

// 手机号验证
Validator.isAllChinaPhoneNumber('13812345678'); // true
```

### 中国手机号验证

```typescript
import Validator from '@adhere/util-validator';

// 验证所有中国手机号（手机卡 + 数据卡 + 上网卡）
Validator.isAllChinaPhoneNumber('13812345678'); // true

// 验证支持短信功能的手机号
Validator.isSMSChinaPhoneNumber('13812345678'); // true

// 验证特定运营商
Validator.isChinaMobileSIMCard('13812345678'); // true
Validator.isChinaUnicomSIMCard('18612345678'); // true
Validator.isChinaTelecomSIMCard('18912345678'); // true

// 验证虚拟运营商
Validator.isVirtualSIMCard('17012345678'); // true

// 验证物联网卡
Validator.isIoTSIMCard('14101234567'); // true

// 验证上网卡
Validator.isWIETSIMCard('14712345678'); // true
```

## 高级用法

### 使用 PhoneValidator 类

```typescript
import { PhoneValidator, Carrier, CardType } from '@adhere/util-validator';

// 创建验证器实例
const validator = new PhoneValidator({
  allowInternationalPrefix: true,
  strict: false,
  customErrorMessage: '请输入有效的手机号码'
});

// 验证手机号并获取详细信息
const result = validator.validate('13812345678');
console.log(result);
// {
//   isValid: true,
//   carrier: 'ChinaMobile',
//   cardType: 'SIMCard',
//   supportsSMS: true
// }

// 批量验证
const phoneNumbers = ['13812345678', '13987654321', 'invalid'];
const results = validator.validateBatch(phoneNumbers);

// 获取验证统计
const stats = validator.getValidationStats(phoneNumbers);
console.log(stats);
// {
//   total: 3,
//   valid: 2,
//   invalid: 1,
//   carriers: { ChinaMobile: 2 },
//   cardTypes: { SIMCard: 2 },
//   smsSupported: 2
// }
```

### 使用工具函数

```typescript
import { createPhoneValidator, quickValidate } from '@adhere/util-validator';

// 快速验证
const isValid = quickValidate('13812345678'); // true

// 创建自定义验证器
const strictValidator = createPhoneValidator({ strict: true });
const result = strictValidator.validate('13812345678');
```

## 类型定义

### 基础类型

```typescript
import type { 
  ExtendedValidator, 
  ChinaPhoneValidator, 
  PhoneValidationResult,
  ValidatorOptions 
} from '@adhere/util-validator';

// 扩展验证器类型（包含标准方法 + 中国手机号方法）
type Validator = ExtendedValidator;

// 手机号验证结果
interface PhoneValidationResult {
  isValid: boolean;
  carrier?: 'ChinaMobile' | 'ChinaUnicom' | 'ChinaTelecom' | 'ChinaSARFT' | 'INMARSAT' | 'Onedow' | 'Virtual' | 'IoT' | 'WIE';
  cardType?: 'SIMCard' | 'VirtualSIMCard' | 'IoTSIMCard' | 'WIETSIMCard';
  supportsSMS?: boolean;
  error?: string;
}

// 验证器配置
interface ValidatorOptions {
  allowInternationalPrefix?: boolean;
  strict?: boolean;
  customErrorMessage?: string;
}
```

### 枚举类型

```typescript
import { Carrier, CardType } from '@adhere/util-validator';

// 运营商枚举
enum Carrier {
  CHINA_MOBILE = 'ChinaMobile',
  CHINA_UNICOM = 'ChinaUnicom',
  CHINA_TELECOM = 'ChinaTelecom',
  CHINA_SARFT = 'ChinaSARFT',
  INMARSAT = 'INMARSAT',
  ONEDOW = 'Onedow',
  VIRTUAL = 'Virtual',
  IOT = 'IoT',
  WIE = 'WIE',
}

// 卡类型枚举
enum CardType {
  SIM_CARD = 'SIMCard',
  VIRTUAL_SIM_CARD = 'VirtualSIMCard',
  IOT_SIM_CARD = 'IoTSIMCard',
  WIE_SIM_CARD = 'WIETSIMCard',
}
```

## 支持的手机号类型

### 手机卡
- 中国移动：134-139, 150-153, 157-159, 182-184, 187-188, 195, 197-198
- 中国联通：130-132, 155-156, 185-186, 196
- 中国电信：133, 149, 153, 180-181, 189, 193-194
- 中国广电：192
- 海事卫星：1749
- 应急通信：1740-1742

### 虚拟运营商
- 中国移动虚拟运营商：165, 1703, 1705-1706
- 中国联通虚拟运营商：1704, 1707-1709, 171, 167
- 中国电信虚拟运营商：1700-1702, 162

### 物联网卡
- 中国移动：144, 148
- 中国联通：146
- 中国电信：1410

### 上网卡
- 中国移动：147
- 中国联通：145
- 中国电信：149

## API 参考

### 基础验证方法

| 方法 | 描述 | 示例 |
|------|------|------|
| `isAllChinaPhoneNumber` | 验证所有中国手机号 | `13812345678` |
| `isSMSChinaPhoneNumber` | 验证支持短信的手机号 | `13812345678` |
| `isSIMCard` | 验证手机卡 | `13812345678` |
| `isVirtualSIMCard` | 验证虚拟运营商卡 | `17012345678` |
| `isIoTSIMCard` | 验证物联网卡 | `14101234567` |
| `isWIETSIMCard` | 验证上网卡 | `14712345678` |

### 运营商验证方法

| 方法 | 描述 | 示例 |
|------|------|------|
| `isChinaMobileSIMCard` | 中国移动手机卡 | `13812345678` |
| `isChinaUnicomSIMCard` | 中国联通手机卡 | `18612345678` |
| `isChinaTelecomSIMCard` | 中国电信手机卡 | `18912345678` |
| `isChinaSARFTSIMCard` | 中国广电手机卡 | `19212345678` |

### PhoneValidator 类方法

| 方法 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `validate` | 验证单个手机号 | `phoneNumber: string` | `PhoneValidationResult` |
| `validateBatch` | 批量验证手机号 | `phoneNumbers: string[]` | `PhoneValidationResult[]` |
| `getValidationStats` | 获取验证统计 | `phoneNumbers: string[]` | 统计对象 |

## 注意事项

1. 所有验证方法都支持带国际区号前缀的格式（+86 或 86）
2. 验证器会自动清理输入中的非数字字符
3. 严格模式下会进行更严格的格式检查
4. 物联网卡和上网卡不支持短信功能

## 许可证

MIT License
