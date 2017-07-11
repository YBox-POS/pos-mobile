import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as homeType from './duck'
import { getUsers } from '../../services/user.api'

function* homeSaga(action) {
  if (action.type === homeType.FOLLOW_USER_REQUEST) {
    yield put({
      ...action,
      type: homeType.FOLLOW_USER
    })
  } else if (action.type === homeType.UNFOLLOW_USER_REQUEST) {
    yield put({
      ...action,
      type: homeType.UNFOLLOW_USER
    })
  }else if (action.type === homeType.DELETE_USER_REQUEST) {
    yield put({
      ...action,
      type: homeType.DELETE_USER
    })
  }
}

export default function* rootHomeSaga() {
  yield all([
    takeLatest(homeType.FOLLOW_USER_REQUEST, homeSaga),
    takeLatest(homeType.UNFOLLOW_USER_REQUEST, homeSaga),
    takeLatest(homeType.DELETE_USER_REQUEST, homeSaga)
  ])
}