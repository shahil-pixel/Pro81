import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Modal, KeyboardAvoidingView} from 'react-native';

import firebase from 'firebase';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../components/Header';

export default class Exchange extends React.Component{
    constructor(){
        super();
        this.state = {
            itemName: "",
            itemDes: ""
        }
    }

    addItem = ()=>{
     db.collection('items/').add({
         item_name: this.state.itemName,
         item_description: this.state.itemDes
     })

     return alert("Item added in our database!");
    }

    render(){
        return(
            <View>
                <CustomHeader title = {"Exchange Screen"}/>
                <TextInput
                style = {[styles.inputStyle, {height: 80}]}
                  placeholder = {"Write the item's name here"}
                  keyboardType = {"default"}
                  onChangeText = {
                      (text)=>{
                          this.setState({
                              itemName: text
                          })
                      }
                  }
                />

                <TextInput
                style = {[styles.inputStyle,{height: 500}]}
                 placeholder = {"Write it's description here"}
                 keyboardType = {"default"}
                 multiline = {true}
                 onChangeText = {
                     (text)=>{
                         this.setState({
                             itemDes: text
                         })
                     }
                 }
                />

                <TouchableOpacity
                 style = {styles.addItemStyle}
                 onPress = {
                     ()=>{
                         this.addItem()
                     }
                 }
                >
                    <Text
                     style = {styles.addItemText}
                    >
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: 700,
        marginLeft: 400,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#FFAB32',
        fontSize: 20,
        marginTop: 30,
        textAlign: 'center'
    },
    addItemStyle: {
      width: 100,
      height: 50,
      borderWidth: 4,
      borderRadius: 4,
      backgroundColor: '#476DF5',
      borderColor: '#1C26F5',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 1150,
      marginTop: -100
    },
    addItemText: {
     textAlign: 'center',
     fontSize: 20,
     color: '#000000'
    }
})