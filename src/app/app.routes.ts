import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'policy',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://rococo-kleicha-a09f38.netlify.app/remoteEntry.js',
        exposedModule: './routes'
      }).then(m => m.routes)
  },
  {
    path: 'payment',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://warm-bienenstitch-c52710.netlify.app/remoteEntry.js',
        exposedModule: './routes'
      }).then(m => m.routes)
  },
  { path: '', redirectTo: 'policy', pathMatch: 'full' }
];