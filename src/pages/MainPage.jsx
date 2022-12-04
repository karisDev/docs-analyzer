import React from "react";
import TopNavbar from "../components/ui/TopNavbar";
import { ReactComponent as DataTransferSvg } from "../assets/waves.svg";
import UploadCard from "../components/cards/uploadCard";

const MainPage = () => {
  return (
    <div className="main_page">
      <div className="wave_bg">
        <DataTransferSvg />
      </div>
      <div className="content">
        <TopNavbar title={"отчёт"} />
        <div className="upload_holder">
          <UploadCard />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
