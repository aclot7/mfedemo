const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeApp',

  exposes: {
    './Module': './projects/mfe-app/src/app/todo-list/todo-list.module.ts',
  },

  shared: {
    // "@angular/core": { singleton: true, strictVersion: true },
    // "@angular/common": { singleton: true, strictVersion: true },
    // "@angular/router": { singleton: true, strictVersion: true },
    // "@angular/common/http": { singleton: true, strictVersion: true }, 
     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },
  
    sharedMappings: ['shared-services']

});

