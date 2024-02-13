import { OrdersResponse } from "../../api/models/responses/orders-response";
import classes from "./OrderItem.module.scss";
import { AccessTime, CalendarMonth, Cancel } from "@mui/icons-material";
import Moment from "react-moment";
import { OrderItem } from "../../api/models/responses/order-item";
import OrderLabel from "../order-label/OrderLabel";
import { useTranslation } from "react-i18next";

interface OrderItemProps {
  data: OrdersResponse;
}

const OrderItemComponent = (props: OrderItemProps) => {
  const { t, i18n } = useTranslation();

  const { data } = props;

  const getCurrencySymbol = (currency: string) => {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currencyDisplay: "narrowSymbol",
      currency,
    })
      .formatToParts(0)
      .filter((part) => part.type === "currency")
      .map((part) => part.value)
      .join("");
  };
  const getTranslation = (item: OrderItem): string => {
    const resolvedLanguage = i18n.resolvedLanguage;
    const translationKeys = Object.keys(item.orderMenuItem.translations);
    if (
      resolvedLanguage &&
      translationKeys
        .map((item) => item.toLowerCase())
        .some((translation) =>
          i18n.languages.map((item) => item.toLowerCase()).includes(translation)
        )
    ) {
      return item.orderMenuItem.translations[resolvedLanguage].name;
    } else if (translationKeys.length >= 1) {
      return item.orderMenuItem.translations[translationKeys[0]].name;
    }
    return "[menu-item]";
  };

  return (
    <div className={classes["card"]}>
      {/* HEADER */}
      <div className={classes.header}>
        <p className={`text-medium`}>{data.id}</p>
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
              <div className={classes.item} key={orderItem.id}>
                <div className={classes.left}>
                  <p className={`text-small ${classes.quantity}`}>
                    {orderItem.quantity}x
                  </p>
                  <p className={"text-small"}>{getTranslation(orderItem)}</p>
                </div>
                <div className={classes.right}>
                  <p className={"text-small"}>
                    {getCurrencySymbol(orderItem.finalPrice.currency)}
                    {orderItem.finalPrice.amount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* TOTAL */}
        <div className={classes.total}>
          <p className={"text-small"}>{t("orderItem.total")}</p>
          <p className={"text-small"}>
            {getCurrencySymbol(data.payment.amount.currency)}
            {data.payment.amount.amount}
          </p>
        </div>
        {/* STATE */}
        <div className={classes.state}>
          <button className={"text-small"}>
            <Cancel />
            {t("orderItem.cancel")}
          </button>
          <OrderLabel label={data.state} />
        </div>
      </div>
    </div>
  );
};
export default OrderItemComponent;
