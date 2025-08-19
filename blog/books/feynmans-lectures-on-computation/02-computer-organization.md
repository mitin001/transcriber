# 2. Computer Organization

An adder of two bits takes two inputs, A and B, and outputs bits S (sum) and C (carry). S = A XOR B. C = A AND B. Therefore, an adder of two bits can be constructed with two gates: XOR and AND.

Table 1
Figure 2

Once we make 2n-1 such adders, we can join them together to construct an adder for two n-bit numbers. An adder, like any electronic component, can be made from a collection of AND, OR, and NOT gates. That is, the XOR gate can be constructed in terms of the AND, OR, and NOT gates.

FIGURE 2.9

Actually, just the AND and NOT gates if we like. The or gate can be constructed from the AND and NOT gates.

> A OR B is the same as NOT{(NOT A) AND (NOT B)}.

FIGURE 2.8

Logic gates can be constructed with transistors. A transistor controls the flow of current through it based on the electrical input applied to its gate.

Figure 12

If there's input to the gate, a [depletion-type transistor] switches off and stops the current flowing through it, which is a NOT gate. [Voltage-controlled resistors] can also be made from transistors in this way. These circuits cannot be constructed without resistors.

> A transistor is a three-connection device: one input is connected to the gate signal, one to ground, and the other to a positive voltage via a resis-tor. The central property of the transistor is that if the gate has a distinctly positive voltage, the component conducts, but if the gate is zero or distinctly negative, it does not.

A NAND gate is a depletion-type transistor with two gates, each supplying an argument to the NAND operator. 

Figure 13

[depletion-type transistor]: /blog/books/bebop/4-semiconductors.md
[Voltage-controlled resistors]: /blog/books/bebop/g-semiconductors.md
