# 6. Using Transistors to Build Logic Gates

To implement a NOT gate with CMOS (Complementary Metal-Oxide Semiconductor) technology, we need two different MOSFET transistors: a PMOS transistor (Tr1) and an NMOS transistor (Tr2). When the control input to the gate (a) is 0, then Tr1 [lets] current through and Tr2 does not, so the output of the gate (y) is 1. It flows from the wire carrying the high voltage VDD.

F2

On the other hand, when the input a = 1, then Tr2 lets the current through and Tr1 does not, so the output y = 0. It flows from the wire carrying the low voltage VSS. Because these two types of transistors behave in opposite ways, they make it so the gate will predictably invert its input.

F1

Note that the current in the wire a will never reach the wire y. The wire a terminates at the two transistors, one of which will allow current to pass and another will not, depending on the voltage in the wire a (that's how a MOSFET reacts to voltage). The output of the gate will be the voltage from the CMOS circuit's power supply: either the low voltage VSS or the high voltage VDD (VSS and VDD encoding the binary values 0 or 1). This makes sense when we have more than one input to the gate. There can be multiple inputs, but there will always be one output with only one of two possible values: the voltage carried by VDD (1) or the voltage carried by VSS (0). The NAND gate can have any number of inputs, but only one output with two possible values. 

F5

Drawing the diagram with transistors summarizes all the possible combinations of open and closed switches as one diagram. 

F4

If we drew diagrams for a 3-input NAND gate with switches, we would need to draw 2^3=8 of such diagrams. Transistors simplify things.

> A 3-input version could be constructed by adding an additional PMOS transistor in parallel with Tr1 and Tr2 , and an additional NMOS transistor in series with Tr3 and Tr4.

Because both PMOS and NMOS transistors are cheap to produce at scale, CMOS has become a popular implementation of logic gates. The consequence of that is that the fundamental gate in electronics is now the NAND gate, the inverted counterpart of the AND gate we might encounter first when we get introduced to logic functions.

> Inverting functions typically require fewer transistors and operate faster than their noninverting counterparts.

An AND gate with two inputs requires six transistors in CMOS (it's a NAND gate piped to a NOT gate) whereas a NAND gate with two inputs requires only four transistors.

F6

That's not to say that simpler implementations of the AND gate don't exist, they do.

> It’s possible to create an AND gate using only one transistor and a resistor.

Similarly, an XOR gate can be created with just four transistors if we allow gate inputs to serve as both control inputs for transistors as well as data inputs to logic gates within them (e.g., the NOT gate).

F12

> Transistors TR3 and TR4 are connected in such a way that input and internal data signals pass between their data (source and drain) terminals. This technique, which is known as pass-transistor logic , can be attractive in that it minimizes the number of transistors required to implement a function. However, pass-transistor logic is not necessarily the best approach because strange and unexpected effects can ensue if you’re not careful and you don’t know what you’re doing.

Introducing pass-transistor logic and capacitors complicates logic gate construction. It's easier and more interoperable to just use the plain CMOS implementation.

> The input signals and internal data signals are used only to drive control (gate) terminals on the transistors.

CMOS is the logic gate implementation that makes the most sense at scale. In a CMOS NAND gate, the PMOS transistors are in parallel and the NMOS transistors are in series. The CMOS NOR gate is the opposite: the NMOS transistors are in parallel and the PMOS transistors are in series.

F7

> A 3-input version could be constructed by adding an additional PMOS transistor in series with Tr1 and Tr2 , and an additional NMOS transistor in parallel with Tr3 and Tr4.

Just as the AND gate is the NAND gate piped to a NOT gate, the OR gate is the NOR gate piped to a NOT gate. 

F8