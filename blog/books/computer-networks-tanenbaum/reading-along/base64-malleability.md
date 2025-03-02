# [Base64 Malleability in Practice](https://eprint.iacr.org/2022/361.pdf)

Some software developers think that because the output of base64-encoding looks different from its input, they think the data has been passed through a cipher and is therefore has been encrypted.

> Developer misconceptions that base64 offers cryptographic encryption rather than encoding, exposed passwords in web-based base64 authentication.

Try to decode base64-encoded strings found on the web in the context of authentication and be amazed at how many of them contain credentials that could allow one to gain unauthorized access to data that should've been better protected.

> Another potential problem with base64 is that it can potentially facilitate data leakage from an organization (since base64 data format might not be immediately detected).

Sometimes, decoding base64-encoded strings reveals sensitive data itself, not just the means to gain unauthorized access to it. Other times, the nonuniqueness of the base64 output for a given input can be exploited to bypass uniqueness checks of the application.

> A “malicious” base64 implementation could potentially encode the same data in a different way and alter some of the last characters of the original base64 output, without the application realizing the difference. For instance, one could potentially use a malicious base64 encoder in web-based ticketing applications, and buy multiple tickets for free if the database uses base64 string for unique ticketIDs.

This can be used in an account takeover attack.

> In databases where their base64-encoded userIDs are exposed, an attacker (or internal actor) can potentially read a userID and insert multiple copies of the same user by just slightly altering padding bits, and thus bypassing the logical database’s primary key uniqueness rules.

The authors refer to this as base64 decoding malleability and categorize it as an attack vector.

> Many different base64-encoded strings can decode into the same binary data.

They warn against using base64-encoded strings where there is an expectation of uniqueness.

> A database administrator should not use base64-encoded strings as primary keys, especially when those strings are received from external users.

The authors suggest programmers including strategies to detect malleability scenarios in their implementations of base64 decoders.

> Perform an additional check: re-encode the received decoded binary data, then check byte equivalence with the original input base64; if they do not match, then this indicates a malleability scenario.

The resulting compute overhead is the cost of reducing the attack surface. What is more important in your implementation?

> Different programming languages and systems have colliding decoded outputs for different base64 encoded strings, or detect anomalies and throw exceptions, thus minimizing the attack surface.

An infinite number of ways to pad a base64-encoded string can be used to overwhelm the server that decodes such strings.

> No canonicity in base64 decoding implies another denial of service attack vector: one could replace a “=” padding character with many “=” ... possibly making a huge (e.g. several Gigabyte) base64 string being accepted, which would still decode into the same just a few bits data. If the size-check happens on the decoded output, the service might store an inappropriate amount of data.

This situation is made even worse when the decoder ignores invalid characters.

> Python’s default relaxed behavior of completely ignoring invalid base64 characters during decoding (e.g., both SGVsbA==== and SGVsb<A=>=== decode into Hell, since > and < are not part of base64 character set); a fea-ture which if not properly addressed in Python applications, could cause further malleability issues.

We are finding ourselves in this predicament because of the imprecise language of the RFC standard for base64.

> RFC standards should be written in a strict and precise format, without leaving room for “options” and avoiding words like “may or optionally”.

Standards must be standard. That is, they must be strict and precise.
