import { Ilayout } from "./layout.interface";
export class layoutConfig {
  public static leftMenu: Array<Ilayout> = [
    { name: "联系人", link: "/friends", icon: "user" },
    { name: "对话", link: "/chat", icon: "message" },
    { name: "设置", link: "/setting", icon: "setting" },
    { name: "反馈", link: "/feedback", icon: "bug" }
  ];
}
