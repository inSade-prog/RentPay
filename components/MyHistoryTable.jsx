import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ItemRow = ({ id, name, phone, amount }) => {
  return (
    <View className="flex-row px-4 py-3 border-b border-borderColor">
      <Text className="w-16 text-white text-center">{id}</Text>
      <Text className="w-40 text-white text-center">{name}</Text>
      <Text className="w-16 h-8 text-white text-center">
        <Text className="color-white">Date</Text>
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
    <View className="bg-dark-300 flex-1 rounded-xl border border-borderColor overflow-hidden">
      <ScrollView horizontal>
        <View>
          {/* Table Header */}
          <View className="flex-row bg-dark-500 px-4 py-3 border-b border-borderColor">
            <Text className="w-16 text-white font-bold text-center">Shop</Text>
            <Text className="w-40 text-white font-bold text-center">Name</Text>
            <Text className="w-16 text-white font-bold text-center">
              Payment Date
            </Text>
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
