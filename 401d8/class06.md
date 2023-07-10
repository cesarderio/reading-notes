# Class 06 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Data file encryption

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[Applying The CIA Triad To Your Enterprise File Transfer](https://www.jscape.com/blog/implementing-the-cia-triad-when-transferring-files-through-the-internet)

[What Are MD5, SHA-1, and SHA-256 Hashes, and How Do I Check Them?](https://www.howtogeek.com/67241/htg-explains-what-are-md5-sha-1-hashes-and-how-do-i-check-them/)

You have been made responsible for the company’s file server. How would you preserve the three elements of the CIA triad?

* Confidentiality:
  * Implement access controls for authorized personnel.
  * Encrypt data stored on the file server.

* Integrity:
  * Regularly backup data and perform restoration tests.
  * Validate file integrity using checksums or digital signatures.

* Availability:
  * Establish redundancy and failover measures.
  * Monitor and maintain server performance and connectivity.

Explain how hashing verifies data integrity using non-technical terms.

* Hashing creates a unique "fingerprint" that can be used in verifying if data has been modified in anyway.

How is hashing and encryption different?

* Hashing creates a unique "fingerprint" of data to ensure its integrity. It cannot be reversed and is used for verification purposes.

* Encryption transforms data into an unreadable format to protect its confidentiality. It can be reversed using a key to retrieve the original data.

<br>

### Things I want to know more about
