# [Bidirectional transmission on gigabit Ethernet](https://electronics.stackexchange.com/q/132486)

Gigabit Ethernet is an improvement over 100Mbit Ethernet that can be run on the same UTP-5 cabling (unshielded twisted pair). One of the ways this was accomplished was that it can transmit and receive at the same time.

> Since you know what you're sending out, then you can separate the signal you just sent from what is coming in from the far end of the link. The way the circuitry is set up, the transmit and receive signals are superimposed on top of each other, more or less adding together.

The received data is calculated from the convolution of the transmitted and received data.

> If the transmitter sends +1, +1, -1, +1 and the local receiver gets +2, 0, -2, +2 then you can work out that the signal from the other end must have been +1, -1, -1, +1. That's more or less the gist of how it works, but it's significantly more complicated due to delays and reflections. The technique is called '**echo cancellation**' because sending just a lone +1 down the line will not result in receiving a lone +1, rather you will get several delayed copies at various amplitudes. For example, if you send +1, 0, 0, 0, 0, 0 you might get back 0, +0.8, 0, +0.2, -0.1, +0.1 due to discontinuities along the line. The received signal then becomes the 'convolution' of the transmitted signal with this pattern. For example, if you send +1, +1, -1, +1, 0, 0, 0, 0 then you will get something like 0, +0.8, +0.8, -0.6, +0.9, -0.2, +0.4, -0.2, +0.1. The transceivers send training sequences to figure out what the echo looks like (e.g. send a lone +1 while the other end is sending 0 and measure what you get at the receiver). This information is used to reconstruct what the receiver would expect to see from the transmitted data echoing back. This reconstruction is subtracted from the received data, leaving behind the signal from the other end of the link.

The discontinuities in the cable will add an echo, which must be removed from the superimposed signal before the received data is calculated from the convolution of the transmitted and received data. Echo is determined from the training sequences sent by the transceiver.

> When gigabit ethernet was developed, the designers wanted to keep compatibility with 10 and 100 Mbit ethernet as much as possible. Since there was no way they were going to get 10x the bandwidth out of one single pair, the solution was to improve the single pair bandwidth by 2.5x and then use all four pairs.

1 Gbit/s = 4 x 2.5 x 100 Mbit/s: 4 twisted pairs in use at **full duplex** at 2.5x efficiency, arising from the [additional two voltage levels]. Meanwhile, 100Mbit Ethernet uses 2 twisted pairs at **half duplex** with only three voltage levels.

[additional two voltage levels]: /blog/books/principles-of-computer-hardware/reading-along/eli5_how_data_or_electric_signals_travel_through_ethernet_cable.md
