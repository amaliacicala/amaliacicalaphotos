import { createApp } from 'vue';
import { registerPlugins } from './plugins';
import App from './App.vue';

const app = createApp(App);

const mount = async () => {
  await registerPlugins(app);

  app.mount('#app');
};

mount();
