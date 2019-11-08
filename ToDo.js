import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native"

const {width,height} = Dimensions.get("window");
export default class ToDo extends Component{
    state={
        isEditing: false,
        isCompleted: false
    };
    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this._toggleComplete}>
                <View style={styles.circle}/>
            </TouchableOpacity>
            <Text style={styles.text}>Hello! I'm taeil</Text>
        </View>
        )
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return({
                isCompleted: !prevState.isCompleted
            });
        });
    };
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    circle:{
        width:30,
        height: 30,
        borderRadius: 15,
        borderColor: "red",
        borderWidth: 3,
        marginRight: 20
    },
    text:{
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
});