import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ThemeProvider } from "styled-components";
import { darkTheme } from '../src/style/theme'


// pass ThemeProvider and array of your themes to decorator

initialize({
  onUnhandledRequest: 'bypass'
});

const dark = withThemes(ThemeProvider, [darkTheme])

export const decorators = [mswDecorator, dark];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs:{
    theme: themes.dark
  }
}