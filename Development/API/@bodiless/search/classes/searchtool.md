[@bodiless/search](../README.md) › [Globals](../globals.md) › [SearchTool](searchtool.md)

# Class: SearchTool

Search function helper class

- Select search engine for search related operations, default to Lunrjs.
- Build index with given source path and type of content.

## Hierarchy

* **SearchTool**

## Index

### Constructors

* [constructor](searchtool.md#constructor)

### Properties

* [searchEngine](searchtool.md#searchengine)

### Methods

* [filesToDocument](searchtool.md#filestodocument)
* [findSourceFiles](searchtool.md#findsourcefiles)
* [generateIndex](searchtool.md#generateindex)
* [htmlToDocument](searchtool.md#htmltodocument)
* [setSearchEngine](searchtool.md#setsearchengine)

## Constructors

###  constructor

\+ **new SearchTool**(`config?`: [TSearchConf](../globals.md#tsearchconf)): *[SearchTool](searchtool.md)*

*Defined in [packages/bodiless-search/src/SearchTool.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [TSearchConf](../globals.md#tsearchconf) |

**Returns:** *[SearchTool](searchtool.md)*

## Properties

###  searchEngine

• **searchEngine**: *[SearchEngineInterface](../interfaces/searchengineinterface.md)*

*Defined in [packages/bodiless-search/src/SearchTool.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L36)*

## Methods

###  filesToDocument

▸ **filesToDocument**(`filePaths`: string[], `sourcePath`: string): *[TDocument](../globals.md#tdocument)[]*

*Defined in [packages/bodiless-search/src/SearchTool.ts:85](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L85)*

Returns index document created with given files.

**Parameters:**

Name | Type |
------ | ------ |
`filePaths` | string[] |
`sourcePath` | string |

**Returns:** *[TDocument](../globals.md#tdocument)[]*

___

###  findSourceFiles

▸ **findSourceFiles**(`settings`: object): *string[]*

*Defined in [packages/bodiless-search/src/SearchTool.ts:65](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L65)*

**Parameters:**

▪ **settings**: *object*

Name | Type |
------ | ------ |
`sourcePath` | string |
`sourceTypes` | string[] |

**Returns:** *string[]*

___

###  generateIndex

▸ **generateIndex**(`settings`: [TSearchIndexSettings](../globals.md#tsearchindexsettings)): *void*

*Defined in [packages/bodiless-search/src/SearchTool.ts:42](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [TSearchIndexSettings](../globals.md#tsearchindexsettings) |

**Returns:** *void*

___

###  htmlToDocument

▸ **htmlToDocument**(`html`: string, `selector`: string, `exclude`: string): *[TDocument](../globals.md#tdocument)*

*Defined in [packages/bodiless-search/src/SearchTool.ts:117](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L117)*

Create index document from HTML content.

**Parameters:**

Name | Type |
------ | ------ |
`html` | string |
`selector` | string |
`exclude` | string |

**Returns:** *[TDocument](../globals.md#tdocument)*

___

###  setSearchEngine

▸ **setSearchEngine**(`searchEngine`: [SearchEngineInterface](../interfaces/searchengineinterface.md)): *void*

*Defined in [packages/bodiless-search/src/SearchTool.ts:61](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-search/src/SearchTool.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`searchEngine` | [SearchEngineInterface](../interfaces/searchengineinterface.md) |

**Returns:** *void*
