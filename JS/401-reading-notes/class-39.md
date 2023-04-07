# Class 39 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Redux - Additional Topics

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[Redux Toolkit (RTK)](https://redux-toolkit.js.org/introduction/getting-started)

What concerns are addressed by Redux Toolkit?

* Creating reducers and creating a store with actions, functions, thunk, etc..

What does **configureStore()** do?

* It sets up a configured Redux store with one function call, it combines reducers, adding thunk middlewaere and setting up DevTools.

How would I use **createSlice()**?

* You use create slice to create a slice for that specific reducer it resides in.

[MobX](https://mobx.js.org/getting-started.html)

What is Mobx?

* a scalable state management solution.

How does MobX make it “impossible” to produce an inconsistent state?

* *Make sure that everything that can be derived from the application state, will be derived. Automatically.*

How would we build a reactive user interface?

* We make our store observable so that MobX can track all changes to the state.
  * **makeAutoObservable**
  * **makeAutoObservable(this)**

## Tutorial

[Tutorial](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)

What take-away(s) did this tutorial provide?

* There is so much more than just the surface level getting started page with Redux. Having control over seeing and acting on changes to state can be very simple or involved regarless of how large the application is.

## Bookmark and Review

[Redux Toolkit (RTK)](https://redux-toolkit.js.org/)

[HookState](https://hookstate.js.org/)

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-39/)

* I am interested in trying out and seeing how MobX differs from Redux.

## Things I want to know more about
