Quotes - Progressive Web App
===================

This application is used to view quotes related to design. This app is a progressive web app scoring 91/100 in Google's Light house score. The app is hosted in https://quotes-pwa.herokuapp.com/

Setup
-----

1)  Clone this repo using the following command

`git clone git@github.com:subramaniashiva/quotes-pwa.git`


2)  Move to the repo that you have just cloned and run the following command

`npm install`

3) To start the app, run

`npm start`
  Navigate to localhost:8081 in your browser to view the app

4) This project is enabled with **ESLint**. Any JS file that you write must be linted using ESLint. To run the linting command type

`npm run lint`

5) This project uses Jest for unit testing. To run tests, type

`npm run test`

6) To build the project for production, run

`npm run build`


Tech Stack
----------
Following is the tech stack:

 - **ES6** - The latest version of JavaScript
 - **SASS** - Using SASS files instead of plain CSS
 - **Webpack** - Module bundler. This also replaces front-end build tools like grunt or gulp
 - **Babel** - Transpile ES6 to ES5. Since the browser support for ES6 is not complete, this tool allows us to write code in ES6 which can be transpiled into ES5.
 - **ESLint** - Used to lint the JS code

Directory Structure
-------------------
 - **dist** - Contains the distributable version of the project. Ideally this folder gets pushed into the Docker or production server
 - **app** - Contains the source code of the app
 - **__test__** - Contains test cases for the app
