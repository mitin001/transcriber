# 7.4.3 Streaming Stored Media

Video encoded for RTP occupies more storage space than video encoded for transmission over HTTP. This is because HTTP is a TCP-based protocol, i.e., it takes advantage of TCP's error correction via retransmission. With such robust error correction, there is no need for error-correction codes (e.g., a Hamming code or a Reed-Solomon code) to be encoded into the video, and also the [I-frames] can be spaced farther apart. With UDP-based RTP, if there's an error in an I-frame, all P-frames derived from it will have to be dropped, and so the user will not see a whole sequence of consecutive frames. If the I-frames are 5 seconds apart, that's 5 seconds of lost video. That's why even though video encoded for transmission over HTTP can tolerate having an I-frame every 5 seconds, RTP video cannot; there needs to be an I-frame every 1 second. Because I-frames take so much more space than P-frames, this greatly inflates the size of video encoded for RTP.

> When the underlying protocol is TCP, I-frames can be spaced much further apart than if RTP is used. Consequently, many video-streaming sites use TCP to allow a smaller encoded file with widely spaced I-frames and less bandwidth needed for smooth playback.

And so now, RTP is yet another relic of a protocol that has been, along with many others, rolled into HTTP. Not only can using HTTP reduce the file size of the transmitted content, but it can also use buffering to greatly simplify the real-time aspect of transmissio. Instead of trying to match the payback rate to the rates of packet delivery rate and decoding, HTTP-based players simply put enough of the video file into the buffer and play it from the buffer. By the time the first chunk has played out, the second chunk will have already arrived into the buffer, and so on.

> What started out as a real-time system has become a simple nonreal-time file transfer system.

If a user has infinite RAM, should their browser download the entire video and put it in RAM? No, because this will waste the network bandwidth, unless the user will actually watch the entire video.

> Users who skip around a lot (and there are many of them), waste network bandwidth by invalidating precious data in their buffers.

Whenever you remove one constraint from a system, expect another one to become your new bottleneck.
