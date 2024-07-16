import { Feed } from "../Feed/Feed";
import { Footer } from "../Footer/Footer";
import { Loggin } from "../Loggin/Loggin";
import { NavBar } from "../NavBar/NavBar";
import { Register } from "../Register/Register";
import { SideBar } from "../SideBar/SideBar";
import styles from "./AppUI.module.css";
import { Routes, Route } from "react-router-dom";
const AppUI = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <div className={styles.mainView}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export { AppUI };
