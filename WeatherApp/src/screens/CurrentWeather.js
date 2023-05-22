import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    temperature,
    feels,
    titleText,
    container,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;
  console.log(weatherCondition);

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <Text style={titleText}>Current Weather</Text>
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color='yellow'
        />
        <Text style={temperature}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`} </Text>

        <RowText
          rowText1={`High : ${temp_max}°`}
          rowText2={`Low : ${temp_min}°`}
          rowWrapper={highLowWrapper}
          rowTextStyle1={highLow}
          rowTextStyle2={highLow}
        />
      </View>

      <RowText
        rowWrapper={bodyWrapper}
        rowTextStyle1={description}
        rowText1={weather[0].description}
        rowTextStyle2={message}
        rowText2={weatherType[weatherCondition].message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'cyan',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  temperature: {
    color: 'black',
    fontSize: 36,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingStart: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
