[@bodiless/search](README.md) › [Globals](globals.md)

# @bodiless/search

## Index

### Classes

* [LunrSearch](classes/lunrsearch.md)
* [SearchClient](classes/searchclient.md)
* [SearchTool](classes/searchtool.md)

### Interfaces

* [SearchClientInterface](interfaces/searchclientinterface.md)
* [SearchEngineInterface](interfaces/searchengineinterface.md)

### Type aliases

* [ResponsiveSearchComponents](globals.md#responsivesearchcomponents)
* [ResponsiveSearchProps](globals.md#responsivesearchprops)
* [SearchComponents](globals.md#searchcomponents)
* [SearchIndex](globals.md#searchindex)
* [SearchProps](globals.md#searchprops)
* [SearchResultComponents](globals.md#searchresultcomponents)
* [SearchResultItemComponents](globals.md#searchresultitemcomponents)
* [SearchResultItemProps](globals.md#searchresultitemprops)
* [SearchResultProps](globals.md#searchresultprops)
* [Suggestion](globals.md#suggestion)
* [SuggestionComponents](globals.md#suggestioncomponents)
* [SuggestionLinkProps](globals.md#suggestionlinkprops)
* [SuggestionListComponents](globals.md#suggestionlistcomponents)
* [SuggestionListProps](globals.md#suggestionlistprops)
* [SuggestionProps](globals.md#suggestionprops)
* [SuggestionSettings](globals.md#suggestionsettings)
* [TDocument](globals.md#tdocument)
* [TField](globals.md#tfield)
* [TIndexConfig](globals.md#tindexconfig)
* [TPreview](globals.md#tpreview)
* [TSearchConf](globals.md#tsearchconf)
* [TSearchIndexSettings](globals.md#tsearchindexsettings)
* [TSearchResult](globals.md#tsearchresult)
* [TSearchResultContextValue](globals.md#tsearchresultcontextvalue)
* [TSearchResults](globals.md#tsearchresults)

### Variables

* [CleanSuggestion](globals.md#const-cleansuggestion)
* [DEFAULT_DISPLAY_COUNT](globals.md#const-default_display_count)
* [ResponsiveSearchBox](globals.md#const-responsivesearchbox)
* [SearchBox](globals.md#const-searchbox)
* [SearchResult](globals.md#const-searchresult)
* [SearchResultItemClean](globals.md#const-searchresultitemclean)
* [Suggestions](globals.md#const-suggestions)
* [config](globals.md#const-config)
* [defaultResultCountMessage](globals.md#const-defaultresultcountmessage)
* [defaultResultEmptyMessage](globals.md#const-defaultresultemptymessage)
* [searchClient](globals.md#const-searchclient)
* [searchPagePath](globals.md#const-searchpagepath)
* [searchResultContext](globals.md#const-searchresultcontext)
* [tool](globals.md#const-tool)
* [withResponsiveDesign](globals.md#const-withresponsivedesign)
* [withoutSuggestionProps](globals.md#const-withoutsuggestionprops)

### Functions

* [BaseSuggestion](globals.md#const-basesuggestion)
* [CleanSuggestions](globals.md#const-cleansuggestions)
* [ResponsiveSearchBoxBase](globals.md#const-responsivesearchboxbase)
* [SearchBoxBase](globals.md#const-searchboxbase)
* [SearchInputBase](globals.md#const-searchinputbase)
* [SearchResultBase](globals.md#const-searchresultbase)
* [SearchResultItemBase](globals.md#const-searchresultitembase)
* [SearchResultProvider](globals.md#const-searchresultprovider)
* [getSearchPagePath](globals.md#const-getsearchpagepath)
* [sortByFrequency](globals.md#const-sortbyfrequency)
* [useSearchResultContext](globals.md#const-usesearchresultcontext)
* [withSearchResult](globals.md#const-withsearchresult)
* [withSuggestionLink](globals.md#const-withsuggestionlink)

### Object literals

* [defaultSearchResults](globals.md#const-defaultsearchresults)
* [defaultSuggestSettings](globals.md#const-defaultsuggestsettings)
* [responsiveSearchComponents](globals.md#const-responsivesearchcomponents)
* [searchComponents](globals.md#const-searchcomponents)
* [searchResultComponents](globals.md#const-searchresultcomponents)
* [searchResultItemComponents](globals.md#const-searchresultitemcomponents)
* [settings](globals.md#const-settings)
* [startComponents](globals.md#const-startcomponents)
* [startSuggestionComponents](globals.md#const-startsuggestioncomponents)

## Type aliases

###  ResponsiveSearchComponents

Ƭ **ResponsiveSearchComponents**: *object & [SearchComponents](globals.md#searchcomponents)*

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L37)*

___

###  ResponsiveSearchProps

Ƭ **ResponsiveSearchProps**: *DesignableComponentsProps‹[ResponsiveSearchComponents](globals.md#responsivesearchcomponents)› & [SearchProps](globals.md#searchprops)*

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L43)*

___

###  SearchComponents

Ƭ **SearchComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L44)*

#### Type declaration:

* **SearchButton**: *ComponentType‹any›*

* **SearchInput**: *ComponentType‹any›*

* **SearchWrapper**: *ComponentType‹StylableProps›*

* **Suggestions**: *ComponentType‹DesignableProps‹[SuggestionListComponents](globals.md#suggestionlistcomponents)› & object›*

___

###  SearchIndex

Ƭ **SearchIndex**: *object*

*Defined in [packages/bodiless-search/src/SearchClient.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/SearchClient.ts#L27)*

#### Type declaration:

* **expires**: *number*

* **idx**: *object*

* **preview**(): *object*

___

###  SearchProps

Ƭ **SearchProps**: *DesignableComponentsProps‹[SearchComponents](globals.md#searchcomponents)› & HTMLProps‹HTMLElement› & object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:122](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L122)*

___

###  SearchResultComponents

Ƭ **SearchResultComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L53)*

#### Type declaration:

* **SearchResultList**: *ComponentType‹any›*

* **SearchResultListItem**: *ComponentType‹any›*

* **SearchResultSummary**: *ComponentType‹StylableProps›*

* **SearchResultWrapper**: *ComponentType‹StylableProps›*

___

###  SearchResultItemComponents

Ƭ **SearchResultItemComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L60)*

#### Type declaration:

* **ItemAnchor**: *ComponentType‹HTMLProps‹HTMLAnchorElement› & StylableProps›*

* **ItemH3**: *ComponentType‹StylableProps›*

* **ItemList**: *ComponentType‹StylableProps›*

* **ItemParagraph**: *ComponentType‹StylableProps›*

___

###  SearchResultItemProps

Ƭ **SearchResultItemProps**: *DesignableComponentsProps‹[SearchResultItemComponents](globals.md#searchresultitemcomponents)› & object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L67)*

___

###  SearchResultProps

Ƭ **SearchResultProps**: *DesignableComponentsProps‹[SearchResultComponents](globals.md#searchresultcomponents)› & HTMLProps‹HTMLElement› & object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:126](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L126)*

___

###  Suggestion

Ƭ **Suggestion**: *object*

*Defined in [packages/bodiless-search/src/types.ts:71](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L71)*

#### Type declaration:

* **count**: *number*

* **text**: *string*

___

###  SuggestionComponents

Ƭ **SuggestionComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L32)*

#### Type declaration:

* **Count**: *ComponentType‹any›*

* **Text**: *ComponentType‹any›*

* **Wrapper**: *ComponentType‹any›*

___

###  SuggestionLinkProps

Ƭ **SuggestionLinkProps**: *object*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L66)*

#### Type declaration:

* **text**: *string*

___

###  SuggestionListComponents

Ƭ **SuggestionListComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:101](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L101)*

#### Type declaration:

* **Item**: *ComponentType‹any›*

* **ItemWrapper**: *ComponentType‹any›*

* **Wrapper**: *ComponentType‹any›*

___

###  SuggestionListProps

Ƭ **SuggestionListProps**: *object & DesignableComponentsProps‹[SuggestionListComponents](globals.md#suggestionlistcomponents)›*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:113](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L113)*

___

###  SuggestionProps

Ƭ **SuggestionProps**: *DesignableComponentsProps‹[SuggestionComponents](globals.md#suggestioncomponents)› & object*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L44)*

___

###  SuggestionSettings

Ƭ **SuggestionSettings**: *object*

*Defined in [packages/bodiless-search/src/SearchClient.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/SearchClient.ts#L33)*

#### Type declaration:

* **sort**(): *function*

  * (`suggestions`: [Suggestion](globals.md#suggestion)[]): *[Suggestion](globals.md#suggestion)[]*

___

###  TDocument

Ƭ **TDocument**: *object*

*Defined in [packages/bodiless-search/src/types.ts:35](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L35)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  TField

Ƭ **TField**: *object*

*Defined in [packages/bodiless-search/src/types.ts:43](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L43)*

#### Type declaration:

* **attributes**? : *undefined | object*

* **name**: *string*

___

###  TIndexConfig

Ƭ **TIndexConfig**: *object*

*Defined in [packages/bodiless-search/src/types.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L51)*

#### Type declaration:

* **fields**: *[TField](globals.md#tfield)[]*

* **ref**: *string*

___

###  TPreview

Ƭ **TPreview**: *object*

*Defined in [packages/bodiless-search/src/types.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L37)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  TSearchConf

Ƭ **TSearchConf**: *object*

*Defined in [packages/bodiless-search/src/types.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L39)*

#### Type declaration:

* **searchEngine**? : *[SearchEngineInterface](interfaces/searchengineinterface.md)*

___

###  TSearchIndexSettings

Ƭ **TSearchIndexSettings**: *object*

*Defined in [packages/bodiless-search/src/types.ts:56](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L56)*

#### Type declaration:

* **indexConfig**: *[TIndexConfig](globals.md#tindexconfig)*

* **sourcePath**: *string*

* **sourceTypes**: *string[]*

* **targetPath**: *string*

___

###  TSearchResult

Ƭ **TSearchResult**: *object*

*Defined in [packages/bodiless-search/src/types.ts:63](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L63)*

#### Type declaration:

* **id**: *number*

* **link**: *string*

* **preview**: *string*

* **ref**: *string*

* **title**: *string*

___

###  TSearchResultContextValue

Ƭ **TSearchResultContextValue**: *object*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L24)*

#### Type declaration:

* **results**: *[TSearchResults](globals.md#tsearchresults)*

* **searchTerm**: *string*

* **setResult**: *React.Dispatch‹React.SetStateAction‹[TSearchResults](globals.md#tsearchresults)››*

* **setSearchTerm**: *React.Dispatch‹React.SetStateAction‹string››*

* **suggest**(): *function*

  * (`term`: string): *[Suggestion](globals.md#suggestion)[]*

___

###  TSearchResults

Ƭ **TSearchResults**: *[TSearchResult](globals.md#tsearchresult)[]*

*Defined in [packages/bodiless-search/src/types.ts:76](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/types.ts#L76)*

## Variables

### `Const` CleanSuggestion

• **CleanSuggestion**: *any* = flow(
  designable(startSuggestionComponents, 'Suggestion'),
  withDesign({
    Wrapper: withoutSuggestionProps,
    Text: withoutSuggestionProps,
    Count: withoutSuggestionProps,
  }),
  withDesign({
    Wrapper: withSuggestionLink,
  }),
)(BaseSuggestion)

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:89](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L89)*

___

### `Const` DEFAULT_DISPLAY_COUNT

• **DEFAULT_DISPLAY_COUNT**: *5* = 5

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L118)*

___

### `Const` ResponsiveSearchBox

• **ResponsiveSearchBox**: *FunctionComponent‹object & HTMLProps‹HTMLElement› & object› | ComponentClass‹object & HTMLProps‹HTMLElement› & object, any›* = asToken(
  designable(responsiveSearchComponents, 'ResponsiveSearchBox'),
  withResponsiveDesign,
)(ResponsiveSearchBoxBase) as ComponentType<SearchProps>

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L79)*

___

### `Const` SearchBox

• **SearchBox**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(
  searchComponents, 'SearchBox',
)(SearchBoxBase)

*Defined in [packages/bodiless-search/src/components/Search.tsx:244](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L244)*

___

### `Const` SearchResult

• **SearchResult**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(
  searchResultComponents, 'SearchResult',
)(SearchResultBase)

*Defined in [packages/bodiless-search/src/components/Search.tsx:247](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L247)*

___

### `Const` SearchResultItemClean

• **SearchResultItemClean**: *any* = flow(
  designable(searchResultItemComponents, 'SearchResultItem'),
)(SearchResultItemBase)

*Defined in [packages/bodiless-search/src/components/Search.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L111)*

___

### `Const` Suggestions

• **Suggestions**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(
  startComponents, 'Suggestions',
)(CleanSuggestions)

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:146](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L146)*

___

### `Const` config

• **config**: *[TSearchConf](globals.md#tsearchconf)*

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L24)*

___

### `Const` defaultResultCountMessage

• **defaultResultCountMessage**: *"Showing %count% result(s)."* = "Showing %count% result(s)."

*Defined in [packages/bodiless-search/src/components/Search.tsx:129](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L129)*

___

### `Const` defaultResultEmptyMessage

• **defaultResultEmptyMessage**: *"No content matches your request, please enter new keywords."* = "No content matches your request, please enter new keywords."

*Defined in [packages/bodiless-search/src/components/Search.tsx:130](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L130)*

___

### `Const` searchClient

• **searchClient**: *[SearchClient](classes/searchclient.md)‹›* = new SearchClient()

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L32)*

___

### `Const` searchPagePath

• **searchPagePath**: *string* = process.env.BODILESS_SEARCH_PAGE || 'search'

*Defined in [packages/bodiless-search/src/components/getSearchPagePath.ts:15](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/getSearchPagePath.ts#L15)*

Copyright © 2021 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

___

### `Const` searchResultContext

• **searchResultContext**: *Context‹object›* = React.createContext<TSearchResultContextValue>(defaultSearchResults)

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L44)*

___

### `Const` tool

• **tool**: *[SearchTool](classes/searchtool.md)‹›* = new SearchTool(config)

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L26)*

___

### `Const` withResponsiveDesign

• **withResponsiveDesign**: *function & object* = withDesign({
  Wrapper: addClasses('lg:hidden'),
  ToggleButton: addClasses('h-full'),
})

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L46)*

___

### `Const` withoutSuggestionProps

• **withoutSuggestionProps**: *function* = withoutProps(['text', 'count', 'position'])

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L87)*

#### Type declaration:

▸ ‹**P**, **Q**›(`C`: ComponentOrTag‹P›): *ComponentWithMeta‹Q›*

**Type parameters:**

▪ **P**: *B*

▪ **Q**: *Omit‹P & A, keyof R›*

**Parameters:**

Name | Type |
------ | ------ |
`C` | ComponentOrTag‹P› |

## Functions

### `Const` BaseSuggestion

▸ **BaseSuggestion**(`props`: [SuggestionProps](globals.md#suggestionprops)): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SuggestionProps](globals.md#suggestionprops) |

**Returns:** *Element‹›*

___

### `Const` CleanSuggestions

▸ **CleanSuggestions**(`props`: [SuggestionListProps](globals.md#suggestionlistprops)): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:120](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SuggestionListProps](globals.md#suggestionlistprops) |

**Returns:** *Element‹›*

___

### `Const` ResponsiveSearchBoxBase

▸ **ResponsiveSearchBoxBase**(`props`: object & object & HTMLProps‹HTMLElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & HTMLProps‹HTMLElement› & object & object |

**Returns:** *Element‹›*

___

### `Const` SearchBoxBase

▸ **SearchBoxBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:165](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L165)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |
`props` | props |

**Returns:** *Element‹›*

___

### `Const` SearchInputBase

▸ **SearchInputBase**(`props`: HTMLProps‹HTMLInputElement› & object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLInputElement› & object |

**Returns:** *Element‹›*

___

### `Const` SearchResultBase

▸ **SearchResultBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:131](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L131)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`components` | object | - |
`resultCountMessage` | string | defaultResultCountMessage |
`resultEmptyMessage` | string | defaultResultEmptyMessage |

**Returns:** *Element‹›*

___

### `Const` SearchResultItemBase

▸ **SearchResultItemBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L91)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |
`props` | props |

**Returns:** *Element‹›*

___

### `Const` SearchResultProvider

▸ **SearchResultProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L46)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` getSearchPagePath

▸ **getSearchPagePath**(`query?`: undefined | string): *string*

*Defined in [packages/bodiless-search/src/components/getSearchPagePath.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/getSearchPagePath.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`query?` | undefined &#124; string |

**Returns:** *string*

___

### `Const` sortByFrequency

▸ **sortByFrequency**(`suggestions`: [Suggestion](globals.md#suggestion)[]): *object[]*

*Defined in [packages/bodiless-search/src/SearchClient.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/SearchClient.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`suggestions` | [Suggestion](globals.md#suggestion)[] |

**Returns:** *object[]*

___

### `Const` useSearchResultContext

▸ **useSearchResultContext**(): *object*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L45)*

**Returns:** *object*

* **results**: *[TSearchResults](globals.md#tsearchresults)*

* **searchTerm**: *string*

* **setResult**: *React.Dispatch‹React.SetStateAction‹[TSearchResults](globals.md#tsearchresults)››*

* **setSearchTerm**: *React.Dispatch‹React.SetStateAction‹string››*

* **suggest**(): *function*

  * (`term`: string): *[Suggestion](globals.md#suggestion)[]*

___

### `Const` withSearchResult

▸ **withSearchResult**(`Component`: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *FunctionComponent‹any›*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *FunctionComponent‹any›*

___

### `Const` withSuggestionLink

▸ **withSuggestionLink**(`Component`: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *WithSuggestionLink*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *WithSuggestionLink*

## Object literals

### `Const` defaultSearchResults

### ▪ **defaultSearchResults**: *object*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L37)*

Search result context

###  results

• **results**: *never[]* = []

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L38)*

###  searchTerm

• **searchTerm**: *string* = ""

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L40)*

###  setResult

▸ **setResult**(): *void*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L39)*

**Returns:** *void*

###  setSearchTerm

▸ **setSearchTerm**(): *string*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L41)*

**Returns:** *string*

###  suggest

▸ **suggest**(): *never[]*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/SearchContextProvider.tsx#L42)*

**Returns:** *never[]*

___

### `Const` defaultSuggestSettings

### ▪ **defaultSuggestSettings**: *object*

*Defined in [packages/bodiless-search/src/SearchClient.ts:40](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/SearchClient.ts#L40)*

###  sort

• **sort**: *[sortByFrequency](globals.md#const-sortbyfrequency)* = sortByFrequency

*Defined in [packages/bodiless-search/src/SearchClient.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/SearchClient.ts#L41)*

___

### `Const` responsiveSearchComponents

### ▪ **responsiveSearchComponents**: *object*

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L51)*

###  ToggleButton

• **ToggleButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Button

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L54)*

###  ToggleIcon

• **ToggleIcon**: *ComponentClass‹HTMLProps‹HTMLElement›, any› & object | FunctionComponent‹HTMLProps‹HTMLElement›› & object* = addClasses('material-icons cursor-pointer align-middle')(I)

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L55)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-search/src/components/ResponsiveSearchBox.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/ResponsiveSearchBox.tsx#L53)*

___

### `Const` searchComponents

### ▪ **searchComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:77](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L77)*

###  SearchButton

• **SearchButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Button

*Defined in [packages/bodiless-search/src/components/Search.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L80)*

###  SearchInput

• **SearchInput**: *FunctionComponent‹HTMLProps‹HTMLInputElement››* = SearchInputBase

*Defined in [packages/bodiless-search/src/components/Search.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L79)*

###  SearchWrapper

• **SearchWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-search/src/components/Search.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L78)*

###  Suggestions

• **Suggestions**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = BaseSuggestions

*Defined in [packages/bodiless-search/src/components/Search.tsx:81](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L81)*

___

### `Const` searchResultComponents

### ▪ **searchResultComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:115](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L115)*

###  SearchResultList

• **SearchResultList**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Ul

*Defined in [packages/bodiless-search/src/components/Search.tsx:117](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L117)*

###  SearchResultListItem

• **SearchResultListItem**: *any* = SearchResultItemClean

*Defined in [packages/bodiless-search/src/components/Search.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L118)*

###  SearchResultSummary

• **SearchResultSummary**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = P

*Defined in [packages/bodiless-search/src/components/Search.tsx:119](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L119)*

###  SearchResultWrapper

• **SearchResultWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-search/src/components/Search.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L116)*

___

### `Const` searchResultItemComponents

### ▪ **searchResultItemComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L84)*

###  ItemAnchor

• **ItemAnchor**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [packages/bodiless-search/src/components/Search.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L87)*

###  ItemH3

• **ItemH3**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = H3

*Defined in [packages/bodiless-search/src/components/Search.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L86)*

###  ItemList

• **ItemList**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Li

*Defined in [packages/bodiless-search/src/components/Search.tsx:85](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L85)*

###  ItemParagraph

• **ItemParagraph**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = P

*Defined in [packages/bodiless-search/src/components/Search.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Search.tsx#L88)*

___

### `Const` settings

### ▪ **settings**: *object*

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L36)*

Search index creation configures

- sourcePath: Valid data source folder.
- sourceType: Specified data file extensions for indexing.
- targetPath: Target folder for saving generated index file.
- indexConfig: Document index configuration.

###  sourcePath

• **sourcePath**: *string* = process.env.BODILESS_SEARCH_SOURCE_PATH || './public'

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L37)*

###  sourceTypes

• **sourceTypes**: *string[]* = process.env.BODILESS_SEARCH_SOURCE_TYPE ? process.env.BODILESS_SEARCH_SOURCE_TYPE.split('|') : ['html', 'htm']

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:38](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L38)*

###  targetPath

• **targetPath**: *string* = process.env.BODILESS_SEARCH_INDEX_PATH ? process.env.BODILESS_SEARCH_INDEX_PATH : './public/default.idx'

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L39)*

▪ **indexConfig**: *object*

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:40](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L40)*

* **fields**: *(object | object)[]* = [
      { name: 'title', attributes: { boost: 2 } },
      { name: 'body' },
    ]

* **ref**: *string* = "id"

___

### `Const` startComponents

### ▪ **startComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:107](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L107)*

###  Item

• **Item**: *any* = CleanSuggestion

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:110](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L110)*

###  ItemWrapper

• **ItemWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Li

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:109](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L109)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Ul

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L108)*

___

### `Const` startSuggestionComponents

### ▪ **startSuggestionComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L38)*

###  Count

• **Count**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Span

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L41)*

###  Text

• **Text**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Span

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L40)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [packages/bodiless-search/src/components/Suggestions.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-search/src/components/Suggestions.tsx#L39)*
