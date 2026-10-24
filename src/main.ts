import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fontsource/syne/latin-400.css';
import '@fontsource/syne/latin-500.css';
import '@fontsource/syne/latin-600.css';
import '@fontsource/syne/latin-700.css';
import '@fontsource/syne/latin-800.css';
import '@fontsource/instrument-sans/latin-400.css';
import '@fontsource/instrument-sans/latin-400-italic.css';
import '@fontsource/instrument-sans/latin-500.css';
import '@fontsource/instrument-sans/latin-600.css';
import './styles/main.css';

createApp(App).use(router).mount('#app');
