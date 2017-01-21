# generator-node-express-ts

[![Join the chat at https://gitter.im/generator-node-express-ts/Lobby](https://badges.gitter.im/generator-node-express-ts/Lobby.svg)](https://gitter.im/generator-node-express-ts/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Perfectly configured yeoman generator for Node.js, express.js, gulp.js, pug using Typescript 2.x with TSlint and Typings.

## Features
It configures and generates a lot of components for you.

 * Node and express Initialization
 * Typescript Compilation Configuration and Linting
 * VSCode configuration for hiding unnecessary files
 * Typings for all modules to give you intellisense in IDE
 * File Watcher and recompilation using gulp-nodemon
 * Builds using gulp
 * Basic routes setup with pug view engine
 * .gitignore configuration

## Installation

First, install [Yeoman](http://yeoman.io) and generator-node-express-ts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-node-express-ts
```

Then generate your new project:

```bash
yo node-express-ts
```

## Why?

Boilerplate is boring, scaffolding is cool. Don't spend your entire afternoon configuring your linter and build system with tons of dependencies.
Lets get past that and do the actual development and leave the boring work to [Yeoman](http://yeoman.io). 
This generator handles every configuration that you require for starting up a new project to save your time.

### Typescript with Node.js? Really?

Using typescript in JS projects can be really great coding experience despite of what you think of typescript(as static typed language). 
Node.js with Typescript is a pretty amazing combination which is required for server side programming. Typescript lets you catch bugs while you are coding, which you may encounter after deployment.
And who doesn't like suggestion boxes and intellisense given by IDEs which javascript developers really miss out.


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Lokesh Devnani](https://lokeshd.com)


[npm-image]: https://badge.fury.io/js/generator-node-express-ts.svg
[npm-url]: https://npmjs.org/package/generator-node-express-ts
[travis-image]: https://travis-ci.org/lokeshthegenius/generator-node-express-ts.svg?branch=master
[travis-url]: https://travis-ci.org/lokeshthegenius/generator-node-express-ts
[daviddm-image]: https://david-dm.org/lokeshthegenius/generator-node-express-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lokeshthegenius/generator-node-express-ts
