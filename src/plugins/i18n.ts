import { isRef } from 'vue';
import { createI18n, type I18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

const i18n: I18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'it',
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages
});

export const switchLanguage = (locale: string) => {
  if (isRef(i18n.global.locale)) {
    i18n.global.locale.value = locale;
  } else {
    i18n.global.locale = locale;
  }
};

export default i18n;
