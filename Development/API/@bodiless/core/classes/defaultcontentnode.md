[@bodiless/core](../README.md) › [Globals](../globals.md) › [DefaultContentNode](defaultcontentnode.md)

# Class: DefaultContentNode ‹**D**›

## Type parameters

▪ **D**: *object*

## Hierarchy

* **DefaultContentNode**

  ↳ [ContentfulNode](contentfulnode.md)

## Implements

* object

## Index

### Constructors

* [constructor](defaultcontentnode.md#constructor)

### Properties

* [actions](defaultcontentnode.md#protected-actions)
* [getters](defaultcontentnode.md#protected-getters)
* [path](defaultcontentnode.md#path)

### Accessors

* [baseResourcePath](defaultcontentnode.md#baseresourcepath)
* [data](defaultcontentnode.md#data)
* [hasError](defaultcontentnode.md#haserror)
* [keys](defaultcontentnode.md#keys)
* [pagePath](defaultcontentnode.md#pagepath)

### Methods

* [child](defaultcontentnode.md#child)
* [delete](defaultcontentnode.md#delete)
* [getActions](defaultcontentnode.md#getactions)
* [getGetters](defaultcontentnode.md#getgetters)
* [peer](defaultcontentnode.md#peer)
* [proxy](defaultcontentnode.md#proxy)
* [setData](defaultcontentnode.md#setdata)
* [dummy](defaultcontentnode.md#static-dummy)

## Constructors

###  constructor

\+ **new DefaultContentNode**(`actions`: [Actions](../globals.md#actions), `getters`: [Getters](../globals.md#getters), `path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:103](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | [Actions](../globals.md#actions) |
`getters` | [Getters](../globals.md#getters) |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)*

## Properties

### `Protected` actions

• **actions**: *[Actions](../globals.md#actions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:99](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L99)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:101](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L101)*

___

###  path

• **path**: *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:103](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L103)*

## Accessors

###  baseResourcePath

• **get baseResourcePath**(): *string*

*Defined in [packages/bodiless-core/src/ContentNode.ts:131](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L131)*

**Returns:** *string*

___

###  data

• **get data**(): *D*

*Defined in [packages/bodiless-core/src/ContentNode.ts:121](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L121)*

**Returns:** *D*

___

###  hasError

• **get hasError**(): *hasError*

*Defined in [packages/bodiless-core/src/ContentNode.ts:153](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L153)*

**Returns:** *hasError*

___

###  keys

• **get keys**(): *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:148](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L148)*

**Returns:** *string[]*

___

###  pagePath

• **get pagePath**(): *string*

*Defined in [packages/bodiless-core/src/ContentNode.ts:126](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L126)*

**Returns:** *string*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:116](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L116)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹E›*

___

###  delete

▸ **delete**(`path?`: [Path](../globals.md#path)): *void*

*Defined in [packages/bodiless-core/src/ContentNode.ts:141](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:167](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L167)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  getGetters

▸ **getGetters**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:163](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L163)*

**Returns:** *object*

* **getBaseResourcePath**(`collection`: string): *string*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **getPagePath**(): *string*

* **hasError**(): *boolean*

___

###  peer

▸ **peer**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:112](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L112)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹E›*

___

###  proxy

▸ **proxy**(`processors`: [Processors](../globals.md#processors)‹D›): *[ContentNode](../globals.md#contentnode)‹D›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:158](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`processors` | [Processors](../globals.md#processors)‹D› |

**Returns:** *[ContentNode](../globals.md#contentnode)‹D›*

___

###  setData

▸ **setData**(`dataObj`: D): *void*

*Defined in [packages/bodiless-core/src/ContentNode.ts:136](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:171](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/ContentNode.ts#L171)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
