# 2.0.5

***

2023-03-06

* **adhere-ui-searchtable**
  - 全局状态管理下BUG的修改
  - 点击两次触发编辑的BUG
* **adhere-util**
  - 去掉adhere-util-watchmemoized的依赖

# 2.0.4

***

2023-02-27

* **adhere-ui-antdformitem**
  - 加入AutoCompleteFormItem
  - 加入加入SubmitButton
* **adhere-util-resource**
  - 去掉request.context的Api

# 2.0.3

***

2023-01-31

* **adhere-ui-searchtable**
  - $search支持排序
  - 查询面板样式修改
* **adhere-ui-antdformitem**
  - 组件的抽取
  - 生成器组件查询逻辑的修改

# 2.0.2

***

2023-01-29

* **公共**
  - 已知问题修改
* **adhere-ui-searchtable**
  - 高级搜索触发条件修改

# 2.0.1

***

2023-01-21

* **公共**
  - 已知问题修改
* **adhere-ui-antdformitem**
  - BUG修改
* **adhere-ui-searchtable**
  - BUG修改

# 2.0.0

***

2023-01-04

* **react升级到18**
* **antd升级到5.x*

# 1.0.22

***

2022-11-22

* **adhere-ui-historyback**
  - 修改为返回的判断逻辑
* **adhere-ui-writingboard**
  - 加入导出图片设置背景色
* **adhere-ui-antdformitem**
  - 加入adhere-ui-antdformitem代码
  - 加入Input和TextArea组件
  - 加入所有Antd组件的默认操作
* **adhere-ui-searchtable**
  - 加入ProSearchTable
  - 加入editor功能
  - 加入对列表头分组的修改
* **adhere-util**
  - 加入DateUtil
  - 加入FormatUtil
  - 加入EncryptUtil
  - color加入新方法
* **adhere-util-adapterscreen**
  - Safari浏览器适配
* **adhere-ui-prompt-errorprompt**
  - 分成dialog和message
* **adhere-ui-prompt-successprompt**
  - 分成dialog和message
* **adhere-ui-prompt-warnprompt**
  - 分成dialog和message
* **adhere-util-resource**
  - 加入resource资源目录
* **adhere-ui-reactquill-sandbox**
  - 加入adhere-ui-reactquill-sandbox组件

# 1.0.21

***

2022-09-27

* **组件加入memo**
* **adhere-util的tree加入若干方法**
* **adhere-ui-popup的close方法修改**
* **adhere-util-intl加入自定义k,v**
* **已知问题的修改*

# 1.0.20

***

2022-09-12

* **类组件改用hooks编写**
* **一些已知问题修改*

# 1.0.19

***

2022-09-01

* **adhere-util-iframeio**
  - 加入adhere-util-iframeio组件
* **adhere-ui-configprovider**
  - adhere-ui-configprovider组件
* **adhere-ui-tablegridlayout**
  - 加入getRenderDetail方法
* **adhere-util-permission**
  - 加入PermissionFun
* **adhere-ui-searchtable**
  - table样式修改
  - 加入onSearchPanelCollapseBefore和onSearchPanelCollapseAfter钩子
  - searchfooteritem加入key
* **adhere-util-watchmemoized**
  - Events对象引用修改

# 1.0.18

***

2022-7-25

* **adhere-util-dict**
  - refresh加入链式调用
* **adhere-ui-historyback**
  - 修改为window.location.length
* **adhere-ui-bmap**
  - 加载BMap机制的修改
* **adhere-ui-suspense**
  - 加入sync组件
  - 加入async组件
* **adhere-ui-hooks**
  - useSetState加入泛型
* **adhere-ui-searchtable**
  - onTableChange的BUG修改
  - 加入renderSearchFormBefore和renderSearchFormAfter方法
  - onClear加入Promise
  - 加入getLimit方法
* **adhere-ui-scrollload**
  - BUG修改
* **adhere-util-intl**
  - 加入新词条
* **adhere-ui-comment**
  - 加入adhere-ui-comment组件
* **adhere-ui-datedisplay**
  - 加入adhere-ui-datedisplay组件
* **adhere-ui-flexlayout**
  - 加入HorizontalFlexLayout布局
  - 加入VerticalFlexLayout布局
  - 加入ToolBarLayout布局
  - 加入BackLayout布局
  - 加入ScrollLayout布局
* **adhere-ui-contourblock**
  - 加入adhere-ui-contourblock组件
* **adhere-util-resource**
  - dict.moment.config.js资源的修改
* **adhere-ui-tablegridlayout**
  - BUG的修改

# 1.0.17

***

2022-6-5

* **按需加载antd**
* **adhere-ui-writingboard**
  - 加入adhere-ui-writingboard组件
* **adhere-ui-popup**
  - 添加showClosePrePopup
  - bug修改
* **adhere-util-browsersniff**
  - 大小写区分
* **adhere-util-adapterscreen**
  - 修改实现逻辑，增加默认计算
* **adhere-ui-hooks**
  - 加入useSetState
* **adhere-ui-tablegridlayout**
  - 加入adhere-ui-tablegridlayout
* **adhere-ui-imagelazy**
  - 使用lazysizes进行重构
* **adhere-ui-conditionalrender**
  - 加入conditionalNotEmptyArr方法
* **adhere-ui-messagedialog**
  - Modal参数名称修改(cloneBtn修改为closeBtn)
* **adhere-ui-scrollload**
  - 加入getScrollContainer自定义滚动元素
* **adhere-ui-searchtable**
  - 重置的修改
  - SearchForm的children位置修改
  - ColumnSetting修改
  - 去掉SearchFrom组件，改用TableGridLayout
* **adhere-util**
  - tree的set...修改

# 1.0.16

***

2022-4-26

* **adhere-ui-confirm-delconfirm**
  - 加入title，text和icon参数
* **adhere-ui-confirm-importantconfirm**
  - 加入title，text和icon参数
* **adhere-ui-forceupdate**
  - 加入代码
* **adhere-ui-searchtable**
  - 加入列拖动功能
  - 加入列设置功能
  - 加入表格密度设置功能
  - 序号列命名修改
* **adhere-util-intl**
  - 加入新词条

# 1.0.15

***

2022-4-5

* **adhere-ui-conditionalrender**
  - 加入conditionalRender和conditionalArr两个方法
* **adhere-ui-searchtable**
  - renderTableNumberColumn修改
  - 跨页选取的支持
* **adhere-util-communication-ajax**
  - 构造函数参数修改
  - 细节的调整
  - Content-Type修改

# 1.0.14

***

2022-1-25

* **adhere-ui-messagedialog**
  - close方法的修改
* **adhere-ui-conditionalrender**
  - 加入ConditionalRender.Show组件进行display切换
  - 加入ConditionalRender.Visibility组件进行visibility切换
* **adhere-ui-playground**
  - 加入CodePanel组件
  - 加入CodeTabPanel组件
  - 加入CodeBoxPanel组件
  - 加入AnchorNavigation组件
  - 加入PlayGroundTab组件
  - 细化Card组件加入description配置
  - 细化PlayGround组件
  - 细化PlayGroundMulit组件
* **adhere-ui-revolving**
  - bug的修改
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
