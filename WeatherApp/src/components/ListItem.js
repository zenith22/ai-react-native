import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';

const ListItem = (props) => {
  const { date, min, max, main, condition } = props;
  const { item, date_text, temp_text } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color='orange' />
      <Text style={date_text}>{date}</Text>
      <Text style={temp_text}>{`Min-${Math.round(min)}° -- Max-${Math.round(
        max
      )}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'orange',
    backgroundColor: '#f5f5dc',
  },
});

export default ListItem;
