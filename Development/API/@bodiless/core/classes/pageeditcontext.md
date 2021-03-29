[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditContext](pageeditcontext.md)

# Class: PageEditContext

A Page Edit Context represents a particular state of the page editor, usually
defined by what element of the page is "active" or "focused". Currently, the
only bit of state tracked in the context are context menu options (along with
whether a context is "active", which can be used to highlight the component
which registered the context.
- Contexts are nested (so that a parent context is "active" when any of
its child contexts are active).
- Contexts are established using the React context API - and each PageEditContext
instance is a "value".
- The PageEditContext instance also contains a reference to the page edit store,
which tracks editor UI state (eg the currently active context).
- The react context container (created by React.createContext) of which the
PageEditContext instance is a value is available as a static property of the class via:
   - PageEditContext.context (the context object, suitable for use as a component contextType).
   - PageEditContext.Consumer (an observable version of PageEditContext.context.Consumer).
   - PageEditContext.Provider (equivalent to PageEditContext.context.Provider).
Singleton store.

## Hierarchy

* **PageEditContext**

  ↳ [ReadOnlyContext](readonlycontext.md)

## Implements

* [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)

## Index

### Constructors

* [constructor](pageeditcontext.md#constructor)

### Properties

* [hasLocalMenu](pageeditcontext.md#haslocalmenu)
* [id](pageeditcontext.md#readonly-id)
* [name](pageeditcontext.md#readonly-name)
* [parent](pageeditcontext.md#readonly-parent)
* [peerContextMap](pageeditcontext.md#protected-peercontextmap)
* [store](pageeditcontext.md#protected-store)
* [type](pageeditcontext.md#readonly-type)
* [Provider](pageeditcontext.md#static-provider)
* [context](pageeditcontext.md#static-context)
* [root](pageeditcontext.md#static-root)

### Accessors

* [activeContext](pageeditcontext.md#activecontext)
* [activeDescendants](pageeditcontext.md#activedescendants)
* [areLocalTooltipsDisabled](pageeditcontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditcontext.md#contextmenuoptions)
* [isActive](pageeditcontext.md#isactive)
* [isEdit](pageeditcontext.md#isedit)
* [isInnermost](pageeditcontext.md#isinnermost)
* [isInnermostLocalMenu](pageeditcontext.md#isinnermostlocalmenu)
* [isPositionToggled](pageeditcontext.md#ispositiontoggled)
* [optionMap](pageeditcontext.md#optionmap)
* [pageOverlay](pageeditcontext.md#pageoverlay)
* [peerContexts](pageeditcontext.md#peercontexts)

### Methods

* [activate](pageeditcontext.md#activate)
* [getMenuOptions](pageeditcontext.md#readonly-getmenuoptions)
* [hidePageOverlay](pageeditcontext.md#hidepageoverlay)
* [registerPeer](pageeditcontext.md#registerpeer)
* [showError](pageeditcontext.md#showerror)
* [showPageOverlay](pageeditcontext.md#showpageoverlay)
* [spawn](pageeditcontext.md#spawn)
* [toggleEdit](pageeditcontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditcontext.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditcontext.md#toggleposition)
* [unregisterPeer](pageeditcontext.md#unregisterpeer)
* [unregisterPeers](pageeditcontext.md#unregisterpeers)
* [updateMenuOptions](pageeditcontext.md#updatemenuoptions)
* [Consumer](pageeditcontext.md#static-consumer)

## Constructors

###  constructor

\+ **new PageEditContext**(`values?`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md), `parent?`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *[PageEditContext](pageeditcontext.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |
`parent?` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *[PageEditContext](pageeditcontext.md)*

## Properties

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L58)*

___

### `Readonly` id

• **id**: *string* = "Root"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L46)*

___

### `Readonly` name

• **name**: *string* = "Root"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L48)*

___

### `Readonly` parent

• **parent**: *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[parent](../interfaces/pageeditcontextinterface.md#optional-readonly-parent)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L52)*

___

### `Protected` peerContextMap

• **peerContextMap**: *Map‹string, [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | null›* = new Map()

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L73)*

___

### `Protected` store

• **store**: *[PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)* = defaultStore

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L56)*

___

### `Readonly` type

• **type**: *string | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[type](../interfaces/pageeditcontextinterface.md#optional-type)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L54)*

___

### `Static` Provider

▪ **Provider**: *ProviderExoticComponent‹ProviderProps‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)››* = PageEditContext.context.Provider

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:121](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L121)*

___

### `Static` context

▪ **context**: *Context‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)›* = React.createContext<PageEditContextInterface>(PageEditContext.root)

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:110](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L110)*

___

### `Static` root

▪ **root**: *[PageEditContext](pageeditcontext.md)‹›* = new PageEditContext()

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L108)*

## Accessors

###  activeContext

• **get activeContext**(): *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:149](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L149)*

**Returns:** *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  activeDescendants

• **get activeDescendants**(): *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:153](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L153)*

**Returns:** *undefined | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

___

###  areLocalTooltipsDisabled

• **get areLocalTooltipsDisabled**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:238](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L238)*

**Returns:** *boolean*

___

###  contextMenuOptions

• **get contextMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:191](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L191)*

**Returns:** *object[]*

___

###  isActive

• **get isActive**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:139](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L139)*

**Returns:** *boolean*

___

###  isEdit

• **get isEdit**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:175](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L175)*

**Returns:** *boolean*

___

###  isInnermost

• **get isInnermost**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:143](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L143)*

**Returns:** *boolean*

___

###  isInnermostLocalMenu

• **get isInnermostLocalMenu**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:162](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L162)*

**Returns:** *boolean*

___

###  isPositionToggled

• **get isPositionToggled**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:183](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L183)*

**Returns:** *boolean*

___

###  optionMap

• **get optionMap**(): *Map‹string, Map‹string, object››*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:195](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L195)*

**Returns:** *Map‹string, Map‹string, object››*

___

###  pageOverlay

• **get pageOverlay**(): *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:199](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L199)*

**Returns:** *object*

* **data**: *[TOverlaySettings](../globals.md#toverlaysettings)*

* **timeoutId**: *number*

___

###  peerContexts

• **get peerContexts**(): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L75)*

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

## Methods

###  activate

▸ **activate**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:129](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L129)*

**Returns:** *void*

___

### `Readonly` getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L50)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:222](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L222)*

**Returns:** *void*

___

###  registerPeer

▸ **registerPeer**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L86)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:228](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  showPageOverlay

▸ **showPageOverlay**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:203](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  spawn

▸ **spawn**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:124](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:179](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:242](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L242)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:187](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  unregisterPeer

▸ **unregisterPeer**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L96)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L104)*

**Returns:** *void*

___

###  updateMenuOptions

▸ **updateMenuOptions**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:133](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L133)*

**Returns:** *void*

___

### `Static` Consumer

▸ **Consumer**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:115](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-core/src/PageEditContext/index.tsx#L115)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | function &#124; function & string &#124; function & number &#124; function & false &#124; function & true &#124; function & ReactElement‹any, string &#124; function &#124; object› &#124; function & ReactNodeArray‹› &#124; function & ReactPortal‹› |

**Returns:** *Element‹›*
