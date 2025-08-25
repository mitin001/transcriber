# 2. Application Data in the Cloud

Facebook manipulates us into relinquishing our data. Giving away our privacy is framed as a good thing on social media. Facebook calls this _sharing_.

> Personal information that users provide when they sign up for Facebook include the user’s name, email, gender, and birth date. They are also provided “the opportunity” to add information about where they work, where they went to school, and a photo.

Facebook won't be in trouble if it abuses your data because abusing your data is in their terms of service, to which you agreed by signing up.

> This is a treasure-trove of information that can and will be used by “others” without your permission, because you have agreed to this during sign up.

The same is true of Twitter.

> The Services that Twitter provides are always evolving and the form and nature of the Services that Twitter provides may change from time to time without prior notice to you.

Somehow, Twitter goes even further than Facebook. It absolves itself of any responsibility to handle your personal data with care by saying what they do to it can change at any time with no prior warning to you, the user.

> The TOS clearly states their service may change without any notification.

By using Twitter, you agree to go along with this company's every whim. The situation at Google is even more alarming because, while the user understands that social media is all about data sharing, services like email are supposed to keep your data private, and yet, privacy breaches are common there, too. For example, for far too long, private data moved around the Google cloud unencrypted. This was not just within one data center but also across different geographically distributed data centers.

> Google data, including Gmail, was being sent among Google data centers located throughout the world in an unencrypted form. Google moves data among their data centers to provide load balancing, data backup, faster access, etc.

This provided an opportunity for the NSA to intercept unencrypted data of potentially anyone who has used Google software.

> This data was being intercepted by the National Security Agency while in transit between Google servers. While data in transit from a Gmail user to the Google email server was protected using encryption, data in motion was not secure between and among Google data centers.

A user-facing load balancer typically has an HTTPS listener, so the data exchanged between it and the user is encrypted, but as soon as the request enters the load balancer, it travels to one of its worker nodes over HTTP, and then the response from the worker node is delivered back to the load balancer over HTTP, i.e., unencrypted. We could argue that since the communication between the worker and the load balancer does not traverse the Internet, there's no point to unnecessarily encrypting those messages, but apparently, the NSA, and who knows who else, has figured out a way to eavesdrop on such internal unencrypted message exchanges within the Google cloud. And so now, cloud providers offer an ability to encrypt payloads as they move through nodes _within_ the cloud and not just between the cloud and its end users.

> The three big email services providers, Gmail, Yahoo! Mail, and Outlook.com, provide secure data in motion using HTTPS. They have all updated the way they handle data moving between their data centers by adding encryption.

And yet, if the service can decrypt your data, they will. The terms of service for Gmail admit as much.

> Our automated systems analyze your content (including emails) to provide you personally relevant product features, such as customized search results, tailored advertising, and spam and malware detection. This analysis occurs as the content is sent, received, and when it is stored.

In other words, your private email is not private.

> The answer to “can anyone else read my email” is YES.

Even if you have your own private email server, as soon as you send an email to a cloud-based email provider, that email is no longer private.

> Anyone who sends an email to a Gmail address will also have their email scanned and read, even though they have no connection to Gmail and have not agreed to any of Google’s TOS.

Even though cloud email providers now encrypt traffic _in transit_ across the nodes of their cloud, the data is still unencrypted while _at rest_.

> If “analysis” occurs on stored data, the data must be in cleartext and not encrypted.

Your supposedly private emails in Gmail can be reproduced by Google at any time, anywhere.

> When you upload, submit, store, send or receive content to or through our Services, you give Google (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content.

In other words, do not expect privacy when using cloud-based email.

> This gives new meaning to the phrase, “don’t put anything in an email that you don’t want to appear on the front page of the New York Times.”

You may never know if the government had ever subpoenaed a cloud service (e.g., Carbonite) to hand over your data. To keep yourself in the know on such things, encrypt data with your own key. This way, you will know exactly when your data is being accessed by third parties.

> The advantage of a user-controlled and managed encryption key is that no one at Carbonite can read your data. In response to a court-ordered subpoena, Carbonite can only supply encrypted data. However, under court order, you may be required to provide the encryption key.

This may also deter the government from snooping through your data unless it is absolutely necessary for them to do so. The government will want to avoid alerting its citizens that it's violating their right to privacy.
