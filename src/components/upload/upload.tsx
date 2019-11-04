import * as React from "react";
import { Upload, Icon, message } from "antd";
import axios from "axios";
import { RcUpload } from "../../interfaces";
import { SMMSAPI } from "../../config";

const { Dragger } = Upload;

const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  }
];
const uploadProps = {
  name: "file",
  // multiple: true,
  showUploadList: true,
  // listType: 'picture',
  // fileList: FileList,
  // action: 'api/v2/upload',
  multiple: false,
  data: { format: "json" },
  headers: {
    Authorization: "$prefix $token"
  },
  onStart(file: any) {
    console.log("onStart", file, file.name);
  },
  onSuccess(ret: any, file: any) {
    console.log("onSuccess", ret, file.name);
    // console.log(file);
    // FileList.push(file)
  },
  onError(err: any) {
    console.log("onError", err);
  },
  onProgress(percentx: { percent: any }, file: any) {
    console.log("onProgress", `${percentx.percent}%`, file.name);
  },
  customRequest(exReq: RcUpload) {
    let formData = new FormData();
    if (exReq.data) {
      console.log(exReq);

      //   Object.keys(exReq.data).forEach(key => {
      //     formData.append(key, exReq.data[key]);
      //     console.log(formData);
      //   });
      formData.append("smfile", exReq.file);
    }
    let axiosHeaders = exReq.headers;
    const axiosConfig = {
      // withCredentials: true,
      // axiosHeaders,
      onUploadProgress: (upload: { total: any; loaded: any }) => {
        exReq.onProgress(
          {
            percent: Math.round((upload.loaded / upload.total) * 100).toFixed(2)
          },
          exReq.file
        );
      }
    };

    axios
      .post(exReq.action, formData, axiosConfig)
      .then(({ data: response }) => {
        exReq.onSuccess(response, exReq.file);
      })
      .catch(exReq.onError);

    return {
      abort() {
        console.log("upload progress is aborted.");
      }
    };
  }
};

export class SMMSUpload extends React.Component {
  private SMMSAPI = new SMMSAPI();
  render() {
    return (
      <div>
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </div>
    );
  }
  componentDidMount() {}
}
