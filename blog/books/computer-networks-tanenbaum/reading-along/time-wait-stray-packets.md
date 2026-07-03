# [TIME_WAIT](https://superuser.com/questions/173535/what-are-close-wait-and-time-wait-states#comment951880_173543): discarding stray packets

When we close a browser tab to superuser.com, we can see in netstat that the connection the browser established with superuser.com has changed its status from ESTABLISHED to TIME_WAIT, and it sits in TIME_WAIT for another 60 s.

> We're now waiting for any stray duplicate packets that may upset a new user of the same port.

Even though the browser has already sent the ACK in response to the server's FIN, it doesn't mean that there cannot be any stray packets still arriving on this connection. Packets can arrive out of order. To reduce the error handling that would have to take place on the next TCP connection from these packets, TIME_WAIT is a sort of a grace period for that.
