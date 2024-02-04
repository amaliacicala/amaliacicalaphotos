import { createPinia } from 'pinia';
import vuetify from './vuetify';
import router from '../router';
import i18n from './i18n';

import type { App } from 'vue';

export const registerPlugins = async (app: App) => {
  app.use(vuetify).use(router).use(i18n).use(createPinia());
  return Promise.resolve();
};
