# [Why are computers limited to 0s and 1s?](https://old.reddit.com/r/explainlikeimfive/comments/tqplv4/eli5_why_are_computers_limited_to_0s_and_1s_why/)

Making electronic components any more complex than those operating on binary bits means making them more error-prone.

> Adding a third or fourth state adds more room for error by bringing your different possibilities closer together.

To support more than the bare minimum number of states in an electric component means to introduce more than the bare minimum error correction logic (i.e., the sole [forbidden zone] for voltage in a two-bit system). The more error correction logic there is, the lower the speed.

> Digital computers have achieved absurdly high speeds with near-zero errors.

We have bumped up against the highest possible processor frequency with single-level states ({0, 1}). If we want to add more states to a conductor (e.g., {00, 01, 10, 11}), we will need to slow down the processors.

> If we would add voltage levels inbetween, we would in fact have to decrease the frequencies to properly distinguish between them. The reason for that is that whenever two power lines are next to each other, you are effectively creating a capacitor. Which means that there is now a certain amount of energy stored inbetween them. If you turn one line off, the voltage does not immediately drop to 0, it takes a little time to go there because of that capacitive effect. The problem becomes worse with more wires, tinier chips and higher frequencies.

With two states, the amount of time it takes for voltage to jump between them is constant, whereas with multiple states, a voltage change between non-adjacent states is larger than the change between the adjacent states.

> We have to sacrifice consistent clocking. On a binary line, everything is clocked at the same rate. On a line with more than two states, we want to clock the line based on the distance of the state change. On a 8-value line, we would want to make the clock timing for '0' to '8' much longer than the clock timing for '3' to '4'.

This leads to variable clock speeds on a processor, which is yet another complication to manage. And that's not all. With every additional state comes the additional forbidden zone of voltages. Each forbidden zone widens the gap between the min and max voltages. The larger the gap, the longer it takes to traverse it as the bits flow through the circuit.

> We want the difference between maximum and minimum voltage to be as small as possible. The larger the range, the longer it takes to switch between voltages - and that means our clock speed is lower. So in the simplest sense, two value logic is the most efficient use of that voltage space. The more values you add, the more of those indeterminate zones you need (and the more voltage range you waste).

One might say that quantum computers work with states that represent multiple bits of information even in their most basic components. However, that is not to say that a [qubit] can represent any more information than a bit.

> A quantum computer does not simply add additional states. It actually also only retains 0s and 1s. It's just that the different possible arrangements of 0s and 1s can for some specific kinds of calculations make use of quantum effects, so that the statistics of the random results give you a meaningful pattern that solves the calculation.

Up until very recently, all computers have been analog. It was only when the digital computer was invented did the computing revolution begin. That didn't stop some from continuing to construct other kinds of analog computers. A quantum computer is the analog computer of today.

> Quantum computers are not electrical. Currently, the only ones I know of are optical. They do not work in the same way, though, and do not 'add more states'. The way they work is fundamentally totally different from regular binary computers, comparing superpositions and doing completely different operations.

A quantum computer performs operations on [tensor products] of qubits and then filters out the wrong answers from its exponential result set. This method of solving a problem is more efficient for [some problems], but for the vast majority of others it is not.

> A quantum computer is really bad at computing simple arithmetic. You need several qubits to do any sort of addition because a bunch of those qubits will give you the wrong answer.

The system that actually use multi-level states is flash memory, not the quantum computer.

> We do this with flash memory for solid state drives. Except, it is all still in binary. But we, for example, store 00, 01, 10, and 11 in the same transistor (the physical thing the data gets stored in), instead of just a simple 1 or 0. We of course have moved further, and can now store 00000 - 11111 in a single cell. For anyone curious, you can read up on multi level cell flash memory.

Data transmission in flash memory or Ethernet is different from binary circuits connected to a processor in that there is no clock. In binary circuits, low voltage is 0 and high voltage is 1, and there's a clock set by the processor, so if the voltage remains low for n cycles of the clock, we know that n 0 bits were transferred. In [Ethernet], there's no processor clock, so data must be decoded from transitions in voltages.

> 100 Megabit Ethernet uses three voltage levels on the cable to transmit information. Gigabit Ethernet uses five levels. This was done because they wanted to attain faster speeds using the same cables as older slower Ethernet versions. But it turned out to be less efficient because they had to add a bunch of error correction overhead to prevent reading the voltages wrong.

In 10BASE-TX, a transition from high to low voltage is 0 and a transition from low to high voltage is 1. In 100BASE-TX, there are three voltage states, and transitions between them encode data: -1, 0, +1. In 1000BASE-T, there are five voltage states.

[forbidden zone]: /blog/books/principles-of-computer-hardware/02-01-analog-digital.md
[some problems]: /blog/books/quantum-computing-gentle-introduction/1-introduction.md
[qubit]: /blog/books/quantum-computing-gentle-introduction/2-single-qubit-quantum-systems.md
[tensor products]: /blog/books/quantum-computing-gentle-introduction/3-multiple-qubit-systems.md
[Ethernet]: /blog/books/principles-of-computer-hardware/reading-along/eli5_how_data_or_electric_signals_travel_through_ethernet_cable.md
