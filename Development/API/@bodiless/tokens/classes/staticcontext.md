[@bodiless/tokens](../README.md) › [Globals](../globals.md) › [StaticContext](staticcontext.md)

# Class: StaticContext

## Hierarchy

* **StaticContext**

## Implements

* [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)

## Index

### Properties

* [allMenuOptions](staticcontext.md#allmenuoptions)
* [areLocalTooltipsDisabled](staticcontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](staticcontext.md#contextmenuoptions)
* [hasLocalMenu](staticcontext.md#haslocalmenu)
* [id](staticcontext.md#id)
* [isActive](staticcontext.md#isactive)
* [isEdit](staticcontext.md#isedit)
* [isInnermost](staticcontext.md#isinnermost)
* [isInnermostLocalMenu](staticcontext.md#isinnermostlocalmenu)
* [isPositionToggled](staticcontext.md#ispositiontoggled)
* [name](staticcontext.md#name)
* [peerContexts](staticcontext.md#peercontexts)

### Methods

* [activate](staticcontext.md#activate)
* [getMenuOptions](staticcontext.md#getmenuoptions)
* [hidePageOverlay](staticcontext.md#hidepageoverlay)
* [refresh](staticcontext.md#refresh)
* [registerPeer](staticcontext.md#registerpeer)
* [showError](staticcontext.md#showerror)
* [showPageOverlay](staticcontext.md#showpageoverlay)
* [spawn](staticcontext.md#spawn)
* [toggleEdit](staticcontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](staticcontext.md#togglelocaltooltipsdisabled)
* [togglePosition](staticcontext.md#toggleposition)
* [unregisterPeer](staticcontext.md#unregisterpeer)
* [updateMenuOptions](staticcontext.md#updatemenuoptions)

### Object literals

* [pageOverlay](staticcontext.md#pageoverlay)

## Properties

###  allMenuOptions

• **allMenuOptions**: *never[]* = []

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:77](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L77)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean* = true

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[areLocalTooltipsDisabled](../interfaces/pageeditcontextinterface.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L22)*

___

###  contextMenuOptions

• **contextMenuOptions**: *never[]* = []

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[contextMenuOptions](../interfaces/pageeditcontextinterface.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L48)*

___

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L30)*

___

###  id

• **id**: *string* = "static"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L52)*

___

###  isActive

• **isActive**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isActive](../interfaces/pageeditcontextinterface.md#isactive)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L26)*

___

###  isEdit

• **isEdit**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isEdit](../interfaces/pageeditcontextinterface.md#isedit)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L38)*

___

###  isInnermost

• **isInnermost**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isInnermost](../interfaces/pageeditcontextinterface.md#isinnermost)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L28)*

___

###  isInnermostLocalMenu

• **isInnermostLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isInnermostLocalMenu](../interfaces/pageeditcontextinterface.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L54)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isPositionToggled](../interfaces/pageeditcontextinterface.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L42)*

___

###  name

• **name**: *string* = "Static"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L50)*

___

###  peerContexts

• **peerContexts**: *never[]* = []

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[peerContexts](../interfaces/pageeditcontextinterface.md#readonly-peercontexts)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L46)*

## Methods

###  activate

▸ **activate**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L32)*

**Returns:** *undefined*

___

###  getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L61)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L65)*

**Returns:** *undefined*

___

###  refresh

▸ **refresh**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L36)*

**Returns:** *undefined*

___

###  registerPeer

▸ **registerPeer**(): *void*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L73)*

**Returns:** *void*

___

###  showError

▸ **showError**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L67)*

**Returns:** *undefined*

___

###  showPageOverlay

▸ **showPageOverlay**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L63)*

**Returns:** *undefined*

___

###  spawn

▸ **spawn**(): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:71](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L71)*

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L40)*

**Returns:** *undefined*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(): *void*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L24)*

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L44)*

**Returns:** *undefined*

___

###  unregisterPeer

▸ **unregisterPeer**(): *void*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L75)*

**Returns:** *void*

___

###  updateMenuOptions

▸ **updateMenuOptions**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L34)*

**Returns:** *undefined*

## Object literals

###  pageOverlay

### ▪ **pageOverlay**: *object*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[pageOverlay](../interfaces/pageeditcontextinterface.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L56)*

###  data

• **data**: *object*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L57)*

#### Type declaration:

###  timeoutId

• **timeoutId**: *number* = 0

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-core/src/components/StaticPage.tsx#L58)*
