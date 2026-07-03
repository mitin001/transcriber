# [Security Risks of Android Wearable Devices](https://www.darkreading.com/cyber-risk/bitdefender-research-exposes-security-risks-of-android-wearable-devices)

**Early adopters** compromise a lot. They bear the brunt of recalls. They have patience for buggy software. They accept the risks of getting hacked in new but often unsurprising ways.

> In the rush to supply early adopters with trendy technology, security has been compromised.

Security researchers at Bitdefender demonstrated the ease with which third parties could eavesdrop on messages sent by the phone to a wearable device.

> We did manage to see plain-text conversations between apps, such as Facebook Messenger, Google Hangouts, and even SMS messages when sent from the Android device to the smartwatch.

The encrypted messages sent over Bluetooth can be captured and then decrypted by trying all six-digit combinations as the secret. The combination that decrypts one message into readable text will work to decrypt all the messages captured between these two Bluetooth devices. Would you let a stranger watch your screen? This vulnerability makes this possible without you ever suspecting that this is what's happening. A hacker can stand next to you, capture all the messages ping-ponging between your devices, run the cracker on the shortest one, and then use the cracked code on all of them to replay what was on your screen during the time of capture.

> Bluetooth communication between smartwatch and Android device involved encrypted Bluetooth communication using six-digit PINs to obfuscate the broadcast and prevent any curious newbie from seeing entire conversations in plain text with a sniffing tool. Using available tools, this six-digit PIN can easily be brute-forced and used to decrypt the conversation between smartwatch and smartphone.

To mitigate this vulnerability, the researchers propose apps that send notifications to implement stronger secondary encryption.

> We could supersede the entire Bluetooth encryption between Android device and smartwatch and use a secondary layer of encryption at the application level.

The problem with this approach is that the stronger the encryption, the hotter the CPU.

> Encryption involves heavy computations.

They could quickly drain the device's battery, which is a precious resource. Everything is a compromise.
