import { ORDER_ACTION_TYPES, Order } from './order.types';
import { CartItem } from '../cart/cart.types';
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type CreateOrderStart = ActionWithPayload<
  ORDER_ACTION_TYPES.CREATE_ORDER_START,
  {
    items: CartItem[];
    total: number;
    subtotal: number;
    shipping: number;
    tax: number;
    paymentIntentId: string;
    userEmail: string;
  }
>;

export type CreateOrderSuccess = ActionWithPayload<
  ORDER_ACTION_TYPES.CREATE_ORDER_SUCCESS,
  Order
>;

export type CreateOrderFailed = ActionWithPayload<
  ORDER_ACTION_TYPES.CREATE_ORDER_FAILED,
  Error
>;

export type FetchOrdersStart = Action<ORDER_ACTION_TYPES.FETCH_ORDERS_START>;

export type FetchOrdersSuccess = ActionWithPayload<
  ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS,
  Order[]
>;

export type FetchOrdersFailed = ActionWithPayload<
  ORDER_ACTION_TYPES.FETCH_ORDERS_FAILED,
  Error
>;

export const createOrderStart = withMatcher(
  (orderData: {
    items: CartItem[];
    total: number;
    subtotal: number;
    shipping: number;
    tax: number;
    paymentIntentId: string;
    userEmail: string;
  }): CreateOrderStart =>
    createAction(ORDER_ACTION_TYPES.CREATE_ORDER_START, orderData)
);

export const createOrderSuccess = withMatcher(
  (order: Order): CreateOrderSuccess =>
    createAction(ORDER_ACTION_TYPES.CREATE_ORDER_SUCCESS, order)
);

export const createOrderFailed = withMatcher(
  (error: Error): CreateOrderFailed =>
    createAction(ORDER_ACTION_TYPES.CREATE_ORDER_FAILED, error)
);

export const fetchOrdersStart = withMatcher(
  (): FetchOrdersStart => createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_START)
);

export const fetchOrdersSuccess = withMatcher(
  (orders: Order[]): FetchOrdersSuccess =>
    createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS, orders)
);

export const fetchOrdersFailed = withMatcher(
  (error: Error): FetchOrdersFailed =>
    createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_FAILED, error)
);
