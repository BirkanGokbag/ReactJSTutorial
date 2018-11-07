# Introduction
  React is an extension of the base JavaScript functionality to allow for greater ease in developing user interfaces. This is accomplished using a few key tools.
  The first is defining building blocks known as components which define what the app should render. Next, is passing parameters known as props to these components to adjust what they render and when.
  Third is adjusting a variable known as the state which each component possesses. This allows for a component to store information for later.
  Beyond just these, tools such as JSX (JavaScript XML), forms or the fetch() function also serve a purpose while using react. All of these tools will be explained in greater detail further below.  

  This document will discuss the setup required to use React followed by a walkthrough of
  the tools that are used to design user interfaces. Finally, the instructions will go over how to build and deploy a React app.

  A React demo has been developed to help illustrate these concepts. To view this demonstration go to this link: https://github.com/cse3901-osu-2018au/An-Error-Occured-Tech-Tasks-I-II/tree/master/tutorial
  and download the source code. Alternatively, if you've already downloaded the repository, the tutorial folder should have been included as well. Follow the instructions in the README.md file within the 'tutorial' folder to
  execute the react app. The instructions below will reference this demo in order to better illustrate the concepts discussed.

## Setup

  To setup the React project using create-react-app
  (this is a preferable option), NodeJS version 5.2 or higher.
  NodeJS is needed in order to use NPM, a package manager that is used to
  create and execute the React project via create-react-app.

  If using a static HTML file, then no prior setup is necessary.

#### Direct Download of NodeJS

  Visit [the NodeJS homepage](https://nodejs.org/en/). The most recent
  versions of NodeJS will be listed here. Download and install the version
  of your choosing (as long as it is higher than version 5.2).

#### Terminal Installation (OSX/Ubuntu)

#####  **OSX**:

   Run the command:
   `curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

  Alternatively: [Use this link and choose an alternative method of installation.](https://nodejs.org/en/download/package-manager/#alternatives)

#####  **Ubuntu**:

  To install the most current version, simply run:
  `curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -`

  Then run:
  `sudo apt-get install -y nodejs`

  Alternatively:  Visit [this](https://nodejs.org/en/download/package-manager/#alternatives) site and run the command for the version of node that you want to install.


#### Verifying Installation
  
  After installing NodeJS, you should check that your installation was successful by
  running  `node -v`, `npm -v`, and `npx -v`. All three should return a version number
  if the installation was successful.

## Using React via Static HTML
  (Note that this option is the less preferable one. While it doesn't require having NodeJS installed, it is less efficient and harder to maintain).

  To help illustrate how using React via static HTML works, take a look at this example HTML file:

  **Index.html**

~~~  

<!doctype html>
    <html>

    <head>
        <meta charset="utf-8">

      <title>Hello React!</title>

      <script src="https://unpkg.com/React@16/umd/React.development.js"></script>
      <script src="https://unpkg.com/React-dom@16/umd/React-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>

      <div id="root"></div>

      <script type = text/babel>
          class App extends React.Component {
              render() {
                  return (
                      <h1>Hello world!</h1>
                  );
              }
          }

          ReactDOM.render(<App />, document.getElementById('root'));
      </script>

  </body>

  </html>

~~~  

(Source for this example code: [link] (https://www.taniarascia.com/getting-started-with-React/))

The first thing to note, is that in the head of this HTML file, three JavaScript files are loaded. In particular, there is a file for React, a file for the ReactDOM (React Document Object Model) and a CDN for babel, a toolchain which allows newer versions of JavaScript to be used in old browser.


In the body of the HTML file, notice that there is a div tag with an id 'root.' This is the "entry point" of the app, as this is where all of the react rendered html is placed. In the script tag below this div, the type is set to text/babel, as the babel compiler is being used to compile the JavaScript (and by extension react) code.


This JavaScript code in question creates a react component called 'App'. This component creates a heading with the text "Hello world!"  The
ReactDOM.render() function puts this HTML within the div assigned the root id.

Of course, the code within this script can be expanded to include more React functionality (as described in later sections). However,recall that this method is not the preferred way to set up a React project. Instead it is  more preferable to use create-react-app as described below.

## Using React via create-react-app

The React app can also be generated using a preconfigured environment designed by Facebook. This environment contains everything needed to start developing a react app.  
To use this environment, NodeJS (and NPM which comes with it) needs to be installed at a version greater than 5.2. Instructions for this can be found in the setup portion above.

Once NodeJS has been installed, a React project can be created using the command: `npx create-react-app <NAME>` where <NAME> is the desired name of the project.

To start a project after it has been created, while in the directory of the project, run: `npm start`


This will open a web browser with the webapp loaded at localhost: 3000.

The files being used to generate this app can be found in the ./<NAME>/src folder. The file index.js contains the code that renders the web page using the component defined in app.js. By modifying app.js, the appearance of the webpage will also change without any need to change index.js.

If you wish to start from scratch, you can delete all of the files in the src directory except for index.js and index.css. In addition, if modifying index.js ensure that the index.js file is still importing React, ReactDOM and the css file. From this stage, it's possible to write JavaScript code (using React's extensions) to render the page as you see fit.
