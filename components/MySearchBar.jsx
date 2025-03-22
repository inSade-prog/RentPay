import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const MySearchBar = ({
  textHolder,
  textHolderColor,
  disableIcon = false,
  keyboardType,
  otherStyles,
}) => {
  return (
    <View
      className={`flex-row items-center bg-dark-100 px-4 py-2 rounded-full border border-borderColor border-b-0 ${otherStyles}`}
    >
      <TextInput
        placeholder={textHolder}
        placeholderTextColor={textHolderColor}
        className="text-white font-light w-[100%]"
        keyboardType={keyboardType}
      />
      {disableIcon && (
        <TouchableOpacity className="bg-dark-50 rounded-full h-12 w-12 ml-[-38px] items-center justify-center border border-[#606060] border-b-0">
          <Icon name="search" color={"white"} size={21} />
        </TouchableOpacity>
      )}
    </View>
  );
};
