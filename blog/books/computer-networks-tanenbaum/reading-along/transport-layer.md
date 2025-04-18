# [The Transport Layer](https://web.archive.org/web/20241121182439/https://utsa.pressbooks.pub/networking/chapter/the-transport-layer/)

The client comes up with sequence number x. In response, the server comes up with sequence number y. The client and server exchange these numbers in three packets (SYN, SYN-ACK, ACK) after which a TCP connection is established, and application data transfer can begin.

![17449882680633973122759506319713](https://github.com/user-attachments/assets/44b42946-4652-4ce9-858b-94b2ee71106e)

> Both the client and server are synchronized, and can now reliably exchange data packets, knowing that the connection has been successfully established and that each party acknowledges the other’s readiness to communicate. This also helps in preventing unauthorized or forged connections, as both sides must agree on the initial sequence numbers and acknowledge each other before data transfer begins.

The ACK packet also tells the server how much data the client can accept in the next data packet (the window size depends on memory allocation of the TCP process and other simultaneous connections).

> The receiver can advertise a receive window size in its acknowledgments (ACKs), indicating how much more data it can accept before it needs the sender to pause and wait.
