// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isphonenumber
test('accept hiphens', ()=> {
	expect(functions.isPhoneNumber('909-551-5511')).toBe(true);
});
test('requiring hiphens', ()=> {
	expect(functions.isPhoneNumber('9095515511')).toBe(false);
});
test('does not accept letters', ()=> {
	expect(functions.isPhoneNumber('abc-abc-adbc')).toBe(false);
});
test('US international prefix ', ()=> {
	expect(functions.isPhoneNumber('1-909-551-5511')).toBe(true);
});
//isemail
test('regular email base case', ()=> {
	expect(functions.isEmail('yreganyang@gmail.com')).toBe(true);
});
test('missing ".com"', ()=> {
	expect(functions.isEmail('yreganyang@gmail')).toBe(false);
});
test('numbers before "@"', ()=> {
	expect(functions.isEmail('123@gmail.com')).toBe(true);
});
test('no @', ()=> {
	expect(functions.isEmail('123gmail.com')).toBe(false);
});
//isStrongPassword
test('valid letters, nums', ()=> {
	expect(functions.isStrongPassword('abcd1234')).toBe(true);
});
test('first char isnt letter', ()=> {
	expect(functions.isStrongPassword('1bcd1234')).toBe(false);
});
test('exceeds char limit', ()=> {
	expect(functions.isStrongPassword('abcd1234567891011213')).toBe(false);
});
test('include underscores', ()=> {
	expect(functions.isStrongPassword('abcd1_4_5')).toBe(true);
});
//isDate
test('valid date', ()=> {
	expect(functions.isDate('12/30/1000')).toBe(true);
});
test('1 digit xx', ()=> {
	expect(functions.isDate('1/3/1000')).toBe(true);
});
test('no /', ()=> {
	expect(functions.isDate('131000')).toBe(false);
});
test('year > 4 digits', ()=> {
	expect(functions.isDate('1/3/10001')).toBe(false);
});
//isHexColor
test('no #', ()=> {
	expect(functions.isHexColor('94814e')).toBe(true);
});
test('exceed hex val', ()=> {
	expect(functions.isHexColor('94814k')).toBe(false);
});
test('include #', ()=> {
	expect(functions.isHexColor('#94814e')).toBe(true);
});
test('insufficient # of char', ()=> {
	expect(functions.isHexColor('94814')).toBe(false);
});
