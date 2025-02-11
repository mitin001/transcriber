# [Mapping codepoints to Unicode encoding forms](https://scripts.sil.org/cms/scripts/page.php?id=iws-appendixa&site_id=nrsi)

During UTF-8 encoding, the Unicode scalar value U is translated to C1, C2, C3, C4 bytes.

> By looking at the first two bits, you can immediately determine whether a code unit is an initial byte in a sequence or is a following byte. Secondly, by looking at the number of non-zero high-order bits of the first byte in the sequence, you can immediately tell how long the sequence is: if no high-order bits are set to one, then the sequence contains exactly one byte. Otherwise, the number of non-zero high-order bits is equal to the total number of bytes in the sequence.

If we translate U+0041 (LATIN CAPITAL LETTER A) to bytes in UTF-8 and ignore the range constraints in the UTF-8 specification, the same character can be represented in one, two, three, or four bytes.

> The UTF-8 specification stipulates that the shortest possible representation must be used.

> Each of the sequences other than the first is an illegal code unit sequence.

In UTF-32 encoding, no arithmetic takes place, and the Unicode scalar value U is simply split into the four bytes C1, C2, C3, C4 where C1 = 0000000 and C2 = 000xxxxx because U only needs at most 21 bits to be represented.

In UTF-16, if U < U+10000, it is simply split into two bytes. Otherwise, it is encoded into four bytes.
