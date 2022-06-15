/**
 * Class representing age of something
 */
export class Age {
  /**
   *
   *
   * @static
   * @param {number} years
   * @param {number} [months]
   * @param {number} [days]
   * @return {Age}
   * @memberof Age
   */
  static of(years: number, months?: number, days?: number): Age {
    const date = new Date();
    date.setFullYear(date.getFullYear() - years);
    date.setHours(0, 0, 0, 0);

    if (typeof months === "number") {
      date.setMonth(date.getMonth() - months);
    }

    if (typeof days === "number") {
      date.setDate(date.getDate() - days);
    }

    if (typeof months === "undefined" && typeof days === "undefined") {
      date.setMonth(0, 0);
    }

    return new this(date);
  }

  /**
   *
   *
   * @static
   * @param {string} date
   * @return {Age}
   * @memberof Age
   */
  static parseDate(date: string): Age {
    return new this(Date.parse(date));
  }

  /**
   * Internal value of Date of Birth
   *
   * @internal
   * @type {Date}
   */
  private readonly _dateOfBirth: Date;

  /**
   * Creates new instance of {@link Age}
   * @param {Date|number|string} dateOfBirth Parameters to create date of birth. Equal to constructor parameters of {@link Date}
   */
  constructor(dateOfBirth: number | string | Date);

  /**
   * Creates new instance of {@link Age}
   *
   * @param {number} year
   * @param {number} month
   * @param {number} [date]
   * @param {number} [hours]
   * @param {number} [minutes]
   * @param {number} [seconds]
   * @param {number} [ms]
   */
  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  );

  /**
   * Creates nw instance of {@link Age}
   * @param {Date|number|string} dateOfBirth Parameters to create date of birth. Equal to constructor parameters of {@link Date}
   */
  constructor(...dateOfBirth: ConstructorParameters<typeof Date>) {
    const date = new Date(...dateOfBirth);

    if (date.toString() === "Invalid Date") {
      throw new TypeError("Invalid Date");
    }

    if (date.getTime() > Date.now()) {
      throw new TypeError("Date of birth can only be in the past");
    }

    this._dateOfBirth = date;
  }

  /**
   * Checks is provided date is on the same day of year as the birthday
   *
   * @param {Date|number|string} [value=new Date()] Date, by default - now
   * @return {boolean}
   */
  isBirthday(value: Date | number | string = new Date()): boolean {
    const date = new Date(value);
    const dob = this.dayOfBirth;

    return date.getMonth() === dob.getMonth() && date.getDate() === dob.getDate();
  }

  /**
   * Internal date of birth created in constructor
   *
   * To get only day of the birth see {@link dayOfBirth}
   *
   * @example
   * new Age('2020-11-05 05:11:34').dateOfBirth.toISOString()
   * // => "2020-11-05T05:11:34.000Z"
   */
  get dateOfBirth() {
    return new Date(this._dateOfBirth);
  }

  /**
   * Date of start of the birth day
   *
   * To get exact date passed to constructor use {@link dateOfBirth}
   *
   * @example
   * new Age('2020-11-05 05:11:34').dateOfBirth.toISOString()
   * // => "2020-11-05T00:00:00.000Z"
   */
  get dayOfBirth() {
    const dayOfBirth = new Date(this._dateOfBirth);
    dayOfBirth.setHours(0, 0, 0, 0);

    return dayOfBirth;
  }

  /**
   * Age of object in full years
   * @return {number}
   *
   * @example
   * new Age("1970-01-01").value === 52
   * // At the time of writing docs  ^^
   */
  get value(): number {
    const now = new Date();
    const dob = this.dateOfBirth;
    dob.setFullYear(dob.getFullYear() + 1);

    let fullYears = 0;
    while (dob.getTime() < now.getTime()) {
      dob.setFullYear(dob.getFullYear() + 1);
      fullYears++;
    }

    return fullYears;
  }

  /**
   * Days until birthday rounded up, so on birthday this would be `0`
   */
  get daysBeforeBirthday(): number {
    const now = new Date();
    let count = 0;

    while (!this.isBirthday(now)) {
      now.setDate(now.getDate() + 1);
      count++;
    }

    return count;
  }

  /**
   * Allows use of instance of this class in expressions as numbers or string
   *
   * @param {string} hint
   * @return {string|number}
   *
   * @example
   * const age = new Age('1970-01-01');
   * console.log(age); // 52
   *
   * const older = age + 10;
   * console.log(older); // 62
   */
  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === "string") return this.toString();

    return this.valueOf();
  }

  /**
   * Allows use of instance of this class in expressions as numbers
   *
   * @return {number}
   *
   * @example
   * const age = new Age('1970-01-01');
   * console.log(age); // 52
   *
   * const older = age + 10;
   * console.log(older); // 62
   */
  valueOf(): number {
    return this.value;
  }

  /**
   * Allows use of instance of this class in expressions as numbers
   *
   * @param {number=} radix
   * @return {string}
   *
   * @example
   * // With this method
   * const age = new Age('1970-01-01');
   * console.log(`My uncle is ${age} years old`);
   * // My uncle is 52 years old
   *
   * // Without
   * console.log(`My uncle is ${age} years old`);
   * // My uncle is [Object object] years old
   */
  toString(radix?: number | undefined): string {
    return this.value.toString(radix);
  }

  /**
   * Allows correct serialization of this class to JSON
   *
   * @return {number}
   *
   * @example
   *
   * const person = { name: "Dmitri", age: new Age('1970-01-01') };
   * console.log(JSON.stringify(person));
   *
   * // {"name":"Dmitri","age":52}
   */
  toJSON(): number {
    return this.value;
  }

  /**
   *
   *
   * @readonly
   * @memberof Age
   */
  get [Symbol.toStringTag]() {
    return "Age";
  }
}
