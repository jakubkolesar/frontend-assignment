import classes from "./Orders.module.scss";
import OrderTypeSwitcher from "../../components/switcher/OrderTypeSwitcher";
import { useCallback, useEffect, useState } from "react";
import { OrderType } from "../../api/enums/order-type";
import { useHttp } from "../../hooks/use-http";
import { OrdersResponse } from "../../api/models/responses/orders-response";
import OrderItemComponent from "../../components/order-item/OrderItemComponent";
import OrderItemsGrid from "../../components/grids/OrderItemsGrid";

interface OrdersState {
  orderType: OrderType;
  ordersArray: OrdersResponse[];
  filteredOrders: OrdersResponse[];
}

const orderMap = new Map<OrderType, string[]>([
  [OrderType.PENDING, ["new", "waiting_for_confirmation", "confirmed"]],
  [
    OrderType.COMPLETED,
    ["completed", "canceled_by_customer", "failed", "rejected", "expired"],
  ],
]);

const Orders = () => {
  const [ordersState, setOrdersState] = useState<OrdersState>({
    orderType: OrderType.PENDING,
    ordersArray: [],
    filteredOrders: [],
  });
  const { isLoading, sendRequest } = useHttp();

  const handleTypeChange = (orderType: OrderType) => {
    setOrdersState((prevState) => ({
      orderType: orderType,
      ordersArray: prevState.ordersArray,
      filteredOrders: filterData(prevState.ordersArray, orderType),
    }));
  };

  const handleRequestData = useCallback((data: OrdersResponse[]) => {
    setOrdersState((prevState) => {
      return {
        orderType: prevState.orderType,
        ordersArray: data,
        filteredOrders: filterData(data, prevState.orderType),
      };
    });
  }, []);

  const filterData = (
    data: OrdersResponse[],
    orderType: OrderType
  ): OrdersResponse[] => {
    return data.filter((item) => orderMap.get(orderType)?.includes(item.state));
  };

  useEffect(() => {
    sendRequest(
      {
        url: "https://run.mocky.io/v3/531e769c-863c-45c8-8b52-634dd6bfe18d",
      },
      handleRequestData
    );
  }, [handleRequestData, sendRequest]);

  if (isLoading) {
    return (
      <div className={`${classes["items-holder"]} ${classes.loading}`}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <OrderTypeSwitcher
        state={ordersState.orderType}
        onStateChange={handleTypeChange}
      />
      <div className={classes["items-holder"]}>
        <div className={classes["scroll-holder"]}>
          <OrderItemsGrid>
            {ordersState.filteredOrders.map((item) => {
              return <OrderItemComponent key={item.id} data={item} />;
            })}
          </OrderItemsGrid>
        </div>
      </div>
    </>
  );
};
export default Orders;
