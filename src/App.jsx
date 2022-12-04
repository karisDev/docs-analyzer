import { ReactComponent as DataTransferSvg } from "./assets/waves.svg";
import logo from "./assets/logo/logo.webp";
import "./styles/componentStyles/mainPage.scss";

function App() {
  return (
    <div className="main_page">
      <div class="logo">
        <DataTransferSvg />
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
