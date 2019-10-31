import React from "react";
import "./App.less";
import { Button } from "antd";
import * as Style from "./a.module.less";
const App: React.FC = () => {
  return (
    <div className="App">
      hello world
      <Button>sadfsdfsad</Button>
      <div className={Style.Hello}>hellllllllllllllllllo</div>
    </div>
  );
};

export default App;
