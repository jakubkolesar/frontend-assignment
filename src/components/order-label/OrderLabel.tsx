import classes from "./OrderLabel.module.scss";
import { CompletedOrderState } from "../../api/enums/completed-order-state";
import { PendingOrderState } from "../../api/enums/pending-order-state";
import { useTranslation } from "react-i18next";

interface OrderLabelProps {
  label: string;
}
const OrderLabel = (props: OrderLabelProps) => {
  const { t } = useTranslation();
  const getLabel = (key: string): string => {
    switch (key) {
      case CompletedOrderState.COMPLETED:
        return t("orderItem.state.completed");
      case CompletedOrderState.CANCELED:
        return t("orderItem.state.canceled");
      case CompletedOrderState.REJECTED:
        return t("orderItem.state.rejected");
      case CompletedOrderState.EXPIRED:
        return t("orderItem.state.expired");
      case CompletedOrderState.FAILED:
        return t("orderItem.state.failed");
      case PendingOrderState.NEW:
        return t("orderItem.state.new");
      case PendingOrderState.WAITING:
        return t("orderItem.state.waiting");
      case PendingOrderState.CONFIRMED:
        return t("orderItem.state.confirmed");
      default:
        return "-";
    }
  };

  return (
    <div className={classes.label}>
      <p className={"text-smallest"}>{getLabel(props.label)}</p>
    </div>
  );
};
export default OrderLabel;
