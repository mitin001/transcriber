# HTTP/1 and HTTP/1.1

> With HTTP/1.0, after the connection was established a single request was sent over and a single response was sent back. Then the TCP connection was released.

With HTTP/1.1, we can no longer assume that every HTTP request establishes a separate TCP connection. HTTP/1.1 can reuse the TCP connection for multiple HTTP requests.

> Establishing a separate TCP connection to transport each single icon became a very expensive way to operate.
This observation led to HTTP/1.1, which supports persistent connections.

HTTP/1.1 is therefore much faster, and it must be. HTTP/1.0 is too slow to transport webpages with images.

> By amortizing the TCP setup, startup, and release costs over multiple requests, the relative overhead due to TCP is reduced per request. It is also possible to pipeline requests, that is, send request 2 before the response to request 1 has arrived.

![17391688348893109729492714508983](https://github.com/user-attachments/assets/eed2e6d6-dc9a-4ec3-aacb-4f4adfed38fd)

Connection reuse not only cuts back on TCP connection setup overhead, but it also takes advantage of TCP congestion control. Additional HTTP requests sent over TCP to the same server arrive faster.

> At the start of a connection, TCP uses the slow-start procedure to increase the throughput until it learns the behavior of the network path. The consequence of this warmup period is that multiple short TCP connections take disproportionately longer to transfer information than one longer TCP connection.

netstat will list a TCP connection with an ESTABLISHED state for about 60 s even if there are no HTTP requests sent to it because the browser anticipates that the user may send more requests to the same server shortly after visiting it.

> Clients and servers usually keep persistent connections open until they have been idle for a short time (e.g., 60 seconds) or they have a large number of open connections and need to close some.

Taking advantage of a persistent connection is faster than opening multiple connections in parallel.

> Running many TCP connections to the same server is discouraged. The reason is that TCP performs congestion control for each connection independently. As a consequence, the connections compete against each other, causing added packet loss, and in aggregate are more aggressive users of the network than an individual connection. Persistent connections are superior and used in preference to parallel connections because they avoid overhead and do not suffer from congestion problems.
