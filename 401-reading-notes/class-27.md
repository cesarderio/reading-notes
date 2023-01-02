# Class 27 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## **useState()** Hook

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html#motivation)

What was the motivation for introducing Hooks?

* To create a better primitive way for sharing stateful logic.

What changes are important regarding implementing Hooks versus Component Classes?

* creating more precise hooks and functions to properly combine, reuse and refactor how each different part/ state change will be utilized and / or affected based on relation.

Hooks allow you to reuse stateful logic without changing __________.

* The component hierarchy

[hooks api](https://reactjs.org/docs/hooks-overview.html)

Name two rules imposed by React Hook usage.

* Only call Hooks **at the top level**. Do not call inside of loops, conditions, or nested functions.

* Only call Hooks **from React function components. Do not call Hooks from regualr JavaScript functions.

How would you identify a custom Hook and why might you create one?

* If the function name starts with "use" and it calls other Hooks. We might create one to be able to reuse some stateful logic between components.

[the state hook](https://reactjs.org/docs/hooks-state.html)

What is a Hook?

* A special function that lets you "**hook into**" React features.

When would I use the **useState** Hook?

* When you want to add a state to the function component.

If you were to add React state to a function component by declaring a state variable:

  What does calling **useState** do?

* It declares a "**state variable**". 

  What do we pass to **useState** as an argument?

* We pass 0, the initial state.

  What does **useState** return?

* The current state and a function that updates the state.

## Bookmark and Review

[hooks api reference](https://reactjs.org/docs/hooks-reference.html)

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-06/)

* Reviewing and practing more with props and state to refresh my memory and get a better working knowledge along with the new material.

## Things I want to know more about
