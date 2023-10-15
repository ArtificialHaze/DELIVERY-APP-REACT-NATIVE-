import { Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  StarIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestourant } from "../features/restourantSlice";

const RestourantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestourant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="absolute top-14 lef-5 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon height={20} width={20} size={20} color={"#00ccbb"} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color={"green"} opacity={0.5} size={22} />
                <Text className="text-green-500">
                  {rating} . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color={"gray"} opacity={0.4} size={22} />
                <Text className="text-green-500">Nearby . {address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color={"gray"} opacity={0.5} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00ccbb"} />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-3 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              name={dish.name}
              price={dish.price}
              image={dish.image}
              id={dish._id}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestourantScreen;
