[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [GatsbyMobxStore](gatsbymobxstore.md)

# Class: GatsbyMobxStore

Query names returned by GraphQL as object keys, with query results
contained in the edges property.

Query names can be dynamic therefore is best to not hardcode the query names.

## Hierarchy

* **GatsbyMobxStore**

## Index

### Constructors

* [constructor](gatsbymobxstore.md#constructor)

### Properties

* [client](gatsbymobxstore.md#client)
* [data](gatsbymobxstore.md#data)
* [slug](gatsbymobxstore.md#slug)
* [store](gatsbymobxstore.md#store)

### Methods

* [deleteItem](gatsbymobxstore.md#deleteitem)
* [deleteNode](gatsbymobxstore.md#deletenode)
* [getChildrenNodes](gatsbymobxstore.md#getchildrennodes)
* [getKeys](gatsbymobxstore.md#getkeys)
* [getNode](gatsbymobxstore.md#getnode)
* [getPendingItems](gatsbymobxstore.md#private-getpendingitems)
* [hasError](gatsbymobxstore.md#haserror)
* [parseData](gatsbymobxstore.md#private-parsedata)
* [setItem](gatsbymobxstore.md#setitem)
* [setNode](gatsbymobxstore.md#setnode)
* [setNodeProvider](gatsbymobxstore.md#setnodeprovider)
* [updateData](gatsbymobxstore.md#updatedata)

## Constructors

###  constructor

\+ **new GatsbyMobxStore**(`nodeProvider`: [DataSource](../globals.md#datasource)): *[GatsbyMobxStore](gatsbymobxstore.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:68](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeProvider` | [DataSource](../globals.md#datasource) |

**Returns:** *[GatsbyMobxStore](gatsbymobxstore.md)*

## Properties

###  client

• **client**: *[Client](../globals.md#client)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:64](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L64)*

___

###  data

• **data**: *any*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:68](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L68)*

___

###  slug

• **slug**: *string | null* = null

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:66](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L66)*

___

###  store

• **store**: *Map‹string, [GatsbyMobxStoreItem](gatsbymobxstoreitem.md)‹››* = new Map<string, Item>()

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:62](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L62)*

## Methods

###  deleteItem

▸ **deleteItem**(`key`: string, `soft`: boolean): *false | true | void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:162](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L162)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`soft` | boolean | true |

**Returns:** *false | true | void*

___

###  deleteNode

▸ **deleteNode**(`keyPath`: string[]): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:190](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | string[] |

**Returns:** *void*

___

###  getChildrenNodes

▸ **getChildrenNodes**(`keyPath`: string[]): *[string, [GatsbyMobxStoreItem](gatsbymobxstoreitem.md)‹›][]*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:183](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | string[] |

**Returns:** *[string, [GatsbyMobxStoreItem](gatsbymobxstoreitem.md)‹›][]*

___

###  getKeys

▸ **getKeys**(): *string[]*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:148](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L148)*

**Returns:** *string[]*

___

###  getNode

▸ **getNode**(`keyPath`: string[]): *any*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:150](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | string[] |

**Returns:** *any*

___

### `Private` getPendingItems

▸ **getPendingItems**(): *[GatsbyMobxStoreItem](gatsbymobxstoreitem.md)‹›[]*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:76](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L76)*

**Returns:** *[GatsbyMobxStoreItem](gatsbymobxstoreitem.md)‹›[]*

___

###  hasError

▸ **hasError**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:199](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L199)*

**Returns:** *boolean*

___

### `Private` parseData

▸ **parseData**(`gatsbyData`: [GatsbyData](../globals.md#gatsbydata)): *Map‹string, string›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:86](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`gatsbyData` | [GatsbyData](../globals.md#gatsbydata) |

**Returns:** *Map‹string, string›*

___

###  setItem

▸ **setItem**(`key`: string, `item`: Item): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:158](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`item` | Item |

**Returns:** *void*

___

###  setNode

▸ **setNode**(`keyPath`: string[], `value`: object, `event`: [ItemStateEvent](../enums/itemstateevent.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:173](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L173)*

Mobx action saves or updates items to GatsbyMobxStore.store.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`keyPath` | string[] | - |
`value` | object | {} |
`event` | [ItemStateEvent](../enums/itemstateevent.md) | ItemStateEvent.UpdateFromBrowser |

**Returns:** *void*

___

###  setNodeProvider

▸ **setNodeProvider**(`nodeProvider`: [DataSource](../globals.md#datasource)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:81](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeProvider` | [DataSource](../globals.md#datasource) |

**Returns:** *void*

___

###  updateData

▸ **updateData**(`gatsbyData`: [GatsbyData](../globals.md#gatsbydata)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:112](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L112)*

Called at initial page render to initialize our data from the Gatsby Page Query.
Note - we just copy the results to our unobserved data structure unless modifications
have been made, in which case we update the observable store.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gatsbyData` | [GatsbyData](../globals.md#gatsbydata) |   |

**Returns:** *void*
