import React from 'react';

import FunctionProps from '@/lib/FunctionProps';

export default () => {
  return (
    <div className="Page">
      <h1>工具类</h1>

      <h2>dom相关</h2>
      <FunctionProps
        data={[
          {
            name: 'isTextNode',
            desc: '是否是文本节点',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '',
                type: 'Node',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isCommentNode',
            desc: '是否是注释节点',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '',
                type: 'Node',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isElementNode',
            desc: '是否是元素节点',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '',
                type: 'Node',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'createElement',
            desc: '根据html字符串创建dom',
            modifier: 'public',
            params: [
              {
                name: 'htmlStr',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'HTMLElement',
            returnDesc: '',
          },
          {
            name: 'getTopDom',
            desc: '以target为开始向上查找元素',
            modifier: 'public',
            params: [
              {
                name: 'target',
                desc: '',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'selector',
                desc: '匹配的选择器',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'HTMLElement | null',
            returnDesc: '匹配到的节点',
          },
          {
            name: 'on',
            desc: '注册事件',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'tag',
                desc: '标签分组',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'type',
                desc: '事件类型',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'handler',
                desc: '事件句柄',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'capture',
                desc: '是否是捕获',
                type: 'Function',
                defaultVal: 'false',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'off',
            desc: '注册事件',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'tag',
                desc: '标签分组',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'type',
                desc: '事件类型',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'handler',
                desc: '事件句柄',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'capture',
                desc: '是否是捕获',
                type: 'Function',
                defaultVal: 'false',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'addClass',
            desc: '添加样式',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'classes',
                desc: '，分割的字符串',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'removeClass',
            desc: '移除样式',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'classes',
                desc: '，分割的字符串',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'hasClass',
            desc: '判断指定样式是否存在',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'classes',
                desc: '，分割的字符串',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'insertAfter',
            desc: '在指定元素之后插入新元素',
            modifier: 'public',
            params: [
              {
                name: 'newElement',
                desc: '新元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'targetElement',
                desc: '，目标元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'prepend',
            desc: '在指定元素的孩子集合最前方添加一个新元素',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '指定元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'children',
                desc: '，新元素',
                type: 'HtmlElement | string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'remove',
            desc: '删除当前元素',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '待删除的元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getParentElementByTag',
            desc: '获取指定标签元素的父节点',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '当前元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'tag',
                desc: '指定的标签名称',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'HtmlElement',
            returnDesc: '命中的父元素',
          },
          {
            name: 'children',
            desc: '获取指定元素的孩子集合',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '当前元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'selector',
                desc: '命中的选择器',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'HtmlElement',
            returnDesc: '命中的父元素',
          },
          {
            name: 'isTouch',
            desc: '判断当前浏览器是否支持touch',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'objectToDataSet',
            desc: '对象抓换成元素的data-set',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '对象',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'dom',
                desc: '目标din',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'dataSetToObject',
            desc: '元素的data-set转换成对象',
            modifier: 'public',
            params: [
              {
                name: 'dom',
                desc: '元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Object',
            returnDesc: '',
          },
          {
            name: 'getPageLeft',
            desc: '获取指定元素距离视口的left',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '距离视口的left',
          },
          {
            name: 'getPageTop',
            desc: '获取指定元素距离视口的top',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '距离视口的top',
          },
          {
            name: 'getPageRect',
            desc: '获取元素距离视口的Rect',
            modifier: 'public',
            params: [
              {
                name: 'el',
                desc: '元素',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '{top,right,bottom,left}',
            returnDesc: '距离视口的Rect',
          },
          {
            name: 'isIframeEmbed',
            desc: '是否是iframe嵌入',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <h2>基本操作</h2>
      <FunctionProps
        data={[
          {
            name: 'isEmpty',
            desc: '对象是否为空',
            modifier: 'public',
            params: [
              {
                name: 'value',
                desc: '',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isArray',
            desc: '判断数组',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isNumber',
            desc: '判断是否是number',
            modifier: 'public',
            params: [
              {
                name: 'val',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBoolean',
            desc: '判断是否是boolean',
            modifier: 'public',
            params: [
              {
                name: 'val',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isString',
            desc: '判断是否是string',
            modifier: 'public',
            params: [
              {
                name: 'val',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isSymbol',
            desc: '判断是否是符号',
            modifier: 'public',
            params: [
              {
                name: 'val',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isPrimitive',
            desc: '判断是否是基本类型',
            modifier: 'public',
            params: [
              {
                name: 'val',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isFunction',
            desc: '判断函数',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isObject',
            desc: '是否是对象',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isRef',
            desc: '是否是引用类型',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'chainCallAssignment',
            desc: '对象的链式赋值',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '赋值的对象',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'chainStr',
                desc: '属性链式表达式 a.b.c',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'value',
                desc: '要复值的值',
                type: 'any',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getObjectByChainStr',
            desc: '通过chainStr获取对象',
            modifier: 'public',
            params: [
              {
                name: 'obj',
                desc: '赋值的对象',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'chainStr',
                desc: '属性链式表达式 a.b.c',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Object',
            returnDesc: '',
          },
          {
            name: 'toCamelCase',
            desc: '用连接符链接的字符串转换成驼峰写法',
            modifier: 'public',
            params: [
              {
                name: 'str',
                desc: '用连接符节点的字符串',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'toUpperCase',
                desc: '是否转换成大写',
                type: 'boolean',
                defaultVal: 'false',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'isKebabCase',
            desc: '是否是烤肉串形式的名字',
            modifier: 'public',
            params: [
              {
                name: 'name',
                desc: '名称',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isPascalCase',
            desc: '是否是驼峰形式的名字',
            modifier: 'public',
            params: [
              {
                name: 'name',
                desc: '名称',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'pascalCaseToKebabCase',
            desc: '驼峰转xxx-xxx-xxx',
            modifier: 'public',
            params: [
              {
                name: 'name',
                desc: '名称',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'execExpression',
            desc: '执行表达式',
            modifier: 'public',
            params: [
              {
                name: 'context',
                desc: '执行的上下文',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'expressionStr',
                desc: '表达式',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'data',
                desc: '实参列表，调用函数传递的参数',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getCookie',
            desc: '获取指定的cookie值',
            modifier: 'public',
            params: [
              {
                name: 'name',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'noop',
            desc: '返回一个空实现的函数',
            modifier: 'public',
            params: [],
            returnType: 'Function',
            returnDesc: '',
          },
          {
            name: 'generatorRandom',
            desc: '生成随机数',
            modifier: 'public',
            params: [
              {
                name: 'lowerValue',
                desc: '最小值',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'upperValue',
                desc: '最大值',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'uuid',
            desc: '生成uuid',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getPropertyVisitPathStr',
            desc: '获取属性访问的完整字符串路径 a.b.c.d.e.f',
            modifier: 'public',
            params: [
              {
                name: 'target',
                desc: 'Proxy中set的target参数',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'key',
                desc: 'Proxy中set的key参数',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'convertBase64UrlToBlob',
            desc: '转换base64位blob对象',
            modifier: 'public',
            params: [
              {
                name: 'data',
                desc: 'base64',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Blob',
            returnDesc: '',
          },
        ]}
      />

      <h2>数学操作</h2>
      <FunctionProps
        data={[
          {
            name: 'toPoint',
            desc: '百分数转化为小数',
            modifier: 'public',
            params: [
              {
                name: 'percent',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'toPercent',
            desc: '小数转化为百分数',
            modifier: 'public',
            params: [
              {
                name: 'point',
                desc: '',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'straightLineIntersection',
            desc: '计算两个直线的交点',
            modifier: 'public',
            params: [
              {
                name: 'p1',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'p2',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'p3',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'p4',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '{x:number,y:number}',
            returnDesc: '',
          },
          {
            name: 'getA3Point',
            desc: '计算两点p1,p2 距离p1点distance距离的点p3的坐标',
            modifier: 'public',
            params: [
              {
                name: 'p1',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'p2',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '{x:number,y:number}',
            returnDesc: '',
          },
          {
            name: 'getDistanceByBetweenPoint',
            desc: '获取p1,p2两点间的距离',
            modifier: 'public',
            params: [
              {
                name: 'p1',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'p2',
                desc: '',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'clientToCtxPoint',
            desc: '屏幕坐标转换成画布坐标',
            modifier: 'public',
            params: [
              {
                name: 'event',
                desc: '事件对象',
                type: 'HtmlMouseEvent',
                defaultVal: '',
                required: '',
              },
              {
                name: 'el',
                desc: '容器的HtmlDom',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'isPointInCircle',
            desc: '判断一个点是否在圆内',
            modifier: 'public',
            params: [
              {
                name: 'point',
                desc: '点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'circle',
                desc: '圆的数据',
                type: 'ICircle',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isPointInRect',
            desc: '点是否在矩形中',
            modifier: 'public',
            params: [
              {
                name: 'point',
                desc: '点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'rect',
                desc: '矩形的数据',
                type: 'IRect',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'getCanvasTextInGemX',
            desc: '获取一个文本在Rect中的居中的X位置',
            modifier: 'public',
            params: [
              {
                name: 'ctx',
                desc: 'ctx',
                type: 'CanvasRenderingContext2D',
                defaultVal: '',
                required: '',
              },
              {
                name: 'text',
                desc: '文本',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'rect',
                desc: '矩形数据',
                type: '{ leftTop: IPoint; rightBottom: IPoint }',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'midpoint',
            desc: '计算两个点的中心点',
            modifier: 'public',
            params: [
              {
                name: 'fromPoint',
                desc: '开始点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'toPoint',
                desc: '结束点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'IPoint',
            returnDesc: '',
          },
          {
            name: 'slope',
            desc: '计算两个点的斜率',
            modifier: 'public',
            params: [
              {
                name: 'fromPoint',
                desc: '开始点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'toPoint',
                desc: '结束点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'axis',
                desc: '坐标系',
                type: "'cartesian' | 'geographic'",
                defaultVal: 'cartesian',
                required: '',
              },
            ],
            returnType: 'number | undefined',
            returnDesc: '',
          },
          {
            name: 'slopToRadian',
            desc: '获取两点斜率的弧度',
            modifier: 'public',
            params: [
              {
                name: 'fromPoint',
                desc: '开始点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'toPoint',
                desc: '结束点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'axis',
                desc: '坐标系',
                type: "'cartesian' | 'geographic'",
                defaultVal: 'cartesian',
                required: '',
              },
            ],
            returnType: 'number | undefined',
            returnDesc: '',
          },
          {
            name: 'slopToAngle',
            desc: '获取两点斜率的角度',
            modifier: 'public',
            params: [
              {
                name: 'fromPoint',
                desc: '开始点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'toPoint',
                desc: '结束点',
                type: 'IPoint',
                defaultVal: '',
                required: '',
              },
              {
                name: 'axis',
                desc: '坐标系',
                type: "'cartesian' | 'geographic'",
                defaultVal: 'cartesian',
                required: '',
              },
            ],
            returnType: 'number | undefined',
            returnDesc: '',
          },
          {
            name: 'radianToAngle',
            desc: '弧度转换成角度',
            modifier: 'public',
            params: [
              {
                name: 'radian',
                desc: '弧度',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '角度',
          },
          {
            name: 'angleToRadian',
            desc: '角度转弧度',
            modifier: 'public',
            params: [
              {
                name: 'angle',
                desc: '角度',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '弧度',
          },
          {
            name: 'distance',
            desc: '距离',
            modifier: 'public',
            params: [
              {
                name: 'value',
                desc: '数值(m)',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'unit',
                desc: '单位',
                type: 'number',
                defaultVal: 'kilometer',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'getCirclePoint',
            desc: '获取圆上任意一点',
            modifier: 'public',
            params: [
              {
                name: 'center',
                desc: '圆心',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'raduis',
                desc: '半径',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'angle',
                desc: '弧度',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'IPoint',
            returnDesc: '',
          },
          {
            name: 'getOvalPoint',
            desc: '获取椭圆上任意一点',
            modifier: 'public',
            params: [
              {
                name: 'center',
                desc: '圆心',
                type: '{x:number,y:number}',
                defaultVal: '',
                required: '',
              },
              {
                name: 'raduisX',
                desc: 'X半径',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'raduisY',
                desc: 'y半径',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'angle',
                desc: '弧度',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'IPoint',
            returnDesc: '',
          },
        ]}
      />

      <h2>Url操作</h2>
      <FunctionProps
        data={[
          {
            name: 'parse',
            desc: 'query参数转换成Obj',
            modifier: 'public',
            params: [
              {
                name: 'path',
                desc: '待解析的路径',
                type: 'string',
                defaultVal: 'window.location.search',
                required: 'true',
              },
            ],
            returnType: 'Object',
            returnDesc: '',
          },
          {
            name: 'stringify',
            desc: '对象转换成query参数',
            modifier: 'public',
            params: [
              {
                name: 'record',
                desc: '对象',
                type: 'Object',
                defaultVal: '',
                required: 'true',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
        ]}
      />

      <h2>颜色操作</h2>
      <FunctionProps
        data={[
          {
            name: 'rgb',
            desc: 'rgb颜色随机',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'color16',
            desc: '十六进制颜色随机',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
        ]}
      />

      <h2>客户端监测</h2>
      <FunctionProps
        data={[
          {
            name: 'isTouch',
            desc: '是否移动端支持touch事件',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <h2>系统管理相关</h2>
      <FunctionProps
        data={[
          {
            name: 'getLang',
            desc: '获取语言',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'setLang',
            desc: '设置语言',
            modifier: 'public',
            params: [
              {
                name: 'lang',
                desc: '语言',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getDatePickerFormat',
            desc: '对antd的DatePicker控件进行语言设置',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'casUrl',
            desc: '跳转',
            modifier: 'public',
            params: [
              {
                name: 'baseUrl',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'enterUrl',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'casLogoutUrl',
            desc: '登出',
            modifier: 'public',
            params: [
              {
                name: 'baseUrl',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'enterUrl',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'params',
                desc: '',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: '',
          },
        ]}
      />
    </div>
  );
};
