import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyle } = props;

  const { textStyle, container } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textStyle, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
  container:{
    alignItems:'center',
  }
});

export default IconText;
