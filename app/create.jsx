import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

import { images } from "../constants/images";

import { MySearchBar } from "../components/MySearchBar";
import { MyButton } from "../components/MyButton";

const Create = () => {
  return (
    <View className="bg-dark-300 flex-1">
      <KeyboardAvoidingView>
        <ScrollView>
          {/* Header */}
          <View className="justify-center items-center rounded-full border border-borderColor bg-dark-100 mt-14 mx-6 p-2 border-b-0">
            <Text className="justify-center items-center text-2xl text-light font-bold">
              Add a New Person
            </Text>
          </View>

          {/* Logo section */}
          <View className="items-center justify-center m-10 ">
            <Image
              source={images.coloredIconText}
              className="w-40 h-40 bg-dark-100 border-b-0 border border-borderColor rounded-full "
            />
          </View>

          {/* Form Field */}
          <View>
            <Text className="text-light ml-6 top-1 mb-2">Enter Details:</Text>
            <MySearchBar
              textHolder="enter name"
              textHolderColor="#707070"
              otherStyles="m-2"
            />
            <MySearchBar
              textHolder="phone number"
              textHolderColor="#707070"
              otherStyles="m-2"
            />
            <MySearchBar
              textHolder="Shop number"
              textHolderColor="#707070"
              keyboardType="numeric"
              otherStyles="m-2"
            />
            <MySearchBar
              textHolder="date"
              textHolderColor="#707070"
              otherStyles="m-2"
            />
          </View>

          <View className="m-5">
            <MyButton size={15}>Add To List</MyButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Create;
