# 1.0.21

---

2022-09-27

- **组件加入 memo**
- **adhere-util 的 tree 加入若干方法**
- **adhere-ui-popup 的 close 方法修改**
- **adhere-util-intl 加入自定义 k,v**
- \*_已知问题的修改_

# 1.0.20

---

2022-09-12

- **类组件改用 hooks 编写**
- \*_一些已知问题修改_

# 1.0.19

---

2022-09-01

- **adhere-util-iframeio**
  - 加入 adhere-util-iframeio 组件
- **adhere-ui-configprovider**
  - adhere-ui-configprovider 组件
- **adhere-ui-tablegridlayout**
  - 加入 getRenderDetail 方法
- **adhere-util-permission**
  - 加入 PermissionFun
- **adhere-ui-searchtable**
  - table 样式修改
  - 加入 onSearchPanelCollapseBefore 和 onSearchPanelCollapseAfter 钩子
  - searchfooteritem 加入 key
- **adhere-util-watchmemoized**
  - Events 对象引用修改

# 1.0.18

---

2022-7-25

- **adhere-util-dict**
  - refresh 加入链式调用
- **adhere-ui-historyback**
  - 修改为 window.location.length
- **adhere-ui-bmap**
  - 加载 BMap 机制的修改
- **adhere-ui-suspense**
  - 加入 sync 组件
  - 加入 async 组件
- **adhere-ui-hooks**
  - useSetState 加入泛型
- **adhere-ui-searchtable**
  - onTableChange 的 BUG 修改
  - 加入 renderSearchFormBefore 和 renderSearchFormAfter 方法
  - onClear 加入 Promise
  - 加入 getLimit 方法
- **adhere-ui-scrollload**
  - BUG 修改
- **adhere-util-intl**
  - 加入新词条
- **adhere-ui-comment**
  - 加入 adhere-ui-comment 组件
- **adhere-ui-datedisplay**
  - 加入 adhere-ui-datedisplay 组件
- **adhere-ui-flexlayout**
  - 加入 HorizontalFlexLayout 布局
  - 加入 VerticalFlexLayout 布局
  - 加入 ToolBarLayout 布局
  - 加入 BackLayout 布局
  - 加入 ScrollLayout 布局
- **adhere-ui-contourblock**
  - 加入 adhere-ui-contourblock 组件
- **adhere-util-resource**
  - dict.moment.config.js 资源的修改
- **adhere-ui-tablegridlayout**
  - BUG 的修改

# 1.0.17

---

2022-6-5

- **按需加载 antd**
- **adhere-ui-writingboard**
  - 加入 adhere-ui-writingboard 组件
- **adhere-ui-popup**
  - 添加 showClosePrePopup
  - bug 修改
- **adhere-util-browsersniff**
  - 大小写区分
- **adhere-util-adapterscreen**
  - 修改实现逻辑，增加默认计算
- **adhere-ui-hooks**
  - 加入 useSetState
- **adhere-ui-tablegridlayout**
  - 加入 adhere-ui-tablegridlayout
- **adhere-ui-imagelazy**
  - 使用 lazysizes 进行重构
- **adhere-ui-conditionalrender**
  - 加入 conditionalNotEmptyArr 方法
- **adhere-ui-messagedialog**
  - Modal 参数名称修改(cloneBtn 修改为 closeBtn)
- **adhere-ui-scrollload**
  - 加入 getScrollContainer 自定义滚动元素
- **adhere-ui-searchtable**
  - 重置的修改
  - SearchForm 的 children 位置修改
  - ColumnSetting 修改
  - 去掉 SearchFrom 组件，改用 TableGridLayout
- **adhere-util**
  - tree 的 set...修改

# 1.0.16

---

2022-4-26

- **adhere-ui-confirm-delconfirm**
  - 加入 title，text 和 icon 参数
- **adhere-ui-confirm-importantconfirm**
  - 加入 title，text 和 icon 参数
- **adhere-ui-forceupdate**
  - 加入代码
- **adhere-ui-searchtable**
  - 加入列拖动功能
  - 加入列设置功能
  - 加入表格密度设置功能
  - 序号列命名修改
- **adhere-util-intl**
  - 加入新词条

# 1.0.15

---

2022-4-5

- **adhere-ui-conditionalrender**
  - 加入 conditionalRender 和 conditionalArr 两个方法
- **adhere-ui-searchtable**
  - renderTableNumberColumn 修改
  - 跨页选取的支持
- **adhere-util-communication-ajax**
  - 构造函数参数修改
  - 细节的调整
  - Content-Type 修改

# 1.0.14

---

2022-1-25

- **adhere-ui-messagedialog**
  - close 方法的修改
- **adhere-ui-conditionalrender**
  - 加入 ConditionalRender.Show 组件进行 display 切换
  - 加入 ConditionalRender.Visibility 组件进行 visibility 切换
- **adhere-ui-playground**
  - 加入 CodePanel 组件
  - 加入 CodeTabPanel 组件
  - 加入 CodeBoxPanel 组件
  - 加入 AnchorNavigation 组件
  - 加入 PlayGroundTab 组件
  - 细化 Card 组件加入 description 配置
  - 细化 PlayGround 组件
  - 细化 PlayGroundMulit 组件
- **adhere-ui-revolving**
  - bug 的修改
