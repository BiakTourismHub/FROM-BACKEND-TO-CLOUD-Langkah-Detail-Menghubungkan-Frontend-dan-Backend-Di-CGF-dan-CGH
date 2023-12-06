// webpack.config.js di aplikasi utama
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // ... konfigurasi lainnya
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {
        navbarApp: 'navbarApp@http://localhost:3001/remoteEntry.js',
        dashboardApp: 'dashboardApp@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
};
