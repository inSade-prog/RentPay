import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export const MyButton = ({
  onPress,
  children,
  size = 10,
  backgroundColor = "#006EAD",
  borderColor = "#188bcc",
  textColor = "#ffffff",
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderBottomWidth: 0,
          borderWidth: 1,
          borderRadius: 50,
          paddingVertical: size,
          paddingHorizontal: size * 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: textColor, fontWeight: "bold" }}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
