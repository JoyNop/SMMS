import * as React from 'react'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


export class SMMSFooter extends React.Component {
  render() {
    return (
      <Footer className='footer'>
        SMMS-IO ©2019 Created by
        <a href="http://www.joynop.com" target="_blank" rel="noopener noreferrer">
        JoyNop.COM
        </a>
      </Footer>
    )
  }
}
