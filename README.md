<h3 align="center">SitePoint Counter</h3>

## Contents

- [Installation](#installation)
- [Features](#features)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Dependencies](#dependencies)

### Installation
Clone repo: 
```sh
git clone https://github.com/cloyd/sitepoint-counter.git
cd sitepoint-counter
```

Install the dependencies:
```sh
yarn install
```
or
```sh
npm install
```

### Features
This is a simple counter application.

It includes the following features:

 - Add a named counter to a list of counters
 - Increment any of the counters
 - Decrement any of the counters
 - Delete a counter
 - Show a sum of all the counter values
 - Persist data back to the server
 - Server side rendered JavaScript application

### Development Workflow
Start a live-reload development server:
```sh
yarn dev
```
or
```sh
npm run dev
```

Generate a production build:
```sh
yarn build
```
or
```sh
npm run build
```

Start a production build server:
```sh
yarn start
```
or
```sh
npm run start
```

### Folder Structure
```
sitepoint-counter/
  README.md
  package.json
  server.js
  components/
    Header/
      index.js
    Form/
      index.js
    List/
      index.js
      Item.js
    nav.js
  pages/
    _app.js
    _document.js
    index.js
  static/
    fonts
  utils/
    api.js
```

### Dependencies
Node modules / technology used:
  - NextJS - To create Universal web apps in React
  - apisauce - Promise based HTTP client for the browser and node.js
  - styled-components - Styles
  - react-spring - Animation Library
  - Font Awesome 5 React component - Icons 