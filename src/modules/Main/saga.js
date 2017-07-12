import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as homeType from '../Home/duck'
import * as mainType from './duck'
import { getUsers } from '../../services/user.api'
import { axis } from '../../utils'

console.log('数据类型---->>>>>>>',axis(999))

// 初始化APP
function* initApp() {
  try {
    const res = yield call(getUsers)
    //类似 call(fn, ...args)，但支持为 fn 指定 this 上下文。用于调用对象的方法。
    const users = res.data.data
    console.log('Users---->>>>>>>',users);
    const newUsers = users.map(user => {
      return ({
        id: user.id,
        name: user.name,
        username: user.username,
        following: false,
      })
    })
    yield put({
      type: homeType.GET_USERS,
      payload: newUsers
    })

    yield put({
      type: mainType.APP_INITIALIZED
    })
  } catch(e) {
    console.error(e)
    yield put({
      type: homeType.GET_USERS,
      payload: []
    })
  }
}

export default function* rootMainSaga() {
  yield all([
    takeLatest(mainType.INIT_APPLICATION, initApp)
  ])
}
