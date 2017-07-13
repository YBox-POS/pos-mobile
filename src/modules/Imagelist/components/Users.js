import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {ListItem, Button,Card} from 'react-native-elements';
import GridView from 'react-native-super-grid';
import styles from './styles';

const ExImages = ({ imagesa, followImage, unfollowImage }) => (
  <ScrollView
    style={{
      flex: 1,
    }}>
  
  <GridView
    itemWidth={120}
    items={imagesa}
    style={styles.gridView}
    renderItem={item => (
      <View style={styles.itemContainer}>          
        <Image
          style={styles.imagesize} 
          source={{url:item.path}}
          resizeMode="cover"/>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
        )}
  />      
 
       {/* shupai image  */}
      {/* {Object.values(imagesa).map(({ id, path, price, name,desc }) => (
      <ListItem
        title={name}
        avatar={{uri:path}}
        key={`image-${id}`}
          rightIcon={
          <Button
            color={"#fff"}
            iconRight
            buttonStyle={{backgroundColor: '#00D9C7', borderRadius: 5}}
            title={'购买'}
          /> 
        }
      />
    ))}   */}
  </ScrollView>
)



export default ExImages;
