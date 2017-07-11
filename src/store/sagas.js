import { fork, all,takeEvery } from 'redux-saga/effects'

import rootHomeSaga from '../modules/Home/saga'
import rootMainSaga from '../modules/Main/saga'

// export function* watchAndLog() {
//   yield* takeEvery('*', function* logger(action) {
//     console.log('action', action)
//   })
// }

// 根 sagas ，页面汇总
export default function* rootSagas() {
  yield ([
    fork(rootMainSaga),
    fork(rootHomeSaga)
    // fork(watchAndLog)
  ])
}
