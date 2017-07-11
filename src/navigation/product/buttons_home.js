import React from 'react'
import { Route, Redirect } from 'react-router-native'

import Screens from '../../components/commons/Screen'

import Main from '../../modules/Main/mainContainer'
import Home from '../../modules/Home/homeContainer'

export default () => (
    <Screens>
          <Main>
            <Home />
          </Main>
    </Screens>
)