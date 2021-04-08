[@bodiless/bv](README.md) › [Globals](globals.md)

# @bodiless/bv

## Index

### Type aliases

* [BVComponents](globals.md#bvcomponents)
* [BVConfig](globals.md#bvconfig)
* [BVLoaderData](globals.md#bvloaderdata)
* [BVProps](globals.md#bvprops)
* [DataType](globals.md#datatype)
* [DesignableProps](globals.md#designableprops)
* [DivProps](globals.md#divprops)
* [Props](globals.md#props)

### Variables

* [BVInlineRating](globals.md#const-bvinlinerating)
* [BVInlineRatings](globals.md#const-bvinlineratings)
* [BVInlineRatingsBase](globals.md#const-bvinlineratingsbase)
* [BVLoaderContext](globals.md#const-bvloadercontext)
* [BVRatingsSummary](globals.md#const-bvratingssummary)
* [BVRatingsSummaryBase](globals.md#const-bvratingssummarybase)
* [BVReviews](globals.md#const-bvreviews)
* [BVReviewsBase](globals.md#const-bvreviewsbase)
* [asBodilessBV](globals.md#const-asbodilessbv)
* [asEditableBV](globals.md#const-aseditablebv)
* [nodeKey](globals.md#const-nodekey)
* [withBVDataHandlers](globals.md#const-withbvdatahandlers)

### Functions

* [BVLoaderProvider](globals.md#const-bvloaderprovider)
* [BVLoading](globals.md#const-bvloading)
* [BVPlaceholder](globals.md#const-bvplaceholder)
* [BVPlainInlineRatings](globals.md#const-bvplaininlineratings)
* [BVPlainRatingsSummary](globals.md#const-bvplainratingssummary)
* [BVPlainReviews](globals.md#const-bvplainreviews)
* [BVProductIsNotMapped](globals.md#const-bvproductisnotmapped)
* [asBVComponent](globals.md#const-asbvcomponent)
* [asDesignableBVComponent](globals.md#const-asdesignablebvcomponent)
* [getBVScriptUrl](globals.md#const-getbvscripturl)
* [getBVScriptUrlFromConfig](globals.md#const-getbvscripturlfromconfig)
* [isBVConfigValid](globals.md#const-isbvconfigvalid)
* [onLoaded](globals.md#const-onloaded)
* [useBVLoader](globals.md#const-usebvloader)
* [withBVLoader](globals.md#const-withbvloader)
* [withoutBVProps](globals.md#const-withoutbvprops)

### Object literals

* [defaultBVConfig](globals.md#const-defaultbvconfig)
* [defaultComponents](globals.md#const-defaultcomponents)
* [defaultValue](globals.md#const-defaultvalue)
* [editButtonOptions](globals.md#const-editbuttonoptions)
* [emptyValue](globals.md#const-emptyvalue)

## Type aliases

###  BVComponents

Ƭ **BVComponents**: *object*

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L25)*

#### Type declaration:

* **BVLoading**: *ComponentType‹BVLoadingProps›*

* **BVPlaceholder**: *ComponentType‹BVPlaceholderProps›*

* **BVProductIsNotMapped**: *ComponentType‹BVProductIsNotMappedProps›*

___

###  BVConfig

Ƭ **BVConfig**: *object*

*Defined in [packages/bodiless-bv/src/BVConfig.ts:15](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/BVConfig.ts#L15)*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L21)*

Copyright © 2019 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Type declaration:

* **client_name**: *string*

* **environment**: *string*

* **locale**: *string*

* **site_ID**: *string*

___

###  BVLoaderData

Ƭ **BVLoaderData**: *object*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L33)*

#### Type declaration:

* **isLoaded**: *boolean*

___

###  BVProps

Ƭ **BVProps**: *object*

*Defined in [packages/bodiless-bv/src/components/BVProps.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVProps.ts#L17)*

#### Type declaration:

* **componentName**? : *undefined | string*

* **productId**: *string | number*

* **redirectUrl**? : *undefined | string*

* **seo**? : *undefined | false | true*

___

###  DataType

Ƭ **DataType**: *object*

*Defined in [packages/bodiless-bv/src/components/asBodilessBV.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBodilessBV.tsx#L31)*

#### Type declaration:

* **productId**: *string*

___

###  DesignableProps

Ƭ **DesignableProps**: *DesignableComponentsProps‹[BVComponents](globals.md#bvcomponents)›*

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L37)*

___

###  DivProps

Ƭ **DivProps**: *HTMLProps‹HTMLDivElement›*

*Defined in [packages/bodiless-bv/src/components/BVLoading.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoading.tsx#L19)*

*Defined in [packages/bodiless-bv/src/components/BVErrors.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVErrors.tsx#L19)*

*Defined in [packages/bodiless-bv/src/components/BVPlaceholder.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVPlaceholder.tsx#L19)*

*Defined in [packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/v1/BVReviews.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVReviews.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/v2/BVReviews.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVReviews.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/BVRatingsSummary.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVRatingsSummary.tsx#L22)*

*Defined in [packages/bodiless-bv/src/components/BVReviews.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVReviews.tsx#L22)*

___

###  Props

Ƭ **Props**: *[DivProps](globals.md#divprops) & [BVProps](globals.md#bvprops)*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L28)*

*Defined in [packages/bodiless-bv/src/components/BVLoading.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoading.tsx#L21)*

*Defined in [packages/bodiless-bv/src/components/BVErrors.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVErrors.tsx#L21)*

*Defined in [packages/bodiless-bv/src/components/BVPlaceholder.tsx:21](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVPlaceholder.tsx#L21)*

*Defined in [packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/v1/BVReviews.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVReviews.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/v2/BVReviews.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVReviews.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/BVRatingsSummary.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVRatingsSummary.tsx#L24)*

*Defined in [packages/bodiless-bv/src/components/BVReviews.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVReviews.tsx#L24)*

## Variables

### `Const` BVInlineRating

• **BVInlineRating**: *any* = flowRight(
  withBVLoader,
  asEditableBV,
)(BVInlineRatingsBase)

*Defined in [packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx#L38)*

___

### `Const` BVInlineRatings

• **BVInlineRatings**: *any* = flowRight(
  withBVLoader,
  asEditableBV,
)(BVInlineRatingsBase)

*Defined in [packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx#L37)*

___

### `Const` BVInlineRatingsBase

• **BVInlineRatingsBase**: *any* = asDesignableBVComponent('BV Inline Ratings')(BVPlainInlineRatings)

*Defined in [packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx#L36)*

*Defined in [packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx#L35)*

___

### `Const` BVLoaderContext

• **BVLoaderContext**: *Context‹object›* = React.createContext<BVLoaderData>(defaultValue)

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L41)*

___

### `Const` BVRatingsSummary

• **BVRatingsSummary**: *any* = flowRight(
  withBVLoader,
  asEditableBV,
)(BVRatingsSummaryBase)

*Defined in [packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx#L38)*

*Defined in [packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx#L32)*

*Defined in [packages/bodiless-bv/src/components/BVRatingsSummary.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVRatingsSummary.tsx#L38)*

___

### `Const` BVRatingsSummaryBase

• **BVRatingsSummaryBase**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object›* = asBVComponent('BV Ratings Summary', onLoaded)(BVPlainRatingsSummary)

*Defined in [packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx#L36)*

*Defined in [packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx#L30)*

*Defined in [packages/bodiless-bv/src/components/BVRatingsSummary.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVRatingsSummary.tsx#L36)*

___

### `Const` BVReviews

• **BVReviews**: *any* = flowRight(
  withBVLoader,
  asEditableBV,
)(BVReviewsBase)

*Defined in [packages/bodiless-bv/src/components/v1/BVReviews.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVReviews.tsx#L38)*

*Defined in [packages/bodiless-bv/src/components/v2/BVReviews.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVReviews.tsx#L32)*

*Defined in [packages/bodiless-bv/src/components/BVReviews.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVReviews.tsx#L38)*

___

### `Const` BVReviewsBase

• **BVReviewsBase**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object & object›* = asBVComponent('BV Reviews', onLoaded)(BVPlainReviews)

*Defined in [packages/bodiless-bv/src/components/v1/BVReviews.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVReviews.tsx#L36)*

*Defined in [packages/bodiless-bv/src/components/v2/BVReviews.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVReviews.tsx#L30)*

*Defined in [packages/bodiless-bv/src/components/BVReviews.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVReviews.tsx#L36)*

___

### `Const` asBodilessBV

• **asBodilessBV**: *function* = flowRight(
  withBVDataHandlers,
  withData,
)

*Defined in [packages/bodiless-bv/src/components/asBodilessBV.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBodilessBV.tsx#L43)*

#### Type declaration:

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Const` asEditableBV

• **asEditableBV**: *function* = flowRight(
  withBVDataHandlers,
  ifEditable(
    withEditButton(editButtonOptions),
    withContextActivator('onClick'),
    withLocalContextMenu,
  ),
  withData,
)

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L52)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` nodeKey

• **nodeKey**: *"bvConfig"* = "bvConfig"

*Defined in [packages/bodiless-bv/src/components/asBodilessBV.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBodilessBV.tsx#L29)*

___

### `Const` withBVDataHandlers

• **withBVDataHandlers**: *function* = flowRight(
  // @ts-ignore: Types of parameters are incompatible.
  withNodeKey(nodeKey),
  withNode,
  withNodeDataHandlers(emptyValue),
  ifReadOnly(withoutProps(['setComponentData'])),
)

*Defined in [packages/bodiless-bv/src/components/asBodilessBV.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBodilessBV.tsx#L35)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

## Functions

### `Const` BVLoaderProvider

▸ **BVLoaderProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L43)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`scriptUrl` | undefined &#124; string |

**Returns:** *Element‹›*

___

### `Const` BVLoading

▸ **BVLoading**(`props`: HTMLProps‹HTMLDivElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/BVLoading.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoading.tsx#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

**Returns:** *Element‹›*

___

### `Const` BVPlaceholder

▸ **BVPlaceholder**(`props`: HTMLProps‹HTMLDivElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/BVPlaceholder.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVPlaceholder.tsx#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

**Returns:** *Element‹›*

___

### `Const` BVPlainInlineRatings

▸ **BVPlainInlineRatings**(): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx#L34)*

**Returns:** *Element‹›*

▸ **BVPlainInlineRatings**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVInlineRatings.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |
`redirectUrl` | undefined &#124; string |
`seo` | undefined &#124; false &#124; true |

**Returns:** *Element‹›*

___

### `Const` BVPlainRatingsSummary

▸ **BVPlainRatingsSummary**(): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx#L34)*

**Returns:** *Element‹›*

▸ **BVPlainRatingsSummary**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVRatingsSummary.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *Element‹›*

▸ **BVPlainRatingsSummary**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/BVRatingsSummary.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVRatingsSummary.tsx#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |
`rest` | rest |

**Returns:** *Element‹›*

___

### `Const` BVPlainReviews

▸ **BVPlainReviews**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/v1/BVReviews.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVReviews.tsx#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |
`rest` | rest |

**Returns:** *Element‹›*

▸ **BVPlainReviews**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/v2/BVReviews.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v2/BVReviews.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *Element‹›*

▸ **BVPlainReviews**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/BVReviews.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVReviews.tsx#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |
`rest` | rest |

**Returns:** *Element‹›*

___

### `Const` BVProductIsNotMapped

▸ **BVProductIsNotMapped**(`props`: HTMLProps‹HTMLDivElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/BVErrors.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVErrors.tsx#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

**Returns:** *Element‹›*

___

### `Const` asBVComponent

▸ **asBVComponent**(`componentName`: string, `onLoaded?`: undefined | function): *(Anonymous function)*

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`componentName` | string |
`onLoaded?` | undefined &#124; function |

**Returns:** *(Anonymous function)*

___

### `Const` asDesignableBVComponent

▸ **asDesignableBVComponent**(`componentName`: string, `onLoaded?`: undefined | function): *(Anonymous function)*

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`componentName` | string |
`onLoaded?` | undefined &#124; function |

**Returns:** *(Anonymous function)*

___

### `Const` getBVScriptUrl

▸ **getBVScriptUrl**(): *any*

*Defined in [packages/bodiless-bv/src/getBVScriptUrl.ts:42](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/getBVScriptUrl.ts#L42)*

**Returns:** *any*

___

### `Const` getBVScriptUrlFromConfig

▸ **getBVScriptUrlFromConfig**(`conf`: [BVConfig](globals.md#bvconfig)): *string*

*Defined in [packages/bodiless-bv/src/getBVScriptUrl.ts:17](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/getBVScriptUrl.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`conf` | [BVConfig](globals.md#bvconfig) |

**Returns:** *string*

___

### `Const` isBVConfigValid

▸ **isBVConfigValid**(`conf`: [BVConfig](globals.md#bvconfig)): *boolean*

*Defined in [packages/bodiless-bv/src/getBVScriptUrl.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/getBVScriptUrl.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`conf` | [BVConfig](globals.md#bvconfig) |

**Returns:** *boolean*

___

### `Const` onLoaded

▸ **onLoaded**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVRatingsSummary.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *void*

▸ **onLoaded**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-bv/src/components/v1/BVReviews.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVReviews.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *void*

▸ **onLoaded**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/v1/BVInlineRatings.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *void*

▸ **onLoaded**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-bv/src/components/BVRatingsSummary.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVRatingsSummary.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *void*

▸ **onLoaded**(`__namedParameters`: object): *void*

*Defined in [packages/bodiless-bv/src/components/BVReviews.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVReviews.tsx#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`productId` | string &#124; number |

**Returns:** *void*

___

### `Const` useBVLoader

▸ **useBVLoader**(): *object*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:74](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L74)*

**Returns:** *object*

* **isLoaded**: *boolean*

___

### `Const` withBVLoader

▸ **withBVLoader**‹**P**›(`Component`: CT‹P›): *(Anonymous function)*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:76](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L76)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P› |

**Returns:** *(Anonymous function)*

___

### `Const` withoutBVProps

▸ **withoutBVProps**‹**P**›(`props`: P): *object*

*Defined in [packages/bodiless-bv/src/components/BVProps.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVProps.ts#L24)*

**Type parameters:**

▪ **P**: *[BVProps](globals.md#bvprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

**Returns:** *object*

## Object literals

### `Const` defaultBVConfig

### ▪ **defaultBVConfig**: *object*

*Defined in [packages/bodiless-bv/src/BVConfig.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/BVConfig.ts#L22)*

###  client_name

• **client_name**: *string* = "clientid"

*Defined in [packages/bodiless-bv/src/BVConfig.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/BVConfig.ts#L23)*

###  environment

• **environment**: *string* = "staging"

*Defined in [packages/bodiless-bv/src/BVConfig.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/BVConfig.ts#L25)*

###  locale

• **locale**: *string* = "en_US"

*Defined in [packages/bodiless-bv/src/BVConfig.ts:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/BVConfig.ts#L26)*

###  site_ID

• **site_ID**: *string* = "main_site"

*Defined in [packages/bodiless-bv/src/BVConfig.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/BVConfig.ts#L24)*

___

### `Const` defaultComponents

### ▪ **defaultComponents**: *object*

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L31)*

###  BVLoading

• **BVLoading**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = DefaultBVLoading

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L34)*

###  BVPlaceholder

• **BVPlaceholder**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = DefaultBVPlaceholder

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L33)*

###  BVProductIsNotMapped

• **BVProductIsNotMapped**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = DefaultBVProductIsNotMapped

*Defined in [packages/bodiless-bv/src/components/asBVComponent.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBVComponent.tsx#L32)*

___

### `Const` defaultValue

### ▪ **defaultValue**: *object*

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L37)*

###  isLoaded

• **isLoaded**: *boolean* = false

*Defined in [packages/bodiless-bv/src/components/BVLoader.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/BVLoader.tsx#L38)*

___

### `Const` editButtonOptions

### ▪ **editButtonOptions**: *object*

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L29)*

###  global

• **global**: *false* = false

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L48)*

###  groupLabel

• **groupLabel**: *string* = "Reviews"

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L32)*

###  icon

• **icon**: *string* = "settings"

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L30)*

###  label

• **label**: *string* = "Settings"

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L31)*

###  local

• **local**: *true* = true

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L49)*

###  name

• **name**: *string* = "Edit"

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L33)*

###  renderForm

▸ **renderForm**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-bv/src/components/asEditableBV.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asEditableBV.tsx#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`formUi` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` emptyValue

### ▪ **emptyValue**: *object*

*Defined in [packages/bodiless-bv/src/components/asBodilessBV.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBodilessBV.tsx#L25)*

###  productId

• **productId**: *string* = ""

*Defined in [packages/bodiless-bv/src/components/asBodilessBV.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/bea046a1/packages/bodiless-bv/src/components/asBodilessBV.tsx#L26)*
