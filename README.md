# Vue Rise
> Starter kit for a web client built with Vue.

## Contributing

1. Install [Node](https://nodejs.org/en/). Download the "Recommend for Most Users" version.

2. Clone the repo:
``` bash
git clone git@github.com:rafaelcamargo/vue-rise.git
```

3. Go to the project directory
``` bash
cd vue-rise
```

4. Install the project dependencies
``` bash
npm install
```

5. If you want to just build the project, run:
``` bash
npm run build
```

6. Otherwise, run:
``` bash
npm run start
```

The app will be running on `http://localhost:9000`.

## Tests

1. Ensure that all code that you have added is covered with unit tests:
``` bash
npm run test
```

2. You can optionally generate coverage report after running tests:
``` bash
npm run test -- --coverage
```

## Structure

```
- root
  - .circleci           # Continuous delivery configs.
    - config.yml        # Continuous integration config (Circle CI).
    - deploy.sh         # Deploy config (Firebase).
  - environments
  - src
    - images
      ...               # All images go here.
    - scripts
      - base
        - components
        - services
        - interceptors
        - filters
        - resources
        ...             # Modules not coupled to any specific domain.
      - home
        - components
        - services
        - interceptors
        - filters
        - resources
        - views         # Views have no logic, they contain components only.
      ...               # Further domains (user, auth, contact, etc).
    - styles
      - _variables.styl # Predefined variables (colors, font, etc).
      - _mixins.styl    # Predefined mixins (placeholder, breakpoint, etc).
      - _native.styl    # Predefined native styles (body, a, p, ul, li, etc).
      ...               # Further stylesheets go here.
  .babelrc              # Basic transpilation config.
  .eslint               # Quality oriented ESLint config.
  .jest.config.js       # Unit tests config (Jest).
  .project.json         # General tokens used by config files.
  .webpack.conf.base.js # Base bundler configuration (used by all environments).
  .webpack.conf.dev.js  # Development-specific bundler configuration.
  .webpack.conf.prod.js # Production-specific bundler configuration.
  .webpack.config.js    # Bundler configuration.
```

## Useful links

- [Bottles and principles. How to better organize CSS](https://rafaelcamargo.com/bottles-and-principles-how-to-better-organize-css)
- [Formatting quality](https://rafaelcamargo.com/formatting-quality)
- [Components beyound reuse](https://medium.com/@rcamargo/components-beyond-reuse-6cef6848a748)
- [Component maturity model](https://rafaelcamargo.com/component-maturity-model)

## Questions

Send me your questions clicking [here](https://rafaelcamargo.com/contact)
