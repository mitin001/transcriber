# [A privacy analysis of the HTML5 Battery Status API](https://eprint.iacr.org/2015/616.pdf)

> The capacity of the battery, as well as its level, expose a fingerprintable surface that can be used to track web users.

Sometimes, it pays to reduce functionality. The lower the precision of this API, the harder it is to abuse it for tracking a user.

> The fingerprintable surface of the API could be drastically reduced without any loss in the API’s functionality by reducing the precision of the readings.

The authors argue that this doesn't even reduce the API's functionality. Typically, measures to protect a user's privacy make it harder for the user to grant access to their data for legitimate purposes. Not in this case. When the user's battery status is reported with reduced precision, websites can still make application-specific decisions based on this data, just not track users through it.

> We propose a solution that reduces the Battery Status API’s fingerprintable surface by rounding the level readings provided by the API. Our fix does not cause any loss in the effective functionality of the API.

Battery status is one of many metrics that can be exploited to track users on the web.

> Browsers can be fingerprinted using different properties, such as clock skew, font metrics, network protocol characteristics, JavaScript engine performance, WebGL and canvas rendering.
