import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Item = ({title,rank,symbol}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{rank}. {title} ( {symbol})</Text>
      <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  }}
/>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#0b2545',
    padding: 10,
    borderBottomColor : 'white',
    borderBottomWidth : 2,
    flexDirection : 'row'
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
});
export default Item;
