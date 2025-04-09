# 2. Single-Qubit Quantum Systems

> Single polaroid attenuates unpolarized light by 50 percent.

Every photon has a polarization. It is a superposition of horizontal and vertical. If the photon's polarization is more horizonal than vertical, it is then more likely to align itself into the horizontal direction of the polaroid. If it's more vertical than horizontal, then it's more likely to get absorbed by the horizontally polarized polaroid. On average, 50% of photons are absorbed and the other 50% pass through.

> The polaroid has a preferred axis, its polarization. When a photon with polarization |v⟩ = a|↑⟩ + b|→⟩ meets a polaroid with preferred axis |↑⟩, the photon will get through with probability |a|² and will be absorbed with probability |b|²; the probability that a photon passes through the polaroid is the square of the magnitude of the amplitude of its polarization in the direction of the polaroid’s preferred axis. The probability that the photon is absorbed by the polaroid is the square of the magnitude of the amplitude in the direction perpendicular to the polaroid’s preferred axis.
Furthermore, any photon that passes through the polaroid will now be polarized in the direction of the polaroid’s preferred axis.

The photons leaving polaroid A are polarized in a direction of its polarization, orthogonal to polaroid B.

> Two orthogonal polaroids block all photons.

Since all the photons are now deterministically horizontal, all of them are absorbed by the vertically polarized polaroid.

> Any photons that pass through polaroid A will leave polarized in the direction of polaroid A’s preferred axis, in this case horizontal, |→⟩. A horizontally polarized photon has no amplitude in the vertical direction, so it has no chance of passing through polaroid C, which was given a vertical orientation. For this reason, no light reaches the screen. Had polaroid C been in any other orientation, a horizontally polarized photon would have some amplitude in the direction of polaroid C’s preferred axis, and some photons would reach the screen.

If we repolarize the photons to be a superposition of vertical and horizontal polarizations, then we will allow a certain percentage of photons to align itself with the vertical direction of polaroid C and pass through it.

> At most polarization angles of B, light shines on the screen. The intensity of this light will be maximal if the polarization of B is at 45 degrees to both A and C.

The 45-degree polarization leaves the photons in such a state that about half of them are expected to align themselves in the vertical direction when met with a vertically polarized polaroid.

> A horizontally polarized photon will pass through polaroid B with probability 1/2 =|1/√2|². Any photons that have passed through polaroid B now have polarization |↗⟩. When these photons hit polaroid C, they do have amplitude in the vertical direction, so some of them (half) will pass thorough polaroid C and hit the screen.

Polaroids do not just attenuate the light passing through them. They change its properties on a photon level.

> The polaroids cannot be acting as simple sieves; otherwise, inserting polaroid B could not increase the number of photons reaching the screen.

Interactions between photons and polaroids can be explained by quantum mechanical principles.

> Quantum mechanics explains how more light can reach the screen when the third polaroid is added, and it provides a means to compute how much light will reach the screen. In summary, the polarization state of a photon is modeled as a unit vector. Its interaction with a polaroid is probabilistic and depends on the amplitude of the photon’s polarization in the direction of the polaroid’s preferred axis. Either the photon will be absorbed or the photon will leave the polaroid with its polarization aligned with the polaroid’s preferred axis.

Quantum mechanics correctly predicts the expected percentage of light polarized by a polaroid just as it correctly predicts the expected distributions of charges passing through slits, etc.

> The probabilistic nature of the interaction and the resulting change of state are features of all interactions between qubits and measuring devices, no matter what their physical realization.

A polaroid acts as a measuring device for photons. The measurement changes the states of photons, leaving them deterministic. This property holds for measuring anything on a quantum level and extends to any physical realization of qubits, not just by photons but also atomic nuclei, etc.

> Given a device for measuring the polarization of photons with associated basis {|u⟩, |u⊥⟩}, the state |v⟩ = a|u⟩ + b|u⊥⟩ is measured as |u⟩ with probability |a|² and as |u⊥⟩ with probability |b|². This behavior of measurement is an axiom of quantum mechanics. It is not derivable from other physical principles; rather, it is derived from the empirical observation of experiments with measuring devices. If quantum mechanics is correct, all devices that measure single qubits must behave in this way; all have associated bases, and the measurement outcome is always one of the two basis vectors.

When we measure a qubit, we cannot determine its original exact superposition of axes. We can only tell how to interacts with the measuring device: aligns with its axis or gets absorbed.

