[@bodiless/core](../README.md) › [Globals](../globals.md) › [ContentfulNode](contentfulnode.md)

# Class: ContentfulNode ‹**D, K**›

## Type parameters

▪ **D**: *object*

▪ **K**: *object*

## Hierarchy

* [DefaultContentNode](defaultcontentnode.md)‹D›

  ↳ **ContentfulNode**

## Implements

* object

## Index

### Constructors

* [constructor](contentfulnode.md#constructor)

### Properties

* [actions](contentfulnode.md#protected-actions)
* [content](contentfulnode.md#private-content)
* [getters](contentfulnode.md#protected-getters)
* [path](contentfulnode.md#path)
* [sourceNode](contentfulnode.md#protected-sourcenode)

### Accessors

* [baseResourcePath](contentfulnode.md#baseresourcepath)
* [data](contentfulnode.md#data)
* [hasError](contentfulnode.md#haserror)
* [keys](contentfulnode.md#keys)
* [pagePath](contentfulnode.md#pagepath)

### Methods

* [child](contentfulnode.md#child)
* [delete](contentfulnode.md#delete)
* [getActions](contentfulnode.md#getactions)
* [getContentKey](contentfulnode.md#private-getcontentkey)
* [getDefaultContent](contentfulnode.md#private-getdefaultcontent)
* [getGetters](contentfulnode.md#getgetters)
* [peer](contentfulnode.md#peer)
* [proxy](contentfulnode.md#proxy)
* [setContent](contentfulnode.md#setcontent)
* [setData](contentfulnode.md#setdata)
* [setSourceNode](contentfulnode.md#setsourcenode)
* [create](contentfulnode.md#static-create)
* [dummy](contentfulnode.md#static-dummy)

## Constructors

###  constructor

\+ **new ContentfulNode**(`actions`: [Actions](../globals.md#actions), `getters`: [Getters](../globals.md#getters), `path`: [Path](../globals.md#path)): *[ContentfulNode](contentfulnode.md)*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[constructor](defaultcontentnode.md#constructor)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:103](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | [Actions](../globals.md#actions) |
`getters` | [Getters](../globals.md#getters) |
`path` | [Path](../globals.md#path) |

**Returns:** *[ContentfulNode](contentfulnode.md)*

## Properties

### `Protected` actions

• **actions**: *[Actions](../globals.md#actions)*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[actions](defaultcontentnode.md#protected-actions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:99](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L99)*

___

### `Private` content

• **content**: *[Content](../globals.md#content)*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:54](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L54)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[getters](defaultcontentnode.md#protected-getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:101](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L101)*

___

###  path

• **path**: *string[]*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[path](defaultcontentnode.md#path)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:103](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L103)*

___

### `Protected` sourceNode

• **sourceNode**: *[DefaultContentNode](defaultcontentnode.md)‹K›*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L51)*

## Accessors

###  baseResourcePath

• **get baseResourcePath**(): *string*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[baseResourcePath](defaultcontentnode.md#baseresourcepath)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:131](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L131)*

**Returns:** *string*

___

###  data

• **get data**(): *any*

*Overrides [DefaultContentNode](defaultcontentnode.md).[data](defaultcontentnode.md#data)*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:90](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L90)*

when default content is not a function
then take data from store
if data does not exist in store then return default content

when default content is a function
then return data from the function
assuming the function is responsible for merging store data with default data

**Returns:** *any*

___

###  hasError

• **get hasError**(): *hasError*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[hasError](defaultcontentnode.md#haserror)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:153](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L153)*

**Returns:** *hasError*

___

###  keys

• **get keys**(): *string[]*

*Overrides [DefaultContentNode](defaultcontentnode.md).[keys](defaultcontentnode.md#keys)*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:104](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L104)*

**Returns:** *string[]*

___

###  pagePath

• **get pagePath**(): *string*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[pagePath](defaultcontentnode.md#pagepath)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:126](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L126)*

**Returns:** *string*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[child](defaultcontentnode.md#child)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:116](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L116)*

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

*Inherited from [DefaultContentNode](defaultcontentnode.md).[delete](defaultcontentnode.md#delete)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:141](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[getActions](defaultcontentnode.md#getactions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:167](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L167)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

### `Private` getContentKey

▸ **getContentKey**(): *string*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:63](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L63)*

**Returns:** *string*

___

### `Private` getDefaultContent

▸ **getDefaultContent**(): *any*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:67](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L67)*

**Returns:** *any*

___

###  getGetters

▸ **getGetters**(): *object*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[getGetters](defaultcontentnode.md#getgetters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:163](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L163)*

**Returns:** *object*

* **getBaseResourcePath**(`collection`: string): *string*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **getPagePath**(): *string*

* **hasError**(): *boolean*

___

###  peer

▸ **peer**‹**E**›(`path`: [Path](../globals.md#path)): *[ContentfulNode](contentfulnode.md)‹E, K›*

*Overrides [DefaultContentNode](defaultcontentnode.md).[peer](defaultcontentnode.md#peer)*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:113](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L113)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[ContentfulNode](contentfulnode.md)‹E, K›*

___

###  proxy

▸ **proxy**(`processors`: [Processors](../globals.md#processors)‹D›): *[ContentNode](../globals.md#contentnode)‹D›*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[proxy](defaultcontentnode.md#proxy)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:158](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`processors` | [Processors](../globals.md#processors)‹D› |

**Returns:** *[ContentNode](../globals.md#contentnode)‹D›*

___

###  setContent

▸ **setContent**(`content`: [Content](../globals.md#content)): *void*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:73](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | [Content](../globals.md#content) |

**Returns:** *void*

___

###  setData

▸ **setData**(`dataObj`: D): *void*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[setData](defaultcontentnode.md#setdata)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:136](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

###  setSourceNode

▸ **setSourceNode**(`node`: [DefaultContentNode](defaultcontentnode.md)‹K›): *void*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:77](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [DefaultContentNode](defaultcontentnode.md)‹K› |

**Returns:** *void*

___

### `Static` create

▸ **create**(`node`: [DefaultContentNode](defaultcontentnode.md)‹object›, `content`: object): *[ContentfulNode](contentfulnode.md)‹object, object›*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:56](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [DefaultContentNode](defaultcontentnode.md)‹object› |
`content` | object |

**Returns:** *[ContentfulNode](contentfulnode.md)‹object, object›*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[dummy](defaultcontentnode.md#static-dummy)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:171](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/ContentNode.ts#L171)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
