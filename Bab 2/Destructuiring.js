// single-spa-config.js
import { registerApplication, start } from 'single-spa';

registerApplication(
  'navbar',
  () => import('./navbar/navbar.app.js'),
  () => location.pathname === '/navbar'
);

registerApplication(
  'dashboard',
  () => import('./dashboard/dashboard.app.js'),
  () => location.pathname === '/dashboard'
);
start();
