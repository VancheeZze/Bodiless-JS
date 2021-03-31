[@bodiless/search](../README.md) › [Globals](../globals.md) › [SearchClient](searchclient.md)

# Class: SearchClient

Search client wraps search engine for in-browser search features.

- Load index from json.
- Perform search query.

## Hierarchy

* **SearchClient**

## Implements

* [SearchClientInterface](../interfaces/searchclientinterface.md)

## Index

### Constructors

* [constructor](searchclient.md#constructor)

### Properties

* [searchEngine](searchclient.md#searchengine)

### Methods

* [filter](searchclient.md#private-filter)
* [getLocalIndex](searchclient.md#getlocalindex)
* [loadIndex](searchclient.md#loadindex)
* [loadPreviews](searchclient.md#loadpreviews)
* [search](searchclient.md#search)
* [setSearchEngine](searchclient.md#setsearchengine)
* [suggest](searchclient.md#suggest)
* [validateIndex](searchclient.md#validateindex)

## Constructors

###  constructor

\+ **new SearchClient**(`config?`: [TSearchConf](../globals.md#tsearchconf)): *[SearchClient](searchclient.md)*

*Defined in [packages/bodiless-search/src/SearchClient.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [TSearchConf](../globals.md#tsearchconf) |

**Returns:** *[SearchClient](searchclient.md)*

## Properties

###  searchEngine

• **searchEngine**: *[SearchEngineInterface](../interfaces/searchengineinterface.md)*

*Defined in [packages/bodiless-search/src/SearchClient.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L51)*

## Methods

### `Private` filter

▸ **filter**(`qs`: string): *string*

*Defined in [packages/bodiless-search/src/SearchClient.ts:84](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`qs` | string |

**Returns:** *string*

___

###  getLocalIndex

▸ **getLocalIndex**(): *[SearchIndex](../globals.md#searchindex) | false*

*Defined in [packages/bodiless-search/src/SearchClient.ts:96](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L96)*

**Returns:** *[SearchIndex](../globals.md#searchindex) | false*

___

###  loadIndex

▸ **loadIndex**(): *Promise‹void›*

*Defined in [packages/bodiless-search/src/SearchClient.ts:105](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L105)*

**Returns:** *Promise‹void›*

___

###  loadPreviews

▸ **loadPreviews**(`previews`: object): *void*

*Defined in [packages/bodiless-search/src/SearchClient.ts:122](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`previews` | object |

**Returns:** *void*

___

###  search

▸ **search**(`queryString`: string): *[TSearchResults](../globals.md#tsearchresults)*

*Defined in [packages/bodiless-search/src/SearchClient.ts:57](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

**Returns:** *[TSearchResults](../globals.md#tsearchresults)*

___

###  setSearchEngine

▸ **setSearchEngine**(`searchEngine`: [SearchEngineInterface](../interfaces/searchengineinterface.md)): *void*

*Defined in [packages/bodiless-search/src/SearchClient.ts:126](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`searchEngine` | [SearchEngineInterface](../interfaces/searchengineinterface.md) |

**Returns:** *void*

___

###  suggest

▸ **suggest**(`queryString`: string, `settings`: [SuggestionSettings](../globals.md#suggestionsettings)): *object[]*

*Defined in [packages/bodiless-search/src/SearchClient.ts:62](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L62)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`queryString` | string | - |
`settings` | [SuggestionSettings](../globals.md#suggestionsettings) | defaultSuggestSettings |

**Returns:** *object[]*

___

###  validateIndex

▸ **validateIndex**(`index`: [SearchIndex](../globals.md#searchindex) | false): *boolean*

*Defined in [packages/bodiless-search/src/SearchClient.ts:86](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-search/src/SearchClient.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | [SearchIndex](../globals.md#searchindex) &#124; false |

**Returns:** *boolean*
