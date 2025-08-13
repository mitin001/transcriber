# 5. Primitive Logic Functions

Logic functions are implemented by electronic components called gates. Why do we call them gates? Presumably someone saw a large herd of sheep leaving the stall through a narrow gate and thought that those were just like the electrons flowing through circuits.

> The reasoning behind using the term gate is that these functions serve to control electronic signals in much the same way that farmyard gates can be used to control animals.

If you implement just one kind of logic function (a NAND or a NOR) and make a component out of it, then you can use this component to implement all other logic functions (AND, OR, XOR, XNOR, and even NOT and BUF).

> If you connect the two inputs of a NAND gate together, you end up with a NOT.

Fig8

Because NOT can be implemented with NAND and AND is NOT AND, then AND can be implemented purely with NAND components.

Fig9

And so on...
