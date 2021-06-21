[@bodiless/components-ui](README.md) › [Globals](globals.md)

# @bodiless/components-ui

## Index

### Type aliases

* [UI](globals.md#ui)

### Variables

* [Image](globals.md#const-image)
* [Input](globals.md#const-input)
* [MasterWrapper](globals.md#const-masterwrapper)
* [UPLOAD_STATUS_MAX_FILENAME_LENGTH](globals.md#const-upload_status_max_filename_length)
* [Wrapper](globals.md#const-wrapper)

### Functions

* [DragRejected](globals.md#const-dragrejected)
* [UploadArea](globals.md#const-uploadarea)
* [UploadFinished](globals.md#const-uploadfinished)
* [UploadStatus](globals.md#const-uploadstatus)
* [UploadTimeout](globals.md#const-uploadtimeout)
* [Uploading](globals.md#const-uploading)
* [asBodilessImage](globals.md#const-asbodilessimage)
* [asBodilessLink](globals.md#const-asbodilesslink)
* [truncateFileName](globals.md#const-truncatefilename)
* [withForwardedRef](globals.md#const-withforwardedref)
* [withForwardedRefEnd](globals.md#const-withforwardedrefend)
* [withForwardedRefStart](globals.md#const-withforwardedrefstart)
* [withUI](globals.md#const-withui)

### Object literals

* [fileUploadUI](globals.md#const-fileuploadui)

## Type aliases

###  UI

Ƭ **UI**: *object*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:128](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L128)*

#### Type declaration:

* \[ **key**: *string*\]: object

## Variables

### `Const` Image

• **Image**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asBodilessImage()(Img)

*Defined in [packages/bodiless-components-ui/src/Image.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/Image.tsx#L30)*

___

### `Const` Input

• **Input**: *any* = withForwardedRef()('input')

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:64](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L64)*

___

### `Const` MasterWrapper

• **MasterWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('bl-container')(Section)

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L53)*

___

### `Const` UPLOAD_STATUS_MAX_FILENAME_LENGTH

• **UPLOAD_STATUS_MAX_FILENAME_LENGTH**: *30* = 30

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L96)*

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

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L55)*

## Functions

### `Const` DragRejected

▸ **DragRejected**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L72)*

**Returns:** *Element‹›*

___

### `Const` UploadArea

▸ **UploadArea**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L66)*

**Returns:** *Element‹›*

___

### `Const` UploadFinished

▸ **UploadFinished**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L79)*

**Returns:** *Element‹›*

___

### `Const` UploadStatus

▸ **UploadStatus**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:98](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L98)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`selectedFile` | undefined &#124; string |
`status` | FileUploadStatus |

**Returns:** *Element‹›*

___

### `Const` UploadTimeout

▸ **UploadTimeout**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L75)*

**Returns:** *Element‹›*

___

### `Const` Uploading

▸ **Uploading**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L78)*

**Returns:** *Element‹›*

___

### `Const` asBodilessImage

▸ **asBodilessImage**(`nodeKey`: undefined | string | object, `defaultData`: undefined | object, `useOverrides`: undefined | function): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/Image.tsx#L24)*

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

### `Const` asBodilessLink

▸ **asBodilessLink**(`nodeKey`: undefined | string | object, `defaultData`: undefined | object, `useOverrides`: undefined | function): *function*

*Defined in [packages/bodiless-components-ui/src/Link.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/Link.tsx#L28)*

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

### `Const` truncateFileName

▸ **truncateFileName**(`file`: string, `length`: number): *string*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:83](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`length` | number |

**Returns:** *string*

___

### `Const` withForwardedRef

▸ **withForwardedRef**(...`hocs`: HOC[]): *function*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`...hocs` | HOC[] |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withForwardedRefEnd

▸ **withForwardedRefEnd**(`Component`: ComponentType‹any›): *WithForwardedRefEnd*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *WithForwardedRefEnd*

___

### `Const` withForwardedRefStart

▸ **withForwardedRefStart**(`Component`: ComponentType‹any›): *ForwardRefExoticComponent‹RefAttributes‹unknown››*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *ForwardRefExoticComponent‹RefAttributes‹unknown››*

___

### `Const` withUI

▸ **withUI**‹**P**›(`ui`: [UI](globals.md#ui)): *(Anonymous function)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:129](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L129)*

**Type parameters:**

▪ **P**: *[UI](globals.md#ui)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | [UI](globals.md#ui) |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` fileUploadUI

### ▪ **fileUploadUI**: *object*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L116)*

*Defined in [packages/bodiless-components-ui/src/Link.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/Link.tsx#L23)*

###  DragRejected

• **DragRejected**: *[DragRejected](globals.md#const-dragrejected)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:122](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L122)*

###  Input

• **Input**: *any*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:119](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L119)*

###  MasterWrapper

• **MasterWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('bl-max-w-xl-grid-1')(baseFileUploadUi.MasterWrapper)

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:117](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L117)*

*Defined in [packages/bodiless-components-ui/src/Link.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/Link.tsx#L25)*

###  UploadArea

• **UploadArea**: *[UploadArea](globals.md#const-uploadarea)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:120](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L120)*

###  UploadFinished

• **UploadFinished**: *[UploadFinished](globals.md#const-uploadfinished)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:124](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L124)*

###  UploadStatus

• **UploadStatus**: *[UploadStatus](globals.md#const-uploadstatus)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:125](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L125)*

###  UploadTimeout

• **UploadTimeout**: *[UploadTimeout](globals.md#const-uploadtimeout)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:123](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L123)*

###  Uploading

• **Uploading**: *[Uploading](globals.md#const-uploading)*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:121](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L121)*

###  Wrapper

• **Wrapper**: *any*

*Defined in [packages/bodiless-components-ui/src/FileUpload.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-components-ui/src/FileUpload.tsx#L118)*
