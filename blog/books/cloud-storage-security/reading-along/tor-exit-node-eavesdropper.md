# [Rogue Nodes Turn Tor Anonymizer Into Eavesdropper's Paradise](https://web.archive.org/web/20100607062314/http://www.wired.com/politics/security/news/2007/09/embassy_hacks?currentPage=all)

Swedish computer security consultant Dan Egerstad ran a Tor exit node, through which he intercepted all text sent or received on port 25 (email SMTP). None of it was encrypted, and so he was able to extract passwords from the intercepted text.

> He collected between 200 and 250 accounts belonging to embassies and government agencies that were sending passwords and the content of correspondence in the clear.

The lesson is that you should always encrypt your messages when sending them over Tor if you don't want an exit node to copy them and mine them for any information you'd rather keep private. 
