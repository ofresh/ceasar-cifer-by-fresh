Sure, here's a basic README.md file for the open-source project:

```
# Caesar Cipher Encryption Function

This is a simple JavaScript function that implements the Caesar cipher encryption algorithm. The Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.

## Usage

You can use this function to encrypt a given string with the Caesar cipher. It takes two parameters: the text to encrypt and the shift value.

```javascript
const { encryptedText, shift } = caesarCipherEncrypt("Hello, World!", 3);
console.log("Encrypted Text:", encryptedText);
console.log("Encrypted with shift value:", shift);
```

This will output:

```
Encrypted Text: Khoor, Zruog!
Encrypted with shift value: 3
```

## Installation

You can simply copy the `caesarCipherEncrypt` function into your JavaScript project or include it via a script tag in your HTML file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Acknowledgments

- This implementation is based on the Caesar cipher encryption algorithm.
- Inspired by the need for simple encryption functions in JavaScript projects.
```

This README.md file provides basic information on how to use the function, install it, contribute to the project, and acknowledges the inspiration behind the implementation.