# [Encoding Schemes. Examples](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-2/#G18516)

In the big-endian UTF-32, the code point bytes are padded with leading zeros. In the little-endian UTF-32, they are padded with trailing zeros, and the byte order of the code points is reversed. The same applies to UTF-16 for the code points that can be represented with two bytes. The code points represented with four bytes are transposed when moving from UTF-16BE to UTF-16LE.

![17400076157059127839181725801351](https://github.com/user-attachments/assets/c58ecfad-11f1-4c7b-887b-39feed5ca461)

UTF-8 reads the same regardless of endianness.
