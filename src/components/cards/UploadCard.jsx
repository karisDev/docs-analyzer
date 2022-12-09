import React from "react";

const UploadCard = () => {
  return (
    <div className="upload_card">
      <h2>ЗАГРУЗКА</h2>
      <div className="content">
        <p>
          Для анализа документа перенесите его
          <br />
          <span>(.pdf .word .wordx)</span>
        </p>
        <div className="choose">
          <div className="option">
            <div className="sep" />
            <p>ИЛИ</p>
            <div className="sep" />
          </div>
          <button className="main_btn">Выбрать документ</button>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
