# [9. Newton’s Laws of Dynamics](https://www.feynmanlectures.caltech.edu/I_09.html)

Precise, technical language is not the same as everyday language. We sometimes hear momentum being used interchangeably with velocity. This is wrong in a technical sense.

> Momentum is not the same as velocity.

Momentum is a measure of how hard we have to push an object to make it move.

> If we exert a certain push with our arms on an object that is light, it moves easily; if we push just as hard on another object that is much heavier in the usual sense, then it moves much less rapidly

Weight and mass are different things, even though they are numerically equal on Earth.

> Actually, we must change the words from “light” and “heavy” to less massive and more massive, because there is a difference to be understood between the weight of an object and its inertia. (How hard it is to get it going is one thing, and how much it weighs is something else.) Weight and inertia are proportional, and on the earth’s surface are often taken to be numerically equal.

Had we colonized Mars, we would know the difference between them intimately.

> On Mars, weights would be different but the amount of force needed to overcome inertia would be the same.

Mass describes inertia, the idea that unless acted on by an external force, objects at rest remain at rest and objects in motion remain in motion.

> We use the term mass as a quantitative measure of inertia.

Force is a derivative of momentum with respect to time: F=d(mv)/dt.

> The momentum of an object is a product of two parts: its mass and its velocity.

Mass changes with velocity, so this derivative is not as trivial to compute as it may seem at first, but mass is approximately constant at low speeds, which makes the approximate computation of this derivative trivial. The mathematical description of force as a time derivative of momentum not only suggests this convenient approximation but also predicts the direction of motion. Because velocity is a vector, its derivative, the force, is also a vector in the same direction.

> The direction of the change in the velocity and the direction of the force are the same.

The law of dynamics tells us that the force of a spring, which can be measured by the displacement x of a weight on its end times the spring constant k, is the time derivative of the momentum of the weight: -kx=m(dvₓ/dt).

![1746161692131672282035734709741](https://github.com/user-attachments/assets/0ba775c8-731e-481d-8892-bf1aee38c544)

If we find a spring and a weight such that k=m, the equation simplifies to -x=dvₓ/dt=aₓ.

![17461617173959150532959663823814](https://github.com/user-attachments/assets/be2319b0-a778-46dc-a996-33bded51bd12)

If we start at x=1,vₓ=0 at t=0 and advance with time step size of ϵ=0.1s, we will notice that the position x fits the cosine curve.

![17461617334186794755071748320707](https://github.com/user-attachments/assets/f15c3733-ccad-410f-bb91-01303e554905)

For greater accuracy, the velocities were calculated at intermediate times (t+ϵ/2).

![17461617463648133261512592680083](https://github.com/user-attachments/assets/689ed718-5492-43e5-bb1e-6e225117ee3c)

The elliptical orbits of planets can also be calculated numerically, even the part where a planet speeds up when near the focus containing sun and slows down when near the other focus of the ellipse.

![17461617605277664109888862274366](https://github.com/user-attachments/assets/a17a8ff7-883a-4c8d-bc0d-30525d151277)

The values for x and y can be calculated from dvₓ/dt=-x/r³, dvᵧ/dt=-y/r³, r=sqrt(x²+y²) starting with (x,y)=(0.5,0), vₓ=0, vᵧ=1.63.

![17461619625262856514684700802983](https://github.com/user-attachments/assets/bf93a2ca-327c-40d7-b544-b330b5fec055)

The derivatives of velocity components result from forces of gravity between two massive bodies and setting, for convenience, GM=1.

![17461618015476276220644051162284](https://github.com/user-attachments/assets/8fb4d7af-9038-4757-af47-526dbf8624c4)

Because Fₓ and |F| are sides of a triangle similar to the one with sides x and r, Fₓ/|F|=-x/r.

![17461618184236086000049203399839](https://github.com/user-attachments/assets/67692491-7fa6-4ef5-8d20-4f9ed5563fb2)

We know from the theory of gravitation that |F|=GMm/r². We know from the law of dynamics that Fₓ=m(dvₓ/dt). We know from the above that Fₓ/|F|=-x/r. Putting it all together, m(dvₓ/dt)=-GMmx/r³. Using this equation and a similar one for Fᵧ, we can trace the orbit of the planet's motion around the sun.
