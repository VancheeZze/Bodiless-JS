[@bodiless/layouts](README.md) › [Globals](globals.md)

# @bodiless/layouts

## Index

### Enumerations

* [ComponentDisplayMode](enums/componentdisplaymode.md)
* [LanguageDirection](enums/languagedirection.md)
* [Scale](enums/scale.md)

### Classes

* [BackendClient](classes/backendclient.md)
* [ScreenShot](classes/screenshot.md)

### Interfaces

* [FlowContainerItem](interfaces/flowcontaineritem.md)
* [FlowContainerItemProps](interfaces/flowcontaineritemprops.md)
* [LooseObject](interfaces/looseobject.md)

### Type aliases

* [CTWM](globals.md#ctwm)
* [Categories](globals.md#categories)
* [ComponentSelectorProps](globals.md#componentselectorprops)
* [ComponentSelectorUI](globals.md#componentselectorui)
* [ComponentWithMeta](globals.md#componentwithmeta)
* [ComponentWithPartialMeta](globals.md#componentwithpartialmeta)
* [Config](globals.md#config)
* [ContentLibraryOptions](globals.md#contentlibraryoptions)
* [CreateFlowContainerItem](globals.md#createflowcontaineritem)
* [CreateFlowContainerItemArgs](globals.md#createflowcontaineritemargs)
* [DeleteFlowContainerItem](globals.md#deleteflowcontaineritem)
* [DeserializeElement](globals.md#deserializeelement)
* [DeserializeElementArgs](globals.md#deserializeelementargs)
* [Deserializer](globals.md#deserializer)
* [Direction](globals.md#direction)
* [EditFlowContainerProps](globals.md#editflowcontainerprops)
* [FinalUI](globals.md#finalui)
* [FlattenElement](globals.md#flattenelement)
* [FlattenElementArgs](globals.md#flattenelementargs)
* [FlattenedElement](globals.md#flattenedelement)
* [FlowContainerBaseProps](globals.md#flowcontainerbaseprops)
* [FlowContainerComponentProps](globals.md#flowcontainercomponentprops)
* [FlowContainerComponents](globals.md#flowcontainercomponents)
* [FlowContainerData](globals.md#flowcontainerdata)
* [FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers)
* [FlowContainerItemData](globals.md#flowcontaineritemdata)
* [FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)
* [FlowContainerProps](globals.md#flowcontainerprops)
* [Handlers](globals.md#handlers)
* [InsertContentNode](globals.md#insertcontentnode)
* [ItemListProps](globals.md#itemlistprops)
* [ListData](globals.md#listdata)
* [Meta](globals.md#meta)
* [OnFlowContainerItemResize](globals.md#onflowcontaineritemresize)
* [Props](globals.md#props)
* [SetFlowContainerItems](globals.md#setflowcontaineritems)
* [SlateSortableResizableProps](globals.md#slatesortableresizableprops)
* [SnapData](globals.md#snapdata)
* [SnapDataProps](globals.md#snapdataprops)
* [SnapDataReturn](globals.md#snapdatareturn)
* [SortableChildProps](globals.md#sortablechildprops)
* [SortableListProps](globals.md#sortablelistprops)
* [SortableResizableProps](globals.md#sortableresizableprops)
* [Tuple](globals.md#tuple)
* [UI](globals.md#ui)
* [UpdateFlowContainerItem](globals.md#updateflowcontaineritem)
* [WidthClassTuple](globals.md#widthclasstuple)
* [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops)
* [WithTuples](globals.md#withtuples)

### Variables

* [BASE_URL_NO_PREFIX_SLASH](globals.md#const-base_url_no_prefix_slash)
* [COMPONENTS_PREVIEW_BASE_URL](globals.md#const-components_preview_base_url)
* [ChildNodeProvider](globals.md#const-childnodeprovider)
* [ComponentDisplayModeContext](globals.md#const-componentdisplaymodecontext)
* [FALLBACK_SNAP_CLASSNAME](globals.md#const-fallback_snap_classname)
* [FC_ITEM_CONTEXT_TYPE](globals.md#const-fc_item_context_type)
* [FlowContainer](globals.md#const-flowcontainer)
* [FlowContainerDesignable](globals.md#const-flowcontainerdesignable)
* [FlowContainerEmpty](globals.md#const-flowcontainerempty)
* [Handle](globals.md#const-handle)
* [NodeProvider](globals.md#const-nodeprovider)
* [RESIZE_THROTTLE_INTERVAL](globals.md#const-resize_throttle_interval)
* [ROOT_NODE_KEY](globals.md#const-root_node_key)
* [SortableChild](globals.md#const-sortablechild)
* [SortableListWrapper](globals.md#const-sortablelistwrapper)
* [SortableResizable](globals.md#const-sortableresizable)
* [SortableResizableWrapper](globals.md#const-sortableresizablewrapper)
* [UIConsumer](globals.md#const-uiconsumer)
* [asEditFlowContainer](globals.md#const-aseditflowcontainer)
* [asStaticFlowContainer](globals.md#const-asstaticflowcontainer)
* [backendPort](globals.md#const-backendport)
* [createHash](globals.md#createhash)
* [defaultMode](globals.md#const-defaultmode)
* [defaultSnapData](globals.md#const-defaultsnapdata)
* [html2canvas](globals.md#const-html2canvas)
* [ifComponentSelector](globals.md#const-ifcomponentselector)
* [ifNotComponentSelector](globals.md#const-ifnotcomponentselector)
* [isNotComponentSelector](globals.md#const-isnotcomponentselector)
* [uiContext](globals.md#const-uicontext)

### Functions

* [Capitalize](globals.md#capitalize)
* [Checkbox](globals.md#checkbox)
* [ComponentDisplayModeProvider](globals.md#const-componentdisplaymodeprovider)
* [ComponentSelector](globals.md#const-componentselector)
* [Dropdown](globals.md#dropdown)
* [EditFlowContainer](globals.md#const-editflowcontainer)
* [EditListView](globals.md#const-editlistview)
* [FilterWrapper](globals.md#const-filterwrapper)
* [FlowContainerBasic](globals.md#const-flowcontainerbasic)
* [FlowContainerEmpty$](globals.md#const-flowcontainerempty)
* [GetComponentThumbnail](globals.md#getcomponentthumbnail)
* [ItemList](globals.md#const-itemlist)
* [RenderCanvas](globals.md#rendercanvas)
* [SearchWrapper](globals.md#const-searchwrapper)
* [SlateSortableResizable](globals.md#const-slatesortableresizable)
* [SortableResizable$](globals.md#const-sortableresizable)
* [StaticFlowContainer](globals.md#const-staticflowcontainer)
* [TextFormatList](globals.md#const-textformatlist)
* [addtoArray](globals.md#addtoarray)
* [applyMandatoryCategories](globals.md#const-applymandatorycategories)
* [asPassThough](globals.md#const-aspassthough)
* [childKeys](globals.md#const-childkeys)
* [componentSelectorForm](globals.md#const-componentselectorform)
* [copyNode](globals.md#const-copynode)
* [createDefaultDeserializer](globals.md#const-createdefaultdeserializer)
* [createFlowContainerItem](globals.md#const-createflowcontaineritem)
* [createListDeserializer](globals.md#const-createlistdeserializer)
* [customizer](globals.md#customizer)
* [dataURItoBlob](globals.md#datauritoblob)
* [deserializeElement](globals.md#const-deserializeelement)
* [deserializeHtml](globals.md#const-deserializehtml)
* [deserializeList](globals.md#const-deserializelist)
* [filterByMedia](globals.md#const-filterbymedia)
* [filterByWidth](globals.md#const-filterbywidth)
* [flattenElement](globals.md#const-flattenelement)
* [generateUuid](globals.md#const-generateuuid)
* [getClassNames](globals.md#const-getclassnames)
* [getFilteredComponents](globals.md#const-getfilteredcomponents)
* [getFiltersByComponentList](globals.md#const-getfiltersbycomponentlist)
* [getMediaMatch](globals.md#const-getmediamatch)
* [getMedias](globals.md#const-getmedias)
* [getSnapFrom](globals.md#const-getsnapfrom)
* [getTitleFromTerms](globals.md#const-gettitlefromterms)
* [getUI](globals.md#const-getui)
* [getWidths](globals.md#const-getwidths)
* [hash](globals.md#const-hash)
* [isComponentSelector](globals.md#const-iscomponentselector)
* [perserveMeta](globals.md#const-perservemeta)
* [reduceFilters](globals.md#const-reducefilters)
* [removefromArray](globals.md#removefromarray)
* [shouldMergeElement](globals.md#const-shouldmergeelement)
* [titleToImageName](globals.md#titletoimagename)
* [useAddButton](globals.md#const-useaddbutton)
* [useCloneButton](globals.md#const-useclonebutton)
* [useComponentDisplayModeContext](globals.md#const-usecomponentdisplaymodecontext)
* [useComponentSelectorActions](globals.md#private-const-usecomponentselectoractions)
* [useDeleteButton](globals.md#const-usedeletebutton)
* [useFlowContainerDataHandlers](globals.md#const-useflowcontainerdatahandlers)
* [useGetItemUseGetMenuOptions](globals.md#private-const-usegetitemusegetmenuoptions)
* [useHasActiveChildItem](globals.md#const-usehasactivechilditem)
* [useIsNested](globals.md#const-useisnested)
* [useItemButtonName](globals.md#private-const-useitembuttonname)
* [useItemHandlers](globals.md#const-useitemhandlers)
* [useMenuOptions](globals.md#private-usemenuoptions)
* [useSwapButton](globals.md#const-useswapbutton)
* [withAllTitlesFromTerms](globals.md#const-withalltitlesfromterms)
* [withAppendDesc](globals.md#const-withappenddesc)
* [withAppendDisplayName](globals.md#const-withappenddisplayname)
* [withAppendTitle](globals.md#const-withappendtitle)
* [withContentLibrary](globals.md#const-withcontentlibrary)
* [withDesc](globals.md#const-withdesc)
* [withDirection](globals.md#const-withdirection)
* [withDisplayName](globals.md#const-withdisplayname)
* [withFacet](globals.md#const-withfacet)
* [withFlowContainerDefaultHtml](globals.md#const-withflowcontainerdefaulthtml)
* [withMandatoryCategories](globals.md#const-withmandatorycategories)
* [withMeta](globals.md#const-withmeta)
* [withNoDesign](globals.md#private-const-withnodesign)
* [withOutMeta](globals.md#const-withoutmeta)
* [withTailwindClasses](globals.md#const-withtailwindclasses)
* [withTailwindWidthConstraints](globals.md#const-withtailwindwidthconstraints)
* [withTerm](globals.md#const-withterm)
* [withTitle](globals.md#const-withtitle)
* [withTitleFromTerms](globals.md#const-withtitlefromterms)
* [withTuple](globals.md#const-withtuple)

### Object literals

* [DIRECTIONS](globals.md#const-directions)
* [EditFlowContainerComponents](globals.md#const-editflowcontainercomponents)
* [defaultUI](globals.md#const-defaultui)
* [flowContainerComponentStart](globals.md#const-flowcontainercomponentstart)
* [flowContainerDataHandlers](globals.md#const-flowcontainerdatahandlers)
* [itemHandlers](globals.md#const-itemhandlers)

## Type aliases

###  CTWM

Ƭ **CTWM**: *[ComponentWithMeta](globals.md#componentwithmeta)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L24)*

___

###  Categories

Ƭ **Categories**: *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L32)*

#### Type declaration:

* \[ **key**: *string*\]: string[]

___

###  ComponentSelectorProps

Ƭ **ComponentSelectorProps**: *[ItemListProps](globals.md#itemlistprops) & object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L17)*

___

###  ComponentSelectorUI

Ƭ **ComponentSelectorUI**: *Partial‹[FinalUI](globals.md#finalui)›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:155](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L155)*

___

###  ComponentWithMeta

Ƭ **ComponentWithMeta**: *ComponentType‹P› & [Meta](globals.md#meta)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L59)*

___

###  ComponentWithPartialMeta

Ƭ **ComponentWithPartialMeta**: *ComponentType‹P› & Partial‹[Meta](globals.md#meta)›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L60)*

___

###  Config

Ƭ **Config**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L50)*

#### Type declaration:

* **theme**(): *object*

  * **screens**(): *object*

  * **width**(): *object*

___

###  ContentLibraryOptions

Ƭ **ContentLibraryOptions**: *object*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L27)*

#### Type declaration:

* **DisplayComponent**? : *ComponentType‹any›*

* **Selector**? : *ComponentType‹[ComponentSelectorProps](globals.md#componentselectorprops)›*

* **useLibraryNode**(): *function*

  * (`props`: any): *object*

    * **node**: *ContentNode‹any›*

* **useMeta**? : *undefined | function*

* **useOverrides**? : *undefined | function*

___

###  CreateFlowContainerItem

Ƭ **CreateFlowContainerItem**: *function*

*Defined in [packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts#L28)*

#### Type declaration:

▸ (`args`: [CreateFlowContainerItemArgs](globals.md#createflowcontaineritemargs)): *[FlowContainerItem](interfaces/flowcontaineritem.md)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateFlowContainerItemArgs](globals.md#createflowcontaineritemargs) |

___

###  CreateFlowContainerItemArgs

Ƭ **CreateFlowContainerItemArgs**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts#L23)*

#### Type declaration:

* **element**: *Element | Element[]*

* **elementIndex**: *number*

* **type**: *string*

___

###  DeleteFlowContainerItem

Ƭ **DeleteFlowContainerItem**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L33)*

#### Type declaration:

▸ (`uuid`: string): *[FlowContainerItem](interfaces/flowcontaineritem.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |

___

###  DeserializeElement

Ƭ **DeserializeElement**: *function*

*Defined in [packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts#L35)*

#### Type declaration:

▸ (`args`: [DeserializeElementArgs](globals.md#deserializeelementargs)): *[FlowContainerData](globals.md#flowcontainerdata)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DeserializeElementArgs](globals.md#deserializeelementargs) |

___

###  DeserializeElementArgs

Ƭ **DeserializeElementArgs**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts#L31)*

#### Type declaration:

* **deserializers**: *[Deserializer](globals.md#deserializer)[]*

* **element**: *Element*

___

###  Deserializer

Ƭ **Deserializer**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/deserializer.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/deserializer.ts#L21)*

#### Type declaration:

* **deserialize**(): *function*

  * (`item`: [FlowContainerItem](interfaces/flowcontaineritem.md), `elements`: Element[]): *[FlowContainerItemData](globals.md#flowcontaineritemdata)*

* **map**(): *function*

  * (`elements`: Element[], `elementIndex`: number): *[FlowContainerItem](interfaces/flowcontaineritem.md)*

* **match**(): *function*

  * (`element`: Element): *boolean*

* **merge**: *boolean*

* **type**: *string*

___

###  Direction

Ƭ **Direction**: *[RTL](enums/languagedirection.md#rtl) | [LTR](enums/languagedirection.md#ltr)*

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L26)*

___

###  EditFlowContainerProps

Ƭ **EditFlowContainerProps**: *DesignableComponentsProps & HTMLProps‹HTMLDivElement› & object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L29)*

___

###  FinalUI

Ƭ **FinalUI**: *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L21)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L33)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L80)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L23)*

#### Type declaration:

* **FlowContainerEmptyWrapper**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

###  FlattenElement

Ƭ **FlattenElement**: *function*

*Defined in [packages/bodiless-layouts/src/deserializers/flattenElement.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/flattenElement.ts#L25)*

#### Type declaration:

▸ (`args`: [FlattenElementArgs](globals.md#flattenelementargs)): *[FlattenedElement](globals.md#flattenedelement)[]*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [FlattenElementArgs](globals.md#flattenelementargs) |

___

###  FlattenElementArgs

Ƭ **FlattenElementArgs**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/flattenElement.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/flattenElement.ts#L17)*

#### Type declaration:

* **deserializers**: *[Deserializer](globals.md#deserializer)[]*

* **element**: *Element*

___

###  FlattenedElement

Ƭ **FlattenedElement**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/flattenElement.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/flattenElement.ts#L21)*

#### Type declaration:

* **deserializer**: *[Deserializer](globals.md#deserializer)*

* **elements**: *Element[]*

___

###  FlowContainerBaseProps

Ƭ **FlowContainerBaseProps**: *[EditFlowContainerProps](globals.md#editflowcontainerprops) & WithNodeProps*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L52)*

___

###  FlowContainerComponentProps

Ƭ **FlowContainerComponentProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:54](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L54)*

#### Type declaration:

* **components**: *DesignableComponents*

* **ui**? : *[ComponentSelectorUI](globals.md#componentselectorui)*

___

###  FlowContainerComponents

Ƭ **FlowContainerComponents**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:83](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L83)*

#### Type declaration:

* **ComponentWrapper**: *ComponentOrTag‹any›*

* **Wrapper**: *ComponentOrTag‹any›*

___

###  FlowContainerData

Ƭ **FlowContainerData**: *object & [FlowContainerItemData](globals.md#flowcontaineritemdata)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L26)*

*Defined in [packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts#L23)*

___

###  FlowContainerDataHandlers

Ƭ **FlowContainerDataHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L34)*

#### Type declaration:

* **deleteFlowContainerItem**: *[DeleteFlowContainerItem](globals.md#deleteflowcontaineritem)*

* **insertFlowContainerItem**: *[InsertContentNode](globals.md#insertcontentnode)*

* **onFlowContainerItemResize**: *[OnFlowContainerItemResize](globals.md#onflowcontaineritemresize)*

* **setFlowContainerItems**: *[SetFlowContainerItems](globals.md#setflowcontaineritems)*

* **updateFlowContainerItem**: *[UpdateFlowContainerItem](globals.md#updateflowcontaineritem)*

___

###  FlowContainerItemData

Ƭ **FlowContainerItemData**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/deserializer.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/deserializer.ts#L17)*

#### Type declaration:

* \[ **itemNodeKey**: *string*\]: any

___

###  FlowContainerItemHandlers

Ƭ **FlowContainerItemHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L41)*

#### Type declaration:

* **deleteItem**(): *function*

  * (`uuid?`: string | undefined): *void*

* **getItems**(): *function*

  * (): *[FlowContainerItem](interfaces/flowcontaineritem.md)[]*

* **setItems**(): *function*

  * (`items`: [FlowContainerItem](interfaces/flowcontaineritem.md)[]): *void*

___

###  FlowContainerProps

Ƭ **FlowContainerProps**: *Omit‹[FlowContainerBaseProps](globals.md#flowcontainerbaseprops), "components"› & DesignableProps*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:53](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L53)*

___

###  Handlers

Ƭ **Handlers**: *[FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers) & [FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L29)*

___

###  InsertContentNode

Ƭ **InsertContentNode**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L22)*

#### Type declaration:

▸ (`componentName`: string, `afterItem?`: [FlowContainerItem](interfaces/flowcontaineritem.md), `wrapperProps?`: [FlowContainerItemProps](interfaces/flowcontaineritemprops.md)): *[FlowContainerItem](interfaces/flowcontaineritem.md)*

**Parameters:**

Name | Type |
------ | ------ |
`componentName` | string |
`afterItem?` | [FlowContainerItem](interfaces/flowcontaineritem.md) |
`wrapperProps?` | [FlowContainerItemProps](interfaces/flowcontaineritemprops.md) |

___

###  ItemListProps

Ƭ **ItemListProps**: *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L65)*

Props passed to the list of items within the component selector.

#### Type declaration:

* **blacklistCategories**? : *string[]*

* **components**: *[ComponentWithMeta](globals.md#componentwithmeta)[]*

* **onSelect**(): *function*

  * (`names`: string[]): *void*

___

###  ListData

Ƭ **ListData**: *object*

*Defined in [packages/bodiless-layouts/src/deserializers/listDeserializer.ts:19](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/listDeserializer.ts#L19)*

#### Type declaration:

* \[ **itemNodeKey**: *string*\]: any

___

###  Meta

Ƭ **Meta**: *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L40)*

Component metadata used to search, filter and display
information about a component,

#### Type declaration:

* **categories**? : *[Categories](globals.md#categories)*

* **description**: *string*

* **displayName**: *string*

* **title**: *string*

___

###  OnFlowContainerItemResize

Ƭ **OnFlowContainerItemResize**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L29)*

#### Type declaration:

▸ (`uuid`: string, `props`: [FlowContainerItemProps](interfaces/flowcontaineritemprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |
`props` | [FlowContainerItemProps](interfaces/flowcontaineritemprops.md) |

___

###  Props

Ƭ **Props**: *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L39)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L33)*

#### Type declaration:

* **mode**: *[ComponentDisplayMode](enums/componentdisplaymode.md)*

___

###  SetFlowContainerItems

Ƭ **SetFlowContainerItems**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L27)*

#### Type declaration:

▸ (`items`: [FlowContainerItem](interfaces/flowcontaineritem.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [FlowContainerItem](interfaces/flowcontaineritem.md)[] |

___

###  SlateSortableResizableProps

Ƭ **SlateSortableResizableProps**: *object*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L44)*

#### Type declaration:

* **buttonGroupLabel**? : *string | function*

* **children**: *React.ReactNode*

* **className**: *string*

* **defaultSize**? : *undefined | object*

* **index**: *number*

* **isResizeEnabled**? : *undefined | false | true*

* **minWidth**: *string*

* **onResize**? : *ResizeCallback*

* **onResizeStop**? : *ResizeCallback*

* **size**? : *undefined | object*

* **ui**? : *[UI](globals.md#ui)*

* **useGetMenuOptions**(): *function*

  * (): *TMenuOptionGetter*

* **uuid**: *string*

___

###  SnapData

Ƭ **SnapData**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L34)*

#### Type declaration:

▸ (`props`: [SnapDataProps](globals.md#snapdataprops)): *[SnapDataReturn](globals.md#snapdatareturn)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SnapDataProps](globals.md#snapdataprops) |

___

###  SnapDataProps

Ƭ **SnapDataProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L23)*

#### Type declaration:

* **className**: *string*

* **matchMedia**? : *Function*

* **width**? : *undefined | number*

___

###  SnapDataReturn

Ƭ **SnapDataReturn**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L28)*

#### Type declaration:

* **className**: *string*

* **currentMediaTuples**: *[Tuple](globals.md#tuple)[]*

* **width**: *number*

___

###  SortableChildProps

Ƭ **SortableChildProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:71](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L71)*

#### Type declaration:

* **children**: *React.ReactNode*

* **className**? : *undefined | string*

* **flowContainerItem**: *[FlowContainerItem](interfaces/flowcontaineritem.md)*

* **getDefaultWidth**? : *undefined | function*

* **index**: *number*

* **snapData**? : *[SnapData](globals.md#snapdata)*

* **ui**? : *SortableResizableUI*

* **useGetMenuOptions**(): *function*

  * (): *TMenuOptionGetter*

* **onResizeStop**(`props`: [FlowContainerItemProps](interfaces/flowcontaineritemprops.md)): *void*

___

###  SortableListProps

Ƭ **SortableListProps**: *PropsWithChildren‹object›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L29)*

___

###  SortableResizableProps

Ƭ **SortableResizableProps**: *Omit‹[SlateSortableResizableProps](globals.md#slatesortableresizableprops), "useGetMenuOptions"›*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L79)*

___

###  Tuple

Ƭ **Tuple**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L18)*

#### Type declaration:

* **className**: *string*

* **media**: *string*

* **width**: *number*

___

###  UI

Ƭ **UI**: *Partial‹[FinalUI](globals.md#finalui)›*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L28)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L37)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L24)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L27)*

___

###  UpdateFlowContainerItem

Ƭ **UpdateFlowContainerItem**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L28)*

#### Type declaration:

▸ (`flowContainerItem`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`flowContainerItem` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

___

###  WidthClassTuple

Ƭ **WidthClassTuple**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/types.ts#L47)*

#### Type declaration:

* **class**: *string*

* **media**: *string*

* **width**: *number*

___

###  WithTitleFromTermsProps

Ƭ **WithTitleFromTermsProps**: *object*

*Defined in [packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx:9](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx#L9)*

Type of the options for `withTitleFromTerms`

#### Type declaration:

* **blacklistCategories**? : *string[]*

* **blacklistTerms**? : *string[]*

* **createTitleSegment**? : *undefined | function*

* **separator**? : *undefined | string*

___

###  WithTuples

Ƭ **WithTuples**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L33)*

#### Type declaration:

▸ (`tuples`: [Tuple](globals.md#tuple)[]): *[Tuple](globals.md#tuple)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tuples` | [Tuple](globals.md#tuple)[] |

## Variables

### `Const` BASE_URL_NO_PREFIX_SLASH

• **BASE_URL_NO_PREFIX_SLASH**: *string* = COMPONENTS_PREVIEW_BASE_URL.split('/').filter(Boolean).join('/')

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L21)*

___

### `Const` COMPONENTS_PREVIEW_BASE_URL

• **COMPONENTS_PREVIEW_BASE_URL**: *string* = "/images/component-previews/"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/config.ts:16](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/config.ts#L16)*

Copyright © 2019 Johnson & Johnson

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

### `Const` ChildNodeProvider

• **ChildNodeProvider**: *ComponentClass‹any, any› & object | FunctionComponent‹any› & object* = withNode<PropsWithChildren<{}>, any>(React.Fragment)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L36)*

___

### `Const` ComponentDisplayModeContext

• **ComponentDisplayModeContext**: *Context‹object›* = React.createContext({
  mode: defaultMode,
})

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L27)*

___

### `Const` FALLBACK_SNAP_CLASSNAME

• **FALLBACK_SNAP_CLASSNAME**: *"w-full"* = "w-full"

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx#L24)*

___

### `Const` FC_ITEM_CONTEXT_TYPE

• **FC_ITEM_CONTEXT_TYPE**: *"flow-container-item"* = "flow-container-item"

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L31)*

___

### `Const` FlowContainer

• **FlowContainer**: *ComponentClass‹object & object, any› | FunctionComponent‹object & object›* = withNode(FlowContainerDesignable) as ComponentType<FlowContainerProps>

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/index.tsx#L49)*

___

### `Const` FlowContainerDesignable

• **FlowContainerDesignable**: *any* = flow(
  observer,
  withDesign({
    Wrapper: addClasses('flex flex-wrap'),
  }),
)(FlowContainerBasic)

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/index.tsx#L38)*

___

### `Const` FlowContainerEmpty

• **FlowContainerEmpty**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = flow(
  withContextActivator('onClick'),
  withLocalContextMenu,
)(FlowContainerEmpty$)

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L56)*

___

### `Const` Handle

• **Handle**: *ComponentClass‹any, any›* = SortableHandle(({ component: Component, ...rest }: any) => (
  <Component {...rest} />
))

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L55)*

___

### `Const` NodeProvider

• **NodeProvider**: *ComponentClass‹any, any› & object | FunctionComponent‹any› & object* = withNode<PropsWithChildren<{}>, any>(React.Fragment)

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L32)*

___

### `Const` RESIZE_THROTTLE_INTERVAL

• **RESIZE_THROTTLE_INTERVAL**: *number* = 100

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx#L23)*

___

### `Const` ROOT_NODE_KEY

• **ROOT_NODE_KEY**: *""* = ""

*Defined in [packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts#L29)*

___

### `Const` SortableChild

• **SortableChild**: *FunctionComponent‹object›* = observer((props: SortableChildProps) => {
  const {
    flowContainerItem,
    onResizeStop: onResizeStopProp = () => undefined,
    snapData = defaultSnapData,
    getDefaultWidth = () => FALLBACK_SNAP_CLASSNAME,
    className: classNameProp = '',
    ui,
    children,
    ...restProps
  } = props;

  // These are the classes which control width when not resizing. The come from
  // the flow container item, or from the default width callback.
  const widthClasses = flowContainerItem.wrapperProps?.className || getDefaultWidth(snapData);

  // We need the starting width so we can set defaultSize on the re-resizeable.
  // This ensures that we get back % during resize (otherwise we get pixels).
  const { width: startingWidth } = snapData({ className: widthClasses });

  // Track the snap width during resize so we can display it.
  const [snapWidth, setSnapWidth] = useState<number|undefined>(undefined);
  const onResize: ResizeCallback = useCallback((e, dir, ref) => {
    const { width } = snapData({
      className: widthClasses,
      width: ref.style.width ? parseInt(ref.style.width, 10) : startingWidth,
    });
    setSnapWidth(width);
  }, [widthClasses, startingWidth]);

  // When resizing is complete, clear the snap width and notify the flow container
  // of the selected classes.
  const onResizeStop: ResizeCallback = useCallback((e, dir, ref) => {
    setSnapWidth(undefined);
    const { className } = snapData({
      className: widthClasses,
      width: ref.style.width ? parseInt(ref.style.width, 10) : startingWidth,
    });
    if (onResizeStopProp) onResizeStopProp({ className });
  }, [widthClasses, startingWidth, onResizeStopProp]);

  // we have to remove the width style when we are done resizing so that our responsive
  // classes will control width. Otherwise the width will be fixed at all breakpoints.
  // We need to do this onEffect bc we have to find the actual dom element.
  const resizing = snapWidth !== undefined;
  useEffect(() => {
    if (resizing) return;
    const elm: HTMLElement | null = document.querySelector(`[uuid='${flowContainerItem.uuid}']`);
    if (elm) {
      elm.style.height = '';
      elm.style.width = '';
    }
  }, [resizing]);

  const { width: minWidth, currentMediaTuples } = snapData({ width: 0, className: '' });
  const is1WidthContainer = currentMediaTuples.length === 1;
  const isResizeEnabled = !is1WidthContainer;
  const className = [...widthClasses.split(' '), ...(classNameProp).split(' ')].join(' ');
  const { SnapIndicator } = getUI(ui);
  return (
    <SlateSortableResizable
      uuid={flowContainerItem.uuid}
      isResizeEnabled={isResizeEnabled}
      onResize={onResize}
      onResizeStop={throttle(onResizeStop, RESIZE_THROTTLE_INTERVAL)}
      // Set min width a bit smaller to ensure user can drag there, and provide snap back effect.
      minWidth={`${minWidth * 0.9}%`}
      // Set default size to starting width so we get sizes in %.
      defaultSize={{
        width: `${startingWidth}%`,
        height: 'auto',
      }}
      className={className}
      ui={ui}
      {...restProps}
    >
      {resizing && (
        // Show a label indicating where we'll snap to.
        <SnapIndicator>
          {`${Math.round(snapWidth!)}%`}
        </SnapIndicator>
      )}
      {children}
    </SlateSortableResizable>
  );
})

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx#L30)*

This is the component which wraps all items in the flow container. You probably
only need to use it directly if you are customizing the Admin UI.

___

### `Const` SortableListWrapper

• **SortableListWrapper**: *ComponentClass‹object & SortableContainerProps, any›* = SortableContainer(
  observer(
    ({ children, ui, ...rest }: SortableListProps): React.ReactElement<SortableListProps> => {
      const children$ = React.Children.toArray(children);
      const content = children && children$.length
        ? children
        : <FlowContainerEmpty />;
      return (
        <section {...rest} {...useContextActivator()}>
          {content}
        </section>
      );
    },
  ),
)

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L61)*

___

### `Const` SortableResizable

• **SortableResizable**: *any* = flow(
  observer,
  withContextActivator('onClick'),
  withLocalContextMenu,
)(SortableResizable$)

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:105](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L105)*

___

### `Const` SortableResizableWrapper

• **SortableResizableWrapper**: *ComponentClass‹object & SortableElementProps, any›* = SortableElement((props: Props) => {
  const {
    isEnabled,
    children,
    className,
    ui,
    direction,
    ...resizableProps
  } = props;
  const {
    DragHandle, ResizeHandle, ResizeHandleRTL, Reresizable,
  } = getUI(ui);
  const childrenWithDragHandle = (
    <>
      <Handle
        component={DragHandle}
        style={{
          display: isEnabled ? 'block' : 'none',
        }}
      />
      {children}
    </>
  );
  const ENABLED_DRAG_SIDES = {
    top: false,
    right: isEnabled && direction !== DIRECTIONS.RTL,
    bottom: false,
    left: isEnabled && direction === DIRECTIONS.RTL,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  };

  return (
    <Reresizable
      enable={ENABLED_DRAG_SIDES}
      scale={1}
      className={className}
      handleComponent={
        direction === DIRECTIONS.RTL
          ? { left: ResizeHandleRTL }
          : { right: ResizeHandle }
      }
      {...resizableProps}
    >
      {childrenWithDragHandle}
    </Reresizable>
  );
})

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L59)*

___

### `Const` UIConsumer

• **UIConsumer**: *ExoticComponent‹ConsumerProps‹object››* = uiContext.Consumer

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:181](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L181)*

___

### `Const` asEditFlowContainer

• **asEditFlowContainer**: *function* = flowRight(
  withActivateOnEffect,
  withResizeDetector,
  observer,
  designable(EditFlowContainerComponents, 'FlowContainer'),
  withMenuOptions(
    (p: EditFlowContainerProps) => ({
      useMenuOptions,
      name: typeof p.buttonGroupLabel === 'function'
        ? p.buttonGroupLabel(p) : (p.buttonGroupLabel || 'Flow Container'),
    }),
  ),
  observer,
)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L103)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` asStaticFlowContainer

• **asStaticFlowContainer**: *function* = flow(
  observer,
  designable(flowContainerComponentStart, 'FlowContainer'),
)

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L68)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` backendPort

• **backendPort**: *string | 8001* = process.env.GATSBY_BACKEND_PORT || 8001

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L17)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/config.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/config.ts#L18)*

___

###  createHash

• **createHash**: *any*

*Defined in [packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts:15](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts#L15)*

___

### `Const` defaultMode

• **defaultMode**: *[StaticFlowContainer](enums/componentdisplaymode.md#staticflowcontainer)* = ComponentDisplayMode.StaticFlowContainer

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L25)*

___

### `Const` defaultSnapData

• **defaultSnapData**: *function* = getSnapFrom(
  withTuple('(min-width: 0px)')(100)('w-full'),
  withTuple('(min-width: 576px)')(25)('sm:w-1/4'),
  withTuple('(min-width: 576px)')(33.33)('sm:w-1/3'),
  withTuple('(min-width: 576px)')(50)('sm:w-1/2'),
  withTuple('(min-width: 576px)')(66.66)('sm:w-2/3'),
  withTuple('(min-width: 576px)')(75)('sm:w-3/4'),
  withTuple('(min-width: 576px)')(100)('sm:w-full'),
  withTuple('(min-width: 992px)')(25)('lg:w-1/4'),
  withTuple('(min-width: 992px)')(33.33)('lg:w-1/3'),
  withTuple('(min-width: 992px)')(50)('lg:w-1/2'),
  withTuple('(min-width: 992px)')(66.66)('lg:w-2/3'),
  withTuple('(min-width: 992px)')(75)('lg:w-3/4'),
  withTuple('(min-width: 992px)')(100)('lg:w-full'),
)

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:169](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L169)*

#### Type declaration:

▸ (`props`: [SnapDataProps](globals.md#snapdataprops)): *[SnapDataReturn](globals.md#snapdatareturn)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SnapDataProps](globals.md#snapdataprops) |

___

### `Const` html2canvas

• **html2canvas**: *any* = typeof window !== 'undefined' ? require('html2canvas') : undefined

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L19)*

___

### `Const` ifComponentSelector

• **ifComponentSelector**: *function* = flowIf(isComponentSelector)

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L50)*

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

### `Const` ifNotComponentSelector

• **ifNotComponentSelector**: *function* = flowIf(isNotComponentSelector)

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L51)*

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

### `Const` isNotComponentSelector

• **isNotComponentSelector**: *function* = negate(isComponentSelector)

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L48)*

#### Type declaration:

▸ (...`args`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

___

### `Const` uiContext

• **uiContext**: *Context‹object›* = React.createContext(defaultUI)

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L56)*

## Functions

###  Capitalize

▸ **Capitalize**(`str`: String): *string*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | String |

**Returns:** *string*

___

###  Checkbox

▸ **Checkbox**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L40)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`disabled` | any |
`isChecked` | any |
`onToggle` | any |
`type` | any |

**Returns:** *Element‹›*

___

### `Const` ComponentDisplayModeProvider

▸ **ComponentDisplayModeProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L37)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› | - |
`mode` | [ComponentDisplayMode](enums/componentdisplaymode.md) | defaultMode |

**Returns:** *Element‹›*

___

### `Const` ComponentSelector

▸ **ComponentSelector**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:85](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

###  Dropdown

▸ **Dropdown**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L70)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | any |
`type` | any |

**Returns:** *Element‹›*

___

### `Const` EditFlowContainer

▸ **EditFlowContainer**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L46)*

An editable version of the FlowContainer container.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) |

**Returns:** *Element‹›*

___

### `Const` EditListView

▸ **EditListView**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L78)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`onSortEnd` | function |
`rest` | rest |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` FilterWrapper

▸ **FilterWrapper**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:92](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` FlowContainerBasic

▸ **FlowContainerBasic**(`props`: object & HTMLProps‹HTMLDivElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/index.tsx#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLDivElement› & object & object |

**Returns:** *Element‹›*

___

### `Const` FlowContainerEmpty$

▸ **FlowContainerEmpty$**(`ui`: [UI](globals.md#ui)): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | [UI](globals.md#ui) |

**Returns:** *Element‹›*

___

###  GetComponentThumbnail

▸ **GetComponentThumbnail**(`callbackFxn`: Function, `myId`: string): *void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackFxn` | Function |
`myId` | string |

**Returns:** *void*

___

### `Const` ItemList

▸ **ItemList**(`props`: object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ItemList.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ItemList.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object |

**Returns:** *Element‹›*

___

###  RenderCanvas

▸ **RenderCanvas**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` SearchWrapper

▸ **SearchWrapper**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/SearchWrapper.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/SearchWrapper.tsx#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` SlateSortableResizable

▸ **SlateSortableResizable**(`props`: [SlateSortableResizableProps](globals.md#slatesortableresizableprops)): *Element‹›*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:119](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SlateSortableResizableProps](globals.md#slatesortableresizableprops) |

**Returns:** *Element‹›*

___

### `Const` SortableResizable$

▸ **SortableResizable$**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:81](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L81)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`isResizeEnabled` | undefined &#124; false &#124; true |
`props` | props |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` StaticFlowContainer

▸ **StaticFlowContainer**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |

**Returns:** *Element‹›*

___

### `Const` TextFormatList

▸ **TextFormatList**(`props`: object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:162](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object |

**Returns:** *Element‹›*

___

###  addtoArray

▸ **addtoArray**(`myArr`: Array‹any›, `myVal`: any): *any[]*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`myArr` | Array‹any› |
`myVal` | any |

**Returns:** *any[]*

___

### `Const` applyMandatoryCategories

▸ **applyMandatoryCategories**(`components`: any, `mandatoryCategories`: string[]): *void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | any |
`mandatoryCategories` | string[] |

**Returns:** *void*

___

### `Const` asPassThough

▸ **asPassThough**(`Component`: [CTWM](globals.md#ctwm)): *ComponentClass‹any, any› & object | FunctionComponent‹any› & object*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [CTWM](globals.md#ctwm) |

**Returns:** *ComponentClass‹any, any› & object | FunctionComponent‹any› & object*

___

### `Const` childKeys

▸ **childKeys**(`node`: ContentNode‹any›): *string[]*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ContentNode‹any› |

**Returns:** *string[]*

___

### `Const` componentSelectorForm

▸ **componentSelectorForm**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `onSelect`: ComponentSelectorProps["onSelect"]): *function*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/componentSelectorForm.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/componentSelectorForm.tsx#L26)*

Returns a component selector wrapped in a context menu form.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | Props passed to the edit flow container. |
`onSelect` | ComponentSelectorProps["onSelect"] | The action to perform when a component is selected.  |

**Returns:** *function*

▸ (`props`: Omit‹ContextMenuFormProps, "children"›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Omit‹ContextMenuFormProps, "children"› |

___

### `Const` copyNode

▸ **copyNode**(`source`: ContentNode‹any›, `dest`: ContentNode‹any›, `copyChildren`: boolean): *void*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | ContentNode‹any› |
`dest` | ContentNode‹any› |
`copyChildren` | boolean |

**Returns:** *void*

___

### `Const` createDefaultDeserializer

▸ **createDefaultDeserializer**(`type`: string): *object*

*Defined in [packages/bodiless-layouts/src/deserializers/defaultDeserializers.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/defaultDeserializers.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *object*

* **deserialize**(): *function*

  * (`item`: [FlowContainerItem](interfaces/flowcontaineritem.md), `elements`: Element[]): *[FlowContainerItemData](globals.md#flowcontaineritemdata)*

* **map**(): *function*

  * (`elements`: Element[], `elementIndex`: number): *[FlowContainerItem](interfaces/flowcontaineritem.md)*

* **match**(): *function*

  * (`element`: Element): *boolean*

* **merge**: *boolean*

* **type**: *string*

___

### `Const` createFlowContainerItem

▸ **createFlowContainerItem**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts#L37)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`element` | Element &#124; Element[] |
`elementIndex` | number |
`type` | string |

**Returns:** *object*

* **type**: *string*

* **uuid**: *any* = generateUuid(
    Array.isArray(element) ? element.map(element$ => element$.outerHTML).join('') : element.outerHTML,
    elementIndex,
  )

* ### **wrapperProps**: *object*

  * **className**: *string* = "w-full"

___

### `Const` createListDeserializer

▸ **createListDeserializer**(`type`: string, `linkKey`: string, `titleKey`: string): *object*

*Defined in [packages/bodiless-layouts/src/deserializers/listDeserializer.ts:64](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/listDeserializer.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`linkKey` | string |
`titleKey` | string |

**Returns:** *object*

* **deserialize**(): *function*

  * (`item`: [FlowContainerItem](interfaces/flowcontaineritem.md), `elements`: Element[]): *[FlowContainerItemData](globals.md#flowcontaineritemdata)*

* **map**(): *function*

  * (`elements`: Element[], `elementIndex`: number): *[FlowContainerItem](interfaces/flowcontaineritem.md)*

* **match**(): *function*

  * (`element`: Element): *boolean*

* **merge**: *boolean*

* **type**: *string*

___

###  customizer

▸ **customizer**(`objValue`: any, `srcValue`: any): *undefined | any[]*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`objValue` | any |
`srcValue` | any |

**Returns:** *undefined | any[]*

___

###  dataURItoBlob

▸ **dataURItoBlob**(`dataURI`: any): *Blob*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`dataURI` | any |

**Returns:** *Blob*

___

### `Const` deserializeElement

▸ **deserializeElement**(`__namedParameters`: object): *object & object*

*Defined in [packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts#L37)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`deserializers` | object[] |
`element` | Element |

**Returns:** *object & object*

___

### `Const` deserializeHtml

▸ **deserializeHtml**(`html`: string, `deserializers`: [Deserializer](globals.md#deserializer)[], `domParser?`: DOMParser): *object & object*

*Defined in [packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts:71](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/htmlDeserializer.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`html` | string |
`deserializers` | [Deserializer](globals.md#deserializer)[] |
`domParser?` | DOMParser |

**Returns:** *object & object*

___

### `Const` deserializeList

▸ **deserializeList**(`linkKey`: string, `titleKey`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/deserializers/listDeserializer.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/listDeserializer.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`linkKey` | string |
`titleKey` | string |

**Returns:** *(Anonymous function)*

___

### `Const` filterByMedia

▸ **filterByMedia**(`media`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:133](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`media` | string |

**Returns:** *(Anonymous function)*

___

### `Const` filterByWidth

▸ **filterByWidth**(`width`: number): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:136](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |

**Returns:** *(Anonymous function)*

___

### `Const` flattenElement

▸ **flattenElement**(`__namedParameters`: object): *object[]*

*Defined in [packages/bodiless-layouts/src/deserializers/flattenElement.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/flattenElement.ts#L32)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`deserializers` | object[] |
`element` | Element |

**Returns:** *object[]*

___

### `Const` generateUuid

▸ **generateUuid**(`content`: string, `index`: number): *any*

*Defined in [packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/createFlowContainerItem.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`index` | number |

**Returns:** *any*

___

### `Const` getClassNames

▸ **getClassNames**(`options`: [Tuple](globals.md#tuple)[]): *string[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:99](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L99)*

getClassNames extracts all of the unquie classNames from an array of withTuples

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Tuple](globals.md#tuple)[] | The withTuple to be inspected  |

**Returns:** *string[]*

___

### `Const` getFilteredComponents

▸ **getFilteredComponents**(`components`: any[], `filters`: Array‹any›, `searchString`: string): *any[]*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/getFilteredComponents.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/getFilteredComponents.tsx#L24)*

This generates a new list of components: newComponentArr

This function gets a list of all components and cross checks it with a list
of checked components.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`components` | any[] | - |
`filters` | Array‹any› | - |
`searchString` | string |   |

**Returns:** *any[]*

___

### `Const` getFiltersByComponentList

▸ **getFiltersByComponentList**(`components`: any): *[LooseObject](interfaces/looseobject.md)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/getFiltersByComponentList.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/getFiltersByComponentList.tsx#L28)*

This function takes array of components and extracts their values into pairs such that
{key:[value1,value2,...] , key2:[value1,value2,..]}.

The keys are the categories while the values are all values belonging to that category across all
components. Duplicates are removed from the values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`components` | any |   |

**Returns:** *[LooseObject](interfaces/looseobject.md)*

___

### `Const` getMediaMatch

▸ **getMediaMatch**(`matchMedia`: Function): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:124](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`matchMedia` | Function |

**Returns:** *(Anonymous function)*

___

### `Const` getMedias

▸ **getMedias**(`options`: [Tuple](globals.md#tuple)[]): *string[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:113](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L113)*

getMedias extracts all of the unquie widths from an array of withTuples

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Tuple](globals.md#tuple)[] | The withTuple to be inspected  |

**Returns:** *string[]*

___

### `Const` getSnapFrom

▸ **getSnapFrom**(...`withTuples`: [WithTuples](globals.md#withtuples)[]): *[SnapData](globals.md#snapdata)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:140](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`...withTuples` | [WithTuples](globals.md#withtuples)[] |

**Returns:** *[SnapData](globals.md#snapdata)*

___

### `Const` getTitleFromTerms

▸ **getTitleFromTerms**(`Component`: [ComponentWithMeta](globals.md#componentwithmeta)‹any›, `ops`: [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops)): *string*

*Defined in [packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Component` | [ComponentWithMeta](globals.md#componentwithmeta)‹any› | - |
`ops` | [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops) | {} |

**Returns:** *string*

___

### `Const` getUI

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

___

### `Const` getWidths

▸ **getWidths**(`options`: [Tuple](globals.md#tuple)[]): *number[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:85](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L85)*

getWidths extracts all of the unquie widths from an array of withTuples

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Tuple](globals.md#tuple)[] | The withTuple to be inspected  |

**Returns:** *number[]*

___

### `Const` hash

▸ **hash**(`str`: string): *number*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *number*

___

### `Const` isComponentSelector

▸ **isComponentSelector**(): *boolean*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L47)*

**Returns:** *boolean*

___

### `Const` perserveMeta

▸ **perserveMeta**(`hoc`: HOC): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:113](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L113)*

preserveMeta returns takes an hoc and returns another one that will apply the hoc but preserve
theMeta data from the component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hoc` | HOC | the hoc to wrap.  |

**Returns:** *HOC*

___

### `Const` reduceFilters

▸ **reduceFilters**(`filters`: any, `components`: any, `blacklistCategories`: string[]): *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L63)*

reduce filters so that filter is picked
when at least one of it's terms applies or associated with ALL of the components

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`filters` | any | - | - |
`components` | any | - |   |
`blacklistCategories` | string[] | [] | - |

**Returns:** *object*

___

###  removefromArray

▸ **removefromArray**(`myArr`: Array‹any›, `myVal`: any): *any[]*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`myArr` | Array‹any› |
`myVal` | any |

**Returns:** *any[]*

___

### `Const` shouldMergeElement

▸ **shouldMergeElement**(`prevElement`: [FlattenedElement](globals.md#flattenedelement), `nextElement`: [FlattenedElement](globals.md#flattenedelement)): *boolean*

*Defined in [packages/bodiless-layouts/src/deserializers/flattenElement.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/flattenElement.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`prevElement` | [FlattenedElement](globals.md#flattenedelement) |
`nextElement` | [FlattenedElement](globals.md#flattenedelement) |

**Returns:** *boolean*

___

###  titleToImageName

▸ **titleToImageName**(`componentTitle`: string): *string*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`componentTitle` | string |

**Returns:** *string*

___

### `Const` useAddButton

▸ **useAddButton**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `item?`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:162](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`handlers` | [Handlers](globals.md#handlers) |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) |
`item?` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

**Returns:** *object*

* **activateContext**: *boolean* = false

* **formTitle**: *string* = "Insert Component"

* **global**: *boolean* = false

* **icon**: *string* = "add"

* **isHidden**: *(Anonymous function)*

* **label**: *string* = "Add"

* **local**: *boolean* = true

* **name**: *string*

* **handler**(): *function*

  * (`props`: Omit‹ContextMenuFormProps, "children"›): *Element*

___

### `Const` useCloneButton

▸ **useCloneButton**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `item`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:100](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`handlers` | [Handlers](globals.md#handlers) |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) |
`item` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

**Returns:** *object*

* **global**: *boolean* = false

* **handler**: *handler*

* **icon**: *string* = "content_copy"

* **isHidden**: *(Anonymous function)*

* **label**: *string* = "Copy"

* **local**: *boolean* = true

* **name**: *string* = useItemButtonName('copy-item', item.uuid)

___

### `Const` useComponentDisplayModeContext

▸ **useComponentDisplayModeContext**(): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L31)*

**Returns:** *object*

* **mode**: *[StaticFlowContainer](enums/componentdisplaymode.md#staticflowcontainer)* = defaultMode

___

### `Private` `Const` useComponentSelectorActions

▸ **useComponentSelectorActions**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `currentItem?`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L68)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handlers` | [Handlers](globals.md#handlers) | - |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | The props provided to the FlowContainer |
`currentItem?` | [FlowContainerItem](interfaces/flowcontaineritem.md) | The currently selected item in the grid (optional);  |

**Returns:** *object*

* **insertItem**(): *function*

  * (`names`: string[]): *void*

* **replaceItem**(): *function*

  * (`names`: string[]): *void*

___

### `Const` useDeleteButton

▸ **useDeleteButton**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `item`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:130](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`handlers` | [Handlers](globals.md#handlers) |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) |
`item` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

**Returns:** *object*

* **global**: *boolean* = false

* **handler**: *handler*

* **icon**: *string* = "delete"

* **isHidden**: *(Anonymous function)* = useCallback(
      () => !context.isEdit || getItems().length <= minComponents,
      [minComponents],
    )

* **label**: *string* = "Delete"

* **local**: *boolean* = true

* **name**: *string* = useItemButtonName('delete', item.uuid)

___

### `Const` useFlowContainerDataHandlers

▸ **useFlowContainerDataHandlers**(): *[FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:63](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L63)*

**Returns:** *[FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers)*

▸ **useFlowContainerDataHandlers**(): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L27)*

**Returns:** *object*

* **deleteFlowContainerItem**: *Mock‹any, any›* = jest.fn()

* **insertFlowContainerItem**: *Mock‹object, []›* = jest.fn(() => ({ uuid: v1() }))

* **updateFlowContainerItem**: *Mock‹any, any›* = jest.fn()

___

### `Private` `Const` useGetItemUseGetMenuOptions

▸ **useGetItemUseGetMenuOptions**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:243](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L243)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | Props passed to the flow container  |

**Returns:** *(Anonymous function)*

A function which generates a 'useGetMenuOptions' prop for an item.

___

### `Const` useHasActiveChildItem

▸ **useHasActiveChildItem**(): *boolean*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L69)*

**Returns:** *boolean*

___

### `Const` useIsNested

▸ **useIsNested**(): *boolean*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L111)*

**Returns:** *boolean*

___

### `Private` `Const` useItemButtonName

▸ **useItemButtonName**(`prefix`: string, `uuid`: string): *string*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | string |
`uuid` | string |

**Returns:** *string*

___

### `Const` useItemHandlers

▸ **useItemHandlers**(): *[FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/model.ts#L47)*

**Returns:** *[FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)*

▸ **useItemHandlers**(): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L26)*

**Returns:** *object*

* **getItems**: *Mock‹any, any›* = jest.fn()

* **setItems**: *Mock‹any, any›* = jest.fn()

___

### `Private` useMenuOptions

▸ **useMenuOptions**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *object[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:216](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L216)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | The props passed to the flow container  |

**Returns:** *object[]*

___

### `Const` useSwapButton

▸ **useSwapButton**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `item`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:188](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`handlers` | [Handlers](globals.md#handlers) |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) |
`item` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

**Returns:** *object*

* **activateContext**: *boolean* = false

* **formTitle**: *string* = "Replace Component"

* **global**: *boolean* = false

* **icon**: *string* = "repeat"

* **isHidden**: *(Anonymous function)* = useCallback(() => (!context.isEdit || Object.keys(components).length <= 1), [])

* **label**: *string* = "Swap"

* **local**: *boolean* = true

* **name**: *string* = useItemButtonName('swap', item.uuid)

* **handler**(): *function*

  * (`props`: Omit‹ContextMenuFormProps, "children"›): *Element*

___

### `Const` withAllTitlesFromTerms

▸ **withAllTitlesFromTerms**(`ops`: [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops)): *Token*

*Defined in [packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx#L84)*

Creates a token which can be applied to a flow container so that
all its components will have a default title generated based on
their metadata.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ops` | [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops) | {} |  Options defining how the title should be created.  |

**Returns:** *Token*

HOC which adds a default title to all components in the flow container.

___

### `Const` withAppendDesc

▸ **withAppendDesc**(`newDescription`: string): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:94](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L94)*

withAppendDesc returns an HOC that appends a description to the component sideload description.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newDescription` | string | the description to be appened  |

**Returns:** *HOC*

___

### `Const` withAppendDisplayName

▸ **withAppendDisplayName**(`newDisplayName`: string): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:76](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L76)*

withAppendDisplayName returns a HOC that appends a name to the sideloaded DisplayName

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newDisplayName` | string | the Display name to append  |

**Returns:** *HOC*

___

### `Const` withAppendTitle

▸ **withAppendTitle**(`newTitle`: string): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L58)*

withAppendTitle returns an HOC that appends to the sideload title of the component
Note it appends to the title with a space.

**Parameters:**

Name | Type |
------ | ------ |
`newTitle` | string |

**Returns:** *HOC*

___

### `Const` withContentLibrary

▸ **withContentLibrary**(`options`: [ContentLibraryOptions](globals.md#contentlibraryoptions)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ContentLibraryOptions](globals.md#contentlibraryoptions) |

**Returns:** *(Anonymous function)*

___

### `Const` withDesc

▸ **withDesc**(`description`: string): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L87)*

withDesc returns an HOC that sideloads the provided discription to the component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`description` | string | the discription to add  |

**Returns:** *HOC*

___

### `Const` withDirection

▸ **withDirection**(`langDirection`: [Direction](globals.md#direction)): *function & object*

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`langDirection` | [Direction](globals.md#direction) |

**Returns:** *function & object*

___

### `Const` withDisplayName

▸ **withDisplayName**(`displayName`: string): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L69)*

withDisplayName returns an HOC that sideloads a displayName to a component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`displayName` | string | The displayName to be added  |

**Returns:** *HOC*

___

### `Const` withFacet

▸ **withFacet**(`cat`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:124](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L124)*

withFacet is expect to be passed to an on function and takes a term and and hoc (using curring)
 and returns a Varient that can be used in the on function

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cat` | string | Category that the Component will be apart |

**Returns:** *(Anonymous function)*

___

### `Const` withFlowContainerDefaultHtml

▸ **withFlowContainerDefaultHtml**(`deserializers`: [Deserializer](globals.md#deserializer)[], `html?`: undefined | string): *Enhancer‹object›*

*Defined in [packages/bodiless-layouts/src/deserializers/withFlowContainerDefaultHtml.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/deserializers/withFlowContainerDefaultHtml.tsx#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`deserializers` | [Deserializer](globals.md#deserializer)[] |
`html?` | undefined &#124; string |

**Returns:** *Enhancer‹object›*

___

### `Const` withMandatoryCategories

▸ **withMandatoryCategories**(`categories`: string[]): *function & object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/index.tsx#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`categories` | string[] |

**Returns:** *function & object*

___

### `Const` withMeta

▸ **withMeta**(`meta`: Object): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L42)*

withMeta creates an HOC that will add meta data to a React Component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`meta` | Object | the data to be side loaded in to the component  |

**Returns:** *HOC*

___

### `Private` `Const` withNoDesign

▸ **withNoDesign**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *[EditFlowContainerProps](globals.md#editflowcontainerprops)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L41)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | The original props of the flow container.  |

**Returns:** *[EditFlowContainerProps](globals.md#editflowcontainerprops)*

The props with irrelevant components removed.

___

### `Const` withOutMeta

▸ **withOutMeta**(`Component`: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L37)*

Creates an HOC use it to attach meta data in an hoc.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object | The component to wrap.  |

**Returns:** *(Anonymous function)*

___

### `Const` withTailwindClasses

▸ **withTailwindClasses**(`tailwindConfig`: [Config](globals.md#config)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:62](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L62)*

withTailwindClasses returns a withTuple function that take the tailwind class and creates
tuples for each one of them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tailwindConfig` | [Config](globals.md#config) | The Tailwind config to use for extraction of size data |

**Returns:** *(Anonymous function)*

___

### `Const` withTailwindWidthConstraints

▸ **withTailwindWidthConstraints**(`config`: any): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:185](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | any |

**Returns:** *(Anonymous function)*

___

### `Const` withTerm

▸ **withTerm**(`cat`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:105](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L105)*

withTerm returns a function that then takes a term and that returns an HOC that side loads
the category and term on to the component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cat` | string | that category to use in adding a term |

**Returns:** *(Anonymous function)*

___

### `Const` withTitle

▸ **withTitle**(`title`: string): *HOC*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/index.tsx#L50)*

with Title returns an HOC that sideloads a title to a component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The title to be added  |

**Returns:** *HOC*

___

### `Const` withTitleFromTerms

▸ **withTitleFromTerms**(`ops`: [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops)): *Token*

*Defined in [packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/meta/withTitleFromTerms.tsx#L67)*

Creates a token which adds a `title` property to a component. This is derived from all
terms which have been applied to that component.

The new title will only be added if the component does not already have a title.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ops` | [WithTitleFromTermsProps](globals.md#withtitlefromtermsprops) | {} |  Options for generating the title.  |

**Returns:** *Token*

A token which adds a title.

___

### `Const` withTuple

▸ **withTuple**(`media`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L44)*

Curry function that returns a withTuple to be used a snapOptions function.

**`returns:`** a Tuple with the given information

**`see`** snapOptions

**Parameters:**

Name | Type |
------ | ------ |
`media` | string |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` DIRECTIONS

### ▪ **DIRECTIONS**: *object*

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L22)*

###  LTR

• **LTR**: *[LanguageDirection](enums/languagedirection.md)* = LanguageDirection.LTR

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L23)*

###  RTL

• **RTL**: *[LanguageDirection](enums/languagedirection.md)* = LanguageDirection.RTL

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L24)*

___

### `Const` EditFlowContainerComponents

### ▪ **EditFlowContainerComponents**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L38)*

###  ComponentWrapper

• **ComponentWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<SortableChildProps>(SortableChild)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L40)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<SortableListProps>(SortableContainer)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L39)*

___

### `Const` defaultUI

### ▪ **defaultUI**: *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L30)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L38)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L18)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L35)*

###  AccordionCheckBox

• **AccordionCheckBox**: *string* = "input"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L29)*

###  AccordionCheckboxLabel

• **AccordionCheckboxLabel**: *string* = "label"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L28)*

###  AccordionCheckboxWrapper

• **AccordionCheckboxWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L26)*

###  AccordionIconContract

• **AccordionIconContract**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L33)*

###  AccordionIconExpand

• **AccordionIconExpand**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L34)*

###  AccordionItemWrapper

• **AccordionItemWrapper**: *string* = "a"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L27)*

###  AccordionLabel

• **AccordionLabel**: *string* = "label"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L32)*

###  AccordionWrapper

• **AccordionWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L25)*

###  CloseMenuIcon

• **CloseMenuIcon**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L35)*

###  ComponentDescriptionIcon

• **ComponentDescriptionIcon**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L49)*

###  ComponentDescriptionStyle

• **ComponentDescriptionStyle**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L46)*

###  ComponentDescriptionWrapper

• **ComponentDescriptionWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L45)*

###  ComponentLinkWrapper

• **ComponentLinkWrapper**: *string* = "a"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L43)*

###  ComponentPreviewStyle

• **ComponentPreviewStyle**: *string* = "img"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L47)*

###  ComponentSelectButton

• **ComponentSelectButton**: *string* = "button"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L48)*

###  ComponentSelectorWrapper

• **ComponentSelectorWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L23)*

###  ComponentTitleWrapper

• **ComponentTitleWrapper**: *string* = "h3"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L42)*

###  DragHandle

• **DragHandle**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L31)*

###  FlexSection

• **FlexSection**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L20)*

###  FlexSectionFull

• **FlexSectionFull**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L21)*

###  FlowContainerEmpty

• **FlowContainerEmpty**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L22)*

###  FlowContainerEmptyWrapper

• **FlowContainerEmptyWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L36)*

###  GridListBox

• **GridListBox**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L38)*

###  GridListBoxInner

• **GridListBoxInner**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L40)*

###  GridListBoxWrapper

• **GridListBoxWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L39)*

###  IconWrapper

• **IconWrapper**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L44)*

###  ItemBox

• **ItemBox**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L37)*

###  ItemBoxWrapper

• **ItemBoxWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L36)*

###  MasterWrapper

• **MasterWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L19)*

###  Reresizable

• **Reresizable**: *Resizable* = CleanReresizable

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L34)*

###  ResizeHandle

• **ResizeHandle**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L32)*

###  ResizeHandleRTL

• **ResizeHandleRTL**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L33)*

###  ScalingButtonFull

• **ScalingButtonFull**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L51)*

###  ScalingButtonHalf

• **ScalingButtonHalf**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L52)*

###  ScalingButtonQuarter

• **ScalingButtonQuarter**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L53)*

###  ScalingHeader

• **ScalingHeader**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L50)*

###  SearchBar

• **SearchBar**: *string* = "input"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L31)*

###  SearchBarWrapper

• **SearchBarWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L30)*

###  SnapIndicator

• **SnapIndicator**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L40)*

###  SubmitButton

• **SubmitButton**: *string* = "button"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L24)*

###  TitleWrapper

• **TitleWrapper**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L41)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & SortableElementProps, any›* = CleanWrapper

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L39)*

___

### `Const` flowContainerComponentStart

### ▪ **flowContainerComponentStart**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L27)*

###  ComponentWrapper

• **ComponentWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L29)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L28)*

___

### `Const` flowContainerDataHandlers

### ▪ **flowContainerDataHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L21)*

###  deleteFlowContainerItem

• **deleteFlowContainerItem**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L23)*

###  insertFlowContainerItem

• **insertFlowContainerItem**: *Mock‹object, []›* = jest.fn(() => ({ uuid: v1() }))

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L22)*

###  updateFlowContainerItem

• **updateFlowContainerItem**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L24)*

___

### `Const` itemHandlers

### ▪ **itemHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L17)*

###  getItems

• **getItems**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L18)*

###  setItems

• **setItems**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:19](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L19)*
