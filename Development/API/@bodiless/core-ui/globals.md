[@bodiless/core-ui](README.md) › [Globals](globals.md)

# @bodiless/core-ui

## Index

### Type aliases

* [ButtonProps](globals.md#buttonprops)
* [VariantProps](globals.md#variantprops)

### Variables

* [ContextWrapperDiv](globals.md#const-contextwrapperdiv)
* [FormWrapper](globals.md#const-formwrapper)
* [GlobalTooltipRight](globals.md#const-globaltooltipright)
* [GroupTitle](globals.md#const-grouptitle)
* [Message](globals.md#const-message)
* [OverlayWrapper](globals.md#const-overlaywrapper)
* [PopupWrapper](globals.md#const-popupwrapper)
* [Toolbar](globals.md#const-toolbar)
* [ToolbarDivider](globals.md#const-toolbardivider)
* [ToolbarRight](globals.md#const-toolbarright)
* [groupClasses](globals.md#const-groupclasses)
* [toolbarClasses](globals.md#const-toolbarclasses)

### Functions

* [Button](globals.md#const-button)
* [ContextMenuGroup](globals.md#const-contextmenugroup)
* [ContextWrapper](globals.md#const-contextwrapper)
* [GlobalContextMenu](globals.md#const-globalcontextmenu)
* [GlobalTooltip](globals.md#const-globaltooltip)
* [LocalContextMenu](globals.md#const-localcontextmenu)
* [LocalTooltip](globals.md#const-localtooltip)
* [PageEditor](globals.md#const-pageeditor)
* [PageOverlay](globals.md#const-pageoverlay)
* [ReactTagsField](globals.md#const-reacttagsfield)
* [WrappedSpinner](globals.md#const-wrappedspinner)
* [isActive](globals.md#const-isactive)

### Object literals

* [ui](globals.md#const-ui)

## Type aliases

###  ButtonProps

Ƭ **ButtonProps**: *object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L34)*

#### Type declaration:

* **onClick**(): *function*

  * (): *void*

___

###  VariantProps

Ƭ **VariantProps**: *object*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ContextWrapper.tsx#L28)*

#### Type declaration:

* **isActive**? : *undefined | false | true*

## Variables

### `Const` ContextWrapperDiv

• **ContextWrapperDiv**: *any* = flow(
  withoutProps<VariantProps>(['isActive']),
  addClasses('bl-border bl-border-transparent'),
  removeClassesIf(isActive)('bl-border-transparent'),
)(Div)

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ContextWrapper.tsx#L33)*

___

### `Const` FormWrapper

• **FormWrapper**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object* = addClasses('bl-flex')(Div)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L44)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:90](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L90)*

___

### `Const` GlobalTooltipRight

• **GlobalTooltipRight**: *any* = flow(
  addProps({
    align: {
      offset: [5, 0],
      useCssRight: true,
    },
  }),
)(GlobalTooltip)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L73)*

___

### `Const` GroupTitle

• **GroupTitle**: *ComponentClass‹object, any› | FunctionComponent‹object›* = flow(
  removeClasses('bl-mb-grid-2 bl-min-w-xl-grid-1'),
  addClassesIf(({ index }: any = {}) => Number(index) > 0)('hover:bl-underline bl-cursor-pointer'),
  addClassesIf(({ index }: any = {}) => index === 0)('bl-underline'),
)(ComponentFormTitle) as ComponentType<{ index?: number }>

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L59)*

___

### `Const` Message

• **Message**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object* = addClasses([
  'bl-text-gray-100 bl-text-center bl-text-lg bl-whitespace-pre-line clear-right',
])(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L53)*

___

### `Const` OverlayWrapper

• **OverlayWrapper**: *any* = flow(
  addClasses([
    'bl-p-20', 'bl-py-10', 'bl-w-full', 'bl-h-full', 'bl-fixed', 'bl-top-0', 'bl-z-max',
    'bl-flex', 'bl-flex-col', 'bl-justify-center', 'bl-items-center', 'bl-bg-black-transparent',
  ]),
  addProps({
    id: 'page-overlay',
  }),
)(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L22)*

___

### `Const` PopupWrapper

• **PopupWrapper**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object* = addClasses('bl-p-5 bl-rounded bl-bg-black')(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L32)*

___

### `Const` Toolbar

• **Toolbar**: *any* = flow(
  addClasses(toolbarClasses),
  addProps({ role: 'toolbar', 'aria-label': 'Local Context Menu' }),
)(Div)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L33)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L47)*

___

### `Const` ToolbarDivider

• **ToolbarDivider**: *ComponentClass‹HTMLProps‹HTMLHRElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLHRElement› & object & object› & object* = addClasses(
  'bl-bg-gray bl-w-grid-12 bl--ml-grid-2 bl-mb-grid-3 bl-h-px',
)(Hr)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L46)*

___

### `Const` ToolbarRight

• **ToolbarRight**: *any* = flow(
  addClasses('bl-right-grid-0'),
  removeClasses('bl-left-grid-0'),
  addProps({ 'aria-label': 'Global Context Menu Right' }),
)(Toolbar)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L38)*

___

### `Const` groupClasses

• **groupClasses**: *"bl-px-3"* = "bl-px-3"

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L40)*

___

### `Const` toolbarClasses

• **toolbarClasses**: *"bl-flex bl-divide-x rtl:bl-divide-x-reverse bl-divide-white"* = "bl-flex bl-divide-x rtl:bl-divide-x-reverse bl-divide-white"

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L39)*

## Functions

### `Const` Button

▸ **Button**(`props`: [ButtonProps](globals.md#buttonprops)): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ButtonProps](globals.md#buttonprops) |

**Returns:** *Element‹›*

___

### `Const` ContextMenuGroup

▸ **ContextMenuGroup**(`__namedParameters`: object): *null | Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L65)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`index` | undefined &#124; number |
`option` | undefined &#124; object |

**Returns:** *null | Element‹›*

___

### `Const` ContextWrapper

▸ **ContextWrapper**(`props`: object & HTMLProps‹HTMLDivElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ContextWrapper.tsx#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLDivElement› & object |

**Returns:** *Element‹›*

___

### `Const` GlobalContextMenu

▸ **GlobalContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` GlobalTooltip

▸ **GlobalTooltip**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` LocalContextMenu

▸ **LocalContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:121](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` LocalTooltip

▸ **LocalTooltip**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` PageEditor

▸ **PageEditor**(`props`: object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageEditor.tsx#L27)*

**Parameters:**

▪ **props**: *object*

Name | Type |
------ | ------ |
`children?` | ReactNode |

**Returns:** *Element‹›*

___

### `Const` PageOverlay

▸ **PageOverlay**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` ReactTagsField

▸ **ReactTagsField**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/ReactTags.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ReactTags.tsx#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` WrappedSpinner

▸ **WrappedSpinner**(): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L48)*

**Returns:** *Element‹›*

___

### `Const` isActive

▸ **isActive**(`props`: any): *boolean*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ContextWrapper.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *boolean*

## Object literals

### `Const` ui

### ▪ **ui**: *object*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ContextWrapper.tsx#L39)*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:82](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L82)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:92](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L92)*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L57)*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageEditor.tsx#L21)*

###  Button

• **Button**: *[Button](globals.md#const-button)*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L60)*

###  ComponentFormButton

• **ComponentFormButton**: *ComponentClass‹HTMLProps‹HTMLButtonElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLButtonElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L95)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:102](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L102)*

###  ComponentFormCheckBox

• **ComponentFormCheckBox**: *ComponentClass‹FieldProps‹any, any› & object & object, any› & object | FunctionComponent‹FieldProps‹any, any› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:90](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L90)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:97](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L97)*

###  ComponentFormCloseButton

• **ComponentFormCloseButton**: *ComponentClass‹object, any› | FunctionComponent‹object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L96)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L103)*

###  ComponentFormDescription

• **ComponentFormDescription**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:85](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L85)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L108)*

###  ComponentFormError

• **ComponentFormError**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:99](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L99)*

###  ComponentFormFieldTitle

• **ComponentFormFieldTitle**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:89](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L89)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L96)*

###  ComponentFormFieldWrapper

• **ComponentFormFieldWrapper**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L88)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L95)*

###  ComponentFormLabel

• **ComponentFormLabel**: *ComponentClass‹HTMLProps‹HTMLLabelElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLLabelElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L84)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:107](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L107)*

###  ComponentFormLink

• **ComponentFormLink**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:101](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L101)*

###  ComponentFormList

• **ComponentFormList**: *ComponentClass‹HTMLProps‹HTMLUListElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLUListElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:102](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L102)*

###  ComponentFormListItem

• **ComponentFormListItem**: *ComponentClass‹HTMLProps‹HTMLLIElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLLIElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L103)*

###  ComponentFormOption

• **ComponentFormOption**: *object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:94](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L94)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:101](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L101)*

