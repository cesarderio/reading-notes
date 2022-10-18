# Class 2 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

### [React Lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)

---Begin with a statement addressing why this topic matters as it relates to what you are studying in this module.

Based off the diagram, what happens first, the 'render' or the 'componentDidMount'?

* 'render' runs first, once it is completed 'componentDidMount' runs.

What is the very first thing to happen in the lifecycle of React?

* Instance of component created and inserted into the DOM / Constructor.

Put the following things in the order that they happen:

* **constructor**
* **render**
* **componentDidMount**
* **React Updates**
* **componentWillUnmount**

What does **componentDidMount** do?

* It is a method that runs once the component is mounted. Used to load using network request or once the DOM is initialized.

### [React State Vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI&ab_channel=WebDevSimplified)

What types of things can you pass in the props?

* They are arguments to functions.

What is the big difference between props and state?

* State is handled inside the component and the props are passed into, handled outside the component.

When do we re-render our application?

* Updating based off of user input. When the setState function is invoked.

What are some examples of things that we could store in state?

* A counter, saving user information, updating information.

## Things I want to know more about
