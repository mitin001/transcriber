# [Wikipedia. UTF-8](https://en.wikipedia.org/wiki/UTF-8)

UTF-8 satisfies the constraints of efficient memory utilization, backward compatibility, and self-synchronization.

![17388200489618645880267256151243](https://github.com/user-attachments/assets/0bccc5d7-5bf4-4de7-9419-19930253106d)

It makes an efficient use of memory by allocating only 1 byte to the most commonly occurring characters.

> Code points with lower numerical values, which tend to occur more frequently, are encoded using fewer bytes.

...while also allowing for files with only those characters to be read by ASCII-only readers.

> It was designed for backward compatibility with ASCII: the first 128 characters of Unicode, which correspond one-to-one with ASCII, are encoded using a single byte with the same binary value as ASCII, so that a UTF-8-encoded file using only those characters is identical to an ASCII file.

UTF-8 is also self-synchronizing.

> ...letting a reader start anywhere and immediately detect character boundaries.
