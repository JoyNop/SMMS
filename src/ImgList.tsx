import * as React from 'react';
import './App.css';
import { Button, } from 'react-bootstrap';
import axios from 'axios';
interface IImgProps {
  imgInfo: Array<any>
}

export class ImgList extends React.Component<IImgProps> {

  private imgList: Array<any> = [
    // {
    //   delete: "https://sm.ms/delete/vMGTesmDkxC6OuE",
    //   filename: "深度截图_deepin-terminal_20190423162853.png",
    //   hash: "vMGTesmDkxC6OuE",
    //   height: 600,
    //   ip: "119.163.144.123",
    //   path: "/2019/04/25/5cc160df7b5e5.png",
    //   size: 97104,
    //   storename: "5cc160df7b5e5.png",
    //   timestamp: 1556177119,
    //   url: "https://i.loli.net/2019/04/25/5cc160df7b5e5.png",
    //   width: 961
    // }
  ]
  public render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">FileName</th>
              <th scope="col">URL</th>
              {/* <th scope="col">Hash</th> */}
              {/* <th scope="col">TimeStamp</th> */}
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.imgList.map((item: any) => {
              return <tr>
                <th scope="row">{item.filename}</th>
                <td>{item.url}</td>
                {/* <td>{item.hash}</td> */}
                {/* <td>{item.timestamp}</td> */}
                <td><Button
                  variant="outline-danger"
                  onClick={() => this.delImg(item.delete)}
                > 删除
                 </Button> </td>
              </tr>
            })}


          </tbody>
        </table>
      </div>
    )
  }

  private delImg = async (delUrl: string) => {
    let { data, status, statusText, headers, config, request } = await
      axios.get(delUrl);
    console.log(data);
    console.log(status);
    console.log(statusText);
    console.log(headers);
    console.log(config);
    console.log(request);
    this.setState({})
  }

  // private getImg = async () => {
  //   let { data, status, statusText, headers, config, request } = await
  //     axios.get('https://sm.ms/api/list');
  //   console.log(data);
  //   console.log(status);
  //   console.log(statusText);
  //   console.log(headers);
  //   console.log(config);
  //   console.log(request);
  //   this.setState({})
  // }


  public componentWillReceiveProps(nextProps: Readonly<IImgProps>) {
    if (nextProps.imgInfo != this.props.imgInfo) {
      debugger
      this.imgList = nextProps.imgInfo
    }

    this.setState({})
  }


  public componentDidMount() {
    this.imgList = this.props.imgInfo
    console.log(this.imgList);
debugger
    this.setState({})
  }

}