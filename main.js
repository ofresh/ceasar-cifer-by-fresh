function caesarCipherEncrypt(text, shift) {
    if (shift < 0) {
        shift = shift % 26 + 26;
    }

    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) { // Uppercase letters
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Lowercase letters
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        encryptedText += char;
    }

    return { encryptedText, shift };
}

// Example usage:
const text = "Hello, World!";
const shift = 3;
const result = caesarCipherEncrypt(text, shift);
console.log("Encrypted Text:", result.encryptedText);
console.log("Encrypted with shift value:", result.shift);