- **adhere-util**
  - dom 加入新方法

# 1.0.13

---

2021-12-28

- 区分 lib 和 es 两个目录来区分 main 和 module
- ssr 的支持
- **adhere-util-dict**
  - 如果 value 是函数加入是否缓存的设置
- **adhere-util-decorators**
  - componentDidCatch 中加入 Loading chunk 重新加载
- **adhere-ui-formitemcreator**
  - 优化栅格布局

# 1.0.12

---

2021-12-13

- **adhere-ui-css**
  - normalize-default.less 修改
  - mixin.less 修改
- **adhere-ui-searchtable**
  - searchformlabel 和 searchformvalue 加入其他属性的混入
- **adhere-util**
  - base 加入 omitObject 方法
  - tree 的修改
- **adhere-util-communication-ajax**
  - 加入 notification 的节流
  - 修改传参错误和 status 的缺省处理
- **adhere-util-dict**
  - 加入 config 配置
- **adhere-util-reactutil**
  - 加入@baifendian/adhere-util-reactutil

# 1.0.11

---

2021-11-19

- **adhere-ui-playground**
  - 加入 collapse 折叠操作
- **adhere-ui-searchtable**
  - componentDidUpdate 的修改
  - 分页没有时候的处理
- **adhere-util**
  - url 库修改加入是否忽略空值、加入缓存
- **adhere-util-intl**
  - 加入新词条
- **adhere-util-resource**
  - dict.form.config.js 资源的修改

# 1.0.10

---

2021-11-4

- **adhere-ui-hooks**
  - 加入代码 useForceUpdate
- **adhere-ui-searchtable**
  - 修改 searchtableimplement.tsx 的 fetchData 方法的传值 BUG
  - 样式大写修改为小写
  - 加入 getDataKey 和 getTotalKey 方法
  - getFetchListPropNameToFirstUpper 自动生成
  - column 支持权限设置(authorized)
  - onClear 方法改为在原型链上定义
  - 加入 renderTableHeader 渲染(表格头上方，查询条件下方)
  - 加入 renderTableFooter 渲染(表格下方,分页上方)
  - searchtableimplement.tsx 加入 getSearchParams 方法获取所有查询参数
  - 加入 fixedTableSpaceBetween 配置项(两端固定(表格的头始终在上方，分页始终在下方)
  - 加入 searchtablestateimplement.tsx 实现类(state 的支持)
  - 修改无数据时样式的错乱
  - 修改 loading 时的样式错乱

# 1.0.9

---

2021-10-27

- **adhere-ui-css**
  - normalize-antd.less 修改
- **adhere-ui-messagedialog**
  - BUG 的修改
- **adhere-ui-searchtable**
  - 把 max-width 的限制去掉
  - 关闭和展开查询条件加入默认状态和是否显示
  - 加入表格体 fit 和滚动
  - 加入表格固定列头，表格体滚动
  - 加入 searchtableimplement.tsx 的默认实现
- **adhere-util-browsersniff**
  - 加入@baifendian/adhere-util-browsersniff
- **adhere-util-validator**
  - 加入@baifendian/adhere-util-validator

# 1.0.8

---

2021-10-17

- **adhere-ui-historyback**
  - 加入火狐下不支持 document.referrer
- **adhere-ui-searchtable**
  - 加入自定义序号列的渲染
  - 搜索栏加入展开和关闭功能
  - 加入 Table 的缺省传递 props 功能
- **adhere-util**
  - 加入 url 库
- **adhere-util-communication-ajax**
  - BUG 的修改
- **adhere-util-intl**
  - 修改系统词条和用户词条的冲突
  - 加入新词条

# 1.0.7

---

2021-9-30

- **adhere-ui-bmap**
  - 加入@baifendian/adhere-ui-bmap 组件
- **adhere-ui-css**
  - 加入 common-no-select 函数
  - 加入 switch.less
- **adhere-ui-flexlayout**
  - fixed 和 auto 加入了 getEl 方法
- **adhere-ui-olmap**
  - 加入 windLayer(风场)
- **adhere-ui-playground**
  - 加入 adhere-ui-playground 组件
- **adhere-ui-polygonselection**
  - 加入 PolygonSelection(多边形选区)组件
- **adhere-ui-splitlayout**
  - onMouseup 事件加入 dragFinished 事件触发
  - 加入 FlexLayout 的 use
- **adhere-util**
  - math 修改
- **adhere-util-domain**
  - domain 模块的浏览器端实现

# 1.0.6

---

2021-7-2

- **adhere-ui-notification**
  - bug 的修改
- **adhere-ui-olmap**
  - 热力图组件 heatmap 修改
- **adhere-ui-popup**
  - bug 的修改
- **adhere-ui-prompt-errorprompt**
  - 加入返回值
- **adhere-ui-prompt-successprompt**
  - 加入返回值
- **adhere-ui-prompt-warnprompt**
  - 加入返回值
- **adhere-ui-searchtable**
  - index.less 加入 antd/es/pagination/style/index.less 样式
  - renderSearchFooterItems 加入 defaultItems 参数
- **adhere-ui-surnames**
  - isTouch 修改为从 Util 中调用
- **adhere-util**
  - 加入 clientDetection 客户端监测代码

# 1.0.0

---

2020-12-22

- 加入代码
