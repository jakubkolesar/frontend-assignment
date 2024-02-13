import classes from "./OrderTypeSwitcher.module.scss";
import { OrderType } from "../../api/enums/order-type";
import { useTranslation } from "react-i18next";

interface OrderTypeSwitcherProps {
  state: OrderType;
  onStateChange: (state: OrderType) => void;
}
const OrderTypeSwitcher = (props: OrderTypeSwitcherProps) => {
  const { t } = useTranslation();
  const stateChangeHandler = (state: OrderType) => {
    props.onStateChange(state);
  };

  return (
    <div className={classes.switcher}>
      {Object.entries(OrderType).map(([label, state]) => {
        return (
          <button
            key={label}
            className={`${
              props.state === state ? classes.active : ""
            } text-normal`}
            onClick={() => {
              stateChangeHandler(state);
            }}
          >
            {t(`switcher.${state.toLowerCase()}`)}
          </button>
        );
      })}
    </div>
  );
};

export default OrderTypeSwitcher;
