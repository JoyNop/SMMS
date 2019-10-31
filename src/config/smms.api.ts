import axios from "../utils/axios";
import { IUserLogin } from "../interfaces";

export class SMMSAPI {
  public smmsLogin = (user: IUserLogin) => {
    return axios.post("/v2/token", user);
  };
}
