const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  remotes: {
    policy: "http://localhost:4201/remoteEntry.js",
    payment: "http://localhost:4202/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true })
  }
};