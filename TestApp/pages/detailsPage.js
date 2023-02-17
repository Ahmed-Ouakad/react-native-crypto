import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View,StyleSheet,ScrollView,FlatList } from 'react-native';
import {getCoin} from '../redux/coin'
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";
import Tag from '../components/tag';
import Member from '../components/member';


const DetailsPage = ({route}) => {
  
  const coinId = route.params.id;
  const dispatch = useDispatch()
  
  const getCoinFromApi = () => {
    
    axios
      .get('https://api.coinpaprika.com/v1/coins/' + coinId)
      .then(response => {
      
        var resp = response.data;
        var tags = [];

        resp.tags.forEach(element => {
          tags.push(element.name);
        });

        var object = {
          name: resp.name,
          rank: resp.rank,
          symbol: resp.symbol,
          description: resp.description,
          tags: tags,
          team: resp.team,
        };
        
       
       dispatch(getCoin(object))
       
      })
      .catch(error => {
        console.log('error -> ' + error);
      });
  };
  
  useEffect(() => {
   
    getCoinFromApi();
  }, []);
  const state = useSelector((state)=>state.coin.value)
  console.log(state)
  return (
    <ScrollView style = {styles.container}>
      <Text style = {styles.title}>{state.rank}. {state.name} ({state.symbol})</Text>
      <Text style = {styles.description}>{state.description}</Text>
      <Text style = {styles.subtitle}>Tags</Text>
      <FlatList
      horizontal = {true}
      data={state.tags}
      renderItem={({item}) => (
        
          <Tag text = {item}/>
        
      )}
    />
    <Text style = {styles.subtitle}>Team</Text>
    {state.team.map((item)=>  <Member name={item.name} role = {item.position}/>)}

      

    </ScrollView>
  );
  
  
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#0b2545',
    flex : 1,
  },
title :{
  textAlign : "center",
  fontSize : 40,
  color: 'white',
},
description : {
  marginTop : 10,
  fontSize : 20,
  color: 'white',
  padding : 10,
},
subtitle :{
  fontSize : 35,
  color: 'white',
  padding : 10,
},


})
export default DetailsPage;
