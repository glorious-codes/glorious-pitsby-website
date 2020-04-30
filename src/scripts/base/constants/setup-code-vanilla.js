export default {
  CONFIG: {
    INITIAL: `module.exports = {
  projects: [
    {
      engine: 'vanilla',
      collectDocsFrom: './src/components'
    }
  ],
  styles: [
    './dist/vanillaComponents.min.css'
  ],
  scripts: [
    './dist/vanillaComponents.min.js'
  ],
  other: [
    './dist/images/'
  ]
};
`
  },
  DOC: {
    INITIAL: `module.exports = {
  name: 'Button',
  description: 'Abstraction of a native button.',
  examples: [
    {
      title: 'Default Button',
      controller: function(element) {
        element.addEventListener('click', () => {
          window.alert("Clicked!");
        });
      },
      template: \`
      <button type="button" class="btn">
        Click Here
      </button>\`
    }
  ]
};
`
  }
};
