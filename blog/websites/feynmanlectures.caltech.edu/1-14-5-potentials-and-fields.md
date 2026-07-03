# [14-5. Potentials and Fields](https://www.feynmanlectures.caltech.edu/I_14.html#Ch14-S5)

When two objects are near each other, a gravitational field forms between them. Every point (x,y,z) in this field has potential that can be calculated.

> The objects A and B generate the field, i.e., they “make” the vector C. When an object is put in a field, the force on it is equal to its mass times the value of the field vector at the point where the object is put. We can also do the same with the potential energy. Since the potential energy, the integral of (−force)⋅(ds) can be written as m times the integral of (−field)⋅(ds), a mere change of scale, we see that the potential energy U(x,y,z) of an object located at a point (x,y,z) in space can be written as m times another function which we may call the potential Ψ. The integral ∫ C⋅ds=−Ψ, just as ∫ F⋅ds=−U; there is only a scale factor between the two.

![17470636399958605957925840218492](https://github.com/user-attachments/assets/d8aa7dde-c044-4541-a538-f58846852fa5)

Potential energy of an object with mass m at point (x,y,z) is simply the potential at point (x,y,z) scaled by mass m.

> By having this function Ψ(x,y,z) at every point in space, we can immediately calculate the potential energy of an object at any point in space, namely, U(x,y,z)=mΨ(x,y,z).

Every time we introduce an object into this system, it increases the potential at each point (but the effect drops off inversely with the distance away from the object). The superposition of potentials takes place: potentials are addictive.
 
> Suppose we have point masses m1, m2, … at the points 1, 2, … and we wish to know the potential Ψ at some arbitrary point p. This is simply the sum of the potentials at p due to the individual masses taken one by one.

![17470636560593586538258797660090](https://github.com/user-attachments/assets/f2d1b662-0abe-430b-8080-7b7066ae5168)

This is why there is superposition of forces and superposition of potential energies. If the potential is constant (e.g., as in a spherical shell), there is no field, i.e., an object in it has no potential energy and no force acts on it; no work is done when an object moves.
 
> When the potential is constant, there is no field, or when the potential energy is constant there is no force, because if we move an object from one place to another anywhere inside the sphere the work done by the force is exactly zero. Why? Because the work done in moving the object from one place to the other is equal to minus the change in the potential energy (or, the corresponding field integral is the change of the potential). But the potential energy is the same at any two points inside, so there is zero change in potential energy, and therefore no work is done in going between any two points inside the shell. The only way the work can be zero for all directions of displacement is that there is no force at all.

We take partial derivatives of potentials, one in each dimension, to find the field.

> Use a ∂ instead of a d as a warning that it is a derivative with some other variables kept constant. This is called a partial derivative; it is a derivative in which we vary only x.

For example, the partial derivative of potential energy with respect to x gives us the force opposing the field in the x direction.

> The force in the x-direction is minus the partial derivative of U with respect to x: Fx=−∂U/∂x.

Just as we can get the force from the potential energy, we can get the field from the potential.

> We get the field from the potential in exactly the same way: Cx=−∂Ψ/∂x, Cy=−∂Ψ/∂y, Cz=−∂Ψ/∂z.

The field is a vector evidenced by its partial derivatives.

> Since C is a vector and has x-, y-, and z-components, the symbolized ∂/∂x, ∂/∂y, and ∂/∂z which produce the x-, y-, and z-components are something like vectors.

Fx=−∂U/∂x, Fy=−∂U/∂y, Fz=−∂U/∂z can be rewritten more concisely as F=−∇U. Cx=−∂Ψ/∂x, Cy=−∂Ψ/∂y, Cz=−∂Ψ/∂z can be rewritten as C=−∇Ψ.

>  ∇, called “grad” or “gradient”, which is not a quantity but an operator that makes a vector from a scalar. It has the following “components”: The x-component of this “grad” is ∂/∂x, the y-component is ∂/∂y, and the z-component is ∂/∂z.

We calculate potentials not only due to masses but also due to electric charges. Because of the geometry between the electric and magnetic fields (they are orthogonal), we can disregard the magnetic field in the calculation of potentials due to electric charges.

> Since the force due to magnetism on a moving charge is at right angles to the velocity, no work is done by the magnetism on the moving charge because the motion is at right angles to the force. Therefore, in calculating theorems of kinetic energy in electric and magnetic fields we can disregard the contribution from the magnetic field, since it does not change the kinetic energy. We suppose that there is only an electric field. Then we can calculate the energy, or work done, in the same way as for gravity, and calculate a quantity ϕ which is minus the integral of E⋅ds, from the arbitrary fixed point to the point where we make the calculation, and then the potential energy in an electric field is just charge times this quantity ϕ: ϕ(r)=−∫ E⋅ds, U=qϕ.

The difference in potential in an electric field (Δϕ) is the voltage difference of that field. For example, a new AA or AAA battery has a potential difference of 1.5 V between its positive and negative terminals. If we put this battery into a circuit of an electric device, the electrical current flows through the device, supplying it with the power it needs to operate.
