# Angular Starter

> An Angular starter kit featuring [Angular 8](https://angular.io), [BiSkinKit](http://biskin-kit.pages.bisdevdom.ch/biskin-kit/?path=/story/welcome--to-biskinkit-storybook), [ag-Grid](https://www.ag-grid.com/)

This seed repo serves as an Angular starter for anyone looking to get up and running with Angular and TypeScript fast. We're also using Protractor for our end-to-end story and Jest for our unit tests.

- Best practices in file and application organization for Angular.
- Pre-configured Linters and Formatters with @bison/global-auto-configurations.
- Bison Libraries: BiSkinKit, ag-Grid.
- Testing Angular code with Jest.
- End-to-end Angular app testing using Protractor.

### Quick start

**Make sure you have Node version >= 8.0 and (NPM >= 5 or [Yarn](https://yarnpkg.com) )**

> Clone/Download the repo

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://gitlab.bisdevdom.ch/biskin-kit/angular-starter.git

# change directory to our repo
cd angular-starter

# install the repo with npm
npm install

# start the server
npm start
```

go to [http://0.0.0.0:4200](http://0.0.0.0:4200/webpack-dev-server/) or [http://localhost:4200](http://localhost:4200/webpack-dev-server/) in your browser

# Table of Contents

- [File Structure](#file-structure)
- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installing](#installing)
  - [Running the app](#running-the-app)

## File Structure

```
angular-starter/
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       └──robots.txt             * for search engines to crawl your website
 │
 ├──tsconfig.json                  * typescript config used outside ng
 ├──tsconfig.app.json              * config that ng uses for typescript
 └──package.json                   * what npm uses to manage its dependencies

```

# Getting Started

## Dependencies

What you need to run this app:

- `node` and `npm`
- Ensure you're running the latest versions Node `v8.x.x`+ (or `v9.x.x`) and NPM `5.x.x`+

## Installing

- `fork` this repo
- `clone` your fork
- `npm install` to install all dependencies or `yarn`
- `npm run start` to start the dev server

## Running the app

After you have installed all dependencies you can now run the app. Run `npm run start` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:4200`.

## Other commands

### build files

```bash
# production
npm run build
```

### lint files

```bash
npm run lint
```

### run unit tests

```bash
npm run test
```

### run end-to-end tests

```bash
# update Webdriver (optional, done automatically by postinstall script)
npm run webdriver:update

# this will start a test server and launch Protractor
npm run e2e
```

# Frequently asked questions

# Support, Questions, or Feedback

> Contact us anytime for anything about this repo. Pull request are welcome.

- [Jabber: Mobile- & Webentwicklung]()
