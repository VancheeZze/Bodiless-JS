[@bodiless/fclasses](../README.md) › [Globals](../globals.md) › [Transformer](transformer.md)

# Class: Transformer ‹**P, Q, X, S, SS, S**›

## Type parameters

▪ **P**

▪ **Q**

▪ **X**

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

* Component‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››

  ↳ **Transformer**

## Index

### Constructors

* [constructor](transformer.md#constructor)

### Properties

* [context](transformer.md#context)
* [fixedProps](transformer.md#fixedprops)
* [props](transformer.md#readonly-props)
* [refs](transformer.md#refs)
* [state](transformer.md#state)
* [contextType](transformer.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](transformer.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](transformer.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](transformer.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](transformer.md#optional-componentdidcatch)
* [componentDidMount](transformer.md#optional-componentdidmount)
* [componentDidUpdate](transformer.md#optional-componentdidupdate)
* [componentWillMount](transformer.md#optional-componentwillmount)
* [componentWillReceiveProps](transformer.md#optional-componentwillreceiveprops)
* [componentWillUnmount](transformer.md#optional-componentwillunmount)
* [componentWillUpdate](transformer.md#optional-componentwillupdate)
* [forceUpdate](transformer.md#forceupdate)
* [getSnapshotBeforeUpdate](transformer.md#optional-getsnapshotbeforeupdate)
* [render](transformer.md#render)
* [setState](transformer.md#setstate)
* [shouldComponentUpdate](transformer.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new Transformer**(`props`: [TransformerProps](../globals.md#transformerprops)‹P, Q, X›): *[Transformer](transformer.md)*

*Overrides void*

*Defined in [packages/fclasses/src/Design.tsx:269](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/fclasses/src/Design.tsx#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [TransformerProps](../globals.md#transformerprops)‹P, Q, X› |

**Returns:** *[Transformer](transformer.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [Transformer](transformer.md).[context](transformer.md#context)*

Defined in node_modules/@types/react/index.d.ts:476

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

___

###  fixedProps

• **fixedProps**: *Object*

*Defined in [packages/fclasses/src/Design.tsx:269](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/fclasses/src/Design.tsx#L269)*

___

### `Readonly` props

• **props**: *Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› & Readonly‹object›*

*Inherited from [Transformer](transformer.md).[props](transformer.md#readonly-props)*

Defined in node_modules/@types/react/index.d.ts:501

___

###  refs

• **refs**: *object*

*Inherited from [Transformer](transformer.md).[refs](transformer.md#refs)*

Defined in node_modules/@types/react/index.d.ts:507

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹S›*

*Inherited from [Transformer](transformer.md).[state](transformer.md#state)*

Defined in node_modules/@types/react/index.d.ts:502

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [Transformer](transformer.md).[contextType](transformer.md#static-optional-contexttype)*

Defined in node_modules/@types/react/index.d.ts:458

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [Transformer](transformer.md).[UNSAFE_componentWillMount](transformer.md#optional-unsafe_componentwillmount)*

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `nextContext`: any): *void*

*Inherited from [Transformer](transformer.md).[UNSAFE_componentWillReceiveProps](transformer.md#optional-unsafe_componentwillreceiveprops)*

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
`nextProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [Transformer](transformer.md).[UNSAFE_componentWillUpdate](transformer.md#optional-unsafe_componentwillupdate)*

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
`nextProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [Transformer](transformer.md).[componentDidCatch](transformer.md#optional-componentdidcatch)*

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

*Inherited from [Transformer](transformer.md).[componentDidMount](transformer.md#optional-componentdidmount)*

Defined in node_modules/@types/react/index.d.ts:620

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `prevState`: Readonly‹S›, `snapshot?`: SS): *void*

*Inherited from [Transformer](transformer.md).[componentDidUpdate](transformer.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:683

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`prevState` | Readonly‹S› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [Transformer](transformer.md).[componentWillMount](transformer.md#optional-componentwillmount)*

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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `nextContext`: any): *void*

*Inherited from [Transformer](transformer.md).[componentWillReceiveProps](transformer.md#optional-componentwillreceiveprops)*

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
`nextProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [Transformer](transformer.md).[componentWillUnmount](transformer.md#optional-componentwillunmount)*

Defined in node_modules/@types/react/index.d.ts:636

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [Transformer](transformer.md).[componentWillUpdate](transformer.md#optional-componentwillupdate)*

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
`nextProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [Transformer](transformer.md).[forceUpdate](transformer.md#forceupdate)*

Defined in node_modules/@types/react/index.d.ts:493

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `prevState`: Readonly‹S›): *SS | null*

*Inherited from [Transformer](transformer.md).[getSnapshotBeforeUpdate](transformer.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:677

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`prevState` | Readonly‹S› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

*Defined in [packages/fclasses/src/Design.tsx:277](https://github.com/VancheeZze/Bodiless-JS/blob/c378014d/packages/fclasses/src/Design.tsx#L277)*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from [Transformer](transformer.md).[setState](transformer.md#setstate)*

Defined in node_modules/@types/react/index.d.ts:488

**Type parameters:**

▪ **K**: *keyof S*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X››, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [Transformer](transformer.md).[shouldComponentUpdate](transformer.md#optional-shouldcomponentupdate)*

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
`nextProps` | Readonly‹[TransformerProps](../globals.md#transformerprops)‹P, Q, X›› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
