[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditStoreInterface](pageeditstoreinterface.md)

# Interface: PageEditStoreInterface

## Hierarchy

* [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md)

  ↳ **PageEditStoreInterface**

## Index

### Properties

* [activeContext](pageeditstoreinterface.md#activecontext)
* [areLocalTooltipsDisabled](pageeditstoreinterface.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditstoreinterface.md#contextmenuoptions)
* [contextTrail](pageeditstoreinterface.md#contexttrail)
* [isEdit](pageeditstoreinterface.md#isedit)
* [isPositionToggled](pageeditstoreinterface.md#ispositiontoggled)
* [optionMap](pageeditstoreinterface.md#optionmap)
* [pageOverlay](pageeditstoreinterface.md#pageoverlay)
* [toggleEdit](pageeditstoreinterface.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditstoreinterface.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditstoreinterface.md#toggleposition)
* [updateMenuOptions](pageeditstoreinterface.md#updatemenuoptions)

### Methods

* [setActiveContext](pageeditstoreinterface.md#setactivecontext)

## Properties

###  activeContext

• **activeContext**: *[PageEditContextInterface](pageeditcontextinterface.md) | undefined*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:73](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L73)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[areLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L31)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:75](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L75)*

___

###  contextTrail

• **contextTrail**: *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:81](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L81)*

___

###  isEdit

• **isEdit**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:76](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L76)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:77](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L77)*

___

###  optionMap

• **optionMap**: *Map‹string, Map‹string, [TMenuOption](../globals.md#tmenuoption)››*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:83](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L83)*

___

###  pageOverlay

• **pageOverlay**: *[TPageOverlayStore](../globals.md#tpageoverlaystore)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:82](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L82)*

___

###  toggleEdit

• **toggleEdit**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:79](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L79)*

#### Type declaration:

▸ (`on?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

___

###  toggleLocalTooltipsDisabled

• **toggleLocalTooltipsDisabled**: *function*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[toggleLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#togglelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L32)*

#### Type declaration:

▸ (`isDisabled?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

___

###  togglePosition

• **togglePosition**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:80](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L80)*

#### Type declaration:

▸ (`on?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

___

###  updateMenuOptions

• **updateMenuOptions**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:74](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L74)*

#### Type declaration:

▸ (`contexts`: [PageEditContextInterface](pageeditcontextinterface.md)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`contexts` | [PageEditContextInterface](pageeditcontextinterface.md) |

## Methods

###  setActiveContext

▸ **setActiveContext**(`context?`: [PageEditContextInterface](pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:78](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/types.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [PageEditContextInterface](pageeditcontextinterface.md) |

**Returns:** *void*
