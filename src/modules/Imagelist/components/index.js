import React, { Component } from 'react'
import styled from 'styled-components/native'

import Screen from '../../../components/commons/Screen'

import ExImages from './Users'

class ImageHome extends Component {
  render() {
    const { imagesa, followImage, unfollowImage } = this.props
   const wwwe = (Object.values(imagesa))

   return (
      <Screen>
        <ExImages
          imagesa={wwwe}
          followImage={followImage}
          unfollowImage={unfollowImage}
        />
      </Screen>
    )
  }
}

export default ImageHome
