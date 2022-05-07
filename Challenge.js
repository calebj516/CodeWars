// Challenge: ASCII Shift Encryption/Decryption (7 kyu)

// Description:

// The goal of this kata is to create a very simple ASCII encryption and decryption. The encryption algorithm should shift each character's charcode by the character's current index in the string (0-based).

// The input strings will never require to go outside of the ASCII range.

// My code below:

function asciiEncrypt(plaintext) {
  return plaintext
    .split("")
    .map((el, idx) => String.fromCharCode(el.charCodeAt(0) + idx))
    .join("");
}

function asciiDecrypt(ciphertext) {
  return ciphertext
    .split("")
    .map((el, idx) => String.fromCharCode(el.charCodeAt(0) - idx))
    .join("");
}

// Tests

console.log(asciiEncrypt("PASSWORD")); // "PBUV[TXK"
console.log(asciiDecrypt("PBUV[TXK")); // "PASSWORD"
