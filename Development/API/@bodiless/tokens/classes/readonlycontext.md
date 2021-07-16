[@bodiless/tokens](../README.md) › [Globals](../globals.md) › [ReadOnlyContext](readonlycontext.md)

# Class: ReadOnlyContext

## Hierarchy

* [PageEditContext](pageeditcontext.md)

  ↳ **ReadOnlyContext**

## Implements

* [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)

## Index

### Constructors

* [constructor](readonlycontext.md#constructor)

### Properties

* [hasLocalMenu](readonlycontext.md#haslocalmenu)
* [id](readonlycontext.md#readonly-id)
* [name](readonlycontext.md#readonly-name)
* [parent](readonlycontext.md#readonly-parent)
* [peerContextMap](readonlycontext.md#protected-peercontextmap)
* [store](readonlycontext.md#protected-store)
* [type](readonlycontext.md#readonly-type)
* [Provider](readonlycontext.md#static-provider)
* [context](readonlycontext.md#static-context)
* [root](readonlycontext.md#static-root)

### Accessors

* [activeContext](readonlycontext.md#activecontext)
* [activeDescendants](readonlycontext.md#activedescendants)
* [areLocalTooltipsDisabled](readonlycontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](readonlycontext.md#contextmenuoptions)
* [isActive](readonlycontext.md#isactive)
* [isEdit](readonlycontext.md#isedit)
* [isInnermost](readonlycontext.md#isinnermost)
* [isInnermostLocalMenu](readonlycontext.md#isinnermostlocalmenu)
* [isPositionToggled](readonlycontext.md#ispositiontoggled)
* [optionMap](readonlycontext.md#optionmap)
* [pageOverlay](readonlycontext.md#pageoverlay)
* [peerContexts](readonlycontext.md#peercontexts)

### Methods

* [activate](readonlycontext.md#activate)
* [getMenuOptions](readonlycontext.md#readonly-getmenuoptions)
* [hidePageOverlay](readonlycontext.md#hidepageoverlay)
* [registerPeer](readonlycontext.md#registerpeer)
* [showError](readonlycontext.md#showerror)
* [showPageOverlay](readonlycontext.md#showpageoverlay)
* [spawn](readonlycontext.md#spawn)
* [toggleEdit](readonlycontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](readonlycontext.md#togglelocaltooltipsdisabled)
* [togglePosition](readonlycontext.md#toggleposition)
* [unregisterPeer](readonlycontext.md#unregisterpeer)
* [unregisterPeers](readonlycontext.md#unregisterpeers)
* [updateMenuOptions](readonlycontext.md#updatemenuoptions)
* [Consumer](readonlycontext.md#static-consumer)

## Constructors

###  constructor

\+ **new ReadOnlyContext**(`values?`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md), `parent?`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *[ReadOnlyContext](readonlycontext.md)*

*Inherited from [PageEditContext](pageeditcontext.md).[constructor](pageeditcontext.md#constructor)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |
`parent?` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *[ReadOnlyContext](readonlycontext.md)*

## Properties

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Inherited from [PageEditContext](pageeditcontext.md).[hasLocalMenu](pageeditcontext.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L58)*

___

### `Readonly` id

• **id**: *string* = "Root"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Inherited from [PageEditContext](pageeditcontext.md).[id](pageeditcontext.md#readonly-id)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L46)*

___

### `Readonly` name

• **name**: *string* = "Root"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Inherited from [PageEditContext](pageeditcontext.md).[name](pageeditcontext.md#readonly-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L48)*

___

### `Readonly` parent

• **parent**: *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[parent](../interfaces/pageeditcontextinterface.md#optional-readonly-parent)*

*Inherited from [PageEditContext](pageeditcontext.md).[parent](pageeditcontext.md#readonly-parent)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L52)*

___

### `Protected` peerContextMap

• **peerContextMap**: *Map‹string, [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | null›* = new Map()

*Inherited from [PageEditContext](pageeditcontext.md).[peerContextMap](pageeditcontext.md#protected-peercontextmap)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L73)*

___

### `Protected` store

• **store**: *[PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)* = defaultStore

*Inherited from [PageEditContext](pageeditcontext.md).[store](pageeditcontext.md#protected-store)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L56)*

___

### `Readonly` type

• **type**: *string | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[type](../interfaces/pageeditcontextinterface.md#optional-type)*

*Inherited from [PageEditContext](pageeditcontext.md).[type](pageeditcontext.md#readonly-type)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L54)*

___

### `Static` Provider

▪ **Provider**: *ProviderExoticComponent‹ProviderProps‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)››* = PageEditContext.context.Provider

*Inherited from [PageEditContext](pageeditcontext.md).[Provider](pageeditcontext.md#static-provider)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:121](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L121)*

___

### `Static` context

▪ **context**: *Context‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)›* = React.createContext<PageEditContextInterface>(PageEditContext.root)

*Inherited from [PageEditContext](pageeditcontext.md).[context](pageeditcontext.md#static-context)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:110](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L110)*

___

### `Static` root

▪ **root**: *[PageEditContext](pageeditcontext.md)‹›* = new PageEditContext()

*Inherited from [PageEditContext](pageeditcontext.md).[root](pageeditcontext.md#static-root)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L108)*

## Accessors

###  activeContext

• **get activeContext**(): *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Inherited from [PageEditContext](pageeditcontext.md).[activeContext](pageeditcontext.md#activecontext)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:149](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L149)*

**Returns:** *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  activeDescendants

• **get activeDescendants**(): *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

*Inherited from [PageEditContext](pageeditcontext.md).[activeDescendants](pageeditcontext.md#activedescendants)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:153](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L153)*

**Returns:** *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

___

###  areLocalTooltipsDisabled

• **get areLocalTooltipsDisabled**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[areLocalTooltipsDisabled](pageeditcontext.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:238](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L238)*

**Returns:** *boolean*

___

###  contextMenuOptions

• **get contextMenuOptions**(): *object[]*

*Inherited from [PageEditContext](pageeditcontext.md).[contextMenuOptions](pageeditcontext.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:191](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L191)*

**Returns:** *object[]*

___

###  isActive

• **get isActive**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isActive](pageeditcontext.md#isactive)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:139](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L139)*

**Returns:** *boolean*

___

###  isEdit

• **get isEdit**(): *boolean*

*Overrides [PageEditContext](pageeditcontext.md).[isEdit](pageeditcontext.md#isedit)*

*Defined in [packages/bodiless-core/src/asReadOnly.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/asReadOnly.tsx#L21)*

**Returns:** *boolean*

___

###  isInnermost

• **get isInnermost**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isInnermost](pageeditcontext.md#isinnermost)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:143](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L143)*

**Returns:** *boolean*

___

###  isInnermostLocalMenu

• **get isInnermostLocalMenu**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isInnermostLocalMenu](pageeditcontext.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:162](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L162)*

**Returns:** *boolean*

___

###  isPositionToggled

• **get isPositionToggled**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isPositionToggled](pageeditcontext.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:183](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L183)*

**Returns:** *boolean*

___

###  optionMap

• **get optionMap**(): *Map‹string, Map‹string, object››*

*Inherited from [PageEditContext](pageeditcontext.md).[optionMap](pageeditcontext.md#optionmap)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:195](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L195)*

**Returns:** *Map‹string, Map‹string, object››*

___

###  pageOverlay

• **get pageOverlay**(): *object*

*Inherited from [PageEditContext](pageeditcontext.md).[pageOverlay](pageeditcontext.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:199](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L199)*

**Returns:** *object*

* **data**: *[TOverlaySettings](../globals.md#toverlaysettings)*

* **timeoutId**: *number*

___

###  peerContexts

• **get peerContexts**(): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

*Inherited from [PageEditContext](pageeditcontext.md).[peerContexts](pageeditcontext.md#peercontexts)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L75)*

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

## Methods

###  activate

▸ **activate**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[activate](pageeditcontext.md#activate)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:129](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L129)*

**Returns:** *void*

___

### `Readonly` getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Inherited from [PageEditContext](pageeditcontext.md).[getMenuOptions](pageeditcontext.md#readonly-getmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L50)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[hidePageOverlay](pageeditcontext.md#hidepageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:222](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L222)*

**Returns:** *void*

___

###  registerPeer

▸ **registerPeer**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[registerPeer](pageeditcontext.md#registerpeer)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L86)*

Registers a context as a peer.  Peer contexts contribute their menu options whenever the
context to which they are registered is activated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | The peer context to register.  |

**Returns:** *void*

___

###  showError

▸ **showError**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[showError](pageeditcontext.md#showerror)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:228](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  showPageOverlay

▸ **showPageOverlay**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[showPageOverlay](pageeditcontext.md#showpageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:203](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  spawn

▸ **spawn**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Inherited from [PageEditContext](pageeditcontext.md).[spawn](pageeditcontext.md#spawn)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:124](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[toggleEdit](pageeditcontext.md#toggleedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:179](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[toggleLocalTooltipsDisabled](pageeditcontext.md#togglelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:242](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L242)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[togglePosition](pageeditcontext.md#toggleposition)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:187](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  unregisterPeer

▸ **unregisterPeer**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[unregisterPeer](pageeditcontext.md#unregisterpeer)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L96)*

Marks a peer context as "unregistered".  An unregistered peer will not contribute
its menu options.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | The peer context to unregister.  |

**Returns:** *void*

___

###  unregisterPeers

▸ **unregisterPeers**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[unregisterPeers](pageeditcontext.md#unregisterpeers)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L104)*

**Returns:** *void*

___

###  updateMenuOptions

▸ **updateMenuOptions**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[updateMenuOptions](pageeditcontext.md#updatemenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:133](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L133)*

**Returns:** *void*

___

### `Static` Consumer

▸ **Consumer**(`__namedParameters`: object): *Element‹›*

*Inherited from [PageEditContext](pageeditcontext.md).[Consumer](pageeditcontext.md#static-consumer)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:115](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-core/src/PageEditContext/index.tsx#L115)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | function &#124; function & string &#124; function & number &#124; function & false &#124; function & true &#124; function & ReactElement‹any, string &#124; function &#124; object› &#124; function & ReactNodeArray‹› &#124; function & ReactPortal‹› |

**Returns:** *Element‹›*
