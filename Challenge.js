// Challenge: IP Validation (6 kyu)

// Description:

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(str) {
  const octets = str.split(".");
  return (
    octets.length === 4 &&
    octets.every(
      (octet, idx, arr) =>
        arr.length > 0 && // make sure arr has contents
        Number(octet).toString() === octet && // check for leading zeroes
        Number(octet) >= 0 && // Between 0...
        Number(octet) <= 255 // ... and 255
    )
  );
}

// Tests
console.log(isValidIP("0.0.0.0")); // true
console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("12.34.56")); // false
console.log(isValidIP("01.02.03.04")); // false
