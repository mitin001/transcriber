# [101](https://darknetdiaries.com/transcript/101/). Lotería

Puerto Rico hires a cybersecurity consultant to figure out why their lottery is losing money. When he starts his audit, the unexpected losses in lottery revenue suddenly stop. Meanwhile, the database team voices their displeasure over him being there. The consultant concludes that the suspect is an insider.

> Before he got there, it was losing a lot of money, but whatever was happening stopped since he’s arrived.  This makes him believe that there’s an insider somewhere that stopped once they saw he was investigating.

The consultant started real-time monitoring of database transactions to see if anything unusual jumps out at him.

> When someone comes to cash in their winning lottery ticket, they take it to a place where they can cash it, and the clerk scans the ticket.  At that point, the scanner will check the database to see if it’s a winning ticket or not.  So, already the database has a read operation that would show the logs.  Then the database tells the clerk this is a winning ticket; you should pay this amount.  When the clerk pays it, it updates the database to indicate this ticket has been paid and it shouldn’t be cashed out again.  So, every lottery ticket that gets paid, there’s an update to the database, which means there’s a lot of logs that he’s gotta sift through to try to find anything unusual.

Suddenly, he sees an update query on the payout amount for a winning lottery ticket followed shortly by another update query that reverted this change.

> The payout was supposed to be a dollar, but it would change to like, $10,000.  You would see the transaction for $10,000 exit, and then you would see the amount that was actually paid out go back to a dollar in the database.

The change was made by a someone impersonating a service user.

> Whoever was doing this was using the username ‘service’ to make these changes.

The user was clever enough not only to disguise himself but also to wipe the evidence from the data.

> Someone inside the lottery IT team was going into the database and changing one number, waiting for the payout to happen, and then changing it back.  This is why when they audited all the transactions before, they didn’t find any sign of this happening, because someone’s going in the database and wiping the evidence.  It was only from sitting patiently, doing some real-time monitoring of logs, collecting network traffic, and watching these tickets get paid out that they caught this.

They weren't clever enough to wipe the security camera footage. The service user was ultimately identified and caught thanks to security camera footage of the server room from the times when the payout update queries were made in the database. The insider would come into the server room, make the change, tell his associate at the pay station that his ticket was ready to cash out, receive confirmation of cashout from the associate, wipe the evidence from the database only, and leave the server room.

> They would say I will be at this payout station at this time, so this guy would go in ten minutes beforehand, change the payout amount.  The person will walk up with a boleto, take a number.  They would actually type in the boleto serial number, and it would be for $10,000 versus a dollar.  He would see the transaction process and then immediately go flip it back to a dollar.  So, the individuals on the end, at the payout stations, didn’t know.  They were like _oh, this is a $10,000 winning ticket; sweet.  Here’s your $10,000_.

The whole scheme was set up to launder money for the drug cartel.

> Those winning lottery tickets were sold to people in the cartel for 20% more than whatever it was worth, so if the winning lottery ticket was worth $10,000, the cartel members could buy the ticket for $12,000.  The reason for this is because the cartel had a lot of illicit cash and they wanted a way to make the cash look legitimate.  So, when they’d cash in the winning lottery ticket, they would get a check from the Puerto Rico lottery and take the check to their bank to deposit it.  This would allow them to legally declare their winnings on their taxes.  This way, they had a nice, clean record of where they got their money from.
