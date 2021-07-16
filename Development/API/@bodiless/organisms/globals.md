[@bodiless/organisms](README.md) › [Globals](globals.md)

# @bodiless/organisms

## Index

### Type aliases

* [EmbedBaseProps](globals.md#embedbaseprops)
* [EmbedDesignableComponents](globals.md#embeddesignablecomponents)
* [EmbedProps](globals.md#embedprops)
* [ProductComponents](globals.md#productcomponents)
* [Props](globals.md#props)
* [ProvidersComponents](globals.md#providerscomponents)
* [SocialShareButtonProps](globals.md#socialsharebuttonprops)
* [SocialShareComponents](globals.md#socialsharecomponents)
* [SocialShareProps](globals.md#socialshareprops)
* [SocialShareProvider](globals.md#socialshareprovider)
* [SocialShareProvidersProps](globals.md#socialshareprovidersprops)

### Variables

* [ActivatorWrapper](globals.md#const-activatorwrapper)
* [Embed](globals.md#const-embed)
* [Product](globals.md#const-product)
* [ProductClean](globals.md#const-productclean)
* [SocialShare](globals.md#const-socialshare)
* [SocialShareProviders](globals.md#const-socialshareproviders)
* [asBaseResponsiveIframe](globals.md#const-asbaseresponsiveiframe)
* [asBodilessIframe](globals.md#const-asbodilessiframe)
* [asEditableProduct](globals.md#const-aseditableproduct)
* [asResponsive16By9Embed](globals.md#const-asresponsive16by9embed)
* [asResponsive1By1Embed](globals.md#const-asresponsive1by1embed)
* [asResponsive21By9Embed](globals.md#const-asresponsive21by9embed)
* [asResponsive4By3Embed](globals.md#const-asresponsive4by3embed)
* [asResponsiveEmbed](globals.md#const-asresponsiveembed)
* [asResponsiveIframe](globals.md#const-asresponsiveiframe)

### Functions

* [BaseEmbedComponent](globals.md#const-baseembedcomponent)
* [ButtonClean](globals.md#const-buttonclean)
* [ProductBase](globals.md#const-productbase)
* [ProvidersClean](globals.md#const-providersclean)
* [SocialShareBase](globals.md#const-socialsharebase)
* [WrapperClean](globals.md#const-wrapperclean)

### Object literals

* [ProductComponentStart](globals.md#const-productcomponentstart)
* [initialSimpleValue](globals.md#const-initialsimplevalue)
* [providersComponents](globals.md#const-providerscomponents)
* [socialShareComponents](globals.md#const-socialsharecomponents)
* [startComponents](globals.md#const-startcomponents)

## Type aliases

###  EmbedBaseProps

Ƭ **EmbedBaseProps**: *DesignableComponentsProps‹[EmbedDesignableComponents](globals.md#embeddesignablecomponents)›*

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L38)*

___

###  EmbedDesignableComponents

Ƭ **EmbedDesignableComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L26)*

#### Type declaration:

* **AspectRatio**: *ComponentType‹HTMLProps‹HTMLDivElement››*

* **Item**: *ComponentType‹HTMLProps‹HTMLEmbedElement››*

* **Wrapper**: *ComponentType‹HTMLProps‹HTMLDivElement››*

___

###  EmbedProps

Ƭ **EmbedProps**: *DesignableProps‹[EmbedDesignableComponents](globals.md#embeddesignablecomponents)› & WithNodeProps*

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L39)*

___

###  ProductComponents

Ƭ **ProductComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L36)*

#### Type declaration:

* **Body**: *ComponentType‹StylableProps›*

* **BvReview**: *ComponentType‹StylableProps›*

* **BvReviewLink**: *ComponentType‹StylableProps›*

* **ContentWrapper**: *ComponentType‹StylableProps›*

* **Image**: *ComponentType‹StylableProps›*

* **ImageLink**: *ComponentType‹StylableProps›*

* **ImageWrapper**: *ComponentType‹StylableProps›*

* **Title**: *ComponentType‹StylableProps›*

* **TitleLink**: *ComponentType‹StylableProps›*

* **Wrapper**: *ComponentType‹StylableProps›*

___

###  Props

Ƭ **Props**: *DesignableComponentsProps‹[ProductComponents](globals.md#productcomponents)› & object*

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L61)*

___

###  ProvidersComponents

Ƭ **ProvidersComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/types.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/types.tsx#L35)*

#### Type declaration:

* **ProviderList**: *ComponentType‹StylableProps›*

* **ProvidersWrapper**: *ComponentType‹StylableProps›*

___

###  SocialShareButtonProps

Ƭ **SocialShareButtonProps**: *HTMLProps‹HTMLElement› & object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/types.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/types.tsx#L40)*

___

###  SocialShareComponents

Ƭ **SocialShareComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/types.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/types.tsx#L29)*

#### Type declaration:

* **SocialShareButton**: *ComponentType‹[SocialShareButtonProps](globals.md#socialsharebuttonprops)›*

* **SocialShareProdviders**: *ComponentType‹any›*

* **SocialShareWrapper**: *ComponentType‹StylableProps›*

___

###  SocialShareProps

Ƭ **SocialShareProps**: *DesignableComponentsProps‹[SocialShareComponents](globals.md#socialsharecomponents)› & HTMLProps‹HTMLElement› & [SocialShareButtonProps](globals.md#socialsharebuttonprops) & [SocialShareProvidersProps](globals.md#socialshareprovidersprops)*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/types.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/types.tsx#L50)*

___

###  SocialShareProvider

Ƭ **SocialShareProvider**: *object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/types.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/types.tsx#L24)*

#### Type declaration:

* **element**: *Element*

* **id**: *string*

___

###  SocialShareProvidersProps

Ƭ **SocialShareProvidersProps**: *DesignableComponentsProps‹[ProvidersComponents](globals.md#providerscomponents)› & HTMLProps‹HTMLElement› & object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/types.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/types.tsx#L44)*

## Variables

### `Const` ActivatorWrapper

• **ActivatorWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('absolute w-full h-full inset-0')(Div)

*Defined in [packages/bodiless-organisms/src/components/ResponsiveIframe.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/ResponsiveIframe.tsx#L34)*

___

### `Const` Embed

• **Embed**: *ComponentType‹[EmbedProps](globals.md#embedprops)›* = asToken(
  designable(startComponents, 'Embed'),
  withNode,
)(BaseEmbedComponent)

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L55)*

___

### `Const` Product

• **Product**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asEditableProduct(ProductClean)

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:112](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L112)*

___

### `Const` ProductClean

• **ProductClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = flow(
  designable(ProductComponentStart, 'Product'),
  withNode,
)(ProductBase)

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:97](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L97)*

___

### `Const` SocialShare

• **SocialShare**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(socialShareComponents, 'SocialShare')(SocialShareBase)

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L118)*

___

### `Const` SocialShareProviders

• **SocialShareProviders**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(providersComponents, 'SocialShareProviders')(ProvidersClean)

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:85](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L85)*

___

### `Const` asBaseResponsiveIframe

• **asBaseResponsiveIframe**: *function & object* = withDesign({
  Item: flowRight(
    replaceWith(
      flowRight(
        ifEditable(withoutPointerEvents),
        asBodilessIframe(),
      )(Iframe),
    ),
  ),
})

*Defined in [packages/bodiless-organisms/src/components/ResponsiveIframe.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/ResponsiveIframe.tsx#L40)*

___

### `Const` asBodilessIframe

• **asBodilessIframe**: *function* = asBodilessComponent({
  ...useIframeBodilessOptions(),
  Wrapper: ActivatorWrapper,
})

*Defined in [packages/bodiless-organisms/src/components/ResponsiveIframe.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/ResponsiveIframe.tsx#L35)*

#### Type declaration:

▸ (`nodeKeys?`: WithNodeKeyProps, `defaultData?`: D, `useOverrides?`: UseBodilessOverrides‹P, D, E›): *Enhancer‹Partial‹WithNodeProps››*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |
`defaultData?` | D |
`useOverrides?` | UseBodilessOverrides‹P, D, E› |

___

### `Const` asEditableProduct

• **asEditableProduct**: *function & object* = withDesign<ProductComponents>({
  Image: asBodilessImage('image'),
  ImageLink: asBodilessLink('cta'),
  TitleLink: asBodilessLink('cta'),
  Title: asEditable('title', 'Product Title Text'),
  BvReviewLink: asBodilessLink('cta'),
  BvReview: () => BVInlineRatings,
  Body: asEditable('body', 'Product Body Text'),
})

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:102](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L102)*

___

### `Const` asResponsive16By9Embed

• **asResponsive16By9Embed**: *function & object* = asToken(
  asResponsiveEmbed,
  withDesign({
    AspectRatio: addClasses('aspect-ratio-16/9'),
  }),
)

*Defined in [packages/bodiless-organisms/src/components/Embed.tokens.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tokens.tsx#L29)*

___

### `Const` asResponsive1By1Embed

• **asResponsive1By1Embed**: *function & object* = asToken(
  asResponsiveEmbed,
  withDesign({
    AspectRatio: addClasses('aspect-ratio-square'),
  }),
)

*Defined in [packages/bodiless-organisms/src/components/Embed.tokens.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tokens.tsx#L43)*

___

### `Const` asResponsive21By9Embed

• **asResponsive21By9Embed**: *function & object* = asToken(
  asResponsiveEmbed,
  withDesign({
    AspectRatio: addClasses('aspect-ratio-21/9'),
  }),
)

*Defined in [packages/bodiless-organisms/src/components/Embed.tokens.tsx:22](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tokens.tsx#L22)*

___

### `Const` asResponsive4By3Embed

• **asResponsive4By3Embed**: *function & object* = asToken(
  asResponsiveEmbed,
  withDesign({
    AspectRatio: addClasses('aspect-ratio-4/3'),
  }),
)

*Defined in [packages/bodiless-organisms/src/components/Embed.tokens.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tokens.tsx#L36)*

___

### `Const` asResponsiveEmbed

• **asResponsiveEmbed**: *function & object* = withDesign({
  Wrapper: addClasses('relative overflow-hidden w-full'),
  Item: addClasses('absolute w-full h-full inset-0'),
})

*Defined in [packages/bodiless-organisms/src/components/Embed.tokens.tsx:17](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tokens.tsx#L17)*

___

### `Const` asResponsiveIframe

• **asResponsiveIframe**: *function & object* = withDesign({
  Item: flowRight(
    replaceWith(
      flowRight(
        ifEditable(withoutPointerEvents),
        asBodilessIframe(),
        withIframeFormHeader,
        withIframeFormSrcSnippet,
      )(Iframe),
    ),
  ),
})

*Defined in [packages/bodiless-organisms/src/components/ResponsiveIframe.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/ResponsiveIframe.tsx#L51)*

## Functions

### `Const` BaseEmbedComponent

▸ **BaseEmbedComponent**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L41)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |

**Returns:** *Element‹›*

___

### `Const` ButtonClean

▸ **ButtonClean**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L43)*

Display a social share button.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`content` | any |
`onClick` | any |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` ProductBase

▸ **ProductBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L63)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |

**Returns:** *Element‹›*

___

### `Const` ProvidersClean

▸ **ProvidersClean**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L57)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |
`expanded` | undefined &#124; false &#124; true |
`providers` | object[] |

**Returns:** *Element‹›*

___

### `Const` SocialShareBase

▸ **SocialShareBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:93](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L93)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`buttonContent` | string &#124; Element‹› |
`components` | object & object |
`props` | props |
`providers` | object[] |

**Returns:** *Element‹›*

___

### `Const` WrapperClean

▸ **WrapperClean**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L35)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`props` | props |

**Returns:** *Element‹›*

## Object literals

### `Const` ProductComponentStart

### ▪ **ProductComponentStart**: *object*

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L48)*

###  Body

• **Body**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:58](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L58)*

###  BvReview

• **BvReview**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L57)*

###  BvReviewLink

• **BvReviewLink**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L56)*

###  ContentWrapper

• **ContentWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L53)*

###  Image

• **Image**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Img

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L52)*

###  ImageLink

• **ImageLink**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L51)*

###  ImageWrapper

• **ImageWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L50)*

###  Title

• **Title**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = H2

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L55)*

###  TitleLink

• **TitleLink**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L54)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Products.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Products.tsx#L49)*

___

### `Const` initialSimpleValue

### ▪ **initialSimpleValue**: *object*

*Defined in [packages/bodiless-organisms/src/initial-values/initialSimpleValue.ts:15](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/initial-values/initialSimpleValue.ts#L15)*

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

▪ **document**: *object*

*Defined in [packages/bodiless-organisms/src/initial-values/initialSimpleValue.ts:16](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/initial-values/initialSimpleValue.ts#L16)*

* **nodes**: *object[]* = [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text:
                  'Lorem Ipsum Placeholder',
              },
            ],
          },
        ],
      },
    ]

___

### `Const` providersComponents

### ▪ **providersComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L53)*

###  ProviderList

• **ProviderList**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Li

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L55)*

###  ProvidersWrapper

• **ProvidersWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Ul

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L54)*

___

### `Const` socialShareComponents

### ▪ **socialShareComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L87)*

###  SocialShareButton

• **SocialShareButton**: *FunctionComponent‹any›* = ButtonClean

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:89](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L89)*

###  SocialShareProdviders

• **SocialShareProdviders**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = SocialShareProviders

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:90](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L90)*

###  SocialShareWrapper

• **SocialShareWrapper**: *FunctionComponent‹object›* = WrapperClean

*Defined in [packages/bodiless-organisms/src/components/SocialShare/index.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/SocialShare/index.tsx#L88)*

___

### `Const` startComponents

### ▪ **startComponents**: *object*

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L32)*

###  AspectRatio

• **AspectRatio**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L34)*

###  Item

• **Item**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = BaseEmbed

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L35)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-organisms/src/components/Embed.tsx:33](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-organisms/src/components/Embed.tsx#L33)*
