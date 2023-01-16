# Class 37 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Redux - Combined Reducers

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)

Why create multiple reducers?

* To have more / better control over state and actions for data and user interface.

How would you combine multiple reducers?

* By using combineReducers() to bring in all the reducers and set our defaults values and set actions/dispatching.

How will you manage state as an immutable object? why?

* By returning a new state object.

[Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)

**combineReducers** is a utility function to simplify the most common use case when writing ________ .

* Redux reducers

Explain how **combineReducers** assembles the new state tree.

* **combineReducers()** will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed.

How would you define initial state in an app using **combineReducers**?

* We use createStore() to create an object set with our default values for state(s).

[Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)

Why will you want to split your reducing functions as your app becomes more complex?

* To have control over each different/specific set of state(s) and what actions happen for those different reducers(state(s
)).

The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.

* **combineReducers()**

* **createStore()**

What is a popular convention when naming reducers?

* To name reducers after the state slices that they manage.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-37/)

* My learning goals are to keep working on my understanding of state and improve my ability to control state in my applications.

## Things I want to know more about