#### Type declaration:

▸ (`props`: ChildFieldProps‹any, any› & StylableProps & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | ChildFieldProps‹any, any› & StylableProps & object |

* **displayName**: *string*

###  ComponentFormRadio

• **ComponentFormRadio**: *ComponentClass‹ChildFieldProps‹any, any› & object & object, any› & object | FunctionComponent‹ChildFieldProps‹any, any› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L91)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:98](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L98)*

###  ComponentFormRadioGroup

• **ComponentFormRadioGroup**: *ComponentClass‹FieldProps‹any, any› & object & object, any› & object | FunctionComponent‹FieldProps‹any, any› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:92](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L92)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:99](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L99)*

###  ComponentFormSelect

• **ComponentFormSelect**: *ComponentClass‹SelectFieldProps‹any, any› & object & object, any› & object | FunctionComponent‹SelectFieldProps‹any, any› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:93](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L93)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:100](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L100)*

###  ComponentFormSubmitButton

• **ComponentFormSubmitButton**: *function*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:97](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L97)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:105](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L105)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLButtonElement›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› |

###  ComponentFormText

• **ComponentFormText**: *ComponentClass‹FieldProps‹any, any› & object & object, any› & object | FunctionComponent‹FieldProps‹any, any› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L86)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:93](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L93)*

