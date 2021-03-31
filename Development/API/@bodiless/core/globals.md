[@bodiless/core](README.md) › [Globals](globals.md)

# @bodiless/core

## Index

### Classes

* [ContentNodeProxy](classes/contentnodeproxy.md)
* [ContentfulNode](classes/contentfulnode.md)
* [DefaultContentNode](classes/defaultcontentnode.md)
* [DummyContentNodeStore](classes/dummycontentnodestore.md)
* [PageEditContext](classes/pageeditcontext.md)
* [PageEditStore](classes/pageeditstore.md)
* [ReadOnlyContext](classes/readonlycontext.md)
* [StaticContext](classes/staticcontext.md)
* [Tag](classes/tag.md)

### Interfaces

* [CanBeActivated](interfaces/canbeactivated.md)
* [CanControlEditMode](interfaces/cancontroleditmode.md)
* [CanControlLocalTooltipsVisibility](interfaces/cancontrollocaltooltipsvisibility.md)
* [CanControlMenuPosition](interfaces/cancontrolmenuposition.md)
* [CanControlPageOverlay](interfaces/cancontrolpageoverlay.md)
* [CanGetContextMenuOptions](interfaces/cangetcontextmenuoptions.md)
* [DefinesLocalEditContext](interfaces/defineslocaleditcontext.md)
* [PageEditContextInterface](interfaces/pageeditcontextinterface.md)
* [PageEditStoreInterface](interfaces/pageeditstoreinterface.md)

### Type aliases

