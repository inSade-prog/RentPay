import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const ItemRow = ({ id, name, phone, amount }) => {
  return (
    <View className="flex-row min-w-[600px] px-4 py-3 border-b border-borderColor">
      <Text className="w-16 text-white text-center">{id}</Text>
      <Text className="w-40 text-white text-center">{name}</Text>
      <Text className="w-16 h-8 text-white text-center">
        <TouchableOpacity className="bg-dark-50 rounded-full w-full h-full items-center justify-center border-[#606060] border-b-0">
          <Icon name="call" color={"white"} />
        </TouchableOpacity>
      </Text>
      <Text className="w-40 text-primary-100 text-center">{phone}</Text>
      <Text className="w-24 text-white text-center">
        Rs.{id < 15 ? amount : 2000}
      </Text>
    </View>
  );
};

export const MyHistoryTable = ({ data }) => {
  return (
    <View className="bg-dark-300 m-5 mt-0 h-full rounded-xl border border-borderColor overflow-hidden mb-30">
      <ScrollView horizontal>
        <View>
          {/* Table Header */}
          <View className="flex-row min-w-[600px] bg-dark-500 px-4 py-3 border-b border-borderColor">
            <Text className="w-16 text-white font-bold text-center">Shop</Text>
            <Text className="w-40 text-white font-bold text-center">Name</Text>
            <Text className="w-16 text-white font-bold text-center">Date</Text>
            <Text className="w-40 text-white font-bold text-center">Phone</Text>
            <Text className="w-24 text-white font-bold text-center">
              Amount
            </Text>
          </View>

          {/* Table Body */}
          <FlatList
            data={data}
            renderItem={({ item }) => <ItemRow {...item} />}
            keyExtractor={(item) => item.id.toString()}
            nestedScrollEnabled
          />
        </View>
      </ScrollView>
    </View>
  );
};
