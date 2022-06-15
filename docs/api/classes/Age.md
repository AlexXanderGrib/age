[QIWI SDK](../README.md) / [Exports](../modules.md) / Age

# Class: Age

Class representing age of something

## Table of contents

### Constructors

- [constructor](Age.md#constructor)

### Accessors

- [[toStringTag]](Age.md#[tostringtag])
- [dateOfBirth](Age.md#dateofbirth)
- [dayOfBirth](Age.md#dayofbirth)
- [daysBeforeBirthday](Age.md#daysbeforebirthday)
- [value](Age.md#value)

### Methods

- [[toPrimitive]](Age.md#[toprimitive])
- [isBirthday](Age.md#isbirthday)
- [toJSON](Age.md#tojson)
- [toString](Age.md#tostring)
- [valueOf](Age.md#valueof)
- [of](Age.md#of)
- [parseDate](Age.md#parsedate)

## Constructors

### constructor

• **new Age**(`dateOfBirth`)

Creates new instance of [Age](Age.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateOfBirth` | `string` \| `number` \| `Date` | Parameters to create date of birth. Equal to constructor parameters of {@link Date} |

#### Defined in

dist/dts/index.d.ts:29

• **new Age**(`year`, `month`, `date?`, `hours?`, `minutes?`, `seconds?`, `ms?`)

Creates new instance of [Age](Age.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |
| `date?` | `number` |
| `hours?` | `number` |
| `minutes?` | `number` |
| `seconds?` | `number` |
| `ms?` | `number` |

#### Defined in

dist/dts/index.d.ts:41

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** Age

#### Returns

`string`

#### Defined in

dist/dts/index.d.ts:145

___

### dateOfBirth

• `get` **dateOfBirth**(): `Date`

Internal date of birth created in constructor

To get only day of the birth see [dayOfBirth](Age.md#dayofbirth)

**`example`**
new Age('2020-11-05 05:11:34').dateOfBirth.toISOString()
// => "2020-11-05T05:11:34.000Z"

#### Returns

`Date`

#### Defined in

dist/dts/index.d.ts:58

___

### dayOfBirth

• `get` **dayOfBirth**(): `Date`

Date of start of the birth day

To get exact date passed to constructor use [dateOfBirth](Age.md#dateofbirth)

**`example`**
new Age('2020-11-05 05:11:34').dateOfBirth.toISOString()
// => "2020-11-05T00:00:00.000Z"

#### Returns

`Date`

#### Defined in

dist/dts/index.d.ts:68

___

### daysBeforeBirthday

• `get` **daysBeforeBirthday**(): `number`

Days until birthday rounded up, so on birthday this would be `0`

#### Returns

`number`

#### Defined in

dist/dts/index.d.ts:81

___

### value

• `get` **value**(): `number`

Age of object in full years

**`example`**
new Age("1970-01-01").value === 52
// At the time of writing docs  ^^

#### Returns

`number`

#### Defined in

dist/dts/index.d.ts:77

## Methods

### [toPrimitive]

▸ **[toPrimitive]**(`hint`): `string` \| `number`

Allows use of instance of this class in expressions as numbers or string

**`example`**
const age = new Age('1970-01-01');
console.log(age); // 52

const older = age + 10;
console.log(older); // 62

#### Parameters

| Name | Type |
| :------ | :------ |
| `hint` | `string` |

#### Returns

`string` \| `number`

#### Defined in

dist/dts/index.d.ts:95

___

### isBirthday

▸ **isBirthday**(`value?`): `boolean`

Checks is provided date is on the same day of year as the birthday

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` \| `number` \| `Date` |

#### Returns

`boolean`

#### Defined in

dist/dts/index.d.ts:48

___

### toJSON

▸ **toJSON**(): `number`

Allows correct serialization of this class to JSON

**`example`**

const person = { name: "Dmitri", age: new Age('1970-01-01') };
console.log(JSON.stringify(person));

// {"name":"Dmitri","age":52}

#### Returns

`number`

#### Defined in

dist/dts/index.d.ts:138

___

### toString

▸ **toString**(`radix?`): `string`

Allows use of instance of this class in expressions as numbers

**`example`**
// With this method
const age = new Age('1970-01-01');
console.log(`My uncle is ${age} years old`);
// My uncle is 52 years old

// Without
console.log(`My uncle is ${age} years old`);
// My uncle is [Object object] years old

#### Parameters

| Name | Type |
| :------ | :------ |
| `radix?` | `number` |

#### Returns

`string`

#### Defined in

dist/dts/index.d.ts:125

___

### valueOf

▸ **valueOf**(): `number`

Allows use of instance of this class in expressions as numbers

**`example`**
const age = new Age('1970-01-01');
console.log(age); // 52

const older = age + 10;
console.log(older); // 62

#### Returns

`number`

#### Defined in

dist/dts/index.d.ts:108

___

### of

▸ `Static` **of**(`years`, `months?`, `days?`): [`Age`](Age.md)

**`static`**

**`memberof`** Age

#### Parameters

| Name | Type |
| :------ | :------ |
| `years` | `number` |
| `months?` | `number` |
| `days?` | `number` |

#### Returns

[`Age`](Age.md)

#### Defined in

dist/dts/index.d.ts:15

___

### parseDate

▸ `Static` **parseDate**(`date`): [`Age`](Age.md)

**`static`**

**`memberof`** Age

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`Age`](Age.md)

#### Defined in

dist/dts/index.d.ts:24
