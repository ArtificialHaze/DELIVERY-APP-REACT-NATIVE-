import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestourantCard from "./RestourantCard";

const FeaturedRow = ({ id, title, description }) => {
  useEffect(() => {}, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        className="pt-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <RestourantCard
          id={restourant.id}
          imgUrl={restourant.image}
          title={restourant.title}
          rating={restourant.rating}
          genre={restourant.genre}
          address={restourant.address}
          short_description={restourant.short_description}
          dishes={restourant.dish}
          long={restourant.longitude}
          lat={restourant.latitude}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
