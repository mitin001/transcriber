# [18. Rotation in Two Dimensions](https://www.feynmanlectures.caltech.edu/I_18.html)

An external force acts on an object's center of mass. The center of mass changes if the internal composition of the object changes, e.g., when a person walks around in a ship.

> When one walks toward the front, the ship goes toward the back so as to keep the average position of all the masses in exactly the same place.

Rocket propulsion works the same way. The rocket shoots out massive amounts of gas, shifting the center of mass of the rocket-gas system so much, the rocket shoots forward.

> If we start with a rocket at zero velocity and we spit some gas out the back end, then this little blob of gas goes one way as the rocket ship goes the other, but the center of mass is still exactly where it was before. So we simply move the part that we are interested in against the part we are not interested in.

By analyzing forces in terms of work they do on an object, we deduce that there are two kinds of momentum. Force is the rate of change of linear momentum. Force generates a field, and an object moving through the field opposing this force does work. However, an object must also be doing work by turning. An object turns through an angle in a force field. In other words, it has angular momentum. The rate of change of angular momentum is called torque.

> We shall get to the theory of torques quantitatively by studying the work done in turning an object, for one very nice way of defining a force is to say how much work it does when it acts through a given displacement. We are going to try to maintain the analogy between linear and angular quantities by equating the work that we do when we turn something a little bit when there are forces acting on it, to the torque times the angle it turns through. In other words, the definition of the torque is going to be so arranged that the theorem of work has an absolute analog: force times distance is work, and torque times angle is going to be work.

In two dimensions, for some object turning around the origin of some coordinate system, the torque is the difference between the vertical force weighted by the distance to the horizontal axis and the horizontal force weighted by the distance to the vertical axis.

![17477768284157239953519116537851](https://github.com/user-attachments/assets/104ba116-0804-44c4-9760-bdcc601d0c01)

> The torque is also often called the moment of the force.

If we add a second dimension to a system, the property of rotation emerges, just as making a constant into a variable gives us the ability to find a derivative for this quantity. In analyzing a rate of change of a quantity, we must work with its derivative. Similarly, in analyzing the behavior of a function in multiple dimensions, we must work with its moment.

> In mathematics “moment” means weighted by how far away it is from an axis.

Thus the moment of a force is a necessary consequence of a force propagating in multiple dimensions. Therefore, any object has torque, which is the rate of change of its angular momentum.

> Just as external force is the rate of change of a quantity p, which we call the total momentum of a collection of particles, so the external torque is the rate of change of a quantity L which we call the angular momentum of the group of particles.
 
![17477768183301104145696212628498](https://github.com/user-attachments/assets/f77cdf4a-5c1d-43ae-b817-e90fe748c705)

The angular momentum relates to the linear momentum in the same way torque relates to force. The angular momentum is the moment of the linear momentum.
 
> If we want to know the angular momentum of a particle about an axis, we take only the component of the momentum that is tangential, and multiply it by the radius. In other words, what counts for angular momentum is not how fast it is going away from the origin, but how much it is going around the origin. Only the tangential part of the momentum counts for angular momentum.

Just as there is a law of conservation of linear momentum, there's a law of conservation of angular momentum.

> If no external torques act upon a system of particles, the angular momentum remains constant.

The formula for angular momentum L=Iω is analogous to the formula for linear momentum p=mv.

> The momentum is mass times velocity. Velocity is replaced by angular velocity, and we see that the mass is replaced by a new thing which we call the moment of inertia I, which is analogous to the mass.

Regular mass is insufficient to calculate the angular momentum. We need a quantity that weights mass by the square of the distance to the axis of rotation, i.e., moment of inertia.

> A body has inertia for turning which depends, not just on the masses, but on how far away they are from the axis. So, if we have two objects of the same mass, when we put the masses farther away from the axis, the inertia for turning will be higher.

The further away an object from its axis of rotation the more inertia it has against turning.

![17477767867114889071932803051509](https://github.com/user-attachments/assets/eece4166-dd51-468d-b493-676cd940d0c7)

> A weight M is kept from falling very fast because it has to turn the large weighted rod. At first, the masses m are close to the axis, and M speeds up at a certain rate. But when we change the moment of inertia by putting the two masses m much farther away from the axis, then we see that M accelerates much less rapidly than it did before, because the body has much more inertia against turning. The moment of inertia is the inertia against turning, and is the sum of the contributions of all the masses, times their distances squared, from the axis.

For that reason, if you're rotating with your arms initiate outstretched, draw them in and watch your angular speed increase. This is because you're reducing your moment of inertia, so the angular velocity must increase to make up for it to obey the law of conservation of angular momentum.

> The mass of an object never changes, but its moment of inertia can be changed. If we stand on a frictionless rotatable stand with our arms outstretched, and hold some weights in our hands as we rotate slowly, we may change our moment of inertia by drawing our arms in, but our mass does not change. When we do this, all kinds of wonderful things happen, because of the law of the conservation of angular momentum: If the external torque is zero, then the angular momentum, the moment of inertia times omega, remains constant. Initially, we were rotating with a large moment of inertia I₁ at a low angular velocity ω₁, and the angular momentum was I₁ω₁. Then we changed our moment of inertia by pulling our arms in, say to a smaller value I₂. Then the product Iω, which has to stay the same because the total angular momentum has to stay the same, was I₂ω₂. So I₁ω₁=I₂ω₂. That is, if we reduce the moment of inertia, we have to increase the angular velocity.
