# [Principles of Computer Hardware](https://books.google.com/books?vid=9780199273133) by _Alan Clements_

[1. Introduction to computer hardware](/blog/books/principles-of-computer-hardware/01-introduction.md)

[2.1. Analog and digital systems](/blog/books/principles-of-computer-hardware/02-01-analog-digital.md)

[2.2. Fundamental gates](/blog/books/principles-of-computer-hardware/02-02-fundamental-gates.md)

This section mentions that outputs from two gates cannot converge. This is only self-evident if we accept that there cannot be more than two voltage states in motherboard circuits. There's a Reddit discussion that explains reasons for why processor-connected circuits [must be limited to binary voltage states], but then provides examples of electronic components that actually can support additional voltage states. One of them is Ethernet. Another Reddit discussion explains how [Ethernet] uses these additional voltage states to get higher speeds from the same cable. Additional voltage speeds are not the full story, though. There's a Stack Exchange thread that explains the additional factors needed to achieve [Gigabit] speeds over Ethernet.

[must be limited to binary voltage states]: /blog/books/principles-of-computer-hardware/reading-along/eli5_why_are_computers_limited_to_0s_and_1s.md
[Ethernet]: /blog/books/principles-of-computer-hardware/reading-along/eli5_how_data_or_electric_signals_travel_through_ethernet_cable.md
[Gigabit]: /blog/books/principles-of-computer-hardware/reading-along/bidirectional-transmission-on-gigabit-ethernet.md
