## Introduction
  React is an extension of the base Javascript functionality to allow for a greater ease in developing user interfaces. This is accomplished by using building blocks known as components, passing parameters known as props and adjusting a variable known as state that each component
  possesses. By using a render() method, the content displayed by the
  document can be changed. This set of instructions will go over the
  setup required to use React followed by walking through each of
  the various components used to design User Interfaces. Finally, the instructions will go over how to build and deploy a react app.

## Setup
  If you wish to setup the react project using create-react-app
  (this is a preferable option), NodeJS version 5.2 or higher.
  NodeJS is needed in order to use NPM, which is what is used to
  create the react project via create-react-app.

### Direct Download:
  Visit [https://nodejs.org/en/](https://nodejs.org/en/). The most recent
  versions will be listed on the homepage. Download and install the version
  of your choosing.

### Terminal Installation (OSX/Ubuntu):
  **OSX**:
  Run the command:
   `curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

  Alternatively: [Use this link and choose an alternative method of installation.](https://nodejs.org/en/download/package-manager/#alternatives)

  **Ubuntu**:
  To install the most current version, simply run:
  `curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
  sudo apt-get install -y nodejs`

  Alternatively:  Visit [this](https://nodejs.org/en/download/package-manager/#alternatives) site and run the command for the version of node that you want to install.

  After installing nodeJS, you should check that your installation was successful by
  running  `node -v`, `npm -v`, and `npx -v`. All three should return a version number
  if the installation was successful.

## Using React via Static HTML
  (Note that this option is the less preferable one. While it doesn't require having NodeJS installed, it is less efficient and harder to maintain).

  To help illustrate how using React via static HTML works, take a look at this example HTML file:

  **Index.html**

  ~~~~
   <!doctype html>
    <html>

    <head>
        <meta charset="utf-8">

      <title>Hello React!</title>

      <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
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
  ~~~~

(Source for this example code and information on static HTML: [link] (https://www.taniarascia.com/getting-started-with-react/))

The first thing to note, is that in the head of this HTML file, three CDN's are loaded. In particular, there is a CDN for React, a CDN for the ReactDOM and a CDN for babel which allows newer versions of javascript to be used in old browser (this is not required, but would be good to use).


In the body of the HTML file, note that there is a div tag with an id 'root.' This is the "entry point" of the app.


In the script tag, the type is set to text/babel, as the babel compiler is being used to compile the Javascript code.


This Javascript code in  question creates a component called 'App' this component simply creates a heading with the text "Hello world!" The code then uses the
ReactDOM.render() function to put this HTML within the div assigned with the root id. The code within this script can be expanded to include more react functionality
(described in later sections). However, again, this method is not the preferred way to use React. Instead it is a better idea to use create-react-app as described below.

## Using React via create-react-app


# References
