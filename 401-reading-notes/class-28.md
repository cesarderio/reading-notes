# Class 28 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Component Lifecycle / **useEffect** Hook

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[effects hook](https://reactjs.org/docs/hooks-effect.html)

What purpose does **useEffect** serve in a function component compared to its counterpart(s) in class components?

* It tells React what to do after render, it also gives access to count state without an API to read it.

When using the useEffect Hook:

  What does **useEffect** do?

* It tells React that the component needs to do something after render. React will remember the function you passed and call it after the DOM updates.

  Why is **useEffect** called inside a component?

* This gives us access to the count state variable, including any props from the effect without needing a special API to read it.

Explain the importance of properly implementing effects with Cleanup

* Using effects with cleanup will cleanup our code and be self contained and more efficient at runtime.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-28/)

* Going back and reviewing and finding more resources on useEffect, Hooks and get a better understanding of them.

## Things I want to know more about
