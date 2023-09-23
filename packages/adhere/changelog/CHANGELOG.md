# 2.10.24

***

2023-09-23

* **adhere-ui-fieldgeneratortodict**
  - Sync组件renderEmpty属性默认值修复

# 2.10.23

***

2023-09-23

* **adhere-util**
  - tree.ts加入findParentNodeByKey方法
  - casUrl加入defaultLocal参数
* **adhere-ui-searchable**
  - getPagination加入pageSizeOptions参数
  - rowSelection的onChange事件对外提供结构
  - 修复$hide判断条件
* **adhere-ui-suspense**
  - Sync修改数据改变的判断逻辑
* **adhere-ui-space**
  - Group中处理undefined和null的情况
* **adhere-ui-split**
  - Group中处理undefined和null的情况
* **adhere-util-intl**
  - 外部可以替换lib的国际化词条
* **adhere-ui-searchlist**
  - 修复分页BUG

# 2.10.22

***

2023-09-02

* **adhere-ui-fieldgeneratortodict**
  - Select的onChange加入dataSource参数

# 2.10.21

***

2023-08-29

* **adhere-ui-messagedialog**
  - 重新构建解决文件名称大小写问题

# 2.10.20

***

2023-08-28

* **adhere-util**
  - toCamelCase方法加入split参数

# 2.10.19

***

2023-08-26

* **adhere-ui-fieldgeneratortodict**
  - TreeSelect和Cascader加入flat数据的支持
  - 修复TreeSelect异步加载生成器BUG和Cascader异步加载生成器的BUG
* **adhere-util**
  - 修复tree的arrayToAntdTree方法

# 2.10.18

***

2023-08-23

* **adhere-ui-fieldgeneratortodict**
  - 修复TreeSelect异步加载生成器BUG
  - 加入Cascader异步加载生成器
* **adhere-util-resource**
  - dict.gis.config.js加入Dict.handlers.ResourceGisDefaultExtent

# 2.10.17

***

2023-08-20

* **adhere-ui-playground**
  - 修复PlayGroundMulit.less样式
* **adhere-util-dict**
  - 加入必要的异常处理

# 2.10.16

***

2023-08-20

* **adhere-ui-suspense**
  - 修复未引入@baifendian/adhere-ui-spin样式的错误

# 2.10.15

***

2023-08-19

* **adhere-ui-globalindicator**
  - 使用spin.js重构
* **adhere-ui-spin**
  - 使用spin.js重构
* **adhere-ui-suspense**
  - 默认renderNormalLoading使用adhere-ui-spin实现

# 2.10.14

***

2023-08-18

* **adhere-ui-tablegridlayout**
  - 加入show属性控制显隐

# 2.10.13

***

2023-08-17

* **adhere-ui-dict**
  - 加入useDict

# 2.10.12

***

2023-08-17

* **adhere-ui-suspense**
  - 加入renderNormalLoading设置
* **adhere-ui-fieldgeneratortodict**
  - Suspense.Sync加入renderNormalLoading
* **adhere-ui-dict**
  - 返回值结构调整为data,isPending,isValidate,加入renderNormalLoading设置

# 2.10.11

***

2023-08-15

* **adhere-ui-revoiving**
  - Swiper升级到最新版本
* **adhere-ui-swipeout**
  - Swiper升级到最新版本

# 2.10.10

***

2023-08-15

* **antd升级到最新版本*

# 2.10.9

***

2023-08-14

* **adhere-ui-revoiving**
  - 加入Swiper的config
* **adhere-ui-ajax**
  - 修复出现异常的时候进行reject的操作

# 2.10.8

***

2023-08-10

* **adhere-ui-tablegridlayout**
  - 加入方向样式

# 2.10.7

***

2023-08-09

* **adhere-ui-fieldgeneratortodict**
  - 动态、静态字典内部加载数据策略修改
  - 组件上加入了refresh刷新字典的方法
* **adhere-ui-polygonselection**
  - cropping样式修改

# 2.10.6

***

2023-08-08

* **adhere-ui-writingboard**
  - 同步adhere-ui-flexlayout的修改
* **adhere-ui-polygonselection**
  - 同步adhere-ui-flexlayout的修改

# 2.10.5

***

2023-08-07

* **adhere-util**
  - 加入formatMilliseconds方法
* **adhere-ui-flexlayout**
  - render修改为childre
* **adhere-ui-splitlayout**
  - TRBLC结构调整
* **adhere-ui-messagedialog**
  - 加入MaximizeModal
* **adhere-ui-fieldgeneratortodict**
  - 根据原始字典生成各种形式的组件，无需像之前一样定义出所有字典
  - 加入onDataSourceChange事件
  - 加入TreeSelect的异步加载

# 2.10.4

***

2023-07-27

* **adhere-ui-searchtable**
  - $search类型加入sort字段定义

# 2.10.3

***

2023-07-22

* **adhere-util-intl**
  - 词条错误修复
