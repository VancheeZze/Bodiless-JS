[@bodiless/components](../README.md) › [Globals](../globals.md) › [BackendSave](backendsave.md)

# Class: BackendSave

## Hierarchy

* **BackendSave**

## Index

### Constructors

* [constructor](backendsave.md#constructor)

### Properties

* [cancelTokenSource](backendsave.md#private-canceltokensource)
* [prefix](backendsave.md#private-prefix)
* [root](backendsave.md#private-root)

### Methods

* [cancel](backendsave.md#cancel)
* [post](backendsave.md#post)
* [saveFile](backendsave.md#savefile)

## Constructors

###  constructor

\+ **new BackendSave**(`baseUrl?`: undefined | string, `prefix?`: undefined | string): *[BackendSave](backendsave.md)*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl?` | undefined &#124; string |
`prefix?` | undefined &#124; string |

**Returns:** *[BackendSave](backendsave.md)*

## Properties

### `Private` cancelTokenSource

• **cancelTokenSource**: *CancelTokenSource*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L34)*

___

### `Private` prefix

• **prefix**: *string*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L30)*

___

### `Private` root

• **root**: *string*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L28)*

## Methods

###  cancel

▸ **cancel**(`reason`: string): *void*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | string |

**Returns:** *void*

___

###  post

▸ **post**‹**T**›(`resourcePath`: string, `data`: any, `config`: any): *Promise‹AxiosResponse‹T››*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L47)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |
`config` | any |

**Returns:** *Promise‹AxiosResponse‹T››*

___

###  saveFile

▸ **saveFile**(`options`: [FileOptions](../globals.md#fileoptions)): *Promise‹AxiosResponse‹[ServerData](../interfaces/serverdata.md)››*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components/src/BackendSave.tsx#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FileOptions](../globals.md#fileoptions) |

**Returns:** *Promise‹AxiosResponse‹[ServerData](../interfaces/serverdata.md)››*
