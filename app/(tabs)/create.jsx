import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

import { MySearchBar } from "../../components/MySearchBar";
import { MyButton } from "../../components/MyButton";

// images
import { images } from "../../constants/images";

const Create = () => {
  return (
    <SafeAreaView className="flex-1 bg-dark-300">
      <View className="flex-1 justify-center items-center px-5">
        {/* Heading Text */}
        <View className="absolute top-20 w-full items-center">
          <Text className="font-bold text-light text-2xl bg-dark-100 py-2 px-4 rounded-full">
            Create a New Entry Field
          </Text>
        </View>

        {/* Logo */}
        <View className="items-center justify-center mb-10">
          <Image
            source={images.coloredIconText}
            resizeMode="contain"
            className="w-60 h-60 rounded-full"
          />
        </View>

        {/* Entry Fields */}
        <View className="w-full items-center">
          <MySearchBar
            textHolder="Enter Name here..."
            textHolderColor="#707070"
          />
          <MySearchBar
            textHolder="Enter Phone Number..."
            textHolderColor="#707070"
          />
          <MySearchBar
            textHolder="Enter Shop Number..."
            textHolderColor="#707070"
          />
        </View>

        <View>
          <MyButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Create;
