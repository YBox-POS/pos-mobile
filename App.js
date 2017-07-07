//*********** COMMENT THE CODE BELOW TO USE STORYBOOK *************/
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// all routes
import MainRoot from './src/routes/index'

// store redux
import store from './src/store'

// history
import { history } from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <MainRoot />
      </Provider>
    );
  }
}
//*********** UNCOMMENT THE CODE BELOW TO USE STORYBOOK *************/

// import Storybook from './storybook'
// export default Storybook
