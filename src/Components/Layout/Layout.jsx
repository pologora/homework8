import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <Outlet />
    </div>
  );
};
export default Layout;
