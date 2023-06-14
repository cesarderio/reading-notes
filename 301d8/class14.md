# Class 14 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Group Policy

The linked content is a good resource for learning about Group Policy

## Reading

[What is Group Policy and What Role Does It Play in Data Security](https://www.lepide.com/blog/what-is-group-policy-gpo-and-what-role-does-it-play-in-data-security/)

What role does Group Policy play in Windows Active Directory?

* Group Policy is a feature of Windows that facilitates a wide variety of advanced settings that network administrators can use to control the working environment of users and computer accounts in Active Directory. It essentially provides a centralized place for administrators to manage and configure operating systems, applications, and users’ settings.

Name and describe different ways GPOs can benefit security.

* A Group Policy Object (GPO) is a group of settings that are created using the Microsoft Management Console (MMC) Group Policy Editor. GPOs can be associated with single or numerous Active Directory containers, including sites, domains, or organizational units (OUs). The MMC allows users to create GPOs that define registry-based policies, security options, software installation, and much more.

Active Directory applies GPOs in the same, logical order; local policies, site policies, domain policies and OU policies.

How can the acronym “LSDOU” help you figure out which policies are in effect?

* The order that GPOs are processed is known as LSDOU, which stands for local, site, domain, and organizational unit. The local computer policy is the first to be processed, followed by the site level to domain AD policies, then finally into organization units. If there happen to be conflicting policies in LSDOU, the last applied policies win out.

## Videos

[Wireless Standards](https://www.professormesser.com/network-plus/n10-008/n10-008-video/wireless-standards-n10-008/)
[Wireless Technologies](https://www.professormesser.com/network-plus/n10-008/n10-008-video/wireless-standards-n10-008/)
[Wireless Encryption](https://www.professormesser.com/network-plus/n10-008/n10-008-video/wireless-encryption-n10-008/)

### Things I want to know more about
