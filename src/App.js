import "./App.css";
import Header from "./components/header";
import Departments from "./components/departments";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import departments_info from "./components/departmentsInfoArray";
import DepartmentInfo from "./components/departmentInfo";
import About from "./components/about";
import Donate from "./components/Donate";
import PanelMembers from "./components/panelMembers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/departments/:department"
          element={<DepartmentInfo departments_info={departments_info} />}
        />
        <Route
          path="/departments"
          element={<Departments departments_info={departments_info} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about/panel-members" element={<PanelMembers />} />
      </Routes>
      <footer>
        <div className="footer-box">
          <p className="footer-rights">#all rights reserved by MPSCRC.</p>
          <p>credits</p>
          <p>Yasrib Proyas</p>
          <p>Sayad Rahman Rayan</p>
          <p>Talukder Shabab Mosharof Purno</p>
          <p>Tarannum Nubah</p>
          <p>MD Sami Patwary</p>
          <p>Wasik Alam</p>
          <p className="footer-email">CONTACT US - panel.mpscrc@gmail.com</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
