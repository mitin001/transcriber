# Digital Video

Just as the human auditory system does [not notice] sounds drowned out by other sounds, the human eye does not notice the subtle differences between changing frames on a display if the frames change fast enough. We cannot tell the difference between motion in real-life and motion as it is captured by a camera at a fast frame rate.

> The human eye has the property that when an image appears on the retina, the image is retained for some number of milliseconds before decaying. If a sequence of images is drawn at 50 images/sec, the eye does not notice that it is looking at discrete images.

Moreover, we do not notice that each frame is made up of discrete dots of color. Every pixels takes up 3 bytes, one byte per color component.

> Most systems use 24 bits per pixel, with 8 bits each for the red, blue, and green (RGB) components. Red, blue, and green are the primary additive colors and every other color can be made from superimposing them in the appropriate intensity.

Adding color information to the 15.75 kHz NTSC line frequency caused interference from the audio signal that produced undesirable artifacts on the picture. However, reducing the frequency to [15.734 kHz] allowed the color information to be encoded onto it without this interference. This frequency needs more than 1 s to transmit all 30 frames completely (it needs 1.001 s), so the frame rate is 29.97 fps for NTSC color video and 30 fps for monochrome.

> NTSC uses 29.97 frames/sec instead of 30 due to a hack the engineers introduced during the transition from black-and-white television to color. A bit of bandwidth was needed for part of the color management so they took it by reducing the frame rate by 0.03 frame/sec. PAL used color from its inception, so the rate really is exactly 25.00 frame/sec.

Because Western Europe adopted PAL, the Soviets adopted SECAM so the Soviet people close to the border wouldn't be exposed to Western ideas as their SECAM televisions in theory wouldn't be able decode PAL broadcasts.

> In France, a slightly different system, called SECAM, was developed in part, to protect French companies from German television manufacturers. It also runs at exactly 25.00 frames/sec. During the 1950s, the Communist countries of Eastern Europe adopted SECAM to prevent their people from watching West German (PAL) television and getting Bad Ideas.

Interlacing (transmitting data for only half the lines per frame, alternating between odd and even lines) was a way to compress the signal. It came with the added benefit of reducing the flicker.

> To reduce the amount of bandwidth required to broadcast television signals over the air, television stations adopted a scheme in which frames were divided into two fields, one with the odd-numbered rows and one with the even-numbered rows, which were broadcast alternately. This meant that 25 frames/sec was actually 50 fields/sec. This scheme is called interlacing, and gives less flicker than broadcasting entire frames one after another. Modern video does not use interlacing and and just sends entire frames in sequence, usually at 50 frames/sec (PAL) or 59.94 frames/sec (NTSC). This is called progressive video.

[15.734 kHz]: /blog/books/how-video-works/6-color.md
[not notice]: /blog/books/computer-networks-tanenbaum/audio-compression.md
