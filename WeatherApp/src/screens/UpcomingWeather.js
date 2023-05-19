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

const UpcomingWeather = ({weatherData}) => {
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
        <FlatList
          data={weatherData}
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
