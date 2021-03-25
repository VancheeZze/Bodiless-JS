[@bodiless/tokens](../README.md) › [Globals](../globals.md) › [PageEditStore](pageeditstore.md)

# Class: PageEditStore

## Hierarchy

* **PageEditStore**

## Implements

* [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)

## Index

### Constructors

* [constructor](pageeditstore.md#constructor)

### Properties

* [activeContext](pageeditstore.md#activecontext)
* [areLocalTooltipsDisabled](pageeditstore.md#arelocaltooltipsdisabled)
* [isEdit](pageeditstore.md#isedit)
* [isPositionToggled](pageeditstore.md#ispositiontoggled)
* [optionMap](pageeditstore.md#optionmap)

### Accessors

* [contextMenuOptions](pageeditstore.md#contextmenuoptions)
* [contextTrail](pageeditstore.md#contexttrail)

### Methods

* [reset](pageeditstore.md#reset)
* [setActiveContext](pageeditstore.md#setactivecontext)
* [toggleEdit](pageeditstore.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditstore.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditstore.md#toggleposition)
* [updateMenuOptions](pageeditstore.md#updatemenuoptions)

### Object literals

* [pageOverlay](pageeditstore.md#pageoverlay)

## Constructors

###  constructor

\+ **new PageEditStore**(`activeContext?`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *[PageEditStore](pageeditstore.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`activeContext?` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *[PageEditStore](pageeditstore.md)*

## Properties

###  activeContext

• **activeContext**: *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | undefined* = undefined

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[activeContext](../interfaces/pageeditstoreinterface.md#activecontext)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L46)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean* = false

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[areLocalTooltipsDisabled](../interfaces/pageeditstoreinterface.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:175](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L175)*

___

###  isEdit

• **isEdit**: *any* = getFromSessionStorage('isEdit', false)

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[isEdit](../interfaces/pageeditstoreinterface.md#isedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L48)*

___

###  isPositionToggled

• **isPositionToggled**: *any* = getFromSessionStorage('isPositionToggled', false)

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[isPositionToggled](../interfaces/pageeditstoreinterface.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L50)*

___

###  optionMap

• **optionMap**: *ObservableMap‹string, ObservableMap‹string, object››* = new Map() as ObservableMap<string, ObservableMap<string, TMenuOption>>

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[optionMap](../interfaces/pageeditstoreinterface.md#optionmap)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L60)*

## Accessors

###  contextMenuOptions

• **get contextMenuOptions**(): *[TMenuOption](../globals.md#tmenuoption)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:136](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L136)*

**Returns:** *[TMenuOption](../globals.md#tmenuoption)[]*

___

###  contextTrail

• **get contextTrail**(): *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:167](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L167)*

**Returns:** *string[]*

## Methods

###  reset

▸ **reset**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:62](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L62)*

**Returns:** *void*

___

###  setActiveContext

▸ **setActiveContext**(`context?`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:82](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *void*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:147](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:177](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:157](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  updateMenuOptions

▸ **updateMenuOptions**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *string[]*

## Object literals

###  pageOverlay

### ▪ **pageOverlay**: *object*

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[pageOverlay](../interfaces/pageeditstoreinterface.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L52)*

###  timeoutId

• **timeoutId**: *number* = 0

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L56)*

▪ **data**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/Store.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/PageEditContext/Store.tsx#L53)*
