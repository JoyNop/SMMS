import * as React from 'react'
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;


export default class SMMSAbout extends React.Component {
  render() {
    return (
      <div>
        <Title>关于 SM.MS 图床</Title>
        <Paragraph>
          SM.MS 免费图床仅供分享图片使用，我们保留随时删除图片并举报上传违规图片者的权利
          </Paragraph>
        <Title level={2}> 严禁上传及分享如下类型的图片：</Title>

        <Paragraph>
          <ul>
            <li>
              含有色情、暴力、宣扬恐怖主义的图片
            </li>
            <li>
              侵犯版权、未经授权的图片
            </li>
            <li>
              其他违反中华人民共和国法律的图片
            </li>
            <li>
              其他违反香港法律的图片
               </li>
          </ul>
        </Paragraph>

        <Divider />
      </div>
    )
  }
}
