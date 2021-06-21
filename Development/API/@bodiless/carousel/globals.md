[@bodiless/carousel](README.md) › [Globals](globals.md)

# @bodiless/carousel

## Index

### Type aliases

* [CarouselComponents](globals.md#carouselcomponents)
* [CarouselProps](globals.md#carouselprops)

### Variables

* [CarouselClean](globals.md#const-carouselclean)
* [asAccessibleCarousel](globals.md#const-asaccessiblecarousel)
* [asAccessibleCarouselButton](globals.md#const-asaccessiblecarouselbutton)
* [withAriaSelectedCarouselItem](globals.md#const-withariaselectedcarouselitem)
* [withAutoPlayButton](globals.md#const-withautoplaybutton)
* [withDisabledPlayButtonIfEditable](globals.md#const-withdisabledplaybuttonifeditable)
* [withInfinitiveLoop](globals.md#const-withinfinitiveloop)
* [withIntrinsicHeight](globals.md#const-withintrinsicheight)
* [withNavigationButtons](globals.md#const-withnavigationbuttons)
* [withNoAutoPlayIfEditable](globals.md#const-withnoautoplayifeditable)
* [withNoDragIfEditable](globals.md#const-withnodragifeditable)

### Functions

* [CarouselBase](globals.md#const-carouselbase)
* [CarouselDot](globals.md#const-carouseldot)
* [asEditableCarousel](globals.md#const-aseditablecarousel)
* [useCarouselCurrentSlide](globals.md#const-usecarouselcurrentslide)
* [useCarouselIsPlaying](globals.md#const-usecarouselisplaying)
* [useCarouselSlideIndex](globals.md#const-usecarouselslideindex)
* [useCarouselState](globals.md#const-usecarouselstate)
* [useIsCarouselItemActive](globals.md#const-useiscarouselitemactive)
* [withAutoPlayInterval](globals.md#const-withautoplayinterval)
* [withCarouselDots](globals.md#const-withcarouseldots)
* [withCarouselItemTabIndex](globals.md#const-withcarouselitemtabindex)
* [withTotalSlides](globals.md#const-withtotalslides)

### Object literals

* [carouselComponents](globals.md#const-carouselcomponents)

## Type aliases

###  CarouselComponents

Ƭ **CarouselComponents**: *object*

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L29)*

#### Type declaration:

* **ButtonBack**: *ComponentType‹any›*

* **ButtonNext**: *ComponentType‹any›*

* **ButtonPlay**: *ComponentType‹any›*

* **ControlsWrapper**: *ComponentType‹any›*

* **Dots**: *ComponentType‹any›*

* **Slide**: *ComponentType‹any›*

* **Slider**: *ComponentType‹any›*

* **SliderWrapper**: *ComponentType‹any›*

* **Wrapper**: *ComponentType‹any›*

___

###  CarouselProps

Ƭ **CarouselProps**: *DesignableComponentsProps‹[CarouselComponents](globals.md#carouselcomponents)›*

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L53)*

## Variables

### `Const` CarouselClean

• **CarouselClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(carouselComponents, 'Carousel')(CarouselBase)

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:72](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L72)*

___

### `Const` asAccessibleCarousel

• **asAccessibleCarousel**: *function & object* = withDesign({
  Slider: asToken(
    addProps({
      tabIndex: 'auto',
    }),
    withDesign({
      Item: asToken(
        withCarouselItemTabIndex,
        withAriaSelectedCarouselItem,
      ),
    }),
  ),
  ButtonBack: asAccessibleCarouselButton,
  ButtonNext: asAccessibleCarouselButton,
  Dots: withDesign({
    Item: asToken(
      withAriaSelectedCarouselItem,
      addProps({
        'aria-hidden': false,
        role: 'presentation',
      }),
      withDesign({
        Dot: asAccessibleCarouselButton,
      }),
    ),
  }),
  ButtonPlay: asAccessibleCarouselButton,
})

*Defined in [bodiless-carousel/src/components/token.tsx:135](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L135)*

___

### `Const` asAccessibleCarouselButton

• **asAccessibleCarouselButton**: *function & object* = asToken(
  addProps({
    role: 'button',
  }),
)

*Defined in [bodiless-carousel/src/components/token.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L118)*

___

### `Const` withAriaSelectedCarouselItem

• **withAriaSelectedCarouselItem**: *function & object* = asToken(
  addPropsIf(useIsCarouselItemActive)({
    'aria-selected': true,
    'aria-hidden': false,
  }),
  addPropsIf(negate(useIsCarouselItemActive))({
    'aria-selected': false,
    'aria-hidden': true,
  }),
)

*Defined in [bodiless-carousel/src/components/token.tsx:124](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L124)*

___

### `Const` withAutoPlayButton

• **withAutoPlayButton**: *function & object* = asToken(
  withDesign({
    ButtonPlay: replaceWith(stylable(ButtonPlay)),
  }),
  withDisabledPlayButtonIfEditable,
)

*Defined in [bodiless-carousel/src/components/token.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L96)*

___

### `Const` withDisabledPlayButtonIfEditable

• **withDisabledPlayButtonIfEditable**: *function & object* = withDesign({
  ButtonPlay: ifEditable(
    addProps({
      disabled: true,
    }),
  ),
})

*Defined in [bodiless-carousel/src/components/token.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L61)*

___

### `Const` withInfinitiveLoop

• **withInfinitiveLoop**: *function & object* = withDesign({
  Wrapper: addProps({
    infinite: true,
  }),
})

*Defined in [bodiless-carousel/src/components/token.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L69)*

___

### `Const` withIntrinsicHeight

• **withIntrinsicHeight**: *function & object* = withDesign({
  Wrapper: addProps({
    isIntrinsicHeight: true,
  }),
})

*Defined in [bodiless-carousel/src/components/token.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L39)*

___

### `Const` withNavigationButtons

• **withNavigationButtons**: *function & object* = withDesign({
  ButtonBack: replaceWith(stylable(ButtonBack)),
  ButtonNext: replaceWith(stylable(ButtonNext)),
})

*Defined in [bodiless-carousel/src/components/token.tsx:91](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L91)*

___

### `Const` withNoAutoPlayIfEditable

• **withNoAutoPlayIfEditable**: *function & object* = withDesign({
  Wrapper: ifEditable(
    addProps({
      isPlaying: false,
    }),
  ),
})

*Defined in [bodiless-carousel/src/components/token.tsx:53](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L53)*

___

### `Const` withNoDragIfEditable

• **withNoDragIfEditable**: *function & object* = withDesign({
  Wrapper: ifEditable(
    addProps({
      dragEnabled: false,
    }),
  ),
})

*Defined in [bodiless-carousel/src/components/token.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L45)*

## Functions

### `Const` CarouselBase

▸ **CarouselBase**(`props`: [CarouselProps](globals.md#carouselprops)): *Element‹›*

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CarouselProps](globals.md#carouselprops) |

**Returns:** *Element‹›*

___

### `Const` CarouselDot

▸ **CarouselDot**(`props`: any): *Element‹›*

*Defined in [bodiless-carousel/src/components/CarouselDot.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselDot.tsx#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` asEditableCarousel

▸ **asEditableCarousel**(`nodeKeys?`: WithNodeKeyProps): *function & object*

*Defined in [bodiless-carousel/src/components/asEditableCarousel.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/asEditableCarousel.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |

**Returns:** *function & object*

___

### `Const` useCarouselCurrentSlide

▸ **useCarouselCurrentSlide**(): *number*

*Defined in [bodiless-carousel/src/components/hooks.ts:36](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/hooks.ts#L36)*

**Returns:** *number*

___

### `Const` useCarouselIsPlaying

▸ **useCarouselIsPlaying**(): *any*

*Defined in [bodiless-carousel/src/components/hooks.ts:42](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/hooks.ts#L42)*

type gap in the contrib library

**`todo`** suggest a patch to the contrib library

**Returns:** *any*

___

### `Const` useCarouselSlideIndex

▸ **useCarouselSlideIndex**(): *number*

*Defined in [bodiless-carousel/src/components/hooks.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/hooks.ts#L44)*

**Returns:** *number*

___

### `Const` useCarouselState

▸ **useCarouselState**(): *CarouselState*

*Defined in [bodiless-carousel/src/components/hooks.ts:23](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/hooks.ts#L23)*

implemented per pure-react-carousel doc

**`see`** https://github.com/express-labs/pure-react-carousel#hooks-and-usecontext

**Returns:** *CarouselState*

___

### `Const` useIsCarouselItemActive

▸ **useIsCarouselItemActive**(): *boolean*

*Defined in [bodiless-carousel/src/components/hooks.ts:49](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/hooks.ts#L49)*

**Returns:** *boolean*

___

### `Const` withAutoPlayInterval

▸ **withAutoPlayInterval**(`interval`: number): *function & object*

*Defined in [bodiless-carousel/src/components/token.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L103)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`interval` | number | 3000 |

**Returns:** *function & object*

___

### `Const` withCarouselDots

▸ **withCarouselDots**(`nodeKeys?`: WithNodeKeyProps): *function & object*

*Defined in [bodiless-carousel/src/components/token.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |

**Returns:** *function & object*

___

### `Const` withCarouselItemTabIndex

▸ **withCarouselItemTabIndex**(`Component`: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *FunctionComponent‹any›*

*Defined in [bodiless-carousel/src/components/token.tsx:109](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/token.tsx#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meta" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *FunctionComponent‹any›*

___

### `Const` withTotalSlides

▸ **withTotalSlides**(`nodeKeys?`: WithNodeKeyProps): *Token*

*Defined in [bodiless-carousel/src/components/withTotalSlides.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/withTotalSlides.tsx#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |

**Returns:** *Token*

## Object literals

### `Const` carouselComponents

### ▪ **carouselComponents**: *object*

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L41)*

###  ButtonBack

• **ButtonBack**: *FunctionComponent‹object›* = Fragment

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L48)*

###  ButtonNext

• **ButtonNext**: *FunctionComponent‹object›* = Fragment

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:49](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L49)*

###  ButtonPlay

• **ButtonPlay**: *FunctionComponent‹object›* = Fragment

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:50](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L50)*

###  ControlsWrapper

• **ControlsWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L46)*

###  Dots

• **Dots**: *FunctionComponent‹object›* = Fragment

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L47)*

###  Slide

• **Slide**: *ComponentClass‹SlideProps‹›, any›*

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:45](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L45)*

###  Slider

• **Slider**: *ComponentClass‹any, any› & object | FunctionComponent‹any› & object* = stylable(Slider)

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L44)*

###  SliderWrapper

• **SliderWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L43)*

###  Wrapper

• **Wrapper**: *ComponentClass‹any, any› & object | FunctionComponent‹any› & object* = stylable(CarouselProvider)

*Defined in [bodiless-carousel/src/components/CarouselClean.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-carousel/src/components/CarouselClean.tsx#L42)*
