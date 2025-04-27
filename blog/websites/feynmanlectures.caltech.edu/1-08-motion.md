# [8. Motion](https://www.feynmanlectures.caltech.edu/I_08.html)

If we want to differentiate s=At³+Bt+C with respect to t (e.g., to find the function that models velocity with respect to time from the function that models displacement), we can do so algebraically after making the following replacements: s→s+Δs, t→t+Δt.

Then, we can make another replacement: s→At³+Bt+C from the definition of s.

Then, we divide out the Δt.

Finally, we make the replacement Δt→0 to find that ds/dt=3At²+B.

To find the total displacement from the function that models velocity with respect to time, we multiply the velocity at some time t by the step size Δt and sum these products for every time steps: s=ΣvΔt. A displacement calculated from i such steps will result in a sum with i terms.

Making the replacement Δt→0 in such series can be done analytically. If we know that v=ds/dt and in general the relationships between functions and their derivatives, then we can imagine that v is already a result of differentiation and what the original function s was before it was differentiated. This is how an integral is found analytically. 

If a function cannot be integrated analytically, it can be summed at i steps, and with a large number of steps, the result will be close to the value that would be found analytically.
