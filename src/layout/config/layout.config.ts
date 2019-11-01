import { Ilayout } from "./layout.interface";
export class layoutConfig {
  public static menu: Array<Ilayout> = [
    { name: "Home", link: "/", icon: "home" },
    { name: "About", link: "/about", icon: "about" },
    { name: "Contact", link: "/contact", icon: "contact" }
    // { name: "反馈", link: "/feedback", icon: "bug" }
  ];
}
