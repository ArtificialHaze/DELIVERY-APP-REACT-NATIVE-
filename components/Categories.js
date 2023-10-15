import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {}, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.img}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
