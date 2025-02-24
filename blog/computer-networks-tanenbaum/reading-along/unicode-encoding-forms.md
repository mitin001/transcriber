# [Unicode Encoding Forms](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-3/#G7404)

> For Unicode scalar values equal to or greater than U+10000, UTF-16 uses surrogate pairs. Calculation of the surrogate pair values involves subtraction of 10000<sub>16</sub>, to account for the starting offset to the scalar value.

> wwww = uuuuu - 1.

> The byte sequence <E0 9F 80> is ill-formed, because in the row where E0 is well-formed as a first byte, 9F is not well-formed as a second byte.

> Cases where a trailing byte range is not 80..BF are shown in bold italic to draw attention to them. These exceptions to the general pattern occur only in the second byte of a sequence.

> The following byte values are disallowed in UTF-8: C0–C1, F5–FF.
