[@bodiless/filtering](README.md) › [Globals](globals.md)

# @bodiless/filtering

## Index

### Classes

* [Tag](classes/tag.md)

### Type aliases

* [CategoryListContextType](globals.md#categorylistcontexttype)
* [DefaultTagProps](globals.md#defaulttagprops)
* [FBGContextOptions](globals.md#fbgcontextoptions)
* [FBGContextType](globals.md#fbgcontexttype)
* [FilterByGroupBaseProps](globals.md#filterbygroupbaseprops)
* [FilterByGroupComponents](globals.md#filterbygroupcomponents)
* [FilterByGroupProps](globals.md#filterbygroupprops)
* [FilterByGroupStoreSettings](globals.md#filterbygroupstoresettings)
* [FilterComponents](globals.md#filtercomponents)
* [FilterProps](globals.md#filterprops)
* [NodeTagType](globals.md#nodetagtype)
* [RegisterSuggestionsProps](globals.md#registersuggestionsprops)
* [SuggestionsRefType](globals.md#suggestionsreftype)
* [TagTitleComponents](globals.md#tagtitlecomponents)
* [TagTitleProps](globals.md#tagtitleprops)
* [TagType](globals.md#tagtype)
* [ToggleByTagsProps](globals.md#togglebytagsprops)

### Variables

* [CategoryListContext](globals.md#const-categorylistcontext)
* [FilterByGroupClean](globals.md#const-filterbygroupclean)
* [FilterByGroupContext](globals.md#const-filterbygroupcontext)
* [FilterClean](globals.md#const-filterclean)
* [TAG_ANY_KEY](globals.md#const-tag_any_key)
* [TAG_ANY_LABEL](globals.md#const-tag_any_label)
* [TagTitle](globals.md#const-tagtitle)
* [TestableFilterByGroup](globals.md#const-testablefilterbygroup)
* [asExpandedOnDesktopBody](globals.md#const-asexpandedondesktopbody)
* [asFilter](globals.md#const-asfilter)
* [asResponsiveAccordionTitle](globals.md#const-asresponsiveaccordiontitle)
* [asResponsiveFilter](globals.md#const-asresponsivefilter)
* [asResponsiveFilterByGroup](globals.md#const-asresponsivefilterbygroup)
* [asTestableFilterByGroup](globals.md#const-astestablefilterbygroup)
* [ifTagsNotSelected](globals.md#const-iftagsnotselected)
* [ifTagsSelected](globals.md#const-iftagsselected)
* [withAnyTag](globals.md#const-withanytag)
* [withFilterByTags](globals.md#const-withfilterbytags)
* [withMultipleAllowedTags](globals.md#const-withmultipleallowedtags)
* [withSingleAllowedTag](globals.md#const-withsingleallowedtag)

### Functions

* [FilterByGroupBase](globals.md#const-filterbygroupbase)
* [FilterByGroupProvider](globals.md#const-filterbygroupprovider)
* [TagTitleBase](globals.md#const-tagtitlebase)
* [asFilterableByGroup](globals.md#const-asfilterablebygroup)
* [readTagsFromQueryParams](globals.md#const-readtagsfromqueryparams)
* [updateUrlQueryParams](globals.md#const-updateurlqueryparams)
* [useCategoryListContext](globals.md#const-usecategorylistcontext)
* [useFilterByGroupContext](globals.md#const-usefilterbygroupcontext)
* [useFilterByGroupStore](globals.md#const-usefilterbygroupstore)
* [useIsFilterTagSelected](globals.md#const-useisfiltertagselected)
* [useRefineButtonProps](globals.md#const-userefinebuttonprops)
* [useTagsAccessors](globals.md#const-usetagsaccessors)
* [useToggleByTags](globals.md#const-usetogglebytags)
* [withCategoryListContextProvider](globals.md#const-withcategorylistcontextprovider)
* [withFBGSuggestions](globals.md#const-withfbgsuggestions)
* [withFilterByGroupContext](globals.md#const-withfilterbygroupcontext)
* [withFilterDesignTransformer](globals.md#const-withfilterdesigntransformer)
* [withTagProps](globals.md#const-withtagprops)
* [withUnselectOnDelete](globals.md#const-withunselectondelete)

### Object literals

* [FilterByGroupComponentsStart](globals.md#const-filterbygroupcomponentsstart)
* [tagTitleComponentsStart](globals.md#const-tagtitlecomponentsstart)

## Type aliases

###  CategoryListContextType

Ƭ **CategoryListContextType**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx#L22)*

#### Type declaration:

* **categoryId**? : *undefined | string*

___

###  DefaultTagProps

Ƭ **DefaultTagProps**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:120](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L120)*

#### Type declaration:

* **getSuggestions**(): *function*

  * (): *[TagType](globals.md#tagtype)[]*

* **registerSuggestions**(): *function*

  * (`tags`: [TagType](globals.md#tagtype)[]): *void*

* **selectedTags**: *[TagType](globals.md#tagtype)[]*

___

###  FBGContextOptions

Ƭ **FBGContextOptions**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L65)*

#### Type declaration:

* **multipleAllowedTags**? : *undefined | false | true*

* **suggestions**? : *[TagType](globals.md#tagtype)[]*

___

###  FBGContextType

Ƭ **FBGContextType**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L79)*

#### Type declaration:

* **clearSelectedTags**(): *function*

  * (): *void*

* **getSelectedTags**(): *function*

  * (): *[TagType](globals.md#tagtype)[]*

* **getSuggestions**(): *function*

  * (): *[TagType](globals.md#tagtype)[]*

* **isTagSelected**(): *function*

  * (`tag`: [TagType](globals.md#tagtype)): *boolean*

* **multipleAllowedTags**: *boolean*

* **selectTag**(): *function*

  * (`tag`: [TagType](globals.md#tagtype)): *void*

* **unSelectTag**(): *function*

  * (`tag`: [TagType](globals.md#tagtype)): *void*

* **useRegisterSuggestions**(): *function*

  * (): *function*

    * (`tags`: [TagType](globals.md#tagtype)[]): *void*

___

###  FilterByGroupBaseProps

Ƭ **FilterByGroupBaseProps**: *Omit‹[FilterByGroupProps](globals.md#filterbygroupprops), "design"› & DesignableComponentsProps‹[FilterByGroupComponents](globals.md#filterbygroupcomponents)›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L36)*

___

###  FilterByGroupComponents

Ƭ **FilterByGroupComponents**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L26)*

#### Type declaration:

* **ContentWrapper**: *ComponentType‹any›*

* **Filter**: *ComponentType‹any›*

* **FilterBody**: *ComponentType‹any›*

* **FilterHeader**: *ComponentType‹any›*

* **FilterTitle**: *ComponentType‹any›*

* **FilterWrapper**: *ComponentType‹any›*

* **RefineButton**: *ComponentType‹any›*

* **ResetButton**: *ComponentType‹any›*

* **Wrapper**: *ComponentType‹any›*

___

###  FilterByGroupProps

Ƭ **FilterByGroupProps**: *object & DesignableProps‹[FilterByGroupComponents](globals.md#filterbygroupcomponents)›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L52)*

___

###  FilterByGroupStoreSettings

Ƭ **FilterByGroupStoreSettings**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts#L37)*

#### Type declaration:

* **multipleAllowedTags**? : *undefined | false | true*

___

###  FilterComponents

Ƭ **FilterComponents**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L38)*

#### Type declaration:

* **CategoryList**: *ComponentType‹StylableProps & ListProps›*

* **TagList**: *ComponentType‹StylableProps & ListProps›*

___

###  FilterProps

Ƭ **FilterProps**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L50)*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:203](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L203)*

#### Type declaration:

* **design**(): *object*

  * **CategoryList**: *HOC*

  * **TagList**: *HOC*

___

###  NodeTagType

Ƭ **NodeTagType**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L61)*

#### Type declaration:

* **tags**: *[TagType](globals.md#tagtype)[]*

___

###  RegisterSuggestionsProps

Ƭ **RegisterSuggestionsProps**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L75)*

#### Type declaration:

* **registerSuggestions**(): *function*

  * (`tags`: [TagType](globals.md#tagtype)[]): *undefined*

___

###  SuggestionsRefType

Ƭ **SuggestionsRefType**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L70)*

#### Type declaration:

* **id**: *string*

* **tags**: *[TagType](globals.md#tagtype)[]*

___

###  TagTitleComponents

Ƭ **TagTitleComponents**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L43)*

#### Type declaration:

* **FilterGroupItemInput**: *ComponentType‹StylableProps & HTMLProps‹HTMLInputElement››*

* **FilterGroupItemLabel**: *ComponentType‹StylableProps & HTMLProps‹HTMLLabelElement››*

* **FilterGroupItemPlaceholder**: *ComponentType‹StylableProps & HTMLProps‹HTMLLabelElement››*

* **FilterInputWrapper**: *ComponentType‹StylableProps›*

___

###  TagTitleProps

Ƭ **TagTitleProps**: *object & DesignableComponentsProps‹[TagTitleComponents](globals.md#tagtitlecomponents)›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L57)*

___

###  TagType

Ƭ **TagType**: *Omit‹BaseTagType, "id"› & object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/types.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/types.tsx#L20)*

___

###  ToggleByTagsProps

Ƭ **ToggleByTagsProps**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx#L26)*

#### Type declaration:

* **selectedTags**: *[TagType](globals.md#tagtype)[]*

## Variables

### `Const` CategoryListContext

• **CategoryListContext**: *Context‹object›* = createContext<CategoryListContextType>({})

*Defined in [packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx#L26)*

___

### `Const` FilterByGroupClean

• **FilterByGroupClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asToken(
  withoutProps(['suggestions']),
  designable(FilterByGroupComponentsStart, 'FilterByGroup'),
  asResponsiveFilterByGroup,
  withFilterByGroupContext,
)(FilterByGroupBase)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L84)*

___

### `Const` FilterByGroupContext

• **FilterByGroupContext**: *Context‹object›* = createContext<FBGContextType>({
  getSuggestions: () => [],
  useRegisterSuggestions: () => () => undefined,
  selectTag: () => { },
  getSelectedTags: () => [],
  unSelectTag: () => { },
  isTagSelected: () => false,
  clearSelectedTags: () => { },
  multipleAllowedTags: false,
})

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L35)*

___

### `Const` FilterClean

• **FilterClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asToken(
  asFilter,
  withFilterDesignTransformer as HOC,
  withNodeKey('filter'),
)('ul')

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:249](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L249)*

___

### `Const` TAG_ANY_KEY

• **TAG_ANY_KEY**: *"any"* = "any"

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts#L17)*

___

### `Const` TAG_ANY_LABEL

• **TAG_ANY_LABEL**: *"- Any -"* = "- Any -"

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterModel.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterModel.tsx#L24)*

___

### `Const` TagTitle

• **TagTitle**: *any* = flow(
  withoutProps([
    'componentData',
    'onContextMenu',
    'getSuggestions',
    'allowMultipleTags',
    'noSuggestionsText',
    'seeAllText',
    'formTitle',
    'formBodyText',
    'selectedTags',
    'registerSuggestions',
  ]),
  ifEditable(
    withTagButton(() => ({
      groupMerge: 'merge-up',
      label: 'Name',
    })),
    withContextActivator('onClick'),
    withLocalContextMenu,
  ),
  ifReadOnly(withoutProps(['setComponentData'])),
  withTagProps({
    allowMultipleTags: false,
    placeholder: 'Add or Create',
    formTitle: 'Group Membership',
    formBodyText: 'Select from available groups:',
    seeAllText: 'View All Groups',
    noSuggestionsText: 'No matching groups found.',
  }),
  withNodeDataHandlers({ tags: [] }),
  withNode,
  withNodeKey('tag'),
  designable(tagTitleComponentsStart, 'TagTitle'),
)(TagTitleBase)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:125](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L125)*

___

### `Const` TestableFilterByGroup

• **TestableFilterByGroup**: *any* = flow(asTestableFilterByGroup)(FilterByGroupClean)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupTestable.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupTestable.tsx#L47)*

___

### `Const` asExpandedOnDesktopBody

• **asExpandedOnDesktopBody**: *function & object* = asToken(
  asAccordionBody,
  withDesign({
    Wrapper: addClasses('lg:block'),
  }),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/token.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/token.tsx#L41)*

___

### `Const` asFilter

• **asFilter**: *function & object* = asToken(
  asBodilessList(undefined, undefined, () => ({ groupLabel: 'Category' })),
  withDesign({
    Title: asToken(
      replaceWith(H3),
      asEditable('category_name', 'Category Name'),
    ),
    Item: asToken(
      stylable,
      withCategoryListContextProvider,
    ),
    Wrapper: stylable,
  }),
  withSubLists(1)(
    asToken(
      asSubList(() => ({ groupLabel: 'Group' })),
      withDeleteNodeOnUnwrap('sublist'),
      withUnselectOnDelete,
      withDesign({
        Title: startWith(TagTitle),
        Wrapper: flow(
          stylable,
        ),
      }),
    ),
  ),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:175](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L175)*

___

### `Const` asResponsiveAccordionTitle

• **asResponsiveAccordionTitle**: *function & object* = asToken(
  asAccordionTitle,
  withDesign({
    Icon: addClasses('lg:hidden'),
  }),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/token.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/token.tsx#L34)*

___

### `Const` asResponsiveFilter

• **asResponsiveFilter**: *function & object* = ifViewportIsNot(['lg', 'xl', '2xl'])(
  withDesign({
    Item: asToken(
      asAccordionWrapper,
      withDesign({
        SubList: withDesign({
          Wrapper: asAccordionBody,
        }),
      }),
    ),
    Title: asAccordionTitle,
  }),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:161](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L161)*

___

### `Const` asResponsiveFilterByGroup

• **asResponsiveFilterByGroup**: *function & object* = asToken(
  ifViewportIsNot(['lg', 'xl', '2xl'])(
    withDesign({
      FilterWrapper: asAccordionWrapper,
      FilterTitle: asResponsiveAccordionTitle,
      FilterBody: asExpandedOnDesktopBody,
      ResetButton: asExpandedOnDesktopBody,
      RefineButton: addPropsIf(() => true)(useRefineButtonProps),
    }),
  ),
  ifViewportIs(['lg', 'xl', '2xl'])(
    withDesign({
      RefineButton: replaceWith(() => null),
    }),
  ),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/token.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/token.tsx#L56)*

___

### `Const` asTestableFilterByGroup

• **asTestableFilterByGroup**: *function & object* = withDesign({
  Wrapper: addProps({ 'data-filter-by-group': 'wrapper' }),
  FilterWrapper: addProps({ 'data-filter-by-group': 'filter-wrapper' }),
  FilterHeader: addProps({ 'data-filter-by-group': 'filter-header' }),
  FilterTitle: addProps({ 'data-filter-by-group': 'filter-title' }),
  ContentWrapper: addProps({ 'data-filter-by-group': 'content-wrapper' }),
  ResetButton: addProps({ 'aria-label': 'Reset Button' }),
  Filter: withDesign({
    TagList: withDesign({
      Title: flow(
        withDesign({
          FilterInputWrapper: addProps({ 'data-filter-by-group': 'filter-input-wrapper' }),
          FilterGroupItemInput: addProps({ 'aria-label': 'Radio Button Select' }),
          FilterGroupItemPlaceholder: addProps({ 'data-filter-by-group': 'filter-tag-placeholder' }),
          FilterGroupItemLabel: addProps({ 'data-filter-by-group': 'filter-tag-label' }),
        }),
      ),
      Wrapper: addProps({ 'data-filter-by-group': 'filter-group-wrapper' }),
    }),
    CategoryList: withDesign({
      Title: addProps({ 'data-filter-by-group': 'filter-category' }),
    }),
  }),
})

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupTestable.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupTestable.tsx#L22)*

___

### `Const` ifTagsNotSelected

• **ifTagsNotSelected**: *function* = ifToggledOff(useToggleByTags)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx#L73)*

#### Type declaration:

▸ ‹**B1**, **A1**, **R1**, **A2**, **R2**, **A3**, **R3**, **A4**, **R4**, **A5**, **R5**, **A6**, **R6**, **A7**, **R7**, **A8**, **R8**, **A9**, **R9**›(`t1?`: TokenDef‹B1, A1, R1›, `t2?`: TokenDef‹object, A2, R2›, `t3?`: TokenDef‹object, A3, R3›, `t4?`: TokenDef‹object, A4, R4›, `t5?`: TokenDef‹object, A5, R5›, `t6?`: TokenDef‹object, A6, R6›, `t7?`: TokenDef‹object, A7, R7›, `t8?`: TokenDef‹object, A8, R8›, `t9?`: TokenDef‹object, A9, R9›, ...`t`: TokenDef‹any, any, any›[]): *Token‹B1, A & A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9, R1 & R2 & R3 & R4 & R5 & R6 & R7 & R8 & R9›*

**Type parameters:**

▪ **B1**

▪ **A1**

▪ **R1**

▪ **A2**

▪ **R2**

▪ **A3**

▪ **R3**

▪ **A4**

▪ **R4**

▪ **A5**

▪ **R5**

▪ **A6**

▪ **R6**

▪ **A7**

▪ **R7**

▪ **A8**

▪ **R8**

▪ **A9**

▪ **R9**

**Parameters:**

Name | Type |
------ | ------ |
`t1?` | TokenDef‹B1, A1, R1› |
`t2?` | TokenDef‹object, A2, R2› |
`t3?` | TokenDef‹object, A3, R3› |
`t4?` | TokenDef‹object, A4, R4› |
`t5?` | TokenDef‹object, A5, R5› |
`t6?` | TokenDef‹object, A6, R6› |
`t7?` | TokenDef‹object, A7, R7› |
`t8?` | TokenDef‹object, A8, R8› |
`t9?` | TokenDef‹object, A9, R9› |
`...t` | TokenDef‹any, any, any›[] |

___

### `Const` ifTagsSelected

• **ifTagsSelected**: *function* = ifToggledOn(useToggleByTags)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx#L72)*

#### Type declaration:

▸ ‹**B1**, **A1**, **R1**, **A2**, **R2**, **A3**, **R3**, **A4**, **R4**, **A5**, **R5**, **A6**, **R6**, **A7**, **R7**, **A8**, **R8**, **A9**, **R9**›(`t1?`: TokenDef‹B1, A1, R1›, `t2?`: TokenDef‹object, A2, R2›, `t3?`: TokenDef‹object, A3, R3›, `t4?`: TokenDef‹object, A4, R4›, `t5?`: TokenDef‹object, A5, R5›, `t6?`: TokenDef‹object, A6, R6›, `t7?`: TokenDef‹object, A7, R7›, `t8?`: TokenDef‹object, A8, R8›, `t9?`: TokenDef‹object, A9, R9›, ...`t`: TokenDef‹any, any, any›[]): *Token‹B1, A & A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9, R1 & R2 & R3 & R4 & R5 & R6 & R7 & R8 & R9›*

**Type parameters:**

▪ **B1**

▪ **A1**

▪ **R1**

▪ **A2**

▪ **R2**

▪ **A3**

▪ **R3**

▪ **A4**

▪ **R4**

▪ **A5**

▪ **R5**

▪ **A6**

▪ **R6**

▪ **A7**

▪ **R7**

▪ **A8**

▪ **R8**

▪ **A9**

▪ **R9**

**Parameters:**

Name | Type |
------ | ------ |
`t1?` | TokenDef‹B1, A1, R1› |
`t2?` | TokenDef‹object, A2, R2› |
`t3?` | TokenDef‹object, A3, R3› |
`t4?` | TokenDef‹object, A4, R4› |
`t5?` | TokenDef‹object, A5, R5› |
`t6?` | TokenDef‹object, A6, R6› |
`t7?` | TokenDef‹object, A7, R7› |
`t8?` | TokenDef‹object, A8, R8› |
`t9?` | TokenDef‹object, A9, R9› |
`...t` | TokenDef‹any, any, any›[] |

___

### `Const` withAnyTag

• **withAnyTag**: *function & object* = withDesign({
  TagList: addProps({
    prependItems: [TAG_ANY_KEY],
  }),
})

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.token.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.token.ts#L23)*

___

### `Const` withFilterByTags

• **withFilterByTags**: *Enhancer‹[ToggleByTagsProps](globals.md#togglebytagsprops)›* = flowRight(
  ifTagsNotSelected(replaceWith(() => null)),
  withoutProps(['selectedTags']),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx#L75)*

___

### `Const` withMultipleAllowedTags

• **withMultipleAllowedTags**: *function & object* = asToken(
  addProps({
    multipleAllowedTags: true,
  }),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/token.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/token.tsx#L73)*

___

### `Const` withSingleAllowedTag

• **withSingleAllowedTag**: *function & object* = asToken(
  addProps({
    multipleAllowedTags: false,
  }),
  withDesign({
    Filter: asToken(
      withAnyTag,
    ),
  }),
)

*Defined in [packages/bodiless-filtering/src/FilterByGroup/token.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/token.tsx#L79)*

## Functions

### `Const` FilterByGroupBase

▸ **FilterByGroupBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L39)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› | - |
`components` | object | - |
`filterTitle` | string | "Filter" |
`resetButtonText` | string | "Reset" |
`rest` | rest | - |

**Returns:** *Element‹›*

___

### `Const` FilterByGroupProvider

▸ **FilterByGroupProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L52)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`multipleAllowedTags` | undefined &#124; false &#124; true |
`suggestions` | undefined &#124; object & object[] |

**Returns:** *Element‹›*

___

### `Const` TagTitleBase

▸ **TagTitleBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L79)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`components` | object | - |
`emptyTitleText` | string | "Select Tag..." |
`rest` | rest | - |

**Returns:** *Element‹›*

___

### `Const` asFilterableByGroup

▸ **asFilterableByGroup**(`nodeKey`: string): *function & object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/asFilterableByGroup.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/asFilterableByGroup.tsx#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`nodeKey` | string | "_tags" |

**Returns:** *function & object*

___

### `Const` readTagsFromQueryParams

▸ **readTagsFromQueryParams**(): *[Tag](classes/tag.md)‹›[]*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts#L41)*

**Returns:** *[Tag](classes/tag.md)‹›[]*

___

### `Const` updateUrlQueryParams

▸ **updateUrlQueryParams**(`tags`: [Tag](classes/tag.md)[]): *void*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`tags` | [Tag](classes/tag.md)[] |

**Returns:** *void*

___

### `Const` useCategoryListContext

▸ **useCategoryListContext**(): *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx#L28)*

**Returns:** *object*

* **categoryId**? : *undefined | string*

___

### `Const` useFilterByGroupContext

▸ **useFilterByGroupContext**(): *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L46)*

**Returns:** *object*

* **clearSelectedTags**(): *function*

  * (): *void*

* **getSelectedTags**(): *function*

  * (): *[TagType](globals.md#tagtype)[]*

* **getSuggestions**(): *function*

  * (): *[TagType](globals.md#tagtype)[]*

* **isTagSelected**(): *function*

  * (`tag`: [TagType](globals.md#tagtype)): *boolean*

* **multipleAllowedTags**: *boolean*

* **selectTag**(): *function*

  * (`tag`: [TagType](globals.md#tagtype)): *void*

* **unSelectTag**(): *function*

  * (`tag`: [TagType](globals.md#tagtype)): *void*

* **useRegisterSuggestions**(): *function*

  * (): *function*

    * (`tags`: [TagType](globals.md#tagtype)[]): *void*

___

### `Const` useFilterByGroupStore

▸ **useFilterByGroupStore**(`settings`: [FilterByGroupStoreSettings](globals.md#filterbygroupstoresettings)): *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts:67](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupStore.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [FilterByGroupStoreSettings](globals.md#filterbygroupstoresettings) |

**Returns:** *object*

* **clearSelectedTags**: *clearSelectedTags*

* **getSelectedTags**: *getSelectedTags*

* **isTagSelected**: *isTagSelected*

* **selectTag**: *selectTag*

* **unSelectTag**: *unSelectTag*

___

### `Const` useIsFilterTagSelected

▸ **useIsFilterTagSelected**(): *boolean*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L47)*

**Returns:** *boolean*

___

### `Const` useRefineButtonProps

▸ **useRefineButtonProps**(): *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/token.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/token.tsx#L48)*

**Returns:** *object*

* **children**: *string* = "Refine"

* **onClick**(): *void*

___

### `Const` useTagsAccessors

▸ **useTagsAccessors**(): *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterModel.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterModel.tsx#L26)*

**Returns:** *object*

* **tag**: *[Tag](classes/tag.md)‹›* = new Tag(tag.id.toString(), tag.name, categoryId || '')

___

### `Const` useToggleByTags

▸ **useToggleByTags**(`__namedParameters`: object): *boolean*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/withFilterByTags.tsx#L35)*

Determine which component to show based on selected tags.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`selectedTags` | object & object[] |

**Returns:** *boolean*

___

### `Const` withCategoryListContextProvider

▸ **withCategoryListContextProvider**(`Component`: ComponentOrTag‹any›): *WithCategoryListContextProvider*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/CategoryListContext.tsx#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentOrTag‹any› |

**Returns:** *WithCategoryListContextProvider*

___

### `Const` withFBGSuggestions

▸ **withFBGSuggestions**(`__namedParameters`: object): *function & object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:147](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L147)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`suggestions` | undefined &#124; object & object[] |

**Returns:** *function & object*

___

### `Const` withFilterByGroupContext

▸ **withFilterByGroupContext**(`Component`: "symbol" | "object" | "cite" | "data" | "form" | "label" | "pattern" | "span" | "summary" | "slot" | "style" | "title" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "code" | "col" | "colgroup" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "strong" | "sub" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *(Anonymous function)*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "cite" &#124; "data" &#124; "form" &#124; "label" &#124; "pattern" &#124; "span" &#124; "summary" &#124; "slot" &#124; "style" &#124; "title" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "strong" &#124; "sub" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *(Anonymous function)*

___

### `Const` withFilterDesignTransformer

▸ **withFilterDesignTransformer**‹**P**›(`Component`: ComponentOrTag‹P & [FilterProps](globals.md#filterprops)›): *WithFilterDesignTransformer*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:210](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L210)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentOrTag‹P & [FilterProps](globals.md#filterprops)› |

**Returns:** *WithFilterDesignTransformer*

___

### `Const` withTagProps

▸ **withTagProps**(`suggestionOptions?`: TagButtonProps): *Injector‹[DefaultTagProps](globals.md#defaulttagprops)›*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx:126](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupContext.tsx#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`suggestionOptions?` | TagButtonProps |

**Returns:** *Injector‹[DefaultTagProps](globals.md#defaulttagprops)›*

___

### `Const` withUnselectOnDelete

▸ **withUnselectOnDelete**(`Component`: "symbol" | "object" | "cite" | "data" | "form" | "label" | "pattern" | "span" | "summary" | "slot" | "style" | "title" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "code" | "col" | "colgroup" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "strong" | "sub" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *(Anonymous function)*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "cite" &#124; "data" &#124; "form" &#124; "label" &#124; "pattern" &#124; "span" &#124; "summary" &#124; "slot" &#124; "style" &#124; "title" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "strong" &#124; "sub" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` FilterByGroupComponentsStart

### ▪ **FilterByGroupComponentsStart**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L24)*

###  ContentWrapper

• **ContentWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L29)*

###  Filter

• **Filter**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = FilterClean

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L32)*

###  FilterBody

• **FilterBody**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L31)*

###  FilterHeader

• **FilterHeader**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L27)*

###  FilterTitle

• **FilterTitle**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = H3

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L28)*

###  FilterWrapper

• **FilterWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L26)*

###  RefineButton

• **RefineButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Button

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L33)*

###  ResetButton

• **ResetButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Button

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L30)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/FilterByGroupClean.tsx#L25)*

___

### `Const` tagTitleComponentsStart

### ▪ **tagTitleComponentsStart**: *object*

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L61)*

###  FilterGroupItemInput

• **FilterGroupItemInput**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Input

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L63)*

###  FilterGroupItemLabel

• **FilterGroupItemLabel**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Label

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L65)*

###  FilterGroupItemPlaceholder

• **FilterGroupItemPlaceholder**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Label

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:64](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L64)*

###  FilterInputWrapper

• **FilterInputWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-filtering/src/FilterByGroup/Filter.tsx:62](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-filtering/src/FilterByGroup/Filter.tsx#L62)*
