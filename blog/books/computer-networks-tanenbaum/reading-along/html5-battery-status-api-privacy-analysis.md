# [A privacy analysis of the HTML5 Battery Status API](https://eprint.iacr.org/2015/616.pdf)

If a website is allowed to know your battery level, it can track you with it.

> The capacity of the battery, as well as its level, expose a fingerprintable surface that can be used to track web users.

A series of precise battery level measurements can be used to calculate the effective capacity of the user's battery. The effective capacity depends on the battery's wear. Every user has a battery with an identifiably unique degree of wear. By the same token, every user has a unique discharging rate: a worn-out battery discharges significantly faster than a new one. It is possible to identify users just by the uniqueness of their battery's discharging rate.

> A third-party script that is present across multiple websites can link users’ visits in a short time interval by exploiting the battery information provided to Web scripts. In order to do that, scripts can use the values of battery level, dischargingTime and chargingTime. The readings will be consistent on each of the sites, because of the fact that the update intervals (and their times) are identical. This could enable the third-party script to link these concurrent visits. Moreover, in case the user leaves these sites but then, shortly afterwards, visits another site with the same third-party script, the readings would likely be utilized to help in linking the current visit with the preceding ones.

This can be mitigated by a reduction of functionality. The values reported by the battery API could lose most of their significant digits and still be used for the intended purpose: to give the website the general idea of the device's power consumption. The lower the precision of the battery API, the harder it is to abuse it for malicious purposes, such as user tracking. If the reported values have only a few significant digits, readouts from one user will be easy to confuse with the readouts from others, which would make trackers that rely on these values much less useful.

> The fingerprintable surface of the API could be drastically reduced without any loss in the API’s functionality by reducing the precision of the readings.

There's no loss in functionality because the user doesn't perceive small errors in the estimates of the power consumption of their device. Therefore, the reduction of precision has no significant downside for functionality but a significant upside for privacy. Situations with no significant trade-offs like this are rare. Typically, measures to protect a user's privacy make it harder for the user to grant access to their data for legitimate purposes. Not in this case.

> We propose a solution that reduces the Battery Status API’s fingerprintable surface by rounding the level readings provided by the API. Our fix does not cause any loss in the effective functionality of the API.

When the user's battery status is reported with reduced precision, websites can still make application-specific decisions based on this data, just not track users through it. While there's an easy way to mitigate the tracking vulnerability left by opening the user's battery status to a website, there are many other metrics that introduce a similar vulnerability but without a simple mitigation strategy.

> Browsers can be fingerprinted using different properties, such as clock skew, font metrics, network protocol characteristics, JavaScript engine performance, WebGL and canvas rendering.

Technological innovations like these seem to arrive every day. More research is sorely needed in the area of user privacy to find mitigation measures for vulnerabilities introduced by them. Advances in privacy always lag behind advances in technology. As long as technology keeps advancing, a security researcher will always have work.
