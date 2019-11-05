import { Ilayout } from "./layout.interface";
export class layoutConfig {
  public static menu: Array<Ilayout> = [
    { name: "Home", link: "/", icon: "home" },
    { name: "History", link: "/history", icon: "history" },
    { name: "About", link: "/about", icon: "about" },
    { name: "Contact", link: "/contact", icon: "contact" }
    // { name: "反馈", link: "/feedback", icon: "bug" }
  ];

  public static breadcrumb = {
    "/": "/",
    "/contact": "Contact",
    "/history": "History",
    "/about": "About",
    "/apps/1/detail": "Detail",
    "/apps/2/detail": "Detail"
  };
}
