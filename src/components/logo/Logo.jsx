import React from 'react';

export default function Logo({ type = "default" }) {
  const defaultUrl = "./images/logo.svg";
  const mutedtUrl = "./images/logo-muted.svg";

     if (type === "default") { 
       return React.createElement("img", { src: defaultUrl }, null); 
   } 

   return React.createElement("img", { src: mutedtUrl }, null); 
 }

