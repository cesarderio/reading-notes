# Class 3 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Express REST API

-Edit this----These lessons and topics related to Express API will help us have a better understanding of what Node is, how it works, and how to use it to create our applications alongside the other programs we work with.----

## Readings

[Review: ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Classes are a template for creating ____.

* Objects [They encapsulate data with code to work on that data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#:~:text=They%20encapsulate%20data%20with%20code%20to%20work%20on%20that%20data.)

Can a class declaration be hoisted?

* It can be hoisted, but the values will not be initialized yet and will throw a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)

How would you describe a constructor and contextual “this” to a non-technical friend?

* A constructor sets up the basic definitions/ building blocks of an object (i.e. a car has four wheels, engine, windows).

[Using Express Routing](https://expressjs.com/en/guide/routing.html)

Within Express, what does routing refer to?

* How the application's endpoints respond to requests.

What is the difference between a route path and a route method?

* The **route method** is the how to get to a "location", the **route path** is the directions to the "location"

When is it appropriate to add **next** as a parameter to a route handler and what must you do if **next** has been passed to your middleware as a parameter?

* When want to go to the next middleware/ pass variables to the next middleware in the stack. It requires a value to send to the next middleware.

[Express Routing](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)

What is an Express Router?

* A "mini-Express" application, it has routing APIs (.use, .get, .param, and route).

By what means do we initialize **express.Router()** in an express server?

* Create router module and bring into server.js/index.js
* express.Router( [options] )

What do we use route middleware for?

* To be able to reuse/use request, response, next and run through each step(middleware program) in the stack.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-03/)

* I am reviewing prior material and rereading the current material to try to understand it better.

## Things I want to know more about
