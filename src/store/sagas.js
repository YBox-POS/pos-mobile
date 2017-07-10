import { fork, all } from 'redux-saga/effects'

import rootHomeSaga from '../modules/Home/saga'
import rootMainSaga from '../modules/Main/saga'

// 根 sagas ，页面汇总
export default function* rootSagas() {
  yield all([
    fork(rootMainSaga),
    fork(rootHomeSaga)
  ])
}
