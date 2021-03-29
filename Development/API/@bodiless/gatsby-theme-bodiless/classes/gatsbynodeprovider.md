[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [GatsbyNodeProvider](gatsbynodeprovider.md)

# Class: GatsbyNodeProvider ‹**SS**›

## Type parameters

▪ **SS**

## Hierarchy

* Component‹[Props](../globals.md#props), [State](../globals.md#state)›

  ↳ **GatsbyNodeProvider**

## Implements

* object

## Index

### Constructors

* [constructor](gatsbynodeprovider.md#constructor)

### Properties

* [context](gatsbynodeprovider.md#context)
* [props](gatsbynodeprovider.md#readonly-props)
* [refs](gatsbynodeprovider.md#refs)
* [state](gatsbynodeprovider.md#readonly-state)
* [contextType](gatsbynodeprovider.md#static-optional-contexttype)

### Accessors

* [slug](gatsbynodeprovider.md#slug)

### Methods

* [UNSAFE_componentWillMount](gatsbynodeprovider.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](gatsbynodeprovider.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](gatsbynodeprovider.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](gatsbynodeprovider.md#optional-componentdidcatch)
* [componentDidMount](gatsbynodeprovider.md#optional-componentdidmount)
* [componentDidUpdate](gatsbynodeprovider.md#optional-componentdidupdate)
* [componentWillMount](gatsbynodeprovider.md#optional-componentwillmount)
* [componentWillReceiveProps](gatsbynodeprovider.md#optional-componentwillreceiveprops)
* [componentWillUnmount](gatsbynodeprovider.md#optional-componentwillunmount)
* [componentWillUpdate](gatsbynodeprovider.md#optional-componentwillupdate)
* [forceUpdate](gatsbynodeprovider.md#forceupdate)
* [getRootNode](gatsbynodeprovider.md#getrootnode)
* [getSnapshotBeforeUpdate](gatsbynodeprovider.md#optional-getsnapshotbeforeupdate)
* [render](gatsbynodeprovider.md#render)
* [setState](gatsbynodeprovider.md#setstate)
* [shouldComponentUpdate](gatsbynodeprovider.md#shouldcomponentupdate)
* [getDerivedStateFromProps](gatsbynodeprovider.md#static-getderivedstatefromprops)

## Constructors

###  constructor

\+ **new GatsbyNodeProvider**(`props`: [Props](../globals.md#props)): *[GatsbyNodeProvider](gatsbynodeprovider.md)*

*Overrides void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [Props](../globals.md#props) |

**Returns:** *[GatsbyNodeProvider](gatsbynodeprovider.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[context](gatsbynodeprovider.md#context)*

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

• **props**: *Readonly‹[Props](../globals.md#props)› & Readonly‹object›*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[props](gatsbynodeprovider.md#readonly-props)*

Defined in node_modules/@types/react/index.d.ts:501

___

###  refs

• **refs**: *object*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[refs](gatsbynodeprovider.md#refs)*

Defined in node_modules/@types/react/index.d.ts:507

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

### `Readonly` state

• **state**: *[State](../globals.md#state)*

*Overrides void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L41)*

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[contextType](gatsbynodeprovider.md#static-optional-contexttype)*

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

## Accessors

###  slug

• **get slug**(): *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L57)*

**Returns:** *string*

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[UNSAFE_componentWillMount](gatsbynodeprovider.md#optional-unsafe_componentwillmount)*

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[Props](../globals.md#props)›, `nextContext`: any): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[UNSAFE_componentWillReceiveProps](gatsbynodeprovider.md#optional-unsafe_componentwillreceiveprops)*

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
`nextProps` | Readonly‹[Props](../globals.md#props)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[Props](../globals.md#props)›, `nextState`: Readonly‹[State](../globals.md#state)›, `nextContext`: any): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[UNSAFE_componentWillUpdate](gatsbynodeprovider.md#optional-unsafe_componentwillupdate)*

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
`nextProps` | Readonly‹[Props](../globals.md#props)› |
`nextState` | Readonly‹[State](../globals.md#state)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentDidCatch](gatsbynodeprovider.md#optional-componentdidcatch)*

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

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentDidMount](gatsbynodeprovider.md#optional-componentdidmount)*

Defined in node_modules/@types/react/index.d.ts:620

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[Props](../globals.md#props)›, `prevState`: Readonly‹[State](../globals.md#state)›, `snapshot?`: SS): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentDidUpdate](gatsbynodeprovider.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:683

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[Props](../globals.md#props)› |
`prevState` | Readonly‹[State](../globals.md#state)› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentWillMount](gatsbynodeprovider.md#optional-componentwillmount)*

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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[Props](../globals.md#props)›, `nextContext`: any): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentWillReceiveProps](gatsbynodeprovider.md#optional-componentwillreceiveprops)*

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
`nextProps` | Readonly‹[Props](../globals.md#props)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentWillUnmount](gatsbynodeprovider.md#optional-componentwillunmount)*

Defined in node_modules/@types/react/index.d.ts:636

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[Props](../globals.md#props)›, `nextState`: Readonly‹[State](../globals.md#state)›, `nextContext`: any): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[componentWillUpdate](gatsbynodeprovider.md#optional-componentwillupdate)*

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
`nextProps` | Readonly‹[Props](../globals.md#props)› |
`nextState` | Readonly‹[State](../globals.md#state)› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[forceUpdate](gatsbynodeprovider.md#forceupdate)*

Defined in node_modules/@types/react/index.d.ts:493

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  getRootNode

▸ **getRootNode**(`collection`: string): *DefaultContentNode‹object›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | "Page" |

**Returns:** *DefaultContentNode‹object›*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[Props](../globals.md#props)›, `prevState`: Readonly‹[State](../globals.md#state)›): *SS | null*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[getSnapshotBeforeUpdate](gatsbynodeprovider.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:677

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[Props](../globals.md#props)› |
`prevState` | Readonly‹[State](../globals.md#state)› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L79)*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from [GatsbyNodeProvider](gatsbynodeprovider.md).[setState](gatsbynodeprovider.md#setstate)*

Defined in node_modules/@types/react/index.d.ts:488

**Type parameters:**

▪ **K**: *keyof State*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  shouldComponentUpdate

▸ **shouldComponentUpdate**(): *boolean*

*Overrides void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L53)*

**Returns:** *boolean*

___

### `Static` getDerivedStateFromProps

▸ **getDerivedStateFromProps**(`props`: [Props](../globals.md#props), `state`: [State](../globals.md#state)): *null*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [Props](../globals.md#props) |
`state` | [State](../globals.md#state) |

**Returns:** *null*
