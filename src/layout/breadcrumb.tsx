import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
import * as React from "react";
import { layoutConfig } from "./config";
import * as Style from "./style/breadcrumb.module.less";

const breadcrumbNameMap: any = layoutConfig.breadcrumb;
export const SMMSbreadcrumb = withRouter(props => {
  const { location } = props;
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);
  return (
    <div className={Style.demo}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
});
