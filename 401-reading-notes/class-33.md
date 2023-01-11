# Class 33 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## **<Login />** and **<Auth />**

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[What is Role Based Access Control (RBAC)?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)

What is Role Based Access Control (RBAC)?

* Role-based access control (RBAC) restricts network access based on a person's role within an organization

Share some an example of RBAC including all possible CRUD operations and correlating roles.

* Management role scope – it limits what objects the role group is allowed to manage.

* Management role group – you can add and remove members.

* Management role – these are the types of tasks that can be performed by a specific role group.

* Management role assignment – this links a role to a role group.

*Primary – the primary contact for a specific account or role.

* Billing – access for one end-user to the billing account.

* Technical – assigned to users that perform technical tasks.

* Administrative – access for users that perform administrative tasks.

What are the Benefits of RBAC?

* [Reducing administrative work and IT support](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more#:~:text=Reducing%20administrative%20work,pre%2Ddefined%20roles.)

* [Maximizing operational efficiency](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more#:~:text=Maximizing%20operational%20efficiency,efficiently%20and%20autonomously.)

* [Improving compliance](Improving compliance. All organizations are subject to federal, state and local regulations. With an RBAC system in place, companies can more easily meet statutory and regulatory requirements for privacy and confidentiality as IT departments and executives have the ability to manage how data is being accessed and used. This is especially significant for health care and financial institutions, which manage lots of sensitive data such as PHI and PCI data.)

Compare and Contrast the following two Libraries and the following questions. Yes, they are similarly named.

[react-cookie library](https://www.npmjs.com/package/react-cookie)

[react-cookies component](https://www.npmjs.com/package/react-cookies)

Describe some **react-cookie** features.

* universal-cookie - Universal cookies for JavaScript

* universal-cookie-express - Hook cookies get/set on Express for server-rendering

* **get(name, [options])**
  Get a cookie value

  name (string): cookie name
  options (object):
  doNotParse (boolean): do not convert the cookie into an object no matter what

* **getAll([options])**
  Get all cookies

  options (object):
    doNotParse (boolean): do not convert the cookie into an object no matter what

* **set(name, value, [options])**
Set a cookie value

Describe some **react-cookies** features.

* **.loadAll()**
  Load all available cookies.
  Returns an object containing all cookies.

* **.select([regex])**
Find all the cookies with a name that match the regex.
Returns an object with the cookie name as the key.

Which library would you prefer would you prefer? Why?

* react-cookie had good documentation and integration. I think I'll try that first.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-33/)

* Review and brushing up on routers, local storage and cookies understanding and knowledge.

## Things I want to know more about
