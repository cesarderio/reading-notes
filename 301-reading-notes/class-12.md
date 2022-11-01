# Class 12 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

[Status Codes Based On REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

In your own words, describe what each group of status code represents:

100’s = Informational codes, tells client information.

200’s = Tells the client that there was success in request/ met validation.

300’s = Redirection codes, tells client information is not at location.

400’s = Client error codes, invalid requests sent to server.

500’s = Server error codes, invalid input/unreachable server.

What is a status code 202?

* Request accepted for processing, but it has not completed.

What is a status code 308?

* Perminent redirect, resource has be moved to URL.

What code would you use if an update didn’t return data to a client?

* 304

What code would you use if a resource used to exist but no longer does?

* 308

What is the ‘Forbidden’ status code?

* 403

Videos
[Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

Why do we need to pull our MongoDB database string out of our server and put it into our .env?

* That is where our database will be stored.

What is middleware?

* Helper software that connects or helps programs connect to/from databases/librairies.

What does **app.use(express.json())** do?

* It lets server accept json files.

What does the **/:id** mean in a route?

* it is the path of the query/ path that we will request/respond.

What is the difference between **PUT** and **PATCH**?

* **PUT** updates entire resource, **PATCH** updates a portion of the data.

How do you make a default value in a schema?

* Use the **default** keyword.

What does a **500** error status code mean?

* It is a generic error, it encountered something that prevented from completing request.

What is the difference between a status **200** and a status **201**?

* **201** has completed request and created a new resource, **200** means things are "ok" and things working as meant.

## Things I want to know more about
