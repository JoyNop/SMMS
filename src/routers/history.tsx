import React, { Component } from "react";
import axios from "../utils/axios";

export class JOYSMMSHistory extends Component {
  private historyList: Array<any> = [];
  render() {
    return (
      <div>
        <input
          type="file"
          name="file"
          id="file"
          onChange={e => this.onchange(e)}
        />
        {this.historyList.map(history => (
          <p>{history.id}</p>
        ))}
      </div>
    );
  }
  onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files);
    if (e.currentTarget.files) {
      let file: any = e.currentTarget.files[0];
      let formData = new FormData();
      formData.append("smfile", file);
      axios
        .post("/api/upload", formData)
        .then(res => {})
        .catch(err => {
          console.log(err.response);
        });

      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // })
    }
  };
  componentDidMount() {
    try {
      axios
        .get("https://sm.ms/api/v2/history", {
          headers: {
            // User_Agent: 'User-Agent:Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27',
            // Accept: 'application/json',
            // 'Content-Type': formData.getHeaders()['content-type'],
          }
        })
        .then(res => {
          this.historyList = res.data;
          console.log(res.data);
          console.log(res.data);
          this.setState({});
        })
        .catch(err => {
          console.log(err, "history");
        });
    } catch (error) {
      console.log(error, "did");
    }
  }
}
