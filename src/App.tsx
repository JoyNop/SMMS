import * as React from 'react'
import './App.css';
import { Jumbotron, Modal, Nav, Button, Alert, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { ImgList } from "./ImgList";
import { ImgHistoryList } from "./ImgHistoryList";
import * as CopyToClipboard from 'react-copy-to-clipboard';

class App extends React.Component {
  private imgList: Array<any> = []
  private formElem: any
  private appState: boolean = false
  private imgUrl: string = ''
  private alertVariant: any = 'primary'
  private alertMsg = '您可以在此处复制该图片链接'
  private showTab: number = 0

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

        <Nav variant="tabs" >
          <Nav.Item onClick={() => this.changeTab(0)}>
            <Nav.Link>当前上传</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => this.changeTab(1)}>
            <Nav.Link  >历史上传</Nav.Link>
          </Nav.Item>
        </Nav>
        {this.showTab == 0 ?
          <ImgList imgInfo={this.imgList} /> :
          <ImgHistoryList />
        }

        <Modal show={this.appState} onHide={() => this.optDialog(false)}>
          <Modal.Header closeButton>
            <Modal.Title>上传成功!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant={this.alertVariant}>
              {this.alertMsg}
            </Alert>
            <p></p>
            <br />
            <p>
              <InputGroup className="mb-3">
                <FormControl
                  value={this.imgUrl}
                  placeholder="图片链接"
                />
                <InputGroup.Append>
                  <CopyToClipboard text={this.imgUrl} onCopy={() => this.changeAlert('已复制到剪贴板', 'success')}>
                    <Button variant="outline-secondary" >复制</Button>
                  </CopyToClipboard>
                </InputGroup.Append>
              </InputGroup>
            </p>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={() => this.optDialog(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.optDialog(true)}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>

      </div>
    );
  }
  private changeTab = (num: number) => {

    this.showTab = num

    this.setState({})
  }

  private changeAlert(msg: string, color: string) {
    this.alertMsg = msg
    this.alertVariant = color
    this.setState({})
  }

  private optDialog = (state: boolean) => {
    this.alertMsg = '您可以在此处复制该图片链接'
    this.alertVariant = 'primary'
    debugger
    switch (state) {
      case true:
        this.appState = true
        break;
      case false:
        this.appState = false;
        break;
      default:

    }
    this.setState({})
  }
  private updateImg = (event: React.ChangeEvent<HTMLInputElement>) => {

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
          this.imgUrl = res.data.data.url
          this.optDialog(true)

          this.setState({})
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}



export default App;
