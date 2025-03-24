import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const MySearchBar = ({
  textHolder,
  textHolderColor,
  showIcon = true,
  icon = "search",
  keyboardType = "default",
  otherStyles = "",
  value,
  isDisabled = false,
}) => {
  return (
    <View
      className={`flex-row items-center px-4 py-2 rounded-full border border-borderColor border-b-0 
        ${
          isDisabled ? "bg-[#797979] opacity-20" : "bg-dark-100"
        } ${otherStyles}`}
    >
      <TextInput
        placeholder={textHolder}
        placeholderTextColor={textHolderColor}
        className="text-white font-light w-[100%]"
        keyboardType={keyboardType}
        value={value}
        editable={!isDisabled} // Disable input when isDisabled is true
      />

      {showIcon && (
        <TouchableOpacity
          disabled={isDisabled} // Disable button interaction
          className={`rounded-full h-12 w-12 ml-[-38px] items-center justify-center border border-[#606060] border-b-0
            ${isDisabled ? "bg-gray-600" : "bg-dark-50"}`}
        >
          <Icon name={icon} color={"white"} size={21} />
        </TouchableOpacity>
      )}
    </View>
  );
};
