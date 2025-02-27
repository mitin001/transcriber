# [Wikipedia. Base64](https://en.wikipedia.org/wiki/Base64)

- We want to send binary data across the Internet. If we just send a string of ones and zeros, that would be base2-encoding such data. Base64 is much more efficient.

> Base64 is designed to carry data stored in binary formats across channels that only reliably support text content.

- With a base2 encoding, we would be mapping each bit to a one or a zero. With a base4 encoding, we could take two bits at a time and map them into four combinations: 00 => 0, 01 => 1, 10 => 2, 11 => 3. With a base64 encoding, we can take 6 bits at a time and map them onto 2^6 = 64 combinations, which could be encoded by ASCII characters.

> The source binary data is taken 6 bits at a time, then this group of 6 bits is mapped to one of 64 unique characters.

![17387424764885502123589029954565](https://github.com/user-attachments/assets/6a80ec02-3b4c-42e5-8ca3-18411982ca90)

- Even though base64 is much more efficient than any of the lower bases, there's much room for improvement.

> Base64 encoding causes an overhead of 33–37% relative to the size of the original binary data (33% by the encoding itself; up to 4% more by the inserted line breaks).

- The original application layer protocols were specifically created to transmit ASCII characters, so a format that encodes binary data into ASCII characters is attractive to these applications.

> One of its uses is the ability to embed image files or other binary assets inside textual assets such as HTML and CSS files.

- SMTP was particularly limited in its original implementation and necessitated the base64 workaround for email users to be able to send media files or even files with special characters as attachments.

> SMTP – in its original form – was designed to transport 7-bit ASCII characters only. Encoding an attachment as Base64 before sending, and then decoding when received, assures older SMTP servers will not interfere with the attachment.

- The encoded bits are padded with zeros to ensure their length is a multiple of six to make the mapping of the last character possible.

![17387425327366572426743220981418](https://github.com/user-attachments/assets/255e6b8c-cf72-4715-a675-574638cf6c48)

- If the length of the encoded bits is not a multiple of 24, = or == are padded to complete the group. The length of any base64-encoded strings is thus a multiple of 4 bytes.

![17387425497097181045101437023723](https://github.com/user-attachments/assets/9c9137b7-72fb-4762-9cf8-06dde72b0018)

> Allowing padless decoding by definition allows multiple strings to decode into the same set of bytes.

- If we don't add the padding sextets, we don't know how many bits have been added to the source data to make its bit length a multiple of 6. When a padding sextet is present, however, it indicates that 2 bits have been added to the source data (for each =).

> Consider it as an instruction to discard 2 trailing bits from the bit string each time a = is encountered. For example, when `bGlnaHQgdw==` is decoded, we convert each character (except the trailing occurrences of =) into their corresponding 6-bit representation, and then discard 2 trailing bits for the first = and another 2 trailing bits for the other =. In this instance, we would get 6 bits from the d, and another 6 bits from the w for a bit string of length 12, but since we remove 2 bits for each = (for a total of 4 bits), the dw== ends up producing 8 bits (1 byte) when decoded.

![17387425687042301219324897610155](https://github.com/user-attachments/assets/b3e027bd-4c94-47f0-a3a0-d888b32d7af5)

- When creating a QR code for an image, base64-encode it first. QR code readers may not expect binary data but they will be able to handle 7-bit ASCII text.

> QR codes which contain binary data will sometimes store it encoded in Base64 rather than simply storing the raw binary data, as there is a stronger guarantee that all QR code readers will accurately decode text, as well as the fact that some devices will more readily save text from a QR code than potentially malicious binary data.

