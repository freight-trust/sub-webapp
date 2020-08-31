import AuthForm from "../../../components/AuthForm";
import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/freight-trust/truenft",
  },
  {
    title: "Freight Trust",
    href: "https://www.freighttrust.com",
  },
];

const CustomResources = () => {
  return (
    <>
      <AuthForm />
      <ResourceLinks shouldOpenNewTabs links={links} />
    </>
  );
};

export default CustomResources;
