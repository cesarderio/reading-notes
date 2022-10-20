# Class 5 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

We are learning how to build better code, apps and interactivity. Working on improving user interface, building efficiency and functionality.

### [React Docs - Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

What is the **single responsibility principle** and how does it apply to components?

* A component should do one thing, smaller subcomponents can help it more functionality is needed.

What does it mean to build a ‘static’ version of your application?

* Working on a version that renders the user interface with no interactivity. Reuse components and pass information using props.

Once you have a static application, what do you need to add?

* Add interactivity starting with identying minimal representation of UI state.

What are the three questions you can ask to determine if something is state?

* *Is it passed in from a parent via props?* If so, it probably isn’t state.

* *Does it remain unchanged over time?* If so, it probably isn’t state.

* *Can you compute it based on any other state or props in your component?* If so, it isn’t state.

How can you identify where state needs to live?

* *Identify every component that renders something based on that state.*

* *Find a common owner component (a single component above all the components that need the state in the hierarchy).*

* *Either the common owner or another component higher up in the hierarchy should own the state.*

* *If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.*

### [Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

What is a “higher-order function”?

* A **function** that runs on other functions by return or as arguments.

Explore the **greaterThan* function as defined in the reading. In your own words, what is line 2 of this function doing?

* It is creating a function that can set state and be reused.

Explain how either **map** or **reduce** operates, with regards to higher-order functions.

* **map** runs a function on every element in an array and returns a new array with those new values. It is a higher-order operation.

## Things I want to know more about
