# [Encoding Forms. Examples](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-2/#G12125)

The most straightforward way to encode a Unicode character is UTF-32. The data stream contains each Unicode code point unmodified (but padded with leading zeros). UTF-16 saves up on storage space by removing the need to pad code points that can be represented with two bytes and mapping the rest onto surrogate code units. UTF-8 saves up even more storage space.

![17398198044388179759242438507174](https://github.com/user-attachments/assets/ca02e507-a322-417f-863f-56a31e9a5c1b)

> Each example character can be expressed with one 32-bit code unit. Those code units have the same values as the code point for the character. For UTF-16, most characters can be expressed with one 16-bit code unit, whose value is the same as the code point for the character, but characters with high code point values require a pair of 16-bit surrogate code units instead. In UTF-8, a character may be expressed with one, two, three, or four bytes, and the relationship between those byte values and the code point value is more complex.
