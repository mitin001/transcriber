# [22. Algebra](https://www.feynmanlectures.caltech.edu/I_22.html)

Algebra is a language created to abstract tedious counting operations. Suppose we had a number a and we needed to count b up from it. This would be tedious had we not expressed this in familiar algebraic terms as a+b.

> If we start with a certain number a, an integer, and we count successively one unit b times, the number we arrive at we call a+b, and that defines addition of integers.

Suppose we needed to add a, b times. Algebra has an abstraction for this, too: ab.

> If we start with nothing and add a to it, b times in succession, we call the result multiplication of integers; we call it b times a.

Suppose we need to multiply by a, b times. In algebraic terms, this is aᵇ.

> We can also have a succession of multiplications: if we start with 1 and multiply by a, b times in succession, we call that raising to a power: aᵇ.

Subtraction and division are the inverse operations for addition and multiplication. In algebra, we can write an expression in terms of one variable and then solve it for the other variable thanks to inverse operations.

![17493195688615207854448094882581](https://github.com/user-attachments/assets/c72dc6bc-5500-436d-93bc-7ddc89c281ff)

Raising to a power has two inverse operations depending on whether we're solving for the base or the power. Unlike raising to a power, addition and multiplication are commutative. A commutative operation is symmetric and, therefore, only has one way to define an inverse.

> Because bᵃ and aᵇ are not equal, there are two inverse problems associated with powers.

Not only do addition, multiplication, and raising to a power create the need for their inverse operations, but they also imply the existence of other types of numbers. When a<b, the operation a-b returns a negative number and cᵃ⁻ᵇ returns a rational number that is not necessarily an integer. When we try to raise an integer to a non-integer rational power, the result is not necessarily a rational number. Irrational numbers represent quantities that cannot be represented as a fraction of two integers. Imaginary numbers and trigonometric functions also arise out of these rules.

![17493195414347689879133117159466](https://github.com/user-attachments/assets/511d85f8-31ff-4882-bef6-00ce6e5d865f)

If we raise a number to an imaginary power (one that is a function of i=√-1), it evaluates to a complex number. As we vary the scale of the power, the real and the imaginary parts of the result vary periodically. There is a constant offset between the real part and the imaginary part. This allows us to model them by the sin and cos functions.

![17493195291981084220848617233466](https://github.com/user-attachments/assets/8c573db4-c794-4417-a4f8-e277414ad8d3)

Therefore, a complex number can be written as a real number raised to a scaled imaginary power. The natural base e is typically chosen for this. When we express a complex number in terms of e, the offset between the real and imaginary parts is pi/2.

> Logarithms to any other base are merely multiples of logarithms to the base 10. The base 10 was used only because we have 10 fingers, and the arithmetic of it is easy, but if we ask for a mathematically natural base, one that has nothing to do with the number of fingers on human beings, we might try to change our scale of logarithms in some convenient and natural manner, and the method which people have chosen is to redefine the logarithms by multiplying all the logarithms to the base 10 by 2.3025… This then corresponds to using some other base, and this is called the natural base, or base e.

![17493195529474629455478520683625](https://github.com/user-attachments/assets/003aed0c-99bc-469a-89aa-15fa9720d58e)

![1749319471298486863477630407591](https://github.com/user-attachments/assets/abbc9292-d195-41ea-9e8f-83a622dab79b)

![17493194942485484305177450166021](https://github.com/user-attachments/assets/5f3768e2-016b-4b41-a139-6dabe54bee70)

![17493195067136449200521134777891](https://github.com/user-attachments/assets/417d2e0b-92c5-44ab-aa89-7e25dbe0df63)

![1749319516219362079328795506816](https://github.com/user-attachments/assets/65ed5ac2-042b-489f-8dc3-4fcfd3003157)

> Our table of the successive square roots of 10 can be used to compute, not just logarithms, but also 10 to any power, so let us use it to calculate this natural base e. For convenience we transform 0.434310… into 444.73/1024. Now, 444.73 is 256+128+32+16+8+4+0.73. Therefore e, since it is an exponent of a sum, will be a product of the numbers (1.77828)(1.33352)(1.074607)(1.036633)(1.018152)(1.009035)(1.001643)=2.7184.
