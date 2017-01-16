<%= projectName %>
===================
<%= projectDescription %>

### Quick start

1. Install the dependencies
```
$ npm run install
```
2. Create a new `index.html` file that will run the app. You can use the `index.html.template` as a starting point.
```sh
$ cp index.html.template index.html
```
3. Start the `webpack` development server on port `<%= port %>`.
```sh
$ npm run start
```
4. If you want to create a new component, you can do that with [`plop`](https://github.com/amwmedia/plop), so make sure you have it installed globally.
```sh
$ npm install -g plop
$ plop component
? What type of component? (Use arrow keys)
❯ stateless
  stateful
```

### Tests

Unit tests are written using Facebook's [`Jest`](http://facebook.github.io/jest/#getting-started).

You can run the tests in different modes:

- You can run the tests once:
  ```
  $ npm run test
  ```
- You can run the tests in watch mode. This will re-run only the tests relevant to the changed files:
  ```
  $ npm run test:watch
  ```
- You can run the tests in watch mode but re-run all the tests regardless of the changed files.
  ```
  $ npm run test:watch:all
  ```

You can see the test coverage summery by running
```
$ npm run test:coverage
```
You can view the summery in your terminal or open the generated HTML page in `coverage/lcov-report/index.html`.

### Build

This project uses `webpack` to bundle all the assets into a single Javascript file. The generated output will be in `dist/` directory.

```sh
$ npm run build:production
```
