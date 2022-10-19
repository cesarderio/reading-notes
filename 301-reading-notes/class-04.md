# Class 4 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

--Start with a statement describing why these topics have to do with what we're learning. Begin with a statement addressing why this topic matters as it relates to what you are studying in this module.

### [React Docs - Forms](https://reactjs.org/docs/forms.html)

What is a ‘Controlled Component’?

* the component that renders a form also controls what happens in the form based on user input. (Input form element value that is controlled by React)

Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

* We are changing the state based on user input, so as the user inputs information, we are setting the state/updating the state.

How do we target what the user is entering if we have an event handler on an input field?

* We use the name attribute and have the handler act based on the value of **event.target.name**.

### [The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

Why would we use a ternary operator?

* It is "shorter" and "cleaner" code than an **if** statement. It can make code easier to read and understand.

Rewrite the following statement using a ternary statement:

    if(x===y){
      console.log(true);
    }

    x === y ? true : false;

## Things I want to know more about
