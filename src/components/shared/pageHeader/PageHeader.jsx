import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathName = useLocation().pathname;
  let folderName = "";
  let fileName = "";
  if (pathName === "/") {
    folderName = "Dashboard";
    fileName = "Dashboard";
  } else {
    folderName = pathName.split("/")[1];
    fileName = pathName.split("/")[2];
  }
  return (
    <div className="page-header">
      <div className="page-header-left d-flex align-items-center">
        <div className="page-header-title">
          <h5 className="m-b-10 text-capitalize">{folderName}</h5>
        </div>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="breadcrumb-item text-capitalize">{fileName}</li>
        </ul>
      </div>
    </div>
  );
};

export default PageHeader;
