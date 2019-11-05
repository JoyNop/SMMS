import React, { Component } from "react";
import { Typography, Divider, Alert } from "antd";
import * as Style from "./about.module.less";

const { Title, Paragraph } = Typography;
export class SMMSAbout extends Component {
  render() {
    return (
      <Typography className={Style.about_container}>
        <Title>关于JoyNop.SMMS图床</Title>
        <Divider />
        <Paragraph>
          <Alert
            message="JoyNop.SM.MS ."
            description={
              <div>
                <p>
                  SM.MS免费图床仅供分享图片使用，我们保留随时删除图片并举报上传违规图片者的权利.
                </p>
                <p>
                  JoyNop.SM.MS为广大用户提供一个更加便捷的SM.MS上传途径.JoyNop本身不提供任何图片业务
                </p>
              </div>
            }
            type="success"
            showIcon
          />
          <Divider />
          <Alert
            message={"严禁上传及分享如下类型的图片"}
            description={
              <ul>
                <li>含有色情、暴力、宣扬恐怖主义的图片</li>
                <li> 侵犯版权、未经授权的图片</li>
                <li>其他违反中华人民共和国法律的图片</li>
                <li> 其他违反香港法律的图片 </li>
              </ul>
            }
            type="error"
            showIcon
          />

          <Divider />
          <Alert
            message="其他"
            description={
              "违规图片投诉邮箱 abuse@loli.net Telegram 群 @smms_images"
            }
            type="info"
            showIcon
          />
        </Paragraph>
      </Typography>
    );
  }
}
