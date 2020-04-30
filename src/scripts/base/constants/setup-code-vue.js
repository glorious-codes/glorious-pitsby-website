export default {
  CONFIG: {
    INITIAL: `module.exports = {
  projects: [
    {
      engine: 'vue',
      collectDocsFrom: './src/components',
      importFrom: './dist/vueComponents',
      libraryName: 'vueComponents'
      // Should be actionable like a plugin:
      // Vue.use(vueComponents)
    }
  ],
  styles: [
    './dist/vueComponents.min.css'
  ],
  scripts: [
    './dist/vueComponents.min.js'
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
      controller: {
        methods: {
          onClick(){
            window.alert("Clicked!");
          }
        }
      },
      template: \`
      <pd-button :on-click="onClick">
        Click Here
      </pd-button>\`
    }
  ]
};
`
  }
};
