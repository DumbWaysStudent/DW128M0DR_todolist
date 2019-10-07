import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';

function Item ({title}) {
  return(
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            inputList : "",
            data : [
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
              ]
        }
    }

    handleAdd = () => {
        if(!(this.state.inputList === null || this.state.inputList === "")){
            const {data} = this.state;
            const dataId = data.length + 1;
            const inputList = {
              id : dataId,
              title: this.state.inputList
            };
            data.push(inputList);
            this.setState({ data, inputList:""});
            this.empty.clear()
        };
        

      }

      render(){
        return(
          <SafeAreaView style={styles.container}>
              <View style={styles.addList}>
                  <TextInput 
                    placeholder="Add List..." 
                    onChangeText={inputList => this.setState({ inputList }) } 
                    style={styles.textInput}
                    ref={ref => this.empty = ref} />

                    <TouchableHighlight onPress={this.handleAdd} style={styles.button}>
                        <Text style={styles.btnText}>Add</Text>
                    </TouchableHighlight>
              </View>
            
            <FlatList
              data = {this.state.data}
              renderItem = {({item}) => <Item title={item.title} />}
              keyExtractor = {item => item.id}
            />
          </SafeAreaView>
        );
      }
}

export default TodoList;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#E6E7E8",
  },
  addList : {
      flexDirection: 'row',
      marginBottom : 30,
  },
  button : {
    backgroundColor : 'green',
    borderRadius : 10,
    marginVertical : 5,
    marginRight : 10,
    flex: 20,
    height : 45,
    alignItems : 'center',
    padding : 10,
  },
  btnText : {
    fontSize : 18,
    color : 'white',
  },
  item : {
    borderRadius : 10,
    backgroundColor : "#FFF",
    padding : 10,
    marginVertical : 5,
    marginHorizontal : 10,
  },
  textInput : {
    maxHeight : 45,
    flex : 80,
    borderRadius : 10,
    backgroundColor : "#FFF",
    padding : 10,
    marginVertical : 5,
    marginHorizontal : 10,
  },
  title : {
    fontSize : 14,
  },
});