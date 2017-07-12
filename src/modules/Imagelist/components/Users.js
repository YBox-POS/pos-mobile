import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {ListItem, Button} from 'react-native-elements';
import GridView from 'react-native-super-grid';
import styles from './styles';

const ExImages = ({ imagesa, followImage, unfollowImage }) => (
  <ScrollView
    style={{
      flex: 1,
    }}
  >
    <Text>{console.log("|||||||||||||||||."+ Object.prototype.toString.call(imagesa).slice(8,-1))}</Text>  
     {/* <Text>{console.log("//////////"+imagesa)}</Text>  */}
    {/* {Object.values(imagesa).map(({ id, path, price, name,desc }) => (  */}
        <GridView
        itemWidth={120}
        items={imagesa}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <image src ={item.path}/>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.desc}</Text>
          </View>
        )}
      />      
       {/* ))}     */}
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
    ))}  */}
  </ScrollView>
)



export default ExImages;
