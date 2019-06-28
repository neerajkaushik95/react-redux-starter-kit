
<p  align="center">

  

<img  src="https://user-images.githubusercontent.com/17673349/60124942-5b165180-97a8-11e9-8589-a165a72f3209.jpg"/>

  

</p>
---
A nice structured yet simple starter kit for rapid application development using ReactJS, Webpack 4, and React Router v4.  

:heart: Webpack 4
<br/>
:heart: Code splitting
<br/>
:heart: React Router
<br/>
:heart: Redux 

Why React redux starter Kit ?  

1. **One command to get started** - Type `npm start` to start development in your default browser.

  

2. **Rapid feedback** - Each time you hit save, changes hot reload and linting and automated tests run.

  

3. **One command line to check** - All feedback is displayed on a single command line.

  

4. **No more JavaScript fatigue** - Starter Kit uses [the most popular and powerful libraries](#technologies) for working with React.

  

5. **Working example app** - The included an simplet counter example.

  

6. **Automated production build** - Type `npm run build` to do all this:

  

  

[![React Redux starter kit prod build](https://user-images.githubusercontent.com/17673349/60339221-cbe68500-99c5-11e9-8150-727b01c791af.png)]()

  

  

# Get Started

  

  
## Initial  Setup

  

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**

  

  

Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

  

  

2. **Install [Git](https://git-scm.com/downloads)**.

  

  

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

  

  

4. Complete the steps below for your operating system:

  

  

### macOS

  

  

* Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.

  

  

### Linux

  

  

* Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch..

  

  

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

  

  

### Windows

  

* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.

  

* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.

  

[Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.

  

If you already have Visual Studio installed:

  

Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.

  

The C++ compiler is used to compile browser-sync (and perhaps other Node modules).


## <a id="features">Features</a>

#### Build Process
 * Built with [webpack 4](https://webpack.js.org/configuration/)
 * Code splitting at the [react-router v4](https://github.com/reactjs/react-router) level
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling 

#### State Management
* [redux-thunk](https://github.com/gaearon/redux-thunk) for [asynchronous actions](https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunks.js#L6)
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router v4](https://github.com/reactjs/react-router) for client-side [routing](https://github.com/mikechabot/react-boilerplate/blob/master/src/Root.jsx#L5)

#### HTTP
* [ [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) HTTP support via [Axios](https://github.com/mzabriskie/axios)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer) and [normalize.css](https://necolas.github.io/normalize.css/)
* 
#### Develop & Deploy
* Environmental configurations for both webpack and redux
  * **Dev**: [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/). `redux-logger` enabled
  * **Prod**: [Express](http://expressjs.com/) server disabled

#### Testing
* Tested with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* Coverage support 
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying

  

  

## Having Issues? Try these things first

1. Make sure you ran all steps in [Get started](#get-started) including the [initial machine setup](#initial-machine-setup).

  

2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.

  

3. Install the latest version of Node.

  

4. Make sure files with names that begin with a dot (.editorconfig, .gitignore, .npmrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.

  

5. Don't run the project from a symbolic link. It may cause issues with file watches.

  

6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.

  

7. Tip: Things to check if you get an `npm run lint` error or build error:

  

  

* If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix:

  

  

1. Change the `npm run lint` script to `"esw webpack.config.* src tools; exit 0"`

  

1. Change the `npm run lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

  

  

> Note: Adding `exit 0` will allow the npm scripts to ignore the status 1 and allow ESW to print all warnings and errors.

  

* Ensure the `eslint`/`esw` globally installed version matches the version used in the project. This will ensure the `esw` keyword is resolved.

  

  

8. Rebuild node-sass with `npm rebuild node-sass` if you are having and error like `Node Sass does not yet support your current environment on macOS XXX` after an initial `npm start -s`.

  

  

---

  

  

## Technologies

  

  

React redux starter kit offers a rich development experience using the following technologies:

  

  

| **Tech** | **Description** |**Learn More**|

  

|----------|-------|---|

  

| [React](https://facebook.github.io/react/) | Fast, composable client-side components. | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |

  

| [Redux](http://redux.js.org) | Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|

  

| [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |

  

| [Babel](http://babeljs.io) | Compiles ES6 to ES5. Enjoy the new version of JavaScript today. | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6) |

  

| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|

  

| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|

  

| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |

  

| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|

  

| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |

  

| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|

  

| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |

  

| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |

  

| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n) |


  

---