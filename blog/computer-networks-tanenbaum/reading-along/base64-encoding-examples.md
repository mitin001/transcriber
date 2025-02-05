# [Base64 encoding examples](https://stackoverflow.com/a/36571117)

To base64-encode a string, start by splitting it into groups of 3 bytes.

> ABCDEFG <=> [ABC] [DEF] [G]

Represent each group of 3 bytes as 24 bits; split them into four groups of 6 bits. Map each 6-bit group into an ASCII character such that 0 => A, 1 => B, etc.

```
[ABC] => QUJD
[DEF] => REVG
[G] => Rw==
```

If the last group is missing two sextets, pad the encoded string with ==.

> ABCDEFGH <=> [ABC] [DEF] [GH]

If the last group is missing one sextet, pad the encoded string with =.

```
[ABC] => QUJD
[DEF] => REVG
[GH] => R0g=
```
