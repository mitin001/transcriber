# [Why are computers limited to 0s and 1s?](https://old.reddit.com/r/explainlikeimfive/comments/tqplv4/eli5_why_are_computers_limited_to_0s_and_1s_why/)

Making electronic components any more complex than those operating on binary bits means making them more error-prone.

> Adding a third or fourth state adds more room for error by bringing your different possibilities closer together.

To support more than the bare minimum number of states in an electric component means to introduce more than the bare minimum error correction logic (i.e., the sole [forbidden zone] for voltage in a two-bit system). The more error correction logic there is, the lower the speed.

> Digital computers have achieved absurdly high speeds with near-zero errors.

One might say that quantum computers work with states that represent multiple bits of information even in their most basic components. However, that is not to say that a [qubit] can represent any more information than a bit.

> A quantum computer does not simply add additional states. It actually also only retains 0s and 1s. It's just that the different possible arrangements of 0s and 1s can for some specific kinds of calculations make use of quantum effects, so that the statistics of the random results give you a meaningful pattern that solves the calculation.

Up until very recently, all computers have been analog. It was only when the digital computer was invented did the computing revolution begin. That didn't stop some from continuing to construct other kinds of analog computers. A quantum computer is the analog computer of today.

> Quantum computers are not electrical. Currently, the only ones I know of are optical. They do not work in the same way, though, and do not 'add more states'. The way they work is fundamentally totally different from regular binary computers, comparing superpositions and doing completely different operations.

A quantum computer performs operations on [tensor products] of qubits and then filters out the wrong answers from its exponential result set. This method of solving a problem is more efficient for [some problems], but for the vast majority of others it is not.

> A quantum computer is really bad at computing simple arithmetic. You need several qubits to do any sort of addition because a bunch of those qubits will give you the wrong answer.

[forbidden zone]: /blog/books/principles-of-computer-hardware/02-01-analog-digital.md
[some problems]: /blog/books/quantum-computing-gentle-introduction/1-introduction.md
[qubit]: /blog/books/quantum-computing-gentle-introduction/2-single-qubit-quantum-systems.md
[tensor products]: /blog/books/quantum-computing-gentle-introduction/3-multiple-qubit-systems.md
