import React from 'react'
import "./PageHeader.scss"
import Title from '../Title/Title';
import BreadCrumbs from "../BreadCumbs/BreadCrumbs";

function PageHeader({title}) {
  return (
    <div className="gallery-image-banner">
      <div className="breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="gallery-title">
        <Title title={title}  />
      </div>
    </div>
  );
}

export default PageHeader