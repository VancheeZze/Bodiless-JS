[@bodiless/components](../README.md) › [Globals](../globals.md) › [DefaultNormalHref](defaultnormalhref.md)

# Class: DefaultNormalHref

Normalizer for link hrefs.
- Treats links with explicit hosts as external and doesn't touch them. For internal
- Appends or strips trailing slashes per option (but never appends for file links).
- Prepends slash for links which are not explicitly relative (begin with # or .).

## Hierarchy

* **DefaultNormalHref**

## Implements

* [NormalHref](../interfaces/normalhref.md)

## Index

### Constructors

* [constructor](defaultnormalhref.md#constructor)

### Properties

* [options](defaultnormalhref.md#protected-options)
* [url](defaultnormalhref.md#protected-url)
* [urlString](defaultnormalhref.md#protected-urlstring)

### Accessors

* [hasNoPath](defaultnormalhref.md#protected-hasnopath)
* [isExternal](defaultnormalhref.md#isexternal)
* [isHashOnly](defaultnormalhref.md#protected-ishashonly)
* [isRelative](defaultnormalhref.md#isrelative)
* [parentPage](defaultnormalhref.md#parentpage)
* [pathname](defaultnormalhref.md#pathname)
* [relativePrefix](defaultnormalhref.md#protected-relativeprefix)

### Methods

* [canCompare](defaultnormalhref.md#protected-cancompare)
* [isChildPageOf](defaultnormalhref.md#ischildpageof)
* [isSamePage](defaultnormalhref.md#issamepage)
* [toString](defaultnormalhref.md#tostring)

## Constructors

###  constructor

\+ **new DefaultNormalHref**(`urlString?`: undefined | string, `options`: [NormalHrefOptions](../globals.md#normalhrefoptions)): *[DefaultNormalHref](defaultnormalhref.md)*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:73](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L73)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`urlString?` | undefined &#124; string | - |
`options` | [NormalHrefOptions](../globals.md#normalhrefoptions) | {} |

**Returns:** *[DefaultNormalHref](defaultnormalhref.md)*

## Properties

### `Protected` options

• **options**: *[NormalHrefOptions](../globals.md#normalhrefoptions)*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:69](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L69)*

___

### `Protected` url

• **url**: *URL*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:71](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L71)*

___

### `Protected` urlString

• **urlString**: *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:73](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L73)*

## Accessors

### `Protected` hasNoPath

• **get hasNoPath**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:86](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L86)*

**Returns:** *boolean*

___

###  isExternal

• **get isExternal**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:81](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L81)*

**Returns:** *boolean*

___

### `Protected` isHashOnly

• **get isHashOnly**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:90](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L90)*

**Returns:** *boolean*

___

###  isRelative

• **get isRelative**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:94](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L94)*

**Returns:** *boolean*

___

###  parentPage

• **get parentPage**(): *undefined | [DefaultNormalHref](defaultnormalhref.md)‹›*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:135](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L135)*

**Returns:** *undefined | [DefaultNormalHref](defaultnormalhref.md)‹›*

___

###  pathname

• **get pathname**(): *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:106](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L106)*

**Returns:** *string*

___

### `Protected` relativePrefix

• **get relativePrefix**(): *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:98](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L98)*

**Returns:** *string*

## Methods

### `Protected` canCompare

▸ **canCompare**(`that`: [NormalHref](../interfaces/normalhref.md)): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:121](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](../interfaces/normalhref.md) |

**Returns:** *boolean*

___

###  isChildPageOf

▸ **isChildPageOf**(`that`: [NormalHref](../interfaces/normalhref.md) | string): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:142](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](../interfaces/normalhref.md) &#124; string |

**Returns:** *boolean*

___

###  isSamePage

▸ **isSamePage**(`that`: [NormalHref](../interfaces/normalhref.md) | string): *any*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:129](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](../interfaces/normalhref.md) &#124; string |

**Returns:** *any*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:116](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L116)*

**Returns:** *string*
