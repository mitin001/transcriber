# [Two Decades of Internet Video Streaming: A Retrospective View](https://iqua.ece.utoronto.ca/papers/bli-tomccap13.pdf)

Technology constantly surprises us. For example, people consistently underestimate what the Internet is capable of. Early in its history, the Internet was predicted to be a [passing fad], soon to be heading the way of the fax machine. When it became clear that it wasn't going anywhere, the skeptics found a new thing to doubt. Its low affinity for transferring video content couldn't possibly replace live television, they thought.

> Its narrow waist of the TCP/IP protocol suite, which used to be the key to its success, has fundamental design mismatches when providing real-time multimedia streaming services with a massive volume of data and a massive audience.

Among the skeptics, there were those that thought that the idea of video over the Internet was still worth a try. They thought that since P2P protocols got so good at file sharing, it made sense to use them for a similar purpose: video multicasting. A P2P protocol divides a file into chunks and looks for peers that have the spare resources to serve the missing chunks to the leech. Eventually, the leech becomes a seeder and serves the downloaded chunks to other peers.

> If the current sliding window of the media stream to be distributed is divided into small media blocks, they will flow through the entire network wherever there exists idle upload bandwidth that can be tapped into.

In video multicasting, if all peers are buffering the same sliding window of video chunks, they could rapidly propagate through the entire network, allowing a large audience to view a live broadcast at the same time without overtaxing any one server or peer.

<img width="864" height="206" alt="17567679092972776242652642256986" src="https://github.com/user-attachments/assets/4f47d502-4ee2-4708-9686-f87de7b0a5fc" />

But over time, the client-server model proved more than capable at serving video content to a wide array of Internet users. Of course, neither the client-server nor the P2P model is superior for all applications. Both have their target use cases. A general catch-all application should combine the strengths of both.

> The hybrid design is seemingly a compromise; yet we believe that the root cause is the intrinsic heterogeneity of the Internet and its end users, which inevitably renders any one-fits-all solution to be suboptimal.

Just as the cloud was a re-emergence of the [mainframe] of the 1970s into the scene of highly advanced computer networking, it's conceivable to expect a new video technology that brings about a re-emergence of P2P against the backdrop of highly advanced client-server streaming technology.

[mainframe]: /blog/books/cloud-storage-security/1-data-in-the-cloud.md
