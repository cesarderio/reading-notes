# Class 3 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

---Begin with a statement addressing why this topic matters as it relates to what you are studying in this module.

### [React Docs - lists and keys](https://reactjs.org/docs/lists-and-keys.html)

What does .map() return?

* a new array from function called for every array element.

If I want to loop through an array and display each value in JSX, how do I do that in React?

* Use JavaScript map() function to loop through array and create a new array.

Each list item needs a unique ____.

* key/id

What is the purpose of a key?

* to identify elements, locations, and changes

[The Spread Operator](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

What is the spread operator?

* expands an array/object into separate arguments.

List 4 things that the spread operator can do.

* Adding items to arrays

* Combining arrays

* Copying arrays

* Using array as arguments

Give an example of using the spread operator to combine two arrays.

    const num1 = [1, 2, 3]
    const num2 = [4, 5, 6]
    const num3 = [...num1,...num2]
    console.log(...num3)

Give an example of using the spread operator to add a new item to an array.

    const num1 = [1, 2, 3]
    const num2 = [4, 5, 6]
    const num3 = [1, 2, 3, ...num2]
    console.log(...num3)

Give an example of using the spread operator to combine two objects into one.

    const obj1 = [1, 2, 3]
    const obj2 = [4, 5, 6]
    const obj3 = [...num1, ...num2, 7, 8, 9]
    console.log(...obj3)

## Videos

### [How to Pass Functions Between Components](https://www.youtube.com/watch?v=c05OL7XbwXU&ab_channel=SteveGriffith-Prof3ssorSt3v3)

In the video, what is the first step that the developer does to pass functions between components?

*

In your own words, what does the **increment** function do?

*

How can you pass a method from a parent component into a child component?

*

How does the child component invoke a method that was passed to it from a parent component?

*

### Bookmark and Review

[React Tutorial through ‘Declaring a Winner’](https://reactjs.org/tutorial/tutorial.html)
[React Docs - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

## Things I want to know more about
