import axios from "../utils/axios";
import { IUserLogin } from "../interfaces";

export class SMMSAPI {
  public smmsLogin = (user: any) => {
    return axios.post("/v2/token", user);
  };
  public smmsHistory = () => {
    return axios.get("/v2/history");
  };
}
