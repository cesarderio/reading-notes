# Class 19 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## AWS: Events

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

What is the difference betweeen SQS and SNS?

* SQS is a Simple Queue Service and SNS is a Simple Notification Service.

What are some use cases for both SNS and SQS?

* SNS sends as soon as it gets something and can send to all at once, i.e. text messages

* SQS can be used for scaling microservices and serverless applications.

[AWS SNS and SQS](https://www.youtube.com/watch?v=mXk0MNjlO7A)

Describe how to use SQS and SNS in a “fanout” pattern.

* SNS can deliver messages to many subscribers (fan out)

Explain how “push notifications” work, using SNS.

* We can create lambdas/functions to send out(push) messsage to many "subscribers"

[SQS and SNS Basics](https://www.youtube.com/watch?v=UesxWuZMZqI)

How might a large scale, distributed application make use of a Queue system like SQS?

* They can create a chat service like discord, message groups, newsletters, etc., (chat with customer service chat messaging on Amazon marketplace.)

## Bookmark and Review

[SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)

[SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-19/)

* Spend more time with each service through AWS we've been introcduced to.

## Things I want to know more about
