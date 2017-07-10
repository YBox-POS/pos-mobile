import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as homeModel from './duck'
import { getUsers } from '../../services/user.api'

function* homeSaga(action) {
  if (action.type === homeModel.FOLLOW_USER_REQUEST) {
    yield put({
      ...action,
      type: homeModel.FOLLOW_USER
    })
  } else if (action.type === homeModel.UNFOLLOW_USER_REQUEST) {
    yield put({
      ...action,
      type: homeModel.UNFOLLOW_USER
    })
  }else if (action.type === homeModel.DELETE_USER_REQUEST) {
    yield put({
      ...action,
      type: homeModel.DELETE_USER
    })
  }
}

export default function* rootHomeSaga() {
  yield all([
    takeLatest(homeModel.FOLLOW_USER_REQUEST, homeSaga),
    takeLatest(homeModel.UNFOLLOW_USER_REQUEST, homeSaga),
    takeLatest(homeModel.DELETE_USER_REQUEST, homeSaga)
  ])
}