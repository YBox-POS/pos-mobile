import { fork, all } from 'redux-saga/effects'

import rootHomeSaga from '../pages/Home/sagas'
import rootMainSaga from '../pages/Main/sagas'

// 根 sagas ，页面汇总
export default function* rootSagas() {
  yield all([
    fork(rootMainSaga),
    fork(rootHomeSaga)
  ])
}
