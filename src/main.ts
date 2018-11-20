import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeObjects } from './app/models/base.object.data';

if (environment.production) {
  enableProdMode();
}
initializeObjects();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

