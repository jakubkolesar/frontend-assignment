import { Fastfood, ListAlt, Translate } from "@mui/icons-material";
import classes from "./MainMenu.module.scss";
import { Route } from "../../api/models/app/route";
import MenuItemComponent from "./MenuItemComponent";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainMenu = () => {
  const { t, i18n } = useTranslation();

  const routes: Route[] = [
    {
      icon: <ListAlt />,
      title: t("menu.orders"),
      path: "",
    },
  ];

  const getOppositeLanguage = () => {
    return i18n.resolvedLanguage === "en" ? "sk" : "en";
  };

  const switchLanguageHandler = () => {
    // if (dispatch) {
    //   dispatch({ type: LanguageActionKind.SWITCH });
    // }
    i18n.changeLanguage(getOppositeLanguage());
  };

  return (
    <div className={classes["menu-row"]}>
      <Fastfood className={classes.logo} />
      <div className={classes["right"]}>
        {routes.map((route) => {
          return (
            <NavLink to={route.path} key={route.path}>
              {({ isActive }) => {
                return (
                  <MenuItemComponent
                    icon={route.icon}
                    title={route.title}
                    isActive={isActive}
                  />
                );
              }}
            </NavLink>
          );
        })}
        {/* language switcher in menu-item style */}
        <MenuItemComponent
          icon={<Translate />}
          title={getOppositeLanguage().toUpperCase()}
          onClick={switchLanguageHandler}
        />
      </div>
    </div>
  );
};
export default MainMenu;
