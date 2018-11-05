## Introduction
  React is an extension of the base Javascript functionality to allow for a greater ease in developing user interfaces. This is accomplished by using building blocks known as components, passing parameters known as
  props and adjusting a variable known as state that each component
  possesses. By using a render() method, the content displayed by the
  document can be changed. This set of instructions will go over the
  setup required to use React followed by walking through each of
  the various components used to design User Interfaces. Finally, the instructions will go over how to build and deploy a react app.

## Setup
  If you wish to setup the react project using create-react-app
  (this is a preferable option), NodeJS version 5.2 or higher.
  NodeJS is needed in order to use NPM, which is what is used to
  create the react project via create-react-app.

# Direct Download
  Visit [https://nodejs.org/en/](https://nodejs.org/en/). The most recent
  versions will be listed on the homepage. Download and install the version
  of your choosing.

# Terminal Installation (OSX/Ubuntu)
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

## Using React via create-react-app


# References
