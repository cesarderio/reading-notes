# Class 09 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Public Key Infrastructure (PKI)

Below you will find reading materials and additional resources that support today’s topic and the upcoming lecture.

## Reading

[What is Public Key Infrastructure (PKI)](https://www.ssh.com/pki/)

Name the three main components which make up PKI.

* Certificate Authority (CA):
  * Issues and manages digital certificates.
  * Verifies the authenticity of entities.
  * Signs certificates with a private key.

* Registration Authority (RA):
  * Intermediary between entities and CA.
  * Validates entity information.
  * Forwards certificate requests to the CA.

* Certificate Repository:
  * Stores and manages issued certificates.
  * Allows access and retrieval of certificates.
  * Includes mechanisms to check certificate validity.

How would you explain, to a non-technical friend, the role PKI plays in protecting traffic between your browser and a web server.

* PKI helps protect the communication between your browser and a website by using encryption and digital certificates.

<!-- Encryption: PKI scrambles your information into a secret code that only the website can understand, keeping it safe from eavesdroppers. -->

<!-- Digital Certificates: PKI verifies that the website is trustworthy by checking its digital ID, ensuring it's not a fake website trying to steal your data. -->

<!-- Public and Private Keys: PKI uses two keys to keep your data secure. Your browser uses the website's public key to encrypt the information, and only the website's private key can decrypt it. -->

<!-- Trusted Authorities: PKI involves trusted organizations that issue and validate the digital certificates, giving you confidence that the website is legitimate. -->

What is the main weakness of the PKI architecture?

* Any certificate authority can sign a certificate for any person or computer. This means anyone or any country or organization can sign a certificate for any country, organization or purpose.

## Videos

[Prof Messer Security+ PKI Components](https://www.youtube.com/watch?v=3yuad7_bszE)

<br>

### Things I want to know more about
