import {View, Image, Dimensions,Text} from 'react-native';
import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Avatar} from 'react-native-elements';
import * as imageactions from '../modules/Imagelist/duck'

import Home from './product/index';
// import Navtest from './draws/drawtest';
import Draw2 from './outlet/';
// import Draw3 from './draws/drawtest3';


const SCREEN_WIDTH = Dimensions.get('window').width;
const Avatar_Image = require('./html.png');


const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 20,marginBottom:10, justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        medium
        rounded
        source={Avatar_Image}
        onPress={() => console.log("=>>>>> Avatar Works!")}
        activeOpacity={0.7}
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    } ,
    // Navtest:{
    //   path:'/drawtest',
    //   screen:Navtest,
    // },
    Draw2:{
      path:'/drawtest2',
      screen:Draw2,
    }
    // Draw3:{
    //   path:'/drawtest3',
    //   screen:Draw3,
    // }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.4,
    contentComponent: CustomDrawerContentComponent,
  }
);



export default MainRoot