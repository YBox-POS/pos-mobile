import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as homeModel from '../Home/duck'
import * as mainModel from './duck'
import { getUsers } from '../../services/user.api'



// 初始化APP
function* initApp() {
  try {
    const res = yield call(getUsers)
    //类似 call(fn, ...args)，但支持为 fn 指定 this 上下文。用于调用对象的方法。
    const users = res.data

    const newUsers = users.map(user => {
      return ({
        id: user.id,
        name: user.name,
        username: user.username,
        following: false,
      })
    })
  
    yield put({
      type: homeModel.GET_USERS,
      payload: newUsers
    })

    yield put({
      type: mainModel.APP_INITIALIZED
      // type: "APP_INITIALIZED"
    })
  } catch(e) {
    console.error(e)
    yield put({
      type: homeModel.GET_USERS,
      payload: []
    })
  }
}

export default function* rootMainSaga() {
  yield all([
    takeLatest(mainModel.INIT_APPLICATION, initApp)
  ])
}
