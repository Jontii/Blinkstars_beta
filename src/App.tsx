import MomentUtils from '@date-io/moment';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';
import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import CookiesNotification from 'src/components/CookiesNotification';
import GlobalStyles from 'src/components/GlobalStyles';
import GoogleAnalytics from 'src/components/GoogleAnalytics';
import ScrollReset from 'src/components/ScrollReset';
import SettingsNotification from 'src/components/SettingsNotification';
import { AuthProvider } from 'src/contexts/JWTAuthContext';
import useSettings from 'src/hooks/useSettings';
import routes, { renderRoutes } from 'src/routes';
import { createTheme } from 'src/theme';
import useAuth from './hooks/useAuth';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const history = createBrowserHistory();

const App: FC = () => {
  const { settings } = useSettings();

  const { user } = useAuth();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider dense maxSnack={3}>
            <Router history={history}>
              <AuthProvider>
                <GlobalStyles />
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                <SettingsNotification />
                {renderRoutes(routes)}
              </AuthProvider>
            </Router>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
