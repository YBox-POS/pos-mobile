import React, { Component } from 'react'
import {ScrollView} from 'react-native';

import Screen from '../../../components/commons/Screen'
import ExImages from './Users'

class ImageHome extends Component {
  render() {
    const { imagesa, followImage, unfollowImage } = this.props
    const wwwe = (Object.values(imagesa))

    return (
      <ScrollView style={{flex: 1,}}>
            <Screen>
              <ExImages
                imagesa={wwwe}
                followImage={followImage}
                unfollowImage={unfollowImage}
              />
            </Screen>
      </ScrollView>
    )
  }
}

export default ImageHome
