import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectRestourant } from "../features/restourantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restourant = useSelector(selectRestourant);

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated arrival</Text>
              <Text className="text-4xl font-bold">40 minutes</Text>
            </View>
            <Image
              className="h-20 w-20"
              source={{
                uri: "",
              }}
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restourant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>
      <View className="flex-1 -mt-10 z-0">{/* MAP AND MARKER*/}</View>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
      </SafeAreaView>
      <View className="flex-1">
        <Text className="text-lg">DreamDevs.</Text>
      </View>
      <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
    </View>
  );
};

export default DeliveryScreen;
