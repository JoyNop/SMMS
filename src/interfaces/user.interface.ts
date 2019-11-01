export interface IUserLogin {
  username: string; //	用户名 / 邮件地址
  password: string; //	密码
  remember?: boolean;
}

interface IImgItemBody {
  token: string; //必须		API Token
  RequestId: string; //	必须		请求ID
}

export interface IUserBody {
  username: string; //是		用户名 / 邮件地址
  password: string; //是		密码
  success: boolean; //必须		状态
  code: string; //必须
  message: string; //	必须		消息
  data?: Array<IImgItemBody>; //	非必须
}
