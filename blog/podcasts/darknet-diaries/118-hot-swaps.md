# [118](https://darknetdiaries.com/transcript/118/). Hot Swaps

Joseph Harris shares his social engineering strategy for account takeovers: call the billing department to add a credit card to an account and then call support to gain access to the account by verifying the fake credit card number he just added.

> What I would do before I would call Yahoo in a lot of cases was I’d call up the billing department; call up Yahoo, say hey, I’m trying to add a card to my Yahoo account.  I’m actually thinking about making a purchase, Yahoo Small Business.  I need to make sure my card’s on file.  They’d say _okay, you don’t have a card on file_.  I’m like _weird; I thought I just added it_.  Like, _would you like you – me to add the card for you?_  So, you give them a fake Visa.  It doesn’t have to be valid at all.  It doesn’t actually bill anything.  Just give them a fake Visa, give them a security code, and they register on the account, then call back the regular Yahoo support.  Hi; oh, we see you have a card on file.  Could you verify the last four digits of the card for it?  You know that Visa because you added it.

A piece of data a cell provider might request to verify your identity as the owner of the phone number is your account number. Joseph looked for a bug in the Verizon website that could provide this information to him. Verizon allows people to pay their bills without logging in, and, of course, the bug he was looking for was on this quick-pay page.

> Joseph found a page on Verizon’s website which lets you put in someone’s phone number to pay their bill.  Then, if he inspected the source code, he could see their account number.

It's hard to see the severity of the impact of such a bug, but in Joseph's hands, it was what let him do a full-on account takeover.

> So what if someone knows my Verizon account number?  What are they gonna do, pay my bill with it?

Similarly, Joseph looked for bugs in the T-Mobile website.

> I had a compromised account number to a T-Mobile account, so I signed in with someone else’s T-Mobile account and I just started looking through the HTTP traffic.

He found that he could get a T-Mobile ID for any user and then use this parameter to spoof an HTTP request that would allow him to read any T-Mobile user's text messages. Sometimes an account takeover isn't necessary for a data breach.

> It allowed him to read text messages for other T-Mobile users without having to SIM-swap them, because he was changing the IMSI number.

Joseph's other strategy for account takeovers is a twist on good-old credential stuffing. He would search for leaked passwords and then try variants of them.

> You’d search in the e-mail into this leak site, and it would display the public passwords of them.  So essentially, I’m copying these passwords, I’m trying them with variants.  Like, if the password’s ‘cooldog122’, I might try ‘kooldog’ with a K or maybe ‘cooldog122!’ with an exclamation point at the end.

Other people thought they were sneaky by incorporating the name of the site into the password: cooldog122@myspacecom, cooldog122@paypalcom, etc.

> Even though people were using different passwords on every site which is what you should be doing, the way they were changing it was guessable.

You're only protected against credential stuffing if you're actually using completely different passwords across sites, not variations of the same password.
