import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from "./ToDo";

const {heigh, width} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: ""
  };
  render(){
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={"transparent"} translucent={true}/>
        <Text style={styles.title}>Taeil To Do</Text>
        <View style={styles.card}>
            <TextInput 
              style={styles.input} 
              placeholder={"New To Do"} 
              value={newToDo} 
              onChangeText={this._controlNewToDo}
              placeholderTextColor={"#999"} 
              returnKeyType={"done"}
              autoCorrect={false}
            />
            <ScrollView contentContainerStyle={styles.toDos}>
              <ToDo text={"Hello i'm taeil"}/>
            </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewToDo = text =>{
    this.setState({
      newToDo: text
    });
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center'
  },
  title:{
    color:"white",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    fontWeight: "200"
  },
  card:{
    backgroundColor:"white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50 ,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        },
        android: {
          elevation: 3
        }
      }
    })
  },
  input:{
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  scrollView:{

  },
  toDos: {
    alignItems: "center"
  }
});
