import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { images } from "../constants/images";

import { MySearchBar } from "../components/MySearchBar";
import { MyButton } from "../components/MyButton";
import { Calendar } from "../components/Calendar";
import Icon from "react-native-vector-icons/Ionicons";

const Create = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="bg-dark-300 flex-1">
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
        <View className="mx-10">
          <Text className="text-light ml-6 top-1 mb-2">Enter Details:</Text>
          <MySearchBar
            textHolder="enter name"
            textHolderColor="#707070"
            otherStyles="m-2"
            showIcon={false}
          />
          <MySearchBar
            textHolder="phone number"
            textHolderColor="#707070"
            otherStyles="m-2"
            keyboardType="numeric"
            showIcon={false}
          />
          <MySearchBar
            textHolder="Shop number"
            textHolderColor="#707070"
            keyboardType="numeric"
            otherStyles="m-2"
            showIcon={false}
          />

          {/* Date field */}

          <View className="flex-row items-center justify-center">
            <MySearchBar
              textHolder="Date Select"
              textHolderColor="white"
              keyboardType="numeric"
              otherStyles="m-2 w-[75%]"
              showIcon={false}
              isDisabled={true}
              value={currentDate ? currentDate.toDateString() : "None"}
            />

            {/* Calendar Icon */}

            <TouchableOpacity
              className="bg-primary-100 rounded-full items-center justify-center h-16 w-16"
              onPress={() => setModalVisible(true)}
            >
              <Icon name="calendar" color={"white"} size={32} />
            </TouchableOpacity>
          </View>

          {/* Calendar UI */}

          <Modal visible={modalVisible} transparent animationType="slide">
            <View className="flex-1 justify-center items-center backdrop-blur-xl">
              <View className="p-5 rounded-lg">
                <Calendar
                  onClose={() => setModalVisible(false)}
                  onDateSelect={(date) => setCurrentDate(date)}
                />
              </View>
            </View>
          </Modal>

          {/* Add to list */}
        </View>
        <View className="mx-10 mt-5">
          <MyButton size={15}>Add To List</MyButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Create;
