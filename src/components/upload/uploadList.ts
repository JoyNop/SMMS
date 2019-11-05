export class UploadList {
  private originList: Array<any> = [];

  public setList = (item: any) => {
    this.originList.push(item);
  };
}
