import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { images } from "../../constants/images";
import { MyButton } from "../../components/MyButton";

const Settings = () => {
  return (
    <SafeAreaView className="bg-dark-300 flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
          <View className="bg-dark-100 rounded-2xl mt-20 mx-5 justify-center items-center py-5">
            <TouchableOpacity>
              <Image
                source={images.tempProfileImg}
                className="w-52 h-52 rounded-full border-8 border-white"
                resizeMode="cover"
              />
            </TouchableOpacity>

            <View className="items-center justify-center">
              <Text className="bg-dark-200 text-primary-100 text-xs font-light px-4 py-2 mt-2 rounded-full text-center">
                tap to change the image
              </Text>

              <Text className="text-3xl font-bold text-light mt-3">Name</Text>
            </View>
          </View>

          {/* Empty space for future options */}
          <View className="flex-1" />

          {/* Log Out button at the bottom */}
          <View className="mx-5 mb-20">
            <MyButton
              backgroundColor="#DC3545"
              borderColor="#f25564"
              onPress={() => {}}
            >
              Log Out
            </MyButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
