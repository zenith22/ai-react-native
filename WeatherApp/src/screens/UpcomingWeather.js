import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/ListItem";

const DATA = [
  {
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
      },
    ],
    dt_txt: "2022-08-30 15:00:00",
  },
  {
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
      },
    ],
    dt_txt: "2022-08-30 18:00:00",
  },
  {
    main: {
      temp_min: 290.31,
      temp_max: 292.46,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
      },
    ],
    dt_txt: "2022-08-30 21:00:00",
  },
  {
    main: {
      temp_min: 294.93,
      temp_max: 294.93,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
      },
    ],
    dt_txt: "2022-09-04 12:00:00",
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        date={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        main={item.weather[0].main}
        condition={item.weather[0].main}
      />
    );
  };

  // const Divider = () => {
  //   return <View style={{ backgroundColor: "orange", height: 2, margin: 5 }} />;
  // };

  const keyId = (item) => item.dt_txt;
  const { wrapper, image, titleText } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={"midnightblue"} />
      <ImageBackground
        source={require("../../assets/cloudy.jpg")}
        style={image}
      >
        <Text style={titleText}>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={keyId}
          //ItemSeparatorComponent={Divider}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //backgroundColor: "royalblue",
    //marginTop: StatusBar.currentHeight || 0,
  },
  titleText: {
    alignSelf: "center",
    color: "white",
    fontSize: 40,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
  },

  temp_text: {
    fontSize: 20,
    color: "blue",
  },
  date_text: {
    color: "blue",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
