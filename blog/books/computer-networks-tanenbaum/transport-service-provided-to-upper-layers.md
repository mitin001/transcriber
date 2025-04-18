# The Transport Service. Services Provided to the Upper Layers

Applications cannot interface directly with the network layer because it runs on routers, not the machines running the applications.

> The transport code runs entirely on the users’ machines, but the network layer largely runs on the routers, which are operated by the carrier (at least for a wide area network).

Creating a transport layer between the application and the network improves the reliability of the network, as it is seen by the application.

> The existence of the transport layer makes it possible for the transport service to be more reliable than the underlying network.

The application does not need to be concerned with the physical imperfections of the network.

> It fulfills the key function of isolating the upper layers from the technology, design, and imperfections of the network.

The transport layer abstracts those imperfections away by detecting problems and automatically restarting data transmissions.

> The users have no real control over the network layer, so they cannot solve the problem of poor service by using better routers or putting more error handling in the data link layer because they don’t own the routers. The only possibility is to put on top of the network layer another layer that improves the quality of the service. If, in a connectionless network, packets are lost or mangled, the transport entity can detect the problem and compensate for it by using retransmissions. If, in a connection-oriented network, a transport entity is informed halfway through a long transmission that its network connection has been abruptly terminated, with no indication of what has happened to the data currently in transit, it can set up a new network connection to the remote transport entity. Using this new network connection, it can send a query to its peer asking which data arrived and which did not, and knowing where it was, pick up from where it left off.
