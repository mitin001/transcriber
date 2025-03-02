# [Unicode Encoding Forms](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-3/#G7404)

When we convert a string with 16 or more leading zeros from UTF-32 to UTF-16, we can just truncate the leading zeros. Similarly, when we convert a string with 24 or more leading zeros from UTF-32 to UTF-8, we can also just truncate the leading zeros.

![17403756832496316135143612770215](https://github.com/user-attachments/assets/e5fda742-4188-4c9b-9992-21d4566977f2)

For other cases, we must perform arithmetic.

> For Unicode scalar values equal to or greater than U+10000, UTF-16 uses surrogate pairs. Calculation of the surrogate pair values involves subtraction of 10000<sub>16</sub>, to account for the starting offset to the scalar value.

![17403761523183854776087683191295](https://github.com/user-attachments/assets/48c7517f-2c6e-49ba-8ea6-4a9a372ac675)

> wwww = uuuuu - 1.

If the code point takes up more than 16 bits, we split the last 16 bits across the two 16-bit code units when we convert it to UTF-16.

![17403761891397269851329007052867](https://github.com/user-attachments/assets/5d5a9d43-100b-483e-9196-282f6629c4c0)

UTF-8 splits the code point bits across up to four bytes. With this specification, it is easy to detect ill-formed UTF-8 sequences.

> The byte sequence <E0 9F 80> is ill-formed, because in the row where E0 is well-formed as a first byte, 9F is not well-formed as a second byte.

![17403766562371951767112050954348](https://github.com/user-attachments/assets/895fbee4-96e5-4f87-bb60-ae9fb5a0d8ea)

> Cases where a trailing byte range is not 80..BF are shown in bold italic to draw attention to them. These exceptions to the general pattern occur only in the second byte of a sequence.

The UTF-8 specification holds that a UTF-8 byte stream never contains certain byte values.

> The following byte values are disallowed in UTF-8: C0–C1, F5–FF.
