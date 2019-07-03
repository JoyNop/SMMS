import * as React from 'react';
import './App.css'; 
import { connect } from "react-redux";
import { addCount ,delCount} from "./store/actions";
import { AppState } from "./store";
import  Bar  from "./component/layout/bar";



interface IAppProps{
  count: number;
  addCount: typeof addCount
  delCount:typeof delCount
}

class App extends React.Component<IAppProps > {
  public render() {
    const {count }=this.props
    return (
      <div className="App">
        <p>{count}</p>
        8888
        <button onClick={this.submit}>+</button>
        <button onClick={this.delsubmit}>-</button>
        <Bar /> 
      </div>
    );
  }
  private submit = () => {
    this.props.addCount()
  }

  private delsubmit = () => {
    this.props.delCount()
  }
}


const mapStateToProps = (state:AppState) => ({
  count:state.count
})


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps,{addCount,delCount})(App);