* **adhere-util-ajax**
  - getSendParams默认返回值修改
* **adhere-ui-messagedialog**
  - modal的props参数传递顺序修改
* **adhere-ui-richtext-sandbox**
  - WangEditor加入查看的样式

# 2.10.2

***

2023-07-16

* **adhere-ui-searchtable**
  - 修复分页快速导航回车触发2次查询BUG
* **adhere-ui-flexlayout**
  - 加入Split配置
* **adhere-ui-splitlayout**
  - 加入可以Split的TRBLC
* **adhere-util**
  - 修复base64Decode的BUG

# 2.10.1

***

2023-07-10

* **adhere-ui-searchtable**
  - 修复sync

# 2.10.0

***

2023-07-09

* **adhere-ui-expression**
  - 加入adhere-ui-expression组件
* **adhere-ui-searchtable**
  - column中headerCellAlign支持排序单独列头
  - ProTableFactory中列头筛选BUG修改
  - EditableCellView的样式BUG修正
  - DragSortRow修改，TreeData样式的修改
* **adhere-util**
  - 加入Range相关dom方法，修改includeHTML方法
* **adhere-ui-fieldgeneratortodict**
  - TransferFormItem加入Suspense.Sync
* **adhere-ui-ajax**
  - get | post | path | put | delete的返回值修改，返回xhr对象加以更精细的控制
  - 发送请求参数加入需要进行JSON.stringify的时候加入customSendJSONStringify进行自定
* **adhere-util-adapterscreen**
  - 重构

# 2.9.5

***

2023-06-18

* **adhere**
  - 修复less中的@import引起的vite无法解析错误

# 2.9.4

***

2023-06-15

* **adhere-util-dict**
  - 修复refresh的BUG
* **adhere-util**
  - dom加入includeHTML方法

# 2.9.3

***

2023-06-11

* **adhere-ui-anthoc**
  - Form加入ValidatorRules属性

# 2.9.2

***

2023-06-08

* **adhere-util-communication-ajax**
  - FormData加入支持传入fileName参数
* **adhere-util**
  - 加入dataUrlToBlob方法

# 2.9.1

***

2023-06-07

* **adhere-ui-datedisplay**
  - 加入toString方法
* **adhere-ui-ellipsis**
  - 修复样式错误

# 2.9.0

***

2023-06-07

* **adhere-ui-datedisplay**
  - 加入全局设置locale,自定义本地化格式
* **adhere-ui-imagelazy**
  - 加入图片加载错误的处理
* **adhere-ui-ellipsis**
  - 加入adhere-ui-ellipsis组件
* **adhere-ui-searchtable**
  - 分页加入showSizeChanger属性

# 2.8.1

***

2023-06-03

* **adhere**
  - 依赖项缺失修改

# 2.8.0

***

2023-06-01

* **adhere-ui-css**
  - 加入使用css变量管理主题的动态切换
* **adhere-ui-configprovider**
  - 加入theme参数支持动态切换主题

# 2.7.10

***

2023-06-01

* **adhere-util-dict**
  - props传值修改

# 2.7.9

***

2023-05-30

* **adhere-util-dict**
  - react字典组件加入reload方法

# 2.7.8

***

2023-05-28

* **adhere-ui-flexlayout**
  - Label和Value加入ref获取Root的EL元素
* **adhere-ui-adthoc**
  - 加入color-picker
* **adhere-ui-searchlist**
  - 加入回车搜索
* **adhere-ui-searchtable**
  - 加入回车搜索
* **adhere-util-dict**
  - 修复react字典组件
* **adhere-ui-suspense**
  - ts类型修复

# 2.7.7

***

2023-05-24

* **adhere-ui-flexlayout**
  - auto样式错误修复
* **adhere-ui-imagelazy**
  - 丰富props属性
* **adhere-util-dict**
  - 修复react组件update的BUG

# 2.7.6

***

2023-05-19

* **adhere-ui-searchtable**
  - 修复TableGridLayout在Firefox下样式显示异常的错误

# 2.7.5

***

2023-05-17

* **adhere-ui-configprovider**
  - 加入onIntlInit事件

# 2.7.4

***

2023-05-17

* **adhere-util-intl**
  - 修复词条去重后的BUG

# 2.7.3

***

2023-05-17

* **adhere-util-resource**
  - 引入阿拉伯语种的错误
* **adhere-util-intl**
  - 加入ar_EG国际化词条

# 2.7.2

***

2023-05-17

* **adhere-util-resource**
  - locals中加入了新的语种

# 2.7.1

***

2023-05-15

* **adhere-ui-fieldgeneratortodict**
  - 修复AutoCompleteFormItem默认值为空的BUG

# 2.7.0

***

2023-05-15

* **adhere-ui-polygonselection**
  - 加入图片剪裁组件(Cropping)

# 2.6.1

***

2023-05-12

* **adhere-ui-searchtable**
  - 修复页面查询条件缓存
