# [21](https://s3.amazonaws.com/writecomments.com/transcripts/644148fb32e88f031c3c549b093a9012.csv). Bots

Brett is constantly tempted to get back to the life of crime, especially when he learns of a new technique. He deals with the temptation by processing it through conversation, writing, and podcasting. This way, he keeps himself from committing crimes while we benefit from his knowledge.

> I would see a technique or something like this refund fraud or synthetic fraud techniques, or I would read some story about fraud, like stimulus fraud or what have you, and be tempted. And the way that I would combat that is I would talk to my law-enforcement friends, or I would write a blog about that specific type of fraud, or I would do a podcast about that specific type of fraud, do some interviews, what have you. And that tended to get rid of the temptation.

When a user logs in to a bank, Genesis steals their cookies and uses them to make fraudulent transactions out of the bank on behalf of that user.

> Genesis is so effective that the criminal steals the credentials, steals all the things that are needed to take over your account, comes back in right after you. The bank doesn't know it's not you because it's the correct cookie, it's the correct browser fingerprint, blah, blah, blah. Comes right back in, steals the money. The bank thinks it's you that's sending the money out, denies you fraud protection after that.

Cookies are just one example of the [browser fingerprint](/blog/computer-networks-tanenbaum/device-browser-fingerprinting.md) captured by Genesis. The software is so sophisticated that even MFA does not protect against this kind of automated account takeover attack.

> Every time I sign in, it sends me an MFA code, but because the criminals captured the cookie of that session, everything he needs in that specific session, when he goes to sign on, that MFA, that multi-factor authentication isn't triggered. It's bypassed because the bank sees it as me just coming right back in at that point.

Another kind of attack that involves bots is the denial-of-inventory attack.

> You go onto a travel website to book a flight and a bot or a system of bots can come in and what they do is they take all the low-priced flights, and they simply act like they're going to buy it. It goes to cart. All right. And when it's in the cart, they're not buying it. It's just sitting in the cart like they're going to buy it, but they never do. Some legitimate user comes in wanting to book a flight, but because the bot network has already come in and basically has every single low-priced flight in a cart waiting to be purchased, the only flights that are available to that customer are the really high-priced flights. What happens at that point? Well, either the customer purchases a higher flight or the customer goes elsewhere to try to find a flight, typically to a website controlled by the criminal ... (or that the criminal wants the customer to go to) who then profits from that denial of inventory. Meanwhile, on the site that's being hit by that bot attack, you have massive amounts of inventory that's not being sold and the prices are driven up for that e-commerce site.

Travel websites try to mitigate denial of inventory by only holding an item in the cart for a certain time, forcing the customer to wrap up the transaction before the timer runs out.
