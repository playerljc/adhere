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
