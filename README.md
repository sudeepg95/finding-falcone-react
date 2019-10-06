# Finding Falcone - React

## Prerequisites

#### NodeJs:

Recommended version >= v11.x. <br>
Please note that even though the commands below makes use of `yarn`, it is expected to work similarly using `npm` that comes with NodeJs

###### Install NodeJs

```
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Install project dependencies:

```
yarn install
```

Installs all project dependencies necessary for development and for creating production ready builds

## Available Scripts

In the project directory, you can run:

#### Development Environment - Test Server with hot-reload

```

Post which run the following command:

```

yarn start

```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. <br>

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Kill process in port 3000 if encounterred with `ADDR IN USE` error or the like

```

fuser -k 3000/tcp

```

#### Production Environment - Test Server using BrowserSync

```

yarn run build-serve

```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

A test server is spawned up and hosts the previously generated build folder for access from all devices within the same network.<br>
Useful for testing in synchronised browser testing.<br>
More info at: [BrowserSync](https://www.browsersync.io)

#### Production Environment - Build

```

yarn build

```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames includes trailing hashes.<br>

#### Code linting

```

yarn run lint

```

Checks spacing errors and other indentation issues in code and prints the result in the console.

```

yarn run lint-fix

```

Auto fixes some of the issues with spacing and indentation and displays
```
