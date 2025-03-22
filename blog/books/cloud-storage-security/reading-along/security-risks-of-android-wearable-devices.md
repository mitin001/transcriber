# [Security Risks of Android Wearable Devices](https://www.darkreading.com/cyber-risk/bitdefender-research-exposes-security-risks-of-android-wearable-devices)

> In the rush to supply early adopters with trendy technology, security has been compromised.

Security researchers at Bitdefender demonstrated the ease with which third parties could eavesdrop on messages sent by the phone to a wearable device.

> We did manage to see plain-text conversations between apps, such as Facebook Messenger, Google Hangouts, and even SMS messages when sent from the Android device to the smartwatch.

The encrypted messages sent over Bluetooth can be captured and then decrypted by trying all six-digit combinations as the secret. The combination that yields readable text will then work to decrypt all the messages captured between two Bluetooth devices.

> Bluetooth communication between smartwatch and Android device involved encrypted Bluetooth communication using six-digit PINs to obfuscate the broadcast and prevent any curious newbie from seeing entire conversations in plain text with a sniffing tool. Using available tools, this six-digit PIN can easily be brute-forced and used to decrypt the conversation between smartwatch and smartphone.

The researchers propose stronger secondary encryption to take place at the application level to mitigate this vulnerability.

> We could supersede the entire Bluetooth encryption between Android device and smartwatch and use a secondary layer of encryption at the application level.

The problem with this approach is that the stronger the encryption, the more impact it has on the battery.

> It might have an impact on the smartwatch’s battery lifetime, as encryption involves heavy computations.
