可编辑的单元格

1.可编辑的单元格是一个Component
  有自己的props和state
2.在column中使用配置的方式使用它
  $editable: {
    editable: boolean 单元格是否是可编辑的单元格
    defaultStatus: 'view' | 'edit' 缺省的状态
    type: string 编辑控件的类型
    render: () => ReactNode 自定义的渲染(type是custom的时候)
    onChange: ({rowIndex, cellIndex, dataIndex, record, value}) => {} 控件发生改变的事件
    onBeforeToEdit: (value, record, dataIndex, rowIndex) => Promise 点击ToEdit句柄之前触发，resole则将继续，reject则不能切换状态
    onSave: (value, record, dataIndex, rowIndex) => Promise 点击了save句柄，resolve则切换到view状态
    onBeforeCancel: (value, record, dataIndex, rowIndex) => Promise 点击cancel之前，resolve则切换到view状态
    props: object 组件的props定义
    useTrigger: boolean 是否使用句柄来切换状态 view的时候有一个句柄点击后变成编辑状态，编辑的时候有2个句柄，save和cancel，如果设置为false，则关于句柄的事件将不会触发
    renderToEditTrigger: () => ReactNode 渲染查看的句柄
    renderSaveTrigger: () => ReactNode 渲染保存的句柄
    renderCancelTrigger: () => ReactNode 渲染取消的句柄
    require: boolean 是否是必填项
    rules: Array FormItem的rules
    dataIndex: string 如果有此属性，则不用column的dataIndex
    dictName: string dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
    useKeepEdit: boolean 是否一直保持编辑状态，也就是说view和edit都显示的是控件，如果设置为true则相当于设置了useTrigger是false，useTrigger的设置将失效
  }
3.可编辑单元格有2中状态
  只读状态
  编辑状态
  使用句柄来切换状态(句柄可有可无)
