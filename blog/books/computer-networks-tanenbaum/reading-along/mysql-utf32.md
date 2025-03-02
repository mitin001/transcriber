# [MySQL 8.0. UTF-32](https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-utf32.html)

MySQL will soon only have one fixed-length Unicode encoding: utf32. Even though it takes half the storage space, ucs2 is deprecated.

> utf32 takes twice as much space as ucs2 and more space than utf16, but utf32 has the same advantage as ucs2 that it is predictable for storage: The required number of bytes for utf32 equals the number of characters times 4. Also, unlike utf16, there are no tricks for encoding in utf32, so the stored value equals the code value.
