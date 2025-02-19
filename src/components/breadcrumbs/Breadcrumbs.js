import React from 'react'
import "./breadcrumbsStyles.css";
import { Outlet } from 'react-router-dom';
import Top from '../top/Top';

function Breadcrumbs() {
  return (
    <>
        <Top/>
        <Outlet/>
    </>
  )
}

export default Breadcrumbs