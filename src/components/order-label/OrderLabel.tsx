import classes from "./OrderLabel.module.scss";
import { useTranslation } from "react-i18next";

interface OrderLabelProps {
  label: string;
}
const OrderLabel = (props: OrderLabelProps) => {
  const { t } = useTranslation();

  return (
    <div className={classes.label}>
      <p className={"text-smallest"}>{t(`orderItem.state.${props.label}`)}</p>
    </div>
  );
};
export default OrderLabel;
