import { takeLatest, all, call, put, select } from 'typed-redux-saga/macro';

import { ORDER_ACTION_TYPES } from './order.types';
import { selectCurrentUser } from '../user/user.selector';
import { clearCart } from '../cart/cart.action';

import {
  createOrderSuccess,
  createOrderFailed,
  fetchOrdersSuccess,
  fetchOrdersFailed,
  CreateOrderStart,
} from './order.action';

import {
  createOrderDocument,
  getUserOrders,
} from '../../utils/firebase/firebase.utils';

export function* createOrder({ payload }: CreateOrderStart) {
  try {
    const currentUser = yield* select(selectCurrentUser);
    
    if (!currentUser) {
      throw new Error('User must be logged in to create an order');
    }

    const orderData = {
      ...payload,
      userId: currentUser.id, // Use unique Firebase user ID
      status: 'processing' as const,
      createdAt: new Date(),
      paymentMethod: 'Credit Card',
    };

    const order = yield* call(createOrderDocument, orderData);
    yield* put(createOrderSuccess(order));
    yield* put(clearCart());
  } catch (error) {
    yield* put(createOrderFailed(error as Error));
  }
}

export function* fetchUserOrders() {
  try {
    const currentUser = yield* select(selectCurrentUser);
    
    if (!currentUser) {
      yield* put(fetchOrdersSuccess([]));
      return;
    }

    const orders = yield* call(getUserOrders, currentUser.id);
    yield* put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield* put(fetchOrdersFailed(error as Error));
  }
}

export function* onCreateOrderStart() {
  yield* takeLatest(ORDER_ACTION_TYPES.CREATE_ORDER_START, createOrder);
}

export function* onFetchOrdersStart() {
  yield* takeLatest(ORDER_ACTION_TYPES.FETCH_ORDERS_START, fetchUserOrders);
}

export function* ordersSagas() {
  yield* all([call(onCreateOrderStart), call(onFetchOrdersStart)]);
}
