# JATE Text Editor Web Application
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
JATE is a text editor web application that allows users to create notes or code snippets with or without an internet connection. JATE is a progressive web application (PWA), which has the advantage of allowing users, among other features, to install the application on their local device. 

## Table of Contents

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)
- [Questions](#questions)  

## Installation
No installation is required to use the application.  The application has been deployed to Heroku and can be accessed at the following URL: [JATE Heroku Application](https://jate-text-note-taker-10b2e09c48a4.herokuapp.com/)

If a developer would like to access the underlying code utilized to create the application, it can be installed by cloning the repository to the local machine.  Please note, `node.js` is required in order to run this application and will need to be installed before attempting to use the code.  The package dependencies are included within the package.json file and can be installed through a simple `npm i` command once the repository has been successfully cloned on the local computer.  Upon opening the application in your editor, you should see a well-organized client-server folder structure.

## Usage
To start the application and bundle all modules, open the terminal and navigate to the root directory.  The application can be initialized using the `npm run start` command to start the backend and serve the client.  This command will also bundle the files specified within the webpack.config.js file using webpack.  The included plugins within the webpack configuration file will generate HTML, service worker, and manifest files. The application can be accessed locally through `http://localhost:5000`.

Upon opening the text editor, IndexedDB immediately creates a database storage within the browser.  This feature allows users to enter notes into the application that will persist across sessions.  Notes are saved when a user clicks outside of the active window.  Additionally, closing and re-openeing the application at a later date will retrieve the notes previously entered.  IndexedDB is used to both write and read the information from the local database store.

The JATE application can also be installed locally by clicking on the Install button at the top of the page.  This allows end users to download the web application as an icon on their desktop for quick access.  Upon loading the web application, a service worker is registered using workbox, which provides offline capabilities that can be used in conjunction with the downloaded application.

## License

This application is covered under the license linked below.  For further information regarding the license and its terms, please consult the official licensing documentation using the provided link.

[License: MIT](https://opensource.org/licenses/MIT)

## Questions

If you have any questions, please feel free to contact me using the information provided below:  
  
GitHub: [chilejay7](https://github.com/chilejay7?tab=repositories)  
Email: codyburk7@gmail.com
