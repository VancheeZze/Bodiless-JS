[@bodiless/layouts](../README.md) › [Globals](../globals.md) › [BackendClient](backendclient.md)

# Class: BackendClient

## Hierarchy

* **BackendClient**

## Index

### Constructors

* [constructor](backendclient.md#constructor)

### Properties

* [prefix](backendclient.md#private-prefix)
* [root](backendclient.md#private-root)

### Methods

* [get](backendclient.md#get)
* [post](backendclient.md#post)
* [saveFile](backendclient.md#savefile)

## Constructors

###  constructor

\+ **new BackendClient**(`baseUrl?`: undefined | string, `prefix?`: undefined | string): *[BackendClient](backendclient.md)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/ad1d8ddb/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl?` | undefined &#124; string |
`prefix?` | undefined &#124; string |

**Returns:** *[BackendClient](backendclient.md)*

## Properties

### `Private` prefix

• **prefix**: *string*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/ad1d8ddb/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L22)*

___

### `Private` root

• **root**: *string*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:20](https://github.com/VancheeZze/Bodiless-JS/blob/ad1d8ddb/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L20)*

## Methods

###  get

▸ **get**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:35](https://github.com/VancheeZze/Bodiless-JS/blob/ad1d8ddb/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  post

▸ **post**(`resourcePath`: string, `data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/ad1d8ddb/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  saveFile

▸ **saveFile**(`file`: File): *Promise‹AxiosResponse‹any››*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:43](https://github.com/VancheeZze/Bodiless-JS/blob/ad1d8ddb/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | File |

**Returns:** *Promise‹AxiosResponse‹any››*
