import React from 'react';
import { Text, Image, View } from 'react-native';
import GridView from 'react-native-super-grid';
import styles from './styles';


const ExImages = ({ imagesa, followImage, unfollowImage }) => (

  <GridView
    itemWidth={103}
    items={imagesa}
    style={styles.gridView}
    renderItem={item => (
      <View style={styles.itemContainer}>          
        <Image
          style={styles.imagesize} 
          source={{url:item.path}}>
          {/* <Text >这是嵌在图中的一句话</Text> */}
        </Image>
          <View style={styles.testview}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
      </View>
    )}
  />   
 
)



export default ExImages;
