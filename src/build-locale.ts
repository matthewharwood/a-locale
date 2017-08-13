import * as fse from 'fs-extra';
import * as _ from 'lodash';


interface AngularConfigApp {
  name?: string;
}


interface AngularConfig {
  apps: AngularConfigApp[];
}

const CFG_PATH = './.angular-cli.json';

export class BuildLocale {

  public static async getAngularJSON(path = CFG_PATH): Promise<string> {

    const exist = await fse.pathExists(path);
    if (exist) {
      return path;
    } else {
      throw new Error(`Cannot find path for angular cli`);
    }
  }

  public static async getAngularApps(path = CFG_PATH): Promise<AngularConfig> {
    const angularAppPath = await BuildLocale.getAngularJSON(path);
    return await fse.readJson(angularAppPath).catch((err) => {
      Error(`${err}: Something when wrong reading json`);
    });
  }

  public static mapAppNames(apps: AngularConfigApp[]): Array<string | number> {
    return apps.map((item, index) => {
      return _.get(item, 'name', index);
    });
  }
}

