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
* [DeleteFlowContainerItem](globals.md#deleteflowcontaineritem)
* [Direction](globals.md#direction)
* [EditFlowContainerProps](globals.md#editflowcontainerprops)
* [FinalUI](globals.md#finalui)
* [FlowContainerComponentProps](globals.md#flowcontainercomponentprops)
* [FlowContainerComponents](globals.md#flowcontainercomponents)
* [FlowContainerData](globals.md#flowcontainerdata)
* [FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers)
* [FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)
* [FlowContainerProps](globals.md#flowcontainerprops)
* [HOC](globals.md#hoc)
* [Handlers](globals.md#handlers)
* [InsertContentNode](globals.md#insertcontentnode)
* [ItemListProps](globals.md#itemlistprops)
* [Meta](globals.md#meta)
* [MetaCategory](globals.md#metacategory)
* [OnFlowContainerItemResize](globals.md#onflowcontaineritemresize)
* [Props](globals.md#props)
* [SetFlowContainerItems](globals.md#setflowcontaineritems)
* [SnapData](globals.md#snapdata)
* [SnapDataProps](globals.md#snapdataprops)
* [SnapDataReturn](globals.md#snapdatareturn)
* [SortableChildProps](globals.md#sortablechildprops)
* [SortableListProps](globals.md#sortablelistprops)
* [SortableResizableProps](globals.md#sortableresizableprops)
* [StaticFlowContainerProps](globals.md#staticflowcontainerprops)
* [Tuple](globals.md#tuple)
* [UI](globals.md#ui)
* [UpdateFlowContainerItem](globals.md#updateflowcontaineritem)
* [WidthClassTuple](globals.md#widthclasstuple)
* [WithMeta](globals.md#withmeta)
* [WithTuples](globals.md#withtuples)

### Variables

* [BASE_URL_NO_PREFIX_SLASH](globals.md#const-base_url_no_prefix_slash)
* [COMPONENTS_PREVIEW_BASE_URL](globals.md#const-components_preview_base_url)
* [ChildNodeProvider](globals.md#const-childnodeprovider)
* [ComponentDisplayModeContext](globals.md#const-componentdisplaymodecontext)
* [FALLBACK_SNAP_CLASSNAME](globals.md#const-fallback_snap_classname)
* [FlowContainer](globals.md#const-flowcontainer)
* [FlowContainerDesignable](globals.md#const-flowcontainerdesignable)
* [FlowContainerEmpty](globals.md#const-flowcontainerempty)
* [Handle](globals.md#const-handle)
* [NodeProvider](globals.md#const-nodeprovider)
* [RESIZE_THROTTLE_INTERVAL](globals.md#const-resize_throttle_interval)
* [SortableChild](globals.md#const-sortablechild)
* [SortableListWrapper](globals.md#const-sortablelistwrapper)
* [SortableResizable](globals.md#const-sortableresizable)
* [SortableResizableWrapper](globals.md#const-sortableresizablewrapper)
* [UIConsumer](globals.md#const-uiconsumer)
* [asEditFlowContainer](globals.md#const-aseditflowcontainer)
* [asStaticFlowContainer](globals.md#const-asstaticflowcontainer)
* [backendPort](globals.md#const-backendport)
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
* [customizer](globals.md#customizer)
* [dataURItoBlob](globals.md#datauritoblob)
* [filterByMedia](globals.md#const-filterbymedia)
* [filterByWidth](globals.md#const-filterbywidth)
* [getClassNames](globals.md#const-getclassnames)
* [getFilteredComponents](globals.md#const-getfilteredcomponents)
* [getFiltersByComponentList](globals.md#const-getfiltersbycomponentlist)
* [getMediaMatch](globals.md#const-getmediamatch)
* [getMedias](globals.md#const-getmedias)
* [getSnapFrom](globals.md#const-getsnapfrom)
* [getUI](globals.md#const-getui)
* [getWidths](globals.md#const-getwidths)
* [hash](globals.md#const-hash)
* [isComponentSelector](globals.md#const-iscomponentselector)
* [perserveMeta](globals.md#const-perservemeta)
* [reduceFilters](globals.md#const-reducefilters)
* [removefromArray](globals.md#removefromarray)
* [titleToImageName](globals.md#titletoimagename)
* [useAddButton](globals.md#const-useaddbutton)
* [useCloneButton](globals.md#const-useclonebutton)
* [useComponentDisplayModeContext](globals.md#const-usecomponentdisplaymodecontext)
* [useComponentSelectorActions](globals.md#private-const-usecomponentselectoractions)
* [useDeleteButton](globals.md#const-usedeletebutton)
* [useFlowContainerDataHandlers](globals.md#const-useflowcontainerdatahandlers)
* [useGetItemUseGetMenuOptions](globals.md#private-const-usegetitemusegetmenuoptions)
* [useIsNested](globals.md#const-useisnested)
* [useItemHandlers](globals.md#const-useitemhandlers)
* [useMenuOptions](globals.md#private-usemenuoptions)
* [useSwapButton](globals.md#const-useswapbutton)
* [withAppendDesc](globals.md#const-withappenddesc)
* [withAppendDisplayName](globals.md#const-withappenddisplayname)
* [withAppendTitle](globals.md#const-withappendtitle)
* [withContentLibrary](globals.md#const-withcontentlibrary)
* [withDesc](globals.md#const-withdesc)
* [withDirection](globals.md#const-withdirection)
* [withDisplayName](globals.md#const-withdisplayname)
* [withFacet](globals.md#const-withfacet)
* [withMandatoryCategories](globals.md#const-withmandatorycategories)
* [withMeta](globals.md#const-withmeta)
* [withNoDesign](globals.md#private-const-withnodesign)
* [withOutMeta](globals.md#const-withoutmeta)
* [withTailwindClasses](globals.md#const-withtailwindclasses)
* [withTerm](globals.md#const-withterm)
* [withTitle](globals.md#const-withtitle)
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

Ƭ **CTWM**: *CT & [WithMeta](globals.md#withmeta)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L31)*

___

###  Categories

Ƭ **Categories**: *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L32)*

#### Type declaration:

* \[ **key**: *string*\]: string[]

___

###  ComponentSelectorProps

Ƭ **ComponentSelectorProps**: *[ItemListProps](globals.md#itemlistprops) & object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:17](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L17)*

___

###  ComponentSelectorUI

Ƭ **ComponentSelectorUI**: *Partial‹[FinalUI](globals.md#finalui)›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:151](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L151)*

___

###  ComponentWithMeta

Ƭ **ComponentWithMeta**: *ComponentType‹P› & [Meta](globals.md#meta)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L59)*

___

###  ComponentWithPartialMeta

Ƭ **ComponentWithPartialMeta**: *ComponentType‹P› & Partial‹[Meta](globals.md#meta)›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L60)*

___

###  Config

Ƭ **Config**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:49](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L49)*

#### Type declaration:

* **theme**(): *object*

  * **screens**(): *object*

  * **width**(): *object*

___

###  ContentLibraryOptions

Ƭ **ContentLibraryOptions**: *object*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:13](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L13)*

#### Type declaration:

* **DisplayComponent**? : *ComponentType‹any›*

* **Selector**? : *ComponentType‹[ComponentSelectorProps](globals.md#componentselectorprops)›*

* **useLibraryNode**(): *function*

  * (`props`: any): *object*

    * **node**: *ContentNode‹any›*

* **useMeta**? : *undefined | function*

* **useOverrides**? : *undefined | function*

___

###  DeleteFlowContainerItem

Ƭ **DeleteFlowContainerItem**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L33)*

#### Type declaration:

▸ (`uuid`: string): *[FlowContainerItem](interfaces/flowcontaineritem.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |

___

###  Direction

Ƭ **Direction**: *[RTL](enums/languagedirection.md#rtl) | [LTR](enums/languagedirection.md#ltr)*

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L26)*

___

###  EditFlowContainerProps

Ƭ **EditFlowContainerProps**: *[StaticFlowContainerProps](globals.md#staticflowcontainerprops) & object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L31)*

___

###  FinalUI

Ƭ **FinalUI**: *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L21)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L31)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:76](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L76)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L23)*

#### Type declaration:

* **FlowContainerEmptyWrapper**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

###  FlowContainerComponentProps

Ƭ **FlowContainerComponentProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:45](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L45)*

#### Type declaration:

* **components**: *DesignableComponents*

* **ui**? : *[ComponentSelectorUI](globals.md#componentselectorui)*

___

###  FlowContainerComponents

Ƭ **FlowContainerComponents**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:74](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L74)*

#### Type declaration:

* **ComponentWrapper**: *ComponentType‹StylableProps & [SortableChildProps](globals.md#sortablechildprops)›*

* **Wrapper**: *ComponentType‹StylableProps & [SortableListProps](globals.md#sortablelistprops)›*

___

###  FlowContainerData

Ƭ **FlowContainerData**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L25)*

#### Type declaration:

* **items**: *[FlowContainerItem](interfaces/flowcontaineritem.md)[]*

___

###  FlowContainerDataHandlers

Ƭ **FlowContainerDataHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L34)*

#### Type declaration:

* **deleteFlowContainerItem**: *[DeleteFlowContainerItem](globals.md#deleteflowcontaineritem)*

* **insertFlowContainerItem**: *[InsertContentNode](globals.md#insertcontentnode)*

* **onFlowContainerItemResize**: *[OnFlowContainerItemResize](globals.md#onflowcontaineritemresize)*

* **setFlowContainerItems**: *[SetFlowContainerItems](globals.md#setflowcontaineritems)*

* **updateFlowContainerItem**: *[UpdateFlowContainerItem](globals.md#updateflowcontaineritem)*

___

###  FlowContainerItemHandlers

Ƭ **FlowContainerItemHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L41)*

#### Type declaration:

* **deleteItem**(): *function*

  * (`uuid?`: string | undefined): *void*

* **getItems**(): *function*

  * (): *[FlowContainerItem](interfaces/flowcontaineritem.md)[]*

* **setItems**(): *function*

  * (`items`: [FlowContainerItem](interfaces/flowcontaineritem.md)[]): *void*

___

###  FlowContainerProps

Ƭ **FlowContainerProps**: *[EditFlowContainerProps](globals.md#editflowcontainerprops) & WithNodeProps*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L44)*

___

###  HOC

Ƭ **HOC**: *function*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L32)*

#### Type declaration:

▸ (`Component?`: [CTWM](globals.md#ctwm)): *[CTWM](globals.md#ctwm)*

**Parameters:**

Name | Type |
------ | ------ |
`Component?` | [CTWM](globals.md#ctwm) |

___

###  Handlers

Ƭ **Handlers**: *[FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers) & [FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L28)*

___

###  InsertContentNode

Ƭ **InsertContentNode**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L22)*

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

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L65)*

Props passed to the list of items within the component selector.

#### Type declaration:

* **components**: *[ComponentWithMeta](globals.md#componentwithmeta)[]*

* **onSelect**(): *function*

  * (`names`: string[]): *void*

___

###  Meta

Ƭ **Meta**: *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/types.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/types.tsx#L40)*

Component metadata used to search, filter and display
information about a component,

#### Type declaration:

* **categories**? : *[Categories](globals.md#categories)*

* **description**: *string*

* **displayName**: *string*

* **title**: *string*

___

###  MetaCategory

Ƭ **MetaCategory**: *object*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L22)*

#### Type declaration:

* \[ **cat**: *string*\]: string[]

___

###  OnFlowContainerItemResize

Ƭ **OnFlowContainerItemResize**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L29)*

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

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L39)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L42)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L33)*

#### Type declaration:

* **mode**: *[ComponentDisplayMode](enums/componentdisplaymode.md)*

___

###  SetFlowContainerItems

Ƭ **SetFlowContainerItems**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L27)*

#### Type declaration:

▸ (`items`: [FlowContainerItem](interfaces/flowcontaineritem.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [FlowContainerItem](interfaces/flowcontaineritem.md)[] |

___

###  SnapData

Ƭ **SnapData**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L33)*

#### Type declaration:

▸ (`props`: [SnapDataProps](globals.md#snapdataprops)): *[SnapDataReturn](globals.md#snapdatareturn)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SnapDataProps](globals.md#snapdataprops) |

___

###  SnapDataProps

Ƭ **SnapDataProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L22)*

#### Type declaration:

* **className**: *string*

* **matchMedia**? : *Function*

* **width**? : *undefined | number*

___

###  SnapDataReturn

Ƭ **SnapDataReturn**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L27)*

#### Type declaration:

* **className**: *string*

* **currentMediaTuples**: *[Tuple](globals.md#tuple)[]*

* **width**: *number*

___

###  SortableChildProps

Ƭ **SortableChildProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:62](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L62)*

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

Ƭ **SortableListProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L29)*

#### Type declaration:

* **children**: *React.ReactNode[]*

* **className**? : *undefined | string*

* **onSortEnd**: *SortEndHandler*

* **ui**? : *[UI](globals.md#ui)*

___

###  SortableResizableProps

Ƭ **SortableResizableProps**: *Omit‹[Props](globals.md#props), "useGetMenuOptions"›*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L63)*

___

###  StaticFlowContainerProps

Ƭ **StaticFlowContainerProps**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L28)*

#### Type declaration:

* **components**: *DesignableComponents*

___

###  Tuple

Ƭ **Tuple**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L17)*

#### Type declaration:

* **className**: *string*

* **media**: *string*

* **width**: *number*

___

###  UI

Ƭ **UI**: *[ComponentSelectorUI](globals.md#componentselectorui) & SortableResizableUI*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L28)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L35)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L27)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L23)*

___

###  UpdateFlowContainerItem

Ƭ **UpdateFlowContainerItem**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L28)*

#### Type declaration:

▸ (`flowContainerItem`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`flowContainerItem` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

___

###  WidthClassTuple

Ƭ **WidthClassTuple**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/types.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/types.ts#L39)*

#### Type declaration:

* **class**: *string*

* **media**: *string*

* **width**: *number*

___

###  WithMeta

Ƭ **WithMeta**: *object*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L25)*

#### Type declaration:

* **categories**? : *[MetaCategory](globals.md#metacategory)*

* **description**? : *undefined | string*

* **displayName**? : *undefined | string*

* **title**? : *undefined | string*

___

###  WithTuples

Ƭ **WithTuples**: *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L32)*

#### Type declaration:

▸ (`tuples`: [Tuple](globals.md#tuple)[]): *[Tuple](globals.md#tuple)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tuples` | [Tuple](globals.md#tuple)[] |

## Variables

### `Const` BASE_URL_NO_PREFIX_SLASH

• **BASE_URL_NO_PREFIX_SLASH**: *string* = COMPONENTS_PREVIEW_BASE_URL.split('/').filter(Boolean).join('/')

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L21)*

___

### `Const` COMPONENTS_PREVIEW_BASE_URL

• **COMPONENTS_PREVIEW_BASE_URL**: *string* = "/images/component-previews/"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/config.ts:16](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/config.ts#L16)*

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

• **ChildNodeProvider**: *function* = withNode<PropsWithChildren<{}>, any>(React.Fragment)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L36)*

#### Type declaration:

▸ (`__namedParameters`: object): *Element*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`nodeCollection` | undefined &#124; string |
`nodeKey` | string |
`rest` | object |

___

### `Const` ComponentDisplayModeContext

• **ComponentDisplayModeContext**: *Context‹object›* = React.createContext({
  mode: defaultMode,
})

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L27)*

___

### `Const` FALLBACK_SNAP_CLASSNAME

• **FALLBACK_SNAP_CLASSNAME**: *"w-full"* = "w-full"

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx#L24)*

___

### `Const` FlowContainer

• **FlowContainer**: *function* = withNode(FlowContainerDesignable)

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/index.tsx#L49)*

#### Type declaration:

▸ (`__namedParameters`: object): *Element*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`nodeCollection` | undefined &#124; string |
`nodeKey` | string |
`rest` | object |

___

### `Const` FlowContainerDesignable

• **FlowContainerDesignable**: *any* = flow(
  observer,
  withDesign({
    Wrapper: addClasses('flex flex-wrap'),
  }),
)(FlowContainerBasic)

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/index.tsx#L38)*

___

### `Const` FlowContainerEmpty

• **FlowContainerEmpty**: *object* = flow(
  withContextActivator('onClick'),
  withLocalContextMenu,
)(FlowContainerEmpty$)

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L57)*

#### Type declaration:

▸ (`props`: any): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

* **displayName**: *string*

___

### `Const` Handle

• **Handle**: *ComponentClass‹any, any›* = SortableHandle(({ component: Component, ...rest }: any) => (
  <Component {...rest} />
))

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L55)*

___

### `Const` NodeProvider

• **NodeProvider**: *function* = withNode<PropsWithChildren<{}>, any>(React.Fragment)

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L31)*

#### Type declaration:

▸ (`__namedParameters`: object): *Element*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`nodeCollection` | undefined &#124; string |
`nodeKey` | string |
`rest` | object |

___

### `Const` RESIZE_THROTTLE_INTERVAL

• **RESIZE_THROTTLE_INTERVAL**: *number* = 100

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx#L23)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableChild.tsx#L30)*

This is the component which wraps all items in the flow container. You probably
only need to use it directly if you are customizing the Admin UI.

___

### `Const` SortableListWrapper

• **SortableListWrapper**: *ComponentClass‹object & SortableContainerProps, any›* = SortableContainer(
  observer(
    ({ children, ui, ...rest }: SortableListProps): React.ReactElement<SortableListProps> => {
      const content = children && children.length
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

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:62](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L62)*

___

### `Const` SortableResizable

• **SortableResizable**: *any* = flow(
  observer,
  withContextActivator('onClick'),
  withLocalContextMenu,
)(SortableResizable$)

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:89](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L89)*

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

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L59)*

___

### `Const` UIConsumer

• **UIConsumer**: *ExoticComponent‹ConsumerProps‹object››* = uiContext.Consumer

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:171](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L171)*

___

### `Const` asEditFlowContainer

• **asEditFlowContainer**: *function* = flowRight(
  withActivateOnEffect,
  observer,
  designable(EditFlowContainerComponents, 'FlowContainer'),
  withMenuOptions({
    useMenuOptions,
    name: 'Flow Container',
  }),
  observer,
)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:102](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L102)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L67)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` backendPort

• **backendPort**: *string | 8001* = process.env.GATSBY_BACKEND_PORT || 8001

*Defined in [packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/BackendClient.ts#L17)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/config.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/config.ts#L18)*

___

### `Const` defaultMode

• **defaultMode**: *[StaticFlowContainer](enums/componentdisplaymode.md#staticflowcontainer)* = ComponentDisplayMode.StaticFlowContainer

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L25)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:168](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L168)*

#### Type declaration:

▸ (`props`: [SnapDataProps](globals.md#snapdataprops)): *[SnapDataReturn](globals.md#snapdatareturn)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [SnapDataProps](globals.md#snapdataprops) |

___

### `Const` html2canvas

• **html2canvas**: *any* = typeof window !== 'undefined' ? require('html2canvas') : undefined

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L19)*

___

### `Const` ifComponentSelector

• **ifComponentSelector**: *function* = flowIf(isComponentSelector)

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L50)*

#### Type declaration:

▸ ‹**H**›(...`hocs`: Function[]): *function*

**Type parameters:**

▪ **H**: *Function*

**Parameters:**

Name | Type |
------ | ------ |
`...hocs` | Function[] |

▸ ‹**P**›(`Component`: string | ComponentClass‹P, any› | FunctionComponent‹P›): *function*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | string &#124; ComponentClass‹P, any› &#124; FunctionComponent‹P› |

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

___

### `Const` ifNotComponentSelector

• **ifNotComponentSelector**: *function* = flowIf(isNotComponentSelector)

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L51)*

#### Type declaration:

▸ ‹**H**›(...`hocs`: Function[]): *function*

**Type parameters:**

▪ **H**: *Function*

**Parameters:**

Name | Type |
------ | ------ |
`...hocs` | Function[] |

▸ ‹**P**›(`Component`: string | ComponentClass‹P, any› | FunctionComponent‹P›): *function*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | string &#124; ComponentClass‹P, any› &#124; FunctionComponent‹P› |

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

___

### `Const` isNotComponentSelector

• **isNotComponentSelector**: *function* = negate(isComponentSelector)

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L48)*

#### Type declaration:

▸ (...`args`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

___

### `Const` uiContext

• **uiContext**: *Context‹object›* = React.createContext(defaultUI)

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L56)*

## Functions

###  Capitalize

▸ **Capitalize**(`str`: String): *string*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | String |

**Returns:** *string*

___

###  Checkbox

▸ **Checkbox**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L40)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L37)*

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

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:81](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

###  Dropdown

▸ **Dropdown**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L70)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L46)*

An editable version of the FlowContainer container.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) |

**Returns:** *Element‹›*

___

### `Const` EditListView

▸ **EditListView**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L78)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | (undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹›)[] |
`onSortEnd` | function |
`rest` | rest |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` FilterWrapper

▸ **FilterWrapper**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:92](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` FlowContainerBasic

▸ **FlowContainerBasic**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/index.tsx#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` FlowContainerEmpty$

▸ **FlowContainerEmpty$**(`ui`: [UI](globals.md#ui)): *Element‹›*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | [UI](globals.md#ui) |

**Returns:** *Element‹›*

___

###  GetComponentThumbnail

▸ **GetComponentThumbnail**(`callbackFxn`: Function, `myId`: string): *void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackFxn` | Function |
`myId` | string |

**Returns:** *void*

___

### `Const` ItemList

▸ **ItemList**(`props`: object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ItemList.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ItemList.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object |

**Returns:** *Element‹›*

___

###  RenderCanvas

▸ **RenderCanvas**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` SearchWrapper

▸ **SearchWrapper**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/SearchWrapper.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/SearchWrapper.tsx#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` SlateSortableResizable

▸ **SlateSortableResizable**(`props`: [Props](globals.md#props)): *Element‹›*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [Props](globals.md#props) |

**Returns:** *Element‹›*

___

### `Const` SortableResizable$

▸ **SortableResizable$**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L65)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L33)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |

**Returns:** *Element‹›*

___

### `Const` TextFormatList

▸ **TextFormatList**(`props`: object & object): *Element‹›*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:152](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object |

**Returns:** *Element‹›*

___

###  addtoArray

▸ **addtoArray**(`myArr`: Array‹any›, `myVal`: any): *any[]*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`myArr` | Array‹any› |
`myVal` | any |

**Returns:** *any[]*

___

### `Const` applyMandatoryCategories

▸ **applyMandatoryCategories**(`components`: any, `mandatoryCategories`: string[]): *void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | any |
`mandatoryCategories` | string[] |

**Returns:** *void*

___

### `Const` asPassThough

▸ **asPassThough**(`Component`: [CTWM](globals.md#ctwm)): *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [CTWM](globals.md#ctwm) |

**Returns:** *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

___

### `Const` childKeys

▸ **childKeys**(`node`: ContentNode‹any›): *string[]*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ContentNode‹any› |

**Returns:** *string[]*

___

### `Const` componentSelectorForm

▸ **componentSelectorForm**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `onSelect`: ComponentSelectorProps["onSelect"]): *function*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/componentSelectorForm.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/componentSelectorForm.tsx#L26)*

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

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | ContentNode‹any› |
`dest` | ContentNode‹any› |
`copyChildren` | boolean |

**Returns:** *void*

___

###  customizer

▸ **customizer**(`objValue`: any, `srcValue`: any): *undefined | any[]*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`objValue` | any |
`srcValue` | any |

**Returns:** *undefined | any[]*

___

###  dataURItoBlob

▸ **dataURItoBlob**(`dataURI`: any): *Blob*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`dataURI` | any |

**Returns:** *Blob*

___

### `Const` filterByMedia

▸ **filterByMedia**(`media`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:132](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`media` | string |

**Returns:** *(Anonymous function)*

___

### `Const` filterByWidth

▸ **filterByWidth**(`width`: number): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:135](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |

**Returns:** *(Anonymous function)*

___

### `Const` getClassNames

▸ **getClassNames**(`options`: [Tuple](globals.md#tuple)[]): *string[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:98](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L98)*

getClassNames extracts all of the unquie classNames from an array of withTuples

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Tuple](globals.md#tuple)[] | The withTuple to be inspected  |

**Returns:** *string[]*

___

### `Const` getFilteredComponents

▸ **getFilteredComponents**(`components`: any[], `filters`: Array‹any›, `searchString`: string): *any[]*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/getFilteredComponents.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/getFilteredComponents.tsx#L24)*

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

*Defined in [packages/bodiless-layouts/src/ComponentSelector/getFiltersByComponentList.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/getFiltersByComponentList.tsx#L28)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:123](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`matchMedia` | Function |

**Returns:** *(Anonymous function)*

___

### `Const` getMedias

▸ **getMedias**(`options`: [Tuple](globals.md#tuple)[]): *string[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:112](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L112)*

getMedias extracts all of the unquie widths from an array of withTuples

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Tuple](globals.md#tuple)[] | The withTuple to be inspected  |

**Returns:** *string[]*

___

### `Const` getSnapFrom

▸ **getSnapFrom**(...`withTuples`: [WithTuples](globals.md#withtuples)[]): *[SnapData](globals.md#snapdata)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:139](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`...withTuples` | [WithTuples](globals.md#withtuples)[] |

**Returns:** *[SnapData](globals.md#snapdata)*

___

### `Const` getUI

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L40)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L40)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

___

### `Const` getWidths

▸ **getWidths**(`options`: [Tuple](globals.md#tuple)[]): *number[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:84](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L84)*

getWidths extracts all of the unquie widths from an array of withTuples

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Tuple](globals.md#tuple)[] | The withTuple to be inspected  |

**Returns:** *number[]*

___

### `Const` hash

▸ **hash**(`str`: string): *number*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:71](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *number*

___

### `Const` isComponentSelector

▸ **isComponentSelector**(): *boolean*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L47)*

**Returns:** *boolean*

___

### `Const` perserveMeta

▸ **perserveMeta**(`hoc`: [HOC](globals.md#hoc)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:122](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L122)*

preserveMeta returns takes an hoc and returns another one that will apply the hoc but preserve
theMeta data from the component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hoc` | [HOC](globals.md#hoc) | the hoc to wrap.  |

**Returns:** *(Anonymous function)*

___

### `Const` reduceFilters

▸ **reduceFilters**(`filters`: any, `components`: any): *object*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/index.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/index.tsx#L59)*

reduce filters so that filter is picked
when at least one of it's terms applies or associated with ALL of the components

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filters` | any | - |
`components` | any |   |

**Returns:** *object*

___

###  removefromArray

▸ **removefromArray**(`myArr`: Array‹any›, `myVal`: any): *any[]*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/FilterWrapper.tsx#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`myArr` | Array‹any› |
`myVal` | any |

**Returns:** *any[]*

___

###  titleToImageName

▸ **titleToImageName**(`componentTitle`: string): *string*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`componentTitle` | string |

**Returns:** *string*

___

### `Const` useAddButton

▸ **useAddButton**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `item?`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:143](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L143)*

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

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L86)*

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

* **name**: *string* = `copy-item-${item.uuid}`

___

### `Const` useComponentDisplayModeContext

▸ **useComponentDisplayModeContext**(): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/ComponentDisplayMode.tsx#L31)*

**Returns:** *object*

* **mode**: *[StaticFlowContainer](enums/componentdisplaymode.md#staticflowcontainer)* = defaultMode

___

### `Private` `Const` useComponentSelectorActions

▸ **useComponentSelectorActions**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `currentItem?`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L54)*

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

▸ **useDeleteButton**(`handlers`: [Handlers](globals.md#handlers), `item`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`handlers` | [Handlers](globals.md#handlers) |
`item` | [FlowContainerItem](interfaces/flowcontaineritem.md) |

**Returns:** *object*

* **global**: *boolean* = false

* **handler**: *handler*

* **icon**: *string* = "delete"

* **isHidden**: *(Anonymous function)* = useCallback(() => !context.isEdit, [])

* **label**: *string* = "Delete"

* **local**: *boolean* = true

* **name**: *string* = `delete-${item.uuid}`

___

### `Const` useFlowContainerDataHandlers

▸ **useFlowContainerDataHandlers**(): *[FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:63](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L63)*

**Returns:** *[FlowContainerDataHandlers](globals.md#flowcontainerdatahandlers)*

▸ **useFlowContainerDataHandlers**(): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L27)*

**Returns:** *object*

* **deleteFlowContainerItem**: *Mock‹any, any›* = jest.fn()

* **insertFlowContainerItem**: *Mock‹object, []›* = jest.fn(() => ({ uuid: v1() }))

* **updateFlowContainerItem**: *Mock‹any, any›* = jest.fn()

___

### `Private` `Const` useGetItemUseGetMenuOptions

▸ **useGetItemUseGetMenuOptions**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:223](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L223)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | Props passed to the flow container  |

**Returns:** *(Anonymous function)*

A function which generates a 'useGetMenuOptions' prop for an item.

___

### `Const` useIsNested

▸ **useIsNested**(`prefix`: string): *boolean*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L95)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`prefix` | string | "flexItem" |

**Returns:** *boolean*

___

### `Const` useItemHandlers

▸ **useItemHandlers**(): *[FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/model.ts:47](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/model.ts#L47)*

**Returns:** *[FlowContainerItemHandlers](globals.md#flowcontaineritemhandlers)*

▸ **useItemHandlers**(): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L26)*

**Returns:** *object*

* **getItems**: *Mock‹any, any›* = jest.fn()

* **setItems**: *Mock‹any, any›* = jest.fn()

___

### `Private` useMenuOptions

▸ **useMenuOptions**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *object[]*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:196](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L196)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | The props passed to the flow container  |

**Returns:** *object[]*

___

### `Const` useSwapButton

▸ **useSwapButton**(`handlers`: [Handlers](globals.md#handlers), `props`: [EditFlowContainerProps](globals.md#editflowcontainerprops), `item`: [FlowContainerItem](interfaces/flowcontaineritem.md)): *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:169](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L169)*

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

* **isHidden**: *(Anonymous function)* = useCallback(() => !context.isEdit, [])

* **label**: *string* = "Swap"

* **local**: *boolean* = true

* **name**: *string* = `swap-${item.uuid}`

* **handler**(): *function*

  * (`props`: Omit‹ContextMenuFormProps, "children"›): *Element*

___

### `Const` withAppendDesc

▸ **withAppendDesc**(`newDescription`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:102](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L102)*

withAppendDesc returns an HOC that appends a description to the component sideload description.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newDescription` | string | the description to be appened  |

**Returns:** *(Anonymous function)*

___

### `Const` withAppendDisplayName

▸ **withAppendDisplayName**(`newDisplayName`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L84)*

withAppendDisplayName returns a HOC that appends a name to the sideloaded DisplayName

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newDisplayName` | string | the Display name to append  |

**Returns:** *(Anonymous function)*

___

### `Const` withAppendTitle

▸ **withAppendTitle**(`newTitle`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L66)*

withAppendTitle returns an HOC that appends to the sideload title of the component
Note it appends to the title with a space.

**Parameters:**

Name | Type |
------ | ------ |
`newTitle` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withContentLibrary

▸ **withContentLibrary**(`options`: [ContentLibraryOptions](globals.md#contentlibraryoptions)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ContentLibrary/withContentLibrary.tsx#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ContentLibraryOptions](globals.md#contentlibraryoptions) |

**Returns:** *(Anonymous function)*

___

### `Const` withDesc

▸ **withDesc**(`description`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L95)*

withDesc returns an HOC that sideloads the provided discription to the component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`description` | string | the discription to add  |

**Returns:** *(Anonymous function)*

___

### `Const` withDirection

▸ **withDirection**(`langDirection`: [Direction](globals.md#direction)): *function*

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`langDirection` | [Direction](globals.md#direction) |

**Returns:** *function*

▸ (`Component`: ComponentType‹any›): *ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

___

### `Const` withDisplayName

▸ **withDisplayName**(`displayName`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:77](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L77)*

withDisplayName returns an HOC that sideloads a displayName to a component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`displayName` | string | The displayName to be added  |

**Returns:** *(Anonymous function)*

___

### `Const` withFacet

▸ **withFacet**(`cat`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:133](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L133)*

withFacet is expect to be passed to an on function and takes a term and and hoc (using curring)
 and returns a Varient that can be used in the on function

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cat` | string | Category that the Component will be apart |

**Returns:** *(Anonymous function)*

___

### `Const` withMandatoryCategories

▸ **withMandatoryCategories**(`categories`: string[]): *function*

*Defined in [packages/bodiless-layouts/src/FlowContainer/index.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/index.tsx#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`categories` | string[] |

**Returns:** *function*

▸ (`Component`: ComponentType‹any›): *ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

___

### `Const` withMeta

▸ **withMeta**(`meta`: Object): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L50)*

withMeta creates an HOC that will add meta data to a React Component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`meta` | Object | the data to be side loaded in to the component  |

**Returns:** *(Anonymous function)*

___

### `Private` `Const` withNoDesign

▸ **withNoDesign**(`props`: [EditFlowContainerProps](globals.md#editflowcontainerprops)): *[EditFlowContainerProps](globals.md#editflowcontainerprops)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/useGetMenuOptions.tsx#L40)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [EditFlowContainerProps](globals.md#editflowcontainerprops) | The original props of the flow container.  |

**Returns:** *[EditFlowContainerProps](globals.md#editflowcontainerprops)*

The props with irrelevant components removed.

___

### `Const` withOutMeta

▸ **withOutMeta**‹**P**›(`Component`: [CTWM](globals.md#ctwm)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L45)*

Creates an HOC use it to attach meta data in an hoc.

**Type parameters:**

▪ **P**: *Object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | [CTWM](globals.md#ctwm) | The component to wrap.  |

**Returns:** *(Anonymous function)*

___

### `Const` withTailwindClasses

▸ **withTailwindClasses**(`tailwindConfig`: [Config](globals.md#config)): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:61](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L61)*

withTailwindClasses returns a withTuple function that take the tailwind class and creates
tuples for each one of them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tailwindConfig` | [Config](globals.md#config) | The Tailwind config to use for extraction of size data |

**Returns:** *(Anonymous function)*

___

### `Const` withTerm

▸ **withTerm**(`cat`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:114](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L114)*

withTerm returns a function that then takes a term and that returns an HOC that side loads
the category and term on to the component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cat` | string | that category to use in adding a term |

**Returns:** *(Anonymous function)*

___

### `Const` withTitle

▸ **withTitle**(`title`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/meta/index.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/meta/index.tsx#L58)*

with Title returns an HOC that sideloads a title to a component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The title to be added  |

**Returns:** *(Anonymous function)*

___

### `Const` withTuple

▸ **withTuple**(`media`: string): *(Anonymous function)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts:43](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/utils/appendTailwindWidthClass.ts#L43)*

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

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L22)*

###  LTR

• **LTR**: *[LanguageDirection](enums/languagedirection.md)* = LanguageDirection.LTR

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L23)*

###  RTL

• **RTL**: *[LanguageDirection](enums/languagedirection.md)* = LanguageDirection.RTL

*Defined in [packages/bodiless-layouts/src/withDirection/withDirection.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/withDirection/withDirection.tsx#L24)*

___

### `Const` EditFlowContainerComponents

### ▪ **EditFlowContainerComponents**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L38)*

###  ComponentWrapper

• **ComponentWrapper**: *object* = stylable<SortableChildProps>(SortableChild)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L40)*

#### Type declaration:

▸ (`props`: P & StylableProps & ForwardRefProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps & ForwardRefProps |

* **displayName**: *string*

###  Wrapper

• **Wrapper**: *object* = stylable<SortableListProps>(SortableContainer)

*Defined in [packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/EditFlowContainer.tsx#L39)*

#### Type declaration:

▸ (`props`: P & StylableProps & ForwardRefProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps & ForwardRefProps |

* **displayName**: *string*

___

### `Const` defaultUI

### ▪ **defaultUI**: *object*

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L30)*

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L36)*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L18)*

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L36)*

###  AccordionCheckBox

• **AccordionCheckBox**: *string* = "input"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L29)*

###  AccordionCheckboxLabel

• **AccordionCheckboxLabel**: *string* = "label"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L28)*

###  AccordionCheckboxWrapper

• **AccordionCheckboxWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L26)*

###  AccordionIconContract

• **AccordionIconContract**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L33)*

###  AccordionIconExpand

• **AccordionIconExpand**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L34)*

###  AccordionItemWrapper

• **AccordionItemWrapper**: *string* = "a"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L27)*

###  AccordionLabel

• **AccordionLabel**: *string* = "label"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L32)*

###  AccordionWrapper

• **AccordionWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L25)*

###  CloseMenuIcon

• **CloseMenuIcon**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L35)*

###  ComponentDescriptionIcon

• **ComponentDescriptionIcon**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L49)*

###  ComponentDescriptionStyle

• **ComponentDescriptionStyle**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L46)*

###  ComponentDescriptionWrapper

• **ComponentDescriptionWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L45)*

###  ComponentLinkWrapper

• **ComponentLinkWrapper**: *string* = "a"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L43)*

###  ComponentPreviewStyle

• **ComponentPreviewStyle**: *string* = "img"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L47)*

###  ComponentSelectButton

• **ComponentSelectButton**: *string* = "button"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L48)*

###  ComponentSelectorWrapper

• **ComponentSelectorWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L23)*

###  ComponentTitleWrapper

• **ComponentTitleWrapper**: *string* = "h3"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L42)*

###  DragHandle

• **DragHandle**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L31)*

###  FlexSection

• **FlexSection**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L20)*

###  FlexSectionFull

• **FlexSectionFull**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L21)*

###  FlowContainerEmpty

• **FlowContainerEmpty**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L22)*

###  FlowContainerEmptyWrapper

• **FlowContainerEmptyWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/SortableContainer.tsx#L37)*

###  GridListBox

• **GridListBox**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L38)*

###  GridListBoxInner

• **GridListBoxInner**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L40)*

###  GridListBoxWrapper

• **GridListBoxWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L39)*

###  IconWrapper

• **IconWrapper**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L44)*

###  ItemBox

• **ItemBox**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L37)*

###  ItemBoxWrapper

• **ItemBoxWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L36)*

###  MasterWrapper

• **MasterWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L19)*

###  Reresizable

• **Reresizable**: *Resizable* = CleanReresizable

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L34)*

###  ResizeHandle

• **ResizeHandle**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L32)*

###  ResizeHandleRTL

• **ResizeHandleRTL**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SortableResizableWrapper/index.tsx#L33)*

###  ScalingButtonFull

• **ScalingButtonFull**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L51)*

###  ScalingButtonHalf

• **ScalingButtonHalf**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L52)*

###  ScalingButtonQuarter

• **ScalingButtonQuarter**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L53)*

###  ScalingHeader

• **ScalingHeader**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L50)*

###  SearchBar

• **SearchBar**: *string* = "input"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L31)*

###  SearchBarWrapper

• **SearchBarWrapper**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L30)*

###  SnapIndicator

• **SnapIndicator**: *string* = "div"

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L38)*

###  SubmitButton

• **SubmitButton**: *string* = "button"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L24)*

###  TitleWrapper

• **TitleWrapper**: *string* = "span"

*Defined in [packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/ComponentSelector/uiContext.tsx#L41)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & SortableElementProps, any›* = CleanWrapper

*Defined in [packages/bodiless-layouts/src/SlateSortableResizable.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/SlateSortableResizable.tsx#L37)*

___

### `Const` flowContainerComponentStart

### ▪ **flowContainerComponentStart**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L26)*

###  ComponentWrapper

• **ComponentWrapper**: *object* = Div

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L28)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLDivElement› & object & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

* **displayName**: *string*

###  Wrapper

• **Wrapper**: *object* = Div

*Defined in [packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/StaticFlowContainer.tsx#L27)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLDivElement› & object & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

* **displayName**: *string*

___

### `Const` flowContainerDataHandlers

### ▪ **flowContainerDataHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L21)*

###  deleteFlowContainerItem

• **deleteFlowContainerItem**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L23)*

###  insertFlowContainerItem

• **insertFlowContainerItem**: *Mock‹object, []›* = jest.fn(() => ({ uuid: v1() }))

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L22)*

###  updateFlowContainerItem

• **updateFlowContainerItem**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L24)*

___

### `Const` itemHandlers

### ▪ **itemHandlers**: *object*

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L17)*

###  getItems

• **getItems**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L18)*

###  setItems

• **setItems**: *Mock‹any, any›* = jest.fn()

*Defined in [packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts:19](https://github.com/VancheeZze/Bodiless-JS/blob/f40d23dd/packages/bodiless-layouts/src/FlowContainer/__mocks__/model.ts#L19)*
