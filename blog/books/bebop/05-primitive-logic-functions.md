# 5. Primitive Logic Functions

Logic functions are implemented by electronic components called gates. Why do we call them gates? Presumably, someone saw a large herd of sheep leaving the stall through a narrow farmyard gate and thought that those were just like the electrons flowing through circuits.

> The reasoning behind using the term gate is that these functions serve to control electronic signals in much the same way that farmyard gates can be used to control animals.

If you implement just one kind of logic function (a NAND or a NOR) and make a component out of it, then you can use this component to implement all other logic functions (AND, OR, XOR, XNOR, and even NOT and BUF).

> If you connect the two inputs of a NAND gate together, you end up with a NOT.

<img width="864" height="306" alt="17551008173276050728607367407378" src="https://github.com/user-attachments/assets/78a9fa38-7216-49af-b335-e14a00490db2" />

Because NOT can be implemented with NAND and AND is NOT AND, then AND can be implemented purely with NAND components.

<img width="864" height="216" alt="17551007938592329490236177422386" src="https://github.com/user-attachments/assets/56467114-c860-40bb-8de1-62361754a6d5" />

And so on...
