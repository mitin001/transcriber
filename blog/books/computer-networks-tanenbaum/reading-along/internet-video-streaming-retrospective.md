# [Two Decades of Internet Video Streaming: A Retrospective View](https://iqua.ece.utoronto.ca/papers/bli-tomccap13.pdf)

The Internet was an unlikely conduit of video streaming.

> Its narrow waist of the TCP/IP protocol suite, which used to be the key to its success, has fundamental design mismatches when providing real-time multimedia streaming services with a massive volume of data and a massive audience.

At the same time, P2P protocols are so good at file-sharing, it makes sense to use them for video multicasting. A P2P protocol divides a file in chunks and looks for peers that have the spare resources to serve the missing chunks to the leech. Eventually, the leech becomes a seeder and serves the downloaded chunks to other peers.

> If the current sliding window of the media stream to be distributed is divided into small media blocks, they will flow through the entire network wherever there exists idle upload bandwidth that can be tapped into.

In video multicasting, if all peers are buffering the same sliding window of video chunks, they could rapidly propagate through the entire network, allowing a large audience to view a live broadcast at the same time without overtaxing any one server or peer.

<img width="864" height="206" alt="17567679092972776242652642256986" src="https://github.com/user-attachments/assets/4f47d502-4ee2-4708-9686-f87de7b0a5fc" />

Of course, neither client-server nor P2P model is superior for all applications. Both have their target use cases. A general catch-all application should combine the strengths of both.

> The hybrid design is seemingly a compromise; yet we believe that the root cause is the intrinsic heterogeneity of the Internet and its end users, which inevitably renders any one-fits-all solution to be suboptimal.
