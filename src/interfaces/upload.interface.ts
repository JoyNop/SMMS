export interface CustomRequest extends RcUpload {
  name?: string;
  style?: any;
  className?: string;
  disabled?: boolean;
  component?: any;
  supportServerRender?: boolean;
  showUploadList?: boolean;
  method?: string;
  directory?: boolean;
  accept?: string;
  multiple?: boolean;
  beforeUpload?: any;
  customRequest?: any;
  openFileDialogOnClick?: boolean;
  transformFile?: any;
}

export interface RcUpload {
  action: any;
  data?: any;
  file?: any;
  filename?: any;
  headers?: any;
  onReady?: any;
  onStart?: any;
  onError?: any;
  onProgress?: any;
  onSuccess?: any;
  withCredentials?: boolean;
}

export interface SMMSFileInfo {
  delete: string;
  filename: string;
  hash: string;
  height: number;
  ip: string;
  path: string;
  size: number;
  storename: string;
  timestamp: number;
  url: string;
  width: number;
}

interface SMMSFileList {
  List: Array<SMMSFileInfo>;
}
