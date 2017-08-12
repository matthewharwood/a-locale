import { BuildLocale as TestClass } from './build-locale';
import { cliJson1_4 } from './fixtures/angular-cli-v1.4';

const classInstance = new TestClass();

describe(classInstance.constructor['name'], () => {
  let MOCK_ANGULAR_JSON;
  beforeEach(() => {
    MOCK_ANGULAR_JSON = cliJson1_4;
  });

  describe(TestClass.mapAppNames['name'], () => {
    it('should make an array of values when apps are present', () => {
      expect(TestClass.mapAppNames(MOCK_ANGULAR_JSON.apps))
          .toEqual(['wtf', 'wow']);
    });
  });

});


