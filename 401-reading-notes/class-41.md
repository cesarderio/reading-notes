# Class 41 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## React Native

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[getting started with react native](https://facebook.github.io/react-native/docs/getting-started)

Name three Core Components of React Native and describe what they do.

| **REACT NATIVE UI COMPONENT** | **ANDROID VIEW** | **IOS VIEW** | **WEB ANALOG** | **DESCRIPTION** |
|---|---|---|---|---|
| \<View> | \<ViewGroup> | \<UIView> | A non-scrolling \<div> | A container that supports layout with flexbox, style, some touch handling, and accessibility controls. |
| \<Text> | \<TextView> | \<UITextView> | \<p> | Displays, styles, and nests strings of text and even handles touch events |
| \<Image> | \<ImageView> | \<UIImageView> | \<img> | Displays different typers of images |
| \<ScrollView> | \<ScrollView> | \<UIScrollView> | \<div> | A generic scrolling container that can contain multiple components and views |
| \<TextInput> | \<EditText> | \<UITextField> | \<input type="text"> | Allows the user to enter text |

What problem does React Native solve (why call it native)?

* It uses React components to allow the use of native UI controls and full access to the native platform you are wanting to work in/ build with.

What are the building blocks of a React Native app? How does that compare to a React app?

* **View** , **Text**, **Image**, **ScrollVie**, **TextInput**
* There are different names for similar components and what they do or are part of in the UI.

[expo](https://expo.io/)

What solution does expo provide?

* Expo is an open source framework for React native apps, you can create, build and run apps natively on Android, iOS and web.

Expo tries to manage as much of the complexity of building apps as possible, which is why we call it the ____ workflow.

* **managed**

What is the difference between React Native and Expo?

* Expo can create, scale, build and run react native apps without the need to use the native environment to build in.

[expo snack](https://snack.expo.io/)

Checkout this tool. What does snack allow you to do?

* It allows you to run expo in the browser.

[ejecting](https://docs.expo.io/versions/latest/expokit/eject)

What does “eject” mean within the context of Expo?

* The Expo Eject Step is necessary to eject your app to install any missing native dependencies

When should you not eject?

* If you want to keep working in javascript and not in the native code/environment.

Why might you choose to eject?

* The expo project needs a native module Expo does not support.

## Tutorial

[react native basics](https://facebook.github.io/react-native/docs/tutorial)

## Bookmark and Review

[react native](https://facebook.github.io/react-native/)

## Additional Questions

Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-9), What do you look forward to learning?

* I am looking forward to learning about browser history and finding anagrams.

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-41/)

* I am excited to learn how to use React native and expo to build out mobile apps for android and iOS.

## Things I want to know more about
