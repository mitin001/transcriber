# 2.2. Fundamental gates

Every portion of conducting material between two [gates] measures the same voltage.

> The voltage at any point along a conductor is constant and therefore the logical state is the same everywhere on the line. If a line is connected to the input of several gates, the input to each gate is the same.

[Classifying voltages] into more than two states (e.g., {00, 01, 10, 11} instead of just {0, 1}) is deemed [too error-prone]. Because we can't distinguish between more than two states, we can't connect outputs of two gates together. That is, because it can only be classified into one of two states, there can only be one output on a conductor sticking out of a gate.

> A corollary of the statement that the same logic state exists everywhere on a conductor is that a line must not be connected to the output of more than one circuit—otherwise the state of the line will be undefined if the outputs differ.

The AND gate is made of two switches in sequence. If input A = 0, switch A is open; if A = 1, switch A is closed. Similarly for input B and switch B. If both switches are open, the current can flow, and the output of the gate is 1. If any of the switches are open, the current cannot flow, and therefore the output of the gate is 0.

Fig3a, fig4

The OR gate is made of two switches in parallel. If either of them is closed (A = 1 or B = 1), the current can reach the end of the gate, and so its output is 1.

Fig5a, fig6

AND takes precedence over OR. To evaluate A.B+C, we must put switches A and B on one track in series and switch C on the parallel track. Computers use OR and AND masks to set and clear bits in n-bit binary words.

p.30 lower right

Imagine we want to activate a circuit when both of its inputs are low-voltage. We could use the fact that 0 OR 0 = 0 and for all other combinations of inputs the OR gate produces 1. With that, we could just invert the output of such an OR gate, and the circuit would only be activated when A = B = 0, which is the desired outcome here.

Fig11

However, a situation where both inputs need to be same to activate a circuit sounds to a logician more like one that calls for an AND gate, so it is customary to actually use the AND gate in situations like this, albeit with inverters. Had we designated low-voltage signals to be 1 and high-voltage signals to be 0 (as in negative logic), we wouldn't think to use an OR gate here.

> The gate is actually performing an AND operation on low-level signals.

Inhibitory signals typically go through inverters before they are fed to logic gates, so the logic is clearer.

Fig12

> Suppose a circuit is activated by a low-level signal if input A is low and input B high, or input D is high, or input C is low.

A NOT gate is an inverter: an [electromechanical switch] or a [MOSFET]. An EOR gate is a conditional inverter, conditioned on whether the control input is set to 1.

p.33

> A programmable inverter.

[electromechanical switch]: /blog/books/bebop/04-semiconductors.md
[gates]: /blog/books/bebop/05-primitive-logic-functions.md
[MOSFET]: /blog/books/bebop/g-semiconductors.md
[Classifying voltages]: /blog/books/principles-of-computer-hardware/02-01-analog-digital.md
[too error-prone]: /blog/books/principles-of-computer-hardware/reading-along/eli5_why_are_computers_limited_to_0s_and_1s.md
