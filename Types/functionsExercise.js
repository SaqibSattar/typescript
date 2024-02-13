function twoFer(person) {
    if (person === void 0) { person = 'you'; }
    return "One for ".concat(person, ", one for me.");
}
console.log(twoFer());
console.log(twoFer('Elton'));
function isLeapYear(year) {
    // Step 1: If the year is not divisible by 4, it's not a leap year
    if (year % 4 !== 0) {
        return false;
    }
    // Step 2: If the year is divisible by 100 but not divisible by 400, it's not a leap year
    else if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    // Step 3: If the year is divisible by 4 and either not divisible by 100 or divisible by 400, it's a leap year
    else {
        return true;
    }
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2014));
