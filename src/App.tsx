import * as React from 'react'
import './App.css';
import { Jumbotron, } from 'react-bootstrap';
import axios from 'axios';
import { ImgList } from "./ImgList";


class App extends React.Component {
  private imgList:Array<any>=[]
  private formElem: any
  public render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>SMMS IMAGES UPLOAD</p>
           
            <form ref={o => this.formElem = o}>
              <input type="file"
                onChange={this.updateImg}
              className="btn btn-outline-success"
              name='testFile'
              />

            </form>
            {/* <Button variant="outline-success">UPLOAD</Button> */}
         
        </Jumbotron>
        <ImgList imgInfo={this.imgList}/>
      </div>
    );
  }
  private updateImg = (event:React.ChangeEvent<HTMLInputElement>) => {

    event.preventDefault()
    console.log(1);
    
    let fileData = new FormData() //待提交空formdata
    let param = new FormData(this.formElem);
    let FileInfo = param.get('testFile')
    if (FileInfo == null) {
      return;
    }
    fileData.append('smfile', FileInfo)
    
    let config = {
      // headers:{'Content-Type':'multipart/form-data'}
      headers: {
        'Content-Type': 'multipart/form-data;',
      }
    }; //添加请求头

    axios.post('https://sm.ms/api/upload', fileData, config)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data.code == 'success') {
          this.imgList.push(res.data.data)
          this.setState({})
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}



export default App;
