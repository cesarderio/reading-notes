# Class 32 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Context API - Behaviors

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[Hooks and Context example](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

With regard to the React Context API, what does a “provider” do?

- The provider provides a source for all the data that we want available in our application.

With regard to the React Context API, how would we implement a “consumer” role?

- We can import our data from the provider and use **useContext** to set our parameters/alerts.

Specifically with Context, how are we “wrapping” components to achieve our goals?

- We are nesting our functions inside of each "setting"/"parameter" we want in our application.

[Awesome React Context links](https://github.com/diegohaz/awesome-react-context)

Consume content from (at least) two more of the Awesome React Context links. After some familiarity with React Context, once again share your takeaways from each:

Takeaway 1: [React's new context API: toggle between local and global state](https://www.freecodecamp.org/news/reacts-new-context-api-how-to-toggle-between-local-and-global-state-c6ace81443d0) by [Deigo Haz](https://twitter.com/diegohaz)

- React Context API has three main parts
  - **Context** - the data, state, etc.
  - **Provider** - has the data/state to provide/pass to children
  - **Consumer** - children that want access to the data/state

Takeaway 2: [compare-react-state-management](https://github.com/robertgonzales/compare-react-state-management) by [Robert Gonzales](https://github.com/robertgonzales)

- Great idea to compare and contrast implementation of these different ways to create the same application.
- Although each library has its own syntax, they are all very similar.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-32/)

- Work on my understanding of **Context API** and how to implement it along with **useContext()** hook

## Things I want to know more about
