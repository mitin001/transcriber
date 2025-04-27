# [8. Motion](https://www.feynmanlectures.caltech.edu/I_08.html)

If we want to differentiate s=At³+Bt+C with respect to t (e.g., to find the function that models velocity with respect to time from the function that models displacement), we can do so algebraically after making the following replacements: s→s+Δs, t→t+Δt.

![17457255214061891779546318672388](https://github.com/user-attachments/assets/1465eb1d-c879-46ab-be52-bc85349f53ef)

Then, we can make another replacement: s→At³+Bt+C from the definition of s.

![17457255056074708444267000836563](https://github.com/user-attachments/assets/1abb67c6-e125-4ffd-8b42-af69a3f2b6eb)

Then, we divide out the Δt.

![17457254835638975868647790159987](https://github.com/user-attachments/assets/5cc4002d-3967-496a-85b7-9fce45f63fa5)

Finally, we make the replacement Δt→0 to find that ds/dt=3At²+B.

![17457254676478973943321957078038](https://github.com/user-attachments/assets/f30b49c1-4520-4ee8-a70d-282a26552e7c)

To find the total displacement from the function that models velocity with respect to time, we multiply the velocity at some time t by the step size Δt and sum these products for every time steps: s=ΣvΔt. A displacement calculated from i such steps will result in a sum with i terms.

![17457254542008849772411255066077](https://github.com/user-attachments/assets/c5cd9c1d-67de-4f1f-9756-385e5e07cf2f)

Making the replacement Δt→0 in such series can be done analytically. If we know that v=ds/dt and in general the relationships between functions and their derivatives, then we can imagine that v is already a result of differentiation and what the original function s was before it was differentiated. This is how an integral is found analytically.

![1745725423169144438784473446424](https://github.com/user-attachments/assets/508ab38f-29d7-49e3-a6b5-b52e03daac17)

If a function cannot be integrated analytically, it can be summed at i steps, and with a large number of steps, the result will be close to the value that would be found analytically.
