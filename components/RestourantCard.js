import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestourantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restourant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow-sm"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View>
          <StarIcon
            color={"green"}
            opacity={0.5}
            className="flex-row items-center space-x-1"
          />
          <Text className="text-green-500">
            {rating} . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon size={22} opacity={0.4} color="gray" />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestourantCard;
