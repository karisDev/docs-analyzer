import React from "react";
import TopNavbar from "../components/ui/TopNavbar";
import { ReactComponent as DataTransferSvg } from "../assets/waves.svg";

const MainPage = () => {
  return (
    <div className="main_page">
      <div className="wave_bg">
        <DataTransferSvg />
      </div>
      <TopNavbar title={"отчёт"} />
    </div>
  );
};

export default MainPage;
