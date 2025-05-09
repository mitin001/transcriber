# [13. Work and Potential Energy](https://www.feynmanlectures.caltech.edu/I_13.html)

The time derivative of the kinetic energy of an object is the power (delivered to an object by a force): dT/dt=Fv. This is a dot product of two vectors: force and velocity are both vectors.

> F⋅v is called power: the force acting on an object times the velocity of the object (vector “dot” product) is the power being delivered to the object by that force.

If a force field interacts with an object moving with a certain velocity vector, the kinetic energy of the object changes. It's the product of the force and velocity.

> The rate of change of kinetic energy of an object is equal to the power expended by the forces acting on it.
 
Force is also the position derivative (ds) of kinetic energy (T): F=dT/ds. Multiplying both sides by ds, we get dT=F⋅ds, which means T can be computed by integrating F⋅ds. Because s is a vector, we must compute the integral of the force in the direction of all three dimensions: Fdx, Fdy, and Fdz.

> If an object is moving in any way under the influence of a force, moving in some kind of curved path, then the change in K.E. when it goes from one point to another along the curve is equal to the integral of the component of the force along the curve times the differential displacement ds, the integral being carried out from one point to the other. This integral also has a name; it is called the work done by the force on the object. We see immediately that power equals work done per second. We also see that it is only a component of force in the direction of motion that contributes to the work done.

As we compute the integral of the force in a given dimension, we are computing the work being done by the force in this dimension. We get the result in newton-meters = joules (of energy supplied to the object by the force). If we computed the integral of the force times the velocity with respect to time, we would get power in newton-meters per second = joules per second = watts.

> Since forces are measured in newtons, and we multiply by a distance in order to obtain work, work is measured in newton⋅meters (N⋅m), but people do not like to say newton-meters, they prefer to say joules (J). A newton-meter is called a joule; work is measured in joules. Power, then, is joules per second, and that is also called a watt (W). If we multiply watts by time, the result is the work done. The work done by the electrical company in our houses, technically, is equal to the watts times the time. That is where we get things like kilowatt hours, 1000 watts times 3600 seconds, or 3.6×10⁶ joules.

We buy electricity from energy companies in kilowatt hours. That is, we're buying joules of energy = work done in our home electrical system. Energy is a limited resource. There is no such thing as a perpetual motion machine. We can't get more energy from a system than we put in. We can verify this by tracing any path in a gravitational field and always ending up calculating the net work done to be zero.

> The work done in going around any path in a gravitational field is zero.

![17467644576284178171370402430541](https://github.com/user-attachments/assets/e9e4f105-ea0e-4f36-be42-ebdc5e59dce7)

If we approximate the path with a large number of straight lines (hypotenuses), the work done by traversing each hypotenuse ac is the same as work done by traversing the horizontal leg ab when the force is in the horizontal direction.

![17467644081948894071754389025213](https://github.com/user-attachments/assets/e274b42a-34c3-4b33-a94b-eefdcb081999)

![17467644384987406539587595207996](https://github.com/user-attachments/assets/a70e5c05-6b4d-42bf-a81a-4a9e8c4f875c)

> The work done in going along the sides of a small triangle is the same as that done going on a slant, because s cosθ is equal to x.

If we make the triangles sufficiently small, we don't need to treat force as a vector or a function of position. Treating it as a scalar constant simplifies the computation.

> The triangle is so small that the force is essentially constant over the entire triangle.
