import { Age } from "..";

describe(Age.name, () => {
  const age = new Age("1970-01-01");

  test(Age.prototype.isBirthday.name, () => {
    const dob = new Date("2020-01-01");
    const notDob = new Date("2020-01-02");

    expect(typeof age.isBirthday()).toBe("boolean");
    expect(age.isBirthday(dob)).toBeTruthy();
    expect(age.isBirthday(notDob)).toBeFalsy();
  });

  test("Serialization", () => {
    expect(age.valueOf()).toBe(age.value);
    expect(age.toJSON()).toBe(age.value);
    expect(age.toString()).toBe(String(age.value));
    expect(+age).toBe(age.value);
    expect(age[Symbol.toPrimitive]("default")).toBe(age.value);
    expect(age[Symbol.toPrimitive]("number")).toBe(age.value);
    expect(age[Symbol.toPrimitive]("string")).toBe(age.toString());
    expect(age[Symbol.toStringTag]).toBe(Age.name);
  });

  test("Checking", () => {
    expect(() => new Age("2999-01-01")).toThrowError(
      new TypeError("Date of birth can only be in the past")
    );

    expect(() => new Age("🦄")).toThrowError(new TypeError("Invalid Date"));
  });

  test("Age.of", () => {
    expect(Age.of(11).value).toBe(11);
    expect(Age.of(11, 12).value).toBe(12);
    expect(Age.of(11, 12, 11).value).toBe(12);
  });

  test("Age.parseDate", () => {
    expect(Age.parseDate("01 01 1970").dayOfBirth.getTime()).toBe(
      new Age("1970-01-01").dayOfBirth.getTime()
    );
  });

  test("daysBeforeBirthday", () => {
    expect(Age.of(11, 0, 1).daysBeforeBirthday).toBeGreaterThan(363);
  });
});
