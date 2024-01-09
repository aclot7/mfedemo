

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
//   remotes: {
//     "mfeApp": "http://localhost:4300/remoteEntry.js",

// },
  shared: {
    // "@angular/core": { singleton: true, strictVersion: true },
    // "@angular/common": { singleton: true, strictVersion: true },
    // "@angular/router": { singleton: true, strictVersion: true },
    // "@angular/common/http": { singleton: true, strictVersion: true }, 
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
    sharedMappings: ['shared-services']

});

// module.exports = {
//   output: {
//     uniqueName: "hostApp",
//     publicPath: "auto",
//     scriptType: "text/javascript"
//   }}