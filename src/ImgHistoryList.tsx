import * as React from 'react';
import './App.css';
import { Button, } from 'react-bootstrap';
import axios from 'axios';
 

export class ImgHistoryList extends React.Component  {

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
      <div className="container-fluid">
        <div className="row">
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
              {this.imgList.map((item: any, index) => {
                return <tr>
                  <th scope="row">{item.filename}</th>
                  <td>{item.url}</td>
                  {/* <td>{item.hash}</td> */}
                  {/* <td>{item.timestamp}</td> */}
                  <td><Button
                    variant="outline-danger"
                    onClick={() => this.delImg(item.delete, index)}
                  > 删除
                 </Button> </td>
                </tr>
              })}


            </tbody>
          </table>
        </div>
      </div>
    )
  }

  private delImg = async (delUrl: string, index: number) => {
    let { data, status, statusText, headers, config, request } = await
      axios.get(delUrl);
    console.log(data);
    console.log(status);
    console.log(statusText);
    console.log(headers);
    console.log(config);
    console.log(request);
    // 200
 
    if (status == 200) {
      this.imgList.splice(index, 1);

    }
    this.setState({})
  }

  private getImg = async () => {
    let { data, status, statusText, headers, config, request } = await
      axios.get('https://sm.ms/api/list');
    console.log(data);
    console.log(status);
    console.log(statusText);
    console.log(headers);
    console.log(config);
    console.log(request);
    this.imgList=data.data
    debugger
    this.setState({})
  }


 


  public componentDidMount() {
    this.getImg()
  }

}