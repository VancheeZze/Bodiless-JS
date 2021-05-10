[@bodiless/organisms](../README.md) › [Globals](../globals.md) › [FilterBase](filterbase.md)

# Class: FilterBase ‹**S, SS**›

## Type parameters

▪ **S**

▪ **SS**

## Hierarchy

* PureComponent‹[FilterBaseProps](../globals.md#filterbaseprops)›

  ↳ **FilterBase**

## Index

### Constructors

* [constructor](filterbase.md#constructor)

### Properties

* [Filter](filterbase.md#filter)
* [RestProps](filterbase.md#restprops)

### Methods

* [UNSAFE_componentWillMount](filterbase.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](filterbase.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](filterbase.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](filterbase.md#optional-componentdidcatch)
* [componentDidMount](filterbase.md#optional-componentdidmount)
* [componentDidUpdate](filterbase.md#optional-componentdidupdate)
* [componentWillMount](filterbase.md#optional-componentwillmount)
* [componentWillReceiveProps](filterbase.md#optional-componentwillreceiveprops)
* [componentWillUnmount](filterbase.md#optional-componentwillunmount)
* [componentWillUpdate](filterbase.md#optional-componentwillupdate)
* [getSnapshotBeforeUpdate](filterbase.md#optional-getsnapshotbeforeupdate)
* [render](filterbase.md#render)
* [shouldComponentUpdate](filterbase.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new FilterBase**(`props`: [FilterBaseProps](../globals.md#filterbaseprops)): *[FilterBase](filterbase.md)*

*Defined in [packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx:200](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [FilterBaseProps](../globals.md#filterbaseprops) |

**Returns:** *[FilterBase](filterbase.md)*

## Properties

###  Filter

• **Filter**: *ComponentType‹HTMLProps‹HTMLHeadingElement››* = Div

*Defined in [packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx:198](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx#L198)*

___

###  RestProps

• **RestProps**: *object*

*Defined in [packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx:200](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx#L200)*

#### Type declaration:

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [FilterBase](filterbase.md).[UNSAFE_componentWillMount](filterbase.md#optional-unsafe_componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:712

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `nextContext`: any): *void*

*Inherited from [FilterBase](filterbase.md).[UNSAFE_componentWillReceiveProps](filterbase.md#optional-unsafe_componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:744

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [FilterBase](filterbase.md).[UNSAFE_componentWillUpdate](filterbase.md#optional-unsafe_componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:772

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [FilterBase](filterbase.md).[componentDidCatch](filterbase.md#optional-componentdidcatch)*

Defined in node_modules/@types/react/index.d.ts:641

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [FilterBase](filterbase.md).[componentDidMount](filterbase.md#optional-componentdidmount)*

Defined in node_modules/@types/react/index.d.ts:620

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `prevState`: Readonly‹S›, `snapshot?`: SS): *void*

*Inherited from [FilterBase](filterbase.md).[componentDidUpdate](filterbase.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:683

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`prevState` | Readonly‹S› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [FilterBase](filterbase.md).[componentWillMount](filterbase.md#optional-componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:698

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `nextContext`: any): *void*

*Inherited from [FilterBase](filterbase.md).[componentWillReceiveProps](filterbase.md#optional-componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:727

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [FilterBase](filterbase.md).[componentWillUnmount](filterbase.md#optional-componentwillunmount)*

Defined in node_modules/@types/react/index.d.ts:636

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [FilterBase](filterbase.md).[componentWillUpdate](filterbase.md#optional-componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:757

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `prevState`: Readonly‹S›): *SS | null*

*Inherited from [FilterBase](filterbase.md).[getSnapshotBeforeUpdate](filterbase.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:677

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`prevState` | Readonly‹S› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx:216](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/bodiless-organisms/src/components/FilterByGroup/Filter.tsx#L216)*

**Returns:** *Element‹›*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [FilterBase](filterbase.md).[shouldComponentUpdate](filterbase.md#optional-shouldcomponentupdate)*

Defined in node_modules/@types/react/index.d.ts:631

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[FilterBaseProps](../globals.md#filterbaseprops)› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
