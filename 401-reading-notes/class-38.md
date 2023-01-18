# Class 38 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Redux - Asynchronous Actions

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[async actions](https://redux.js.org/advanced/asyncactions)

Why use Redux middleware?

* A Redux store doesn't know anything about async logic. It only knows
  how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

* Redux middleware were designed to enable writing logic that has side
  effects.

Consider the Redux Async Data Flow Diagram. Describe the flow in your own words.

* The user sets off the **click event deposit**
* The **event handler** dispatch's the **action**
* The **middleware** catches the action and makes
  an **Api** call.
* Then the **dispatch** is run through the store
  and uses the respective **reducer** to update the **state**.
* The **state** is updated to show the deposit in
  the UI.

How are we accommodating async in our Redux app?

* The thunk middleware allows us to write functions that get
  **getDispatch()** and **getState()** as arguments. The thunk functions can have any async logic we want inside, and that logic can dispatch actions and read the store state as needed.

[thunk middleware](https://github.com/reduxjs/redux-thunk)

Why would you need **redux-thunk** middleware?

* Since the Redux store doesn't know anything about async logic, we can
  use Redux's official version of an async function middleware to take care of any async logic.

Redux Thunk middleware allows you to write action creators that return a ____ instead of an action.

* **function**

Describe how any return value from the inner thunk function will be made available.

* Any return value will be available as the return value of
  **disptach** itself.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-38/)

* My learning goals are to keep improving on my understanding of state,
  adding redux to that knowledge and getting more practice with Redux store and lifecycle hooks.

## Things I want to know more about
