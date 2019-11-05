import * as React from "react";
import { Upload, Icon } from "antd";
import _ from "lodash";
import axios from "axios";
import { RcUpload, CustomRequest } from "../../interfaces";
import { SMMSAPI } from "../../config";
import * as Style from "./upload.module.less";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadList } from "./uploadList";

const { Dragger } = Upload;

export class SMMSUpload extends React.Component {
  private SMMSAPI = new SMMSAPI();
  private listService = new UploadList();
  private fileList: Array<UploadFile> = [];

  private configImage = () => {
    const _this = this;
    let config: CustomRequest = {
      name: "file",
      showUploadList: true,
      action: "api/v2/upload",
      multiple: false,
      data: { format: "json" },
      // headers: {
      //   Authorization: "$prefix $token"
      // },
      onStart(file: UploadFile) {
        console.log("statr");

        _this.getBase64(file).then(res => {
          debugger;
          let imgItem: UploadFile = file;
          imgItem.thumbUrl = res as string;
          console.log(res);
          _this.fileList = _.concat(_this.fileList, [imgItem]);
          console.log(_this.fileList);
          _this.setState({});
        });
      },
      onSuccess(ret: any, file: UploadFile) {
        console.log(ret);
        console.log("onSuccess");
      },
      onError(err: Error) {
        console.log("onError", err);
      },
      onProgress(percent: { percent: any }, file: UploadFile) {
        console.log("onProgress", `${percent.percent}%`, file.name);
        // _this.fileList[5]
      },
      customRequest(exReq: RcUpload) {
        let formData = new FormData();
        if (exReq.data) {
          //   Object.keys(exReq.data).forEach(key => {
          //     formData.append(key, exReq.data[key]);
          //     console.log(formData);
          //   });
          formData.append("smfile", exReq.file);
        }
        // let axiosHeaders = exReq.headers;
        const axiosConfig = {
          // withCredentials: true,
          // axiosHeaders,
          onUploadProgress: (upload: { total: any; loaded: any }) => {
            exReq.onProgress(
              {
                percent: Math.round(
                  (upload.loaded / upload.total) * 100
                ).toFixed(2)
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
    return config;
  };

  private getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  render() {
    return (
      <div className={Style.upload_container}>
        <Dragger
          {...this.configImage()}
          listType="picture"
          fileList={this.fileList}
        >
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击或拖动文件到该区域来进行上传</p>
          <p className="ant-upload-hint">
            5 MB max per file. 1[0] files max per request.
          </p>
        </Dragger>
      </div>
    );
  }

  componentDidMount() {}
}
