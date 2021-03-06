# Personal Trainer Gym Appointments Tool

For this project, I am building a React application using a TDD approach. I will build structure and form, compose interfaces, and animate elements, integrating **React Router**, **Redux**, and **GraphQL**. I will document my decisions and learning outcomes throughout my journey.

## Why this project?

- TDD is an effective technique for learning new frameworks and libraries.

- Our tests act as comments to our code, and those comments are verifiable when we run them.

- We communicate our decision-making process for our colleagues.

## Prerequisities

You'll need to have [Node](http://nodejs.org), including NPM, installed on your machine.

Run `npm install` before attempting any of the instructions below.

You may also wish to run `npm upgrade` to ensure your Node installation is up-to-date.

## Running tests

Use the following command to run all tests.

    npm test

You can also run tests in a single test file:

    npm test test/AppointmentsDayView.test.js

## Building and running the application

Build the application using this command:

    npm run build

Then you can open the app by browsing to `dist/index.html`.

## My approach for Technical Setup

The standard template for creating React apps is to use `create-react-app`
However for this project, I'm not going to use it as it will add many extra items which I will not be needing such as favicon.ico, a sample logo, and CSS files.

Here I'm sticking with a key priniciple of TDD which is to not add anything until we're sure it's needed. This approach also enables me to cover the fundamentals without too much abstraction.

React makes heavy use of **JavaScriptSML (JSX)** which I'll need **Babel** to transpile. Babel also transpiles the modern ES6 and ES7 constructs. I have installed the presets and plugins.
