// Action Type

export const initialState = {
  users: {}
};

export const GET_USERS = 'GET_USERS'

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'
export const FOLLOW_USER = 'FOLLOW_USER'

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'
export const UNFOLLOW_USER = 'UNFOLLOW_USER'

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const DELETE_USER = 'DELETE_USER'

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.payload.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
      }
    case FOLLOW_USER:
      return {
        users: {
          ...state.users,
          [action.payload.userId]: {
            ...state.users[action.payload.userId],
            following: true
          }
        }
      }
    case UNFOLLOW_USER:
      return {
        users: {
          ...state.users,
          [action.payload.userId]: {
            ...state.users[action.payload.userId],
            following: false
          }
        }
      }
    case DELETE_USER:
      return {
        users: {
          ...state.users,
          [action.payload.userId]: {
            ...state.users[action.payload.userId],
            delete2: true
          }
        }
      }
    default:
      return state;
  }
}

// Action Creators

export const followUser = userId => ({
  type: FOLLOW_USER_REQUEST,
  payload: { userId }
})

export const unfollowUser = userId => {
  return ({
    type: UNFOLLOW_USER_REQUEST,
    payload: { userId }
  })
}

export const deleteUser = userId => {
  return ({
    type: DELETE_USER_REQUEST,
    payload: { userId }
  })
}