###  ComponentFormTextArea

• **ComponentFormTextArea**: *ComponentClass‹FieldProps‹any, any› & object & object, any› & object | FunctionComponent‹FieldProps‹any, any› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L87)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:94](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L94)*

###  ComponentFormTitle

• **ComponentFormTitle**: *ComponentClass‹HTMLProps‹HTMLHeadingElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLHeadingElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:83](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L83)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:106](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L106)*

###  ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *ComponentClass‹HTMLProps‹HTMLButtonElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLButtonElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:98](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L98)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L104)*

###  ComponentFormWarning

• **ComponentFormWarning**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:100](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L100)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:110](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L110)*

###  ContextMenuGroup

• **ContextMenuGroup**: *FunctionComponent‹object›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L118)*

###  ContextSubMenu

• **ContextSubMenu**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:105](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L105)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:109](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L109)*

###  ContextWrapper

• **ContextWrapper**: *any* = ContextWrapperDiv

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/ContextWrapper.tsx#L40)*

###  FormWrapper

• **FormWrapper**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L111)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:115](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L115)*

###  GlobalContextMenu

• **GlobalContextMenu**: *FunctionComponent‹object & HTMLProps‹HTMLElement››*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageEditor.tsx#L23)*

###  HorizontalToolbarButton

• **HorizontalToolbarButton**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L108)*

###  Icon

• **Icon**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = ToolbarIcon

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L104)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L111)*

###  LocalContextMenu

• **LocalContextMenu**: *FunctionComponent‹object & HTMLProps‹HTMLElement››*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageEditor.tsx#L22)*

###  Message

• **Message**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:62](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L62)*

###  OverlayWrapper

• **OverlayWrapper**: *any*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L58)*

###  PageOverlay

• **PageOverlay**: *[PageOverlay](globals.md#const-pageoverlay)*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageEditor.tsx#L24)*

###  PopupWrapper

• **PopupWrapper**: *ComponentClass‹HTMLProps‹HTMLDivElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:59](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L59)*

###  ReactTags

• **ReactTags**: *ComponentClass‹object & object, any› | FunctionComponent‹object & object›* = ReactTagsField

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:113](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L113)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:117](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L117)*

###  Spinner

• **Spinner**: *[WrappedSpinner](globals.md#const-wrappedspinner)* = WrappedSpinner

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/PageOverlay.tsx#L61)*

###  Toolbar

• **Toolbar**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:106](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L106)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:112](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L112)*

###  ToolbarButton

• **ToolbarButton**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = HorizontalToolbarButton

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:107](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L107)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:113](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L113)*

###  ToolbarButtonLabel

• **ToolbarButtonLabel**: *ComponentClass‹HTMLProps‹HTMLSpanElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLSpanElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:109](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L109)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:114](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L114)*

###  ToolbarDivider

• **ToolbarDivider**: *ComponentClass‹HTMLProps‹HTMLHRElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLHRElement› & object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:110](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L110)*

###  Tooltip

• **Tooltip**: *FunctionComponent‹object & object›* = LocalTooltip

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:112](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L112)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L116)*
