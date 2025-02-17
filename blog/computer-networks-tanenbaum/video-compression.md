# Video Compression

Motion picture and joint photographic expert groups have created MPEG and JPEG standards to compress video and images.

> Every few seconds a complete video frame is transmitted. The frame is compressed using something like the familiar JPEG algorithm that is used for digital still pictures. Then for the next few seconds, instead of sending out full frames, the transmitter sends out differences between the current frame and the base (full) frame it most recently sent out.

The JPEG group has found ways to remove components of the image that are imperceptible (or nearly imperceptible) to the human eye.

> Instead of working with the RGB components, it converts the image into luminance (brightness) and chrominance (color) components because the eye is much more sensitive to luminance than chrominance, allowing fewer bits to be used to encode the chrominance without loss of perceived image quality. The image is then broken up into blocks of typically 8 × 8 or 10 × 10 pixels, each of which is processed separately. Separately, the luminance and chrominance are run through a kind of Fourier transform (techni-cally a discrete cosine transformation) to get the spectrum. High-frequency amplitudes can then be discarded. The more amplitudes that are discarded, the fuzzier the image and the smaller the compressed image is. Then standard lossless compress techniques like run-length encoding and Huffman encoding are applied to the remaining amplitudes.

The MPEG group has found ways to encode only the deltas between the key frames.

> If a block (say, the actor) is present in the second frame but has moved, MPEG allows the encoder to say, in effect, ‘‘block 29 from the previous frame is present in the new frame offset by a distance (∆x, ∆y) and furthermore the sixth pixel has changed to abc and the 24th pixel is now xyz.’’

It takes ffmpeg considerable computational resources to find ways to come up with the smallest deltas between the frames, and then video players like mpv and vlc can very quickly reconstruct the frames based on their deltas. Hence the encode/decode asymmetry.

> The encoder can spend as much time as it wants searching for blocks that have moved and blocks that have changed somewhat to determine whether it is better to send a list of updates to the previous frame or a complete new JPEG frame. Finding a moved block is a lot more work than simply copying a block from the previous image and pasting it into the new one at a known (∆x, ∆y) offset.

Looking back for differences provides good compression. Looking back and ahead provides an even better compression. This is why ffprobe will mark frames as one of three classes: I, P, B.

> I (Intracoded) frames that are self-contained compressed still images. P (Predictive) frames that are difference with the previous frame. B (Bidirectional) frames that code differences with the next I-frame.
