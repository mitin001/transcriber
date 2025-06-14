# [23. Resonance](https://www.feynmanlectures.caltech.edu/I_23.html)

If you need to solve a linear differential equation involving a cosine function, you can simplify your math by expressing it in terms of the exponential function.

$$e^{i\omega t} = \cos\omega t + i\sin\omega t$$

> It is easier to work with an exponential function than with a cosine. So the whole trick is to represent our oscillatory functions as the real parts of certain complex functions.

$$
\frac{d^2x}{dt^2}+\frac{kx}{m}=\frac{F}{m}=\frac{F_0}{m}\cos\omega t
$$

For example, if we have a mass on a spring, and an external force acts on it with a frequency that can be represented by a cosine function, we can replace $F_0\cos\omega t$ with $\hat{F}e^{i\omega t}$. The hat over the F denotes the fact that we're only working with the real part of the exponential function. The imaginary part of the exponential function ($i\sin\omega t$) is not a part of this equation, and since this is a linear equation, it can be canceled out.

$$
\frac{d^2x}{dt^2}+\frac{kx}{m}=\frac{\hat{F}e^{i\omega t}}{m}
$$

We can similarly replace $x$ with $\hat{x}e^{i\omega t}$ if we suppose that the position of the mass on the spring oscillates in a way that can be represented by the cosine function. If we do that, then $\frac{d^2x}{dt^2}=(i\omega)^2\hat{x}e^{i\omega t}$, so the differential equation becomes an algebraic equation $(i\omega)^2\hat{x}e^{i\omega t}+(k\hat{x}/m)e^{i\omega t}=(\hat{F}/m)e^{i\omega t}$ where $e^{i\omega t}$ can be factored out.

$$
(i\omega)^2\hat{x}+(k\hat{x}/m)=\hat{F}/m
$$

$$
\hat{x}=\frac{\hat{F}/m}{(k/m)-\omega^2}
$$

If the ratio of the spring constant to the mass of the object attached to it is the square of its oscillating motion ($k/m = \omega_0^2$), then the solution to the differential equation modeling the forced harmonic oscillator predicts that as the frequency of the applied force approaches the natural frequency of the spring, the displacement of the object attached to it approaches infinity (the denominator of the below expression approaches zero).

$$
\hat{x}=\hat{F}/m(\omega_0^2-\omega^2).
$$

If we take friction into account, we can rule out the possibility of such infinite displacement. To incorporate such a frictional force ($F_f =-c\,dx/dt$), it needs to be added to the differential equation modeling the forced harmonic oscillator.

$$
m(d^2x/dt^2)+c(dx/dt)+kx=F
$$

If we set $c = m\gamma$ and $k = m\omega_0^2$, then we can factor $m$ out of the LHS of the equation.

$$
(d^2x/dt^2)+\gamma(dx/dt)+\omega_0^2x=F/m
$$

If we again assume that the force is $F\cos\omega t$ and can be replaced with $\hat{F}e^{i\omega t}$ while $x$ can be replaced with $\hat{x}e^{i\omega t}$, we get easily differentiable expressions. Differentiating them leaves us with a simple, factorable algebraic equation.

$$
[(i\omega)^2\hat{x}+\gamma(i\omega)\hat{x}+\omega_0^2\hat{x}]
e^{i\omega t}=(\hat{F}/m)e^{i\omega t}
$$

If we solve this equation for $\hat{x}$, we will see that it can be expressed in terms of the vector $\hat{F}$ and another vector R. Because R is a linear function of the imaginary unit i, it can be expressed in terms of the exponential function weighted by some quantity ($\rho$).

$$
\hat{x}=R\hat{F}=\rho e^{i\theta}F_0e^{i\Delta}=\rho F_0e^{i(\theta+\Delta)}
$$

$$R=\frac{1}{m(\omega_0^2-\omega^2+i\gamma\omega)}$$

$$
\begin{aligned}
\rho^2&=\frac{1}{m^2(\omega_0^2-\omega^2+i\gamma\omega)
(\omega_0^2-\omega^2-i\gamma\omega)}\\[1ex]
&=\frac{1}{m^2[(\omega_0^2-\omega^2)^2+\gamma^2\omega^2]}
\end{aligned}
$$

Since the force can also be expressed in terms of the exponential function of i, $\hat{x}$ is a weighted product of exponential functions, which means the displacement $x=\hat{x}e^{i\omega t}$ is a weighted cosine of a sum of multiple angles: $\omega t$ from the natural frequency of the spring, $\Delta$ from the oscillating force applied to it, and $\theta$ from the friction.

$$
x=\rho F_0\cos\,(\omega t+\Delta+\theta)
$$

The system that consists of a mass on a spring with an applied oscillating force and friction is analogous to an oscillatory electrical circuit with resistance, inductance, and capacitance, which can be represented by a linear differential equation of the same form.

Fig5

$$
L\,d^2q/dt^2+R\,dq/dt+q/C=V(t)
$$

$$
\hat{q}=\hat{V}/L(\omega_0^2-\omega^2+i\gamma\omega)
$$

Table 1

> If we think of the charge q on a capacitor as being analogous to the displacement x of a mechanical system, we see that the current, I=dq/dt, is analogous to velocity, 1/C is analogous to a spring constant k, and R is analogous to the resistive coefficient c=mγ.

If inductance L is analogous to mass and I is analogous to velocity, then the electric potential difference V is analogous to a mechanical force.
 
> There exists another circuit element which is the analog of mass! This is a coil that builds up a magnetic field within itself when there is a current in it. A changing magnetic field develops in the coil a voltage that is proportional to dI/dt (this is how a transformer works, in fact). The magnetic field is proportional to a current, and the induced voltage (so-called) in such a coil is proportional to the rate of change of the current.

$$
V=L\,dI/dt=L\,d^2q/dt^2
$$
 
> The coefficient L is the self-inductance, and is analogous to the mass in a mechanical oscillating circuit.

A consequence of the differential equation for an oscillatory electrical circuit with resistance, inductance, and capacitance is the existence of complex impedance $\hat{Z}$. This vector arises when we set $\hat{q}=\hat{I}/i\omega$ (implied by $I=dq/dt = i\omega q$).

$$
\hat{V}=(i\omega L+R+1/i\omega C)\hat{I}=\hat{Z}\hat{I}.
$$

$\hat{V}=\hat{Z}\hat{I}$ is the AC analog of the DC law $V = RI$.
