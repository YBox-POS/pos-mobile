// Action Type

export const initialState = {
  initialized: false
}

export const INIT_APPLICATION = 'INIT_APPLICATION'
export const APP_INITIALIZED = 'APP_INITIALIZED'

// Reducer

const main = (state = initialState, action) => {
  switch(action.type) {
    case APP_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export default main

// Action Creators

export const initApplication = () => {
  return ({
    type: INIT_APPLICATION
  })
}



