import {
  BuildLocale as aClass,
} from './build-locale';
import { cliJson1_4 } from './fixtures/.angular-cli-v1.4';


const classInstance = new aClass();

describe(classInstance.constructor['name'], () => {
  let MOCK_ANGULAR_JSON;
  beforeEach(() => {
    MOCK_ANGULAR_JSON = cliJson1_4;
  });

  describe(aClass.mapAppNames['name'], () => {
    it('should make an array of values when apps are present', () => {
      expect(aClass.mapAppNames(MOCK_ANGULAR_JSON.apps))
          .toEqual(['wtf', 'wow']);
    });
  });

  describe(aClass.getAngularJSON['name'], () => {
    it('should take test presents of angular-cli.json', async () => {
      const PATH = './.angular-cli.json';
      let angularAppPath = await aClass.getAngularJSON();

      expect(angularAppPath).toBeDefined();
      expect(angularAppPath).toBe(PATH);

      angularAppPath = await aClass.getAngularJSON(PATH);

      expect(angularAppPath).toBeDefined();
      expect(angularAppPath).toBe(PATH);
    });

    it('should throw if angular-cli.json is missing', () => {
      const PATH = './.angular-cli2.json';
      aClass.getAngularJSON(PATH).catch(e => {
        expect(e).toBeDefined();
      });
    });
  });

  describe(aClass.getAngularApps['name'], () => {
    it('should get and read cli.json', async () => {
      const angularAppPath = await aClass.getAngularApps();
      expect(angularAppPath.apps).toBeDefined();
    });

    it('should throw if angular-cli.json is not json', () => {
      const PATH = './.angular-cli.json';

      aClass.getAngularApps(PATH).catch(e => {
        expect(e).toBeDefined();
      });
    });
  });
});


