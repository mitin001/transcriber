# 1. Data in the Cloud

Cloud computing is the last in the long tradition of the kinds of innovation that expand the capabilities of the Internet to larger audiences.

> The fundamental capabilities we depend on the Internet for mostly existed from the early days. In some sense, Internet technology innovation has come from finding ways to make the original capabilities more accessible to more people.

Small businesses saw the benefits of the Internet only recently. They did so thanks, in large part, to cloud computing.

> Cloud services give small businesses cost-effective access to capabilities that large companies often handle internally, thus bringing the benefits of scale economies to small businesses and making them more competitive.

Trends in any industry go in and out of fashion throughout its history. The computing industry is no exception. Cloud computing can be regarded as a re-emergence of virtualization-capable mainframes of the 1970s.

> Mainframe computers in use beginning in the 1950s had most of the capabilities we associate with cloud computing: powerful servers providing data storage, software, and processing. By the early 1970s, mainframes had hardware virtualization capabilities.

Then, the industry got distracted by supplying individuals with computing devices made for private use. The personal computers grew more powerful every year; performance was the focus of customer-facing innovation. The methods for connecting computing devices together continued to develop largely under the radar. The cloud of the present day benefitted from both of these research directions: it is both highly powerful and highly connected.

> The emergence of personal computers in the 1970s and home computers in the 1980s moved computational power away from mainframes and to personal computers accessible to many more people. The current growth of cloud computing represents an attempt to restore many of the computing advantages originally provided by mainframes, but with the added advantages of Internet connected, geographically distributed, and scalable data storage and processing.

And yet, many cloud capabilities have much room for further research, especially when it comes to privacy. Protection against data remanence is one such research direction. A malicious tenant can use advanced software tools to probe the hardware allocated to them for fragments of the data from its previous tenants.

> Deleting marks space with the file data as unused but does not overwrite the data. Computer forensic tools can read this unused space.

Even though the operating system treats unused disk space as empty, if you examine the physical bytes of the hard drive allocated to you when you launch a cloud server, you may recover strings of text left over from the previous tenant. You may find private information in it.

> Physical memory used by you gets reallocated to other customers. If the cloud provider does not properly erase this physical memory, hackers can run their own cyberforensic tools to search the space given to them for valuable data.

Your storage provider may use the excuse of having to scan your files for illegal content like child abuse material to access them and even mine them for the data they could sell to marketers. For example, they could count the frequency of certain keywords that appear in your data and pass along those counts to advertisers without your knowledge or financial benefit.

> Cloud storage providers may scan images using face recognition software or other software to detect things like pornography or even commercial products appearing in these images.

There's an asymmetry of legal protections when it comes to privacy. Defending one's privacy can be costly.

> Legal ambiguity could mean going to court to defend your privacy and data security, a long and costly process with no guarantee of success. Remember, you agreed to the terms and conditions, ambiguities included, in exchange for free cloud data storage.

Such a defense is complicated by the way the system allows the letter of the law to be twisted by your adversaries in court.

> Even if you acted correctly, you could suffer from a misinterpretation of data privacy and security laws. In such situations, even if you win the legal case, you still lose in terms of time, money, stress, and opportunities lost by dealing with the situation.

There's also an asymmetry to the way different privacy mechanisms are treated by law.

> A password might fall under the Fifth Amendment, but a biometric lock might not. As a case in point, a court in Virginia recently ruled that a password has Fifth Amendment protection because it represents knowledge, while a fingerprint does not because it serves as a physical key.

Even though these can at times be flimsy, the Fifth and Fourth Amendments represent layers of privacy protections afforded by the current US law. Where the Fifth Amendment fails, the Fourth Amendment can act as a safety net.

> Those who protect their devices and data with biometric security lose their Fifth Amendment rights. These people still have their Fourth Amendment right to illegal search and seizure, so law enforcement must still obtain a warrant.

And yet, it's best not to let privacy fights escalate to the point where courts must get involved, so you would do well to know how to correctly use privacy settings in your software. For example, when sharing files via Dropbox or Google Drive, do your part to discourage your guests from sharing these files with others.

> Etiquette says that invited guests should not themselves invite guests. The same should hold for sharing cloud data. Take care that default security settings on cloud data you choose to share does not allow others to share that data too.

There are Internet communities that aggregate [photos with sensitive information] that was mistakenly or misguidedly shared online.

> The website http://pleaserobme.com/ uses locations from Twitter accounts to geolocate people, specifically those away from home.

The Twitter user [@PleaseRob] similarly retweets people posting images of their physical keys and IDs. In the world where keys can be duplicated from their photos, just imagine what criminals can do with information from real IDs. [Insurance companies] will routinely check such Internet communities to try to get out of paying claims.

> Insurance companies might not pay claims on home burglaries if they find evidence online that the homeowner posted information about their absence from home.

Meanwhile, your private data can be stolen even without your knowledge as a hacker tricks your device into sending Internet traffic through their appliance.

> The device itself may auto-connect to a common wireless network service set identifier (SSID). A hacker can set up a fake Wi-Fi hotspot with that same SSID and your device will happily connect to it.

A device may connect to an evil-twin network for Internet access without realizing it.

> Hackers can set up evil-twin Wi-Fi access points to mimic legitimate Wi-Fi networks. Connecting to an evil-twin allows hackers to sniff your unencrypted traffic or redirect you to fake sites to get your login credentials.

This is yet another way of running a phishing attack. Hackers have come a long way since the early days when spamming your email with obvious scams was how it was done.

[@PleaseRob]: https://x.com/pleaserob
[photos with sensitive information]: /blog/books/cloud-storage-security/reading-along/hashtag-stealmyidentity.md
