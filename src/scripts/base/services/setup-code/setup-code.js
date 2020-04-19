import ANGULAR from '@scripts/base/constants/setup-code-angular';
import REACT from '@scripts/base/constants/setup-code-react';
import VANILLA from '@scripts/base/constants/setup-code-vanilla';
import VUE from '@scripts/base/constants/setup-code-vue';

const _public = {};

_public.get = engine => {
  const CODES = getAvailableCodes();
  return CODES[engine.toUpperCase()];
};

function getAvailableCodes(){
  return { ANGULAR, REACT, VANILLA, VUE };
}

export default _public;
