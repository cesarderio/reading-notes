# Class 34 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## API Integration

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[Review API Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)

Explain the difference between a query string parameter and a path parameter.

* A path parameter has the route to the location where data is stored, a query string parameter are the filter options to search for specic data.

What would our API URL with a path id parameter be given the following information:

  Domain: **<http://our-site.com>**

* <http://our-site.com/api>

  **v3**

* <http://our-site.com/api/v3>

  model name: **stuff**

* <http://our-site.com/api/v3/stuff>

  id: **things**

* <http://our-site.com/api/v3/stuff/things>

We have created a dynamic API with an “interface”. Describe how that interface works to a non-technical friend.

* The interface takes in the users parameters and returns results based on those parameters.

[Review Auth Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/)

  Describe how you would use middleware to implement basic and bearer auth.

* The middleware checks the user input to see if it matches what "is allowed' to be able to show the data the user is requesting.

  Describe the handshake necessary to implement OAuth.

* The user gives OAuth the user credentials, OAuth checks it against the proper cerdentials to see if they are who they say they are. If the Aunthentication passes, then it checks to see if they are authorized for the requested data, if they are authorized, the data is available. If not, the data is not retrieved.

  Describe how Role Based Access Control works to a non-technical friend.

* A Driver is allowed/trained to drive the vehicle, a Navigator is allowed/trained to navigate. Different jobs(roles) have different access and job requrirements and responsibilities.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-34/)

* My goal is to get a better understanding of how Authorization and token validation works and how to build it out.

## Things I want to know more about
