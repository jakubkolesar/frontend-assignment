import { MenuItem } from "../../api/models/app/menu-item";
import classes from "./MenuItemComponent.module.scss";

const MenuItemComponent = (props: MenuItem) => {
  return (
    <button
      className={`${classes.icon} ${
        props.isActive ? classes.active : ""
      } text-small`}
      onClick={props.onClick}
    >
      {props.icon}
      <p>{props.title}</p>
    </button>
  );
};
export default MenuItemComponent;
