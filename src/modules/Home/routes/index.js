import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
// import ButtonsHome from './buttons_home';
import ButtonsHome from './buttons_home';
const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);



const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Buttons',
      
    }),
  }
});

const Home = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
     
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

Home.navigationOptions = {
  drawerLabel: 'Home',

};

export default Home;