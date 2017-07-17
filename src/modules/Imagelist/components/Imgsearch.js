import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import { SearchBar } from 'react-native-elements'


const SearchImages = ({ imagesa, followImage, unfollowImage }) => (

  <SearchBar
    style={{...Exponent.Font.style('cursive'),}}
    onChangeText={alert('Search')}
    placeholder='Search By Product Name or Id' 
  />
)



export default SearchImages;
