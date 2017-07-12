// Action Type

export const initialState = {
  imagesa: {}
};

export const GET_IMAGES = 'GET_IMAGES'
export const ON_IMAGES = 'ON_IMAGES'

export const FOLLOW_IMAGE_REQUEST = 'FOLLOW_IMAGE_REQUEST'
export const FOLLOW_IMAGE = 'FOLLOW_IMAGE'

export const UNFOLLOW_IMAGE_REQUEST = 'UNFOLLOW_IMAGE_REQUEST'
export const UNFOLLOW_IMAGE = 'UNFOLLOW_IMAGE'

export const DELETE_IMAGE_REQUEST = 'DELETE_IMAGE_REQUEST'
export const DELETE_IMAGE = 'DELETE_IMAGE'

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        imagesa: action.payload.reduce((acc, image) => ({ ...acc, [image.id]: image }), {})
      }
    case FOLLOW_IMAGE:
      return {
        imagesa: {
          ...state.imagesa,
          [action.payload.imageId]: {
            ...state.imagesa[action.payload.imageId],
            following: true
          }
        }
      }
    case UNFOLLOW_IMAGE:
      return {
        imagesa: {
          ...state.imagesa,
          [action.payload.imageId]: {
            ...state.imagesa[action.payload.imageId],
            following: false
          }
        }
      }
    case DELETE_IMAGE:
      return {
        imagesa: {
          ...state.imagesa,
          [action.payload.imageId]: {
            ...state.imagesa[action.payload.imageId],
            delete2: true
          }
        }
      }
    default:
      return state;
  }
}

// Action Creators

export const followUser = imageId => ({
  type: FOLLOW_IMAGE_REQUEST,
  payload: { imageId }
})

export const unfollowUser = imageId => {
  return ({
    type: UNFOLLOW_IMAGE_REQUEST,
    payload: { imageId }
  })
}

export const deleteUser = userId => {
  return ({
    type: DELETE_IMAGE_REQUEST,
    payload: { imageId }
  })
}