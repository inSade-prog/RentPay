import { useState } from "react";
import DateTimePicker, { useDefaultStyles } from "react-native-ui-datepicker";
import { Text, View, TouchableOpacity } from "react-native";

export function Calendar({ onClose, onDateSelect }) {
  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState();

  const handleApply = () => {
    onDateSelect(selected);
    onClose();
  };

  return (
    <View className="bg-dark-200 p-4 rounded-lg">
      <DateTimePicker
        mode="single"
        date={selected}
        onChange={({ date }) => setSelected(date)}
        styles={defaultStyles}
      />

      <View className="flex-row justify-between mt-4">
        <TouchableOpacity
          onPress={onClose}
          className="p-2 bg-red-500 rounded-lg"
        >
          <Text className="text-white">Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleApply}
          className="p-2 bg-primary-100 rounded-lg"
        >
          <Text className="text-white">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
