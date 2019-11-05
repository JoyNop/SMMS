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
