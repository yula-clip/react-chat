import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from '../containers/PrivateRoute';
import ChatPage from "../containers/ChatPage"
import WelcomePage from "../containers/WelcomePage"
import configureStore from '../store';
import history from '../utils/history';
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const store = configureStore();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: teal,
    secondary: teal,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/(welcome)?" component ={WelcomePage} />
          <PrivateRoute path="/chat/:chatId?" component ={ChatPage} />
          <Redirect to = "/" />
        </Switch>
      </Router>
  </Provider>
</MuiThemeProvider>
);


export default App;
