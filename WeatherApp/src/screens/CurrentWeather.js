import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
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

  return (
    <SafeAreaView style={wrapper}>
      <Text style={titleText}>Current Weather</Text>
      <View style={container}>
        <Feather name="sun" size={100} color="yellow" />
        <Text style={temperature}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          rowText1={"High : 80"}
          rowText2={"Low:60"}
          rowWrapper={highLowWrapper}
          rowTextStyle1={highLow}
          rowTextStyle2={highLow}
        />
      </View>

      <RowText
        rowWrapper={bodyWrapper}
        rowTextStyle1={description}
        rowText1={"Its very sunny"}
        rowTextStyle2={message}
        rowText2={"Its perfect t-shirt weather"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "cyan",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    alignSelf: "center",
    color: "black",
    fontSize: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  temperature: {
    color: "black",
    fontSize: 36,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
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
