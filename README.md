# JATE Text Editor Web Application
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
JATE is a text editor web application that allows you to create notes or code snippets with or without an internet connection. The application ensures reliable retrieval of your content for later use using indexedDB.

## Table of Contents

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)
- [Questions](#questions)  

## Installation
No installation is required to use the application.  The application has been deployed to Heroku and can be accessed at the following URL: [JATE Heroku Application](https://jate-text-note-taker-10b2e09c48a4.herokuapp.com/)

If a developer would like to access the underlying code utilized to create the application, it can be installed by cloning the repository to the local machine.  Please note, `node.js` is required in order to run this application and will need to be installed before attempting to use the code.  The package dependencies, are included within the package.json file and can be installed through a simple `npm i` command once the repository has been successfully cloned on the local computer.  Upon opening the application in your editor, you should see a well-organized client-server folder structure.

## Usage
Running the Application
Open your terminal and navigate to the root directory.
Run npm run start to start up the backend and serve the client.
Bundled JavaScript Files
When you run the text editor application, you'll find that your JavaScript files have been bundled using webpack.

Webpack Plugins
Running the webpack plugins will generate an HTML file, service worker, and a manifest file for your application.

Next-Gen JavaScript
You can use next-gen JavaScript in your application, and the text editor will function in the browser without errors.

IndexedDB Storage
Upon opening the text editor, IndexedDB immediately creates a database storage.

Saving Content
When you enter content and click off the DOM window, the content in the text editor is saved with IndexedDB.

Retrieving Content
After reopening the text editor, the content is retrieved from IndexedDB, ensuring seamless retrieval of your notes and snippets.

Install Button
Clicking on the Install button allows you to download the web application as an icon on your desktop.

Registered Service Worker
Upon loading the web application, a service worker is registered using workbox, providing offline capabilities.

Pre-Cached Static Assets
Registering a service worker ensures that static assets are pre-cached upon loading, enhancing the performance of subsequent pages and static assets.

Deployment to Heroku
When deploying to Heroku, ensure proper build scripts for a webpack application to guarantee a smooth deployment process.

Feel free to use this README as a starting point and customize it according to your specific project details.
