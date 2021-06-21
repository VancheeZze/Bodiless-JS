[@bodiless/richtext](README.md) › [Globals](globals.md)

# @bodiless/richtext

## Index

### Enumerations

* [RichTextItemType](enums/richtextitemtype.md)
* [TagName](enums/tagname.md)

### Classes

* [MobxStateContainer](classes/mobxstatecontainer.md)

### Type aliases

* [ButtonProps](globals.md#buttonprops)
* [CTWM](globals.md#ctwm)
* [CreateBlockButton](globals.md#createblockbutton)
* [CreateDeserializerSettings](globals.md#createdeserializersettings)
* [CreateInlineButton](globals.md#createinlinebutton)
* [CreateMarkButton](globals.md#createmarkbutton)
* [CreateToggleMark](globals.md#createtogglemark)
* [CustomComponentProps](globals.md#customcomponentprops)
* [Data](globals.md#data)
* [DataJSON](globals.md#datajson)
* [DeserializeElement](globals.md#deserializeelement)
* [DeserializeElementParams](globals.md#deserializeelementparams)
* [Deserializer](globals.md#deserializer)
* [Deserializers](globals.md#deserializers)
* [EditorButtonProps](globals.md#editorbuttonprops)
* [EditorContext](globals.md#editorcontext)
* [EditorOnChange](globals.md#editoronchange)
* [Element](globals.md#element)
* [FormProps](globals.md#formprops)
* [HTMLElementMap](globals.md#htmlelementmap)
* [HTMLElementMatch](globals.md#htmlelementmatch)
* [HoverButton](globals.md#hoverbutton)
* [HoverMenuProps](globals.md#hovermenuprops)
* [InitialValue](globals.md#initialvalue)
* [InsertInlineOptions](globals.md#insertinlineoptions)
* [NewState](globals.md#newstate)
* [Node](globals.md#node)
* [NodeEditForm](globals.md#nodeeditform)
* [NodeMapper](globals.md#nodemapper)
* [NodeReducer](globals.md#nodereducer)
* [Opts](globals.md#opts)
* [Plugin](globals.md#plugin)
* [PreviewUI](globals.md#previewui)
* [Props](globals.md#props)
* [RenderElementComponentType](globals.md#renderelementcomponenttype)
* [RenderLeafComponentType](globals.md#renderleafcomponenttype)
* [RenderPluginComponent](globals.md#renderplugincomponent)
* [ReturnFocusItem](globals.md#returnfocusitem)
* [RichTextBaseProps](globals.md#richtextbaseprops)
* [RichTextComponent](globals.md#richtextcomponent)
* [RichTextComponentWithGlobalButton](globals.md#richtextcomponentwithglobalbutton)
* [RichTextComponents](globals.md#richtextcomponents)
* [RichTextProps](globals.md#richtextprops)
* [RichTextProviderProps](globals.md#richtextproviderprops)
* [RichTextProviderType](globals.md#richtextprovidertype)
* [TUseNodeStateHandlers](globals.md#tusenodestatehandlers)
* [TUseNodeStateHandlersParams](globals.md#tusenodestatehandlersparams)
* [TUseOnChange](globals.md#tuseonchange)
* [TUseOnChangeParams](globals.md#tuseonchangeparams)
* [TUseValue](globals.md#tusevalue)
* [TUseValueParam](globals.md#tusevalueparam)
* [ToggleBlockOptions](globals.md#toggleblockoptions)
* [ToggleMarkOptions](globals.md#togglemarkoptions)
* [ToggleProps](globals.md#toggleprops)
* [UI](globals.md#ui)
* [UpdateInlineOptions](globals.md#updateinlineoptions)
* [UseKeyBoardShortcuts](globals.md#usekeyboardshortcuts)
* [UseMenuOptionsProps](globals.md#usemenuoptionsprops)
* [Value](globals.md#value)
* [WithSlateSchemaTypeProps](globals.md#withslateschematypeprops)
* [createToggleBlockOptions](globals.md#createtoggleblockoptions)
* [createToggleInlineOptions](globals.md#createtoggleinlineoptions)
* [getSelectorButtonToggleMarkType](globals.md#getselectorbuttontogglemarktype)
* [getSelectorButtonToggleType](globals.md#getselectorbuttontoggletype)
* [props](globals.md#props)
* [requiredProps](globals.md#requiredprops)
* [uiIndexType](globals.md#uiindextype)

### Variables

* [BasicRichText](globals.md#const-basicrichtext)
* [Content](globals.md#const-content)
* [DEFAULT_DELIMITER](globals.md#const-default_delimiter)
* [DEFAULT_ELEMENTS](globals.md#const-default_elements)
* [DEFAULT_NODE](globals.md#const-default_node)
* [DefaultPluginButton](globals.md#const-defaultpluginbutton)
* [EditOnlyHoverMenu](globals.md#const-editonlyhovermenu)
* [NODE_ELEMENT_NODE](globals.md#const-node_element_node)
* [NODE_TEXT_NODE](globals.md#const-node_text_node)
* [NodeSelectorButton](globals.md#const-nodeselectorbutton)
* [RETURN_FOCUS_ITEM](globals.md#let-return_focus_item)
* [RichText](globals.md#const-richtext)
* [RichTextProvider](globals.md#const-richtextprovider)
* [SlateEditor](globals.md#const-slateeditor)
* [SlateEditorContext](globals.md#const-slateeditorcontext)
* [asAtomicBlock](globals.md#const-asatomicblock)
* [asBlock](globals.md#const-asblock)
* [asFloat](globals.md#const-asfloat)
* [asInline](globals.md#const-asinline)
* [asMark](globals.md#const-asmark)
* [asPreview](globals.md#const-aspreview)
* [asVoid](globals.md#const-asvoid)
* [defaults](globals.md#const-defaults)
* [ifMenuOptions](globals.md#const-ifmenuoptions)
* [uiContext](globals.md#const-uicontext)
* [withAlignCenterMeta](globals.md#const-withaligncentermeta)
* [withAlignJustifyMeta](globals.md#const-withalignjustifymeta)
* [withAlignLeftMeta](globals.md#const-withalignleftmeta)
* [withAlignRightMeta](globals.md#const-withalignrightmeta)
* [withBoldDeserializer](globals.md#const-withbolddeserializer)
* [withBoldMeta](globals.md#const-withboldmeta)
* [withEditableDefaultStyles](globals.md#const-witheditabledefaultstyles)
* [withHeader1Deserializer](globals.md#const-withheader1deserializer)
* [withHeader1Meta](globals.md#const-withheader1meta)
* [withHeader2Deserializer](globals.md#const-withheader2deserializer)
* [withHeader2Meta](globals.md#const-withheader2meta)
* [withHeader3Deserializer](globals.md#const-withheader3deserializer)
* [withHeader3Meta](globals.md#const-withheader3meta)
* [withImageMeta](globals.md#const-withimagemeta)
* [withItalicDeserializer](globals.md#const-withitalicdeserializer)
* [withItalicMeta](globals.md#const-withitalicmeta)
* [withLinkMeta](globals.md#const-withlinkmeta)
* [withPreview](globals.md#const-withpreview)
* [withRichtextPlainSerializer](globals.md#const-withrichtextplainserializer)
* [withStrikeDeserializer](globals.md#const-withstrikedeserializer)
* [withStrikeThroughMeta](globals.md#const-withstrikethroughmeta)
* [withSuperScriptMeta](globals.md#const-withsuperscriptmeta)
* [withUnderlineMeta](globals.md#const-withunderlinemeta)

### Functions

* [BaseRichTextPreview](globals.md#const-baserichtextpreview)
* [EditOnlyHoverMenu$](globals.md#private-const-editonlyhovermenu)
* [HoverMenu](globals.md#const-hovermenu)
* [NodeSelectorButton$](globals.md#const-nodeselectorbutton)
* [PluginButton](globals.md#const-pluginbutton)
* [SlateComponentProvider](globals.md#const-slatecomponentprovider)
* [TextSelectorButton](globals.md#const-textselectorbutton)
* [apply](globals.md#const-apply)
* [asSlateCustomComponent](globals.md#const-asslatecustomcomponent)
* [createBlock](globals.md#const-createblock)
* [createBlockButton](globals.md#const-createblockbutton)
* [createBoldDeserializer](globals.md#const-createbolddeserializer)
* [createDefaultDeserializers](globals.md#const-createdefaultdeserializers)
* [createDeserializer](globals.md#const-createdeserializer)
* [createElementRenderPlugin](globals.md#const-createelementrenderplugin)
* [createHeader1Deserializer](globals.md#const-createheader1deserializer)
* [createHeader2Deserializer](globals.md#const-createheader2deserializer)
* [createHeader3Deserializer](globals.md#const-createheader3deserializer)
* [createInline](globals.md#const-createinline)
* [createInlineButton](globals.md#const-createinlinebutton)
* [createIsActive](globals.md#const-createisactive)
* [createItalicDeserializer](globals.md#const-createitalicdeserializer)
* [createLeafRenderPlugin](globals.md#const-createleafrenderplugin)
* [createLinkDeserializer](globals.md#const-createlinkdeserializer)
* [createMarkButton](globals.md#const-createmarkbutton)
* [createPluginButton](globals.md#const-createpluginbutton)
* [createStrikeDeserializer](globals.md#const-createstrikedeserializer)
* [createToggleBlock](globals.md#const-createtoggleblock)
* [createToggleInline](globals.md#const-createtoggleinline)
* [createToggleMark](globals.md#const-createtogglemark)
* [customizer](globals.md#customizer)
* [deserializeElement](globals.md#const-deserializeelement)
* [deserializeHtml](globals.md#const-deserializehtml)
* [getDeserializers](globals.md#const-getdeserializers)
* [getGlobalButton](globals.md#const-getglobalbutton)
* [getGlobalButtons](globals.md#const-getglobalbuttons)
* [getHoverButton](globals.md#const-gethoverbutton)
* [getHoverButtons](globals.md#const-gethoverbuttons)
* [getInlineButtons](globals.md#const-getinlinebuttons)
* [getPlugins](globals.md#const-getplugins)
* [getRenderPlugin](globals.md#const-getrenderplugin)
* [getReturnFocusItem](globals.md#const-getreturnfocusitem)
* [getSelectorButton](globals.md#const-getselectorbutton)
* [getSelectorButtons](globals.md#const-getselectorbuttons)
* [getUI](globals.md#const-getui)
* [hasBlock](globals.md#const-hasblock)
* [hasInline](globals.md#const-hasinline)
* [hasMark](globals.md#const-hasmark)
* [insertBlock](globals.md#const-insertblock)
* [insertInline](globals.md#const-insertinline)
* [isBlockActive](globals.md#const-isblockactive)
* [isInlineActive](globals.md#const-isinlineactive)
* [isMarkActive](globals.md#const-ismarkactive)
* [migrateElementNode](globals.md#const-migrateelementnode)
* [migrateNode](globals.md#const-migratenode)
* [migrateTextNode](globals.md#const-migratetextnode)
* [removeInline](globals.md#const-removeinline)
* [removeLeaves](globals.md#const-removeleaves)
* [renderElement](globals.md#const-renderelement)
* [renderLeaf](globals.md#const-renderleaf)
* [serialize](globals.md#const-serialize)
* [setReturnFocusItem](globals.md#const-setreturnfocusitem)
* [toggleBlock](globals.md#const-toggleblock)
* [toggleInline](globals.md#const-toggleinline)
* [toggleMark](globals.md#const-togglemark)
* [updateInline](globals.md#const-updateinline)
* [updateMenu](globals.md#updatemenu)
* [useInitialValue](globals.md#const-useinitialvalue)
* [useIsEditableAndEmpty](globals.md#const-useiseditableandempty)
* [useIsEmptyEditor](globals.md#const-useisemptyeditor)
* [useKeyBoardShortcut](globals.md#const-usekeyboardshortcut)
* [useKeyBoardShortcuts](globals.md#const-usekeyboardshortcuts)
* [useMenuOptions](globals.md#const-usemenuoptions)
* [useNodeStateHandlers](globals.md#const-usenodestatehandlers)
* [useOnChange](globals.md#const-useonchange)
* [useReturnFocusBackOnEffect](globals.md#const-usereturnfocusbackoneffect)
* [useRichtextPlainSerializer](globals.md#const-userichtextplainserializer)
* [useSlateContext](globals.md#const-useslatecontext)
* [useUI](globals.md#const-useui)
* [useValue](globals.md#const-usevalue)
* [withButton](globals.md#const-withbutton)
* [withComponent](globals.md#const-withcomponent)
* [withDataMigrator](globals.md#const-withdatamigrator)
* [withDefaults](globals.md#const-withdefaults)
* [withEditorSettings](globals.md#const-witheditorsettings)
* [withFloatWrapper](globals.md#const-withfloatwrapper)
* [withGlobalButton](globals.md#const-withglobalbutton)
* [withHoverButton](globals.md#const-withhoverbutton)
* [withHtmlDeserializer](globals.md#const-withhtmldeserializer)
* [withHtmlPaste](globals.md#const-withhtmlpaste)
* [withId](globals.md#const-withid)
* [withKey](globals.md#const-withkey)
* [withMeta](globals.md#const-withmeta)
* [withNodeStateHandlers](globals.md#const-withnodestatehandlers)
* [withOutMeta](globals.md#const-withoutmeta)
* [withReturnFocusBackOnClick](globals.md#const-withreturnfocusbackonclick)
* [withReturnFocusBackOnEffect](globals.md#const-withreturnfocusbackoneffect)
* [withRichtextPlainSerializer$](globals.md#const-withrichtextplainserializer)
* [withSlateActivator](globals.md#const-withslateactivator)
* [withSlateEditor](globals.md#const-withslateeditor)
* [withSlateSchema](globals.md#const-withslateschema)
* [withToggle](globals.md#const-withtoggle)
* [withWrapper](globals.md#const-withwrapper)
* [wrapInline](globals.md#const-wrapinline)
* [wrapTopLevelInlineNodesInParagraphs](globals.md#const-wraptoplevelinlinenodesinparagraphs)

### Object literals

* [defaultUI](globals.md#const-defaultui)
* [lastDesign](globals.md#const-lastdesign)

## Type aliases

###  ButtonProps

Ƭ **ButtonProps**: *object*

*Defined in [packages/bodiless-richtext/src/components/TextSelectorButton.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/TextSelectorButton.tsx#L25)*

#### Type declaration:

* **className**: *string*

___

###  CTWM

Ƭ **CTWM**: *ComponentOrTag‹any›*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L31)*

___

###  CreateBlockButton

Ƭ **CreateBlockButton**: *function*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/createBlockButton.ts:20](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/createBlockButton.ts#L20)*

#### Type declaration:

▸ (`markType`: string, `icon`: string): *ComponentType‹[EditorButtonProps](globals.md#editorbuttonprops)›*

**Parameters:**

Name | Type |
------ | ------ |
`markType` | string |
`icon` | string |

___

###  CreateDeserializerSettings

Ƭ **CreateDeserializerSettings**: *object*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:112](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L112)*

#### Type declaration:

* **nodeName**: *string*

* **tagName**: *[TagName](enums/tagname.md)*

___

###  CreateInlineButton

Ƭ **CreateInlineButton**: *function*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/createInlineButton.ts:20](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/createInlineButton.ts#L20)*

#### Type declaration:

▸ (`inlineType`: string, `icon`: string): *ComponentType‹[EditorButtonProps](globals.md#editorbuttonprops)›*

**Parameters:**

Name | Type |
------ | ------ |
`inlineType` | string |
`icon` | string |

___

###  CreateMarkButton

Ƭ **CreateMarkButton**: *function*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/createMarkButton.ts:20](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/createMarkButton.ts#L20)*

#### Type declaration:

▸ (`markType`: string, `icon`: string): *ComponentType‹[EditorButtonProps](globals.md#editorbuttonprops)›*

**Parameters:**

Name | Type |
------ | ------ |
`markType` | string |
`icon` | string |

___

###  CreateToggleMark

Ƭ **CreateToggleMark**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L24)*

#### Type declaration:

* **editor**: *Editor*

___

###  CustomComponentProps

Ƭ **CustomComponentProps**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:64](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L64)*

#### Type declaration:

* **children**: *any*

* **componentData**: *[DataJSON](globals.md#datajson)*

* **setComponentData**(`Data`: [DataJSON](globals.md#datajson)): *void*

* **unwrap**(): *void*

___

###  Data

Ƭ **Data**: *[Value](globals.md#value)*

*Defined in [packages/bodiless-richtext/src/Float.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Float.tsx#L26)*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L24)*

___

###  DataJSON

Ƭ **DataJSON**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L33)*

___

###  DeserializeElement

Ƭ **DeserializeElement**: *function*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L39)*

#### Type declaration:

▸ (`params`: [DeserializeElementParams](globals.md#deserializeelementparams)): *SlateNode[]*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [DeserializeElementParams](globals.md#deserializeelementparams) |

___

###  DeserializeElementParams

Ƭ **DeserializeElementParams**: *object*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:35](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L35)*

#### Type declaration:

* **deserializers**: *[Deserializer](globals.md#deserializer)[]*

* **element**: *[Element](enums/tagname.md#element)*

___

###  Deserializer

Ƭ **Deserializer**: *object*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L29)*

#### Type declaration:

* **map**: *[HTMLElementMap](globals.md#htmlelementmap)*

* **match**: *[HTMLElementMatch](globals.md#htmlelementmatch)*

* **tagName**: *[TagName](enums/tagname.md)*

___

###  Deserializers

Ƭ **Deserializers**: *object*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:40](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L40)*

#### Type declaration:

* \[ **key**: *string*\]: [Deserializer](globals.md#deserializer)

___

###  EditorButtonProps

Ƭ **EditorButtonProps**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:59](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L59)*

#### Type declaration:

* **children**? : *any*

* **className**? : *undefined | string*

___

###  EditorContext

Ƭ **EditorContext**: *object | null*

*Defined in [packages/bodiless-richtext/src/Type.ts:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L48)*

___

###  EditorOnChange

Ƭ **EditorOnChange**: *function*

*Defined in [packages/bodiless-richtext/src/Type.ts:46](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L46)*

#### Type declaration:

▸ (`value`: [Value](globals.md#value)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Value](globals.md#value) |

___

###  Element

Ƭ **Element**: *HTMLElement*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:19](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L19)*

___

###  FormProps

Ƭ **FormProps**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:35](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L35)*

#### Type declaration:

* **data**: *[DataJSON](globals.md#datajson)*

* **closeForm**(): *void*

* **setData**(`Data`: [DataJSON](globals.md#datajson)): *void*

* **unwrap**(): *void*

___

###  HTMLElementMap

Ƭ **HTMLElementMap**: *function*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L22)*

#### Type declaration:

▸ (`element`: [Element](enums/tagname.md#element)): *object*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](enums/tagname.md#element) |

___

###  HTMLElementMatch

Ƭ **HTMLElementMatch**: *function*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L21)*

#### Type declaration:

▸ (`element`: [Element](enums/tagname.md#element)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](enums/tagname.md#element) |

___

###  HoverButton

Ƭ **HoverButton**: *[RichTextComponent](globals.md#richtextcomponent) & object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:142](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L142)*

___

###  HoverMenuProps

Ƭ **HoverMenuProps**: *object*

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L72)*

#### Type declaration:

* **children**? : *any*

* **className**? : *undefined | string*

* **ui**? : *[UI](globals.md#ui)*

___

###  InitialValue

Ƭ **InitialValue**: *[Value](globals.md#value)*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L26)*

___

###  InsertInlineOptions

Ƭ **InsertInlineOptions**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:80](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L80)*

#### Type declaration:

* **editor**: *Editor*

* **inlineType**: *string*

___

###  NewState

Ƭ **NewState**: *object*

*Defined in [packages/bodiless-richtext/src/MobxStateContainer.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/MobxStateContainer.ts#L17)*

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  Node

Ƭ **Node**: *object*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L18)*

#### Type declaration:

* **children**? : *any*

* **data**? : *undefined | object*

* **leaves**? : *[Node](globals.md#node)[]*

* **marks**? : *[Node](globals.md#node)[]*

* **nodes**? : *[Node](globals.md#node)[]*

* **object**? : *undefined | string*

* **text**? : *undefined | string*

* **type**: *string*

___

###  NodeEditForm

Ƭ **NodeEditForm**: *ComponentType‹[FormProps](globals.md#formprops)›*

*Defined in [packages/bodiless-richtext/src/Type.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L44)*

___

###  NodeMapper

Ƭ **NodeMapper**: *function*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L29)*

#### Type declaration:

▸ (`node`: [Node](globals.md#node)): *[Node](globals.md#node)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](globals.md#node) |

___

###  NodeReducer

Ƭ **NodeReducer**: *function*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L30)*

#### Type declaration:

▸ (`nodes`: [Node](globals.md#node)[]): *[Node](globals.md#node)[]*

**Parameters:**

Name | Type |
------ | ------ |
`nodes` | [Node](globals.md#node)[] |

___

###  Opts

Ƭ **Opts**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx#L29)*

#### Type declaration:

* **icon**: *string*

* **isActive**(`editor`: Editor): *boolean*

* **toggle**(`options`: [ToggleProps](globals.md#toggleprops)): *void*

___

###  Plugin

Ƭ **Plugin**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:101](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L101)*

#### Type declaration:

* **renderElement**? : *EditableProps["renderElement"]*

* **renderLeaf**? : *EditableProps["renderLeaf"]*

* **type**: *string*

___

###  PreviewUI

Ƭ **PreviewUI**: *object*

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L40)*

#### Type declaration:

* **PreviewWrapper**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

###  Props

Ƭ **Props**: *object*

*Defined in [packages/bodiless-richtext/src/core/SlateEditor.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/SlateEditor.tsx#L28)*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L30)*

*Defined in [packages/bodiless-richtext/src/components/PluginButton.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/PluginButton.tsx#L26)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/render/index.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/render/index.tsx#L21)*

#### Type declaration:

* **Component**: *React.ComponentType‹any›*

* **type**: *string*

___

###  RenderElementComponentType

Ƭ **RenderElementComponentType**: *ComponentType‹RenderElementProps›*

*Defined in [packages/bodiless-richtext/src/Type.ts:107](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L107)*

___

###  RenderLeafComponentType

Ƭ **RenderLeafComponentType**: *ComponentType‹RenderLeafProps›*

*Defined in [packages/bodiless-richtext/src/Type.ts:108](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L108)*

___

###  RenderPluginComponent

Ƭ **RenderPluginComponent**: *ComponentType‹any› & object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:94](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L94)*

___

###  ReturnFocusItem

Ƭ **ReturnFocusItem**: *string | null*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L24)*

___

###  RichTextBaseProps

Ƭ **RichTextBaseProps**: *object & Omit‹EditableProps, "value" | "onChange"›*

*Defined in [packages/bodiless-richtext/src/Type.ts:90](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L90)*

___

###  RichTextComponent

Ƭ **RichTextComponent**: *ComponentType‹any› & object*

*Defined in [packages/bodiless-richtext/src/Type.ts:71](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L71)*

___

###  RichTextComponentWithGlobalButton

Ƭ **RichTextComponentWithGlobalButton**: *[RichTextComponent](globals.md#richtextcomponent) & object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:164](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L164)*

___

###  RichTextComponents

Ƭ **RichTextComponents**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:86](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L86)*

#### Type declaration:

* \[ **key**: *string*\]: [RichTextComponent](globals.md#richtextcomponent)

___

###  RichTextProps

Ƭ **RichTextProps**: *Omit‹Partial‹[RichTextBaseProps](globals.md#richtextbaseprops)›, "components"› & DesignableProps & WithNodeProps*

*Defined in [packages/bodiless-richtext/src/Type.ts:98](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L98)*

___

###  RichTextProviderProps

Ƭ **RichTextProviderProps**: *object & [UseMenuOptionsProps](globals.md#usemenuoptionsprops) & Pick‹[RichTextProps](globals.md#richtextprops), "initialValue"›*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:182](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L182)*

___

###  RichTextProviderType

Ƭ **RichTextProviderType**: *ComponentType‹[RichTextProviderProps](globals.md#richtextproviderprops)›*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:185](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L185)*

___

###  TUseNodeStateHandlers

Ƭ **TUseNodeStateHandlers**: *function*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L39)*

#### Type declaration:

▸ (`params`: [TUseNodeStateHandlersParams](globals.md#tusenodestatehandlersparams)): *object*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TUseNodeStateHandlersParams](globals.md#tusenodestatehandlersparams) |

* **onChange**: *[EditorOnChange](globals.md#editoronchange)*

* **value**: *[Value](globals.md#value)*

___

###  TUseNodeStateHandlersParams

Ƭ **TUseNodeStateHandlersParams**: *Omit‹[TUseOnChangeParams](globals.md#tuseonchangeparams) & [TUseValueParam](globals.md#tusevalueparam), "key"›*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:38](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L38)*

___

###  TUseOnChange

Ƭ **TUseOnChange**: *function*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L32)*

#### Type declaration:

▸ (`params`: [TUseOnChangeParams](globals.md#tuseonchangeparams)): *[EditorOnChange](globals.md#editoronchange)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TUseOnChangeParams](globals.md#tuseonchangeparams) |

___

###  TUseOnChangeParams

Ƭ **TUseOnChangeParams**: *object*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L27)*

#### Type declaration:

* **initialValue**: *[InitialValue](globals.md#initialvalue)*

* **key**: *string*

* **onChange**? : *[EditorOnChange](globals.md#editoronchange)*

___

###  TUseValue

Ƭ **TUseValue**: *function*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L37)*

#### Type declaration:

▸ (`params`: [TUseValueParam](globals.md#tusevalueparam)): *[Value](globals.md#value)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TUseValueParam](globals.md#tusevalueparam) |

___

###  TUseValueParam

Ƭ **TUseValueParam**: *object*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:33](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L33)*

#### Type declaration:

* **initialValue**: *[InitialValue](globals.md#initialvalue)*

* **key**: *string*

___

###  ToggleBlockOptions

Ƭ **ToggleBlockOptions**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L45)*

#### Type declaration:

* **blockType**: *string*

* **editor**: *Editor*

___

###  ToggleMarkOptions

Ƭ **ToggleMarkOptions**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:37](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L37)*

#### Type declaration:

* **editor**: *Editor*

* **markType**: *string*

___

###  ToggleProps

Ƭ **ToggleProps**: *object*

*Defined in [packages/bodiless-richtext/src/Type.ts:55](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L55)*

#### Type declaration:

* **editor**: *Editor*

___

###  UI

Ƭ **UI**: *object*

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L31)*

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L30)*

#### Type declaration:

* **Menu**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

###  UpdateInlineOptions

Ƭ **UpdateInlineOptions**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:73](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L73)*

#### Type declaration:

* **at**: *Range*

* **data**: *[DataJSON](globals.md#datajson)*

* **editor**: *Editor*

* **type**: *string*

___

###  UseKeyBoardShortcuts

Ƭ **UseKeyBoardShortcuts**: *object*

*Defined in [packages/bodiless-richtext/src/useKeyBoardShortcuts.ts:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useKeyBoardShortcuts.ts#L45)*

#### Type declaration:

* **components**: *RichTextBaseProps["components"]*

* **editor**: *ReactEditor*

___

###  UseMenuOptionsProps

Ƭ **UseMenuOptionsProps**: *object*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:165](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L165)*

#### Type declaration:

* **globalButtons**? : *Function*

___

###  Value

Ƭ **Value**: *[Node](globals.md#node)[]*

*Defined in [packages/bodiless-richtext/src/Type.ts:42](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Type.ts#L42)*

___

###  WithSlateSchemaTypeProps

Ƭ **WithSlateSchemaTypeProps**: *object*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L103)*

#### Type declaration:

* **schema**: *object*

___

###  createToggleBlockOptions

Ƭ **createToggleBlockOptions**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:50](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L50)*

#### Type declaration:

* **editor**: *Editor*

___

###  createToggleInlineOptions

Ƭ **createToggleInlineOptions**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:84](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L84)*

#### Type declaration:

* **editor**: *Editor*

___

###  getSelectorButtonToggleMarkType

Ƭ **getSelectorButtonToggleMarkType**: *object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:190](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L190)*

#### Type declaration:

* **editor**: *Editor*

* **name**: *string*

___

###  getSelectorButtonToggleType

Ƭ **getSelectorButtonToggleType**: *object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:186](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L186)*

#### Type declaration:

* **editor**: *Editor*

* **name**: *string*

___

###  props

Ƭ **props**: *object*

*Defined in [packages/bodiless-richtext/src/components/TextSelectorButton.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/TextSelectorButton.tsx#L44)*

#### Type declaration:

* **children**: *React.ReactNode*

___

###  requiredProps

Ƭ **requiredProps**: *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx#L25)*

#### Type declaration:

* **children**? : *any*

* **className**? : *undefined | string*

___

###  uiIndexType

Ƭ **uiIndexType**: *object*

*Defined in [packages/bodiless-richtext/src/components/PluginButton.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/PluginButton.tsx#L22)*

#### Type declaration:

* \[ **index**: *string*\]: any

## Variables

### `Const` BasicRichText

• **BasicRichText**: *NamedExoticComponent‹object & object› & object* = React.memo((props: RichTextBaseProps) => {
  const {
    initialValue,
    components,
    ui,
    onChange,
    value,
    ...rest
  } = props;

  const {
    finalComponents, plugins, globalButtons,
  } = useMemo(() => {
    const finalComponents$ = withDefaults(components);
    return {
      finalComponents: finalComponents$,
      plugins: getPlugins(finalComponents$),
      globalButtons: getGlobalButtons(finalComponents$),
    };
  }, [components]);
  const { HoverMenu } = getUI(ui);
  const finalUI = getUI(ui);
  const selectorButtons = getSelectorButtons(finalComponents).map(C => <C key={useUUID()} />);

  const editor = useRef<ReactEditor>(
    flow(
      withReact,
      withHistory,
      withEditorSettings(finalComponents),
      withHtmlPaste(finalComponents),
    )(createEditor()) as ReactEditor,
  );

  const initialValue$ = useInitialValue(initialValue);
  const value$ = value !== undefined && !isEmpty(value) ? value : initialValue$;

  return (
    <Slate editor={editor.current} value={value$} onChange={onChange}>
      <uiContext.Provider value={finalUI}>
        <RichTextProvider
          {...rest}
          initialValue={initialValue$}
          plugins={plugins}
          globalButtons={globalButtons}
        >
          <EditOnlyHoverMenu HoverMenu={HoverMenu}>
            {
              getHoverButtons(finalComponents).map(C => <C key={useUUID()} />)
            }
            {
              selectorButtons.length > 0
              && (
                <TextSelectorButton>{selectorButtons}</TextSelectorButton>
              )
            }
          </EditOnlyHoverMenu>
          <Content
            {...useKeyBoardShortcuts({
              editor: editor.current,
              components: finalComponents,
            })}
            onBlur={() => editor.current.onChange()}
            {...rest}
          />
        </RichTextProvider>
      </uiContext.Provider>
    </Slate>
  );
}, (prevProps, nextProps) => isEqual(prevProps.value, nextProps.value))

*Defined in [packages/bodiless-richtext/src/RichText.tsx:219](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L219)*

___

### `Const` Content

• **Content**: *any* = flow(
  withEditableDefaultStyles,
  ifEditable(
    addProps({
      readOnly: false,
    }),
  ),
  ifReadOnly(
    addProps({
      readOnly: true,
    }),
  ),
  addProps({
    renderLeaf,
    renderElement,
  }),
  observer,
)(Editable)

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:97](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L97)*

___

### `Const` DEFAULT_DELIMITER

• **DEFAULT_DELIMITER**: *"
"* = "
"

*Defined in [packages/bodiless-richtext/src/RichTextPlain.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPlain.tsx#L21)*

___

### `Const` DEFAULT_ELEMENTS

• **DEFAULT_ELEMENTS**: *string[]* = [
  'P',
  'BR',
]

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:46](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L46)*

___

### `Const` DEFAULT_NODE

• **DEFAULT_NODE**: *"paragraph"* = "paragraph"

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:38](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L38)*

___

### `Const` DefaultPluginButton

• **DefaultPluginButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Button

*Defined in [packages/bodiless-richtext/src/components/PluginButton.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/PluginButton.tsx#L20)*

___

### `Const` EditOnlyHoverMenu

• **EditOnlyHoverMenu**: *FunctionComponent‹object›* = observer(EditOnlyHoverMenu$)

*Defined in [packages/bodiless-richtext/src/RichText.tsx:206](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L206)*

___

### `Const` NODE_ELEMENT_NODE

• **NODE_ELEMENT_NODE**: *1* = 1

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L45)*

___

### `Const` NODE_TEXT_NODE

• **NODE_TEXT_NODE**: *3* = 3

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L44)*

___

### `Const` NodeSelectorButton

• **NodeSelectorButton**: *any* = flow(
  withReturnFocusBackOnEffect('more_horiz'),
)(NodeSelectorButton$)

*Defined in [packages/bodiless-richtext/src/components/TextSelectorButton.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/TextSelectorButton.tsx#L38)*

___

### `Let` RETURN_FOCUS_ITEM

• **RETURN_FOCUS_ITEM**: *[ReturnFocusItem](globals.md#returnfocusitem)* = null

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L25)*

___

### `Const` RichText

• **RichText**: *ComponentClass‹object & object & object, any› | FunctionComponent‹object & object & object›* = flow(
  withDataMigrator,
  withNodeStateHandlers,
  withNode,
  withPreview,
  designable(apply, 'RichText'),
)(BasicRichText) as ComponentType<RichTextProps>

*Defined in [packages/bodiless-richtext/src/RichText.tsx:337](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L337)*

___

### `Const` RichTextProvider

• **RichTextProvider**: *ComponentClass‹object & object & object, any› | FunctionComponent‹object & object & object›* = flowRight(
  withDisplayName('RichTextProvider'),
  withSlateEditor,
  ifMenuOptions(
    withMenuOptions({ useMenuOptions, name: 'editor' }),
    withSlateActivator,
  ),
  withSlateSchema,
)(Fragment) as RichTextProviderType

*Defined in [packages/bodiless-richtext/src/RichText.tsx:186](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L186)*

___

### `Const` SlateEditor

• **SlateEditor**: *(Anonymous function)* = withSlateEditor(Fragment)

*Defined in [packages/bodiless-richtext/src/core/SlateEditor.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/SlateEditor.tsx#L56)*

___

### `Const` SlateEditorContext

• **SlateEditorContext**: *Context‹null | object›* = React.createContext<EditorContext>(null)

*Defined in [packages/bodiless-richtext/src/core/SlateEditorContext.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/SlateEditorContext.ts#L18)*

___

### `Const` asAtomicBlock

• **asAtomicBlock**: *(Anonymous function)* = withMeta({ isAtomicBlock: true })

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:76](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L76)*

asAtomicBlock marks the item to be inserted as block

___

### `Const` asBlock

• **asBlock**: *(Anonymous function)* = withMeta({ type: RichTextItemType.block })

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L55)*

asBlock returns a function that will add the fact that an item is a block to a RichTextItem.

___

### `Const` asFloat

• **asFloat**: *function* = flowRight(
  withFloatWrapper,
  ifEditable(
    withMenuOptions({ useMenuOptions, name: 'float' }),
    withLocalContextMenu,
    withContextActivator('onClick'),
  ),
)

*Defined in [packages/bodiless-richtext/src/Float.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Float.tsx#L68)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` asInline

• **asInline**: *(Anonymous function)* = withMeta({ type: RichTextItemType.inline })

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L61)*

asInline returns a function that will add the fact that
an item is an inline to a RichTextItem.

___

### `Const` asMark

• **asMark**: *(Anonymous function)* = withMeta({ type: RichTextItemType.mark })

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L66)*

asMark returns a function that will add the fact that an item is a mark to a RichTextItem.

___

### `Const` asPreview

• **asPreview**: *function & object* = addProps({
  preview: 1,
})

*Defined in [packages/bodiless-richtext/src/RichTextPreview.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPreview.tsx#L43)*

___

### `Const` asVoid

• **asVoid**: *(Anonymous function)* = withMeta({ isVoid: true })

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:71](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L71)*

asVoid marks the item to be inserted as a void item

___

### `Const` defaults

• **defaults**: *object* = {
  SuperScript: Sup,
  Bold: B,
  Italic: Em,
  Underline: Span,
  Link: A,
  AlignLeft: Div,
  AlignRight: Div,
  AlignCenter: Div,
  AlignJustify: Div,
  H1,
  H2,
  H3,
} as DesignableComponents

*Defined in [packages/bodiless-richtext/src/RichText.tsx:289](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L289)*

#### Type declaration:

* \[ **key**: *string*\]: ComponentOrTag‹any›

___

### `Const` ifMenuOptions

• **ifMenuOptions**: *function* = ifToggledOn((props: UseMenuOptionsProps) => {
  const context = useEditContext();
  return context.isEdit && Boolean(props.globalButtons);
})

*Defined in [packages/bodiless-richtext/src/RichText.tsx:177](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L177)*

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

### `Const` uiContext

• **uiContext**: *Context‹object›* = createContext<UI>(defaultUI)

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L49)*

___

### `Const` withAlignCenterMeta

• **withAlignCenterMeta**: *function* = flow(asBlock, withButton('format_align_center'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L51)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withAlignJustifyMeta

• **withAlignJustifyMeta**: *function* = flow(asBlock, withButton('format_align_justify'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L52)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withAlignLeftMeta

• **withAlignLeftMeta**: *function* = flow(asBlock, withButton('format_align_left'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L49)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withAlignRightMeta

• **withAlignRightMeta**: *function* = flow(asBlock, withButton('format_align_right'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L50)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withBoldDeserializer

• **withBoldDeserializer**: *(Anonymous function)* = withHtmlDeserializer(createBoldDeserializer())

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L36)*

___

### `Const` withBoldMeta

• **withBoldMeta**: *function* = flow(withBoldDeserializer, asMark, withKey('mod+b'), withButton('format_bold'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L43)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withEditableDefaultStyles

• **withEditableDefaultStyles**: *function & object* = ifToggledOn(useIsEditableAndEmpty)(
  addProps({
    style: {
      minWidth: '100px',
    },
  }),
)

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:89](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L89)*

hoc that can be applied to Editable based component
adds styles to slate wrapper in order to solve a placeholder problem
described in https://github.com/johnsonandjohnson/Bodiless-JS/issues/481

___

### `Const` withHeader1Deserializer

• **withHeader1Deserializer**: *(Anonymous function)* = withHtmlDeserializer(createHeader1Deserializer())

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L39)*

___

### `Const` withHeader1Meta

• **withHeader1Meta**: *function* = flow(withHeader1Deserializer, asBlock, withKey('mod+1'), withButton('looks_one'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L53)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withHeader2Deserializer

• **withHeader2Deserializer**: *(Anonymous function)* = withHtmlDeserializer(createHeader2Deserializer())

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L40)*

___

### `Const` withHeader2Meta

• **withHeader2Meta**: *function* = flow(withHeader2Deserializer, asBlock, withKey('mod+2'), withButton('looks_two'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L54)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withHeader3Deserializer

• **withHeader3Deserializer**: *(Anonymous function)* = withHtmlDeserializer(createHeader3Deserializer())

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L41)*

___

### `Const` withHeader3Meta

• **withHeader3Meta**: *function* = flow(withHeader3Deserializer, asBlock, withKey('mod+3'), withButton('looks_3'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L55)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withImageMeta

• **withImageMeta**: *function* = flow(asVoid, asMark, withId('image'), withButton('image'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L56)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withItalicDeserializer

• **withItalicDeserializer**: *(Anonymous function)* = withHtmlDeserializer(createItalicDeserializer())

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L37)*

___

### `Const` withItalicMeta

• **withItalicMeta**: *function* = flow(withItalicDeserializer, asMark, withKey('mod+i'), withButton('format_italic'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L45)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withLinkMeta

• **withLinkMeta**: *function* = flow(asInline, withKey('mod+k'), withButton('link'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L46)*

#### Type declaration:

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withPreview

• **withPreview**: *function & object* = flowIf(hasProp('preview'))(
  withoutProps(['preview']),
  replaceWith(BaseRichTextPreview),
)

*Defined in [packages/bodiless-richtext/src/RichTextPreview.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPreview.tsx#L47)*

___

### `Const` withRichtextPlainSerializer

• **withRichtextPlainSerializer**: *function* = flowRight(
  withNode,
  withRichtextPlainSerializer$,
)

*Defined in [packages/bodiless-richtext/src/RichTextPlain.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPlain.tsx#L43)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withStrikeDeserializer

• **withStrikeDeserializer**: *(Anonymous function)* = withHtmlDeserializer(createStrikeDeserializer())

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L38)*

___

### `Const` withStrikeThroughMeta

• **withStrikeThroughMeta**: *function* = flow(withStrikeDeserializer, asMark, withKey('mod+s'), withButton('format_strikethrough'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L47)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withSuperScriptMeta

• **withSuperScriptMeta**: *function* = flow(asMark, withKey('mod+s'), withButton('format_size'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L44)*

#### Type declaration:

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` withUnderlineMeta

• **withUnderlineMeta**: *function* = flow(asMark, withKey('mod+u'), withButton('format_underlined'))

*Defined in [packages/bodiless-richtext/src/meta/index.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/meta/index.tsx#L48)*

#### Type declaration:

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

## Functions

### `Const` BaseRichTextPreview

▸ **BaseRichTextPreview**(`props`: [RichTextBaseProps](globals.md#richtextbaseprops)): *Element‹›*

*Defined in [packages/bodiless-richtext/src/RichTextPreview.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPreview.tsx#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RichTextBaseProps](globals.md#richtextbaseprops) |

**Returns:** *Element‹›*

___

### `Private` `Const` EditOnlyHoverMenu$

▸ **EditOnlyHoverMenu$**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:200](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L200)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`HoverMenu` | string &#124; ComponentClass‹HTMLProps‹HTMLDivElement›, any› &#124; FunctionComponent‹HTMLProps‹HTMLDivElement›› |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` HoverMenu

▸ **HoverMenu**(`props`: [HoverMenuProps](globals.md#hovermenuprops)): *null | ReactPortal‹›*

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [HoverMenuProps](globals.md#hovermenuprops) |

**Returns:** *null | ReactPortal‹›*

___

### `Const` NodeSelectorButton$

▸ **NodeSelectorButton$**(`props`: [ButtonProps](globals.md#buttonprops)): *Element‹›*

*Defined in [packages/bodiless-richtext/src/components/TextSelectorButton.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/TextSelectorButton.tsx#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ButtonProps](globals.md#buttonprops) |

**Returns:** *Element‹›*

___

### `Const` PluginButton

▸ **PluginButton**(`props`: object & HTMLProps‹HTMLButtonElement› & object): *Element‹›*

*Defined in [packages/bodiless-richtext/src/components/PluginButton.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/PluginButton.tsx#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLButtonElement› & object |

**Returns:** *Element‹›*

___

### `Const` SlateComponentProvider

▸ **SlateComponentProvider**(`update`: Function, `type`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`update` | Function |
`type` | string |

**Returns:** *(Anonymous function)*

___

### `Const` TextSelectorButton

▸ **TextSelectorButton**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-richtext/src/components/TextSelectorButton.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/components/TextSelectorButton.tsx#L48)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` apply

▸ **apply**(`design`: Design‹DesignableComponents›): *object*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:319](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L319)*

**Parameters:**

Name | Type |
------ | ------ |
`design` | Design‹DesignableComponents› |

**Returns:** *object*

___

### `Const` asSlateCustomComponent

▸ **asSlateCustomComponent**‹**P**›(`Component`: CT‹P›): *SlateCustomComponent*

*Defined in [packages/bodiless-richtext/src/asSlateCustomComponent.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/asSlateCustomComponent.tsx#L21)*

**Type parameters:**

▪ **P**: *WithNodeProps*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P› |

**Returns:** *SlateCustomComponent*

___

### `Const` createBlock

▸ **createBlock**(`blockType`: string, `data`: [DataJSON](globals.md#datajson)): *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:40](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`blockType` | string |
`data` | [DataJSON](globals.md#datajson) |

**Returns:** *object*

* **data**: *object*

* **type**: *string* = blockType

___

### `Const` createBlockButton

▸ **createBlockButton**(`blockType`: string, `icon`: string): *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/createBlockButton.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/createBlockButton.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`blockType` | string |
`icon` | string |

**Returns:** *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

___

### `Const` createBoldDeserializer

▸ **createBoldDeserializer**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L18)*

**Returns:** *object*

* **map**(): *object*

  * **Bold**: *boolean* = true

___

### `Const` createDefaultDeserializers

▸ **createDefaultDeserializers**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:80](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L80)*

**Returns:** *object*

* **Bold**(): *object*

  * **map**(): *object*

    * **Bold**: *boolean* = true

* **Header1**(): *object*

* **Header2**(): *object*

* **Header3**(): *object*

* **Italic**(): *object*

  * **map**(): *object*

    * **Italic**: *boolean* = true

* **Link**(): *object*

  * **map**(`element`: [Element](globals.md#element)): *object*

    * **type**: *string* = "Link"

    * ### **data**: *object*

      * **slatenode**: *object*

        * **href**: *string* = normalizeHref(element.getAttribute('href') || '')

* **StrikeThrough**(): *object*

  * **map**(): *object*

    * **StrikeThrough**: *boolean* = true

___

### `Const` createDeserializer

▸ **createDeserializer**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:117](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L117)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`nodeName` | string |
`tagName` | [TagName](enums/tagname.md) |

**Returns:** *object*

* **tagName**: *[TagName](enums/tagname.md)*

* **map**(): *object*

  * **type**: *string* = nodeName

* **match**(`element`: [Element](enums/tagname.md#element)): *boolean*

___

### `Const` createElementRenderPlugin

▸ **createElementRenderPlugin**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/render/index.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/render/index.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`Component` | ComponentClass‹any, any› &#124; FunctionComponent‹any› |
`type` | string |

**Returns:** *object*

* **type**: *string*

* **renderElement**(`__namedParameters`: object): *Element‹›*

___

### `Const` createHeader1Deserializer

▸ **createHeader1Deserializer**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:59](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L59)*

**Returns:** *object*

___

### `Const` createHeader2Deserializer

▸ **createHeader2Deserializer**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:66](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L66)*

**Returns:** *object*

___

### `Const` createHeader3Deserializer

▸ **createHeader3Deserializer**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:73](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L73)*

**Returns:** *object*

___

### `Const` createInline

▸ **createInline**(`inlineType`: string, `data`: [DataJSON](globals.md#datajson)): *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:38](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`inlineType` | string |
`data` | [DataJSON](globals.md#datajson) |

**Returns:** *object*

* **data**: *object*

* **type**: *string* = inlineType

___

### `Const` createInlineButton

▸ **createInlineButton**(`inlineType`: string, `icon`: string): *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/createInlineButton.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/createInlineButton.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`inlineType` | string |
`icon` | string |

**Returns:** *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

___

### `Const` createIsActive

▸ **createIsActive**(`format`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |

**Returns:** *(Anonymous function)*

▸ **createIsActive**(`format`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |

**Returns:** *(Anonymous function)*

▸ **createIsActive**(`format`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |

**Returns:** *(Anonymous function)*

___

### `Const` createItalicDeserializer

▸ **createItalicDeserializer**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L26)*

**Returns:** *object*

* **map**(): *object*

  * **Italic**: *boolean* = true

___

### `Const` createLeafRenderPlugin

▸ **createLeafRenderPlugin**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/render/index.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/render/index.tsx#L40)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`Component` | ComponentClass‹any, any› &#124; FunctionComponent‹any› |
`type` | string |

**Returns:** *object*

* **type**: *string*

* **renderLeaf**(`__namedParameters`: object): *Element‹›*

___

### `Const` createLinkDeserializer

▸ **createLinkDeserializer**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L34)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { normalizeHref: identity }

Name | Type |
------ | ------ |
`normalizeHref` | function |

**Returns:** *object*

* **map**(`element`: [Element](globals.md#element)): *object*

  * **type**: *string* = "Link"

  * ### **data**: *object*

    * **slatenode**: *object*

      * **href**: *string* = normalizeHref(element.getAttribute('href') || '')

___

### `Const` createMarkButton

▸ **createMarkButton**(`markType`: string, `icon`: string): *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/createMarkButton.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/createMarkButton.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`markType` | string |
`icon` | string |

**Returns:** *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

___

### `Const` createPluginButton

▸ **createPluginButton**(`props`: [Opts](globals.md#opts)): *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [Opts](globals.md#opts) |

**Returns:** *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

___

### `Const` createStrikeDeserializer

▸ **createStrikeDeserializer**(): *object*

*Defined in [packages/bodiless-richtext/src/serializers/defaultDeserializers.ts:51](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/defaultDeserializers.ts#L51)*

**Returns:** *object*

* **map**(): *object*

  * **StrikeThrough**: *boolean* = true

___

### `Const` createToggleBlock

▸ **createToggleBlock**(`blockType`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:77](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`blockType` | string |

**Returns:** *(Anonymous function)*

___

### `Const` createToggleInline

▸ **createToggleInline**(`inlineType`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:137](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`inlineType` | string |

**Returns:** *(Anonymous function)*

___

### `Const` createToggleMark

▸ **createToggleMark**(`format`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |

**Returns:** *(Anonymous function)*

___

###  customizer

▸ **customizer**(`objValue`: any, `srcValue`: any): *undefined | any[]*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`objValue` | any |
`srcValue` | any |

**Returns:** *undefined | any[]*

___

### `Const` deserializeElement

▸ **deserializeElement**(`__namedParameters`: object): *null | string | Element | (Editor | Element | Text)[]*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:52](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L52)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`deserializers` | object[] |
`element` | HTMLElement |

**Returns:** *null | string | Element | (Editor | Element | Text)[]*

___

### `Const` deserializeHtml

▸ **deserializeHtml**(`html`: string, `deserializers`: [Deserializers](globals.md#deserializers), `domParser?`: DOMParser): *(Editor | Element | Text)[]*

*Defined in [packages/bodiless-richtext/src/serializers/htmlSerializer.ts:97](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/htmlSerializer.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`html` | string |
`deserializers` | [Deserializers](globals.md#deserializers) |
`domParser?` | DOMParser |

**Returns:** *(Editor | Element | Text)[]*

___

### `Const` getDeserializers

▸ **getDeserializers**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:260](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *object*

___

### `Const` getGlobalButton

▸ **getGlobalButton**(`Component`: [RichTextComponentWithGlobalButton](globals.md#richtextcomponentwithglobalbutton)): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:167](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [RichTextComponentWithGlobalButton](globals.md#richtextcomponentwithglobalbutton) |

**Returns:** *(Anonymous function)*

___

### `Const` getGlobalButtons

▸ **getGlobalButtons**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *undefined | (Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:248](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L248)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *undefined | (Anonymous function)*

___

### `Const` getHoverButton

▸ **getHoverButton**‹**P**›(`Component`: [HoverButton](globals.md#hoverbutton)): *ComponentClass‹object, any› | FunctionComponent‹object›*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:147](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L147)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [HoverButton](globals.md#hoverbutton) |

**Returns:** *ComponentClass‹object, any› | FunctionComponent‹object›*

___

### `Const` getHoverButtons

▸ **getHoverButtons**(`Components`: [RichTextComponents](globals.md#richtextcomponents)): *(ComponentClass‹object, any› | FunctionComponent‹object›)[]*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:159](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`Components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *(ComponentClass‹object, any› | FunctionComponent‹object›)[]*

___

### `Const` getInlineButtons

▸ **getInlineButtons**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *(ComponentClass‹any, any› & object | FunctionComponent‹any› & object)[]*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:232](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *(ComponentClass‹any, any› & object | FunctionComponent‹any› & object)[]*

___

### `Const` getPlugins

▸ **getPlugins**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *(object | object)[]*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:134](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *(object | object)[]*

___

### `Const` getRenderPlugin

▸ **getRenderPlugin**‹**P**›(`Component`: [RenderPluginComponent](globals.md#renderplugincomponent)): *object | object*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:99](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L99)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [RenderPluginComponent](globals.md#renderplugincomponent) |

**Returns:** *object | object*

___

### `Const` getReturnFocusItem

▸ **getReturnFocusItem**(): *null | string*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L28)*

**Returns:** *null | string*

___

### `Const` getSelectorButton

▸ **getSelectorButton**‹**P**›(`Component`: [RichTextComponent](globals.md#richtextcomponent)): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:197](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L197)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [RichTextComponent](globals.md#richtextcomponent) |

**Returns:** *(Anonymous function)*

___

### `Const` getSelectorButtons

▸ **getSelectorButtons**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *(Anonymous function)[]*

*Defined in [packages/bodiless-richtext/src/RichTextItemGetters.tsx:239](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemGetters.tsx#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *(Anonymous function)[]*

___

### `Const` getUI

▸ **getUI**(`ui`: [UI](globals.md#ui) & [PreviewUI](globals.md#previewui)): *object*

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) & [PreviewUI](globals.md#previewui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

___

### `Const` hasBlock

▸ **hasBlock**(`format`: string, `editor`: Editor): *boolean*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |
`editor` | Editor |

**Returns:** *boolean*

___

### `Const` hasInline

▸ **hasInline**(`format`: string, `editor`: Editor): *boolean*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |
`editor` | Editor |

**Returns:** *boolean*

___

### `Const` hasMark

▸ **hasMark**(`format`: string, `editor`: Editor): *boolean*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |
`editor` | Editor |

**Returns:** *boolean*

___

### `Const` insertBlock

▸ **insertBlock**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:54](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L54)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockType` | string |
`editor` | Editor |

**Returns:** *void*

___

### `Const` insertInline

▸ **insertInline**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:107](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L107)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`editor` | Editor |
`inlineType` | string |

**Returns:** *void*

___

### `Const` isBlockActive

▸ **isBlockActive**(`editor`: Editor, `format`: string): *boolean*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`format` | string |

**Returns:** *boolean*

___

### `Const` isInlineActive

▸ **isInlineActive**(`editor`: Editor, `format`: string): *boolean*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`format` | string |

**Returns:** *boolean*

___

### `Const` isMarkActive

▸ **isMarkActive**(`editor`: Editor, `format`: string): *boolean*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`format` | string |

**Returns:** *boolean*

___

### `Const` migrateElementNode

▸ **migrateElementNode**(`node`: [Node](globals.md#node)): *object*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](globals.md#node) |

**Returns:** *object*

* **children**? : *any*

* **data**? : *undefined | object*

* **leaves**? : *[Node](globals.md#node)[]*

* **marks**? : *[Node](globals.md#node)[]*

* **nodes**? : *[Node](globals.md#node)[]*

* **object**? : *undefined | string*

* **text**? : *undefined | string*

* **type**: *string*

___

### `Const` migrateNode

▸ **migrateNode**(`oldNode`: [Node](globals.md#node)): *object*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`oldNode` | [Node](globals.md#node) |

**Returns:** *object*

* **children**? : *any*

* **data**? : *undefined | object*

* **leaves**? : *[Node](globals.md#node)[]*

* **marks**? : *[Node](globals.md#node)[]*

* **nodes**? : *[Node](globals.md#node)[]*

* **object**? : *undefined | string*

* **text**? : *undefined | string*

* **type**: *string*

___

### `Const` migrateTextNode

▸ **migrateTextNode**(`oldNode`: [Node](globals.md#node)): *object*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`oldNode` | [Node](globals.md#node) |

**Returns:** *object*

* **children**? : *any*

* **data**? : *undefined | object*

* **leaves**? : *[Node](globals.md#node)[]*

* **marks**? : *[Node](globals.md#node)[]*

* **nodes**? : *[Node](globals.md#node)[]*

* **object**? : *undefined | string*

* **text**? : *undefined | string*

* **type**: *string*

___

### `Const` removeInline

▸ **removeInline**(`editor`: Editor, `inlineType`: string): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:43](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`inlineType` | string |

**Returns:** *void*

___

### `Const` removeLeaves

▸ **removeLeaves**(`nodes`: [Node](globals.md#node)[]): *object[]*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`nodes` | [Node](globals.md#node)[] |

**Returns:** *object[]*

___

### `Const` renderElement

▸ **renderElement**(`props`: RenderElementProps): *Element‹›*

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:62](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | RenderElementProps |

**Returns:** *Element‹›*

___

### `Const` renderLeaf

▸ **renderLeaf**(`props`: RenderLeafProps): *Element‹›*

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | RenderLeafProps |

**Returns:** *Element‹›*

___

### `Const` serialize

▸ **serialize**(`nodes`: [Node](globals.md#node)[]): *string*

*Defined in [packages/bodiless-richtext/src/RichTextPlain.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPlain.tsx#L27)*

**`todo`** make delimiter configurable similar to how it was done in slate-plain-serializer

**`see`** https://github.com/ianstormtaylor/slate/blob/slate%400.44.13/packages/slate-plain-serializer/src/index.js#L19

**Parameters:**

Name | Type |
------ | ------ |
`nodes` | [Node](globals.md#node)[] |

**Returns:** *string*

___

### `Const` setReturnFocusItem

▸ **setReturnFocusItem**(`item`: [ReturnFocusItem](globals.md#returnfocusitem)): *void*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ReturnFocusItem](globals.md#returnfocusitem) |

**Returns:** *void*

___

### `Const` toggleBlock

▸ **toggleBlock**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts:66](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/block/blockUtils.ts#L66)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockType` | string |
`editor` | Editor |

**Returns:** *void*

___

### `Const` toggleInline

▸ **toggleInline**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:121](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L121)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`editor` | Editor |
`inlineType` | string |

**Returns:** *void*

___

### `Const` toggleMark

▸ **toggleMark**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts:41](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/mark/markUtils.ts#L41)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`editor` | Editor |
`markType` | string |

**Returns:** *void*

___

### `Const` updateInline

▸ **updateInline**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:88](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L88)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`at` | Range |
`data` | object |
`editor` | Editor |
`type` | string |

**Returns:** *void*

___

###  updateMenu

▸ **updateMenu**(`menu`: HTMLElement | null, `editor`: ReactEditor): *void*

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L42)*

Update the menu's absolute position.

**Parameters:**

Name | Type |
------ | ------ |
`menu` | HTMLElement &#124; null |
`editor` | ReactEditor |

**Returns:** *void*

___

### `Const` useInitialValue

▸ **useInitialValue**(`initialValue?`: [Value](globals.md#value)): *(Editor | Element | Text)[]*

*Defined in [packages/bodiless-richtext/src/useInitialValue.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useInitialValue.ts#L22)*

hooks that can be used to get initialValue for the editor

**Parameters:**

Name | Type |
------ | ------ |
`initialValue?` | [Value](globals.md#value) |

**Returns:** *(Editor | Element | Text)[]*

___

### `Const` useIsEditableAndEmpty

▸ **useIsEditableAndEmpty**(): *boolean*

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:82](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L82)*

**Returns:** *boolean*

___

### `Const` useIsEmptyEditor

▸ **useIsEmptyEditor**(): *boolean*

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:77](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L77)*

**Returns:** *boolean*

___

### `Const` useKeyBoardShortcut

▸ **useKeyBoardShortcut**(`Component`: [RichTextComponent](globals.md#richtextcomponent)): *object*

*Defined in [packages/bodiless-richtext/src/useKeyBoardShortcuts.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useKeyBoardShortcuts.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [RichTextComponent](globals.md#richtextcomponent) |

**Returns:** *object*

* **key**: *string* = keyboardKey

* **toggle**: *(Anonymous function) | (Anonymous function) | (Anonymous function)*

___

### `Const` useKeyBoardShortcuts

▸ **useKeyBoardShortcuts**(`props`: [UseKeyBoardShortcuts](globals.md#usekeyboardshortcuts)): *object*

*Defined in [packages/bodiless-richtext/src/useKeyBoardShortcuts.ts:50](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useKeyBoardShortcuts.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [UseKeyBoardShortcuts](globals.md#usekeyboardshortcuts) |

**Returns:** *object*

* **onKeyDown**(`event`: KeyboardEvent): *void*

___

### `Const` useMenuOptions

▸ **useMenuOptions**(): *object[]*

*Defined in [packages/bodiless-richtext/src/Float.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Float.tsx#L41)*

**Returns:** *object[]*

▸ **useMenuOptions**(`props`: [UseMenuOptionsProps](globals.md#usemenuoptionsprops)): *any*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:169](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [UseMenuOptionsProps](globals.md#usemenuoptionsprops) |

**Returns:** *any*

___

### `Const` useNodeStateHandlers

▸ **useNodeStateHandlers**(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:83](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L83)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`initialValue` | (Editor &#124; Element &#124; Text)[] |
`onChange` | undefined &#124; function |

**Returns:** *object*

* **onChange**(): *function*

  * (`value`: [Value](globals.md#value)): *void*

* **value**: *(Editor | Element | Text)[]* = useValue({
      initialValue,
      key,
    })

___

### `Const` useOnChange

▸ **useOnChange**(`__namedParameters`: object): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L48)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`initialValue` | (Editor &#124; Element &#124; Text)[] |
`onChange` | undefined &#124; function |

**Returns:** *(Anonymous function)*

___

### `Const` useReturnFocusBackOnEffect

▸ **useReturnFocusBackOnEffect**(`itemId`: string): *object*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`itemId` | string |

**Returns:** *object*

* **returnFocusBack**(): *void*

___

### `Const` useRichtextPlainSerializer

▸ **useRichtextPlainSerializer**(): *string*

*Defined in [packages/bodiless-richtext/src/RichTextPlain.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPlain.tsx#L29)*

**Returns:** *string*

___

### `Const` useSlateContext

▸ **useSlateContext**(): *null | object*

*Defined in [packages/bodiless-richtext/src/core/SlateEditorContext.ts:20](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/SlateEditorContext.ts#L20)*

**Returns:** *null | object*

___

### `Const` useUI

▸ **useUI**(): *object*

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L50)*

**Returns:** *object*

* **Button**? : *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **ClickableWrapper**? : *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **CloseButton**? : *ComponentType‹HTMLProps‹HTMLSpanElement›› | string*

* **HoverMenu**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **Overlay**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **TextSelectorWrapper**? : *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

### `Const` useValue

▸ **useValue**(): *(Editor | Element | Text)[]*

*Defined in [packages/bodiless-richtext/src/useNodeStateHandlers.ts:78](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/useNodeStateHandlers.ts#L78)*

**Returns:** *(Editor | Element | Text)[]*

___

### `Const` withButton

▸ **withButton**(`icon`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:107](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L107)*

withButton will return a function that will add a hover or global button depending on the type.

**Parameters:**

Name | Type |
------ | ------ |
`icon` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withComponent

▸ **withComponent**‹**P**, **Q**›(`Component`: ComponentType‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L45)*

With Component returns a function that will add the provided Componet to a RichTextItem.

**Type parameters:**

▪ **P**

▪ **Q**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹P› |

**Returns:** *(Anonymous function)*

___

### `Const` withDataMigrator

▸ **withDataMigrator**(`Component`: any): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/withDataMigrator.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDataMigrator.tsx#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | any |

**Returns:** *(Anonymous function)*

___

### `Const` withDefaults

▸ **withDefaults**(`components`: DesignableComponents): *object*

*Defined in [packages/bodiless-richtext/src/withDefaults.ts:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withDefaults.ts#L27)*

ensure the componets have a type (we default to mark) as well as ensuring there is an id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`components` | DesignableComponents | which set of component on which we should operate  |

**Returns:** *object*

* \[ **key**: *string*\]: [RichTextComponent](globals.md#richtextcomponent)

___

### `Const` withEditorSettings

▸ **withEditorSettings**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:208](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *(Anonymous function)*

___

### `Const` withFloatWrapper

▸ **withFloatWrapper**‹**P**›(`Component`: ComponentType‹P›): *FunctionComponent‹P›*

*Defined in [packages/bodiless-richtext/src/Float.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/Float.tsx#L30)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹P› |

**Returns:** *FunctionComponent‹P›*

___

### `Const` withGlobalButton

▸ **withGlobalButton**(`icon`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L95)*

withGlobalButton will return a function that will add a GlobalButton to a RichTextItem.

**Parameters:**

Name | Type |
------ | ------ |
`icon` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withHoverButton

▸ **withHoverButton**(`icon`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:100](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L100)*

withHoverButton will return a function that will add a HoverButton to a RichTextItem.

**Parameters:**

Name | Type |
------ | ------ |
`icon` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withHtmlDeserializer

▸ **withHtmlDeserializer**(`deserializer`: [Deserializer](globals.md#deserializer)): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:112](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L112)*

adds html deserializer to a given RichTextItem based component

**Parameters:**

Name | Type |
------ | ------ |
`deserializer` | [Deserializer](globals.md#deserializer) |

**Returns:** *(Anonymous function)*

___

### `Const` withHtmlPaste

▸ **withHtmlPaste**(`components`: [RichTextComponents](globals.md#richtextcomponents)): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/withHtmlPaste.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withHtmlPaste.tsx#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [RichTextComponents](globals.md#richtextcomponents) |

**Returns:** *(Anonymous function)*

___

### `Const` withId

▸ **withId**(`id`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L88)*

withId will return a function that will add a Id to a RichTextItem.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withKey

▸ **withKey**(`key`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:81](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L81)*

withKey will return a function that will add a keyboardKey to a RichTextItem.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withMeta

▸ **withMeta**(`meta`: Object): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L38)*

withMeta creates an HOC that will add meta data to a React Component

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`meta` | Object | the data to be side loaded in to the component  |

**Returns:** *(Anonymous function)*

___

### `Const` withNodeStateHandlers

▸ **withNodeStateHandlers**(`Component`: ComponentType‹[RichTextProps](globals.md#richtextprops)›): *FunctionComponent‹object & object & object›*

*Defined in [packages/bodiless-richtext/src/withNodeStateHandlers.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withNodeStateHandlers.tsx#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹[RichTextProps](globals.md#richtextprops)› |

**Returns:** *FunctionComponent‹object & object & object›*

___

### `Const` withOutMeta

▸ **withOutMeta**‹**P**›(`Component`: [CTWM](globals.md#ctwm)): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichTextItemSetters.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextItemSetters.tsx#L33)*

**Type parameters:**

▪ **P**: *Object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [CTWM](globals.md#ctwm) |

**Returns:** *(Anonymous function)*

___

### `Const` withReturnFocusBackOnClick

▸ **withReturnFocusBackOnClick**(`itemId`: string): *Token‹[Props](globals.md#props)›*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`itemId` | string |

**Returns:** *Token‹[Props](globals.md#props)›*

___

### `Const` withReturnFocusBackOnEffect

▸ **withReturnFocusBackOnEffect**(`itemId`: string): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/withReturnFocusBack.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/withReturnFocusBack.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`itemId` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withRichtextPlainSerializer$

▸ **withRichtextPlainSerializer$**(`Component`: ComponentType): *WithRichtextPlainSerializer*

*Defined in [packages/bodiless-richtext/src/RichTextPlain.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextPlain.tsx#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType |

**Returns:** *WithRichtextPlainSerializer*

___

### `Const` withSlateActivator

▸ **withSlateActivator**(`Component`: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:127](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *(Anonymous function)*

___

### `Const` withSlateEditor

▸ **withSlateEditor**‹**P**›(`Component`: ComponentType‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/core/SlateEditor.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/SlateEditor.tsx#L36)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹P› |

**Returns:** *(Anonymous function)*

___

### `Const` withSlateSchema

▸ **withSlateSchema**‹**P**›(`Component`: ComponentType‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:107](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L107)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹P› |

**Returns:** *(Anonymous function)*

___

### `Const` withToggle

▸ **withToggle**(`opts`: [Opts](globals.md#opts)): *Token‹object, [requiredProps](globals.md#requiredprops), object›*

*Defined in [packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/createPluginButton.tsx#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [Opts](globals.md#opts) |

**Returns:** *Token‹object, [requiredProps](globals.md#requiredprops), object›*

___

### `Const` withWrapper

▸ **withWrapper**(`WrapperComponent`: ComponentType‹any›): *(Anonymous function)*

*Defined in [packages/bodiless-richtext/src/core/Content.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/Content.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`WrapperComponent` | ComponentType‹any› |

**Returns:** *(Anonymous function)*

___

### `Const` wrapInline

▸ **wrapInline**(`editor`: Editor, `inlineType`: string, `data`: [DataJSON](globals.md#datajson)): *void*

*Defined in [packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/plugin-factory/inline/inlineUtils.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`inlineType` | string |
`data` | [DataJSON](globals.md#datajson) |

**Returns:** *void*

___

### `Const` wrapTopLevelInlineNodesInParagraphs

▸ **wrapTopLevelInlineNodesInParagraphs**(`fragment`: SlateNode[]): *(Editor | Element | Text)[]*

*Defined in [packages/bodiless-richtext/src/serializers/wrapTopLevelInlineNodesInParagraphs.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/serializers/wrapTopLevelInlineNodesInParagraphs.ts#L22)*

leveraging https://github.com/ianstormtaylor/slate/issues/3457#issuecomment-577395255

**Parameters:**

Name | Type |
------ | ------ |
`fragment` | SlateNode[] |

**Returns:** *(Editor | Element | Text)[]*

## Object literals

### `Const` defaultUI

### ▪ **defaultUI**: *object*

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:20](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L20)*

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L26)*

###  Button

• **Button**: *string* = "button"

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L23)*

###  ClickableWrapper

• **ClickableWrapper**: *string* = "button"

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L26)*

###  CloseButton

• **CloseButton**: *string* = "span"

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L25)*

###  Menu

• **Menu**: *string* = "div"

*Defined in [packages/bodiless-richtext/src/core/HoverMenu.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/core/HoverMenu.tsx#L27)*

###  Overlay

• **Overlay**: *string* = "div"

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L24)*

###  PreviewWrapper

• **PreviewWrapper**: *string* = "div"

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L27)*

###  TextSelectorWrapper

• **TextSelectorWrapper**: *string* = "div"

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L28)*

###  HoverMenu

▸ **HoverMenu**(): *Element‹›*

*Defined in [packages/bodiless-richtext/src/RichTextContext.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichTextContext.tsx#L22)*

**Returns:** *Element‹›*

___

### `Const` lastDesign

### ▪ **lastDesign**: *object*

*Defined in [packages/bodiless-richtext/src/RichText.tsx:303](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L303)*

###  AlignCenter

• **AlignCenter**: *function* = withAlignCenterMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:311](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L311)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  AlignJustify

• **AlignJustify**: *function* = withAlignJustifyMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:312](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L312)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  AlignLeft

• **AlignLeft**: *function* = withAlignLeftMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:309](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L309)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  AlignRight

• **AlignRight**: *function* = withAlignRightMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:310](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L310)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  Bold

• **Bold**: *function* = withBoldMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:305](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L305)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  H1

• **H1**: *function* = withHeader1Meta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:313](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L313)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  H2

• **H2**: *function* = withHeader2Meta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:314](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L314)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  H3

• **H3**: *function* = withHeader3Meta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:315](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L315)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  Italic

• **Italic**: *function* = withItalicMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:306](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L306)*

#### Type declaration:

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  Link

• **Link**: *function* = withLinkMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:308](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L308)*

#### Type declaration:

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  SuperScript

• **SuperScript**: *function* = withSuperScriptMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:304](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L304)*

#### Type declaration:

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

###  Underline

• **Underline**: *function* = withUnderlineMeta

*Defined in [packages/bodiless-richtext/src/RichText.tsx:307](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-richtext/src/RichText.tsx#L307)*

#### Type declaration:

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |
