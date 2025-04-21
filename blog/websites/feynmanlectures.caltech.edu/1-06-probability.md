# [6. Probability](https://www.feynmanlectures.caltech.edu/I_06.html)

![17452135890621287093123081435185](https://github.com/user-attachments/assets/d407f1c2-e938-453f-937a-71b79814dbe3)

If we run a random walk algorithm (start at the origin and advance up or down randomly with each step), then after N steps, we expect to be Dᵣₘₛ=√N points away from the origin. Dᵣₘₛ is the root-mean-square distance from the x-axis (√D², square root of the mean square distance). We can derive this from a recurrence relation that starts with ⟨D₁²⟩=1.

> After one step, D² is always +1, so we have certainly ⟨D₁²⟩=1.

![17452136023156982189214021403552](https://github.com/user-attachments/assets/9669f00e-d0ee-477c-bddd-48ca1ccb581f)

If D_N=D_{N−1}+1 or D_{N−1}−1, then D_{N}²=(D_{N−1}−1)² or (D_{N−1}+1)².

> The expected value of D_{N}² for N>1 can be obtained from D_{N−1}. If, after (N−1) steps, we have D_{N−1}, then after N steps we have D_N=D_{N−1}+1 or D_N=D_{N−1}−1.

The average of those two cases is ⟨D_{N}²⟩=⟨D_{N-1}²⟩+1. If ⟨D₁²⟩=1 and ⟨D_{N}²⟩=⟨D_{N-1}²⟩+1, then ⟨D_{N}²⟩=N and Dᵣₘₛ=√D²=√N.

> We expect that the “typical” distance in 30 steps ought to be √30≈5.5.

That is, we expect the random walk of 30 steps to conclude within 5.5 steps of the x-axis. This result generalizes to any sample of 30 binary choices. For example, if we tossed a coin and every time it landed on its head we moved up (and when it landed on its tail we moved down), then we would expect there to be 15±2.75 heads in 30 such coin tosses. The histogram of the results of 100 games with 30 coin tosses takes the shape of the Gaussian curve. The curve has its inflection points at 15±2.75 (it changes from being concave up to concave down at 15-2.75 and then from concave down to concave up at 15+2.75). The width of this curve is 2.75 units from the center. The standard deviation of this distribution is 2.75.

![17452135201292202267705673539650](https://github.com/user-attachments/assets/b3d53cda-5516-4e27-a5c6-20b9371da6ea)

The probability density curves for random walks have widths proportional to √N.

> Their heights must be proportional to 1/√N to maintain the total area equal to 1.

![17452136181347270417666102286037](https://github.com/user-attachments/assets/895a53c1-cba9-4814-a273-0e911f4e1309)

The Gaussian curve is a function of its standard deviation σ=√N or Sᵣₘₛ√N if the step size is variable with a known root-mean-square value (Sᵣₘₛ).

![17452136388636755108221147376626](https://github.com/user-attachments/assets/b6cc9fea-b716-429c-b6c6-f1c4d0da7b88)

Quantum mechanical predictions can be made only in terms of probabilities. So far, probability density is the only structure that has been used to successfully model positions and velocities of particles. The Heisenberg uncertainty principle states that the widths of the curves of probability density functions for estimating the position and the velocity of a particle depend on each other and their product must be at least the reduced Planck constant over 2 times particle mass ([Δx][Δv]≥ℏ/2m).

![17452136557225117524385737915062](https://github.com/user-attachments/assets/5b7df4f2-46f8-402b-a730-5baf879281f5)

For example, the probability of finding an election in a certain range of distances with respect to r can be determined by integrating the probability density function p(r)=Ae^(−2r/a) for a given interval.
