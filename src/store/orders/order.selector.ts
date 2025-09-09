import { createSelector } from 'reselect';

import { RootState } from '../store';
import { OrdersState } from './order.types';

const selectOrderReducer = (state: RootState): OrdersState => state.orders;

export const selectOrders = createSelector(
  [selectOrderReducer],
  (ordersSlice) => ordersSlice.orders
);

export const selectOrdersIsLoading = createSelector(
  [selectOrderReducer],
  (ordersSlice) => ordersSlice.isLoading
);

export const selectOrdersError = createSelector(
  [selectOrderReducer],
  (ordersSlice) => ordersSlice.error
);

export const selectOrderById = (orderId: string) =>
  createSelector([selectOrders], (orders) =>
    orders.find((order) => order.id === orderId)
  );

export const selectRecentOrders = createSelector([selectOrders], (orders) =>
  orders.slice(0, 5)
);

export const selectOrdersByStatus = (status: string) =>
  createSelector([selectOrders], (orders) =>
    orders.filter((order) => order.status === status)
  );
