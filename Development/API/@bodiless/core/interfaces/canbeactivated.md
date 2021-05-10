[@bodiless/core](../README.md) › [Globals](../globals.md) › [CanBeActivated](canbeactivated.md)

# Interface: CanBeActivated

## Hierarchy

* **CanBeActivated**

  ↳ [PageEditContextInterface](pageeditcontextinterface.md)

## Index

### Properties

* [activate](canbeactivated.md#activate)
* [activeContext](canbeactivated.md#optional-activecontext)
* [activeDescendants](canbeactivated.md#optional-activedescendants)
* [hasLocalMenu](canbeactivated.md#haslocalmenu)
* [isActive](canbeactivated.md#isactive)
* [isInnermost](canbeactivated.md#isinnermost)
* [isInnermostLocalMenu](canbeactivated.md#isinnermostlocalmenu)

## Properties

###  activate

• **activate**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:60](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L60)*

#### Type declaration:

▸ (): *void*

___

### `Optional` activeContext

• **activeContext**? : *[PageEditContextInterface](pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:64](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L64)*

The currently active context, or undefined if no context is active.

___

### `Optional` activeDescendants

• **activeDescendants**? : *[PageEditContextInterface](pageeditcontextinterface.md)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:69](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L69)*

If the context is active, an array of its descendants, starting with its first child
and ending with the innermost active context.  If the context is not active, undefined.

___

###  hasLocalMenu

• **hasLocalMenu**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:58](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L58)*

___

###  isActive

• **isActive**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:56](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L56)*

___

###  isInnermost

• **isInnermost**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:57](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L57)*

___

###  isInnermostLocalMenu

• **isInnermostLocalMenu**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:59](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-core/src/PageEditContext/types.ts#L59)*
