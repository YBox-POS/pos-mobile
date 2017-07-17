import React from 'react'

import Screens from '../../components/commons/Screen'
import {Grid, Row, Col} from 'react-native-elements'
import Main from '../../modules/Main/mainContainer'
import ImageHome from '../../modules/Imagelist/ImageContainer'

export default () => (
  <Grid>
    <Col size={60}>
      <Row size={20}>
        <Screens>
          
        </Screens>
      </Row>
      <Row size={80}>
        <Screens>
          <Main>
            <ImageHome />
          </Main>
        </Screens>
      </Row>
    </Col>

    <Col size={40}>
      <Screens>
                
      </Screens>
    </Col>
  </Grid>
)