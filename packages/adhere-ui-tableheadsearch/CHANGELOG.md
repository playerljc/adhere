# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.11.0] - 2024-01-XX

### Added
- 完整的 TypeScript 类型支持
  - 新增 `FilterDropdownProps` 接口，定义筛选下拉框的属性
  - 新增 `FilterDropdownRender` 类型，定义渲染函数的类型
  - 新增 `TableHeadSearchResult` 接口，定义返回值的类型
- 详细的 JSDoc 文档
  - 为所有函数和接口添加了完整的 JSDoc 注释
  - 包含使用示例和参数说明
  - 提供了多种使用场景的代码示例

### Changed
- 将箭头函数改为命名函数 `TableHeadSearch`，提高代码可读性和调试体验
- 优化了函数参数的类型定义，提供更好的类型安全
- 更新了 README.md 文档，添加了详细的使用说明和 API 文档

### Improved
- 代码结构更加清晰，易于维护
- 类型安全性大幅提升，减少运行时错误
- 开发体验改善，IDE 可以提供更好的智能提示
- 文档更加完善，便于开发者理解和使用

### Breaking Changes
- 无破坏性变更，保持向后兼容性 