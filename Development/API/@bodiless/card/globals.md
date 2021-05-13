[@bodiless/card](README.md) › [Globals](globals.md)

# @bodiless/card

## Index

### Type aliases

* [CardBaseProps](globals.md#cardbaseprops)
* [CardComponents](globals.md#cardcomponents)
* [CardProps](globals.md#cardprops)

### Variables

* [CardClean](globals.md#const-cardclean)
* [asCardHorizontal](globals.md#const-ascardhorizontal)
* [asCardNoBody](globals.md#const-ascardnobody)
* [asCardNoBodyNoTitle](globals.md#const-ascardnobodynotitle)
* [asCardNoCta](globals.md#const-ascardnocta)
* [asCardNoTitle](globals.md#const-ascardnotitle)
* [asCardOverlayCta](globals.md#const-ascardoverlaycta)
* [asCardOverlayTitle](globals.md#const-ascardoverlaytitle)
* [asCardVertical](globals.md#const-ascardvertical)
* [asTestableCard](globals.md#const-astestablecard)

### Functions

* [CardBase](globals.md#const-cardbase)

### Object literals

* [cardComponentStart](globals.md#const-cardcomponentstart)

## Type aliases

###  CardBaseProps

Ƭ **CardBaseProps**: *DesignableComponentsProps‹[CardComponents](globals.md#cardcomponents)› & HTMLProps‹HTMLElement›*

*Defined in [bodiless-card/src/components/Cards.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L54)*

___

###  CardComponents

Ƭ **CardComponents**: *object*

*Defined in [bodiless-card/src/components/Cards.tsx:32](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L32)*

#### Type declaration:

* **Body**: *ComponentType‹StylableProps›*

* **ContentWrapper**: *ComponentType‹StylableProps›*

* **Image**: *ComponentType‹StylableProps›*

* **ImageLink**: *ComponentType‹StylableProps›*

* **ImageWrapper**: *ComponentType‹StylableProps›*

* **Link**: *ComponentType‹StylableProps›*

* **Title**: *ComponentType‹StylableProps›*

* **Wrapper**: *ComponentType‹StylableProps›*

___

###  CardProps

Ƭ **CardProps**: *DesignableProps‹[CardComponents](globals.md#cardcomponents)› & HTMLProps‹HTMLElement›*

*Defined in [bodiless-card/src/components/Cards.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L53)*

## Variables

### `Const` CardClean

• **CardClean**: *any* = flow(
  designable(cardComponentStart, 'Card'),
  withResizeDetector,
  withNode,
)(CardBase)

*Defined in [bodiless-card/src/components/Cards.tsx:84](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L84)*

___

### `Const` asCardHorizontal

• **asCardHorizontal**: *function & object* = withDesign({
  Wrapper: addClasses('md:flex-row w-full flex flex-col'),
  ImageWrapper: addClasses('md:w-1/2'),
  Image: addClasses('w-full'),
  ContentWrapper: addClasses('md:w-1/2 flex flex-col'),
  Body: addClasses('flex-grow'),
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L37)*

asCardHorizontal splits the card in half with the image on the left

___

### `Const` asCardNoBody

• **asCardNoBody**: *function & object* = withDesign({
  Title: addClasses('flex-grow'), // Adds grow here because body will not exist
  Body: remove,
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L55)*

asCardNoBody removes the body from the card and adjust title

___

### `Const` asCardNoBodyNoTitle

• **asCardNoBodyNoTitle**: *function & object* = asToken(
  asCardNoBody,
  asCardNoTitle,
  withDesign({ ImageLink: addClasses('flex-grow') }),
)

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L63)*

asCardNoBodyNoTitle removes both body and title from the card and adjusts image link

___

### `Const` asCardNoCta

• **asCardNoCta**: *function & object* = withDesign({
  Link: remove,
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L72)*

asCardNoCta removes link from the card

___

### `Const` asCardNoTitle

• **asCardNoTitle**: *function & object* = withDesign({
  Title: remove,
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L48)*

asCardNoTitle removes title from the card

___

### `Const` asCardOverlayCta

• **asCardOverlayCta**: *function & object* = withDesign({
  Link: asToken(
    addClasses('absolute bottom-0 right-0 m-8 px-8'),
    removeClasses('w-full'),
  ),
  Wrapper: addClasses('relative'),
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:87](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L87)*

asCardOverlayCta puts the link over the card image bottom

___

### `Const` asCardOverlayTitle

• **asCardOverlayTitle**: *function & object* = withDesign({
  Title: addClasses('absolute left-0 right-0 top-0 m-8 w-auto'),
  Wrapper: addClasses('relative'),
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:79](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L79)*

asCardOverlayTitle puts the title over the card image top

___

### `Const` asCardVertical

• **asCardVertical**: *function & object* = withDesign({
  Wrapper: addClasses('w-full flex h-full flex-col'),
  ContentWrapper: remove,
  Image: addClasses('w-full'),
  ImageWrapper: remove,
  Body: addClasses('flex-grow'),
})

*Defined in [bodiless-card/src/components/Cards.tokens.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tokens.tsx#L26)*

asCardVertical removes unnecessary wrappers from the card

___

### `Const` asTestableCard

• **asTestableCard**: *function & object* = withDesign({
  Wrapper: addProps({ 'data-card-element': 'wrapper' }),
  ImageWrapper: addProps({ 'data-card-element': 'image-wrapper' }),
  Image: addProps({ 'data-card-element': 'image' }),
  ImageLink: addProps({ 'data-card-element': 'image-link' }),
  ContentWrapper: addProps({ 'data-card-element': 'content-wrapper' }),
  Title: addProps({ 'data-card-element': 'title' }),
  Body: addProps({ 'data-card-element': 'body' }),
  Link: addProps({ 'data-card-element': 'link' }),
})

*Defined in [bodiless-card/src/components/Cards.tsx:95](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L95)*

Adds data- identifiers to help select card elements in automated tests.

**`param`** The id attribute to apply to the outer wrapper.

## Functions

### `Const` CardBase

▸ **CardBase**(`__namedParameters`: object): *Element‹›*

*Defined in [bodiless-card/src/components/Cards.tsx:56](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L56)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |
`rest` | rest |

**Returns:** *Element‹›*

## Object literals

### `Const` cardComponentStart

### ▪ **cardComponentStart**: *object*

*Defined in [bodiless-card/src/components/Cards.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L42)*

###  Body

• **Body**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [bodiless-card/src/components/Cards.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L49)*

###  ContentWrapper

• **ContentWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [bodiless-card/src/components/Cards.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L47)*

###  Image

• **Image**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Img

*Defined in [bodiless-card/src/components/Cards.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L46)*

###  ImageLink

• **ImageLink**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [bodiless-card/src/components/Cards.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L45)*

###  ImageWrapper

• **ImageWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [bodiless-card/src/components/Cards.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L44)*

###  Link

• **Link**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = A

*Defined in [bodiless-card/src/components/Cards.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L50)*

###  Title

• **Title**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = H2

*Defined in [bodiless-card/src/components/Cards.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L48)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [bodiless-card/src/components/Cards.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/83cdabf7/packages/bodiless-card/src/components/Cards.tsx#L43)*
