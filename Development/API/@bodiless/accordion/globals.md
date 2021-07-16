[@bodiless/accordion](README.md) › [Globals](globals.md)

# @bodiless/accordion

## Index

### Type aliases

* [AccordionBodyBaseProps](globals.md#accordionbodybaseprops)
* [AccordionBodyComponents](globals.md#accordionbodycomponents)
* [AccordionBodyProps](globals.md#accordionbodyprops)
* [AccordionComponents](globals.md#accordioncomponents)
* [AccordionContextType](globals.md#accordioncontexttype)
* [AccordionMeta](globals.md#accordionmeta)
* [AccordionProps](globals.md#accordionprops)
* [AccordionProviderProps](globals.md#accordionproviderprops)
* [AccordionTitleBaseProps](globals.md#accordiontitlebaseprops)
* [AccordionTitleComponents](globals.md#accordiontitlecomponents)
* [AccordionTitleProps](globals.md#accordiontitleprops)
* [SingleAccordionComponents](globals.md#singleaccordioncomponents)

### Variables

* [AccordionBodyClean](globals.md#const-accordionbodyclean)
* [AccordionClean](globals.md#const-accordionclean)
* [AccordionContext](globals.md#const-accordioncontext)
* [AccordionTitleClean](globals.md#const-accordiontitleclean)
* [SingleAccordion](globals.md#const-singleaccordion)
* [SingleAccordionBase](globals.md#const-singleaccordionbase)
* [SingleAccordionClean](globals.md#const-singleaccordionclean)
* [TestableSingleAccordion](globals.md#const-testablesingleaccordion)
* [asAccordionBodyContent](globals.md#const-asaccordionbodycontent)
* [asAccordionBodyWrapper](globals.md#const-asaccordionbodywrapper)
* [asAccordionBorder](globals.md#const-asaccordionborder)
* [asAccordionDefaultBorder](globals.md#const-asaccordiondefaultborder)
* [asAccordionDefaultExpanded](globals.md#const-asaccordiondefaultexpanded)
* [asAccordionFocus](globals.md#const-asaccordionfocus)
* [asAccordionIcon](globals.md#const-asaccordionicon)
* [asAccordionLabel](globals.md#const-asaccordionlabel)
* [asAccordionTitleWrapper](globals.md#const-asaccordiontitlewrapper)
* [asNonExpandingAccordion](globals.md#const-asnonexpandingaccordion)
* [asSingleAccordion](globals.md#const-assingleaccordion)
* [asTestableAccordion](globals.md#const-astestableaccordion)
* [asTestableSingleAccordion](globals.md#const-astestablesingleaccordion)
* [withDisableExpandOnClick](globals.md#const-withdisableexpandonclick)

### Functions

* [AccordionBase](globals.md#const-accordionbase)
* [AccordionBodyBase](globals.md#const-accordionbodybase)
* [AccordionKeyPressHandler](globals.md#const-accordionkeypresshandler)
* [AccordionProvider](globals.md#const-accordionprovider)
* [AccordionTitleBase](globals.md#const-accordiontitlebase)
* [asAccordionBody](globals.md#const-asaccordionbody)
* [asAccordionTitle](globals.md#const-asaccordiontitle)
* [asAccordionWrapper](globals.md#const-asaccordionwrapper)
* [getAccordionMeta](globals.md#const-getaccordionmeta)
* [isAccordionCollapsible](globals.md#const-isaccordioncollapsible)
* [isAccordionContracted](globals.md#const-isaccordioncontracted)
* [isAccordionExpanded](globals.md#const-isaccordionexpanded)
* [isAccordionFocusedIn](globals.md#const-isaccordionfocusedin)
* [isAccordionFocusedOut](globals.md#const-isaccordionfocusedout)
* [useAccordionContext](globals.md#const-useaccordioncontext)

### Object literals

* [AccordionBodyComponentsStart](globals.md#const-accordionbodycomponentsstart)
* [AccordionComponentsStart](globals.md#const-accordioncomponentsstart)
* [accordionTitleComponents](globals.md#const-accordiontitlecomponents)
* [singleAccordionComponentStart](globals.md#const-singleaccordioncomponentstart)

## Type aliases

###  AccordionBodyBaseProps

Ƭ **AccordionBodyBaseProps**: *Omit‹[AccordionBodyProps](globals.md#accordionbodyprops), "design"› & DesignableComponentsProps‹[AccordionBodyComponents](globals.md#accordionbodycomponents)›*

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L31)*

___

###  AccordionBodyComponents

Ƭ **AccordionBodyComponents**: *object*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L46)*

#### Type declaration:

* **Content**: *ComponentType‹StylableProps & HTMLProps‹HTMLDivElement››*

* **Wrapper**: *ComponentType‹StylableProps & HTMLProps‹HTMLDivElement››*

___

###  AccordionBodyProps

Ƭ **AccordionBodyProps**: *DesignableProps‹[AccordionBodyComponents](globals.md#accordionbodycomponents)›*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:52](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L52)*

___

###  AccordionComponents

Ƭ **AccordionComponents**: *object*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:54](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L54)*

#### Type declaration:

* **Body**: *ComponentType‹[AccordionBodyProps](globals.md#accordionbodyprops)›*

* **Title**: *ComponentType‹[AccordionTitleProps](globals.md#accordiontitleprops)›*

* **Wrapper**: *ComponentType‹HTMLProps‹any› & [AccordionProviderProps](globals.md#accordionproviderprops)›*

___

###  AccordionContextType

Ƭ **AccordionContextType**: *object*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L31)*

#### Type declaration:

* **getMeta**: *[AccordionMeta](globals.md#accordionmeta)*

* **hasFocus**: *boolean*

* **isCollapsible**: *boolean*

* **isExpanded**: *boolean*

* **setExpanded**: *React.Dispatch‹React.SetStateAction‹boolean››*

* **setFocus**: *React.Dispatch‹React.SetStateAction‹boolean››*

___

###  AccordionMeta

Ƭ **AccordionMeta**: *object*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:18](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L18)*

#### Type declaration:

* **accordionContentId**: *string*

* **accordionId**: *string*

* **accordionTitleId**: *string*

___

###  AccordionProps

Ƭ **AccordionProps**: *DesignableComponentsProps‹[AccordionComponents](globals.md#accordioncomponents)›*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:60](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L60)*

___

###  AccordionProviderProps

Ƭ **AccordionProviderProps**: *object*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L24)*

#### Type declaration:

* **collapsible**? : *undefined | false | true*

* **expanded**? : *undefined | false | true*

* **focus**? : *undefined | false | true*

* **meta**? : *[AccordionMeta](globals.md#accordionmeta)*

___

###  AccordionTitleBaseProps

Ƭ **AccordionTitleBaseProps**: *Omit‹[AccordionTitleProps](globals.md#accordiontitleprops), "design"› & DesignableComponentsProps‹[AccordionTitleComponents](globals.md#accordiontitlecomponents)›*

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L41)*

___

###  AccordionTitleComponents

Ƭ **AccordionTitleComponents**: *object*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L40)*

#### Type declaration:

* **Icon**: *ComponentType‹StylableProps & HTMLProps‹HTMLSpanElement››*

* **Label**: *ComponentType‹StylableProps & HTMLProps‹HTMLDivElement››*

* **Wrapper**: *ComponentType‹StylableProps & HTMLProps‹HTMLDivElement››*

___

###  AccordionTitleProps

Ƭ **AccordionTitleProps**: *DesignableProps‹[AccordionTitleComponents](globals.md#accordiontitlecomponents)›*

*Defined in [packages/bodiless-accordion/src/components/types.tsx:51](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/types.tsx#L51)*

___

###  SingleAccordionComponents

Ƭ **SingleAccordionComponents**: *object*

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:31](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L31)*

#### Type declaration:

* **Body**: *ComponentType‹StylableProps›*

* **BodyWrapper**: *ComponentType‹StylableProps›*

* **Title**: *ComponentType‹StylableProps›*

* **TitleWrapper**: *ComponentType‹StylableProps›*

* **Wrapper**: *ComponentType‹StylableProps›*

## Variables

### `Const` AccordionBodyClean

• **AccordionBodyClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(AccordionBodyComponentsStart, 'AccordionBody')(AccordionBodyBase)

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L55)*

___

### `Const` AccordionClean

• **AccordionClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(AccordionComponentsStart, 'Accordion')(AccordionBase)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tsx:71](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tsx#L71)*

___

### `Const` AccordionContext

• **AccordionContext**: *Context‹object›* = createContext<AccordionContextType>({
  isCollapsible: true,
  isExpanded: false,
  setExpanded: () => null,
  hasFocus: false,
  setFocus: () => null,
  getMeta: {
    accordionId: '',
    accordionTitleId: '',
    accordionContentId: '',
  },
})

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L23)*

___

### `Const` AccordionTitleClean

• **AccordionTitleClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(accordionTitleComponents, 'AccordionTitle')(AccordionTitleBase)

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:76](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L76)*

___

### `Const` SingleAccordion

• **SingleAccordion**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asToken(
  asSingleAccordion,
  withNode,
)(SingleAccordionClean)

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:118](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L118)*

___

### `Const` SingleAccordionBase

• **SingleAccordionBase**: *FunctionComponent‹any›* = observer(({
  components, expanded, expandedStyle = null, ...rest
}: any) => {
  const EXPANDED = 'expanded';
  const COLLAPSED = 'collapsed';
  const initialState = expanded ? EXPANDED : COLLAPSED;
  const [accordionState, setAccordionState] = useState(initialState);
  const { isEdit } = useEditContext();

  const toggleAccordionState = () => {
    setAccordionState(accordionState === EXPANDED ? COLLAPSED : EXPANDED);
  };

  const {
    Wrapper,
    TitleWrapper,
    Title,
    BodyWrapper,
    Body,
  } = components;

  return (
    <Wrapper className={[accordionState]} {...rest}>
      <TitleWrapper
        onClick={isEdit ? undefined : toggleAccordionState}
        className={[
          'flex',
          'justify-between',
          'select-none',
          (accordionState === EXPANDED && expandedStyle) || '',
        ]}
      >
        <Title />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <span
          tabIndex={0}
          role="button"
          onClick={toggleAccordionState}
          className="material-icons cursor-pointer select-none"
          data-accordion-element="accordion-icon"
          data-accordion-icon={accordionState === COLLAPSED ? 'expand' : 'collapse'}
        >
          {accordionState === COLLAPSED ? 'add' : 'remove'}
        </span>
      </TitleWrapper>
      <BodyWrapper className={accordionState === COLLAPSED ? 'hidden' : 'block'}>
        <Body />
      </BodyWrapper>
    </Wrapper>
  );
})

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:47](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L47)*

___

### `Const` SingleAccordionClean

• **SingleAccordionClean**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = designable(singleAccordionComponentStart, 'Accordion')(SingleAccordionBase)

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L116)*

___

### `Const` TestableSingleAccordion

• **TestableSingleAccordion**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asToken(
  asTestableSingleAccordion,
  withNode,
)(SingleAccordionClean)

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:123](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L123)*

___

### `Const` asAccordionBodyContent

• **asAccordionBodyContent**: *function & object* = asToken(
  addClasses('truncate'),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:96](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L96)*

asAccordionBodyContent truncates accordion body content

___

### `Const` asAccordionBodyWrapper

• **asAccordionBodyWrapper**: *function & object* = asToken(
  addClassesIf(isAccordionExpanded)('block'),
  addClassesIf(isAccordionContracted)('hidden'),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:88](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L88)*

asAccordionBodyWrapper controls accordion body visibility according to
expand/collapse behavior

___

### `Const` asAccordionBorder

• **asAccordionBorder**: *function & object* = asToken(
  withDesign({
    Title: withDesign({
      Wrapper: asToken(
        asAccordionDefaultBorder,
      ),
    }),
  }),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:103](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L103)*

asAccordionBorder borders accordion title

___

### `Const` asAccordionDefaultBorder

• **asAccordionDefaultBorder**: *function & object* = asToken(
  addClasses('border border-solid border-black'),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:48](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L48)*

asAccordionDefaultBorder provides basic border style

___

### `Const` asAccordionDefaultExpanded

• **asAccordionDefaultExpanded**: *function & object* = asToken(
  addProps({ expanded: 'true' }),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L55)*

asAccordionDefaultExpanded provides expanded property

___

### `Const` asAccordionFocus

• **asAccordionFocus**: *function & object* = asToken(
  withDesign({
    // Title must be full bordered in case accordion is contracted,
    // but no need for bottom border when accordion is expanded
    Title: withDesign({
      Wrapper: asToken(
        asAccordionDefaultBorder,
        addClassesIf(isAccordionExpanded)('border-b-0'),
        removeClassesIf(isAccordionFocusedOut)('border'),
      ),
    }),
    // Body complements title bordering look when accordion is expanded
    Body: withDesign({
      Wrapper: asToken(
        asAccordionDefaultBorder,
        addClasses('border-t-0'),
        removeClassesIf(isAccordionFocusedOut)('border'),
      ),
    }),
  }),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:116](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L116)*

asAccordionFocus adds border around the accordion component on focus event

___

### `Const` asAccordionIcon

• **asAccordionIcon**: *function & object* = asToken(
  addClasses('material-icons cursor-pointer right-0'),
  addProps({ 'data-accordion-element': 'accordion-icon' }),
  addPropsIf(isAccordionContracted)({ 'aria-label': 'Expand Accordion' }),
  addPropsIf(isAccordionExpanded)({ 'aria-label': 'Collapse Accordion' }),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:63](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L63)*

asAccordionIcon provides basic icon style for accordion title,
as well as accessibility label support

___

### `Const` asAccordionLabel

• **asAccordionLabel**: *function & object* = asToken(
  addClasses('w-full'),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L80)*

asAccordionLabel makes title label full

___

### `Const` asAccordionTitleWrapper

• **asAccordionTitleWrapper**: *function & object* = asToken(
  addClasses('flex items-center justify-between relative'),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:73](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L73)*

asAccordionTitleWrapper positions accordion title wrapper

___

### `Const` asNonExpandingAccordion

• **asNonExpandingAccordion**: *function & object* = asToken(
  withDesign({
    Wrapper: asToken(
      asAccordionDefaultExpanded,
      addClasses('pointer-events-none'),
      addPropsIf(isAccordionExpanded)({ 'aria-disabled': 'true' }),
      // Pointer events none blocks user to perform any interations on
      // the component, so it must be removed from edit mode
      ifEditable(
        removeClasses('pointer-events-none'),
      ),
    ),
    // Removes icon wrapper from accordion title
    Title: withDesign({
      Icon: asToken(
        // Using replaceWith instead of remove because the last
        // only pulls out the span tag, but keeps the text currently inside
        replaceWith(() => null),
      ),
    }),
  }),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:142](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L142)*

asNonExpandingAccordion provides default expanded accordion and
prevents users from collapsing it

___

### `Const` asSingleAccordion

• **asSingleAccordion**: *function & object* = asToken(
  withDesign({
    Title: asEditable('title', 'SingleAccordion Title Text'),
    Body: asEditable('body', 'SingleAccordion Body Text'),
  }),
)

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:99](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L99)*

___

### `Const` asTestableAccordion

• **asTestableAccordion**: *function & object* = asToken(
  withDesign({
    Wrapper: addProps({ 'data-accordion-element': 'accordion' }),
    Title: withDesign({
      Wrapper: addProps({ 'data-accordion-element': 'accordion-title-wrapper' }),
      Label: addProps({ 'data-accordion-element': 'accordion-title' }),
    }),
    Body: withDesign({
      Wrapper: addProps({ 'data-accordion-element': 'accordion-body-wrapper' }),
      Content: addProps({ 'data-accordion-element': 'accordion-body' }),
    }),
  }),
)

*Defined in [packages/bodiless-accordion/src/components/asTestableAccordion.tsx:16](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/asTestableAccordion.tsx#L16)*

___

### `Const` asTestableSingleAccordion

• **asTestableSingleAccordion**: *function & object* = asToken(
  withDesign({
    Wrapper: addProps({ 'data-accordion-element': 'accordion' }),
    TitleWrapper: addProps({ 'data-accordion-element': 'accordion-title-wrapper' }),
    Title: addProps({ 'data-accordion-element': 'accordion-title' }),
    BodyWrapper: addProps({ 'data-accordion-element': 'accordion-body-wrapper' }),
    Body: addProps({ 'data-accordion-element': 'accordion-body' }),
  }),
)

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:106](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L106)*

___

### `Const` withDisableExpandOnClick

• **withDisableExpandOnClick**: *function & object* = asToken(
  ifEditable(
    withExtendHandler('onClick', () => (e: MouseEvent) => e.stopPropagation()),
  ),
)

*Defined in [packages/bodiless-accordion/src/components/Accordion.tokens.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tokens.tsx#L39)*

withDisableExpandOnClick stops accordion behavior on edit mode

## Functions

### `Const` AccordionBase

▸ **AccordionBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-accordion/src/components/Accordion.tsx:29](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tsx#L29)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`props` | props |

**Returns:** *Element‹›*

___

### `Const` AccordionBodyBase

▸ **AccordionBodyBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:34](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`components` | object |

**Returns:** *Element‹›*

___

### `Const` AccordionKeyPressHandler

▸ **AccordionKeyPressHandler**(`event`: KeyboardEvent, `context`: [AccordionContextType](globals.md#accordioncontexttype)): *void*

*Defined in [packages/bodiless-accordion/src/components/AccordionKeyboard.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionKeyboard.tsx#L26)*

AccordionKeyPressHandler handles enter/space key press events to
provide accessibility support for accordions expanding and collapsing behaviors

**Parameters:**

Name | Type |
------ | ------ |
`event` | KeyboardEvent |
`context` | [AccordionContextType](globals.md#accordioncontexttype) |

**Returns:** *void*

___

### `Const` AccordionProvider

▸ **AccordionProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L38)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› | - |
`collapsible` | boolean | true |
`expanded` | boolean | false |
`focus` | boolean | false |
`meta` | object | - |

**Returns:** *Element‹›*

___

### `Const` AccordionTitleBase

▸ **AccordionTitleBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L43)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`components` | object |

**Returns:** *Element‹›*

___

### `Const` asAccordionBody

▸ **asAccordionBody**(`Component`: "symbol" | "object" | "meta" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *AsAccordionBody*

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:57](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "meta" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *AsAccordionBody*

___

### `Const` asAccordionTitle

▸ **asAccordionTitle**(`Component`: "symbol" | "object" | "meta" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *AsAccordionTitle*

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:78](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "meta" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *AsAccordionTitle*

___

### `Const` asAccordionWrapper

▸ **asAccordionWrapper**(`Component`: "symbol" | "object" | "meta" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | ComponentClass‹P, any› & object | FunctionComponent‹P› & object): *AsAccordionWrapper*

*Defined in [packages/bodiless-accordion/src/components/AccordionWrapper.tsx:19](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionWrapper.tsx#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | "symbol" &#124; "object" &#124; "meta" &#124; "a" &#124; "abbr" &#124; "address" &#124; "area" &#124; "article" &#124; "aside" &#124; "audio" &#124; "b" &#124; "base" &#124; "bdi" &#124; "bdo" &#124; "big" &#124; "blockquote" &#124; "body" &#124; "br" &#124; "button" &#124; "canvas" &#124; "caption" &#124; "cite" &#124; "code" &#124; "col" &#124; "colgroup" &#124; "data" &#124; "datalist" &#124; "dd" &#124; "del" &#124; "details" &#124; "dfn" &#124; "dialog" &#124; "div" &#124; "dl" &#124; "dt" &#124; "em" &#124; "embed" &#124; "fieldset" &#124; "figcaption" &#124; "figure" &#124; "footer" &#124; "form" &#124; "h1" &#124; "h2" &#124; "h3" &#124; "h4" &#124; "h5" &#124; "h6" &#124; "head" &#124; "header" &#124; "hgroup" &#124; "hr" &#124; "html" &#124; "i" &#124; "iframe" &#124; "img" &#124; "input" &#124; "ins" &#124; "kbd" &#124; "keygen" &#124; "label" &#124; "legend" &#124; "li" &#124; "link" &#124; "main" &#124; "map" &#124; "mark" &#124; "menu" &#124; "menuitem" &#124; "meter" &#124; "nav" &#124; "noindex" &#124; "noscript" &#124; "ol" &#124; "optgroup" &#124; "option" &#124; "output" &#124; "p" &#124; "param" &#124; "picture" &#124; "pre" &#124; "progress" &#124; "q" &#124; "rp" &#124; "rt" &#124; "ruby" &#124; "s" &#124; "samp" &#124; "slot" &#124; "script" &#124; "section" &#124; "select" &#124; "small" &#124; "source" &#124; "span" &#124; "strong" &#124; "style" &#124; "sub" &#124; "summary" &#124; "sup" &#124; "table" &#124; "template" &#124; "tbody" &#124; "td" &#124; "textarea" &#124; "tfoot" &#124; "th" &#124; "thead" &#124; "time" &#124; "title" &#124; "tr" &#124; "track" &#124; "u" &#124; "ul" &#124; "var" &#124; "video" &#124; "wbr" &#124; "webview" &#124; "svg" &#124; "animate" &#124; "animateMotion" &#124; "animateTransform" &#124; "circle" &#124; "clipPath" &#124; "defs" &#124; "desc" &#124; "ellipse" &#124; "feBlend" &#124; "feColorMatrix" &#124; "feComponentTransfer" &#124; "feComposite" &#124; "feConvolveMatrix" &#124; "feDiffuseLighting" &#124; "feDisplacementMap" &#124; "feDistantLight" &#124; "feDropShadow" &#124; "feFlood" &#124; "feFuncA" &#124; "feFuncB" &#124; "feFuncG" &#124; "feFuncR" &#124; "feGaussianBlur" &#124; "feImage" &#124; "feMerge" &#124; "feMergeNode" &#124; "feMorphology" &#124; "feOffset" &#124; "fePointLight" &#124; "feSpecularLighting" &#124; "feSpotLight" &#124; "feTile" &#124; "feTurbulence" &#124; "filter" &#124; "foreignObject" &#124; "g" &#124; "image" &#124; "line" &#124; "linearGradient" &#124; "marker" &#124; "mask" &#124; "metadata" &#124; "mpath" &#124; "path" &#124; "pattern" &#124; "polygon" &#124; "polyline" &#124; "radialGradient" &#124; "rect" &#124; "stop" &#124; "switch" &#124; "text" &#124; "textPath" &#124; "tspan" &#124; "use" &#124; "view" &#124; ComponentClass‹P, any› & object &#124; FunctionComponent‹P› & object |

**Returns:** *AsAccordionWrapper*

___

### `Const` getAccordionMeta

▸ **getAccordionMeta**(): *object*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:65](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L65)*

**Returns:** *object*

* **accordionContentId**: *string*

* **accordionId**: *string*

* **accordionTitleId**: *string*

___

### `Const` isAccordionCollapsible

▸ **isAccordionCollapsible**(): *boolean*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:66](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L66)*

**Returns:** *boolean*

___

### `Const` isAccordionContracted

▸ **isAccordionContracted**(): *boolean*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:68](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L68)*

**Returns:** *boolean*

___

### `Const` isAccordionExpanded

▸ **isAccordionExpanded**(): *boolean*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L67)*

**Returns:** *boolean*

___

### `Const` isAccordionFocusedIn

▸ **isAccordionFocusedIn**(): *boolean*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L69)*

**Returns:** *boolean*

___

### `Const` isAccordionFocusedOut

▸ **isAccordionFocusedOut**(): *boolean*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:70](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L70)*

**Returns:** *boolean*

___

### `Const` useAccordionContext

▸ **useAccordionContext**(): *object*

*Defined in [packages/bodiless-accordion/src/components/AccordionContext.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionContext.tsx#L36)*

**Returns:** *object*

* **getMeta**: *[AccordionMeta](globals.md#accordionmeta)*

* **hasFocus**: *boolean*

* **isCollapsible**: *boolean*

* **isExpanded**: *boolean*

* **setExpanded**: *React.Dispatch‹React.SetStateAction‹boolean››*

* **setFocus**: *React.Dispatch‹React.SetStateAction‹boolean››*

## Object literals

### `Const` AccordionBodyComponentsStart

### ▪ **AccordionBodyComponentsStart**: *object*

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L26)*

###  Content

• **Content**: *ComponentClass‹object & HTMLProps‹HTMLDivElement›, any› & object | FunctionComponent‹object & HTMLProps‹HTMLDivElement›› & object* = asAccordionBodyContent(Div)

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:28](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L28)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & HTMLProps‹HTMLDivElement›, any› & object | FunctionComponent‹object & HTMLProps‹HTMLDivElement›› & object* = asAccordionBodyWrapper(Div)

*Defined in [packages/bodiless-accordion/src/components/AccordionBody.tsx:27](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionBody.tsx#L27)*

___

### `Const` AccordionComponentsStart

### ▪ **AccordionComponentsStart**: *object*

*Defined in [packages/bodiless-accordion/src/components/Accordion.tsx:23](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tsx#L23)*

###  Body

• **Body**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = AccordionBodyClean

*Defined in [packages/bodiless-accordion/src/components/Accordion.tsx:26](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tsx#L26)*

###  Title

• **Title**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = AccordionTitleClean

*Defined in [packages/bodiless-accordion/src/components/Accordion.tsx:25](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tsx#L25)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-accordion/src/components/Accordion.tsx:24](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/Accordion.tsx#L24)*

___

### `Const` accordionTitleComponents

### ▪ **accordionTitleComponents**: *object*

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:35](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L35)*

###  Icon

• **Icon**: *ComponentClass‹object & HTMLProps‹HTMLSpanElement›, any› & object | FunctionComponent‹object & HTMLProps‹HTMLSpanElement›› & object* = asAccordionIcon(Span)

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L37)*

###  Label

• **Label**: *ComponentClass‹object & HTMLProps‹HTMLDivElement›, any› & object | FunctionComponent‹object & HTMLProps‹HTMLDivElement›› & object* = asAccordionLabel(Div)

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:38](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L38)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & HTMLProps‹HTMLDivElement›, any› & object | FunctionComponent‹object & HTMLProps‹HTMLDivElement›› & object* = asAccordionTitleWrapper(Div)

*Defined in [packages/bodiless-accordion/src/components/AccordionTitle.tsx:36](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/AccordionTitle.tsx#L36)*

___

### `Const` singleAccordionComponentStart

### ▪ **singleAccordionComponentStart**: *object*

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:39](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L39)*

###  Body

• **Body**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L44)*

###  BodyWrapper

• **BodyWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:43](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L43)*

###  Title

• **Title**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = H2

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:42](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L42)*

###  TitleWrapper

• **TitleWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:41](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L41)*

###  Wrapper

• **Wrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Div

*Defined in [packages/bodiless-accordion/src/components/SingleAccordion.tsx:40](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-accordion/src/components/SingleAccordion.tsx#L40)*
