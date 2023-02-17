import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tag = ({text})=>{
    return(
        <View style = {styles.tagBorder}>
    <Text style = {styles.tag}>{text}</Text>
    </View>
    )

}
const styles = StyleSheet.create({
    tag:{
  
        fontSize : 20,
        color: 'white',
        padding : 5,
      },
      tagBorder :{
      margin : 5,
        alignSelf : "baseline",
      borderColor : "white",
      borderWidth : 3,
      borderRadius : 20,
      },
})
export default Tag