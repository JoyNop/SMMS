import * as React from 'react'
import { connect } from "react-redux";
import { AppState } from "../../store";
import { loadPostsAction } from "../../actions/post_action";
// import store from "..";

interface IAppPropsx {
  posts?:any;
  loadPostsAction?: typeof loadPostsAction
  count?:any 
}
// store.dispatch(loadPostsAction)

class PostList extends React.Component<IAppPropsx >{
  render() {
    const { list } = this.props.posts
    console.log(list)
    return <div >
      {list.map((item: any,index:number) => {
        return <p key={index}>{item.title}</p>
      })}
    </div>
  }
}



const mapStateStateToProps = (state: AppState, ownProps: AppState) => {
  return {
    posts: state.posts  ,
    count: state.count
  }
}
export default connect(mapStateStateToProps)(PostList)