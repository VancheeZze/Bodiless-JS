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

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:12](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`groupsFor?` | undefined &#124; function |

**Returns:** *[TokenMap](tokenmap.md)*

## Properties

### `Protected` groupsFor

• **groupsFor**: *function*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:12](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L12)*

#### Type declaration:

▸ (`token?`: Token): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`token?` | Token |

___

### `Protected` map

• **map**: *Map‹string, function & object›* = new Map<string, Token>()

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:10](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L10)*

## Accessors

###  groups

• **get groups**(): *string[]*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:22](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L22)*

**Returns:** *string[]*

___

###  names

• **get names**(): *string[]*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:18](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L18)*

**Returns:** *string[]*

## Methods

###  add

▸ **add**(`tokens`: [Tokens](../globals.md#tokens)): *void*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:46](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`tokens` | [Tokens](../globals.md#tokens) |

**Returns:** *void*

___

###  delete

▸ **delete**(`name`: string): *void*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:52](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  flow

▸ **flow**‹**P**›(`tokens`: string[]): *function & object*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:56](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L56)*

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

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:32](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`group` | string |

**Returns:** *string[]*

___

###  set

▸ **set**(`name`: string, `token`: Token): *void*

*Defined in [packages/bodiless-tokens/src/TokenMap.ts:42](https://github.com/VancheeZze/Bodiless-JS/blob/7319a147/packages/bodiless-tokens/src/TokenMap.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`token` | Token |

**Returns:** *void*
