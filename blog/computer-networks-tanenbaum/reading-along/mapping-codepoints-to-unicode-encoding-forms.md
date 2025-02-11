# [Mapping codepoints to Unicode encoding forms](https://scripts.sil.org/cms/scripts/page.php?id=iws-appendixa&site_id=nrsi)

During UTF-8 encoding, the Unicode scalar value U is translated to C1, C2, C3, C4 bytes.

![17392559217951753054286864182550](https://github.com/user-attachments/assets/5f328a59-6b73-4435-80cc-473f11688adb)

![17392559646652358911185615312573](https://github.com/user-attachments/assets/71aea201-c764-4c4f-9f64-0aced9c19de3)

> By looking at the first two bits, you can immediately determine whether a code unit is an initial byte in a sequence or is a following byte. Secondly, by looking at the number of non-zero high-order bits of the first byte in the sequence, you can immediately tell how long the sequence is: if no high-order bits are set to one, then the sequence contains exactly one byte. Otherwise, the number of non-zero high-order bits is equal to the total number of bytes in the sequence.

If we translate U+0041 (LATIN CAPITAL LETTER A) to bytes in UTF-8 and ignore the range constraints in the UTF-8 specification, the same character can be represented in one, two, three, or four bytes.

> The UTF-8 specification stipulates that the shortest possible representation must be used.

![17392560200773194468039786519487](https://github.com/user-attachments/assets/463ae70e-5f7b-4c20-99db-d01d69119c0a)

> Each of the sequences other than the first is an illegal code unit sequence.

In UTF-32 encoding, no arithmetic takes place, and the Unicode scalar value U is simply split into the four bytes C1, C2, C3, C4 where C1 = 0000000 and C2 = 000xxxxx because U only needs at most 21 bits to be represented.

In UTF-16, if U < U+10000, it is simply split into two bytes. Otherwise, it is encoded into four bytes.

![17392560987161705686551881884758](https://github.com/user-attachments/assets/66977c87-47f6-44c2-a01d-5e74d93266cd)

![17392560663213083824825883210506](https://github.com/user-attachments/assets/f59631a3-8238-437f-85c1-64bc778b4e01)
