# Class 18 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## AWS: API, Dynamo and Lambda

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[AWS API Gateway Overview](https://www.serverless.com/amazon-api-gateway)

What is Amazon API Gateway?

* [Amazon API Gateway](https://web.archive.org/web/20210827050250/https://aws.amazon.com/api-gateway/) is a managed service that allows developers to define the HTTP endpoints of a [REST API](https://web.archive.org/web/20210827050250/https://en.wikipedia.org/wiki/Representational_state_transfer) or a [WebSocket API](https://web.archive.org/web/20210827050250/https://en.wikipedia.org/wiki/WebSocket) and connect those endpoints with the corresponding backend business logic. It also handles authentication, access control, monitoring, and tracing of API requests.

Why is Amazon API Gateway an important part of the Serverless ecosystem?

* Within the Serverless ecosystem, API Gateway is the piece that ties together Serverless functions and API definitions. Being able to trigger the execution of a Serverless function directly in response to an HTTP request is the key reason why API Gateway is so valuable in Serverless setups: it enables a truly serverless architecture for web applications. When using API Gateway together with other AWS services, it’s possible to build a fully functional customer-facing web application without maintaining a single server yourself. This brings the advantages of the serverless model—scalability, low maintenance, and low cost due to low overhead—to mainstream web applications.

How does API Gateway integrate with other AWS services?

* it supports direct integrations

[AWS API Gateway](https://aws.amazon.com/api-gateway/)

What are the some benefits of using Amazon API Gateway?

* its integration and usability alongside of or to improve other Amazon Web Services.

What two API types might you choose from?

* **RESTful APIs**

* **WEBSOCKET APIs**

[AWS DynamoDB Guide](https://www.dynamodbguide.com/what-is-dynamo-db/)

What is DynamoDB?

* A hosted NoSQL database service from Amazon Web Services.

Under what circumstances would you recommend DynamoDB over MongoDB?

* When using other AWSs that would already integrate and work well with your database.

[AWS DynamoDB](https://aws.amazon.com/dynamodb/)

Explain to a non-technical friend how DynamoDB works.

* It stores a key(name) and value(definition of word/name/key). A value describes/is connected to the key, the key describes/is connected to the value

[Dynamoose](https://dynamoosejs.com/getting_started/Introduction)

What is Dynamoose?

* Dynamoose is a modeling tool for Amazon's DynamoDB. Dynamoose is heavily inspired by Mongoose, which means if you are coming from Mongoose the syntax will be very familiar.

What are some key features of Dynamoose?

* Type safety

* High level API

* Easy to use syntax

* DynamoDB Single Table Design Support

* Ability to transform data before saving or retrieving items

* Strict data modeling (validation, required attributes, and more)

* Support for DynamoDB Transactions

* Powerful Conditional/Filtering Support

* Callback & Promise support

* AWS Multi-region support

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-18/)

* I want to get more practice with all of these different AWServices and how they work together and alongside eachother.

## Things I want to know more about
