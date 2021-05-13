[@bodiless/table](README.md) › [Globals](globals.md)

# @bodiless/table

## Index

### Enumerations

* [Section](enums/section.md)
* [TableActionFields](enums/tableactionfields.md)

### Type aliases

* [AddFunc](globals.md#addfunc)
* [DeleteFunc](globals.md#deletefunc)
* [MoveFunc](globals.md#movefunc)
* [NodeKey](globals.md#nodekey)
* [TableActionProps](globals.md#tableactionprops)
* [TableBaseProps](globals.md#tablebaseprops)
* [TableColumnContextValue](globals.md#tablecolumncontextvalue)
* [TableComponents](globals.md#tablecomponents)
* [TableContent](globals.md#tablecontent)
* [TableContentRow](globals.md#tablecontentrow)
* [TableFunc](globals.md#tablefunc)
* [TableFuncs](globals.md#tablefuncs)
* [TableProps](globals.md#tableprops)
* [TableRowContextValue](globals.md#tablerowcontextvalue)
* [TableSectionProps](globals.md#tablesectionprops)
* [UseMenuOptionsTable](globals.md#usemenuoptionstable)
* [UseMenuOptionsTableProps](globals.md#usemenuoptionstableprops)
* [WithContentProps](globals.md#withcontentprops)
* [WithTableManagerProps](globals.md#withtablemanagerprops)

### Variables

* [CleanTable](globals.md#const-cleantable)
* [TableColumnContext](globals.md#const-tablecolumncontext)
* [TableContext](globals.md#const-tablecontext)
* [TableManagerContext](globals.md#const-tablemanagercontext)
* [TableRowContext](globals.md#const-tablerowcontext)
* [TableSectionContext](globals.md#const-tablesectioncontext)

### Functions

* [DefaultCell](globals.md#const-defaultcell)
* [TableBase](globals.md#const-tablebase)
* [TableSection](globals.md#const-tablesection)
* [asBodilessTable](globals.md#const-asbodilesstable)
* [forCell](globals.md#const-forcell)
* [moveX](globals.md#const-movex)
* [tableManagerFunc](globals.md#const-tablemanagerfunc)
* [useIsEvenColumn](globals.md#const-useisevencolumn)
* [useIsEvenRow](globals.md#const-useisevenrow)
* [useIsFirstColumn](globals.md#const-useisfirstcolumn)
* [useIsFirstRow](globals.md#const-useisfirstrow)
* [useIsInBody](globals.md#const-useisinbody)
* [useIsInFoot](globals.md#const-useisinfoot)
* [useIsInHead](globals.md#const-useisinhead)
* [useIsLastColumn](globals.md#const-useislastcolumn)
* [useIsLastRow](globals.md#const-useislastrow)
* [useIsOddColumnn](globals.md#const-useisoddcolumnn)
* [useIsOddRow](globals.md#const-useisoddrow)
* [useMenuOptionsBody](globals.md#const-usemenuoptionsbody)
* [useMenuOptionsColumns](globals.md#const-usemenuoptionscolumns)
* [useMenuOptionsFoot](globals.md#const-usemenuoptionsfoot)
* [useMenuOptionsHead](globals.md#const-usemenuoptionshead)
* [useMenuOptionsTable](globals.md#const-usemenuoptionstable)
* [useMenuOptionsTableOverview](globals.md#const-usemenuoptionstableoverview)
* [useTableColumnContext](globals.md#const-usetablecolumncontext)
* [useTableContext](globals.md#const-usetablecontext)
* [useTableManagerContext](globals.md#const-usetablemanagercontext)
* [useTableRowContext](globals.md#const-usetablerowcontext)
* [useTableSectionContext](globals.md#const-usetablesectioncontext)
* [withCols](globals.md#const-withcols)
* [withContent](globals.md#const-withcontent)
* [withHeadRows](globals.md#const-withheadrows)
* [withInnerText](globals.md#const-withinnertext)
* [withRows](globals.md#const-withrows)
* [withTableManager](globals.md#const-withtablemanager)

### Object literals

* [tableComponentsStart](globals.md#const-tablecomponentsstart)

## Type aliases

###  AddFunc

Ƭ **AddFunc**: *function*

*Defined in [packages/bodiless-table/src/types.ts:49](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L49)*

#### Type declaration:

▸ (`current`: number, `newItem`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`current` | number |
`newItem` | string |

___

###  DeleteFunc

Ƭ **DeleteFunc**: *function*

*Defined in [packages/bodiless-table/src/types.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L51)*

#### Type declaration:

▸ (`current`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`current` | number |

___

###  MoveFunc

Ƭ **MoveFunc**: *function*

*Defined in [packages/bodiless-table/src/types.ts:50](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L50)*

#### Type declaration:

▸ (`current`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`current` | number |

___

###  NodeKey

Ƭ **NodeKey**: *string | Partial‹WithNodeProps›*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:291](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L291)*

___

###  TableActionProps

Ƭ **TableActionProps**: *[WithTableManagerProps](globals.md#withtablemanagerprops) & object*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L57)*

___

###  TableBaseProps

Ƭ **TableBaseProps**: *object*

*Defined in [packages/bodiless-table/src/types.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L32)*

#### Type declaration:

* **columns**: *string[]*

* **footRows**: *string[]*

* **headRows**: *string[]*

* **rows**: *string[]*

___

###  TableColumnContextValue

Ƭ **TableColumnContextValue**: *object*

*Defined in [packages/bodiless-table/src/TableContext.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L29)*

#### Type declaration:

* **index**: *number*

* **name**: *string*

___

###  TableComponents

Ƭ **TableComponents**: *object*

*Defined in [packages/bodiless-table/src/types.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L23)*

#### Type declaration:

* **Cell**: *ComponentType‹StylableProps›*

* **Row**: *ComponentType‹StylableProps›*

* **TBody**: *ComponentType‹StylableProps›*

* **TFoot**: *ComponentType‹StylableProps›*

* **THead**: *ComponentType‹StylableProps›*

* **Wrapper**: *ComponentType‹StylableProps›*

___

###  TableContent

Ƭ **TableContent**: *[TableContentRow](globals.md#tablecontentrow)[]*

*Defined in [packages/bodiless-table/src/withContent.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L59)*

___

###  TableContentRow

Ƭ **TableContentRow**: *string[]*

*Defined in [packages/bodiless-table/src/withContent.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L58)*

___

###  TableFunc

Ƭ **TableFunc**: *function*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:71](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L71)*

#### Type declaration:

▸ (`p`: [WithTableManagerProps](globals.md#withtablemanagerprops)): *[TableFuncs](globals.md#tablefuncs)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [WithTableManagerProps](globals.md#withtablemanagerprops) |

___

###  TableFuncs

Ƭ **TableFuncs**: *object*

*Defined in [packages/bodiless-table/src/types.ts:52](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L52)*

#### Type declaration:

* **addColumn**: *[AddFunc](globals.md#addfunc)*

* **addFootRow**: *[AddFunc](globals.md#addfunc)*

* **addHeadRow**: *[AddFunc](globals.md#addfunc)*

* **addRow**: *[AddFunc](globals.md#addfunc)*

* **data**: *[TableBaseProps](globals.md#tablebaseprops)*

* **deleteColumn**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteFootRow**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteHeadRow**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteRow**: *[DeleteFunc](globals.md#deletefunc)*

* **moveColumn**: *[MoveFunc](globals.md#movefunc)*

* **moveFootRow**: *[MoveFunc](globals.md#movefunc)*

* **moveHeadRow**: *[MoveFunc](globals.md#movefunc)*

* **moveRow**: *[MoveFunc](globals.md#movefunc)*

___

###  TableProps

Ƭ **TableProps**: *[TableBaseProps](globals.md#tablebaseprops) & DesignableComponentsProps‹[TableComponents](globals.md#tablecomponents)› & HTMLProps‹HTMLElement›*

*Defined in [packages/bodiless-table/src/types.ts:38](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L38)*

___

###  TableRowContextValue

Ƭ **TableRowContextValue**: *object*

*Defined in [packages/bodiless-table/src/TableContext.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L25)*

#### Type declaration:

* **index**: *number*

* **name**: *string*

___

###  TableSectionProps

Ƭ **TableSectionProps**: *object*

*Defined in [packages/bodiless-table/src/types.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/types.ts#L41)*

#### Type declaration:

* **Cell**: *ComponentType‹StylableProps›*

* **Row**: *ComponentType‹StylableProps›*

* **Wrapper**: *ComponentType‹StylableProps›*

* **columns**: *string[]*

* **rows**: *string[]*

* **section**: *[Section](enums/section.md)*

___

###  UseMenuOptionsTable

Ƭ **UseMenuOptionsTable**: *function*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:157](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L157)*

#### Type declaration:

▸ (`p`: [UseMenuOptionsTableProps](globals.md#usemenuoptionstableprops)): *TMenuOption[]*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [UseMenuOptionsTableProps](globals.md#usemenuoptionstableprops) |

___

###  UseMenuOptionsTableProps

Ƭ **UseMenuOptionsTableProps**: *object*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:145](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L145)*

#### Type declaration:

* **addFunc**: *[AddFunc](globals.md#addfunc)*

* **addIsDisabled**? : *undefined | false | true*

* **deleteFunc**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteIsDisabled**? : *undefined | false | true*

* **group**: *string*

* **groupLabel**: *string*

* **index**: *number*

* **moveFunc**: *[MoveFunc](globals.md#movefunc)*

* **moveIcon**? : *undefined | string*

* **moveIsDisabled**? : *undefined | false | true*

___

###  WithContentProps

Ƭ **WithContentProps**: *object*

*Defined in [packages/bodiless-table/src/withContent.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L60)*

#### Type declaration:

* **body**: *[TableContent](globals.md#tablecontent)*

* **head**: *[TableContent](globals.md#tablecontent)*

___

###  WithTableManagerProps

Ƭ **WithTableManagerProps**: *object*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L47)*

#### Type declaration:

* **componentData**: *[TableBaseProps](globals.md#tablebaseprops)*

* **setComponentData**(): *function*

  * (`p`: [TableBaseProps](globals.md#tablebaseprops)): *void*

## Variables

### `Const` CleanTable

• **CleanTable**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(tableComponentsStart, 'Table')(TableBase)

*Defined in [packages/bodiless-table/src/Table.tsx:148](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L148)*

___

### `Const` TableColumnContext

• **TableColumnContext**: *Context‹object›* = React.createContext({
  index: 0,
  name: '',
} as TableColumnContextValue)

*Defined in [packages/bodiless-table/src/TableContext.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L38)*

___

### `Const` TableContext

• **TableContext**: *Context‹object›* = React.createContext({
  columns: [] as string[],
  rows: [] as string[],
  headRows: [] as string[],
  footRows: [] as string[],
} as TableBaseProps)

*Defined in [packages/bodiless-table/src/TableContext.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L18)*

___

### `Const` TableManagerContext

• **TableManagerContext**: *Context‹object›* = React.createContext({
  data: {
    columns: [] as string[],
    rows: [] as string[],
    headRows: [] as string[],
    footRows: [] as string[],
  },
  addColumn: () => undefined,
  deleteColumn: () => undefined,
  moveColumn: () => undefined,
  addRow: () => undefined,
  deleteRow: () => undefined,
  moveRow: () => undefined,
  addHeadRow: () => undefined,
  deleteHeadRow: () => undefined,
  moveHeadRow: () => undefined,
  addFootRow: () => undefined,
  deleteFootRow: () => undefined,
  moveFootRow: () => undefined,
} as TableFuncs)

*Defined in [packages/bodiless-table/src/TableManagerContext.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableManagerContext.tsx#L18)*

___

### `Const` TableRowContext

• **TableRowContext**: *Context‹object›* = React.createContext({
  index: 0,
  name: '',
} as TableRowContextValue)

*Defined in [packages/bodiless-table/src/TableContext.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L34)*

___

### `Const` TableSectionContext

• **TableSectionContext**: *Context‹[Section](enums/section.md)›* = React.createContext(Section.body as Section)

*Defined in [packages/bodiless-table/src/TableContext.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L33)*

## Functions

### `Const` DefaultCell

▸ **DefaultCell**(`props`: HTMLProps‹StylableProps›): *Element‹›*

*Defined in [packages/bodiless-table/src/Table.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹StylableProps› |

**Returns:** *Element‹›*

___

### `Const` TableBase

▸ **TableBase**(`props`: object & object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-table/src/Table.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` TableSection

▸ **TableSection**(`props`: [TableSectionProps](globals.md#tablesectionprops)): *Element‹›*

*Defined in [packages/bodiless-table/src/Table.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [TableSectionProps](globals.md#tablesectionprops) |

**Returns:** *Element‹›*

___

### `Const` asBodilessTable

▸ **asBodilessTable**(`nodeKey?`: [NodeKey](globals.md#nodekey), `defaultData?`: [TableBaseProps](globals.md#tablebaseprops)): *function & object*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:292](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKey?` | [NodeKey](globals.md#nodekey) |
`defaultData?` | [TableBaseProps](globals.md#tablebaseprops) |

**Returns:** *function & object*

___

### `Const` forCell

▸ **forCell**(`section`: [Section](enums/section.md), `rowIndex`: number, `columnIndex`: number): *(Anonymous function)*

*Defined in [packages/bodiless-table/src/withContent.tsx:64](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | [Section](enums/section.md) |
`rowIndex` | number |
`columnIndex` | number |

**Returns:** *(Anonymous function)*

___

### `Const` moveX

▸ **moveX**(`props`: [TableActionProps](globals.md#tableactionprops)): *(Anonymous function)*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [TableActionProps](globals.md#tableactionprops) |

**Returns:** *(Anonymous function)*

___

### `Const` tableManagerFunc

▸ **tableManagerFunc**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L72)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`componentData` | object |
`setComponentData` | function |

**Returns:** *object*

* **data**(): *object*

  * **columns**: *string[]*

  * **footRows**: *string[]*

  * **headRows**: *string[]*

  * **rows**: *string[]*

* **moveColumn**: *(Anonymous function)* = moveX({
    componentData,
    setComponentData,
    moveField: TableActionFields.columns,
  })

* **moveFootRow**: *(Anonymous function)* = moveX({
    componentData,
    setComponentData,
    moveField: TableActionFields.footRows,
  })

* **moveHeadRow**: *(Anonymous function)* = moveX({
    componentData,
    setComponentData,
    moveField: TableActionFields.headRows,
  })

* **moveRow**: *(Anonymous function)* = moveX({
    componentData,
    setComponentData,
    moveField: TableActionFields.rows,
  })

* **addColumn**(`currentColumnIndex`: number, `newColumn`: string): *void*

* **addFootRow**(`currentRowIndex`: number, `newRow`: string): *void*

* **addHeadRow**(`currentRowIndex`: number, `newRow`: string): *void*

* **addRow**(`currentRowIndex`: number, `newRow`: string): *void*

* **deleteColumn**(`currentColumnIndex`: number): *void*

* **deleteFootRow**(`currentRowIndex`: number): *void*

* **deleteHeadRow**(`currentRowIndex`: number): *void*

* **deleteRow**(`currentRowIndex`: number): *void*

___

### `Const` useIsEvenColumn

▸ **useIsEvenColumn**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L31)*

**Returns:** *boolean*

___

### `Const` useIsEvenRow

▸ **useIsEvenRow**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L25)*

**Returns:** *boolean*

___

### `Const` useIsFirstColumn

▸ **useIsFirstColumn**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L33)*

**Returns:** *boolean*

___

### `Const` useIsFirstRow

▸ **useIsFirstRow**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L27)*

**Returns:** *boolean*

___

### `Const` useIsInBody

▸ **useIsInBody**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L37)*

**Returns:** *boolean*

___

### `Const` useIsInFoot

▸ **useIsInFoot**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L39)*

**Returns:** *boolean*

___

### `Const` useIsInHead

▸ **useIsInHead**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L38)*

**Returns:** *boolean*

___

### `Const` useIsLastColumn

▸ **useIsLastColumn**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L34)*

**Returns:** *boolean*

___

### `Const` useIsLastRow

▸ **useIsLastRow**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L28)*

**Returns:** *boolean*

___

### `Const` useIsOddColumnn

▸ **useIsOddColumnn**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L32)*

**Returns:** *boolean*

___

### `Const` useIsOddRow

▸ **useIsOddRow**(): *boolean*

*Defined in [packages/bodiless-table/src/forCell.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/forCell.tsx#L26)*

**Returns:** *boolean*

___

### `Const` useMenuOptionsBody

▸ **useMenuOptionsBody**(): *object[]*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:218](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L218)*

**Returns:** *object[]*

___

### `Const` useMenuOptionsColumns

▸ **useMenuOptionsColumns**(): *object[]*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:247](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L247)*

**Returns:** *object[]*

___

### `Const` useMenuOptionsFoot

▸ **useMenuOptionsFoot**(): *object[]*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:238](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L238)*

**Returns:** *object[]*

___

### `Const` useMenuOptionsHead

▸ **useMenuOptionsHead**(): *object[]*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:228](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L228)*

**Returns:** *object[]*

___

### `Const` useMenuOptionsTable

▸ **useMenuOptionsTable**(`__namedParameters`: object): *(object | object | object)[]*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:158](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L158)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`addFunc` | function |
`addIsDisabled` | undefined &#124; false &#124; true |
`deleteFunc` | function |
`deleteIsDisabled` | undefined &#124; false &#124; true |
`group` | string |
`groupLabel` | string |
`index` | number |
`moveFunc` | function |
`moveIcon` | undefined &#124; string |
`moveIsDisabled` | undefined &#124; false &#124; true |

**Returns:** *(object | object | object)[]*

___

### `Const` useMenuOptionsTableOverview

▸ **useMenuOptionsTableOverview**(): *object[]*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:258](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L258)*

**Returns:** *object[]*

___

### `Const` useTableColumnContext

▸ **useTableColumnContext**(): *object*

*Defined in [packages/bodiless-table/src/TableContext.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L45)*

**Returns:** *object*

* **index**: *number*

* **name**: *string*

___

### `Const` useTableContext

▸ **useTableContext**(): *object*

*Defined in [packages/bodiless-table/src/TableContext.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L46)*

**Returns:** *object*

* **columns**: *string[]*

* **footRows**: *string[]*

* **headRows**: *string[]*

* **rows**: *string[]*

___

### `Const` useTableManagerContext

▸ **useTableManagerContext**(): *object*

*Defined in [packages/bodiless-table/src/TableManagerContext.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableManagerContext.tsx#L39)*

**Returns:** *object*

* **addColumn**: *[AddFunc](globals.md#addfunc)*

* **addFootRow**: *[AddFunc](globals.md#addfunc)*

* **addHeadRow**: *[AddFunc](globals.md#addfunc)*

* **addRow**: *[AddFunc](globals.md#addfunc)*

* **data**: *[TableBaseProps](globals.md#tablebaseprops)*

* **deleteColumn**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteFootRow**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteHeadRow**: *[DeleteFunc](globals.md#deletefunc)*

* **deleteRow**: *[DeleteFunc](globals.md#deletefunc)*

* **moveColumn**: *[MoveFunc](globals.md#movefunc)*

* **moveFootRow**: *[MoveFunc](globals.md#movefunc)*

* **moveHeadRow**: *[MoveFunc](globals.md#movefunc)*

* **moveRow**: *[MoveFunc](globals.md#movefunc)*

___

### `Const` useTableRowContext

▸ **useTableRowContext**(): *object*

*Defined in [packages/bodiless-table/src/TableContext.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L44)*

**Returns:** *object*

* **index**: *number*

* **name**: *string*

___

### `Const` useTableSectionContext

▸ **useTableSectionContext**(): *[Section](enums/section.md)*

*Defined in [packages/bodiless-table/src/TableContext.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/TableContext.tsx#L43)*

**Returns:** *[Section](enums/section.md)*

___

### `Const` withCols

▸ **withCols**(...`columns`: string[]): *HOC*

*Defined in [packages/bodiless-table/src/withContent.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`...columns` | string[] |

**Returns:** *HOC*

___

### `Const` withContent

▸ **withContent**(`props`: [WithContentProps](globals.md#withcontentprops)): *function & object*

*Defined in [packages/bodiless-table/src/withContent.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [WithContentProps](globals.md#withcontentprops) |

**Returns:** *function & object*

___

### `Const` withHeadRows

▸ **withHeadRows**(...`rows`: string[]): *HOC*

*Defined in [packages/bodiless-table/src/withContent.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`...rows` | string[] |

**Returns:** *HOC*

___

### `Const` withInnerText

▸ **withInnerText**(`text`: string): *HOC*

*Defined in [packages/bodiless-table/src/withContent.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *HOC*

___

### `Const` withRows

▸ **withRows**(...`rows`: string[]): *HOC*

*Defined in [packages/bodiless-table/src/withContent.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/withContent.tsx#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`...rows` | string[] |

**Returns:** *HOC*

___

### `Const` withTableManager

▸ **withTableManager**(`Component`: "symbol" | "object" | "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "code" | "col" | "colgroup" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "strong" | "sub" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *WithTableManager*

*Defined in [packages/bodiless-table/src/asBodilessTable.tsx:132](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/asBodilessTable.tsx#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "cite" &#124; "data" &#124; "form" &#124; "label" &#124; "slot" &#124; "span" &#124; "style" &#124; "summary" &#124; "title" &#124; "pattern" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "strong" &#124; "sub" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *WithTableManager*

## Object literals

### `Const` tableComponentsStart

### ▪ **tableComponentsStart**: *object*

*Defined in [packages/bodiless-table/src/Table.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L47)*

###  Cell

• **Cell**: *[DefaultCell](globals.md#const-defaultcell)* = DefaultCell

*Defined in [packages/bodiless-table/src/Table.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L53)*

###  Row

• **Row**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Tr

*Defined in [packages/bodiless-table/src/Table.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L52)*

###  TBody

• **TBody**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Tbody

*Defined in [packages/bodiless-table/src/Table.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L49)*

###  TFoot

• **TFoot**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Tfoot

*Defined in [packages/bodiless-table/src/Table.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L51)*

###  THead

• **THead**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Thead

*Defined in [packages/bodiless-table/src/Table.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L50)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Table

*Defined in [packages/bodiless-table/src/Table.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-table/src/Table.tsx#L48)*
