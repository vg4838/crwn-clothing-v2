import { all, call } from 'typed-redux-saga/macro';

import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';
import { ordersSagas } from './orders/order.saga';

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas), call(ordersSagas)]);
}
