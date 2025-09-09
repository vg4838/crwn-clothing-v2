import { AnyAction } from 'redux';

import { OrdersState } from './order.types';

import {
  createOrderStart,
  createOrderSuccess,
  createOrderFailed,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailed,
} from './order.action';

export const ORDERS_INITIAL_STATE: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const ordersReducer = (
  state = ORDERS_INITIAL_STATE,
  action: AnyAction
): OrdersState => {
  if (createOrderStart.match(action) || fetchOrdersStart.match(action)) {
    return { ...state, isLoading: true, error: null };
  }

  if (createOrderSuccess.match(action)) {
    return {
      ...state,
      orders: [action.payload, ...state.orders],
      isLoading: false,
      error: null,
    };
  }

  if (fetchOrdersSuccess.match(action)) {
    return {
      ...state,
      orders: action.payload,
      isLoading: false,
      error: null,
    };
  }

  if (
    createOrderFailed.match(action) ||
    fetchOrdersFailed.match(action)
  ) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
