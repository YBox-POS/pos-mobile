import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { List, ListItem } from 'react-native-elements'


const Users = ({ users, followUser, unfollowUser }) => (
  <ScrollView
    style={{
      flex: 1,

    }}
    contentContainerStyle={{ flex: 1 }}
  >
    <Text style={{fontSize:26,marginTop:20}}>标题</Text>
    {Object.values(users).map(({ id, name, following }) => (
      <ListItem
        title={name}
        key={`user-${id}`}
        rightIcon={
          <Button
            color={"green"}
            onPress={() => {following ? unfollowUser(id) : followUser(id);alert(following ? '已取消关注' : '已关注')}}
            title={following ? '取消关注' : '关注'}
          /> 
        }
      />
    ))}
  </ScrollView>
)

export default Users;
