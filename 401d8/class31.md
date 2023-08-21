# Class 31 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Malware Detection with YARA Rules

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[What Are YARA Rules?](https://archerint.com/what-are-yara-rules/)

[Threat Hunting using YARA](https://www.geeksforgeeks.org/threat-hunting-using-yara/)

What is the main goal of Threat Hunting and how is it different from traditional threat monitoring?

* *Threat Hunting* is the active process of seeking out threats through the network/traffic/etc.. in search of the attacker/attacks. Traditional threat monitoring is reactive and need something to happen first to set off triggers/alerts/etc..

What are the four types of YARA rules and what does each one of them use to identify and classify malicious software?

* "It's like a google search for malicious software"

* *Rules*
  * Search for set parameters(malicious software)
* *Private Rules*
  * "Secretly search" and can be attached/trigger to other rules.
* *GLobal Rules*
  * If a match is found, all other rules will check the file. "Improves search and find".
* *Private Global Rules*
  * Mix between private and global rules, secretly search and secretly trigger/alert other rules.

How are YARA rules similar to how Anti-Virus programs detect malicious software?

* Both use known algorithms, libraries, rules, etc. to search, monitor and find matches against the rules or database they have. Then other rules, triggers and alerts will be set in motion in reaction to finding the match(es).

## Bookmark and Review

* [YARA Rules GitHub Project](https://github.com/Yara-Rules/rules)

  * *This project covers the need of a group of IT Security Researchers to have a single repository where different Yara signatures are compiled, classified and kept as up to date as possible, and began as an open source community for collecting Yara rules.*

<br>

### Things I want to know more about
