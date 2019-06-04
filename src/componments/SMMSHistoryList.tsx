import * as React from 'react'
import { Table, Divider, Tag, Button, Popconfirm, message } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import axios from "axios";
interface IListInfo {
  delete: string
  filename: string
  hash: string
  height: number
  ip: string
  path: string
  size: number
  storename: string
  timestamp: number
  url: string
  width: number
}

interface IList {
  List: Array<IListInfo>
}


export class SMMSHistoryList extends React.Component {

  private historyList: Array<any> = []

  render() {

    const getLocalTime = (nS: any) => {
      return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    }

    const columns: ColumnProps<IListInfo>[] = [
      {
        title: 'Name',
        dataIndex: 'filename',
        key: 'filename',
        render: (text: React.ReactNode, record: any) => <a href={record.url} target="_blank">{text}</a>,
      },
      {
        title: 'StoreName',
        dataIndex: 'storename',
        key: 'storename',
      },
      {
        title: 'IP',
        dataIndex: 'ip',
        key: 'ip',
      },
      {
        title: 'Time',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: (text: string) => {
          return (
            <span>
              {getLocalTime(text)}
            </span>
          )
        }
      },
      // {
      //   title: 'Hash',
      //   dataIndex: 'hash',
      //   key: 'hash',
      // },
      // {
      //   title: 'Tags',
      //   key: 'tags',
      //   dataIndex: 'tags',
      //   render: (tags: { map: (arg0: (tag: any) => JSX.Element) => React.ReactNode; }) => (
      //     <span>
      //       {tags.map(tag => {
      //         let color = tag.length > 5 ? 'geekblue' : 'green';
      //         if (tag === 'loser') {
      //           color = 'volcano';
      //         }
      //         return (
      //           <Tag color={color} key={tag}>
      //             {tag.toUpperCase()}
      //           </Tag>
      //         );
      //       })}
      //     </span>
      //   ),
      // },
      {
        title: 'Delete',
        key: 'delete',
        render: (text: string, record: any) => (
          <span>
            <Popconfirm placement="top" title={'确认删除? \n 删除后仍可在历史记录中查看'} onConfirm={() => this.confirm(record.delete)} okText="Yes" cancelText="No">
              <Button type="danger" >删除</Button>
            </Popconfirm>
          </span>
        ),
      },
    ];
    return (
      <div style={{ marginTop: '15px' }}>
        <Table
          rowKey={record => record.hash}
          columns={columns}
          pagination={{ pageSize: 8 }}
          dataSource={this.historyList}
        /></div>
    )
  }
  private confirm = (url: string) => {
    this.delHistory(url)
  }

  private cancel = () => {
    message.error('Click on No');
  }


  private delHistory = (url: string) => {
    axios.get(url).then(res => {
      message.success('删除成功!');


      this.getHistoryList()
    })
      .catch(err => {
        console.log(err);
      })
  }

  private getHistoryList = () => {
    axios.get('https://sm.ms/api/list').then(res => {
      this.historyList = res.data.data
      this.setState({})
    })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getHistoryList()
  }
}
