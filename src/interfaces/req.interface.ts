enum statusCodeStr {
  error = "error",
  success = "success"
}

export interface SMMS_V2_PicReq extends SMMSBaseRequest {
  // data: Array<V2_PicReq>
  data: V2_PicReq;
}

interface SMMSBaseRequest {
  success: boolean; //必须		请求状态
  code: statusCodeStr; //必须		请求状态码 // error, success
  message: string;
  RequestId: string; //必须		请求ID
}

interface V2_PicReq {
  width: number; //必须		上传图片的宽度
  height: number; //	必须		上传图片的高度
  filename: string; //必须		文件名
  storename: string; //	必须		储存名
  size: number; //必须		图片大小
  path: string; //必须		路径
  hash: string; //	必须		图片删除HASH
  url: string; //必须		图片路径
  delete: string; //	必须		图片删除链接
  page: string; //必须		图片专属链接
}
