# Class 13 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Active Directory

The linked content is a good resource for learning about Window's Active Directory

## Reading

[What is Active Directory?](https://www.cyberark.com/what-is/active-directory/)

What exactly is “Active Directory” and are the key services it provides?

* ***Active Directory*** - Windows based directory service Directory service.

  <!-- * Centralized database for  computers, groups, users, etc..
  * Authentication
  * Authorization
  * Domain Services:
  * Directory Services:
  * Group Policy:
  * LDAP Services:
  * Replication:
  * Trust Relationships: -->
  * Centralized database for computers, groups, users, etc..

  | Authentication | Authorization |
  |:--------------:|:-------------:|
  | Domain Services | Directory Services |
  | Group Policy | LDAP Services |
  | Replication | Trust Relationships |

What are the differences between a domain, forest, and tree in Active Directory?

* Hierarchical components that define organizational structure and boundaries within a network.

  * Domain: grouping of networks, includes computers, users, etc.
    * Each domain has their own security policies, domain controllers, and database of objects.

  * Forest: collection of domains that share commonality. (schema, configuration, etc.)
    * Top-level structure in Active Directory and represents a complete instance of the directory service.
    * Establishes a boundary for security and administrative purposes.
      * transitive trust relationship, users and resources shared across domains.

  * Tree: or or more domains within a forest. Smaller group from larger group (Forest)

How can objects (e.g. users, devices) within a domain be grouped?

* Security Groups

* Distribution Groups

* Organizational Units

* Built-in Groups

Explain the benefits of Active Directory, as you would to a family member.

* Both more and improved control over networks, directories, NAS, services, etc..
  * Central Management
  * Fire Sharing
  * Integration
  * Enhanced Security

## Videos

[DHCP Overview](https://www.professormesser.com/network-plus/n10-008/n10-008-video/dhcp-overview-n10-008/)

[Configuring DHCP](https://www.professormesser.com/network-plus/n10-008/n10-008-video/configuring-dhcp-n10-008/)

### Things I want to know more about
