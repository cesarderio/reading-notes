# Class 36 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## XSS with w3af, DVWA

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[Cross-site scripting](https://portswigger.net/web-security/cross-site-scripting)

Explain how a cross-site scripting attack works in non-technical terms.

* An attacker uses hidden code to leave a malicious code on a website without the website properly detecting/testing for it. The malicious code is then used to attack a user or webiste/etc..

What are the three types of XSS attacks?

* Reflected XSS

* Stored XSS

* DOM-based XSS

If an attacker successfully exploits a XSS vulnerability, what malicious actions would they be able to perform?

* *Impersonate or masquerade as the victim user.*
* *Carry out any action that the user is able to perform.*
* *Read any data that the user is able to access.*
* *Capture the user's login credentials.*
* *Perform virtual defacement of the web site.*
* *Inject trojan functionality into the web site.*

What are some security controls that can be implemented to prevent XSS attacks?

* *Filter input on arrival*
* *Encode data on output*
* *Use appropriate response headers*
* *Content Security Policy*

Bookmark and Review

* [Security Report for In-Production Web Applications](https://www.rapid7.com/globalassets/_pdfs/whitepaperguide/rapid7-tcell-application-security-report.pdf)

<br>

### Things I want to know more about
