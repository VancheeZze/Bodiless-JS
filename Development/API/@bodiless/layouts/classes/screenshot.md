[@bodiless/layouts](../README.md) › [Globals](../globals.md) › [ScreenShot](screenshot.md)

# Class: ScreenShot ‹**S, SS, S**›

ScreenShotClass

ScreenShotClass default state has renderMe as true, the class is invoked with a component and
node.
ScreenShotClass checks to see the status of renderMe (it will be true at first since that is
default).
RenderCanvas() will be initiated and render the component onto the DOM.
ComponentDidMount() will execute once the ScreenShotClass render completes.
ComponentDidMount() will call getComponentThumbnail() which will save a picture of our component.
ComponentDidMount() will then set the renderMe state to false.
ScreenShotClass will rerender due to the change in state.
ScreenShotClass will return null and the image will disappear from the DOM.

## Type parameters

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

* Component‹any›

  ↳ **ScreenShot**

## Index

### Constructors

* [constructor](screenshot.md#constructor)

### Properties

* [context](screenshot.md#context)
* [props](screenshot.md#readonly-props)
* [refs](screenshot.md#refs)
* [state](screenshot.md#state)
* [contextType](screenshot.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](screenshot.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](screenshot.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](screenshot.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](screenshot.md#optional-componentdidcatch)
* [componentDidMount](screenshot.md#componentdidmount)
* [componentDidUpdate](screenshot.md#optional-componentdidupdate)
* [componentWillMount](screenshot.md#optional-componentwillmount)
* [componentWillReceiveProps](screenshot.md#optional-componentwillreceiveprops)
* [componentWillUnmount](screenshot.md#optional-componentwillunmount)
* [componentWillUpdate](screenshot.md#optional-componentwillupdate)
* [forceUpdate](screenshot.md#forceupdate)
* [getSnapshotBeforeUpdate](screenshot.md#optional-getsnapshotbeforeupdate)
* [render](screenshot.md#render)
* [setState](screenshot.md#setstate)
* [shouldComponentUpdate](screenshot.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new ScreenShot**(`props`: any): *[ScreenShot](screenshot.md)*

*Overrides void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *[ScreenShot](screenshot.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [ScreenShot](screenshot.md).[context](screenshot.md#context)*

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

### `Readonly` props

• **props**: *Readonly‹any› & Readonly‹object›*

*Inherited from [ScreenShot](screenshot.md).[props](screenshot.md#readonly-props)*

Defined in node_modules/@types/react/index.d.ts:501

___

###  refs

• **refs**: *object*

*Inherited from [ScreenShot](screenshot.md).[refs](screenshot.md#refs)*

Defined in node_modules/@types/react/index.d.ts:507

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹S›*

*Inherited from [ScreenShot](screenshot.md).[state](screenshot.md#state)*

Defined in node_modules/@types/react/index.d.ts:502

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [ScreenShot](screenshot.md).[contextType](screenshot.md#static-optional-contexttype)*

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

*Inherited from [ScreenShot](screenshot.md).[UNSAFE_componentWillMount](screenshot.md#optional-unsafe_componentwillmount)*

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹any›, `nextContext`: any): *void*

*Inherited from [ScreenShot](screenshot.md).[UNSAFE_componentWillReceiveProps](screenshot.md#optional-unsafe_componentwillreceiveprops)*

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
`nextProps` | Readonly‹any› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [ScreenShot](screenshot.md).[UNSAFE_componentWillUpdate](screenshot.md#optional-unsafe_componentwillupdate)*

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
`nextProps` | Readonly‹any› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [ScreenShot](screenshot.md).[componentDidCatch](screenshot.md#optional-componentdidcatch)*

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

###  componentDidMount

▸ **componentDidMount**(): *void*

*Overrides void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:111](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L111)*

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹any›, `prevState`: Readonly‹S›, `snapshot?`: SS): *void*

*Inherited from [ScreenShot](screenshot.md).[componentDidUpdate](screenshot.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:683

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹any› |
`prevState` | Readonly‹S› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [ScreenShot](screenshot.md).[componentWillMount](screenshot.md#optional-componentwillmount)*

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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹any›, `nextContext`: any): *void*

*Inherited from [ScreenShot](screenshot.md).[componentWillReceiveProps](screenshot.md#optional-componentwillreceiveprops)*

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
`nextProps` | Readonly‹any› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [ScreenShot](screenshot.md).[componentWillUnmount](screenshot.md#optional-componentwillunmount)*

Defined in node_modules/@types/react/index.d.ts:636

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from [ScreenShot](screenshot.md).[componentWillUpdate](screenshot.md#optional-componentwillupdate)*

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
`nextProps` | Readonly‹any› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [ScreenShot](screenshot.md).[forceUpdate](screenshot.md#forceupdate)*

Defined in node_modules/@types/react/index.d.ts:493

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹any›, `prevState`: Readonly‹S›): *SS | null*

*Inherited from [ScreenShot](screenshot.md).[getSnapshotBeforeUpdate](screenshot.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:677

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹any› |
`prevState` | Readonly‹S› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *null | Element‹›*

*Overrides void*

*Defined in [packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx:120](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-layouts/src/ComponentSelector/ScreenShot.tsx#L120)*

**Returns:** *null | Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from [ScreenShot](screenshot.md).[setState](screenshot.md#setstate)*

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

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from [ScreenShot](screenshot.md).[shouldComponentUpdate](screenshot.md#optional-shouldcomponentupdate)*

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
`nextProps` | Readonly‹any› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
