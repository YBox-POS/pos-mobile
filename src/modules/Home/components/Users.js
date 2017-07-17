import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { List, ListItem, Button} from 'react-native-elements';

//获取屏幕宽高
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Users = ({ users, followUser, unfollowUser }) => (
  <ScrollView
    style={{
      flex: 1,
    }}
    contentContainerStyle={{ marginBottom:100 }}
  >
    <Image style={styles.images} source={require('../../../asset/img/a.gif')}  />
    
    {Object.values(users).map(({ id, name, username, following }) => (
      <ListItem
        title={name}
        avatar={{uri: 'https://m.jandou.com/file/images/avatar.jpg'}}
        key={`user-${id}`}
        onPress={() => {console.log('你点击的是列表'+id)}}
        leftIcon={
          <Button
            color={"#fff"}
            iconRight
            buttonStyle={{backgroundColor: '#00D9C7', borderRadius: 5}}
            onPress={() => {}}
            title={"删除"}
          /> 
        }
        rightIcon={
          <Button
            color={"#fff"}
            iconRight
            buttonStyle={{backgroundColor: '#00D9C7', borderRadius: 5}}
            onPress={() => {following ? unfollowUser(id) : followUser(id);console.log(following ? '已取消关注' : '已关注')}}
            title={following ? '取消关注' : '关注'}
          /> 
        }
      />
    ))}
    <Button
      color={"#fff"}
      iconRight
      buttonStyle={{backgroundColor: '#FF557C', borderRadius: 5, marginTop:20}}
      onPress={() => {alert("屏幕宽度："+SCREEN_WIDTH+"\n屏幕高度："+SCREEN_HEIGHT)}}
      title={"获取屏幕宽度"}
    /> 

  </ScrollView>
)

const styles = StyleSheet.create({
  images: {
    width: SCREEN_WIDTH,
    height: 150
  }
});


export default Users;
