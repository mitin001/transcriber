# [UTF-8 Everywhere](https://utf8everywhere.org/)

> UTF-8 guarantees that an ASCII character value or a substring will never match a part of a multi-byte encoded character. The same is true for UTF-16.

When searching a UTF-8 file for an ASCII character, feel free to search for the byte corresponding to it in the file's byte stream. A ASCII character byte is never used by characters represented by two or more bytes.

> To find, say, ‘<’ sign marking a beginning of an HTML tag, or an apostrophe (') in a UTF-8 encoded SQL statement to defend against an SQL injection, do as you would for an all-English plaintext ASCII string. The encoding guarantees this to work. Specifically, that every non-ASCII character is encoded in UTF-8 as a sequence of bytes, each of them having a value greater than 127. This leaves no place for collision for a naïve algorithm—simple, fast and elegant, and no need to care about encoded character boundaries. Also, you can search for a non-ASCII, UTF-8 encoded substring in a UTF-8 string as if it was a plain byte array—there is no need to mind code point boundaries. This is thanks to another design feature of UTF-8—a leading byte of an encoded code point can never hold value corresponding to one of trailing bytes of any other code point.
