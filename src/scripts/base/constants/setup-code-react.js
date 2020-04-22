export default {
  CONFIG: {
    INITIAL: `module.exports = {
  projects: [
    {
      engine: 'react',
      collectDocsFrom: './src/scripts/react'
    }
  ],
  styles: [
    './dist/reactComponents.css'
  ],
  scripts: [
    './dist/reactComponents.js'
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
      controller: function() {
        const { Button } = reactComponents;

        return function(){
          const onClick = () => {
            window.alert("Clicked!");
          };

          return (
            <Button onClick={ onClick }>
              Click Here
            </Button>
          );
        }
      }
    }
  ]
};
`
  }
};
