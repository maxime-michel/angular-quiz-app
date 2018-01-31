# Angular Music Quiz

# Quickstart

```sh
$ git clone https://github.com/fabiandev/angular2-quiz-app.git
$ cd angular2-quiz-app
$ npm install
$ npm start
```

> Tip: You can use [yarn](https://yarnpkg.com/) instead of [npm](https://npmjs.com).

# Live Example

[https://hueapp.herokuapp.com/](https://hueapp.herokuapp.com/)

> Since the app is hosted on a free [Heroku](https://www.heroku.com/) instance, it may need some time to boot up.

*Fun fact:* The app is named "hue", because the course at University, where this project was born,
was called "Hypermedia User Experience Engineering".

# Credits

This app uses:
- [Angular](https://angular.io) as a front-end framework.
- [Express](https://github.com/expressjs/express) with [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node) for the server.
- [Spotify API](https://developer.spotify.com/web-api/) for the quiz data.
- [css-animator](https://github.com/fabiandev/css-animator) and [animate.css](https://daneden.github.io/animate.css/) for animations.
- [Materialize](http://materializecss.com/) for styling.
- [Material icons](https://github.com/google/material-design-icons/) and [Icons8 Flat Color Icons](https://github.com/icons8/flat-color-icons) for icons.
- [iScroll](https://github.com/cubiq/iscroll) for a better mobile scrolling experience.

# Documentation

## CLI

### Dependencies

We use npm or yarn and jspm (currently `jspm@beta`) to install dependencies.  
We just need [gulp](http://gulpjs.com) and [jspm](http://jspm.io) to be installed globally, by using the `-g` flag.

```sh
$ npm install -g gulp jspm@beta
```

> Make sure that you have [Node.js](https://nodejs.org/) installed, [npm](https://npmjs.com) comes
> with it. You can check with `node --version`. For faster npm dependency installs, use [yarn](https://yarnpkg.com/).

To install **development dependencies**, used e.g. in gulp tasks use:

```sh
$ npm install --save-dev module-name
```

> or `yarn add module-name --dev`

To install **application dependencies**, used on the server side use:

```sh
$ npm install --save module-name
```

> or `yarn add module-name`

To install **client side dependencies**, use jspm:

```sh
$ jspm install modulename && npm run update-paths
```

The execution of `update-paths` is required, to have all jspm package also mapped
in `compilerOptions.paths` of `tsconfig.json`.

> jspm also supports `install npm:modulename` and `install github:user/repo`

### Typings

Typings are used to tell the [TypeScript](https://www.typescriptlang.org)
compiler about definitions. You can install them via npm just like this:

```sh
$ npm install @types/core-js
```

> Definitions will be available automatically in the TypeScript project.

### Building

#### Production Build

The production build should be used, to compile the app for **deployment**.
It will do it's best to keep the target files as small as possible.

```sh
$ gulp build
```

#### Development Build

A development build performs almost the same tasks as a production build, but
may be faster.

```sh
$ gulp dev-build
```

#### Watch Changes

To make it easier and, most important, faster to compile changes use the
watch task. It will perform only tasks to provide files, the dev-server needs
processed (like compiling to JavaScript and CSS).

```sh
$ gulp watch
```

> You may also execute `gulp watch-build` to perform those actions only once.

### Local Server

Before starting the server copy `.env.example` in `/server` and name it `.env`, get
[Spotify API](https://developer.spotify.com/my-applications/#!/) keys and fill them in.

> NEVER PASTE YOUR KEYS IN THE EXAMPLE FILE OR ANYWHERE ELSE!

To **start the sever** type:

```sh
$ npm start
```

> or `yarn start`

> The server will be started with the `dist` directory as root, and a built version
> of the app will be used. Make sure to run `gulp build` or `gul dev-build` first.

To **start a development server** type:

```sh
$ npm start dev
```

> or `yarn start dev`

> The server will be started on the very top level of the application code.
> All files (including dependencies) are transpiled on-demand in the browser.
> While developing, make sure `gulp watch` is running, to pick up index.html and
> less-files changes.

### Deployment

This app supports deployment on Heroku:

```sh
$ git push heroku master
```

Just make sure to set the correct Node and npm environment variables:

```sh
NODE_ENV=production
NPM_CONFIG_PRODUCTION=false
```

> The npm production flag must be set to false that we can build the app on Heroku after pushing the repository.

And of course you have to add `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` as environment variables.  

Optionally you may also add `NEW_RELIC_LICENSE_KEY` to enable monitoring by [New Relic](https://newrelic.com/).
If you do not provide a license key, New Relic simply won't be enabled.

> Tip: If you deploy to Heroku, you can add the [New Relic Add-on](https://elements.heroku.com/addons/newrelic) for free.

## Configuration

This section covers how to configure the build tasks, the server and
the application itself.

### Build Configuration - `config.js`

You can set some configuration for TypeScript in `tsconfig.json` and in
`tslint.json`. All other configuration can be found in `config.js`.

Please take a closer look at the `config.js` file comment's on the configuration
properties for more detailed explanations.

#### config.src

Type: `String`  

The folder, where the source files can be found, e.g. `./src` (no trailing slash!).

#### config.dist

Type: `String`  

The folder, where the built app will go to. Again, do not use a trailing slash.

> *dist* is short for *distribution*.

#### config.watch

Type: `String|Array<String>`

Define which files should or shouldn't be watched, when using `gulp watch`.
You can use the [globbing pattern](https://www.npmjs.com/package/minimatch) here.

#### config.jspm

Type: `Object`  

This configuration holds the command, that will be executed later via gulp when building the application.
You can type `jspm` in the command line to see all available options.

jspm internally uses the [SystemJS](https://github.com/systemjs/systemjs) [builder](https://github.com/systemjs/builder).

#### config.less

Type: `Object`  

Configure the [less](http://lesscss.org) gulp task, to create CSS files
from LESS files.

#### config.tslint

Type: `Object`

Define a globbing pattern, which TypeScript files to lint for errors.

#### config.index

Type: `String`  

Define the index file for the application.

#### config.assets

Type: `Object`  

Files to copy without further processing.


#### config.copy

Type: `Array<Object>`  

Files to copy into a desired location, but only preserve the path from the set `base`.

### Server Configuration - `server/index.js`

You can set environment variables in `server/.env` (not included in this repo).
Copy `server/.env.example` and rename it to `.env`.  

Other options are set in `server/config/app.js` for a production server, or
`/server.config/app.dev.js` for a development server.

### Application Configuration

Note, that the index.html is **not** inside the `src`, but on the very top level
of the application code.

> The `index.html` is processed by
> [gulp-preprocess](https://github.com/jas/gulp-preprocess).  

For the dev server or a dev build, `src/js/main.dev.ts`
will be used. For a production build, `src/js/main.prod.ts` is the entry point of the app.
