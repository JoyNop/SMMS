import axios from "../utils/axios";
import { IUserLogin } from "../interfaces";

export class SMMSAPI {
  public smmsLogin = (user: IUserLogin) => {
    return axios.post("api/v2/token", user);
  };
  public smmsHistory = () => {
    return axios.get("api/v2/history");
  };
}
