export default {
  configuration: `
module.exports = {
  projects: [
    {
      engine: 'angular',
      collectDocsFrom: './src/angular',
      moduleName: 'my-angular-components'
    },
    {
      engine: 'react',
      collectDocsFrom: './src/react',
      // You may optionally declare some specific React version (Default: 16.13.0)
      // NOTE: For now, Pitsby has no support for React 18.
      version: '16.8.0'
    },
    {
      engine: 'vue',
      collectDocsFrom: './src/vue',
      // The name of your library according UMD (Universal Module Definition).
      // Pitsby will look for this name as a global variable.
      libraryName: 'myVueComponents'
      // You may optionally declare some specific Vue version (Default: 2.5.13)
      // NOTE: For now, Pitsby has no support for Vue 3.
      version: '2.6.0'
    },
    {
      engine: 'vanilla',
      collectDocsFrom: './src/vanilla',
    }
  ],
  styles: [
    './dist/my-styles.css',
    // You can optionally declare an object representing
    // the link tag attributes:
    { href: './dist/other.css', rel: 'stylesheet' },
    { href: './dist/any-other.css', rel: 'prefetch', as: 'style' }
  ],
  scripts: [
    './dist/my-components.js',
    // You can optionally declare an object representing
    // the script tag attributes:
    { src: './dist/es6/components.js', type: 'module' },
    { src: 'https://some.cdn.com/lib.js', crossorigin: '' },
    // In addition to the native HTML attributes for a script tag,
    // you can use the Boolean "inline" property to indicate whether
    // a script must be presented inline. This is the case of "importmaps",
    // since browsers still don't support importmap coming from external sources.
    { src: './src/doc.importmap.js', type: 'importmap', inline: true }
  ],
  other: [
    './dist/images/',
    './dist/fonts/',
    './dist/etc/'
  ],
  metrics: {
    // You can choose one, and only one, of the following
    // alternatives to track pageviews:
    // A) Google Analytics
    // Supports Universal Analytics and Google Analytics 4 properties
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
    // B) Plausible
    plausibleId: 'mysite.com',
    plausibleOptions: {
      // By default, Plausible does not track events on localhost.
      // You can enable localhost tracking by passing the following option:
      trackLocalhost: true
      // To see all available options, visit:
      // https://github.com/plausible/plausible-tracker#usage
    }
  },
  // You can optionally control Pitsby's color scheme (light/dark).
  colorScheme: {
    // In addition, you can set the color scheme used on Pitsby's first render.
    initial: 'dark',
    // If your components support both light/dark color schemes, you can
    // listen for changes made by the user and theme you components accordingly.
    onChange: function(scheme){
      // This function receives the color scheme (light/dark) just selected by the user.
      // With the selected color scheme in hands, you can appropriately adjust the
      // theme of you component library.
      // HEADS UP! This function gets executed at browser's runtime, not Node's.
      // So you won't have access here to anything you eventually required in the
      // configuration file using commonjs.
    }
  },
  custom: {
    favicon: {
      // This image should be included in the 'other' attribute above
      filepath: './some/path/to/favicon.png'
    },
    logo: {
      // This image should be included in the 'other' attribute above
      filepath: './some/path/to/image.svg',
      width: '100px',
      height: '100px'
    },
    // Styles to be applied globally.
    // This is perfect when you need to do just a few overrides, otherwise,
    // prefer to create a dedicated stylesheet for documentation and include it
    // in the 'styles' attribute above.
    styles: \`
      p-main { color: red; }
    \`,
    windowTitle: 'My Custom Window Title'
  },
  outputDirectory: './docs'
};
`,
  documentation: `
module.exports = {
  name: 'Button',
  description: 'Trigger for actions in forms, dialogs, and more.',
  deprecated: true, // Shows a deprecation tag beside component's name
  properties: [ // Can optionally be named "attributes"
    {
      name: 'theme',
      type: 'String',
      values: 'primary, secondary',
      required: true, // You can optionally indicate a property as required
      deprecated: true // Shows a deprecation tag beside property's name
    },
    {
      name: 'size',
      type: 'String',
      values: 'small, large'
    }
  ],
  // When documenting vanilla components, you can use "methods" to document
  // your component's public methods.
  methods: [
    {
      name: 'onClick (clickFn)',
      deprecated: true, // Shows a deprecation tag beside method's name
      params: [
        {
          name: 'clickFn',
          type: 'Function',
          description: 'Function to be called on button click.',
          required: true, // You can optionally indicate a param as required
          deprecated: true // Shows a deprecation tag beside param's name
        }
      ]
    }
  ],
  // Angular Examples should be written like below:
  examples: [
    {
      title: 'My Button Example',
      description: 'This is my custom Angular button.',
      controller: function($window){
        const $ctrl = this;

        $ctrl.$onInit = () => {
          setGreeting('Hello!');
        };

        $ctrl.greet = () => $window.alert($ctrl.greeting);

        function setGreeting(greeting){
          $ctrl.greeting = greeting;
        }
      },
      dependencies: ['$window'],
      template: \`
      <my-button class="my-button" ng-click="$ctrl.greet()">
        Greet
      </my-button>\`,
      // Sometimes you need to customize styles for documentation purpose only.
      // Use this attribute to target some styles for your example:
      styles: \`
      .my-button { color: red; }\`
    }
  ],
  // Vue Examples should be written like below:
  examples: [
    {
      title: 'My Button Example',
      description: 'This is my custom Vue button.',
      controller: {
        data(){
          return {
            label: 'Greet'
          };
        },
        methods: {
          greet(){
            window.alert('Hello!');
          }
        }
      },
      template: \`
      <my-button class="my-button" @click="greet">
        {{ label }}
      </my-button>\`,
      // Sometimes you need to customize styles for documentation purpose only.
      // Use this attribute to target some styles for your example:
      styles: \`
      .my-button { color: red; }\`
    }
  ],
  // React Examples should be written like below:
  examples: [
    {
      title: 'My Button Example',
      description: 'This is my custom React button.',
      controller: function(){
        // React API is available globally
        const { useState } = React;
        // Your library should be exported as UMD (Universal Module Definition)
        // and will be available through the name you have defined.
        const { Button } = yourReactComponentLibraryName;

        // Controller must return a function or class representing the
        // example to be rendered.
        return function(){
          const [ label, setLabel ] = useState('Send');
          const onButtonClick = () => window.alert('Button clicked!');

          return (
            <div className="my-button-wrapper">
              <Button onClick={onButtonClick}>
                { label }
              </Button>
            </div>
          );
        }
      },
      // Sometimes you need to customize styles for documentation purpose only.
      // Use this attribute to target some styles for your example:
      styles: \`
      .my-button-wrapper { margin-top: 10px }\`
    }
  ],
  // Vanilla Examples should be written like below:
  examples: [
    {
      title: 'My Button Example',
      description: 'This is an example using just vanilla javascript.',
      controller: function(element){
        const input = element.querySelector('input');
        const button = element.querySelector('button');
        button.addEventListener('click', () => window.alert(input.value));
      },
      template: \`
      <input type="text" />
      <button class="my-button" type="button">Greet</button>\`,
      // Sometimes you need to customize styles for documentation purpose only.
      // Use this attribute to target some styles for your example:
      styles: \`
      .my-button { color: red; }\`
    }
  ]
};
`
};
