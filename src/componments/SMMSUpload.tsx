import * as React from 'react'
import axios from "axios";
import { Modal, Button, Alert, Input, Icon, } from 'antd';
import * as copy from 'copy-to-clipboard';
const Search = Input.Search;

interface IUpload {
  upload: (list: any) => void
}
export class SMMSUpload extends React.Component<IUpload> {
  private visible: boolean = false
  private uploadUrl: string = ''
  private isCopy: boolean = false
  render() {
    return (
      <div className="ant-upload ant-upload-drag">
        <div
          onDragEnter={this.handleDragOver}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragOver}
          onDrop={this.handleFileSelect}
          className="ant-upload ant-upload-btn" role="button">
          <input type="file" accept="" style={{ display: 'none' }} />
          <div className="ant-upload-drag-container">
            <p className="ant-upload-drag-icon">
              <i aria-label="icon: inbox" className="anticon anticon-inbox">
                <svg viewBox="0 0 1024 1024" className="" data-icon="inbox" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z">
                  </path>
                </svg>
              </i>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">5 MB max per file. 1 files max per request.</p>
          </div>
        </div>

        <Modal
          title="系统消息:上传成功!"
          visible={this.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            // <Button key="back" onClick={this.handleCancel}>
            //   Return
            // </Button>,
            // <Button key="submit" type="primary"   onClick={this.handleOk}>
            //   Submit
            // </Button>,
          ]}
        >
          {this.isCopy ? <Alert
            message="成功复制到粘贴板!"
            description="现在您可以将链接粘贴到其他地方:)"
            type="success"
            showIcon
          /> : <Alert
              message='您可以在此处复制该图片链接'
              description="点击[复制]按钮,一键复制到粘贴板."
              type="info"
              showIcon
            />
          }

          <Search
            style={{ marginTop: '20px' }}
            enterButton={
              <Icon type="copy" />
            }
            size="large"
            defaultValue={this.uploadUrl}
            onSearch={value => this.copyUrl(value)}
          />
        </Modal>
      </div>
    )
  }

  private copyUrl = (url: string) => {
    copy(this.uploadUrl, {
      debug: true,
      message: 'Press #{key} to copy',
    });
    this.isCopy = true
    this.setState({})
  }

  private handleOk = () => {
    this.visible = false
    this.setState({});
  };

  private handleCancel = () => {
    this.visible = !this.visible
    this.setState({});
  }


  private handleDragOver = (e: any) => {
    try {
      if ('preventDefault' in e) {
        e.stopPropagation();
        e.preventDefault();
      }
    } catch (error) {
      console.log(error);
    }
  }

  private handleFileSelect = (e: any) => {
    if ('preventDefault' in e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const files = e.target.files || e.dataTransfer.files;
    const fileList = Object.keys(files).map(file => files[file]);
    if (fileList.length > 0) {
      this.uploadImg(fileList[0])
    }
  }

  private uploadImg = (FileInfo: any) => {
    let fileData = new FormData() //待提交空formdata
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
        if (res.data.code == 'success') {
          this.uploadUrl = res.data.data.url

          this.props.upload(res.data.data)
          this.handleCancel()
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

}