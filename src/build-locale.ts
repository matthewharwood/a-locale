import * as fse from 'fs-extra';
import * as _ from 'lodash';


interface AngularConfigApp {
  name?: string;
}


interface AngularConfig {
  apps: AngularConfigApp[];
}


export class BuildLocale {
  static async getAngularJSON(path = './.angular-cli.json'): Promise<string> {
    const exist = await fse.pathExists(path)
        .catch((reject) => {
          return Error(`${reject}: Cannot find path for angular cli`);
        });

    if (exist) {
      return path;
    }
  }

  static mapAppNames(apps: AngularConfigApp[]): Array<string | number> {
    return apps.map((item, index) => {
      return _.get(item, 'name', index);
    });
  }

  static async getAngularApps(): Promise<AngularConfig> {
    const angularAppPath = await BuildLocale.getAngularJSON();
    return await fse.readJson(angularAppPath).catch((err) => {
      Error(`${err}: Something when wrong reading json`);
    });
  }
}

