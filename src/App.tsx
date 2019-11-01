import React from "react";
import "./App.less";
import { SMMSLogin, Home } from "./routers/index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "./layout";
import { PrivateRoute } from "./utils/privateRoutes";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={SMMSLogin} />
            {/* <Route exact path='/signin' component={DbCloudSignin} /> */}
            <MainLayout {...this.props}>
              <PrivateRoute isSignIn={true} exact path="/" component={Home} />
              {/* <PrivateRoute isSignIn={true} exact path='/feedback' component={FeedBack} /> */}
            </MainLayout>
            {/* <Route render={() => {
                return <p>Not Found</p>
              }} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
