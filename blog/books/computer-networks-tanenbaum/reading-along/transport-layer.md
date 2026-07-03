# [The Transport Layer](https://web.archive.org/web/20241121182439/https://utsa.pressbooks.pub/networking/chapter/the-transport-layer/)

In a client-server model, establishing a connection is known as a **TCP handshake**. The client comes up with a number (sequence number x) and sends it to the server. In response, the server comes up with another number (sequence number y) and sends it to the client. The client and server exchange these numbers in three packets (SYN, SYN-ACK, ACK), after which a TCP connection is established and data transfer can begin at the application layer.

![17449882680633973122759506319713](https://github.com/user-attachments/assets/44b42946-4652-4ce9-858b-94b2ee71106e)

> Both the client and server are synchronized, and can now reliably exchange data packets, knowing that the connection has been successfully established and that each party acknowledges the other’s readiness to communicate. This also helps in preventing unauthorized or forged connections, as both sides must agree on the initial sequence numbers and acknowledge each other before data transfer begins.

The ACK packet also tells the server how much data the client can accept in the next data packet.

> The receiver can advertise a receive window size in its acknowledgments (ACKs), indicating how much more data it can accept before it needs the sender to pause and wait.

The window size depends on the resources available to the client. How much free memory has been allocated to the TCP process? How many simultaneous connections are taking place? The less memory is available to a process (or the more congested the node is), the more packets it takes to download a file from the server, and the more networking layer overhead there is.
