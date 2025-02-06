# [MySQL 8.0. Unicode Support](https://dev.mysql.com/doc/refman/8.0/en/charset-unicode.html)

The MySQL reference manual explains its Unicode support in terms of Basic Multilingual Plane (BMP) characters.

> Their code point values are between 0 and 65535 (or U+0000 and U+FFFF). They can be encoded in a variable-length encoding using 8, 16, or 24 bits (1 to 3 bytes). They can be encoded in a fixed-length encoding using 16 bits (2 bytes).

The rest are supplementary characters.