# Class 42 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Pass the Hash with Mimikatz

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[What is Mimikatz?](https://www.varonis.com/blog/what-is-mimikatz/)

Name the six credential-gathering techniques which Mimikatz is able to perform and explain how two of them work.

* ***Pass-the-Hash***: Attackers use ***Mimikatz*** to pass exact hash string to log in to target computer.

* ***Pass-the-Ticket***: ***Mimikatz*** provides functionality to user to pass ***Kerberos*** ticket to another computer and log inwith that user's ticket.

* ***Overpass-the-Hash***: Passes unique key obtained from domain controller to impersonate a user.

* ***Kerberoast Golden Tickets***: Non-expiring domain administrator credentials to any computer on the network.

* ***Kerberoast Silver Tickets***: ***Kerberos*** grants a user ***TGS*** ticket that is used to log into any services on the network.

* ***Pass-the-cache***: Similar to ***Pass the Ticket***, but uses saved and exrypted login data on Mac/UNIX/Linux systems.

<br>

What are four ways we can defend against Mimikatz attacks. Explain how two of the mitigations can stop Mimikatz.

* Change admin privileges: Limiting admin privileges to only users who need them.

* Change caching policy: Limiting caching and saved passwords/keys/tickets/etc..

* Turn off debugging privileges: Limiting debugging and access to the system.

* Increase local security authority: Limiting access and control over the network and system.

All of these limit and/or decrease possible security vulnerabilities and exploits that can be used by ***Mimikatz***.

<br>

### Things I want to know more about
