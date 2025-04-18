# The Domain Name System (DNS)

DNS serves a seemingly simple purpose (translation of a domain name to its IP address), but it is a complex distributed database that has to be highly replicated and cached.

> DNS is a large and complex distributed system that is comprised of millions of name servers that work together. It forms a key link between human-readable domain names and the IP addresses of machines. It includes replication and caching for performance and reliability and is designed to be highly robust.

DNS resolvers try to protect themselves from cache poisoning attacks by making use of the 0x20 encoding. If a string is case-insensitive, varying the cases of the characters in it allows us to encode additional data, which can be used to validate the authenticity of the request.

> A local recursive would toggle the case on each QNAME (e.g., [uchicago.edu](http://uchicago.edu/) might become [uCHicaGO.EDu](http://uchicago.edu/) or similar), allowing each letter in the domain name to encode an additional bit for the DNS transaction ID. The catch, of course, is that no other resolver should alter the case of the QNAME in subsequent iterative queries or responses. If the casing is preserved, then the corresponding reply contains the QNAME with the original casing indicated by the local recursive resolver, effectively acting adding bits to the transaction identifier. The whole thing is an ugly hack, but such is the nature of trying to change widely deployed software while maintaining backward compatibility.

DNS provided an economic opportunity to a small country because its name abbreviation is *TV*.

> Tuvalu (a tiny island country midway between Hawaii and Australia) sold a lease on its *tv* domain for $50 million, all because the country code is well-suited to advertising television sites.

Before DNS, computers simply downloaded each other's hosts files. Due to inefficiency and name collisions, this approach was quickly abandoned, and DNS was invented.

> Back in the ARPANET days, a file, hosts.txt, listed all the computer names and their IP addresses. Every night, all of the hosts would fetch it from the site at which it was maintained. For a network of a few hundred large timesharing machines, this approach worked reasonably well. However, well before many millions of PCs were connected to the Internet, everyone involved with it realized that this approach could not continue to work forever. For one thing, the size of the file would become too large. Even more importantly, host name conflicts would occur constantly.

DNS initially relied on UDP because the overhead of TCP was deemed to be too much for such a frequent task as name resolution.

> DNS queries and responses relied on UDP as its transport protocol, based on the rationale that DNS queries and responses needed to be fast and lightweight, and could not handle the corresponding overhead of a TCP three-way handshake.

Now there are DNS-over-TLS and DNS-over-HTTPS.

> Cloudflare, Google, and others are now offering users the opportunity to direct their DNS traffic to their own local recursive resolvers, and additionally offering support for encrypted transport (e.g., TLS, HTTPS) between the DNS stub resolver and their local resolver.

If you don't wish your router, ISP, or eavesdroppers to know which domains you're visiting, you can encrypt your DNS traffic with those protocols.
