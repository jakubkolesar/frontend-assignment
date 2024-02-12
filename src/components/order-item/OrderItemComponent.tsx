import { OrdersResponse } from "../../api/models/responses/orders-response";
import { Languages, useLanguage } from "../../store/LanguageProvider";
import classes from "./OrderItem.module.scss";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import Moment from "react-moment";
import { OrderItem } from "../../api/models/responses/order-item";

interface OrderItemProps {
  data: OrdersResponse;
}

const OrderItem = (props: OrderItemProps) => {
  const language = useLanguage();
  const { data } = props;

  const getTranslation = (item: OrderItem): string => {
    console.log(Object.keys(Languages));
    Object.keys(item.orderMenuItem.translations).some((translation) =>
      Object.keys(Languages).includes(translation)
    );
    return "";
  };

  return (
    <div className={classes["order-item"]}>
      {/* HEADER */}
      <div className={classes.header}>
        <p className={`text-normal`}>{data.id}</p>
      </div>
      {/* BODY */}
      <div className={classes.body}>
        {/* DATE INFO */}
        <div className={classes["date-info"]}>
          <div className={classes["info-container"]}>
            <CalendarMonth />
            <Moment
              date={data.createdAt}
              format={"DD/MM/YYYY"}
              className={"text-small"}
            />
          </div>
          <div className={classes["info-container"]}>
            <AccessTime />
            <Moment
              date={data.createdAt}
              format={"hh:mm"}
              className={"text-small"}
            />
          </div>
        </div>
        {/* ITEMS */}
        <div className={classes["order-items"]}>
          {data.orderItems.map((orderItem) => {
            return (
              <div className={classes.item}>
                <p>
                  {orderItem.orderMenuItem.quantity}x{" "}
                  {getTranslation(orderItem)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
