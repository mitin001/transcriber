# Audio Compression

ffmpeg is resource-intensive, but players like mpv or vlc are significantly less so. This is because of the assymetry between encoding and decoding media.

> For many applications, a multimedia document will only be encoded once (when it is stored on the multimedia server) but will be decoded thousands of times (when it is played back by customers). This asymmetry means that it is acceptable for the encoding algorithm to be slow and require expensive hardware provided that the decoding algorithm is fast and does not require expensive hardware.

WAV files are large, but MP3 or AAC files are much smaller even though all of these formats aim to optimize the storage size of the encoded signal.

> In waveform coding, the signal is transformed mathematically by a Fourier transform into its frequency components. ... The amplitude of each component is then encoded in a minimal way. The goal is to reproduce the waveform fairly accurately at the other end in as few bits as possible.

MP3 and AAC can compress sound much more than WAV and still sound the same when decoded thanks to perceptual coding.

> Perceptual coding exploits certain flaws in the human auditory system to encode a signal in such a way that it sounds the same to a human listener, even if it looks quite different on an oscilloscope. Perceptual coding is based on the science of psychoacoustics—how people perceive sound.

Specifically, these formats rely on heuristics like frequency masking and temporal masking to decide which portions of the audio signal to omit during the encoding process.

> A key property is that some sounds can mask other sounds. For example, imagine that you are broadcasting a live flute concert on warm summer day. Then all of a sudden, a crew of workmen show up with jackhammers and start tear-ing up the street to replace it. No one can hear the flute any more, so you can just transmit the frequency of the jackhammers and the listeners will get the same musical experience as if you also had broadcast the flute as well, and you can save bandwidth to boot. This is called frequency masking. When the jackhammers stop, you don’t have to start broadcasting the flute frequency for a small period of time because the ear turns down its gain when it picks up a loud sound and it takes a bit of time to reset it. Transmission of low-amplitude sounds during this recovery period are pointless and omitting them can save bandwidth. This is called temporal masking. Perceptual encoding relies heavily on not encoding or transmitting audio that the listeners are not going to perceive anyway.

Whereas WAV encodes all of the audio signal, MP3 and AAC lose portions of it—the portions no one can hear anyway.
