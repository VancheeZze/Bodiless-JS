[@bodiless/components](../README.md) › [Globals](../globals.md) › [BreadcrumbItem](breadcrumbitem.md)

# Class: BreadcrumbItem

Stores breadcrumb item data.

## Hierarchy

* **BreadcrumbItem**

## Implements

* object

## Index

### Constructors

* [constructor](breadcrumbitem.md#constructor)

### Properties

* [_link](breadcrumbitem.md#_link)
* [_parent](breadcrumbitem.md#optional-_parent)
* [_store](breadcrumbitem.md#_store)
* [_title](breadcrumbitem.md#_title)
* [_uuid](breadcrumbitem.md#_uuid)

### Accessors

* [link](breadcrumbitem.md#link)
* [parent](breadcrumbitem.md#parent)
* [title](breadcrumbitem.md#title)
* [uuid](breadcrumbitem.md#uuid)

### Methods

* [getAncestors](breadcrumbitem.md#getancestors)
* [hasPath](breadcrumbitem.md#haspath)
* [isActive](breadcrumbitem.md#isactive)
* [isAncestorOf](breadcrumbitem.md#isancestorof)
* [isDescendantOf](breadcrumbitem.md#isdescendantof)
* [isEqual](breadcrumbitem.md#isequal)
* [isFirst](breadcrumbitem.md#isfirst)
* [isLast](breadcrumbitem.md#islast)
* [isSubpathOf](breadcrumbitem.md#issubpathof)
* [setLink](breadcrumbitem.md#setlink)
* [setTitle](breadcrumbitem.md#settitle)
* [toString](breadcrumbitem.md#tostring)

## Constructors

###  constructor

\+ **new BreadcrumbItem**(`__namedParameters`: object): *[BreadcrumbItem](breadcrumbitem.md)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:76](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L76)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`link` | object |
`parent` | undefined &#124; object |
`store` | object |
`title` | object |
`uuid` | string |

**Returns:** *[BreadcrumbItem](breadcrumbitem.md)*

## Properties

###  _link

• **_link**: *[BreadcrumbItemLink](../globals.md#breadcrumbitemlink)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:74](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L74)*

___

### `Optional` _parent

• **_parent**? : *[BreadcrumbItemType](../globals.md#breadcrumbitemtype)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:70](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L70)*

___

###  _store

• **_store**: *[BreadcrumbStoreType](../globals.md#breadcrumbstoretype)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:76](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L76)*

___

###  _title

• **_title**: *[BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:72](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L72)*

___

###  _uuid

• **_uuid**: *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:68](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L68)*

## Accessors

###  link

• **get link**(): *object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:160](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L160)*

**Returns:** *object*

* **data**: *string*

* **nodePath**: *string*

___

###  parent

• **get parent**(): *undefined | object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:164](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L164)*

**Returns:** *undefined | object*

___

###  title

• **get title**(): *object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:156](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L156)*

**Returns:** *object*

* **data**: *string | object*

* **nodePath**: *string*

___

###  uuid

• **get uuid**(): *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:152](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L152)*

**Returns:** *string*

## Methods

###  getAncestors

▸ **getAncestors**(): *object[]*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:141](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L141)*

**Returns:** *object[]*

___

###  hasPath

▸ **hasPath**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:106](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  isActive

▸ **isActive**(): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:92](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L92)*

**Returns:** *boolean*

___

###  isAncestorOf

▸ **isAncestorOf**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:122](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

###  isDescendantOf

▸ **isDescendantOf**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:114](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

###  isEqual

▸ **isEqual**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:127](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  isFirst

▸ **isFirst**(): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:132](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L132)*

**Returns:** *boolean*

___

###  isLast

▸ **isLast**(): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:136](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L136)*

**Returns:** *boolean*

___

###  isSubpathOf

▸ **isSubpathOf**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:98](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  setLink

▸ **setLink**(`link`: [BreadcrumbItemLink](../globals.md#breadcrumbitemlink)): *void*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:172](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`link` | [BreadcrumbItemLink](../globals.md#breadcrumbitemlink) |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: [BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)): *void*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:168](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`title` | [BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle) |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:176](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L176)*

**Returns:** *string*
