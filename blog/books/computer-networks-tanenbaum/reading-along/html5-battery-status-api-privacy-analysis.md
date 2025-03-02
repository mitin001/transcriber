# [A privacy analysis of the HTML5 Battery Status API](https://eprint.iacr.org/2015/616.pdf)

> The capacity of the battery, as well as its level, expose a fingerprintable surface that can be used to track web users.

How do we track a user based on their battery level?

> Recover the battery’s effective capacity (EnergyFull) using the precise battery level readouts.

The effective capacity depends on the battery's wear. Every user has a battery with an identifiably unique degree of wear. By the same token, every user has a unique discharging rate: a worn-out battery discharges significantly faster than a new one. It is possible to identify users by their battery's discharging rate.

> A third-party script that is present across multiple websites can link users’ visits in a short time interval by exploiting the battery information provided to Web scripts. In order to do that, scripts can use the values of battery level, dischargingTime and chargingTime. The readings will be consistent on each of the sites, because of the fact that the update intervals (and their times) are identical.
This could enable the third-party script to link these concurrent visits. Moreover, in case the user leaves these sites but then, shortly afterwards, visits another site with the same third-party script, the readings would likely be utilized to help in linking the current visit with the preceding ones.

Sometimes, it pays to reduce functionality. The lower the precision of this API, the harder it is to abuse it for tracking a user.

> The fingerprintable surface of the API could be drastically reduced without any loss in the API’s functionality by reducing the precision of the readings.

The authors argue that this doesn't even reduce the API's functionality. Typically, measures to protect a user's privacy make it harder for the user to grant access to their data for legitimate purposes. Not in this case. When the user's battery status is reported with reduced precision, websites can still make application-specific decisions based on this data, just not track users through it.

> We propose a solution that reduces the Battery Status API’s fingerprintable surface by rounding the level readings provided by the API. Our fix does not cause any loss in the effective functionality of the API.

Battery status is one of many metrics that can be exploited to track users on the web.

> Browsers can be fingerprinted using different properties, such as clock skew, font metrics, network protocol characteristics, JavaScript engine performance, WebGL and canvas rendering.
