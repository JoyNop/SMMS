import * as React from 'react'
import { SMMSUpload } from "../componments/SMMSUpload";
import { SMMSUploadList } from "../componments/SMMSUploadList";
import { SMMSHistoryList } from "../componments/SMMSHistoryList";
import { Row, Col, Slider } from 'antd';
export class SMMSIndex extends React.Component {
  private list: Array<any> = []
  render() {
    return (
      <div>
        <SMMSUpload upload={this.getUploadInfo} />
        <Row gutter={16}>
          <Col span={12} ><SMMSUploadList list={this.list} /></Col>
          <Col span={12} ><SMMSHistoryList /></Col>
        </Row>
      </div>
    )
  }
  private getUploadInfo = (list: any) => {
    this.list.push(list)
    this.setState({})
  }
}
