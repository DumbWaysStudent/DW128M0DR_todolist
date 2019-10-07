import React, { Component } from 'react';
import {Icon, CheckBox} from 'native-base';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class TodoIsDone extends Component {
    constructor(){
        super();
        this.state = {
            inputList : "",
            data : [
                { 
                  id : 1,
                  title : "Work",
                  checked : false
                },
                {
                  id : 2,
                  title : "Swim",
                  checked : false
                },
                {
                  id : 3,
                  title : "Study",
                  checked : false
                },
                {
                  id : 4,
                  title : "Sleep",
                  checked : false
                },
                {
                  id : 5,
                  title : "Run",
                  checked : false
                },
              ]
        }
    }

    Item = ({id, title, onDelete, onChecked, checked}) => {
      return(
        <View style={styles.item}>
          <CheckBox style={styles.checkBox}
            title='Click Here'
            checked={checked}
            onPress={() => onChecked(id) }
          />

          <Text style={styles.title}>{title}</Text>
          
          <TouchableHighlight onPress = {()=> onDelete(id)} >
              <Icon type="FontAwesome" name="trash" style={styles.icon} />
          </TouchableHighlight>
        
        </View>
      );
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

    handdleRemove = (id) => {
      const data = this.state.data;
      const newData = data.filter(dataref => dataref.id !== id);
      this.setState({
        data : newData
      })
    }

    handleChecked = (id) => {
        const data = this.state.data;
        const isCheck = data.map( item => {
            if (id === item.id) {
                item.checked = !item.checked;
            } 
            return item;
        }) 
        this.setState({
            data : isCheck
        })
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
              renderItem = {({item}) => <this.Item title={item.title} id={item.id} checked = {item.checked} onChecked = {this.handleChecked} onDelete = {this.handdleRemove} />}
              keyExtractor = {item => item.id}> >
            </FlatList>
          </SafeAreaView>
        );
      }
}

export default TodoIsDone;

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
    flexDirection : 'row',
    borderRadius : 10,
    backgroundColor : "#FFF",
    padding : 10,
    marginVertical : 5,
    marginHorizontal : 10,
  },
  icon : {
    flex : 10,
    color : 'red',
  },
  title : {
    marginLeft:20,
    flex : 90,
    fontSize : 14,
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
});