* [Actions](globals.md#actions)
* [ActivateOnEffectState](globals.md#activateoneffectstate)
* [AsBodiless](globals.md#asbodiless)
* [Bodiless](globals.md#bodiless)
* [BodilessOverrides](globals.md#bodilessoverrides)
* [BodilessProps](globals.md#bodilessprops)
* [ButtonVariantProps](globals.md#buttonvariantprops)
* [ClickOutsideProps](globals.md#clickoutsideprops)
* [CompleteUI](globals.md#completeui)
* [Content](globals.md#content)
* [ContentNode](globals.md#contentnode)
* [ContextMenuFormProps](globals.md#contextmenuformprops)
* [ContextMenuPropsType](globals.md#contextmenupropstype)
* [ContextMenuUI](globals.md#contextmenuui)
* [ContextType](globals.md#contexttype)
* [ContextUIType](globals.md#contextuitype)
* [EditButtonOptions](globals.md#editbuttonoptions)
* [EditButtonProps](globals.md#editbuttonprops)
* [EditDataHandler](globals.md#editdatahandler)
* [FormBodyProps](globals.md#formbodyprops)
* [FormBodyRenderer](globals.md#formbodyrenderer)
* [FormChromeProps](globals.md#formchromeprops)
* [FormProps](globals.md#formprops)
* [FullUI](globals.md#fullui)
* [GetContentFrom](globals.md#getcontentfrom)
* [Getters](globals.md#getters)
* [GroupTree](globals.md#grouptree)
* [GroupedChildrenProps](globals.md#groupedchildrenprops)
* [HOC](globals.md#hoc)
* [HasDataProp](globals.md#hasdataprop)
* [HookOptions](globals.md#hookoptions)
* [IContextMenuItemProps](globals.md#icontextmenuitemprops)
* [IContextMenuProps](globals.md#icontextmenuprops)
* [IconVariantProps](globals.md#iconvariantprops)
* [LocalOptionsMap](globals.md#localoptionsmap)
* [MenuOptionDefaultComponents](globals.md#private-menuoptiondefaultcomponents)
* [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey)
* [MenuOptionsDefinition](globals.md#menuoptionsdefinition)
* [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)
* [NodeMap](globals.md#nodemap)
* [Notification](globals.md#notification)
* [NotificationProviderItem](globals.md#notificationprovideritem)
* [NotificationsContextType](globals.md#notificationscontexttype)
* [Notifier](globals.md#notifier)
* [NotifyContextType](globals.md#notifycontexttype)
* [OptionGroupDefinition](globals.md#optiongroupdefinition)
* [Options](globals.md#options)
* [Options$](globals.md#options)
* [PageContextProviderProps](globals.md#pagecontextproviderprops)
* [Path](globals.md#path)
* [Processors](globals.md#processors)
* [Props](globals.md#props)
* [ReactTagsFieldProps](globals.md#reacttagsfieldprops)
* [Snippet](globals.md#snippet)
* [SnippetRegister](globals.md#snippetregister)
* [TFullOverlaySettings](globals.md#tfulloverlaysettings)
* [TMenuOption](globals.md#tmenuoption)
* [TMenuOptionGetter](globals.md#tmenuoptiongetter)
* [TOverlaySettings](globals.md#toverlaysettings)
* [TPageOverlayStore](globals.md#tpageoverlaystore)
* [ToggleHook](globals.md#togglehook)
* [UI](globals.md#ui)
* [UseBodilessOverrides](globals.md#usebodilessoverrides)
* [UseEditFormProps](globals.md#useeditformprops)
* [VariantProps](globals.md#variantprops)
* [WithNodeKeyProps](globals.md#withnodekeyprops)
* [WithNodeProps](globals.md#withnodeprops)
* [resizeDetectorProps](globals.md#resizedetectorprops)

### Variables

* [Context](globals.md#const-context)
* [ContextMenuContext](globals.md#const-contextmenucontext)
* [ContextMenuItem](globals.md#const-contextmenuitem)
* [ContextMenuOverlay](globals.md#private-const-contextmenuoverlay)
* [ContextMenuUIContext](globals.md#const-contextmenuuicontext)
* [DefaultDiv](globals.md#const-defaultdiv)
* [FormChrome](globals.md#const-formchrome)
* [GlobalContextMenu](globals.md#const-globalcontextmenu)
* [NODE_ERROR_NOTIFICATION_ID](globals.md#const-node_error_notification_id)
* [NodeContext](globals.md#const-nodecontext)
* [NotificationContext](globals.md#const-notificationcontext)
* [NotifyContext](globals.md#const-notifycontext)
* [OnNodeErrorNotification](globals.md#const-onnodeerrornotification)
* [OverlayPortal](globals.md#const-overlayportal)
* [SidecarNodeContext](globals.md#const-sidecarnodecontext)
* [SnippetContext](globals.md#const-snippetcontext)
* [SubMenuContext](globals.md#const-submenucontext)
* [activateOnEffect](globals.md#const-activateoneffect)
* [defaultStore](globals.md#const-defaultstore)
* [ifEditable](globals.md#const-ifeditable)
* [ifReadOnly](globals.md#const-ifreadonly)
* [staticContext](globals.md#const-staticcontext)
* [uiContext](globals.md#const-uicontext)
* [withActivateOnEffect](globals.md#const-withactivateoneffect)
* [withNotificationButton](globals.md#const-withnotificationbutton)
* [withSwitcherButton](globals.md#const-withswitcherbutton)

### Functions

* [ActivateOnEffectProvider](globals.md#const-activateoneffectprovider)
* [ContextMenu](globals.md#const-contextmenu)
* [ContextMenuBase](globals.md#const-contextmenubase)
* [ContextMenuForm](globals.md#const-contextmenuform)
* [ContextMenuProvider](globals.md#const-contextmenuprovider)
* [ContextSubMenu](globals.md#const-contextsubmenu)
* [ContextWrapper](globals.md#const-contextwrapper)
* [DefaultToolbarButton](globals.md#const-defaulttoolbarbutton)
* [Form](globals.md#private-const-form)
* [FormChromeBase](globals.md#const-formchromebase)
* [LocalContextMenu](globals.md#const-localcontextmenu)
* [NodeProvider](globals.md#const-nodeprovider)
* [NotificationList](globals.md#const-notificationlist)
* [NotificationProvider](globals.md#const-notificationprovider)
* [Overlay](globals.md#const-overlay)
* [PageContextProvider](globals.md#const-pagecontextprovider)
* [PageEditor](globals.md#const-pageeditor)
* [PageOverlay](globals.md#const-pageoverlay)
* [ReactTagsField](globals.md#const-reacttagsfield)
* [RenderForm](globals.md#const-renderform)
* [StaticPage](globals.md#const-staticpage)
* [StructuredChildren](globals.md#const-structuredchildren)
* [SubMenuChildren](globals.md#const-submenuchildren)
* [addAriaLabels](globals.md#const-addarialabels)
* [addDefaultGroups](globals.md#const-adddefaultgroups)
* [addHideEmptyGroups](globals.md#const-addhideemptygroups)
* [addMissingGroups](globals.md#const-addmissinggroups)
* [asBodilessComponent](globals.md#const-asbodilesscomponent)
* [asElementArray](globals.md#const-aselementarray)
* [asReadOnly](globals.md#const-asreadonly)
* [asStatic](globals.md#const-asstatic)
* [buildChildren](globals.md#const-buildchildren)
* [buildGroupTree](globals.md#const-buildgrouptree)
* [buildMap](globals.md#const-buildmap)
* [cloneChildren](globals.md#const-clonechildren)
* [contextMenuForm](globals.md#const-contextmenuform)
* [createChildrenFromOptions](globals.md#private-const-createchildrenfromoptions)
* [createMenuOptionDefinition](globals.md#private-const-createmenuoptiondefinition)
* [createMenuOptionGroup](globals.md#const-createmenuoptiongroup)
* [endSidecarNodes](globals.md#const-endsidecarnodes)
* [getAbsoluteNodeKey](globals.md#const-getabsolutenodekey)
* [getComponent](globals.md#const-getcomponent)
* [getContentFrom](globals.md#const-getcontentfrom)
* [getFromSessionStorage](globals.md#const-getfromsessionstorage)
* [getRelativeNodeKey](globals.md#const-getrelativenodekey)
* [getUI](globals.md#const-getui)
* [ifToggledOff](globals.md#const-iftoggledoff)
* [ifToggledOn](globals.md#const-iftoggledon)
* [mergeGroups](globals.md#const-mergegroups)
* [onPopupAlign](globals.md#private-const-onpopupalign)
* [renderForm](globals.md#const-renderform)
* [reverseContextOrder](globals.md#const-reversecontextorder)
* [saveToSessionStorage](globals.md#const-savetosessionstorage)
* [setDefaultOptionScope](globals.md#private-const-setdefaultoptionscope)
* [startSidecarNodes](globals.md#const-startsidecarnodes)
* [useActivateOnEffect](globals.md#const-useactivateoneffect)
* [useActivateOnEffectActivator](globals.md#const-useactivateoneffectactivator)
* [useClickOutside](globals.md#const-useclickoutside)
* [useContextActivator](globals.md#const-usecontextactivator)
* [useContextMenuContext](globals.md#const-usecontextmenucontext)
* [useContextMenuForm](globals.md#const-usecontextmenuform)
* [useEditContext](globals.md#const-useeditcontext)
* [useEditFormProps](globals.md#const-useeditformprops)
* [useEditToggle](globals.md#const-useedittoggle)
* [useExtendHandler](globals.md#const-useextendhandler)
* [useGetter](globals.md#private-const-usegetter)
* [useLocalOptions](globals.md#const-uselocaloptions)
* [useLocalStorage](globals.md#const-uselocalstorage)
* [useMenuOptionUI](globals.md#const-usemenuoptionui)
* [useMenuOptions](globals.md#private-const-usemenuoptions)
* [useNewContext](globals.md#private-const-usenewcontext)
* [useNode](globals.md#const-usenode)
* [useNodeDataHandlers](globals.md#const-usenodedatahandlers)
* [useNotifications](globals.md#const-usenotifications)
* [useNotify](globals.md#const-usenotify)
* [useRegisterMenuOptions](globals.md#const-useregistermenuoptions)
* [useRegisterSnippet](globals.md#const-useregistersnippet)
* [useUI](globals.md#const-useui)
* [useUUID](globals.md#const-useuuid)
* [withActivatorWrapper](globals.md#private-const-withactivatorwrapper)
* [withBodilessData](globals.md#const-withbodilessdata)
* [withChild](globals.md#const-withchild)
* [withClickOutside](globals.md#const-withclickoutside)
* [withCompoundForm](globals.md#const-withcompoundform)
* [withContextActivator](globals.md#const-withcontextactivator)
* [withData](globals.md#const-withdata)
* [withDefaultContent](globals.md#const-withdefaultcontent)
* [withEditButton](globals.md#const-witheditbutton)
* [withEditFormSnippet](globals.md#const-witheditformsnippet)
* [withExtendHandler](globals.md#const-withextendhandler)
* [withFlowToggle](globals.md#const-withflowtoggle)
* [withLocalContextMenu](globals.md#const-withlocalcontextmenu)
* [withMenuOptions](globals.md#const-withmenuoptions)
* [withNode](globals.md#const-withnode)
* [withNodeAndHandlers](globals.md#const-withnodeandhandlers)
* [withNodeDataHandlers](globals.md#const-withnodedatahandlers)
* [withNodeKey](globals.md#const-withnodekey)
* [withOnlyProps](globals.md#const-withonlyprops)
* [withResetButton](globals.md#const-withresetbutton)
* [withResizeDetector](globals.md#const-withresizedetector)
* [withSidecarNodes](globals.md#const-withsidecarnodes)
* [withoutProps](globals.md#const-withoutprops)

### Object literals

* [defaultActivateOnEffectState](globals.md#const-defaultactivateoneffectstate)
* [defaultOverlaySettings](globals.md#const-defaultoverlaysettings)
* [defaultUI](globals.md#const-defaultui)

## Type aliases

###  Actions

Ƭ **Actions**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:31](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContentNode.ts#L31)*

#### Type declaration:

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  ActivateOnEffectState

Ƭ **ActivateOnEffectState**: *object*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L18)*

#### Type declaration:

* **id**: *string*

* **setId**(): *function*

  * (`id`: string): *void*

___

###  AsBodiless

Ƭ **AsBodiless**: *function*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asBodilessComponent.tsx#L53)*

#### Type declaration:

▸ (`nodeKeys?`: [WithNodeKeyProps](globals.md#withnodekeyprops), `defaultData?`: D, `useOverrides?`: [UseBodilessOverrides](globals.md#usebodilessoverrides)‹P, D, E›): *Token‹P & [BodilessProps](globals.md#bodilessprops)›*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | [WithNodeKeyProps](globals.md#withnodekeyprops) |
`defaultData?` | D |
`useOverrides?` | [UseBodilessOverrides](globals.md#usebodilessoverrides)‹P, D, E› |

___

###  Bodiless

Ƭ **Bodiless**: *function*

*Defined in [packages/bodiless-core/src/index.ts:164](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/index.ts#L164)*

#### Type declaration:

▸ (`C`: ComponentType‹P› | string): *ComponentType‹Q›*

**Parameters:**

Name | Type |
------ | ------ |
`C` | ComponentType‹P› &#124; string |

___

###  BodilessOverrides

Ƭ **BodilessOverrides**: *Partial‹[EditButtonOptions](globals.md#editbuttonoptions)‹P, D› & E›*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L56)*

___

###  BodilessProps

Ƭ **BodilessProps**: *Partial‹[WithNodeProps](globals.md#withnodeprops)›*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asBodilessComponent.tsx#L52)*

___

###  ButtonVariantProps

Ƭ **ButtonVariantProps**: *HTMLProps‹HTMLDivElement› & object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:145](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L145)*

___

###  ClickOutsideProps

Ƭ **ClickOutsideProps**: *object*

*Defined in [packages/bodiless-core/src/hoc.tsx:117](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L117)*

#### Type declaration:

* **onClickOutside**? : *undefined | function*

___

###  CompleteUI

Ƭ **CompleteUI**: *object*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L27)*

#### Type declaration:

* **GlobalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **LocalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **PageOverlay**? : *FC*

___

###  Content

Ƭ **Content**: *object*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L29)*

#### Type declaration:

* \[ **nodePath**: *string*\]: any

___

###  ContentNode

Ƭ **ContentNode**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:46](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContentNode.ts#L46)*

#### Type declaration:

* **baseResourcePath**: *string*

* **data**: *D*

* **delete**(): *function*

  * (`path?`: [Path](globals.md#path)): *void*

* **hasError**(): *function*

  * (): *boolean*

* **keys**: *string[]*

* **pagePath**: *string*

* **path**: *string[]*

* **proxy**(): *function*

  * (`processors`: [Processors](globals.md#processors)‹D›): *[ContentNode](globals.md#contentnode)‹D›*

* **setData**(): *function*

  * (`data`: D): *void*

* **child**‹**E**›(`path`: string): *[ContentNode](globals.md#contentnode)‹E›*

* **peer**‹**E**›(`path`: [Path](globals.md#path)): *[ContentNode](globals.md#contentnode)‹E›*

___

###  ContextMenuFormProps

Ƭ **ContextMenuFormProps**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:208](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L208)*

#### Type declaration:

* **aria-label**? : *undefined | string*

* **closeForm**(): *function*

  * (`e`: any): *void*

* **description**? : *undefined | string*

* **title**? : *undefined | string*

* **ui**? : *[ContextMenuUI](globals.md#contextmenuui)*

___

###  ContextMenuPropsType

Ƭ **ContextMenuPropsType**: *[ContextMenuFormProps](globals.md#contextmenuformprops) & [Options](globals.md#options)‹D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L36)*

___

###  ContextMenuUI

Ƭ **ContextMenuUI**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:158](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L158)*

Type of the UI for the context menu.

#### Type declaration:

* **ComponentFormButton**? : *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **ComponentFormCheckBox**? : *ComponentType‹FieldProps‹any, any››*

* **ComponentFormCloseButton**? : *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **ComponentFormDescription**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **ComponentFormError**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **ComponentFormFieldTitle**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **ComponentFormFieldWrapper**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **ComponentFormLabel**? : *ComponentType‹HTMLProps‹HTMLLabelElement›› | string*

* **ComponentFormLink**? : *ComponentType‹HTMLProps‹HTMLAnchorElement›› | string*

* **ComponentFormList**? : *ComponentType‹HTMLProps‹HTMLUListElement›› | string*

* **ComponentFormListItem**? : *ComponentType‹HTMLProps‹HTMLLIElement›› | string*

* **ComponentFormOption**? : *ComponentType‹ChildFieldProps‹any, any››*

* **ComponentFormRadio**? : *ComponentType‹ChildFieldProps‹any, any››*

* **ComponentFormRadioGroup**? : *ComponentType‹FieldProps‹any, any››*

* **ComponentFormSelect**? : *ComponentType‹SelectFieldProps‹any, any››*

* **ComponentFormSubmitButton**? : *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **ComponentFormText**? : *ComponentType‹FieldProps‹any, any››*

* **ComponentFormTextArea**? : *ComponentType‹FieldProps‹any, any››*

* **ComponentFormTitle**? : *ComponentType‹HTMLProps‹HTMLHeadingElement›› | string*

* **ComponentFormUnwrapButton**? : *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **ComponentFormWarning**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **ContextMenuGroup**? : *ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)›*

* **ContextSubMenu**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **Form**? : *ComponentType‹HTMLProps‹HTMLFormElement›› | string*

* **FormWrapper**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **HorizontalToolbarButton**? : *ComponentType‹StylableProps & [ButtonVariantProps](globals.md#buttonvariantprops)› | string*

* **Icon**? : *ComponentType‹StylableProps & [IconVariantProps](globals.md#iconvariantprops)› | string*

* **ReactTags**? : *ComponentType‹[ReactTagsFieldProps](globals.md#reacttagsfieldprops)›*

* **Toolbar**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **ToolbarButton**? : *ComponentType‹StylableProps & [ButtonVariantProps](globals.md#buttonvariantprops)› | string*

* **ToolbarButtonLabel**? : *ComponentType‹HTMLProps‹HTMLSpanElement›› | string*

* **ToolbarDivider**? : *ComponentType‹HTMLProps‹HTMLHRElement›› | string*

* **Tooltip**? : *ComponentType‹Tooltip["props"]›*

___

###  ContextType

Ƭ **ContextType**: *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L24)*

#### Type declaration:

* **setRenderForm**? : *React.Dispatch‹React.SetStateAction‹function | undefined››*

___

###  ContextUIType

Ƭ **ContextUIType**: *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L29)*

#### Type declaration:

* **ui**? : *[ContextMenuUI](globals.md#contextmenuui)*

___

###  EditButtonOptions

Ƭ **EditButtonOptions**: *Omit‹[OptionGroupDefinition](globals.md#optiongroupdefinition), "handler"› & object & [EditDataHandler](globals.md#editdatahandler)‹D› & Partial‹[MenuOptionsDefinition](globals.md#menuoptionsdefinition)‹P››*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L49)*

___

###  EditButtonProps

Ƭ **EditButtonProps**: *object*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L31)*

#### Type declaration:

* **componentData**: *D*

* **isActive**? : *undefined | function*

* **onSubmit**? : *undefined | function*

* **setComponentData**(): *function*

  * (`componentData`: D): *void*

___

###  EditDataHandler

Ƭ **EditDataHandler**: *object*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L20)*

#### Type declaration:

* **initialValueHandler**? : *undefined | function*

* **submitValueHandler**? : *undefined | function*

___

###  FormBodyProps

Ƭ **FormBodyProps**: *ContextMenuFormBodyProps‹D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L29)*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L25)*

___

###  FormBodyRenderer

Ƭ **FormBodyRenderer**: *function*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L34)*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L29)*

#### Type declaration:

▸ (`p`: [FormBodyProps](globals.md#formbodyprops)‹P, D›): *ReactNode*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [FormBodyProps](globals.md#formbodyprops)‹P, D› |

___

###  FormChromeProps

Ƭ **FormChromeProps**: *object & [ContextMenuFormProps](globals.md#contextmenuformprops)*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L40)*

___

###  FormProps

Ƭ **FormProps**: *[ContextMenuFormProps](globals.md#contextmenuformprops) & object*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L51)*

___

###  FullUI

Ƭ **FullUI**: *object*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L21)*

#### Type declaration:

* **Button**: *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **Message**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **OverlayWrapper**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **PopupWrapper**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **Spinner**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

###  GetContentFrom

Ƭ **GetContentFrom**: *function*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L27)*

provides data for a particular default content key
can be used for merging default content data with a node data

**`param`** content node of the type equal to node at the time withDefaultContent is invoked

**`returns`** data of the node

#### Type declaration:

▸ (`node`: [ContentNode](globals.md#contentnode)‹D›): *E*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [ContentNode](globals.md#contentnode)‹D› |

___

###  Getters

Ƭ **Getters**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContentNode.ts#L36)*

#### Type declaration:

* **getBaseResourcePath**(`collection`: string): *string*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **getPagePath**(): *string*

* **hasError**(): *boolean*

___

###  GroupTree

Ƭ **GroupTree**: *object*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L21)*

#### Type declaration:

* \[ **name**: *string*\]: object

* **element**: *ReactElement*

* **members**: *[GroupTree](globals.md#grouptree)*

___

###  GroupedChildrenProps

Ƭ **GroupedChildrenProps**: *object*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:76](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L76)*

#### Type declaration:

* \[ **prop**: *string*\]: any

* **components**(): *object*

  * **Group**: *ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)›*

___

###  HOC

Ƭ **HOC**: *function*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSidecarNodes.tsx#L70)*

*Defined in [packages/bodiless-core/src/withChild.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withChild.tsx#L20)*

#### Type declaration:

▸ (`Component?`: CT‹P› | string | undefined): *CT‹Q›*

**Parameters:**

Name | Type |
------ | ------ |
`Component?` | CT‹P› &#124; string &#124; undefined |

___

###  HasDataProp

Ƭ **HasDataProp**: *object*

*Defined in [packages/bodiless-core/src/withData.tsx:17](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withData.tsx#L17)*

#### Type declaration:

* **componentData**: *D*

___

###  HookOptions

Ƭ **HookOptions**: *[Options](globals.md#options)‹D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:136](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L136)*

___

###  IContextMenuItemProps

Ƭ **IContextMenuItemProps**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L39)*

Type of the props which will be passed to a context menu
item or context menu group.

#### Type declaration:

* **group**? : *undefined | string*

* **index**? : *undefined | number*

* **name**: *string*

* **option**? : *[TMenuOption](globals.md#tmenuoption)*

___

###  IContextMenuProps

Ƭ **IContextMenuProps**: *object & HTMLProps‹HTMLElement›*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:194](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L194)*

___

###  IconVariantProps

Ƭ **IconVariantProps**: *HTMLProps‹HTMLSpanElement› & object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:151](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L151)*

___

###  LocalOptionsMap

Ƭ **LocalOptionsMap**: *object*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L43)*

#### Type declaration:

* **groups**: *Set‹string›*

* **options**: *Map‹string, [TMenuOption](globals.md#tmenuoption)›*

___

### `Private` MenuOptionDefaultComponents

Ƭ **MenuOptionDefaultComponents**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L30)*

#### Type declaration:

* **group**: *ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)›*

* **item**: *ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)›*

___

###  MenuOptionWithNodeKey

Ƭ **MenuOptionWithNodeKey**: *object & object | string*

*Defined in [packages/bodiless-core/src/Contentful/withResetButton.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/withResetButton.ts#L24)*

___

###  MenuOptionsDefinition

Ƭ **MenuOptionsDefinition**: *Omit‹[PageContextProviderProps](globals.md#pagecontextproviderprops), "getMenuOptions"› & object*

*Defined in [packages/bodiless-core/src/Types/PageContextProviderTypes.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/PageContextProviderTypes.tsx#L25)*

An object which defines a group of menu options.

___

###  MenuOptionsDefinition$

Ƭ **MenuOptionsDefinition$**: *[MenuOptionsDefinition](globals.md#menuoptionsdefinition)‹P› | function*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:122](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageContextProvider.tsx#L122)*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L111)*

___

###  NodeMap

Ƭ **NodeMap**: *object*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NodeProvider.tsx#L18)*

#### Type declaration:

* **activeCollection**: *string*

* **collections**(): *object*

___

###  Notification

Ƭ **Notification**: *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L25)*

#### Type declaration:

* **id**: *string*

* **message**: *string*

___

###  NotificationProviderItem

Ƭ **NotificationProviderItem**: *[Notification](globals.md#notification) & object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L30)*

___

###  NotificationsContextType

Ƭ **NotificationsContextType**: *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L36)*

#### Type declaration:

* **notifications**: *[Notification](globals.md#notification)[]*

___

###  Notifier

Ƭ **Notifier**: *function*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L34)*

#### Type declaration:

▸ (`owner`: string, `notifications`: [Notification](globals.md#notification)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`owner` | string |
`notifications` | [Notification](globals.md#notification)[] |

___

###  NotifyContextType

Ƭ **NotifyContextType**: *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L39)*

#### Type declaration:

* **notify**: *[Notifier](globals.md#notifier)*

___

###  OptionGroupDefinition

Ƭ **OptionGroupDefinition**: *[TMenuOption](globals.md#tmenuoption) & object*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L41)*

A menu option with an optional group label.

___

###  Options

Ƭ **Options**: *[EditButtonOptions](globals.md#editbuttonoptions)‹P, D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L22)*

*Defined in [packages/bodiless-core/src/withEditFormSnippet.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditFormSnippet.tsx#L26)*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asBodilessComponent.tsx#L35)*

Options for making a component "bodiless".

___

###  Options$

Ƭ **Options$**: *[Options](globals.md#options)‹P, D› | function*

*Defined in [packages/bodiless-core/src/withEditFormSnippet.tsx:93](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditFormSnippet.tsx#L93)*

___

###  PageContextProviderProps

Ƭ **PageContextProviderProps**: *Partial‹[DefinesLocalEditContext](interfaces/defineslocaleditcontext.md)›*

*Defined in [packages/bodiless-core/src/Types/PageContextProviderTypes.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/PageContextProviderTypes.tsx#L20)*

___

###  Path

Ƭ **Path**: *string | string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContentNode.ts#L44)*

___

###  Processors

Ƭ **Processors**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:60](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContentNode.ts#L60)*

#### Type declaration:

* **getData**? : *undefined | function*

* **getKeys**? : *undefined | function*

* **setData**? : *undefined | function*

___

###  Props

Ƭ **Props**: *object & HTMLProps‹HTMLDivElement›*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NodeProvider.tsx#L54)*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L34)*

*Defined in [packages/bodiless-core/src/Types/ContextWrapperTypes.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextWrapperTypes.tsx#L25)*

___

###  ReactTagsFieldProps

Ƭ **ReactTagsFieldProps**: *object & Omit‹ReactTagsProps, "handleDelete" | "handleAddition"›*

*Defined in [packages/bodiless-core/src/components/ReactTagsField.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ReactTagsField.tsx#L30)*

___

###  Snippet

Ƭ **Snippet**: *object*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L28)*

A collection of form fields (with initial values and submit handler) which can be rendered
as part of a compound form.

#### Type declaration:

* **id**: *string*

* **initialValues**? : *any*

* **render**: *[FormBodyRenderer](globals.md#formbodyrenderer)‹D›*

* **submitValues**? : *undefined | function*

___

###  SnippetRegister

Ƭ **SnippetRegister**: *function*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L49)*

#### Type declaration:

▸ (`snippet`: [Snippet](globals.md#snippet)‹D›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`snippet` | [Snippet](globals.md#snippet)‹D› |

___

###  TFullOverlaySettings

Ƭ **TFullOverlaySettings**: *object*

*Defined in [packages/bodiless-core/src/Types/PageOverlayTypes.tsx:15](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/PageOverlayTypes.tsx#L15)*

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

#### Type declaration:

* **hasCloseButton**: *boolean*

* **hasSpinner**: *boolean*

* **isActive**: *boolean*

* **maxTimeoutInSeconds**: *number | null*

* **message**: *string*

* **onClose**(): *function*

  * (): *void*

___

###  TMenuOption

Ƭ **TMenuOption**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L61)*

Type of a context menu option.

#### Type declaration:

* **Component**? : *ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)› | keyof MenuOptionDefaultComponents*

* **activateContext**? : *function | boolean*

* **ariaLabel**? : *string | function*

* **context**? : *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

* **formDescription**? : *string | function*

* **formTitle**? : *string | function*

* **global**? : *undefined | false | true*

* **group**? : *undefined | string*

* **groupMerge**? : *"merge" | "merge-up" | "none"*

* **handler**? : *undefined | function*

* **icon**? : *function | string*

* **isActive**? : *function | boolean*

* **isDisabled**? : *function | boolean*

* **isHidden**? : *function | boolean*

* **label**? : *function | string*

* **local**? : *undefined | false | true*

* **name**: *string*

___

###  TMenuOptionGetter

Ƭ **TMenuOptionGetter**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:19](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/types.ts#L19)*

*Defined in [packages/bodiless-core/src/Types/PageContextProviderTypes.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/PageContextProviderTypes.tsx#L18)*

#### Type declaration:

▸ (): *[TMenuOption](globals.md#tmenuoption)[]*

___

###  TOverlaySettings

Ƭ **TOverlaySettings**: *Partial‹[TFullOverlaySettings](globals.md#tfulloverlaysettings)›*

*Defined in [packages/bodiless-core/src/Types/PageOverlayTypes.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/PageOverlayTypes.tsx#L24)*

___

###  TPageOverlayStore

Ƭ **TPageOverlayStore**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/types.ts#L21)*

#### Type declaration:

* **data**: *[TOverlaySettings](globals.md#toverlaysettings)*

* **timeoutId**: *number*

___

###  ToggleHook

Ƭ **ToggleHook**: *function*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withFlowToggle.tsx#L19)*

#### Type declaration:

▸ (`props`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

___

###  UI

Ƭ **UI**: *Partial‹[FullUI](globals.md#fullui)›*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L32)*

*Defined in [packages/bodiless-core/src/Types/ContextWrapperTypes.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextWrapperTypes.tsx#L21)*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L37)*

___

###  UseBodilessOverrides

Ƭ **UseBodilessOverrides**: *function*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L59)*

#### Type declaration:

▸ (`props`: P & [EditButtonProps](globals.md#editbuttonprops)‹D›): *[BodilessOverrides](globals.md#bodilessoverrides)‹P, D, E›*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & [EditButtonProps](globals.md#editbuttonprops)‹D› |

___

###  UseEditFormProps

Ƭ **UseEditFormProps**: *P & [EditButtonProps](globals.md#editbuttonprops)‹D› & Pick‹[EditButtonOptions](globals.md#editbuttonoptions)‹P, D›, "renderForm" | "initialValueHandler" | "submitValueHandler"›*

*Defined in [packages/bodiless-core/src/withEditFormSnippet.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditFormSnippet.tsx#L32)*

___

###  VariantProps

Ƭ **VariantProps**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextWrapperTypes.tsx:17](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/ContextWrapperTypes.tsx#L17)*

#### Type declaration:

* **isActive**? : *undefined | false | true*

___

###  WithNodeKeyProps

Ƭ **WithNodeKeyProps**: *string | Partial‹[WithNodeProps](globals.md#withnodeprops)›*

*Defined in [packages/bodiless-core/src/Types/NodeTypes.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/NodeTypes.tsx#L21)*

___

###  WithNodeProps

Ƭ **WithNodeProps**: *object*

*Defined in [packages/bodiless-core/src/Types/NodeTypes.tsx:16](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Types/NodeTypes.tsx#L16)*

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

#### Type declaration:

* **nodeCollection**? : *undefined | string*

* **nodeKey**: *string*

___

###  resizeDetectorProps

Ƭ **resizeDetectorProps**: *object*

*Defined in [packages/bodiless-core/src/hoc.tsx:147](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L147)*

#### Type declaration:

* **onResizeObserver**? : *undefined | function*

## Variables

### `Const` Context

• **Context**: *Context‹function›* = createContext<SnippetRegister<any>>(() => {})

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L55)*

___

### `Const` ContextMenuContext

• **ContextMenuContext**: *Context‹object›* = createContext<ContextType>({})

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L80)*

___

### `Const` ContextMenuItem

• **ContextMenuItem**: *FunctionComponent‹object›* = observer((props: IProps) => {
  const { option: option$, name, index } = props;
  const option: TMenuOption = option$ || { name };
  const [renderForm, setRenderForm$] = useState<(props:ContextMenuFormProps) => JSX.Element>();
  const [isToolTipShown, setIsToolTipShown] = useState(false);
  const ui = useMenuOptionUI();
  const {
    ToolbarDivider, Icon, ToolbarButton,
    FormWrapper, Tooltip, ToolbarButtonLabel,
  } = ui;
  const isActive = option.isActive ? (typeof option.isActive === 'function' ? option.isActive() : option.isActive) : false;
  const isDisabled = option.isDisabled ? (typeof option.isDisabled === 'function' ? option.isDisabled() : option.isDisabled) : false;
  const isHidden = option.isHidden ? (typeof option.isHidden === 'function' ? option.isHidden() : option.isHidden) : false;
  const label = option.label ? (typeof option.label === 'function' ? option.label() : option.label) : '';
  const ariaLabel = option.ariaLabel ? (typeof option.ariaLabel === 'function' ? option.ariaLabel() : option.ariaLabel) : (label || option.name);
  const icon = option.icon ? (typeof option.icon === 'function' ? option.icon() : option.icon) : '';
  const title = typeof option.formTitle === 'function' ? option.formTitle() : option.formTitle;
  const description = typeof option.formDescription === 'function' ? option.formDescription() : option.formDescription;
  const activateContext = option.activateContext
    ? (typeof option.activateContext === 'function'
      ? option.activateContext()
      : option.activateContext)
    : option.activateContext !== false;

  const isFirst = index === 0;
  const setRenderForm = useContextMenuContext().setRenderForm || setRenderForm$;
  const context = useEditContext();

  const onToolbarButtonClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const menuForm = option.handler ? option.handler(event) : undefined;
    if (activateContext) context.activate();
    if (menuForm) {
      if (!option.local) context.toggleLocalTooltipsDisabled(!context.areLocalTooltipsDisabled);
      setIsToolTipShown(!isToolTipShown);
      const formProps: Partial<ContextMenuFormProps> = {
        // @TODO Do we wnt to set the aria label here?
        // 'aria-label': `Context Menu ${ariaLabel} Form`,
        title,
        description,
      };
      // We have to pass a function to setRenderForm b/c menuForm is itself a function
      // (a render prop) and, when a function is passed to setState, react interprets
      // it as a state setter (in order to set state based on previous state)
      // see https://reactjs.org/docs/hooks-reference.html#functional-updates
      setRenderForm(() => (p: ContextMenuFormProps) => menuForm({ ...p, ...formProps }));
    }
  };

  // Reset form and tooltip state
  const onFormClose = (): void => {
    context.toggleLocalTooltipsDisabled(false);
    setIsToolTipShown(false);
    setRenderForm(undefined);
  };

  function getContextMenuForm(): JSX.Element {
    if (renderForm) {
      const formProps: ContextMenuFormProps = {
        closeForm: onFormClose,
        ui,
        'aria-label': `Context Menu ${ariaLabel} Form`,
        title,
        description,
      };
      return (
        <FormWrapper onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          {renderForm(formProps)}
        </FormWrapper>
      );
    }
    return <></>;
  }

  if (option.name.startsWith('__divider')) {
    return <ToolbarDivider />;
  }

  if (isHidden) {
    return null;
  }

  return (
    <Tooltip
      trigger={['click']}
      overlay={getContextMenuForm()}
      visible={isToolTipShown}
      destroyTooltipOnHide
    >
      <ToolbarButton
        isActive={isActive}
        isDisabled={isDisabled}
        isFirst={isFirst}
        onClick={onToolbarButtonClick}
        aria-label={ariaLabel || label || option.name}
      >
        <Icon isActive={isActive || isToolTipShown}>{icon}</Icon>
        {
          (label) ? (
            <ToolbarButtonLabel>
              {label}
            </ToolbarButtonLabel>
          ) : (null)
        }
      </ToolbarButton>
    </Tooltip>
  );
})

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuItem.tsx#L22)*

___

### `Private` `Const` ContextMenuOverlay

• **ContextMenuOverlay**: *FunctionComponent‹object›* = observer<{}>(() => {
  const { LocalContextMenu: Menu } = useUI();
  const options = useLocalOptions();
  return <Menu options={options} />;
})

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:213](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L213)*

___

### `Const` ContextMenuUIContext

• **ContextMenuUIContext**: *Context‹object›* = createContext<ContextMenuUI>({})

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:81](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L81)*

___

### `Const` DefaultDiv

• **DefaultDiv**: *WithoutProps* = withoutProps<HTMLProps<HTMLDivElement>>(['isActive'])('div')

*Defined in [packages/bodiless-core/src/components/ContextWrapper.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextWrapper.tsx#L21)*

___

### `Const` FormChrome

• **FormChrome**: *any* = flow(withClickOutside)(FormChromeBase)

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L73)*

___

### `Const` GlobalContextMenu

• **GlobalContextMenu**: *FC‹[Props](globals.md#props)›* = observer(() => {
  const { GlobalContextMenu: Menu } = useUI();
  const context = useEditContext();
  const { isPositionToggled, contextMenuOptions } = context;
  const options = contextMenuOptions.filter(
    (op: TMenuOption) => op.global !== false,
  );
  return (
    <Menu options={options} isPositionToggled={isPositionToggled} />
  );
})

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L45)*

___

### `Const` NODE_ERROR_NOTIFICATION_ID

• **NODE_ERROR_NOTIFICATION_ID**: *"STORE_ERROR_NOTIFICATION_ID"* = "STORE_ERROR_NOTIFICATION_ID"

*Defined in [packages/bodiless-core/src/OnNodeErrorNotification.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/OnNodeErrorNotification.tsx#L20)*

___

### `Const` NodeContext

• **NodeContext**: *Context‹object›* = React.createContext<NodeMap<any>>({
  activeCollection: '_default',
  collections: {
    _default: DefaultContentNode.dummy(),
  },
})

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NodeProvider.tsx#L25)*

___

### `Const` NotificationContext

• **NotificationContext**: *Context‹object›* = React.createContext<NotificationsContextType>({
  notifications: [],
})

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L43)*

___

### `Const` NotifyContext

• **NotifyContext**: *Context‹object›* = React.createContext<NotifyContextType>({
  notify: () => undefined,
})

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L49)*

___

### `Const` OnNodeErrorNotification

• **OnNodeErrorNotification**: *FunctionComponent‹object›* = observer(() => {
  const { node } = useNode();
  const { hasError } = node;
  const notifications = hasError() ? [{
    id: NODE_ERROR_NOTIFICATION_ID,
    message: 'There is an error with saving data',
  }] : [];
  useNotify(notifications);
  return <></>;
})

*Defined in [packages/bodiless-core/src/OnNodeErrorNotification.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/OnNodeErrorNotification.tsx#L22)*

___

### `Const` OverlayPortal

• **OverlayPortal**: *(Anonymous function)* = observer(({ store, ui }) => {
  const root = typeof window !== 'undefined' ? window.document.body : null;
  return store.data.isActive
  && root
  && ReactDOM.createPortal(
    <Overlay settings={{ ...store.data }} ui={ui} />,
    root,
  );
})

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L84)*

___

### `Const` SidecarNodeContext

• **SidecarNodeContext**: *Context‹object[]›* = createContext<NodeMap<any>[]>([])

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSidecarNodes.tsx#L20)*

___

### `Const` SnippetContext

• **SnippetContext**: *Context‹undefined | MutableRefObject‹object[]››* = createContext<MutableRefObject<Snippet<any>[]>|undefined>(undefined)

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L56)*

___

### `Const` SubMenuContext

• **SubMenuContext**: *Context‹undefined | null | string | number | false | true | object | ReactElement‹any, string | function | object› | ReactNodeArray‹› | ReactPortal‹››* = createContext<ReactNode>(null)

*Defined in [packages/bodiless-core/src/ContextMenu/ContextSubMenu.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/ContextSubMenu.tsx#L27)*

___

### `Const` activateOnEffect

• **activateOnEffect**: *Context‹object›* = React.createContext(defaultActivateOnEffectState)

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L30)*

___

### `Const` defaultStore

• **defaultStore**: *[PageEditStore](classes/pageeditstore.md)‹›* = new PageEditStore()

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:186](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L186)*

___

### `Const` ifEditable

• **ifEditable**: *(Anonymous function)* = ifToggledOn(useEditToggle)

*Defined in [packages/bodiless-core/src/withEditToggle.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditToggle.tsx#L23)*

___

### `Const` ifReadOnly

• **ifReadOnly**: *(Anonymous function)* = ifToggledOff(useEditToggle)

*Defined in [packages/bodiless-core/src/withEditToggle.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditToggle.tsx#L25)*

___

### `Const` staticContext

• **staticContext**: *[StaticContext](classes/staticcontext.md)‹›* = new StaticContext()

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/StaticPage.tsx#L80)*

___

### `Const` uiContext

• **uiContext**: *Context‹object›* = createContext<CompleteUI>({
  GlobalContextMenu: ContextMenu,
  LocalContextMenu: ContextMenu,
})

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L38)*

___

### `Const` withActivateOnEffect

• **withActivateOnEffect**: *(Anonymous function)* = (
  <P extends Object> (Component:React.FunctionComponent<P>) => (props:P) => (
    <ActivateOnEffectProvider><Component {...props} /></ActivateOnEffectProvider>
  )
)

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L41)*

WithActivateContext is a HOC that wraps the Component in a ActivateContextProvider

**`param`** The component to wrap

___

### `Const` withNotificationButton

• **withNotificationButton**: *(Anonymous function)* = withMenuOptions({
  name: 'Notifications',
  useMenuOptions,
  root: true,
})

*Defined in [packages/bodiless-core/src/withNotificationButton.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNotificationButton.tsx#L69)*

HOC to add a notification button to the current context.

___

### `Const` withSwitcherButton

• **withSwitcherButton**: *(Anonymous function)* = withMenuOptions({
  useMenuOptions,
  name: 'Switcher',
  root: true,
})

*Defined in [packages/bodiless-core/src/withSwitcherButton.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSwitcherButton.tsx#L34)*

## Functions

### `Const` ActivateOnEffectProvider

▸ **ActivateOnEffectProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L31)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` ContextMenu

▸ **ContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *null | Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:120](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenu.tsx#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *null | Element‹›*

___

### `Const` ContextMenuBase

▸ **ContextMenuBase**(`props`: object & HTMLProps‹HTMLElement› & object): *null | Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenu.tsx#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *null | Element‹›*

___

### `Const` ContextMenuForm

▸ **ContextMenuForm**‹**D**›(`props`: [ContextMenuPropsType](globals.md#contextmenupropstype)‹D›): *Element‹›*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L75)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ContextMenuPropsType](globals.md#contextmenupropstype)‹D› |

**Returns:** *Element‹›*

___

### `Const` ContextMenuProvider

▸ **ContextMenuProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L86)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`setRenderForm` | undefined &#124; function |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` ContextSubMenu

▸ **ContextSubMenu**(`props`: object & object): *Element‹›*

*Defined in [packages/bodiless-core/src/ContextMenu/ContextSubMenu.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/ContextSubMenu.tsx#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object |

**Returns:** *Element‹›*

___

### `Const` ContextWrapper

▸ **ContextWrapper**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextWrapper.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextWrapper.tsx#L23)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`clickable` | undefined &#124; false &#124; true |
`onClick` | undefined &#124; bivarianceHack |
`rest` | rest |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` DefaultToolbarButton

▸ **DefaultToolbarButton**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Private` `Const` Form

▸ **Form**‹**D**›(`props`: [FormProps](globals.md#formprops)‹D›): *Element‹›*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L65)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [FormProps](globals.md#formprops)‹D› | Standard context menu form props + an array of snippets to render.  |

**Returns:** *Element‹›*

___

### `Const` FormChromeBase

▸ **FormChromeBase**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` LocalContextMenu

▸ **LocalContextMenu**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:223](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L223)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` NodeProvider

▸ **NodeProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NodeProvider.tsx#L59)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`collection` | undefined &#124; string |
`node` | object |

**Returns:** *Element‹›*

___

### `Const` NotificationList

▸ **NotificationList**(): *Element‹›*

*Defined in [packages/bodiless-core/src/withNotificationButton.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNotificationButton.tsx#L22)*

**Returns:** *Element‹›*

___

### `Const` NotificationProvider

▸ **NotificationProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L59)*

A component used to provide notifications.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` Overlay

▸ **Overlay**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L41)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`settings` | object |
`ui` | object |

**Returns:** *Element‹›*

___

### `Const` PageContextProvider

▸ **PageContextProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:105](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageContextProvider.tsx#L105)*

Component which provides its children with a new `PageEditContext` using the specified
menu options.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`rest` | rest |

**Returns:** *Element‹›*

___

### `Const` PageEditor

▸ **PageEditor**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L61)*

Component providing the global Bodiless UI elements, the Main Menu and Page Overlay.
Also provides the Edit and Docs buttons on the main menu.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` PageOverlay

▸ **PageOverlay**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:94](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L94)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`ui` | object |

**Returns:** *Element‹›*

___

### `Const` ReactTagsField

▸ **ReactTagsField**(`props`: [ReactTagsFieldProps](globals.md#reacttagsfieldprops)): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ReactTagsField.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ReactTagsField.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ReactTagsFieldProps](globals.md#reacttagsfieldprops) |

**Returns:** *Element‹›*

___

### `Const` RenderForm

▸ **RenderForm**(`props`: [ContextMenuFormProps](globals.md#contextmenuformprops)): *Element‹›*

*Defined in [packages/bodiless-core/src/withNotificationButton.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNotificationButton.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ContextMenuFormProps](globals.md#contextmenuformprops) |

**Returns:** *Element‹›*

___

### `Const` StaticPage

▸ **StaticPage**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:82](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/StaticPage.tsx#L82)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` StructuredChildren

▸ **StructuredChildren**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:83](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L83)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`components` | object |
`rest` | rest |

**Returns:** *Element‹›*

___

### `Const` SubMenuChildren

▸ **SubMenuChildren**(): *Element‹›*

*Defined in [packages/bodiless-core/src/ContextMenu/ContextSubMenu.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/ContextSubMenu.tsx#L28)*

**Returns:** *Element‹›*

___

### `Const` addAriaLabels

▸ **addAriaLabels**(`map`: [LocalOptionsMap](globals.md#localoptionsmap)): *[LocalOptionsMap](globals.md#localoptionsmap)*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:177](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [LocalOptionsMap](globals.md#localoptionsmap) |

**Returns:** *[LocalOptionsMap](globals.md#localoptionsmap)*

___

### `Const` addDefaultGroups

▸ **addDefaultGroups**(`map`: [LocalOptionsMap](globals.md#localoptionsmap)): *[LocalOptionsMap](globals.md#localoptionsmap)*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [LocalOptionsMap](globals.md#localoptionsmap) |

**Returns:** *[LocalOptionsMap](globals.md#localoptionsmap)*

___

### `Const` addHideEmptyGroups

▸ **addHideEmptyGroups**(`map`: [LocalOptionsMap](globals.md#localoptionsmap)): *[LocalOptionsMap](globals.md#localoptionsmap)*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:151](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [LocalOptionsMap](globals.md#localoptionsmap) |

**Returns:** *[LocalOptionsMap](globals.md#localoptionsmap)*

___

### `Const` addMissingGroups

▸ **addMissingGroups**(`GroupComponent`: ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`GroupComponent` | ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)› |

**Returns:** *(Anonymous function)*

___

### `Const` asBodilessComponent

▸ **asBodilessComponent**‹**P**, **D**›(`options`: [Options](globals.md#options)‹P, D›): *[AsBodiless](globals.md#asbodiless)‹P, D›*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asBodilessComponent.tsx#L104)*

Makes a component "Bodiless" by connecting it to the Bodiless-jS data flow and giving it
a form which can be used to edit its props. Returns a standard `asBodiless...` function,
which takes `nodeKey` and `defaultData` parameters, and returns an HOC which yields an editable
version of the base component.

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Options](globals.md#options)‹P, D› | An object describing how this component should be made editable.  |

**Returns:** *[AsBodiless](globals.md#asbodiless)‹P, D›*

___

### `Const` asElementArray

▸ **asElementArray**(`children`: ReactNode): *ReactElement[]*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`children` | ReactNode |

**Returns:** *ReactElement[]*

___

### `Const` asReadOnly

▸ **asReadOnly**(`Component`: ComponentType‹any› | string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/asReadOnly.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asReadOnly.tsx#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› &#124; string |

**Returns:** *(Anonymous function)*

___

### `Const` asStatic

▸ **asStatic**(`Component`: ComponentType‹any› | string): *withStatic*

*Defined in [packages/bodiless-core/src/asStatic.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asStatic.tsx#L24)*

Wraps given component in StaticPage component making the component and its children read-only

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | ComponentType‹any› &#124; string |   |

**Returns:** *withStatic*

___

### `Const` buildChildren

▸ **buildChildren**(`DefaultGroupComponent`: ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)›, `props`: any): *function*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L66)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`DefaultGroupComponent` | ComponentType‹[IContextMenuItemProps](globals.md#icontextmenuitemprops)› | React.Fragment |
`props` | any | {} |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` buildGroupTree

▸ **buildGroupTree**(`elements`: ReactElement[], `groupName`: string): *[GroupTree](globals.md#grouptree)*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`elements` | ReactElement[] | - |
`groupName` | string | "_default" |

**Returns:** *[GroupTree](globals.md#grouptree)*

___

### `Const` buildMap

▸ **buildMap**(`options$`: [TMenuOption](globals.md#tmenuoption)[]): *[LocalOptionsMap](globals.md#localoptionsmap)*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`options$` | [TMenuOption](globals.md#tmenuoption)[] |

**Returns:** *[LocalOptionsMap](globals.md#localoptionsmap)*

___

### `Const` cloneChildren

▸ **cloneChildren**(`props`: any): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ContextMenu/StructuredChildren.tsx#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`props` | any | {} |

**Returns:** *(Anonymous function)*

___

### `Const` contextMenuForm

▸ **contextMenuForm**‹**D**›(`options`: [Options](globals.md#options)‹D›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:126](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L126)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](globals.md#options)‹D› | {} |

**Returns:** *(Anonymous function)*

___

### `Private` `Const` createChildrenFromOptions

▸ **createChildrenFromOptions**(`options`: [TMenuOption](globals.md#tmenuoption)[] | undefined, `defaultComponents`: [MenuOptionDefaultComponents](globals.md#private-menuoptiondefaultcomponents)): *Element‹›[]*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenu.tsx#L37)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [TMenuOption](globals.md#tmenuoption)[] &#124; undefined | The array of options |
`defaultComponents` | [MenuOptionDefaultComponents](globals.md#private-menuoptiondefaultcomponents) | Default components to be used when a component does not define one.  |

**Returns:** *Element‹›[]*

___

### `Private` `Const` createMenuOptionDefinition

▸ **createMenuOptionDefinition**‹**P**›(`def$`: [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:122](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L122)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`def$` | [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)‹P› |

**Returns:** *(Anonymous function)*

A menu options hook.

___

### `Const` createMenuOptionGroup

▸ **createMenuOptionGroup**(`baseOption`: [OptionGroupDefinition](globals.md#optiongroupdefinition)): *[TMenuOption](globals.md#tmenuoption)[]*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditButton.tsx#L31)*

Given a base option, creates a pair of menu options including
the base option and a group which contains it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baseOption` | [OptionGroupDefinition](globals.md#optiongroupdefinition) | The option for which to create the group.  |

**Returns:** *[TMenuOption](globals.md#tmenuoption)[]*

The base option and a group which contains it.

___

### `Const` endSidecarNodes

▸ **endSidecarNodes**‹**P**›(`Component`: ComponentType‹P› | string): *EndSidecarNodes*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSidecarNodes.tsx#L52)*

`endSidecarNodes` is an HOC which restores the ContentNode preserved
by `startSidecarNodes`.

**`see`** `withSidecarNodes`

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | ComponentType‹P› &#124; string | Any component which uses the Bodiless ContentNode system.  |

**Returns:** *EndSidecarNodes*

___

### `Const` getAbsoluteNodeKey

▸ **getAbsoluteNodeKey**(`basePath`: [Path](globals.md#path), `contentPath`: [Path](globals.md#path)): *string*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`basePath` | [Path](globals.md#path) |
`contentPath` | [Path](globals.md#path) |

**Returns:** *string*

___

### `Const` getComponent

▸ **getComponent**(`option`: [TMenuOption](globals.md#tmenuoption), `defaultComponents`: [MenuOptionDefaultComponents](globals.md#private-menuoptiondefaultcomponents)): *ComponentClass‹object, any› | FunctionComponent‹object›*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenu.tsx#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`option` | [TMenuOption](globals.md#tmenuoption) |
`defaultComponents` | [MenuOptionDefaultComponents](globals.md#private-menuoptiondefaultcomponents) |

**Returns:** *ComponentClass‹object, any› | FunctionComponent‹object›*

___

### `Const` getContentFrom

▸ **getContentFrom**‹**D**, **E**›(`path`: [Path](globals.md#path)): *[GetContentFrom](globals.md#getcontentfrom)‹D, E›*

*Defined in [packages/bodiless-core/src/Contentful/getContentFrom.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/getContentFrom.ts#L23)*

helper to read data from a content node
can be used for providing default content for a node from another node

**Type parameters:**

▪ **D**: *object*

▪ **E**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [Path](globals.md#path) | path to node read content from  |

**Returns:** *[GetContentFrom](globals.md#getcontentfrom)‹D, E›*

___

### `Const` getFromSessionStorage

▸ **getFromSessionStorage**(`key`: string, `defValue`: any): *any*

*Defined in [packages/bodiless-core/src/SessionStorage.ts:16](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/SessionStorage.ts#L16)*

Copyright © 2020 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`defValue` | any | null |

**Returns:** *any*

___

### `Const` getRelativeNodeKey

▸ **getRelativeNodeKey**(`basePath`: [Path](globals.md#path), `nodePath`: [Path](globals.md#path)): *string*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`basePath` | [Path](globals.md#path) |
`nodePath` | [Path](globals.md#path) |

**Returns:** *string*

___

### `Const` getUI

▸ **getUI**(`ui`: [ContextMenuUI](globals.md#contextmenuui)): *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L75)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [ContextMenuUI](globals.md#contextmenuui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | [UI](globals.md#ui) |

**Returns:** *object*

___

### `Const` ifToggledOff

▸ **ifToggledOff**(`useToggle`: [ToggleHook](globals.md#togglehook)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withFlowToggle.tsx#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`useToggle` | [ToggleHook](globals.md#togglehook) |

**Returns:** *(Anonymous function)*

___

### `Const` ifToggledOn

▸ **ifToggledOn**(`useToggle`: [ToggleHook](globals.md#togglehook)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withFlowToggle.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`useToggle` | [ToggleHook](globals.md#togglehook) |

**Returns:** *(Anonymous function)*

___

### `Const` mergeGroups

▸ **mergeGroups**(`map`: [LocalOptionsMap](globals.md#localoptionsmap)): *[LocalOptionsMap](globals.md#localoptionsmap)*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [LocalOptionsMap](globals.md#localoptionsmap) |

**Returns:** *[LocalOptionsMap](globals.md#localoptionsmap)*

___

### `Private` `Const` onPopupAlign

▸ **onPopupAlign**(`domNode`: Element): *void*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L34)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domNode` | Element | The element to which the popup is attached.  |

**Returns:** *void*

___

### `Const` renderForm

▸ **renderForm**(`props`: [ContextMenuFormProps](globals.md#contextmenuformprops)): *Element‹›*

*Defined in [packages/bodiless-core/src/withNotificationButton.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNotificationButton.tsx#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ContextMenuFormProps](globals.md#contextmenuformprops) |

**Returns:** *Element‹›*

___

### `Const` reverseContextOrder

▸ **reverseContextOrder**(`map`: [LocalOptionsMap](globals.md#localoptionsmap)): *[LocalOptionsMap](globals.md#localoptionsmap)*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:120](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [LocalOptionsMap](globals.md#localoptionsmap) |

**Returns:** *[LocalOptionsMap](globals.md#localoptionsmap)*

___

### `Const` saveToSessionStorage

▸ **saveToSessionStorage**(`key`: string, `val`: any): *void*

*Defined in [packages/bodiless-core/src/SessionStorage.ts:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/SessionStorage.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`val` | any |

**Returns:** *void*

___

### `Private` `Const` setDefaultOptionScope

▸ **setDefaultOptionScope**(`options`: [TMenuOption](globals.md#tmenuoption)[], `global`: boolean): *object[]*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:138](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageContextProvider.tsx#L138)*

**`returs`** 
Array of menu options with default scope set.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [TMenuOption](globals.md#tmenuoption)[] |  An array of menu options |
`global` | boolean |  Whether to set global or local scope.  |

**Returns:** *object[]*

___

### `Const` startSidecarNodes

▸ **startSidecarNodes**‹**P**›(`Component`: ComponentType‹P› | string): *StartSidecarNodes*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSidecarNodes.tsx#L30)*

`startSidecarNodes` is an HOC which records the current ContentNode so that
it can later be restored.

**`see`** `withSidecarNodes`

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | ComponentType‹P› &#124; string | Any component which uses the Bodiless ContentNode system.  |

**Returns:** *StartSidecarNodes*

___

### `Const` useActivateOnEffect

▸ **useActivateOnEffect**(): *object*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L50)*

useActivateContext is a hook that returns the ActivateContext

**Returns:** *object*

* **id**: *string*

* **setId**(): *function*

  * (`id`: string): *void*

___

### `Const` useActivateOnEffectActivator

▸ **useActivateOnEffectActivator**(`uuid`: string): *void*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L57)*

useActivateOnEffect is a hook that will check if a id is stored in the ActivateContext
if it is it will run the iseContextActivator hook

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | id of the component to check  |

**Returns:** *void*

___

### `Const` useClickOutside

▸ **useClickOutside**(`ref`: MutableRefObject‹any›, `callback`: function): *void*

*Defined in [packages/bodiless-core/src/hooks.ts:115](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L115)*

Utility hook to detect click outside of the `ref` element and execute a callback.
This HOC also adds an Escape button listner and will execute a callback on the `esc` keypress.

Usage:

```js
useClickOutside(ref, () => {
  alert('Clicked outside');
});
```

**Parameters:**

▪ **ref**: *MutableRefObject‹any›*

Is a ref to the object we are clicking outside created via useRef() or createRef().

▪ **callback**: *function*

A callback to execute when click outside is detected.

▸ (`e`: KeyboardEvent | MouseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | KeyboardEvent &#124; MouseEvent |

**Returns:** *void*

___

### `Const` useContextActivator

▸ **useContextActivator**(`event`: string, `handler?`: EventHandler‹any›): *object*

*Defined in [packages/bodiless-core/src/hooks.ts:56](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | "onClick" |
`handler?` | EventHandler‹any› | - |

**Returns:** *object*

* **data-bl-activator**: *boolean* = true

___

### `Const` useContextMenuContext

▸ **useContextMenuContext**(): *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:83](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L83)*

**Returns:** *object*

* **setRenderForm**? : *React.Dispatch‹React.SetStateAction‹function | undefined››*

___

### `Const` useContextMenuForm

▸ **useContextMenuForm**‹**D**›(`options`: [HookOptions](globals.md#hookoptions)‹D›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:140](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/contextMenuForm.tsx#L140)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HookOptions](globals.md#hookoptions)‹D› | {} |

**Returns:** *(Anonymous function)*

___

### `Const` useEditContext

▸ **useEditContext**(): *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/hooks.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L22)*

**Returns:** *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

___

### `Const` useEditFormProps

▸ **useEditFormProps**‹**P**, **D**›(`props`: [UseEditFormProps](globals.md#useeditformprops)‹P, D›): *object | object*

*Defined in [packages/bodiless-core/src/withEditFormSnippet.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditFormSnippet.tsx#L61)*

Generates required props to pass to `ContextMenuForm`
using the normal bodiless data handlers. For example:
```
const useMyContextMenuForm = props => (
  const render = () => (
    <ContextMenuForm {..useEditFormProps(props)}>
      // Custom form components
    </ContextMenuForm>
  );
  // use this render to provide a menu button.
);
```
Alternatively you can pass an additional renderForm callback
to generate props suitable for `useEditForm`:
```
const WithMyContextMenuForm = props => (
  const renderForm = () => // Custom form components
  const render = useContextMenuForm(useEditFormProps({ ...props, renderForm }));
  // use this render to provide a menu button.
};
```

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [UseEditFormProps](globals.md#useeditformprops)‹P, D› | The props passed to the component providing the form.  |

**Returns:** *object | object*

Props suitable for passing to ContextMenuForm.

___

### `Const` useEditToggle

▸ **useEditToggle**(): *boolean*

*Defined in [packages/bodiless-core/src/withEditToggle.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditToggle.tsx#L18)*

**Returns:** *boolean*

___

### `Const` useExtendHandler

▸ **useExtendHandler**(`event`: string, `extender`: EventHandler‹any›, `props`: any): *object*

*Defined in [packages/bodiless-core/src/hooks.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L36)*

Utility hook to extend an existing handler.
Only applies the extension when in edit mode.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The name of the event whose handler is to be extended |
`extender` | EventHandler‹any› | Function to extend the existing handler. Will be called second. |
`props` | any | The props of the component which may contain an original handler.  |

**Returns:** *object*

An object of the form { event: extendedHandler }.

* **[event]**: *any* = context.isEdit ? handler$1 : handler

___

### `Private` `Const` useGetter

▸ **useGetter**‹**P**›(`value`: P): *function*

*Defined in [packages/bodiless-core/src/hooks.ts:91](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L91)*

**Type parameters:**

▪ **P**: *any*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | P | The current value to be returned by the getter.  |

**Returns:** *function*

A memoized getter function which will return the current value

▸ (): *P*

___

### `Const` useLocalOptions

▸ **useLocalOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:195](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/LocalContextMenu.tsx#L195)*

**Returns:** *object[]*

___

### `Const` useLocalStorage

▸ **useLocalStorage**(`key`: string, `initialValue`: any): *any[]*

*Defined in [packages/bodiless-core/src/hooks.ts:156](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L156)*

Utility hook to sync state to local storage so that it persists through a page refresh.
Usage is similar to useState except we pass in a local storage key so that
we can default to that value on page load instead of the specified initial value.

**`usage`** has the same API of useState

FilterWrapper.tsx @param key storage key like localStorage.getItem('key')

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | - |
`initialValue` | any |    |

**Returns:** *any[]*

___

### `Const` useMenuOptionUI

▸ **useMenuOptionUI**(): *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L84)*

**Returns:** *object*

___

### `Private` `Const` useMenuOptions

▸ **useMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/withNotificationButton.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNotificationButton.tsx#L54)*

Provide a component Button to switch the position of the global menu.

**Returns:** *object[]*

▸ **useMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/withSwitcherButton.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSwitcherButton.tsx#L24)*

Provide a component Button to switch the position of the global menu.

**Returns:** *object[]*

▸ **useMenuOptions**(`menuOptionWithNodeKey?`: [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/Contentful/withResetButton.ts:28](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/withResetButton.ts#L28)*

Provide a component Button to switch the position of the global menu.

**Parameters:**

Name | Type |
------ | ------ |
`menuOptionWithNodeKey?` | [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey) |

**Returns:** *(Anonymous function)*

___

### `Private` `Const` useNewContext

▸ **useNewContext**(`props`: [PageContextProviderProps](globals.md#pagecontextproviderprops), `parent?`: [PageEditContextInterface](interfaces/pageeditcontextinterface.md)): *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageContextProvider.tsx#L33)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [PageContextProviderProps](globals.md#pagecontextproviderprops) | The props defining the `PageEditContext` |
`parent?` | [PageEditContextInterface](interfaces/pageeditcontextinterface.md) | - |

**Returns:** *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

Values suitable for passing to the `PageEditContext` constructor.

___

### `Const` useNode

▸ **useNode**‹**D**›(`collection?`: undefined | string): *object*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NodeProvider.tsx#L32)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection?` | undefined &#124; string |

**Returns:** *object*

* **node**(): *object*

  * **baseResourcePath**: *string*

  * **data**: *D*

  * **delete**(): *function*

    * (`path?`: [Path](globals.md#path)): *void*

  * **hasError**(): *function*

    * (): *boolean*

  * **keys**: *string[]*

  * **pagePath**: *string*

  * **path**: *string[]*

  * **proxy**(): *function*

    * (`processors`: [Processors](globals.md#processors)‹D›): *[ContentNode](globals.md#contentnode)‹D›*

  * **setData**(): *function*

    * (`data`: D): *void*

  * **child**‹**E**›(`path`: string): *[ContentNode](globals.md#contentnode)‹E›*

  * **peer**‹**E**›(`path`: [Path](globals.md#path)): *[ContentNode](globals.md#contentnode)‹E›*

___

### `Const` useNodeDataHandlers

▸ **useNodeDataHandlers**‹**D**›(`collection?`: undefined | string, `defaultValue`: D): *object*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NodeProvider.tsx#L43)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection?` | undefined &#124; string | - |
`defaultValue` | D | {} as D |

**Returns:** *object*

* **setComponentData**(`data`: D): *void*

* ### **componentData**: *object*

___

### `Const` useNotifications

▸ **useNotifications**(): *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L47)*

**Returns:** *object*

* **notifications**: *[Notification](globals.md#notification)[]*

___

### `Const` useNotify

▸ **useNotify**(`notifications`: [Notification](globals.md#notification)[]): *void*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:92](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/NotificationProvider.tsx#L92)*

The useNotify() hook allows you to register notifications which should be
displayed to the user upon clicking the "Notifications" button on the main
menu.

Note that you are responsible for maintaining and persisting the notifications
you want to display. Every time your component re-renders, all the notifications
it owns will be regenerated from the list provided to this hook.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notifications` | [Notification](globals.md#notification)[] | An array of Notification objects which should be displayed.  |

**Returns:** *void*

___

### `Const` useRegisterMenuOptions

▸ **useRegisterMenuOptions**(`props`: [PageContextProviderProps](globals.md#pagecontextproviderprops), `parentContext?`: [PageEditContextInterface](interfaces/pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageContextProvider.tsx#L55)*

Hook which registers additional menu options for the current context.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [PageContextProviderProps](globals.md#pagecontextproviderprops) | Props which define the menu options to add.  |
`parentContext?` | [PageEditContextInterface](interfaces/pageeditcontextinterface.md) | - |

**Returns:** *void*

___

### `Const` useRegisterSnippet

▸ **useRegisterSnippet**‹**D**›(`snippet`: [Snippet](globals.md#snippet)‹D›): *void*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:191](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L191)*

Hook to register a form snippet which will be rendered as part of a compound form. Should
be invoked within a component wrapped in `withCompoundForm`.

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`snippet` | [Snippet](globals.md#snippet)‹D› | The snippet to add to the form.  |

**Returns:** *void*

___

### `Const` useUI

▸ **useUI**(): *object*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageEditor.tsx#L43)*

**Returns:** *object*

* **GlobalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **LocalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **PageOverlay**? : *FC*

___

### `Const` useUUID

▸ **useUUID**(): *string*

*Defined in [packages/bodiless-core/src/hooks.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hooks.ts#L24)*

**Returns:** *string*

___

### `Private` `Const` withActivatorWrapper

▸ **withActivatorWrapper**‹**P**›(`event`: string, `Wrapper`: CT‹any› | string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asBodilessComponent.tsx#L66)*

Given an event name and a wrapper component, provides an HOC which will wrap the base component
the wrapper, passing the event prop to the wrapper, and all other props to the base compoent.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The event name. |
`Wrapper` | CT‹any› &#124; string | The component to wrap with |

**Returns:** *(Anonymous function)*

___

### `Const` withBodilessData

▸ **withBodilessData**‹**P**, **D**›(`nodeKey?`: [WithNodeKeyProps](globals.md#withnodekeyprops), `defaultData?`: D): *function*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/asBodilessComponent.tsx#L86)*

Convenience HOC to plug a component into the bodiless data model.

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeKey?` | [WithNodeKeyProps](globals.md#withnodekeyprops) | - |
`defaultData?` | D | Default data to be provided for this component.  |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withChild

▸ **withChild**‹**P**›(`Child`: CT, `designKey`: string): *[HOC](globals.md#hoc)‹P›*

*Defined in [packages/bodiless-core/src/withChild.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withChild.tsx#L47)*

Utility function to add a Child to the given Parent component
so that the Child can be altered using Design API.

**`example`** Example of adding 'span' as a child to 'div'.
Then customizing the span leveraging design API.
```
const Parent = props => <div {...props} />;
const Child = props => <span {...props} />;
const ParentWithChild = flow(
  withoutProps(['design']),
  withChild(Child),
  withDesign({
    Child: addProps({
      className: 'test-span-class'
    }),
  }),
)(Parent);
```

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`Child` | CT | - | Component to add as a child |
`designKey` | string | "Child" | Design key to reach the Child component using Design API.  |

**Returns:** *[HOC](globals.md#hoc)‹P›*

An HOC which will add the Child to the given Parent.

___

### `Const` withClickOutside

▸ **withClickOutside**‹**P**›(`Component`: CT‹P› | string): *WithClickOutside*

*Defined in [packages/bodiless-core/src/hoc.tsx:127](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L127)*

Utility hoc to add onClickOutside handler to the original component.
A callback will be executed on both click outside as well as on the `esc` keypress.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P› &#124; string |

**Returns:** *WithClickOutside*

An HOC which will add the handler.

___

### `Const` withCompoundForm

▸ **withCompoundForm**‹**P**›(`def$`: [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withCompoundForm.tsx:154](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withCompoundForm.tsx#L154)*

HOC to create a menu option which will display a "compound form". Children of this
component can contribute "snippets" to the form. Each snippet consists of
- a render function (to render the form fields)
- initial values to populate the fields
- a submit handler which will be passed all submitted values from the form.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`def$` | [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)‹P› |

**Returns:** *(Anonymous function)*

___

### `Const` withContextActivator

▸ **withContextActivator**(`event`: string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withData

▸ **withData**‹**P**, **D**›(`Component`: CT‹P | D› | string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withData.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withData.tsx#L21)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *Object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P &#124; D› &#124; string |

**Returns:** *(Anonymous function)*

___

### `Const` withDefaultContent

▸ **withDefaultContent**‹**P**, **D**›(`content`: D | function): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/Contentful/withDefaultContent.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/withDefaultContent.tsx#L38)*

Creates an HOC which provides default content to the wrapped component.

The default content is an object (or a function returning an object) keyed
by the relative node key at which the wrapped component or its children are
expecting their content.  The schema of the content at each node key should
match the schema expected by the component which will receive the content.

Default content is provided to the component or child only if real, saved content
does not exist at a particular.

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | D &#124; function |  An object or function returning an object containing default content keyed by node key.  |

**Returns:** *(Anonymous function)*

An HOC providing default content to the wrapped component.

___

### `Const` withEditButton

▸ **withEditButton**‹**P**, **D**›(`options`: [EditButtonOptions](globals.md#editbuttonoptions)‹P, D› | function): *function*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:64](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditButton.tsx#L64)*

Uses the provided options to create an HOC which adds an edit button provider
to the wrapped component.

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [EditButtonOptions](globals.md#editbuttonoptions)‹P, D› &#124; function | The options defining the edit button.  |

**Returns:** *function*

An HOC which will add an edit button for the wrapped component.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withEditFormSnippet

▸ **withEditFormSnippet**‹**P**, **D**›(`options`: [Options$](globals.md#options)‹P, D›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withEditFormSnippet.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withEditFormSnippet.tsx#L95)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options$](globals.md#options)‹P, D› |

**Returns:** *(Anonymous function)*

___

### `Const` withExtendHandler

▸ **withExtendHandler**‹**P**›(`event`: string, `useExtender`: function): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L53)*

Utility hoc to add an event handler which extends any handler passed to
the original component.

Only adds the extension when in edit mode.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

▪ **event**: *string*

The name of the event whose handler is to be extended

▪ **useExtender**: *function*

Custom hook returning the handler to add. Will be invoked
       during render and receive the original props of the component.

▸ (`props`: P): *EventHandler‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

**Returns:** *(Anonymous function)*

An HOC which will add the handler.

___

### `Const` withFlowToggle

▸ **withFlowToggle**(`useToggle`: [ToggleHook](globals.md#togglehook)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withFlowToggle.tsx#L29)*

Allow components to be toggled on/off based on the value of useToggle function

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useToggle` | [ToggleHook](globals.md#togglehook) |   Define the conditions to toggle on/off. |

**Returns:** *(Anonymous function)*

  (On: React.ComponentType<P>, Off: React.ComponentType<Q>) => any}

___

### `Const` withLocalContextMenu

▸ **withLocalContextMenu**(`Component`: CT‹any› | string): *WithLocalContextMenu*

*Defined in [packages/bodiless-core/src/hoc.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹any› &#124; string |

**Returns:** *WithLocalContextMenu*

___

### `Const` withMenuOptions

▸ **withMenuOptions**‹**P**›(`def$`: [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:161](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageContextProvider.tsx#L161)*

Using supplied options, returns an HOC which adds one or more menu options (buttons).
This simply wraps the supplied component with a `PageContextProvider`.

Note that, unlike `PageContextProvider` itself, this function takes a custom hook
(`useMenuOptions`), which is invoked to create the 'getMenuOptions' prop
for `PageContextProvider`.  This allows you to use props and context at render
time to create your `getMenuOptions` callback.

Based on the value of the `peer` option, this will associate the menu options either
with a new local context (`peer === false`, the default), or with the existing one.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`def$` | [MenuOptionsDefinition$](globals.md#menuoptionsdefinition)‹P› |

**Returns:** *(Anonymous function)*

An HOC which will cause the component it enhances to contribute the specified
        menu options when placed.

___

### `Const` withNode

▸ **withNode**‹**P**, **D**›(`Component`: CT‹P›): *WithNode*

*Defined in [packages/bodiless-core/src/withNode.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNode.tsx#L20)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P› |

**Returns:** *WithNode*

___

### `Const` withNodeAndHandlers

▸ **withNodeAndHandlers**(`defaultData?`: any): *function*

*Defined in [packages/bodiless-core/src/hoc.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultData?` | any |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withNodeDataHandlers

▸ **withNodeDataHandlers**(`defaultData?`: any): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:101](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultData?` | any |

**Returns:** *(Anonymous function)*

___

### `Const` withNodeKey

▸ **withNodeKey**‹**P**›(`nodeKeys`: string | Partial‹[WithNodeProps](globals.md#withnodeprops)›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withNode.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withNode.tsx#L36)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`nodeKeys` | string &#124; Partial‹[WithNodeProps](globals.md#withnodeprops)› | {} |

**Returns:** *(Anonymous function)*

___

### `Const` withOnlyProps

▸ **withOnlyProps**‹**Q**›(...`keys`: string[]): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L73)*

**Type parameters:**

▪ **Q**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *(Anonymous function)*

___

### `Const` withResetButton

▸ **withResetButton**(`menuOptionWithNodeKey?`: [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey)): *function*

*Defined in [packages/bodiless-core/src/Contentful/withResetButton.ts:59](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/Contentful/withResetButton.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`menuOptionWithNodeKey?` | [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey) |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withResizeDetector

▸ **withResizeDetector**‹**P**›(`Component`: CT‹P› | string): *WithResizeDetector*

*Defined in [packages/bodiless-core/src/hoc.tsx:161](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L161)*

Utility hoc to add resize detector to the original component.
Optionally a callback can be provided by the component.
If the callback is not provided, as default the component is rendered at resize.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P› &#124; string |

**Returns:** *WithResizeDetector*

An HOC which will detect resize.

___

### `Const` withSidecarNodes

▸ **withSidecarNodes**(...`hocs`: [HOC](globals.md#hoc)[]): *function*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/withSidecarNodes.tsx#L96)*

`withSidecarNodes` allows you to establish a `ContentNode` sub-hierarchiy which should
be used by a series of one or more HOC's. Any nodes created by the HOC's enclosed in this
wrapper will not affect the hierarchy for subsequent HOC's *outside* the wrapper. For
example:
```js
flowRight(
  ...
  withNodeKey('foo'), withNode,  // ...$foo
  withSidecarNodes(
    withNodeKey('bar'), withNode,  // ...$foo$bar
  ),
  withNodeKey('baz'); withNode, // ...$foo$baz (otherwise would be ...$foo$bar$baz)
  ...
)
```
This is useful, for example, if you want to apply an enhancment HOC which uses its own
content node(s) without affecting the node paths of other children of the wrapped component.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...hocs` | [HOC](globals.md#hoc)[] | A list of HOC's to be applied using the parallel node hierarchy.  These will             be composed using lodash `flowRight`  |

**Returns:** *function*

an HOC which can wrap any Component using the Bodiless `ContentNode` system.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withoutProps

▸ **withoutProps**‹**Q**›(`keys`: string | string[], ...`restKeys`: string[]): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/hoc.tsx#L33)*

Removes the specified props from the wrapped component.

**Type parameters:**

▪ **Q**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string &#124; string[] |
`...restKeys` | string[] |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` defaultActivateOnEffectState

### ▪ **defaultActivateOnEffectState**: *object*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L22)*

###  id

• **id**: *string* = ""

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L23)*

###  setId

▸ **setId**(): *undefined*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/ActivateContext.tsx#L24)*

**Returns:** *undefined*

___

### `Const` defaultOverlaySettings

### ▪ **defaultOverlaySettings**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L31)*

###  hasCloseButton

• **hasCloseButton**: *false* = false

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L33)*

###  hasSpinner

• **hasSpinner**: *true* = true

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L34)*

###  isActive

• **isActive**: *false* = false

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L32)*

###  maxTimeoutInSeconds

• **maxTimeoutInSeconds**: *null* = null

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L36)*

###  message

• **message**: *string* = ""

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L35)*

###  onClose

▸ **onClose**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/PageEditContext/Store.tsx#L37)*

**Returns:** *void*

___

### `Const` defaultUI

### ▪ **defaultUI**: *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L37)*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L29)*

###  Button

• **Button**: *string* = "button"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L32)*

###  ComponentFormButton

• **ComponentFormButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L41)*

###  ComponentFormCheckBox

• **ComponentFormCheckBox**: *Checkbox* = Checkbox

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L68)*

###  ComponentFormCloseButton

• **ComponentFormCloseButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L42)*

###  ComponentFormDescription

• **ComponentFormDescription**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L54)*

###  ComponentFormError

• **ComponentFormError**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L47)*

###  ComponentFormFieldTitle

• **ComponentFormFieldTitle**: *string* = "title"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L69)*

###  ComponentFormFieldWrapper

• **ComponentFormFieldWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L72)*

###  ComponentFormLabel

• **ComponentFormLabel**: *string* = "label"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L40)*

###  ComponentFormLink

• **ComponentFormLink**: *string* = "a"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L49)*

###  ComponentFormList

• **ComponentFormList**: *string* = "ul"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L52)*

###  ComponentFormListItem

• **ComponentFormListItem**: *string* = "li"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L53)*

###  ComponentFormOption

• **ComponentFormOption**: *Option* = Option

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L70)*

###  ComponentFormRadio

• **ComponentFormRadio**: *Radio* = Radio

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L66)*

###  ComponentFormRadioGroup

• **ComponentFormRadioGroup**: *RadioGroup* = RadioGroup

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L67)*

###  ComponentFormSelect

• **ComponentFormSelect**: *Select* = Select

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:71](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L71)*

###  ComponentFormSubmitButton

• **ComponentFormSubmitButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L43)*

###  ComponentFormText

• **ComponentFormText**: *Text* = Text

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L45)*

###  ComponentFormTextArea

• **ComponentFormTextArea**: *TextArea* = TextArea

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L46)*

###  ComponentFormTitle

• **ComponentFormTitle**: *string* = "h3"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L39)*

###  ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L44)*

###  ComponentFormWarning

• **ComponentFormWarning**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L48)*

###  ContextSubMenu

• **ContextSubMenu**: *ExoticComponent‹object›* = React.Fragment

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L55)*

###  Form

• **Form**: *string* = "form"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L50)*

###  FormWrapper

• **FormWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L58)*

###  HorizontalToolbarButton

• **HorizontalToolbarButton**: *[DefaultToolbarButton](globals.md#const-defaulttoolbarbutton)* = DefaultToolbarButton

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L56)*

###  Message

• **Message**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L34)*

###  OverlayWrapper

• **OverlayWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L30)*

###  PopupWrapper

• **PopupWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L31)*

###  ReactTags

• **ReactTags**: *[ReactTagsField](globals.md#const-reacttagsfield)* = ReactTagsField

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L51)*

###  Spinner

• **Spinner**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/PageOverlay.tsx#L33)*

###  Toolbar

• **Toolbar**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L61)*

###  ToolbarButton

• **ToolbarButton**: *[DefaultToolbarButton](globals.md#const-defaulttoolbarbutton)* = DefaultToolbarButton

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L57)*

###  ToolbarButtonLabel

• **ToolbarButtonLabel**: *string* = "span"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L65)*

###  ToolbarDivider

• **ToolbarDivider**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L59)*

###  Tooltip

• **Tooltip**: *Tooltip* = ReactTooltip

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L60)*

###  ContextMenuGroup

▸ **ContextMenuGroup**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:62](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L62)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | any |
`key` | any |

**Returns:** *Element‹›*

###  Icon

▸ **Icon**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenuContext.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-core/src/components/ContextMenuContext.tsx#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*
