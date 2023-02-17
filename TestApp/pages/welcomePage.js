import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Item from '../components/item';

const WelcomePage = ({navigation}) => {
  [data, setData] = useState([]);
  const getCrypto = () => {
    axios
      .get('https://api.coinpaprika.com/v1/coins')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log('this is the error -> ' + error);
      });
  };
  useEffect(() => {
    console.log("WE are here at first!!!!!!!!!!!")
    getCrypto();
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailsPage', {id: item.id, name: item.name});
          }}>
          <Item title={item.name} rank={item.rank} symbol={item.symbol} />
        </TouchableOpacity>
      )}
    />
  );
};

export default WelcomePage;
