import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { List, ListItem, Button} from 'react-native-elements'

const Users = ({ users, followUser, unfollowUser }) => (
  <ScrollView
    style={{
      flex: 1,
    }}
    contentContainerStyle={{ flex: 1 }}
  >
    <Image style={styles.images} source={require('./a.gif')} />
    {Object.values(users).map(({ id, name, username, following, }) => (
      <ListItem
        title={name}
        avatar={{uri: 'https://cdn.dribbble.com/users/674925/avatars/normal/653922b8b5b75fca5ae33dd45115ff07.jpeg?1470820037'}}
        key={`user-${id}`}
        onPress={() => {console.log('你点击的是列表'+id)}}
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
  </ScrollView>
)

const styles = StyleSheet.create({
  images: {
    width:375,
    height:280
  }
});


export default Users;
