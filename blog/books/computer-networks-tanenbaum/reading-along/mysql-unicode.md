# [MySQL 8.0. Unicode Support](https://dev.mysql.com/doc/refman/8.0/en/charset-unicode.html)

The MySQL reference manual explains its Unicode support in terms of Basic Multilingual Plane (BMP) characters.

> Their code point values are between 0 and 65535 (or U+0000 and U+FFFF). They can be encoded in a variable-length encoding using 8, 16, or 24 bits (1 to 3 bytes). They can be encoded in a fixed-length encoding using 16 bits (2 bytes).

The rest are supplementary characters.

![17388243039185051356087057371785](https://github.com/user-attachments/assets/2827ffa3-5f9c-47f3-abda-0457d485a3a1)

MySQL is dropping support for BPM-only encodings (utf8mb3 and ucs2) signaling that there's no advantage to limiting a database's storage range to exclude supplementary characters. utf8mb4 is the standard UTF-8 encoding.
