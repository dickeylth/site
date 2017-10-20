<!--
 index: 5
 title: Tree
 resource:
   jsFiles:
     - ${url.g6}
-->

# Tree

树图，支持树型数据，继承于[Graph](./graph)，享有 Graph 上所有属性和方法。

## 属性

### [modes](#modes) {String}

默认模式集

```js
{
  // 默认模式
  default: [
    'dragBlank', 'collapse', 'spreadout', 'buttonPointer'
  ]
}
```

### [showButton](#showButton) {Boolean}

是否显示按钮（如：展开、折叠按钮）

### [layout](#layout) {Object}

布局对象，详见[Layout](./layout)

### [layoutFn](#layoutfn) {Function}

树布局构造函数。可选值为`G6.Layout.CompactBoxTree`，`G6.Layout.IndentedTree`，`G6.Layout.Dendrogram`和`G6.Layout.LayeredTidyTree`，默认值为`G6.Layout.CompactBoxTree`。详细信息见[布局API文档](/g6/api/layout.html)。

### [layoutCfg](#layoutcfg) {Object}

树布局属性。[布局API文档](/g6/api/layout.html)。具体树布局属性参数配置可以通过[G6树图布局工具](/g6/demo/02-tree/tree-layout.html)调试和预览。

## 实例方法

### [source](#source) {Function}

数据输入是一个树型结构的对象。

```js
/**
 * 加载数据
 * @param  {Object} data  数据源
 */
tree.source(data);
```

**以下字段对默认的树节点有特定含义**

```js
{
  id,          // 唯一标识
  parent,      // 父对象
  children,    // 子元素集
  isCollapsed, // 是否折叠 Boolean
  size,        // 尺寸
  style,       // 样式
  color,       // 颜色
  shape,       // 形状
  label        // 标注
}
```

[示例](/g6/demo/06-other/tree-source.html)

### [add](#add) {Function}

```js
/**
 * 添加子元素
 * @param  {String} parentId  父节点 ID
 * @param  {Object} model     子元素数据模型
 */
tree.add(parentId, model);
```

### [changeLayout](#changeLayout) {Function}

更改布局

```js
/**
 * 更改布局
 * @param  {Object} layout 布局对象
 */
tree.changeLayout(layout);
```