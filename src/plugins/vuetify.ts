import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from 'vuetify';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    white: '#FFFDFC',
    background: '#252522',
    primary: '#f18257',
    secondary: '#75ba86',
    accent: '#cf6895',
    error: '#E7004C',
    'on-primary': '#252522'
  },
  variables: {
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 0.74,
    'disabled-opacity': 0.5
  }
};

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme
    }
  },
  display: {
    mobileBreakpoint: 'md'
  }
});
