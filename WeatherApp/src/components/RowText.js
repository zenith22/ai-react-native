import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const { rowText1, rowText2, rowWrapper, rowTextStyle1, rowTextStyle2 } =
    props;
  return (
    <View style={rowWrapper}>
      <Text style={rowTextStyle1}>{rowText1}</Text>
      <Text style={rowTextStyle2}>{rowText2}</Text>
    </View>
  );
};

export default RowText;
