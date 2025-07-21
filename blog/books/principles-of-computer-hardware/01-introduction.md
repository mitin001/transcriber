# 1. Introduction to computer hardware

Computers as we know them today were only made possible by the development of electronics and telecommunications. These present such a challenge for humans that the first attempt to connect Europe and North America with an electric cable didn't happen until 1858. Until then, no signals could be sent back and forth across the Atlantic Ocean. Once the longest submarine cable was finally in place, when people tried sending a signal across this cable, they found that it attenuated so much that it couldn't be perceived on the other end. Either a more sensitive device was needed to decode the signal, or the signal needed to be stronger. They tried the latter, which, of course, melted the cable.

> The receiver used the magnetic field from the current in the cable to deflect a magnetized needle. Unfortunately, after crossing the Atlantic the signal was too weak to be detected reliably. The original voltage used to drive a current down the cable was approximately 600 V. So, they raised the voltage to about 2000 V to drive more current along the cable and improve the detection process. Unfortunately, such a high voltage burned through the primitive insulation, shorted the cable, and destroyed the first transatlantic telegraph link.

The qwerty keyboard is a relic from the age of the early typewriter. The keys are arranged in this way only because it's the least likely combination to jam the early typewriter.

> One of the problems encountered by Sholes was the tendency of his machine to jam when digraphs such as ‘th’ and ‘er’ were typed. Hitting the ‘t’ and ‘h’ keys at almost the same time caused the letters ‘t’ and ‘h’ to strike the paper simultaneously and jam. His solution was to arrange the letters on the keyboard to avoid the letters of digraphs being located side by side.This layout has continued until today and is now described by the sequence of the first six letters on the left of the top row—QWERTY.

The keys are also arranged in this way because they make it easy to type the word _typewriter_.

> It is reported that Sholes made it easy to type ‘Type-Writer’ by putting all these characters on the same row.

Just as the modern keyboard has retained some features of the typewriter, some of the terminology of the modern computer user still harkens back to the era of the outdated devices that are no longer in wide use. And yet, the language remains unchanged.

> The term _crash_ had the original meaning of a failure resulting from a read/write head in a disk drive crashing into the rotating surface of a disk and physically damaging the magnetic coating on its surface.

Old inventions don't just leave a mark on the language of new inventions. The leave a mark on the language in general.

> It’s natural to compare today’s wonder, the computer, with the human just as the Victorians did with their technology. They coined expressions like, ‘He has a screw loose’, or ‘He’s run out of steam’, in an endeavor to describe humans in terms of their mechanical technology.

The terms may remain the same, but what they're describing can shift radically. Mapping the world used to be done by cartographers from careful observation of the surface of the Earth. Now it's the provenance of satellites. Today's maps are location-aware; the central feature of mapping software is to show your location. Before satellites, maps were static sheets of paper, and determining own location relative to them was a challenge.

> A satellite in medium Earth orbit at 20200 km contains a very accurate atomic clock and it broadcasts both the time and its position. Suppose you pick up the radio signal from one of these Navstar satellites, decode it, and compare the reported time with your watch.You may notice that the time from the satellite is inaccurate.

Today's mapping technology is so advanced even relativistic effects and the speed limit of the universe must be taken into account.

> The signal has been traveling through space before it reaches you. Because the speed of light is 300000 km/s, you know that the satellite must be 20000 km away.

Herein lies the central idea of the information age. Everything has been reduced to inputs and outputs to and from computers. Computing systems may be separated by thousands of kilometers, but they all can be made to work in concert to deliver the computation result to the end user. The result can be a simple calculation done on a local arithmetic unit or the answer to where the end user's location is relative to the planet, computed from a signal that traverses more space than the diameter of the planet.

> A computer is a machine that takes in information from the outside world, processes it according to some predetermined set of operations, and delivers the processed information.

Today's computers vary in the way they compute. The computation result you're seeking, such as your location, can be a result of many intermediate computations across several different computing architectures. Some architectures prioritize interoperability while others prioritize energy consumption. The dominant processor architectures for end-user devices today are x86 and ARM. A useful way to think through the differences between processor architectures lies through the differences between their assembly languages.

> A computer’s architecture is the assembly language programmer’s view of the machine.

This boils down to which shortcuts are available to the machine to perform its operations. For example, the multiplication operation on present-day architectures is an abstraction of a combination of nand gates arranged to perform [shift, carry, and xor] operations. A present-day computer is organized in such a way that there are many nand gates that can readily be programmed to perform such operations. The organization of an older computer relied on other tricks. For example, the square of an integer can be expressed in terms of a sum of odd integers.

Table 1

We can rely on such tricks to speed up computation in our heads, too. For example, we may remember that 12²=144 and 13²=169 but not remember the value of 14². Because we know two successive squares before it, we can easily compute their difference: 169-144=25. The next odd integer is 27, so 14²=169+27=196. Similarly, 15²=196+29=225.

[shift, carry, and xor]: /blog/books/feynmans-lectures-on-computation/01-introduction.md
