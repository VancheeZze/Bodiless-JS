[@bodiless/youtube](README.md) › [Globals](globals.md)

# @bodiless/youtube

## Index

### Namespaces

* [__global](modules/__global.md)

### Type aliases

* [Props](globals.md#props)
* [YouTubePlayerContextData](globals.md#youtubeplayercontextdata)
* [YouTubePlayerSettings](globals.md#youtubeplayersettings)

### Variables

* [ActivatorWrapper](globals.md#const-activatorwrapper)
* [YouTube](globals.md#const-youtube)
* [YouTubePlayerAPIContext](globals.md#const-youtubeplayerapicontext)
* [asBaseBodilessYouTube](globals.md#const-asbasebodilessyoutube)
* [asBaseResponsiveYouTube](globals.md#const-asbaseresponsiveyoutube)
* [asResponsiveYouTube](globals.md#const-asresponsiveyoutube)
* [isValidYouTubeUrl](globals.md#const-isvalidyoutubeurl)
* [withFullScreenEnabled](globals.md#const-withfullscreenenabled)
* [withYouTubeFormHeader](globals.md#const-withyoutubeformheader)
* [withYouTubeFormSrcSnippet](globals.md#const-withyoutubeformsrcsnippet)

### Functions

* [YouTubePlayerAPIProvider](globals.md#const-youtubeplayerapiprovider)
* [adjustLoopPlayerSettings](globals.md#const-adjustloopplayersettings)
* [asBodilessYouTube](globals.md#const-asbodilessyoutube)
* [extractVideoIdFromUrl](globals.md#const-extractvideoidfromurl)
* [ifNotYouTubePlayerAPILoaded](globals.md#const-ifnotyoutubeplayerapiloaded)
* [ifYouTubePlayerAPILoaded](globals.md#const-ifyoutubeplayerapiloaded)
* [useYouTubePlayerAPI](globals.md#const-useyoutubeplayerapi)
* [withYouTubePlayerAPI](globals.md#const-withyoutubeplayerapi)
* [withYouTubePlayerSettings](globals.md#const-withyoutubeplayersettings)
* [withYouTubePlayerTransformer](globals.md#const-withyoutubeplayertransformer)

## Type aliases

###  Props

Ƭ **Props**: *IframeProps & object*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:46](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L46)*

___

###  YouTubePlayerContextData

Ƭ **YouTubePlayerContextData**: *object*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:104](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L104)*

#### Type declaration:

* **isLoaded**: *boolean*

___

###  YouTubePlayerSettings

Ƭ **YouTubePlayerSettings**: *object*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:30](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L30)*

YouTube embed player parameters

**`see`** https://developers.google.com/youtube/player_parameters#Parameters

#### Type declaration:

* **autoplay**: *boolean | 0 | 1*

* **cc_lang_pref**: *string*

* **cc_load_policy**: *boolean | 0 | 1*

* **controls**: *boolean | 0 | 1*

* **enablejsapi**: *boolean | 0 | 1*

* **fs**: *boolean | 0 | 1*

* **loop**: *boolean | 0 | 1*

* **modestbranding**: *boolean | 0 | 1*

* **mute**: *boolean | 0 | 1*

* **origin**: *string*

* **playlist**: *string*

* **rel**: *boolean | 0 | 1*

* **version**: *number*

## Variables

### `Const` ActivatorWrapper

• **ActivatorWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('absolute w-full h-full inset-0')(Div)

*Defined in [packages/bodiless-youtube/src/ResponsiveYouTube.tsx:37](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/ResponsiveYouTube.tsx#L37)*

___

### `Const` YouTube

• **YouTube**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = asBodilessYouTube()('iframe')

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:205](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L205)*

___

### `Const` YouTubePlayerAPIContext

• **YouTubePlayerAPIContext**: *Context‹object›* = React.createContext<YouTubePlayerContextData>({
  isLoaded: false,
})

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:108](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L108)*

___

### `Const` asBaseBodilessYouTube

• **asBaseBodilessYouTube**: *AsBodiless‹[Props](globals.md#props), IframeData›* = asBaseBodilessIframe

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:192](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L192)*

___

### `Const` asBaseResponsiveYouTube

• **asBaseResponsiveYouTube**: *function & object* = withDesign({
  Item: flowRight(
    replaceWith(
      flowRight(
        ifEditable(withoutPointerEvents),
        asBodilessYouTube(),
      )(Iframe),
    ),
  ),
})

*Defined in [packages/bodiless-youtube/src/ResponsiveYouTube.tsx:44](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/ResponsiveYouTube.tsx#L44)*

___

### `Const` asResponsiveYouTube

• **asResponsiveYouTube**: *function & object* = withDesign({
  Item: flowRight(
    replaceWith(
      flowRight(
        ifEditable(withoutPointerEvents),
        asBodilessYouTube(),
        withYouTubeFormHeader,
        withYouTubeFormSrcSnippet,
        withYouTubePlayerTransformer,
      )(Iframe),
    ),
  ),
})

*Defined in [packages/bodiless-youtube/src/ResponsiveYouTube.tsx:55](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/ResponsiveYouTube.tsx#L55)*

___

### `Const` isValidYouTubeUrl

• **isValidYouTubeUrl**: *[extractVideoIdFromUrl](globals.md#const-extractvideoidfromurl)* = extractVideoIdFromUrl

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:67](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L67)*

___

### `Const` withFullScreenEnabled

• **withFullScreenEnabled**: *function & object* = addProps({ allowFullScreen: 'allowFullScreen' })

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:75](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L75)*

___

### `Const` withYouTubeFormHeader

• **withYouTubeFormHeader**: *function* = withFormHeader({
  title: 'YouTube Configuration',
})

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:188](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L188)*

#### Type declaration:

▸ (`Component`: CT): *function*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT |

▸ (`props`: any): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

___

### `Const` withYouTubeFormSrcSnippet

• **withYouTubeFormSrcSnippet**: *function & object* = withFormSnippet({
  nodeKeys: 'src',
  defaultData: { src: '' },
  snippetOptions: {
    renderForm: ({ formState, scope }) => {
      const errors = scope ? formState.errors[scope] : formState.error;
      const {
        ComponentFormLabel,
        ComponentFormText,
        ComponentFormWarning,
      } = useMenuOptionUI();
      const validate = useCallback(
        (value: string) => (!value || !isValidYouTubeUrl(value)
          ? 'Invalid YouTube URL specified.'
          : undefined),
        [],
      );
      return (
        <React.Fragment key="src">
          <ComponentFormLabel htmlFor="src">URL</ComponentFormLabel>
          <ComponentFormText
            field="src"
            placeholder="https://"
            validate={validate}
            validateOnChange
            validateOnBlur
          />
          {errors && errors.src && (
          <ComponentFormWarning>{errors.src}</ComponentFormWarning>
          )}
        </React.Fragment>
      );
    },
  },
})

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:152](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L152)*

## Functions

### `Const` YouTubePlayerAPIProvider

▸ **YouTubePlayerAPIProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:112](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L112)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | any |

**Returns:** *Element‹›*

___

### `Const` adjustLoopPlayerSettings

▸ **adjustLoopPlayerSettings**(`settings`: Partial‹[YouTubePlayerSettings](globals.md#youtubeplayersettings)›, `videoId`: string): *object | object | object*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:80](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | Partial‹[YouTubePlayerSettings](globals.md#youtubeplayersettings)› |
`videoId` | string |

**Returns:** *object | object | object*

___

### `Const` asBodilessYouTube

▸ **asBodilessYouTube**(`nodeKeys?`: undefined | string | object, `defaultData?`: undefined | object, `useOverrides?`: undefined | function): *function*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:194](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | undefined &#124; string &#124; object |
`defaultData?` | undefined &#124; object |
`useOverrides?` | undefined &#124; function |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` extractVideoIdFromUrl

▸ **extractVideoIdFromUrl**(`url`: string): *undefined | string*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:61](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *undefined | string*

___

### `Const` ifNotYouTubePlayerAPILoaded

▸ **ifNotYouTubePlayerAPILoaded**(): *boolean*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:150](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L150)*

**Returns:** *boolean*

___

### `Const` ifYouTubePlayerAPILoaded

▸ **ifYouTubePlayerAPILoaded**(): *boolean*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:149](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L149)*

**Returns:** *boolean*

___

### `Const` useYouTubePlayerAPI

▸ **useYouTubePlayerAPI**(): *object*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:148](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L148)*

**Returns:** *object*

* **isLoaded**: *boolean*

___

### `Const` withYouTubePlayerAPI

▸ **withYouTubePlayerAPI**(`Component`: ComponentType‹any›): *WithYouTubePlayerAPI*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:138](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *WithYouTubePlayerAPI*

___

### `Const` withYouTubePlayerSettings

▸ **withYouTubePlayerSettings**(`settings`: Partial‹[YouTubePlayerSettings](globals.md#youtubeplayersettings)›): *function & object*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:69](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | Partial‹[YouTubePlayerSettings](globals.md#youtubeplayersettings)› |

**Returns:** *function & object*

___

### `Const` withYouTubePlayerTransformer

▸ **withYouTubePlayerTransformer**(`Component`: ComponentType‹[Props](globals.md#props)›): *WithYouTubePlayerTransformer*

*Defined in [packages/bodiless-youtube/src/YouTube.tsx:85](https://github.com/VancheeZze/Bodiless-JS/blob/20bd3e1a/packages/bodiless-youtube/src/YouTube.tsx#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹[Props](globals.md#props)› |

**Returns:** *WithYouTubePlayerTransformer*
