# [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

An email arrives with its encoding specified in its headers.

> Content-Type: text/plain; charset="UTF-8"

But we can't expect an HTML page to have that in its request headers.

> Suppose you have a big web server with lots of sites and hundreds of pages contributed by lots of people in lots of different languages and all using whatever encoding their copy of Microsoft FrontPage saw fit to generate. The web server itself wouldn’t really know what encoding each file was written in, so it couldn’t send the Content-Type header. It would be convenient if you could put the Content-Type of the HTML file right in the HTML file itself, using some kind of special tag.

An HTML page specifies the encoding early enough in the document so that the browser hasn't yet had to decode and non-ASCII characters and that the overhead of restarting the decoding process is low.

> How can you read the HTML file until you know what encoding it’s in?! Luckily, almost every encoding in common use does the same thing with characters between 32 and 127, so you can always get this far on the HTML page without starting to use funny letters: `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">`. But that meta tag really has to be the very first thing in the `<head>` section because as soon as the web browser sees this tag it’s going to stop parsing the page and start over after reinterpreting the whole page using the encoding you specified.

A web browser will sometimes try to guess the encoding based on the bytes it sees in the document. An encoding may have a characteristic distribution of commonly used bytes, and if the page content falls within this distribution, the browser can be reasonably sure about its encoding.

> What do web browsers do if they don’t find any Content-Type, either in the http headers or the meta tag? Internet Explorer actually does something quite interesting: it tries to guess, based on the frequency in which various bytes appear in typical text in typical encodings of various languages, what language and encoding was used. Because the various old 8 bit code pages tended to put their national letters in different ranges between 128 and 255, and because every human language has a different characteristic histogram of letter usage, this actually has a chance of working. It’s truly weird, but it does seem to work often enough that naïve web-page writers who never knew they needed a Content-Type header look at their page in a web browser and it looks ok, until one day, they write something that doesn’t exactly conform to the letter-frequency-distribution of their native language, and Internet Explorer decides it’s Korean and displays it thusly.
