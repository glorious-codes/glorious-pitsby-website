import ANGULAR from '@scripts/base/constants/setup-code-angular';
import setupCodeService from './setup-code';

describe('Setup Code Service', () => {
  it('should get code for a given engine', () => {
    const CODE = setupCodeService.get('angular');
    expect(CODE).toEqual(ANGULAR);
  });
});
