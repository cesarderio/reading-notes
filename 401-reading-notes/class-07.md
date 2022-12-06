# Class 7 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Bearer Authorization

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[Intro to JWT](https://jwt.io/introduction/)

What is a JSON Web Token (JWT)?

* A JSON Web Token (JWT) is an open standard, that definesa self-contained and compact way of passing information securely as a JSON object between parties.

When should we use JSON Web Tokens?

* They should be used for authorization and secure information exchange.

Claims are expected in which structural component of a JWT?

* Claims are in the Payload component of a JWT.

[Are JWTs Secure?](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

If I get a JWT and I can decode the payload, how can we call that secure?

* Without the **secret** the signature will not match.

If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.

* Both parties both know the **secret**.

Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.

* The JWT(content) and secret; Header/Payload/Signature are encrypted into *HASH*, with both parties knowing the secret, and matching the signature they can securely send and recieve data.

## Videos

[JWTs Explained](https://www.youtube.com/watch?v=926mknSW9Lo)

Why use JWT?

* We use it to be able to send and receive secure information accross urls. It is safe, secure, self-contained, compact and fast.

JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.

* It takes up less space(memory), it can be sent via url, POST request, HTTP Header and contains content and signature.

What are the three components (the structure) of a JWT signature?

        **aaaaaa.bbbbbb.cccccc**

#### **HEADER**

* alg = Algorithm **HMAC / SHA256 / RSA**
* typ = type of JWT token

        {
          "alg": "HS256",
          "TYP": "JWT"
        }

#### **PAYLOAD**

* contains claims
* Payload is then **Base64Url** encoded to form second part.

        {
          "sub": "1234567890",
          "name": "John Doe",
          "admin": true
        }

#### **SIGNATURE**

* Combine base64 Header and base64 Payload with secret.

          HMACSHA256(
            base64UrlEncode(header) + "." +
            base65UrkEncode(payload),
            secret)

## Bookmark and Review

[npm jsonwebtoken docs](<https://www.npmjs.com/package/jsonwebtoken>)

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-07/)

* I am working on understanding these topics.

## Things I want to know more about
