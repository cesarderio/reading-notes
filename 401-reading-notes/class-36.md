# Class 36 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Application State with Redux

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux)

What is the first principle of Redux?

* Whether simple or complex, you represent the whole state of your application as a single javascript object. All changes to state in redux are explicit. Known as State or State Tree.

what is a store and what do we use our reducers for within that store?

* A store binds together the 3 principles of redux
  * holds current application state object
  * let's you dispatch actions
  * specifies how state is updated with actions

Name three Redux store methods given to us by createStore and describe their use.

* getState() - retrieves current state of the redux store.

* dispatch - let's you dispatch actions to change state of application.

* subscribe() - let's you register a callback that redux store will call any time an action has been dispatched. UI can be updated to reflect current application state.

Explain to a non-technical recruiter what **combineReducers()** does and why it is useful.

* it combines reducers to

## Bookmark and Review

[worlds easiest guide to redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)

[testing reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)

[Redux Docs](https://redux.js.org/)

## Additional Questions

Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-8), What do you look forward to learning?

* I'm looking forward to learning more about dispatching actions to control state with Redux.

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-36/)

* My learning goals are to get more practice with controlling state and accompanying components.

## Things I want to know more about
