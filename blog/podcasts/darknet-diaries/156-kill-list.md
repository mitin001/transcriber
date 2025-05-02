# [156](https://darknetdiaries.com/transcript/156/). Kill List

In the movie _Hit Man_, character Gary Johnson debunks the myth of a hitman for hire.

> People feel almost disappointed to learn that hitmen don’t really exist. This idea that there are people out there at a retail level you can just hire to eliminate your worst relationship issues or facilitate some money scam or the usual combination of both, it’s a total pop-culture fantasy. But because hitmen have been a staple of books, movies, and TV for the last fifty years, good luck getting anyone to believe their existence is all a myth.

And yet, there are plenty of sites on the dark web promising this service. They are all scams. One of them makes all its supposedly private messages publicly available.

> Just because you’re on the dark web, just because you’re on a site that is supposedly very illegal, does not mean it’s actually secure. You would think if this site was actually a place to hire a hitman that the utmost extreme privacy would be put in place, but it wasn’t. Not even close. The site was a total joke as far as security and privacy goes, and I want you to keep that frame of mind whenever you’re dealing with anything with sensitive data.

This is because the site is vulnerable to insecure direct object reference.

> This vulnerability is number one on the OWASP Top 10 Vulnerabilities, which falls under broken access control.

Chris Monteiro found this vulnerability in a hitman-for-hire site by tampering with its URL parameters.

> He just changed one number in the URL.

When he made a post on the site, it was then accessible to him as post n. When he tried to change the URL in the browser's address bar to retrieve post n-1, it worked. He saw another user's post without having to log in as that user.

> You just change part of the URL to one number different or something to see if you could see someone else’s data.

Typically, it's much harder to access a site's private data. To do that, attackers have to tamper with cookies, not just URL parameters.

> A more complex approach might be that you have to go into the cookies and change which user you are, and then the site thinks you’re a different user without actually validating that.

Upon reading a message from a different user, Chris determined that although the site was fake, the intentions of the person seeking a hitman were real: he wanted to get his partner killed. So, Chris called the police on the user. When they searched the poster's house, they found the password to get him into the site. He left it written down.

> In a thumbprint safe in his house, a safe that only he could access, there is a sticky note, and on that sticky note is both his username and the password for the site.

Once the police used these credentials to access the site, they determined that this person indeed had criminal intent, so they arrested him. See something? Say something. Even if it's something you were not supposed to see.