* **adhere-ui-polygonselection**
  - BUG修改

# 2.6.0

***

2023-05-08

* **adhere-ui-writingboard**
  - 加入signature组件

# 2.5.7

***

2023-05-05

* **adhere-ui-searchtable**
  - 高级搜索控件加入popUpDefaultProps

# 2.5.6

***

2023-05-05

* **adhere-ui-richtext-sandbox**
  - WangEditor的BUG修改
  - WangEditor加入国际化
* **adhere-ui-configprovider**
  - 加入国际化的Context

# 2.5.5

***

2023-05-04

* **adhere-ui-richtext-sandbox**
  - 重构，变为可以对任何富文本进行sandbox
  - 分离react-quill编辑器
  - 分离wang-editor编辑器
* **adhere-ui-configprovider**
  - 加入国际化的Context

# 2.5.4

***

2023-04-30

* **adhere-ui-flexlayout**
  - TRBLC布局滚动问题适配

# 2.5.3

***

2023-04-28

* **adhere-ui-flexlayout**
  - 修复TRBLC布局出现滚动的BUG

# 2.5.2

***

2023-04-27

* **adhere-ui-flexlayout**
  - 修复TRBLC布局出现滚动的BUG

# 2.5.1

***

2023-04-27

* **adhere-ui-flexlayout**
  - 栅格系统BUG修改
* **adhere-ui-searchtable**
  - 列表名称传值修改
* **adhere-ui-slidelayout**
  - 修复初始化关闭样式为生效BUG

# 2.5.0

***

2023-04-25

* **adhere-ui-flexlayout**
  - 栅格系统BUG修改
  - 加入TRBLC布局

# 2.4.3

***

2023-04-25

* **adhere-ui-searchtable**
  - 修改高级搜索的样式
* **adhere-ui-slidelayout**
  - 加入收起后hide操作

# 2.4.2

***

2023-04-22

* **adhere-util**
  - Url的parse修改

# 2.4.1

***

2023-04-22

* **adhere-ui-flexlayout**
  - HorizontalFlexLayout样式修改,加入flex-wrap: nowrap;

# 2.4.0

***

2023-04-17

* **adhere-ui-searchtable**
  - column中设置align的bug修改
  - 支持tree展示的相关设置
  - 查询和Editor中表单控件渲染逻辑修改
* **adhere-ui-flexlayout**
  - 纵向栅格支持
  - 栅格系统优化

# 2.3.0

***

2023-04-12

* **adhere-ui-searchtable**
  - 加入clearAll方法
  - clear方法修改为clearSearch和clearPaging方法
  - props加入默认值
* **adhere-ui-searchlist**
  - 加入clearAll方法
  - props加入默认值
* **adhere-util-iframeio**
  - 加入先序列化操作

# 2.2.0

***

2023-04-09

* **adhere-ui-anthoc**
  - 加入adhere-ui-anthoc组件
* **adhere-ui-fieldgeneratortodict**
  - 加入adhere-ui-fieldgeneratortodict组件
* **adhere-ui-searchtable**
  - Search布局的修改
* **adhere-util**
  - 加入和size相关的方法
* **adhere-util-intl**
  - 加入searchlist组件的词条
* **adhere-ui-globalindicator**
  - 加入hideAll方法，细节的调整
* **adhere-ui-searchlist**
  - 加入ResourceManager
  - 细节的调整
* **adhere-ui-flexlayout**
  - 加入栅格系统
* **~~adhere-ui-antdformitem~~**
  - ~~删除此组件，拆解成anthoc和fieldgeneratortodict两个组件~~

# 2.1.1

***

2023-04-01

* **adhere-ui-searchlist**
  - 加入adhere-ui-searchlist组件

# 2.1.0

***

2023-04-01

* **adhere-ui-searchlist**
  - Search布局修改
  - Search布局样式调整
* **adhere-ui-searchtable**
  - 分离出Search接口
* **adhere-ui-intl**
  - 加入新词条

# 2.0.7

***

2023-03-23

* **adhere-util-dist**
  - set方法bug修改

# 2.0.6

***

2023-03-22

* **adhere-ui-searchtable**
  - 加入sync方法
  - renderInner中的逻辑修改
* **adhere-ui-split**
  - Group中的Fragment拉平
  - 加入响应式
* **adhere-ui-space**
  - Group中的Fragment拉平
  - 加入响应式
* **adhere-util-dict**
  - 加入Dict对应的React组件
  - 已知问题修改
* **adhere-ui-suspense**
  - sync判断逻辑修改
  - Promise加入返回值的泛型
* **adhere-ui-antdformitem**
  - 加入Tag生成器
  - 加入Menu生成器
  - 加入Dropdown生成器
  - 加入Breadcrumb生成器
  - 加入Segmented生成器
  - 加入Timeline生成器
  - 加入Mentions生成器
  - 加入Steps生成器

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
