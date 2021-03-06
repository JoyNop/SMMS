import React from "react";
import "./App.less";
import {
  JOYSMMSLogin,
  JOYSMMSHome,
  JOYSMMSAbout,
  JOYSMMSHistory
} from "./routers/index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "./layout";
import { PrivateRoute } from "./utils/privateRoutes";

class App extends React.Component {
  render() {
    const isLogin = true;
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={JOYSMMSLogin} />
            {/* <Route exact path='/signin' component={DbCloudSignin} /> */}
            <MainLayout {...this.props}>
              <PrivateRoute
                isSignIn={isLogin}
                exact
                path="/"
                component={JOYSMMSHome}
              />
              <PrivateRoute
                isSignIn={isLogin}
                exact
                path="/about"
                component={JOYSMMSAbout}
              />
              <PrivateRoute
                isSignIn={isLogin}
                exact
                path="/history"
                component={JOYSMMSHistory}
              />
            </MainLayout>
            <Route
              render={() => {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
