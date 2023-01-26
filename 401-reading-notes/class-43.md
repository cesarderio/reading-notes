# Class 43 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Open-Source Software Contribution

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[First Timers Only](https://www.firsttimersonly.com/)

[GitHub’s Guide to Open Source](https://www.github.com/open-source)

[What Motivates a Developer to Contribute to Open-Source Software?](https://clearcode.cc/blog/why-developers-contribute-open-source-software/)

Review: [List of Beginner-Friendly Projects](https://github.com/search?q=label%3Agood-first-issue+archived%3Afalse) (select your language of choice, also search for label:first-timers-only)

Review: [Call for Code: Open Source for Good](https://callforcode.org/) (follow the “Get started” button)

## Reading: Gatsby, next.js, and other JS Frameworks

### Gatsby and next.js Resources

[Learn Next.js](https://nextjs.org/learn/basics/getting-started)

- A **page** is a React Component exported from a file in the **pages** directory.
  Pages are associated with a route based on their file name. For example, in development:

  pages/index.js is associated with the / route.
  pages/about.js is associated with the /about route.

- Pages can be linked by importing **Link** from 'page/link', then reference path inside of anchor:

  import Link from 'page/link'

  \<h1 className='splashPage'>
  Contact Us \<Link href='/page/link'>Here\</Link>
  \</h1>

[Next.js Docs](https://nextjs.org/docs)

[Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/)
With Gatsby plugins, you can quickly add new functionality without needing to build from scratch. Gatsby’s plugin ecosystem has thousands of prebuilt packages to choose from.

A **plugin** is a separate npm package that you install to add extra features to your site. Some plugins provide pre-built components, others add analytics, others let you pull data into your site. Some plugins are built by Gatsby employees, while other plugins are built and maintained by community members.

[Gatsby Plugin Library](https://www.gatsbyjs.com/plugins)

[How to add a plugin to your site:](https://www.gatsbyjs.com/docs/tutorial/part-3/#:~:text=site%2C%20as%20needed.-,Key,-Gatsby%20Concept%3A%20Adding)

- **Install the plugin** using npm.

- **Configure the plugin** in your site’s _gatsby-config.js_ file.

- **Use the plugin features** in your site, as needed.

[Gatsby.js Docs](https://www.gatsbyjs.org/docs/)

## Bookmark and Review

[AngularJS](https://angularjs.org/)

[Angular](https://angular.io/)

[vue](https://vuejs.org/)

[backbone](http://backbonejs.org/)

[ember](https://www.emberjs.com/)

[knockout](https://knockoutjs.com/)

[Laravel (php)](https://laravel.com/)

Reflection
What are your learning goals after reading and reviewing the class [README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-43/)
