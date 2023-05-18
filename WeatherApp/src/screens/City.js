import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    image,
    cityname,
    countryname,
    text,
    populationWrapper,
    populationText,
    sunText,
    sunWrapper,
    iconTextLayout
  } = styles;

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"midnightblue"} />
      <ImageBackground style={image} source={require("../../assets/city.jpeg")}>
        <Text style={[cityname, text]}>Cityname</Text>
        <Text style={[countryname, text]}>Countryname</Text>
        <View style={[populationWrapper, iconTextLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"8000"}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[sunWrapper, iconTextLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"7:44:22am"}
            bodyTextStyle={sunText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"20:55:5pm"}
            bodyTextStyle={sunText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityname: { fontSize: 40 },
  countryname: { fontSize: 30 },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginStart: 8,
    color: "red",
    fontWeight: "bold",
  },
  sunWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  sunText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  iconTextLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
