import { Outlet } from "react-router-dom";
import MainMenu from "../components/menu/MainMenu";
import classes from "./RootLayout.module.scss";
const RootLayout = () => {
  return (
    <div className={classes["content-wrapper"]}>
      <MainMenu />
      <Outlet />
    </div>
  );
};
export default RootLayout;
