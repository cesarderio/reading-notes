# Class 6 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Authentication

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

Explain to a non-technical friend how you would safely hash and store a password.

* We create a function that splits the plain text into sections(hashes) and use encryption to create a new hash of the password to store in memory.

What is Bcrypt?

* **Bcrypt** is an algorithm that uses **Key Stretching** to generate hash values in different time spans, this helps defend against brute force attacks.

Why might you use something like Bcrypt?

* It creates an extra layer of protection and better defense against brute force attacks.

[Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

What is Basic Authentication?

* A method for an HTTP user agent/web browser to provide a username and password when making a request.

What properties are necessary in the header of a Basic Auth request?

* Authorization: Basic <credentials> ( username : password).

How are **username:password** in Basic Auth encoded?

* They are encoded with [Base64](https://en.wikipedia.org/wiki/Base64).

[OWASP auth cheatsheet](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)

Define the authentication process to a non-technical recruiter.

* A web browser submits the credentials (username and password) along with the request for site/resource it is trying to get access to.

How should your error messaging respond (both HTTP and HTML)? Why?

* The errors should be generic and not give insight or direction in hacking credentials.

Bookmark this link also and consider OWASP fundamentals any time you interact with authentication. Applications developed with security in mind from inception have fewer vulnerabilities throughout their lifecycle.

## Bookmark and Review

[bcrypt docs](https://www.npmjs.com/package/bcrypt)

## Additional Questions

Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-2), What do you look forward to learning?

* I am looking forward to learning more about and getting better at creating tests.

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-06/)

* I want to get more comfortable and have a better understanding of alogorithms and logarithms and how hashing, security, databases and account authorization all works together.

## Things I want to know more about
