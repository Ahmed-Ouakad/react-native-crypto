import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Member = ({name, role})=>{
return (
    <View style = {styles.container}> 
        <Text style = {styles.name}>{name}</Text>
        <Text style = {styles.role}>{role}</Text>
        <View
  style={{
    borderBottomColor: '#D9D9DB',
    borderBottomWidth: 1,
    marginHorizontal : 5,
  }}
/>
    </View>
)
}
const styles = StyleSheet.create({
    container :{
        marginTop : 5,
    },
    name : {
        color : "white",
        fontSize : 30,
        padding : 10,
    },
    role :{
        color : "#D9D9DB",
        fontSize : 20,
        padding : 10,
    }
})
export default Member
