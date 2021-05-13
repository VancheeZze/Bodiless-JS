[@bodiless/navigation](../README.md) › [Globals](../globals.md) › [BreadcrumbStore](breadcrumbstore.md)

# Class: BreadcrumbStore

MobX storage of breadcrumb items.
API:
+ set/delete item.
+ get breadcrumb trail.
+ check if last breadcrumb item exists in the store.

## Hierarchy

* **BreadcrumbStore**

## Implements

* object

## Index

### Constructors

* [constructor](breadcrumbstore.md#constructor)

### Properties

* [activeItem](breadcrumbstore.md#private-optional-activeitem)
* [items](breadcrumbstore.md#private-items)
* [pagePath](breadcrumbstore.md#private-pagepath)

### Accessors

* [breadcrumbTrail](breadcrumbstore.md#breadcrumbtrail)

### Methods

* [deleteItem](breadcrumbstore.md#deleteitem)
* [export](breadcrumbstore.md#export)
* [getItem](breadcrumbstore.md#getitem)
* [getPagePath](breadcrumbstore.md#getpagepath)
* [hasCurrentPageItem](breadcrumbstore.md#hascurrentpageitem)
* [isActiveItemPathChanged](breadcrumbstore.md#private-isactiveitempathchanged)
* [isNewActive](breadcrumbstore.md#private-isnewactive)
* [setActiveItem](breadcrumbstore.md#private-setactiveitem)
* [setItem](breadcrumbstore.md#setitem)
* [toString](breadcrumbstore.md#tostring)
* [updateActive](breadcrumbstore.md#private-updateactive)

## Constructors

###  constructor

\+ **new BreadcrumbStore**(`pagePath`: string): *[BreadcrumbStore](breadcrumbstore.md)*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:204](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`pagePath` | string |

**Returns:** *[BreadcrumbStore](breadcrumbstore.md)*

## Properties

### `Private` `Optional` activeItem

• **activeItem**? : *[BreadcrumbItemType](../globals.md#breadcrumbitemtype)* = undefined

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:202](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L202)*

___

### `Private` items

• **items**: *Map‹string, [BreadcrumbItemType](../globals.md#breadcrumbitemtype)›* = new Map<string, BreadcrumbItemType>()

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:200](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L200)*

___

### `Private` pagePath

• **pagePath**: *string*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:204](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L204)*

## Accessors

###  breadcrumbTrail

• **get breadcrumbTrail**(): *object[]*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:257](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L257)*

**Returns:** *object[]*

## Methods

###  deleteItem

▸ **deleteItem**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:243](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  export

▸ **export**(): *object[]*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:265](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L265)*

**Returns:** *object[]*

___

###  getItem

▸ **getItem**(`key`: string): *undefined | object*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:232](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *undefined | object*

___

###  getPagePath

▸ **getPagePath**(): *string*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:253](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L253)*

**Returns:** *string*

___

###  hasCurrentPageItem

▸ **hasCurrentPageItem**(): *boolean*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:269](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L269)*

**Returns:** *boolean*

___

### `Private` isActiveItemPathChanged

▸ **isActiveItemPathChanged**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:226](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L226)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

### `Private` isNewActive

▸ **isNewActive**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:214](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

### `Private` setActiveItem

▸ **setActiveItem**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | undefined): *void*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:210](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; undefined |

**Returns:** *void*

___

###  setItem

▸ **setItem**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *object*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:236](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *object*

* **getAncestors**(): *function*

  * (): *[BreadcrumbItemType](../globals.md#breadcrumbitemtype)[]*

* **hasPath**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

* **isActive**(): *function*

  * (): *boolean*

* **isAncestorOf**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

* **isDescendantOf**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

* **isEqual**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

* **isFirst**(): *function*

  * (): *boolean*

* **isLast**(): *function*

  * (): *boolean*

* **isSubpathOf**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

* **link**: *[BreadcrumbItemLink](../globals.md#breadcrumbitemlink)*

* **parent**: *[BreadcrumbItemType](../globals.md#breadcrumbitemtype) | undefined*

* **setLink**(): *function*

  * (`link`: [BreadcrumbItemLink](../globals.md#breadcrumbitemlink)): *void*

* **setTitle**(): *function*

  * (`title`: [BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)): *void*

* **title**: *[BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)*

* **uuid**: *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:273](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L273)*

**Returns:** *string*

___

### `Private` updateActive

▸ **updateActive**(): *void*

*Defined in [packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:219](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L219)*

**Returns:** *void*
