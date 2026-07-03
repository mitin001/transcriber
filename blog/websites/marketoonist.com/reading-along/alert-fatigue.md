# [Understanding and fighting alert fatigue](https://www.atlassian.com/incident-management/on-call/alert-fatigue)

> Too few alerts can mean missed incidents, but too many can also lead to missed incidents through alert fatigue.

If we plot alert load vs missed incidents accounting for alert fatigue on a chart, we will see a direct correlation, which is a concerning trend.

> Without attempting to find that balance, systems usually err on the side of too many alerts.

A system with a high alert load is a system where many alerts are left uninvestigated.

> The system had very low alert thresholds and every alert was given equal priority.

The solution is to raise the alert threshold or improve the stability of the system so it doesn't generate as many alerts. Assigning alert priorities or tiers (critical, error, warning, info) can help, too. An alert priority refers to how an alert shows: its color coding (yellow vs red), sound, whether it comes with a vibration of the steering wheel, etc.
