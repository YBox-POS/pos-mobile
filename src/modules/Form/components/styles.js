import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  //import Swipeout
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
  },
  navbarTitle: {
    color: '#444',
    fontSize: 30,
    fontWeight: "800",
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
//gridView
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 125,
  },
  itemName: {
    fontSize: 10,
    color: '#4c4d4e',
    fontWeight: '900',
    textAlign: 'center'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  imagesize:{
    width: 108, 
    height: 85,
    
  },
  texttop:{
    width: 100, 
    height: 100
  },
  textbottom:{
    width: 100, 
    height: 100
  },
  testview:{
    backgroundColor:'#b7b8b9',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius:5,
    width:108,
    height:30,
    padding:10,
  }
})

module.exports = styles
