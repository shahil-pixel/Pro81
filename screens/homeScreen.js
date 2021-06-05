import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

import CustomHeader from '../components/Header';

export default class Home extends React.Component{

   constructor(){
       super();
       this.state = {
         ItemList: []
       }
   }

   itemListDb = async()=>{
       var requestRef = db.collection("items").onSnapshot((snapshot)=>{
           var reqItemList = snapshot.docs.map(document => document.data());
           this.setState({
               ItemList: reqItemList
           })
       })
   }
   
   componentDidMount(){
       this.itemListDb()
   }

   keyExtractor = (item, index)=> index.toString()

   renderItem = ({item, i})=>{
       return(
           <ListItem
            key = {i}
            title = {item.item_name}
            subtitle = {item.item_description}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            // rightElement={
            //     <TouchableOpacity>
            //      <Text style = {{color: 'black'}}>View</Text>
            //     </TouchableOpacity>
            // }
            bottomDivider
           />
       )
   }

   render(){
    return(
      <View style={{flex:1}}>
        <CustomHeader title="Home Screen"/>
        <View style={{flex:1}}>
          {
            this.state.ItemList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List of all Items</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.ItemList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })