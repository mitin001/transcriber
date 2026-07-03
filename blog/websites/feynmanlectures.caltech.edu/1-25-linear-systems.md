# [25. Linear Systems](https://www.feynmanlectures.caltech.edu/I_25.html)

$$
m(d^2x/dt^2)+\gamma m(dx/dt)+kx=F
$$

The spring with applied sinusoidal force acting against friction can be [modeled by an electric circuit] with an inductor, resistor, and capacitor. The linear differential equations for these two systems have the same form. Only the constants are different.

$$
L(d^2q/dt^2)+R(dq/dt)+q/C=V
$$

Many mechanical systems can similarly be simulated with electric circuits. This is how automobiles are designed. This is not the same as simulating a physical system digitally using software. This is literally simulating one analog physical system (mechanics) with another analog system (electric circuits).

> Suppose we have designed an automobile, and want to know how much it is going to shake when it goes over a certain kind of bumpy road. We build an electrical circuit with inductances to represent the inertia of the wheels, spring constants as capacitances to represent the springs of the wheels, and resistors to represent the shock absorbers, and so on for the other parts of the automobile. Then we need a bumpy road. All right, we apply a voltage from a generator, which represents such and such a kind of bump, and then look at how the left wheel jiggles by measuring the charge on some capacitor. Having measured it (it is easy to do), we find that it is bumping too much. Do we need more shock absorber, or less shock absorber? With a complicated thing like an automobile, do we actually change the shock absorber, and solve it all over again? No!, we simply turn a dial; dial number ten is shock absorber number three, so we put in more shock absorber. The bumps are worse—all right, we try less. The bumps are still worse; we change the stiffness of the spring (dial 17), and we adjust all these things electrically, with merely the turn of a knob. This is called an analog computer. It is a device which imitates the problem that we want to solve by making another problem, which has the same equation, but in another circumstance of nature, and which is easier to build, to measure, to adjust, and to destroy!

The radio is a real-world simulation of mechanical resonance, which found its application in information exchange. The tuning knob of a radio receiver is connected to its capacitor. As we change the capacitance of an electric circuit, we change the radio frequency (ω) with which it resonates. That is, most of the electric current (x) that flows through a circuit with a certain capacitance is due to the radio signal with the resonant frequency for that capacitance. We can decode the information carried by the resonant radio frequency out of the current induced by it.

![17505668221711495144255539971698](https://github.com/user-attachments/assets/1d8d80aa-9849-4a80-abe7-d9740fd659b3)

Since the resonant frequency is a function of both [inductance], we could also vary the inductance of the electric circuit within the radio receiver.

> We change ω₀ by changing the L or the C of the circuit, because the frequency of the circuit has to do with the combination of L and C.

The resonance curve goes to infinity at the resonant frequency for electric circuits without resistance (or for springs without friction). In the real world, the maximum of the resonance curve is proportional to the work done to keep the system oscillating (or the voltage applied to keep the current flowing).

![17505668367851372362586540519256](https://github.com/user-attachments/assets/8ac06e7f-a323-4575-8710-4e1954d5bed4)

> Instead of becoming infinite near resonance, the curve is only going to get so high that the work done by our tapping each time is enough to compensate for the loss of energy by friction during the cycle. So the top of the curve is rounded off—it does not go to infinity.

Suppose we have an oscillator where a frictional force (or the resistor in the electric circuit) reduces the amplitude of the swing (or charge) by 90% every cycle. Then, we will observe exponential decay.

> If the first cycle dropped the amplitude, say, to 90 percent of what it was at the start, the next will drop it to 90 percent of 90 percent, and so on: the sizes of the oscillations are reduced by the same fraction of themselves in every cycle. An exponential function is a curve which does just that. It changes by the same factor in each equal interval of time. That is to say, if the amplitude of one cycle, relative to the preceding one, is called a, then the amplitude of the next is a², and of the next, a³3. So the amplitude is some constant raised to a power equal to the number of cycles traversed: $A=A_0a^n$.

The motion of the object (or magnitude of the charge) is then a product of the exponential function and a cosine.

> The general solution will be some kind of an oscillation, sine or cosine ωt, times an amplitude which goes as $b^t$ more or less. But b can be written as $e^{-c}$ if b is positive and less than 1. So this is why the solution looks like $e^{-ct}\cos\omega_0 t$.

The energy loss of an oscillating system is the product of potential and the time rate of change of position (or charge).

> When we carry a charge q through a voltage V, the work is qV, so the work done per second would be V(dq/dt), which is the same as VI, or also IR⋅I=I²R. This is called the heating loss—this is how much heat is generated in the resistance per second, by the conservation of energy. It is this heat that makes an ordinary incandescent light bulb work.

Ohm's law is the relationship between voltage, current (time rate of change of the charge), and resistance: V=IR=R(dq/dt). One ohm is one volt per ampere. The more voltage we apply to an electric circuit, the more energy the electrons in it will release.

> If we carry a charge q through the wire from one terminal to another terminal, the work done is qV. The higher the voltage difference, the more work was done when the charge, as we say, “falls” from the high potential end of the terminal to the low potential end. So charges release energy in going from one end to the other. Now the charges do not simply fly from one end straight to the other end; the atoms in the wire offer some resistance to the current.

Inductors show us that mechanical inertia has an electrical analog.

> There is an electrical analog to inertia also. It is possible to make something called an inductor, having a property called inductance, such that a current, once started through the inductance, does not want to stop.

The relationship between voltage, inductance, and time rate of charge of current ( $V=L(dI/dt)=L(d^2q/dt^2)$ ) is the electrical analog of Newton's law of inertia ( $F=m(dv/dt)=m(d^2x/dt)$ ). One volt is one henry (unit of inductance) times one ampere per second.

> One volt applied to an inductance of one henry produces a change of one ampere per second in the current.

[inductance]: /blog/websites/feynmanlectures.caltech.edu/1-23-resonance.md
[modeled by an electric circuit]: /blog/websites/feynmanlectures.caltech.edu/1-24-transients.md
