# 6. Color Video

Any fundamental frequency has harmonics: its integer multiples. The NTSC monochrome frequency 15.75 kHz has harmonics: 31.5 kHz, 47.25 kHz, etc.

> The NTSC monochrome television line frequency was 15,750 hertz.  Harmonics of that number can be found by adding 15,750 hertz to itself. The second harmonic would be 31,500 hertz, the third 47,250 hertz, and so on. What was discovered in television was that the video information modulated on the carrier frequency seemed to be grouping itself around the harmonics of the line frequency. That left places on the carrier where little or no information was being carried. These spaces in the carrier were discovered to be mathematically at the odd harmonics of half of the line frequency.

If monochrome data is transmitted on 15.75 kHz, 31.5 kHz, 47.25 kHz, etc, then we could encode color data at 7.875 kHz, 23.625 kHz, 39.375 kHz, etc, with minimal interference. The black-and-white TV sets would ignore this signal whereas the new color TV sets could decode it and display the colors.

> Half of the line frequency was 7,875 lines per second. If that is the first harmonic, then the third harmonic would be 3 times 7,875, or 23,625. The fifth harmonic would be 5 times 7,875, or 39,375, and so on up the scale into the megahertz range. An examination of the carrier revealed that space was available at these frequencies. Other video information could be inserted in these spaces without causing any interference with the existing information being broadcast.

455 * 7.875 kHz = 3.583125 MHz was chosen as the optimal frequency to carry the color signal.

> In order to transmit the color portion of the NTSC signal, an additional carrier frequency was needed. The idea was to make that new carrier frequency as high as possible, because higher frequency signals cause less interference and would result in fewer problems in the existing black and white system. So the 455th harmonic of half the line frequency was set as the color subcarrier frequency. It is called a subcarrier because it is an additional carrier of information within the main carrier.

The audio signal happened to still interfere with this, causing undesirable visual artifacts.

> The new color subcarrier caused a beat frequency, or interference, to occur with the audio carrier somewhere in the area of 900 kilohertz. This was visible as wavy black and white lines going through the picture.

But if we reduce the monochrome frequency to about 15.734 kHz, then adding data to the 455th harmonic of half of that frequency does not result in artifact-producing interference with the audio signal.

> By slowing the existing line frequency of 15,750 lines per second to approximately 15,734 lines per second, the 455th harmonic of half of that would be a color subcarrier frequency that would not interfere with the audio carrier in a way that was visible. This color subcarrier fits properly in one of the spaces created by harmonics of the line frequency.  At the same time, this new line frequency, which was essentially 16 lines slower than the existing black and white system, was still compatible with existing television sets. Television equipment was designed to work within a range of approximately 1% variation in line frequency. One percent of 15,750 is approximately 157 lines. As the new line frequency was only slowed down by approximately 16 lines, it was within 1⁄10 of 1% of the existing line frequency.

At this frequency, the time it took to broadcast 30 frames increased from 1 s to 1.001 s.

> Black and white television sets of that time could handle this change and not display any interference. The slightly slower line frequency produced a new frame rate of 29.97 frames per second.

Actually, [29.9700299700299700... fps] = 30,000/1,001 fps.

> This fix for a 1950’s analog problem lives on today in the frame rates used in the United States for broadcasting.

Whereas harmonics are integer multiples of frequencies, octaves are power-of-two multiples of frequencies. The tuning note A frequency 0.44 kHz has octaves 0.88 kHz, 1.76 kHz, 3.52 kHz, etc.

> An octave is a doubling of a frequency. For example, in music, the tuning note “A” lies at 440 hertz. To hear another “A” an octave above this, the frequency would be doubled to 880 hertz. An octave above 1,000 hertz would be 2,000 hertz. An octave above 2,000 would be 4,000.

[29.9700299700299700... fps]: https://old.reddit.com/r/explainlikeimfive/comments/qkqj7r/eli5_why_are_videos_often_recorded_at_exactly/hiyebgj/
