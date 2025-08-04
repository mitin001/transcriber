# [160](https://darknetdiaries.com/transcript/160/). Greg

Greg is the goth guy. He became a goth when he faced adversity in his teenage years.

> Goths choose to embrace that inner shadow, lean into their weirdness, wear it like armor, and let your darkness be your beauty.

Becoming a goth is a way to assert one's identity and find a community of like-minded people.

> It gives you a sense of self when the world pretends you’re invisible.

The goth lifestyle has saved his life, and so Greg became a goth for life.

> Being goth, can become more than just a style. It becomes your anchor, because being goth means you already know what it’s like to live on the outside. You already live in the cracks of the system. So when the worst happens, when your life is shattered, being goth is a reminder that it’s okay to be on the outside of society. The music reinforces the idea that it’s okay to live outside what’s normal, and there’s a level of comfort to hear that music and to see other goths who are also struggling to fight what’s normal, those quiet rebels, the kids who find beauty in broken places.

Greg doesn't need to hide his goth identity in adulthood because people take him seriously on the merits of his work. Greg is adept at finding vulnerabilities in new software products. He is an expert on fuzzing.

> Trying to use the tool or machine or application in ways it’s not supposed to be used to see if you could glitch it or somehow get it to act weird.

A cat will pull the wire on his feeder out of the outlet just enough to cause it to short. The feeder will glitch and dispense the food before its scheduled time. To find this vulnerability, the cat has been fuzzing with the feeder. Similarly, Greg is fuzzing with Word documents to try to get Word to glitch.

> He opened up a Word doc, not in Microsoft, though; in a hex editor where you can manipulate the ones and zeros directly in the file, almost like doing surgery on the file, and he put in a character directly into the file that he knows Microsoft Word can’t accept, and then he’d save it and try to open it up in Word to see what it would do.

If a malformed Unicode character will not cause Word to crash, perhaps setting a document property for an out-of-bounds value will.

> Let’s set the font to the max, 16.38, close down Word, open up the file in a hex editor, look for where that number is. 16.38, where does that show up?

To find which part of the document holds the attribute value, first set it in Word to a value unlikely to show up anywhere else, then find it in the saved file in the Hex editor, and replace all of its occurrences with a different value.

> Let’s change that to 9999 and save it and open it up in Word and be like, what now, Word? You wouldn’t let me set the font bigger, but I did. What are you gonna do? Nothing. It just reverts back to the default font size. It had some sort of logic to handle what happens with a font size that we can’t accept.

Why do we want to create a document that will make Word crash? Because that same document will also contain malicious code that will be put in memory when Word crashes.

> The goal is to cause Word to crash, but then use that crash to force malicious code into memory or a pointer that references the code into memory.

Greg will phish email credentials out of an employee and use the access to get to the onboarding documents which will allow him to impersonate the employee to get into the building.

> I access her e-mail, and the first thing I do is I go all the way down to day one. What do you get in day one? E-mail. You get your employee training, you get your on-boarding information, you get your on-boarding documentation, and if you come to this building, you get your building alarm code. So, I have a physical alarm code that goes to her, and I also have her badge ID number and what she looks like.

Greg can also hack into a security camera.

> Look what happens if I modify these two values. The values is brightness and contrast, and you can edit both of them. It’s usually for when a viewer wants to look at the camera. Oh, it’s too dark or too bright. They can edit these. In UI, you can edit them a little bit, but programmatically, you can edit them all the way from 0 to 255 values. So, you can make them go all black or all white.

He will lower the brightness value on the camera so much, the image will turn completely black effectively disabling the camera for the time when he needs to access the building.

> It goes distinctly black for a second, and then I undo it.

Greg's word of caution to security researchers is to begin their work in the data-link layer. Vulnerabilities in the network, transmission, and application layers may be getting all the attention, but don't overlook the basics.

> Red teamers out there, pen testers out there, never skip out on layer two attacks. Layer two is your responders, your Cain and Abels, your ARP poisoning, your DHCP spoofing, all of those. That is gonna be your bread and butter. I promise you those vulnerabilities are still existing there. They still work.
