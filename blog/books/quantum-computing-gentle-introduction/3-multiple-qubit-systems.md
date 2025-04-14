# 3. Multiple-Qubit Systems

There's always a chance, quantified by the Schrödinger's equation, that the qubit being measured will be absorbed by the measuring device.

> Measurement of a single qubit is probabilistic and transforms the quantum state into a state compatible with the measuring device. A similar statement is true for measurements of multiple-qubit systems, except that the set of possible measurements and measurement outcomes is significantly richer than in the single-qubit case.

Keeping track of probabilities of absorbtions of multiple qubits requires exponential space because probabilities are modeled with tensor products.

> A single-qubit state can be specified by a single complex number.

Entanglement arises from the consequence of the probabilistic nature of qubits. Because they are probabilistic, we cannot represent a list of qubits in the space a direct sum of them would've taken like we can an array of classical bits. Rather, we have to represent them as a tensor product (⊗).

> It takes 2^n − 1 complex numbers to describe states of an n-qubit system. Since 2^n>>n, the vast majority of n-qubit states cannot be described in terms of the state of n separate single-qubit systems. States that cannot be written as the tensor product of n single-qubit states are called entangled states. Thus the vast majority of quantum states are entangled.

The Bell state is an example of a multi-qubit state consisting of entangled qubits.

> The Bell state |Φ⁺⟩ = 1/√2(|00⟩ + |11⟩) cannot be described in terms of the state of each of its component qubits separately. This state cannot be decomposed, because it is impossible to find a1, a2, b1, b2 such that (a1|0⟩ + b1|1⟩) ⊗ (a2|0⟩ + b2|1⟩) = 1/√2(|00⟩ + |11⟩), since (a1|0⟩ + b1|1⟩) ⊗ (a2|0⟩ + b2|1⟩) = a1a2|00⟩ + a1b2|01⟩ + b1a2|10⟩ + b1b2|11⟩.

The mathematical impossibility of such a decomposition indicates that the qubits are entangled.

> Unlike classical systems, the state space of a quantum system grows exponentially with the number of particles. Thus, when we encode computational information in quantum states of a system of n particles, there are vastly more possible computation states available than when classical states are used to encode the information.

This may sound like a disadvantage over a simpler, additive nature of classical computing storage, but it can be turned into an advantage.

> These large state spaces corresponding to small amounts of physical space can be used to speed up computation.

Because a quantum computer behaves in a way that cannot be simulated on a classical computer, it follows that there are problems a quantum computer can solve that a classical computer cannot solve.

> The impossibility of efficiently simulating the behavior of entangled states on classical computers suggested to Feynman, Manin, and others that it might be possible to use these quantum behaviors to compute more efficiently.

Since the quantum computer naturally models the tensor product of states, which has exponential complexity, perhaps it can be used to solve problems that would require exponential time on a classical computer much faster.
