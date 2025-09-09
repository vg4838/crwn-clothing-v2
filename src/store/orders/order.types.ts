import { CartItem } from '../cart/cart.types';

export enum ORDER_ACTION_TYPES {
  CREATE_ORDER_START = 'order/CREATE_ORDER_START',
  CREATE_ORDER_SUCCESS = 'order/CREATE_ORDER_SUCCESS',
  CREATE_ORDER_FAILED = 'order/CREATE_ORDER_FAILED',
  FETCH_ORDERS_START = 'order/FETCH_ORDERS_START',
  FETCH_ORDERS_SUCCESS = 'order/FETCH_ORDERS_SUCCESS',
  FETCH_ORDERS_FAILED = 'order/FETCH_ORDERS_FAILED',
}

export type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  userEmail: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  status: OrderStatus;
  createdAt: Date;
  deliveredAt?: Date;
  shippingAddress?: ShippingAddress;
  paymentMethod: string;
  paymentIntentId: string;
}

export interface OrdersState {
  readonly orders: Order[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