> Measurement of a quantum state changes the state. If a state |v⟩ = a|u⟩ + b|u⊥⟩ is measured as |u⟩, then the state |v⟩ changes to |u⟩. A second measurement with respect to the same basis will return |u⟩ with probability 1. Thus, unless the original state happens to be one of the basis states, a single measurement will change that state, making it impossible to determine the original state from any sequence of measurements.

Because there are only two possible measurement outcomes for qubits, we can't extract any more information from a qubit than the classical bit.

> Given that qubits can take on any one of infinitely many states, one might hope that a single qubit could store lots of classical information. However, the properties of quantum measurement severely restrict the amount of information that can be extracted from a qubit. Information about a quantum bit can be obtained only by measurement, and any measurement results in one of only two states, the two basis states associated with the measuring device; thus, a single measurement yields at most a single classical bit of information. Because measurement changes the state, one cannot make two measurements on the original state of a qubit.

A superposition of states doesn't make a qubit capable of holding more information than a measurement can yield.

> Even though a quantum bit can be in infinitely many different superposition states, it is possible to extract only a single classical bit’s worth of information from a single quantum bit.

Qubits can be modeled by particles that not only have vertical and horizontal polarizations but polarizations in three dimensions.

> It is okay to think of a superposition |v⟩ = a|0⟩ + b|1⟩ as in some sense being in both state |0⟩ and state |1⟩ at the same time, as long as that statement is not taken too literally: states that are combinations of |0⟩ and |1⟩ in similar proportions but with different amplitudes, such as 1/√2(|0⟩ + |1⟩), 1/√2(|0⟩ − |1⟩) and 1/√2(|0⟩ + i|1⟩), represent distinct states that behave differently in many situations.

The particles can have similar axis superposition proportions but be pointed in different directions along those axes, leaving them with different properties with respect to the measuring devices.

> We refer to the state space of a single-qubit system as the surface of the Bloch sphere.

Figure.

> Orthogonal states correspond to antipodal points of the Bloch sphere. In particular, every diameter of the Bloch sphere corresponds to a basis for the single-qubit state space.

The Schrödinger equation is the mathematical representation of quantum states.

> The states of all quantum systems satisfy certain properties that are encapsulated by a linear differential equation called the Schrödinger wave equation. For this reason, solutions to the Schrödinger equation are called wave functions, so all quantum states have representations as wave functions.

Kets (e.g., abstract vectors |→⟩ and |0⟩) are wave functions.

> Since the Schrödinger equation is linear, the addition of two solutions to the Schrödinger equa-tion or a constant multiple of a solution of the Schrödinger equation are also solutions to the Schrödinger equation. Thus, the set of solutions to the Schrödinger equation for any quantum system is a complex vector space.

The security of quantum communication rests on the ability for sender and receiver to choose arbitrary bases in this vector space to encode and decode the qubits transmitted between them.

> The security of quantum key distribution rests on fundamental properties of quantum mechanics, whereas classical key agreement protocols rely on the computational intractability of a certain problem. For example, while Diffie-Hellman remains secure against all known classical attacks, the problem on which it is based, the discrete logarithm problem, is tractable on a quantum computer.

The power of quantum computing renders some classical cryptography algorithms insecure, but it introduces new quantum cryptographic algorithms. For example, the BB84 protocol requires the bases that can be used to decode the transmitted qubits to be sent only after the initial transmission that validates that no eavesdropping has taken place. Eavesdropping of qubits can be detected because their measurement with a different basis alters their polarization, which can be detected by the original sender.

> Eve does not know in which basis to measure the qubits, a property crucial to the security of this protocol, because Alice and Bob share information about which bases they used only after Bob has received the photons; if Eve knew in which basis to measure the photons, her measurements would not change the state, and she could obtain the bit values without Bob and Alice noticing anything suspicious. A seemingly easy way for Eve to overcome this obstacle is for her to copy the qubit, keeping a copy for herself while sending the original on to Bob. Then she can measure her copy later after learning the correct basis from listening in on the classical channel.

Qubits cannot be cloned if the basis used to encode them is unknown.

> The no-cloning principle of quantum mechanics means that it is impossible to reliably copy quantum information unless a basis in which it is encoded is known; all quantum copying machines are basis dependent. Copying with the wrong machine not only does not produce an accurate copy, but it also changes the original in much the same way measuring in the wrong basis does. So Bob and Alice would detect attempts to copy with high probability.

The BB84 protocol has been tried for information transmission over 100+ km.

> Several groups have demonstrated this protocol and other quantum key distribution protocols over 100 km of fiber optic cable.

It has also been tried for information transmission over 10+ km of free space and is already in commercial use.

> The companies id Quantique, MagiQ, and SmartQuantum currently sell quantum cryptographic systems implementing the BB84 protocol.
