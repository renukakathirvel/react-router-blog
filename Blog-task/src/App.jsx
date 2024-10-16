import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from "./Components/Menu";
import AllCom from "./Components/AllCom";
import FullStackDev from "./Components/FullStackDev";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";
import { CardData } from "./data";

function App() {
  let data = CardData;
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<AllCom data={data}/>}></Route>
          <Route
            path="/fullStackDevelopment"
            element={<FullStackDev data={data}/>}
          ></Route>
          <Route path="/dataScience" element={<DataScience data={data}/>}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;