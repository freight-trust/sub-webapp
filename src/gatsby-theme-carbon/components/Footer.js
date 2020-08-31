 /* eslint-disable */ 
 import Footer from "gatsby-theme-carbon/src/components/Footer";
 import React from "react";
 import { footerContent, footerRow, footerLinkCol, footerButtonCol, footerLastRow, footerFollowSection } from './Footer.module.scss';
 
 const Content = ({ buildTime }) => (
   <>
     <p>
       Last updated {buildTime}
       <br />
       Copyright © {new Date().getFullYear()} FreightTrust & Clearing Corporation.
     </p>
   </>
 );

 const IBMLogo = () => (
  <svg
    className={logo}
    width="81"
    height="32"
    xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
      <path d="" />
    </g>
  </svg>
);
 
 const links = {
   firstCol: [
     {
       href: "https://www.freighttrust.com",
       linkText: "Corporate",
     },
     { href: "https://ft-docs.netlify.app", linktext: "Documentation" },
     { href: "https://github.com/freight-trust", linktext: "Open Source" },
     { href: "https://github.com/freight-chain", linktext: "Community" },
   ],
   secondCol: [
    { href: "https://github.com/freight-trust/editoken", linktext: "$EDI Token" },
    { href: "https://github.com/freight-trust/security", linktext: "Security" }
   ]
   
 };
 
 const CustomFooter = () => <Footer links={links} Content={Content} />;
 
 export default CustomFooter;