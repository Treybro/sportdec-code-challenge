# sportdec-code-challenge
Written by Michael Treyvaud
michael.treyvaud@gmail.com

### Assumptions
 - Technologies are decided by myself
 - To deliver a mobile responsive web application
 - The provided JSON file is used as the primary data source for match information
 - Other match details conform to the same JSON file format
 - Design an application that acts as a "single page" app
 - Performance is tailored to mobile users

### Technologies Used
 - [node.js](https://nodejs.org/en/) to build an event driven, non-blocking I/O RESTful backend
 - [Express](http://expressjs.com/) to serve the node.js web application, configure routing and to provide framework wrappers
 - [Angular.js](https://angularjs.org/) to build an MVC front end, modify html components and communicate with RESTful services
 - [Bootstrap](http://getbootstrap.com/) to provide front-end layout templates and mobile responsive features
 - [Grunt](http://gruntjs.com/) to automate tasks during development
    - concat, cssmin, sass, uglify, watch
 - [Mocha](https://mochajs.org/) to provide unit testing for node-based web application
 - [Chai](http://chaijs.com/) to provide readable assertion language for the Mocha testing framework
 - [Passport](http://passportjs.org/) to provide authentication mechanism for the node application
 - CSS, HTML, SASS, Jade for front end styling and templating

# Getting Started
To run the application simply run the following npm command within the root directory
```sh
$ npm install
```
This will download all the required dependencies that are required to run the web application.
Once all the dependencies have been resolved, you can start the application by running the following command
```sh
$ npm start
```
Tests can be run with the following command
```sh
$ npm test
```