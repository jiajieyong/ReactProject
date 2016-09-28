# ReactProject

### Install Global Packages
You will need to install several packages for this setup. We will need some of the babel plugins so let's first install babel by running the following code in command prompt window.

```
C:\Users\username>npm install -g babel
C:\Users\username>npm install -g babel-cli
```

### Add dependencies and plugins
We will use webpack bundler in this project so let's install webpack and webpack-dev-server.

```
C:\Users\username>npm install webpack --save
C:\Users\username>npm install webpack-dev-server --save
```

To setup, install the following npm packages

```
npm i babel-loader babel-preset-es2015 babel-preset-react -S
```

### Making Webpack Watch Changes
In the project directory, type:
```
./node_modules/.bin/webpack -d --watch
```

Now Webpack is running in the watch mode, which will automatically bundle the file whenever there is a change detected.

### Setting up server
Once you have npm:
```
npm install http-server -g
```

This will install http-server globally so that it may be run from the command line.

### Viewing on Browser
In the project directory, type:
```
http-server
```
Project will now be running on port 8080, to view go into /src/client folder
