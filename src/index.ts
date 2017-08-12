import { BuildLocale } from './build-locale';



BuildLocale.getAngularApps()
    .then(({apps}) => {
      const appNames = BuildLocale.mapAppNames(apps);

      if (appNames.length) {
        return appNames;
      } else {
        return Error('No Applications were found');
      }
    })
    .then(console.log);

