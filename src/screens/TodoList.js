import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';


const data = [
  { 
    id : 1,
    title : "Work"
  },
  {
    id : 2,
    title : "Swim"
  },
  {
    id : 3,
    title : "Study"
  },
  {
    id : 4,
    title : "Sleep"
  },
  {
    id : 5,
    title : "Run"
  },
];

function Item ({title}) {
  return(
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function TodoList () {
  return(
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data = {data}
        renderItem = {({item}) => <Item title={item.title} />}
        keyExtractor = {item => item.id}
      />
    </SafeAreaView>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#E6E7E8",
  },
  item : {
    borderRadius : 10,
    backgroundColor : "#FFFFFF",
    padding : 10,
    marginVertical : 5,
    marginHorizontal : 10,
  },
  title : {
    fontSize : 14,
  },
});