export default {
  CONFIG: {
    INITIAL: `module.exports = {
  projects: [
    {
      engine: 'vanilla',
      collectDocsFrom: './src/scripts/vanilla'
    }
  ],
  styles: [
    './dist/vanillaComponents.css'
  ],
  scripts: [
    './dist/vanillaComponents.js'
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
  properties: [
    {
      name: 'on-click',
      type: '<void> Function',
      values: 'any'
    }
  ],
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
