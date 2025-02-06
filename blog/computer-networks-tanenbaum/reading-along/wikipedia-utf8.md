# [Wikipedia. UTF-8](https://en.wikipedia.org/wiki/UTF-8)

UTF-8 satisfies the constraints of efficient memory utilization, backward compatibility, and self-synchronization.

![17388200489618645880267256151243](https://github.com/user-attachments/assets/0bccc5d7-5bf4-4de7-9419-19930253106d)

It makes an efficient use of memory by allocating only 1 byte to the most commonly occurring characters.

> Code points with lower numerical values, which tend to occur more frequently, are encoded using fewer bytes.

...while also allowing for files with only those characters to be read by ASCII-only readers.

> It was designed for backward compatibility with ASCII: the first 128 characters of Unicode, which correspond one-to-one with ASCII, are encoded using a single byte with the same binary value as ASCII, so that a UTF-8-encoded file using only those characters is identical to an ASCII file.

UTF-8 is also self-synchronizing.

> ...letting a reader start anywhere and immediately detect character boundaries.

A UTF-8 file will never contain bytes 0xC0, 0xC1, 0xF5–0xFF. A byte in the range 0x80–0xBF indicates a continuation byte (byte 2-4) of a single character.

![17388209804105155994177414317195](https://github.com/user-attachments/assets/fe51839a-7bc5-493b-b244-94062225aab3)

0xE0 cannot be followed by less than 0xA0. 0xF0 cannot be followed by less than 0x90. Either would result in an overlong encoding.

> Many of the first UTF-8 decoders would decode these, ignoring incorrect bits. Carefully crafted invalid UTF-8 could make them either skip or create ASCII characters such as NUL, slash, or quotes, leading to security vulnerabilities. ... These are a security problem because they allow the same code point to be encoded in multiple ways. Overlong encodings (of ../ for example) have been used to bypass security validations in high-profile products including Microsoft's IIS web server and Apache's Tomcat servlet container. Overlong encodings should therefore be considered an error and never decoded.

0xF4 cannot be followed by 0x90 or greater, because it works decode to a value greater than U+10FFFF, which is outside the UTF-8 range.
