# [8. Motion](https://www.feynmanlectures.caltech.edu/I_08.html)

If we want to differentiate s=At³+Bt+C with respect to t (e.g., to find the function that models velocity with respect to time from the function that models displacement), we can do so algebraically after making the following replacements: s→s+Δs, t→t+Δt.

$$
\displaylines{
s+\Delta s \\
=A(t+\Delta t)^3+B(t+\Delta t)+C \\
=At^3+Bt+C+3At^2\Delta t+B\Delta t \\
=At^3+3At(\Delta t)^2+A(\Delta t)^3
}
$$

Then, we can make another replacement: s→At³+Bt+C, as is the definition of s.

$$
\Delta s=3At^2\Delta t+B\Delta t+3At(\Delta t)^2+A(\Delta t)^3
$$

Then, we divide out the Δt.

$$
\frac{\Delta s}{\Delta t}=3At^2+B+3At(\Delta t)+A(\Delta t)^2
$$

Finally, we make the replacement Δt→0 to find that ds/dt=3At²+B. We could also do these operations in the reverse order (and obtain s=At³+Bt+C from ds/dt=3At²+B). Doing so is referred to as integrating an expression. Integration is the opposite of differentiation. An integral does not have to be found algebraically; it can also be computed as a sum of products, to a reasonable degree of approximation. For example, to find the total displacement from the function that models velocity with respect to time, we multiply the velocity at some time t by the step size Δt and sum these products for each of those time steps: s=ΣvΔt.

$$
s=\sum_iv(t_i)\Delta t
$$

A displacement calculated from i such steps will result in a sum with i terms. The smaller the step size, the greater the number of terms, the better the approximation.

$$
s=\lim_{\Delta t\to0}\sum_iv(t_i)\Delta t
$$

Making the replacement Δt→0 in such a series can be done analytically. If we know that v=ds/dt, then we can imagine that _v_ is a result of differentiation. By knowing the relationships between functions and their derivatives in general, we can find what the original function _s_ was before it was differentiated. This is how an integral is found analytically.

$$
s=\int v(t)dt
$$

If a function cannot be integrated analytically, it can be summed over i steps, and with a large number of steps, the result will be close to the value that would have been found analytically.
