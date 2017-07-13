import React from 'react';
import { StackNavigator } from 'react-navigation';
import { put } from 'redux-saga/effects'


import drawtest2 from './viewtest2';


const drawtest2Item = StackNavigator(
  {
    drawtest2: {
      screen: drawtest2,

      navigationOptions: ({ navigation }) => ({
        title: 'drawtest2',
      })
    },
  },
  // onTransitionEnd=function* (){
  //     yield put({
  //     type:imageType.ON_IMAGES,
  //     payload: []
  //   })}
);


export default drawtest2Item;