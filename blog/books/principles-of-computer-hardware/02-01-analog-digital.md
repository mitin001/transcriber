# 2.1. Analog and digital systems

> We don’t use gates to build computers because we like them or because Boolean algebra is great fun. We use gates because they provide a way of mass producing cheap and reliable digital computers.

An analog system represents the real world by analogy. It relates one real value to its more convenient representation. Such analog convenience allows us to build tools.

> The length of a column of mercury in a thermometer is an analog of the temperature because the length of the mercury is proportional to the temperature.

In electronic devices, voltages and electric currents are analogs for physical quantities. In computers, voltages and electric currents represent digital variables (e.g., digital variable Y).

> Y changes from one discrete value to another instantaneously. In practice, no physical (i.e.
real) variable can change instantaneously and a real signal must pass through intermediate values as it changes from one discrete state to another.

Digitizing the world introduces latency. The latency arises when the digital variable changes its value but its representative analog physical quantity (e.g., voltage across a conductor) needs to catch up.

> A major advantage of representing information in digital form is that digital systems are resistant to error. A digital symbol can be distorted, but as long as the level of distortion is not sufficient for the symbol to be confused with a different symbol, the original symbol can always be recognized and reconstituted.

The more the range of the analog physical quantities (e.g., 0-3 V), the further away is the threshold for the digit change (e.g., 1.5 V), but also the less likely it is that the error in the physical quantity will trip the digit threshold and cause the wrong digit to be reported (e.g., if interference ups the voltage to 1 V where it should be 0 V, the computer still treats it as a 0). In real circuits, if the voltage is too close to the threshold (in a region designated as the forbidden zone), no determination is made for whether it's a 1 or a 0.

p.27

Each digital component comes with an input range and an output range, which designate how to classify the incoming and outgoing voltages as bits. The input range does not necessarily match the output range. If it is expected that the output of one component will get distorted by noise as to raise its voltage before it reaches the input of the next component, the input range is increased relative to the output range.
