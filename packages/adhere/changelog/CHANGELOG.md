# 1.0.14

***

2022-1-22

* **adhere-ui-playground**
  - 加入CodePanel组件
  - 加入CodeTabPanel组件
  - 加入CodeBoxPanel组件
  - 加入AnchorNavigation组件
  - 加入PlayGroundTab组件
  - 细化Card组件加入description配置
  - 细化PlayGround组件
  - 细化PlayGroundMulit组件
* **adhere-util**
  - dom加入新方法

# 1.0.13

***

2021-12-28

* 区分lib和es两个目录来区分main和module
* ssr的支持
* **adhere-util-dict**
  - 如果value是函数加入是否缓存的设置
* **adhere-util-decorators**
  - componentDidCatch中加入Loading chunk重新加载
* **adhere-ui-formitemcreator**
  - 优化栅格布局

# 1.0.12

***

2021-12-13

* **adhere-ui-css**
  - normalize-default.less修改
  - mixin.less修改
* **adhere-ui-searchtable**
  - searchformlabel和searchformvalue加入其他属性的混入
* **adhere-util**
  - base加入omitObject方法
  - tree的修改
* **adhere-util-communication-ajax**
  - 加入notification的节流
  - 修改传参错误和status的缺省处理
* **adhere-util-dict**
  - 加入config配置
* **adhere-util-reactutil**
  - 加入@baifendian/adhere-util-reactutil

# 1.0.11

***

2021-11-19

* **adhere-ui-playground**
  - 加入collapse折叠操作
* **adhere-ui-searchtable**
  - componentDidUpdate的修改
  - 分页没有时候的处理
* **adhere-util**
  - url库修改加入是否忽略空值、加入缓存
* **adhere-util-intl**
  - 加入新词条
* **adhere-util-resource**
  - dict.form.config.js资源的修改

# 1.0.10

***

2021-11-4

* **adhere-ui-hooks**
  - 加入代码useForceUpdate
* **adhere-ui-searchtable**
  - 修改searchtableimplement.tsx的fetchData方法的传值BUG
  - 样式大写修改为小写
  - 加入getDataKey和getTotalKey方法
  - getFetchListPropNameToFirstUpper自动生成
  - column支持权限设置(authorized)
  - onClear方法改为在原型链上定义
  - 加入renderTableHeader渲染(表格头上方，查询条件下方)
  - 加入renderTableFooter渲染(表格下方,分页上方)
  - searchtableimplement.tsx加入getSearchParams方法获取所有查询参数
  - 加入fixedTableSpaceBetween配置项(两端固定(表格的头始终在上方，分页始终在下方)
  - 加入searchtablestateimplement.tsx实现类(state的支持)
  - 修改无数据时样式的错乱
  - 修改loading时的样式错乱

# 1.0.9

***

2021-10-27

* **adhere-ui-css**
  - normalize-antd.less修改
* **adhere-ui-messagedialog**
  - BUG的修改
* **adhere-ui-searchtable**
  - 把max-width的限制去掉
  - 关闭和展开查询条件加入默认状态和是否显示
  - 加入表格体fit和滚动
  - 加入表格固定列头，表格体滚动
  - 加入searchtableimplement.tsx的默认实现
* **adhere-util-browsersniff**
  - 加入@baifendian/adhere-util-browsersniff
* **adhere-util-validator**
  - 加入@baifendian/adhere-util-validator

# 1.0.8

***

2021-10-17

* **adhere-ui-historyback**
  - 加入火狐下不支持document.referrer
* **adhere-ui-searchtable**
  - 加入自定义序号列的渲染
  - 搜索栏加入展开和关闭功能
  - 加入Table的缺省传递props功能
* **adhere-util**
  - 加入url库
* **adhere-util-communication-ajax**
  - BUG的修改
* **adhere-util-intl**
  - 修改系统词条和用户词条的冲突
  - 加入新词条

# 1.0.7

***

2021-9-30

* **adhere-ui-bmap**
  - 加入@baifendian/adhere-ui-bmap组件
* **adhere-ui-css**
  - 加入common-no-select函数
  - 加入switch.less
* **adhere-ui-flexlayout**
  - fixed和auto加入了getEl方法
* **adhere-ui-olmap**
  - 加入windLayer(风场)
* **adhere-ui-playground**
  - 加入adhere-ui-playground组件
* **adhere-ui-polygonselection**
  - 加入PolygonSelection(多边形选区)组件
* **adhere-ui-splitlayout**
  - onMouseup事件加入dragFinished事件触发
  - 加入FlexLayout的use
* **adhere-util**
  - math修改
* **adhere-util-domain**
  - domain模块的浏览器端实现

# 1.0.6

***

2021-7-2

* **adhere-ui-notification**
  - bug的修改
* **adhere-ui-olmap**
  - 热力图组件heatmap修改
* **adhere-ui-popup**
  - bug的修改
* **adhere-ui-prompt-errorprompt**
  - 加入返回值
* **adhere-ui-prompt-successprompt**
  - 加入返回值
* **adhere-ui-prompt-warnprompt**
  - 加入返回值
* **adhere-ui-searchtable**
  - index.less加入antd/es/pagination/style/index.less样式
  - renderSearchFooterItems加入defaultItems参数
* **adhere-ui-surnames**
  - isTouch修改为从Util中调用
* **adhere-util**
  - 加入clientDetection客户端监测代码

# 1.0.0

***

2020-12-22

* 加入代码
