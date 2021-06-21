[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [BackendClient](backendclient.md)

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

* [amend](backendclient.md#amend)
* [commit](backendclient.md#commit)
* [delete](backendclient.md#delete)
* [deletePath](backendclient.md#deletepath)
* [get](backendclient.md#get)
* [getChanges](backendclient.md#getchanges)
* [getConflicts](backendclient.md#getconflicts)
* [getLatestCommits](backendclient.md#getlatestcommits)
* [getPath](backendclient.md#getpath)
* [getSetList](backendclient.md#getsetlist)
* [log](backendclient.md#log)
* [mergeMaster](backendclient.md#mergemaster)
* [post](backendclient.md#post)
* [pull](backendclient.md#pull)
* [reset](backendclient.md#reset)
* [saveFile](backendclient.md#savefile)
* [savePage](backendclient.md#savepage)
* [savePath](backendclient.md#savepath)
* [setCurrent](backendclient.md#setcurrent)

## Constructors

###  constructor

\+ **new BackendClient**(`backendClientConf?`: [BackendClientConf](../globals.md#backendclientconf)): *[BackendClient](backendclient.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`backendClientConf?` | [BackendClientConf](../globals.md#backendclientconf) |

**Returns:** *[BackendClient](backendclient.md)*

## Properties

### `Private` prefix

• **prefix**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L28)*

___

### `Private` root

• **root**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L26)*

## Methods

###  amend

▸ **amend**(`paths`: string[], `files`: string[]): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:124](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`files` | string[] |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  commit

▸ **commit**(`message`: string, `directories`: string[], `paths`: string[], `files`: string[], `author?`: undefined | string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:92](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`directories` | string[] |
`paths` | string[] |
`files` | string[] |
`author?` | undefined &#124; string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  delete

▸ **delete**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:53](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  deletePath

▸ **deletePath**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:62](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  get

▸ **get**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getChanges

▸ **getChanges**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:142](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L142)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getConflicts

▸ **getConflicts**(`target?`: undefined | string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:146](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`target?` | undefined &#124; string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getLatestCommits

▸ **getLatestCommits**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:112](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L112)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getPath

▸ **getPath**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:72](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getSetList

▸ **getSetList**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:138](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L138)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  log

▸ **log**(`data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:67](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  mergeMaster

▸ **mergeMaster**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:151](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L151)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  post

▸ **post**(`resourcePath`: string, `data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:49](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  pull

▸ **pull**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:116](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L116)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  reset

▸ **reset**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:120](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L120)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  saveFile

▸ **saveFile**(`file`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:77](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  savePage

▸ **savePage**(`path$`: string, `template?`: undefined | string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:84](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`path$` | string |
`template?` | undefined &#124; string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  savePath

▸ **savePath**(`resourcePath`: string, `data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:57](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  setCurrent

▸ **setCurrent**(`name`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:134](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹AxiosResponse‹any››*
