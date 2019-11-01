import { buildConfig } from "../config";

export const axiosConfig = {
  baseURL: buildConfig.baseUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
};
