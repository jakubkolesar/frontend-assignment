import { ReactElement } from "react";
import classes from "./OrderItemsGrid.module.scss";

const OrderItemsGrid = ({
  children,
}: {
  children: ReactElement | ReactElement[] | null;
}) => {
  return <div className={classes.grid}>{children}</div>;
};
export default OrderItemsGrid;
