import * as homeModel from './home.model'

export const followUser = userId => ({
  type: homeModel.FOLLOW_USER_REQUEST,
  payload: { userId }
})

export const unfollowUser = userId => {
  return ({
    type: homeModel.UNFOLLOW_USER_REQUEST,
    payload: { userId }
  })
}

export const deleteUser = userId => {
  return ({
    type: homeModel.DELETE_USER_REQUEST,
    payload: { userId }
  })
}