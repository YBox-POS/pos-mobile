import React from 'React'
import { Route, Redirect } from 'react-router-native'

import Screens from '../../../components/commons/Screen'

import Main from '../../Main/containers/mainContainer'
import Home from '../containers/homeContainer'

export default () => (
    <Screens>
          <Main>
            <Home />
          </Main>
    </Screens>
)