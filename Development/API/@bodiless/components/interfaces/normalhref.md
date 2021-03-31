[@bodiless/components](../README.md) › [Globals](../globals.md) › [NormalHref](normalhref.md)

# Interface: NormalHref

## Hierarchy

* **NormalHref**

## Implemented by

* [DefaultNormalHref](../classes/defaultnormalhref.md)

## Index

### Properties

* [isChildPageOf](normalhref.md#ischildpageof)
* [isExternal](normalhref.md#isexternal)
* [isRelative](normalhref.md#isrelative)
* [isSamePage](normalhref.md#issamepage)
* [parentPage](normalhref.md#parentpage)
* [pathname](normalhref.md#pathname)
* [toString](normalhref.md#tostring)

## Properties

###  isChildPageOf

• **isChildPageOf**: *function*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:49](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L49)*

Determines whether one internal href is a child of another.

**`param`** The href to compare.

#### Type declaration:

▸ (`that`: [NormalHref](normalhref.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](normalhref.md) |

___

###  isExternal

• **isExternal**: *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:35](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L35)*

Whether this relative is "external" (ie has an explicit hostname).
Note that any href with an explicit hostname is considered external,
even if the hostname matches the current host.

___

###  isRelative

• **isRelative**: *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:29](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L29)*

Whether this href is relative to the current page.

___

###  isSamePage

• **isSamePage**: *function*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L44)*

Determines whethertwo internal hrefs refer to the same page.

**`param`** The href to compare.

#### Type declaration:

▸ (`that`: [NormalHref](normalhref.md) | string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](normalhref.md) &#124; string |

___

###  parentPage

• **parentPage**: *[NormalHref](normalhref.md) | undefined*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:39](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L39)*

The parent of this href, or undefined for the root page.

___

###  pathname

• **pathname**: *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:25](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L25)*

The pathname of this href, suitable for comparison with other normal hrefs

___

###  toString

• **toString**: *function*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:21](https://github.com/VancheeZze/Bodiless-JS/blob/7b915a68/packages/bodiless-components/src/Link/NormalHref.ts#L21)*

A string representation of the href, suitable for supplying as a prop to an <a> tag.

#### Type declaration:

▸ (): *string*
