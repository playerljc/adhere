# 1.0.35

***

2023-09-17

* 列头查询的输入条件框加入默认获取焦点
* rowSelection的onChange事件对外提供结构
* 修复$hide判断条件

# 1.0.34

***

2023-09-06

* getPagination加入pageSizeOptions参数

# 1.0.33

***

2023-07-26

* $search类型加入sort字段定义
* ProTableFactory的getGridSearchFormGroupDataByColumnConfig方法排序修改

# 1.0.32

***

2023-07-11

* 键盘事件触发查询机制修改
* 列表接口调用两次的BUG

# 1.0.31

***

2023-07-10

* 修复sync

# 1.0.30

***

2023-07-09

* column中headerCellAlign支持排序单独列头

# 1.0.29

***

2023-07-05

* ProTableFactory中列头筛选BUG修改
* EditableCellView的样式BUG修正
* DragSortRow修改

# 1.0.28

***

2023-06-07

* 分页加入showSizeChanger属性

# 1.0.27

***

2023-05-27

* 加入按下回车搜索

# 1.0.26

***

2023-05-19

* 修复TableGridLayout在Firefox下样式显示异常的错误

# 1.0.25

***

2023-05-12

* 查询条件缓存修改

# 1.0.24

***

2023-05-05

* 高级搜索控件加入popUpDefaultProps

# 1.0.23

***

2023-04-27

* 列表名称传值修改

# 1.0.22

***

2023-04-25

* 修改高级搜索的样式

# 1.0.21

***

2023-04-16

* column中设置align的bug修改
* 支持tree展示的相关设置
* 查询和Editor中表单控件渲染逻辑修改

# 1.0.20

***

2023-04-11

* 加入clearAll方法
* props属性加入默认值

# 1.0.19

***

2023-04-08

* Search布局修改

# 1.0.18

***

2023-04-01

* Search布局修改
* Search布局样式调整

# 1.0.17

***

2023-03-30

* 分离出Search接口

# 1.0.16

***

2023-03-16

* 加入sync方法
* renderInner中的逻辑修改

# 1.0.15

***

2023-03-06

* 全局状态管理下BUG的修改
* 点击两次触发编辑的BUG

# 1.0.14

***

2023-01-31

* $search支持排序
* 查询面板样式修改

# 1.0.23

***

2023-01-24

* 高级搜索触发条件修改

# 1.0.22

***

2022-12-16

* 加入editor功能
* 加入对列表头分组的修改

# 1.0.21

***

2022-11-26

* 加入ProSearchTable

# 1.0.20

***

2022-10-12

* 加入getTableNumberColumnProps方法

# 1.0.19

***

2022-08-26

* table样式修改
* 加入onSearchPanelCollapseBefore和onSearchPanelCollapseAfter钩子
* searchfooteritem加入key

# 1.0.18

***

2022-08-01

* onTableChange的BUG修改
* 加入renderSearchFormBefore和renderSearchFormAfter方法
* onClear加入Promise
* 加入getLimit方法

# 1.0.17

***

2022-06-02

* 重置的修改
* SearchForm的children位置修改
* ColumnSetting修改
* 去掉SearchFrom组件，改用TableGridLayout

# 1.0.16

***

2022-04-25

* 加入列拖动功能
* 加入列设置功能
* 加入表格密度设置功能
* 序号列命名修改

# 1.0.15

***

2022-04-05

* renderTableNumberColumn修改
* 跨页选取的支持

# 1.0.12

***

2021-12-13

* searchformlabel和searchformvalue加入其他属性的混入

# 1.0.11

***

2021-11-13

* componentDidUpdate的修改
* 分页没有时候的处理

# 1.0.10

***

2021-10-28

* 修改searchtableimplement.tsx的fetchData方法的传值BUG
* 样式大写修改为小写
* 加入getDataKey和getTotalKey方法
* getFetchListPropNameToFirstUpper自动生成
* column支持权限设置(authorized)
* onClear方法改为在原型链上定义
* 加入renderTableHeader渲染(表格头上方，查询条件下方)
* 加入renderTableFooter渲染(表格下方,分页上方)
* searchtableimplement.tsx加入getSearchParams方法获取所有查询参数
* 加入fixedTableSpaceBetween配置项(两端固定(表格的头始终在上方，分页始终在下方)
* 加入searchtablestateimplement.tsx实现类(state的支持)
* 修改无数据时样式的错乱
* 修改loading时的样式错乱

# 1.0.9

***

2021-10-24

* 把max-width的限制去掉
* 关闭和展开查询条件加入默认状态和是否显示
* 加入表格体fit和滚动
* 加入表格固定列头，表格体滚动
* 加入searchtableimplement.tsx的默认实现

# 1.0.8

***

2021-10-12

* 加入自定义序号列的渲染
* 搜索栏加入展开和关闭功能
* 加入Table的缺省传递props功能

# 1.0.6

***

2021-03-21

* index.less加入antd/es/pagination/style/index.less样式
* renderSearchFooterItems加入defaultItems参数

# 1.0.5

***

2021-03-21

* 发布第一个版本

# 1.0.0

***

2020-12-22

* 加入代码
