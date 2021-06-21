[@bodiless/tokens](../README.md) › [Globals](../globals.md) › [TokenMap](tokenmap.md)

# Class: TokenMap ‹**P**›

## Type parameters

▪ **P**

## Hierarchy

* **TokenMap**

## Index

### Constructors

* [constructor](tokenmap.md#constructor)

### Properties

* [groupsFor](tokenmap.md#protected-groupsfor)
* [map](tokenmap.md#protected-map)

### Accessors

* [groups](tokenmap.md#groups)
* [names](tokenmap.md#names)

### Methods

* [add](tokenmap.md#add)
* [delete](tokenmap.md#delete)
* [flow](tokenmap.md#flow)
* [namesFor](tokenmap.md#namesfor)
* [set](tokenmap.md#set)

## Constructors

###  constructor

\+ **new TokenMap**(`groupsFor?`: undefined | function): *[TokenMap](tokenmap.md)*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`groupsFor?` | undefined &#124; function |

**Returns:** *[TokenMap](tokenmap.md)*

## Properties

### `Protected` groupsFor

• **groupsFor**: *function*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:24](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L24)*

#### Type declaration:

▸ (`token?`: Token): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`token?` | Token |

___

### `Protected` map

• **map**: *Map‹string, function & object›* = new Map<string, Token>()

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L22)*

## Accessors

###  groups

• **get groups**(): *string[]*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:34](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L34)*

**Returns:** *string[]*

___

###  names

• **get names**(): *string[]*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:30](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L30)*

**Returns:** *string[]*

## Methods

###  add

▸ **add**(`tokens`: [Tokens](../globals.md#tokens)): *void*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:58](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`tokens` | [Tokens](../globals.md#tokens) |

**Returns:** *void*

___

###  delete

▸ **delete**(`name`: string): *void*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:64](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  flow

▸ **flow**‹**P**›(`tokens`: string[]): *function & object*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:68](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L68)*

**Type parameters:**

▪ **P**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`tokens` | string[] | [] |

**Returns:** *function & object*

___

###  namesFor

▸ **namesFor**(`group`: string): *string[]*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:44](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`group` | string |

**Returns:** *string[]*

___

###  set

▸ **set**(`name`: string, `token`: Token): *void*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:54](https://github.com/VancheeZze/Bodiless-JS/blob/e8581c8a/packages/bodiless-tokens/src/TokenMap.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`token` | Token |

**Returns:** *void*
