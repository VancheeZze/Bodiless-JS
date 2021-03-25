[@bodiless/components-ui](README.md) › [Globals](globals.md)

# @bodiless/components-ui

## Index

### Type aliases

* [HOC](globals.md#hoc)

### Variables

* [Image](globals.md#const-image)
* [Input](globals.md#const-input)
* [MasterWrapper](globals.md#const-masterwrapper)
* [Wrapper](globals.md#const-wrapper)

### Functions

* [DragRejected](globals.md#const-dragrejected)
* [UploadArea](globals.md#const-uploadarea)
* [UploadFinished](globals.md#const-uploadfinished)
* [UploadStatus](globals.md#const-uploadstatus)
* [UploadTimeout](globals.md#const-uploadtimeout)
* [Uploading](globals.md#const-uploading)
* [asBodilessImage](globals.md#const-asbodilessimage)
* [withForwardedRef](globals.md#const-withforwardedref)
* [withForwardedRefEnd](globals.md#const-withforwardedrefend)
* [withForwardedRefStart](globals.md#const-withforwardedrefstart)
* [withUI](globals.md#const-withui)

### Object literals

* [imagePickerUI](globals.md#const-imagepickerui)

## Type aliases

###  HOC

Ƭ **HOC**: *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L46)*

#### Type declaration:

▸ (`Component`: ComponentType‹any›): *ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

## Variables

### `Const` Image

• **Image**: *ComponentClass‹HTMLProps‹HTMLImageElement› & object & object, any› & object | FunctionComponent‹HTMLProps‹HTMLImageElement› & object & object› & object* = asBodilessImage()(Img)

*Defined in [packages/bodiless-components-ui/src/Image.tsx:105](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L105)*

___

### `Const` Input

• **Input**: *any* = withForwardedRef()('input')

*Defined in [packages/bodiless-components-ui/src/Image.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L67)*

___

### `Const` MasterWrapper

• **MasterWrapper**: *FunctionComponent‹HTMLProps‹HTMLElement› & object & object›* = addClasses('bl-container')(Section)

*Defined in [packages/bodiless-components-ui/src/Image.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L56)*

___

### `Const` Wrapper

• **Wrapper**: *any* = flowRight(
  withForwardedRef(
    addClasses(
      'bl-min-h-grid-16 bl-border bl-border-dashed bl-border-gray-800 bl-bg-gray-100 bl-p-grid-3 bl-mb-grid-3 bl-text-black',
    ),
    stylable,
  ),
)('div')

*Defined in [packages/bodiless-components-ui/src/Image.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L58)*

## Functions

### `Const` DragRejected

▸ **DragRejected**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L75)*

**Returns:** *Element‹›*

___

### `Const` UploadArea

▸ **UploadArea**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L69)*

**Returns:** *Element‹›*

___

### `Const` UploadFinished

▸ **UploadFinished**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:82](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L82)*

**Returns:** *Element‹›*

___

### `Const` UploadStatus

▸ **UploadStatus**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:83](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L83)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`statusText` | string |

**Returns:** *Element‹›*

___

### `Const` UploadTimeout

▸ **UploadTimeout**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L78)*

**Returns:** *Element‹›*

___

### `Const` Uploading

▸ **Uploading**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:81](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L81)*

**Returns:** *Element‹›*

___

### `Const` asBodilessImage

▸ **asBodilessImage**(`nodeKey`: undefined | string | object, `defaultData`: undefined | object, `useOverrides`: undefined | function): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:99](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKey` | undefined &#124; string &#124; object |
`defaultData` | undefined &#124; object |
`useOverrides` | undefined &#124; function |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withForwardedRef

▸ **withForwardedRef**(...`hocs`: [HOC](globals.md#hoc)[]): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`...hocs` | [HOC](globals.md#hoc)[] |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withForwardedRefEnd

▸ **withForwardedRefEnd**(`Component`: ComponentType‹any›): *WithForwardedRefEnd*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *WithForwardedRefEnd*

___

### `Const` withForwardedRefStart

▸ **withForwardedRefStart**(`Component`: ComponentType‹any›): *ForwardRefExoticComponent‹RefAttributes‹unknown››*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *ForwardRefExoticComponent‹RefAttributes‹unknown››*

___

### `Const` withUI

▸ **withUI**(`ui`: TImagePickerUI): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:97](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | TImagePickerUI |

**Returns:** *function*

▸ (`Component`: ComponentType‹any›): *ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

## Object literals

### `Const` imagePickerUI

### ▪ **imagePickerUI**: *object*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:85](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L85)*

###  DragRejected

• **DragRejected**: *[DragRejected](globals.md#const-dragrejected)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L91)*

###  Input

• **Input**: *any*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L88)*

###  MasterWrapper

• **MasterWrapper**: *FunctionComponent‹HTMLProps‹HTMLElement› & object & object›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:86](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L86)*

###  UploadArea

• **UploadArea**: *[UploadArea](globals.md#const-uploadarea)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:89](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L89)*

###  UploadFinished

• **UploadFinished**: *[UploadFinished](globals.md#const-uploadfinished)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:93](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L93)*

###  UploadStatus

• **UploadStatus**: *[UploadStatus](globals.md#const-uploadstatus)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:94](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L94)*

###  UploadTimeout

• **UploadTimeout**: *[UploadTimeout](globals.md#const-uploadtimeout)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:92](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L92)*

###  Uploading

• **Uploading**: *[Uploading](globals.md#const-uploading)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:90](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L90)*

###  Wrapper

• **Wrapper**: *any*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/c09d22d9/packages/bodiless-components-ui/src/Image.tsx#L87)*
