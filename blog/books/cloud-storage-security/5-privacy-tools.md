# 5. Privacy Tools

How does one classify Amazon Web Services (AWS)? Software as a service (SaaS)? Platform as a service (PaaS)? Don't forget security as a service (**SECaaS**). Its flagship SECaaS offering is **AWS IAM**. This service controls user **policies** (which actions a user is allowed to take on which resources) for all other AWS services. It also allows single sign-on: the user logs into AWS as a whole instead of into each of its individual services (S3, EC2, etc.) separately.

> SECaaS creates a layer between applications and cloud data. This layer provides identity and access management (IAM) and allows for single-sign-on (SSO) for all cloud accounts. Applications attempting to access cloud data are redirected to the SECaaS, which authenticates the user and provides a single-sign-on (SSO) for the user to all managed cloud data across all cloud storage providers.

Logging in to the AWS console, like many other web services, requires a password. Remember that creating a password from some rule or passphrase is not secure enough.

> A variety of strategies exist to make complex but easy to remember passwords by combining words and numbers and applying patterned substitutions. Unfortunately, if you can apply a rule to create a password, then so can a password cracker. Any rule you can think of probably has already become part of a password cracking tool.

Instead, generate a random password and then come up with a **passphrase** to remember it.

> Create a memorable phrase from your password (not vice versa!) by choosing words that begin with the characters in the password. For example, the password “xPgpbSGIdj5zac” could become “Xander, Please get peanut butter Sandwich Glue. I did join 5 zoos and churches.” Practice learning your password by typing it into a document. This will help build muscle memory and engage more of your brain to aid learning.

Rotate your credentials periodically. The Nazis waited too long to change their password, and that provided a vulnerability that allowed the Allies to eavesdrop on them.

> Allied intelligence broke the encryption of the Enigma machine because the Nazis did not change the password frequently enough.

Do not be like the Nazis. Change your passwords.
