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
A default user has already been setup on the server so you can login instantly
```sh
Username : testuser
Password : testpassword
```
Or you can register your own account.
# RESTful API
A RESTful API was created in node.js to allow communication with the server. The primary goal of this api is to enable the following features.
 - Interact with the provided json match data file
    - The API "spoofs" communicating to a mongo/mysql database. Currently the API, when called, reads information from the provided sampleMatchData.json file and returns the results
 - Allow user authentication
    - The API exposes authentication routes to allow users to register an account and login to the web application

You can find all the route/controller javascript files related to the API within the following directory
```sh
-app
--controllers
---ApiController.js
---AuthenticationController.js
--routes
---api.js
---authentication.js
---index.js
```

The data provided by the API can be found within the following directory
```sh
-app
--data
---sampleMatchData.js
---sampleMatchesData.js
```
# Front End
The majority of the front-end was developed using angular, css, html
### Angular
The web-application front end has been divided into many components and services which can be re-used throughout the project and can be found within the following directories
```sh
-public
--javascripts
---angular
----components
----services
```
The most important components are
 - latestmatch.component.js
    - this is responsible for retrieving information about a specific match from the API
 - login.component.js
    - this is responsible for the user login flow between the front-end form and the API
 - navbar.component.js
    - this is responsible for the login/logout options for the navigation bar
 - signup.component.js 
    - this handles the user signup process by communicating with the API

Currently there are two services created in angular. These are responsible for communicating directly with the API. Most components utilize this service to perform their required tasks.
 - authentication.service.js
    - This handles all authentication http calls
 - resources.service.js
    -  This handles all data http calls

### SASS,CSS,HTML
Sass style sheets can be found within the following directory
```sh
-app
--style
---sass
```
This directory contains the _variables.scss file which is imported into all other sass files for use. A grunt-watch task has been configured to convert sass to css files whenever a change is made. These files are converted separately and import the _variables.scss file. The grunt-watch task is also configured to concatenate the resulting .css files into one .css file, which is finally minified for production use. This can be found within the following directory
```sh
-public
--stylesheets
---appstyles.min.css
```
As angular can require templates for use in controllers, each compontent has it's own unique HTML template. These templates can be found within the following directory.
```sh
-public
--templates
---components
```

### GRUNT
**SASS is required to successfully run grunt tasks.**
Grunt was chosen as a task runner for this project. While developing this project, it is advised to run the following command within the root directory of this project.
```sh
$ grunt watch
```
This task has been configured primarly to watch for changes made to .scss files within the project. Once a change is made, the following tasks are also run.
 - SASS, converts scss files to separate css files
 - CONCAT, combines all css files into one css file
 - CSMIN, minifies all css files and re-locates files for production.
For further information on Grunt tasks, you can checkout the gruntfile.js within the root directory of the application.