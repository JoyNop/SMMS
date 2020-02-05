import * as React from "react";
import { Upload, Icon, message, Modal, Button, Alert, Input } from "antd";
import _ from "lodash";
import axios from "axios";
import { RcUpload, CustomRequest, SMMS_V2_PicReq } from "../../interfaces";
import { SMMSAPI } from "../../config";
import * as Style from "./upload.module.less";
import { UploadFile } from "antd/lib/upload/interface";
import copy from "copy-to-clipboard";
const Search = Input.Search;
const { Dragger } = Upload;

export class SMMSUpload extends React.Component {
  private SMMSAPI = new SMMSAPI();
  private fileList: Array<UploadFile> = [];
  private visible: boolean = false;
  private uploadUrl: string = "";
  private isCopy: boolean = false;
  private configImage = () => {
    const _this = this;
    let config: CustomRequest = {
      name: "file",
      showUploadList: true,
      action: "api/upload",
      multiple: false,
      // data: { format: "json" },
      // headers: {
      //   Authorization: "$prefix $token"
      // },
      onStart(file: UploadFile) {
        console.log("statr");

        // _this.getBase64(file).then(res => {
        //   let imgItem: UploadFile = file;
        //   imgItem.thumbUrl = res as string;
        //   imgItem.status = "uploading";
        //   _this.fileList = _.concat(_this.fileList, [imgItem]);
        //   _this.setState({});
        // });
      },
      onSuccess(ret: SMMS_V2_PicReq, file: UploadFile) {
        if (ret.success) {
          _this.fileList[_this.fileList.length - 1].url = ret.data.url;
          _this.fileList[_this.fileList.length - 1].status = "success";
          _this.uploadUrl = ret.data.url;
          _this.visible = false;
          console.log("onSuccess");
          _this.setState({});
        } else {
          message.warn(ret.message);
        }
      },
      onError(err: Error) {
        console.log("onError", err);
      },
      onProgress(percent: { percent: any }, file: UploadFile) {
        console.log("onProgress", `${percent.percent}%`, file.name);
        const nowPercent: number = Number(percent.percent);

        _this.fileList[_this.fileList.length - 1].percent = nowPercent;
        if (nowPercent === 100) {
          _this.fileList[_this.fileList.length - 1].status = "done";
        }
        _this.setState({});
      },
      customRequest(exReq: RcUpload) {
        let formData = new FormData();
        if (exReq.data) {
          //   Object.keys(exReq.data).forEach(key => {
          //     formData.append(key, exReq.data[key]);
          //     console.log(formData);
          //   });
          console.log(exReq);

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
          accept="image/*"
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
        <Modal
          title="系统消息:上传成功!"
          visible={this.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={
            [
              // <Button key="back" onClick={this.handleCancel}>
              //   Return
              // </Button>,
              // <Button key="submit" type="primary"   onClick={this.handleOk}>
              //   Submit
              // </Button>,
            ]
          }
        >
          {this.isCopy ? (
            <Alert
              message="成功复制到粘贴板!"
              description="现在您可以将链接粘贴到其他地方:)"
              type="success"
              showIcon
            />
          ) : (
            <Alert
              message="您可以在此处复制该图片链接"
              description="点击[复制]按钮,一键复制到粘贴板."
              type="info"
              showIcon
            />
          )}

          <Search
            style={{ marginTop: "20px" }}
            enterButton={<Icon type="copy" />}
            size="large"
            defaultValue={this.uploadUrl}
            onSearch={value => this.copyUrl(value)}
          />
        </Modal>
      </div>
    );
  }

  private copyUrl = (url: string) => {
    copy(this.uploadUrl, {
      debug: true,
      message: "Press #{key} to copy"
    });
    this.isCopy = true;
    this.setState({});
  };

  private handleOk = () => {
    this.visible = false;
    this.setState({});
  };

  private handleCancel = () => {
    this.visible = !this.visible;
    this.setState({});
  };
  componentDidMount() {}
}
