[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [GatsbyMobxStoreItem](gatsbymobxstoreitem.md)

# Class: GatsbyMobxStoreItem

## Hierarchy

* **GatsbyMobxStoreItem**

## Index

### Constructors

* [constructor](gatsbymobxstoreitem.md#constructor)

### Properties

* [data](gatsbymobxstoreitem.md#data)
* [hasFlushingError](gatsbymobxstoreitem.md#hasflushingerror)
* [isDeleted](gatsbymobxstoreitem.md#isdeleted)
* [key](gatsbymobxstoreitem.md#key)
* [lockTimeout](gatsbymobxstoreitem.md#optional-locktimeout)
* [requestDelay](gatsbymobxstoreitem.md#requestdelay)
* [requestTimeout](gatsbymobxstoreitem.md#optional-requesttimeout)
* [state](gatsbymobxstoreitem.md#state)
* [store](gatsbymobxstoreitem.md#store)

### Methods

* [delete](gatsbymobxstoreitem.md#delete)
* [getResoucePath](gatsbymobxstoreitem.md#private-getresoucepath)
* [isClean](gatsbymobxstoreitem.md#isclean)
* [isPending](gatsbymobxstoreitem.md#ispending)
* [request](gatsbymobxstoreitem.md#private-request)
* [scheduleRequest](gatsbymobxstoreitem.md#private-schedulerequest)
* [setData](gatsbymobxstoreitem.md#private-setdata)
* [setLockTimeout](gatsbymobxstoreitem.md#private-setlocktimeout)
* [setState](gatsbymobxstoreitem.md#private-setstate)
* [shouldAccept](gatsbymobxstoreitem.md#private-shouldaccept)
* [shouldSave](gatsbymobxstoreitem.md#private-shouldsave)
* [update](gatsbymobxstoreitem.md#update)
* [updateState](gatsbymobxstoreitem.md#private-updatestate)

## Constructors

###  constructor

\+ **new GatsbyMobxStoreItem**(`store`: [GatsbyMobxStore](gatsbymobxstore.md), `key`: string, `initialData`: object, `event`: [ItemStateEvent](../enums/itemstateevent.md)): *[GatsbyMobxStoreItem](gatsbymobxstoreitem.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:164](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L164)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`store` | [GatsbyMobxStore](gatsbymobxstore.md) | - |
`key` | string | - |
`initialData` | object | {} |
`event` | [ItemStateEvent](../enums/itemstateevent.md) | ItemStateEvent.UpdateFromBrowser |

**Returns:** *[GatsbyMobxStoreItem](gatsbymobxstoreitem.md)*

## Properties

###  data

• **data**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L34)*

#### Type declaration:

___

###  hasFlushingError

• **hasFlushingError**: *boolean* = false

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:40](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L40)*

___

###  isDeleted

• **isDeleted**: *boolean* = false

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:38](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L38)*

___

###  key

• **key**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:42](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L42)*

___

### `Optional` lockTimeout

• **lockTimeout**? : *ReturnType‹typeof setTimeout›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:46](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L46)*

___

###  requestDelay

• **requestDelay**: *number* = DEFAULT_REQUEST_DELAY

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:50](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L50)*

___

### `Optional` requestTimeout

• **requestTimeout**? : *ReturnType‹typeof setTimeout›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:48](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L48)*

___

###  state

• **state**: *[ItemState](../enums/itemstate.md)* = ItemState.Clean

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L36)*

___

###  store

• **store**: *[GatsbyMobxStore](gatsbymobxstore.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L44)*

## Methods

###  delete

▸ **delete**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:195](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L195)*

**Returns:** *void*

___

### `Private` getResoucePath

▸ **getResoucePath**(): *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:119](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L119)*

**Returns:** *string*

___

###  isClean

▸ **isClean**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:204](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L204)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:200](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L200)*

**Returns:** *boolean*

___

### `Private` request

▸ **request**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:135](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L135)*

**Returns:** *void*

___

### `Private` scheduleRequest

▸ **scheduleRequest**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:150](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L150)*

**Returns:** *void*

___

### `Private` setData

▸ **setData**(`data`: any): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:67](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

### `Private` setLockTimeout

▸ **setLockTimeout**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:157](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L157)*

**Returns:** *void*

___

### `Private` setState

▸ **setState**(`state`: [ItemState](../enums/itemstate.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:72](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [ItemState](../enums/itemstate.md) |

**Returns:** *void*

___

### `Private` shouldAccept

▸ **shouldAccept**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:52](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L52)*

**Returns:** *boolean*

___

### `Private` shouldSave

▸ **shouldSave**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:58](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L58)*

**Returns:** *boolean*

___

###  update

▸ **update**(`data`: object, `event`: [ItemStateEvent](../enums/itemstateevent.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:178](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L178)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | object | {} |
`event` | [ItemStateEvent](../enums/itemstateevent.md) | ItemStateEvent.UpdateFromBrowser |

**Returns:** *void*

___

### `Private` updateState

▸ **updateState**(`event`: [ItemStateEvent](../enums/itemstateevent.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:76](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [ItemStateEvent](../enums/itemstateevent.md) |

**Returns:** *void*
