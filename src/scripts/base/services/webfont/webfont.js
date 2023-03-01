export const init = () => {
  setTimeout(appendWebfontImports, 200)
};

function appendWebfontImports(){
  const styleTag = document.createElement('style');
  styleTag.innerHTML = getWebfontImports();
  document.head.appendChild(styleTag);
}

function getWebfontImports(){
  return [
    '@import url("https://fonts.googleapis.com/css?family=PT+Mono&display=swap");',
    '@import url("https://fonts.googleapis.com/css?family=Lora:400i&display=swap");'
  ].join('')
}
