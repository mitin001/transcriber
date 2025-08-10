# [What is the purpose of these loops of wire?](https://old.reddit.com/r/AskElectronics/comments/hexv30/what_is_the_purpose_of_these_loops_of_wire/)

<img src="https://i.redd.it/8tou6bxurt651.jpg">

> The motor creates high frequency electrical noise. They block the noise from flowing back into the supply circuit.

Thanks to the loops in the wire, the HF electrical noise can be filtered out: it dissipates as heat.

> The coils from an inductor which resists rapid changes in the flow of current. The current flowing through it creates a magnetic eddy currents in the circle of ferrite which are dissipated internally as heat.

The loops of the wire form an inductor, which stores energy in the magnetic field around it.

> The energy goes into the magnetic field (which gets focused in the toroid) and is released later.

Noisy USB cables have blocks of ferrite on them for the same reason.

> In the case of USB cables, the reason they have them is because when the device they're attached to was tested for electromagnetic compliance (EMC) the lab has likely found it to be over one or more limits, and that adding a ferrite made it compliant. So the supplier chose to go with that solution and simply add a ferrite to every cable rather than redesign the product to reduce the noise.

The requirement for noise suppression on these USB cables is minimal.

> Ferrites only really buy a few dB of attenuation.

The magnetic field resists changes in current, that is, it resists HF AC current. This is similar to how capacitors impede changes in voltage because of their stored electrical energy.

> Inductors resist instantaneous changes in current flow, and capacitors resist instantaneous changes in voltage level. The reasons for these in turn are that inductors store energy in the form of magnetic field and release that energy in opposition to fast changes in current. Capacitors in turn store energy in the form of electric field and release that energy in opposition to fast changes in voltage.

Inductors do not impede LF AC or DC current.

> Inductors look invisible to low frequency AC (note that DC == AC at 0Hz) because they’re effectively just a wire. Current flow always creates a magnetic field in a wire, but when the current flow is continuous, the magnetic field in an inductor just sits there, unopposed, so the current flows freely. It is only when the current changes that the inductor creates, and experiences, a magnetic field opposing the change in current.

Impedance is an [complex-valued quantity] that arises from the periodic nature of alternating current. Direct current only has resistance, the real-valued quantity.

> The reason these are not like resistors is because that Z is a complex number, so inductors and capacitors only have imaginary impedance. They don't touch DC and DC doesn't touch them (ideally, because in the real world all wire has real resistance and imaginary impedance).

Impedance can be understood in terms of resistance and reactance because complex-valued quantities like impedance decompose neatly into real-valued and imaginary-valued quantities.

> Resistance is part of a more general thing called impedance, which is a general measure of opposition to current flow.

Inductive reactance is the reason we can filter HF noise from an electrical system by simply coiling the wire around a circle.

> Impedance is represented as a complex number and resistance is the real number part of that complex number. The imaginary number part of impedance is called "reactance," and this is the main thing that's happening here (specifically, inductive reactance).

Notice how inductive resistance is just another application of energy transfer.

> Energy cannot be consumed or created. It can only be transferred. Dissipation of energy refers to energy being transferred out of the system, so it's no longer useful. The most common way that energy is dissipated is through conversion to heat, which is conducted, or radiated away from the system.

Everything in nature is an effect of energy transfer. When you look at ancient structures, you see the result of energy transferred to these structures by ancient people. You see what was in the cells of these humans. The massive gravitational potential energy of the pyramids contains the energy transferred to them from the ancient humans expending their cellular energy to lift up the slabs. When a slab falls off a pyramid, this gravitational potential energy gets transferred into heat and radiates away. When looking for a vivid illustration of the transfer of gravitational potential energy into heat, look at meteors.

> Whenever a spacecraft or meteor enters the earth's atmosphere--it is the massive increase in pressure of the air they punch into that heats them up to thousands of degrees.

A static magnetic field does not generate electricity. Only a moving magnetic field can generate electricity because only a moving magnetic field has energy that can be converted into electrical energy. The movement is the effect of energy acting on the field.

> Magnetic fields, like gravitational fields do not create energy in themselves, they simply allow it to be transferred. This is why electricity is not generated in a wire when a stationary magnetic is near it. It's only when a magnet is moved near a wire that electricity is generated. It's the movement of the magnet that provides the energy for the electricity to be generated, rather than the magnetic field itself. And, like the object lifted from the floor to the shelf, the movement does not create energy either, the energy is stored somewhere else (like in your biomass, or in a piston, or in water that's falling out a dam spillway) that's converted through movement of the magnetic field, into electricity.

A magnetic field is simply a conduit of energy. For example, the falling water moves magnets around, thereby transferring its gravitational potential energy into electrical energy through the magnetic field, which generates electricity in a power plant.
