import { Text, SafeAreaView, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const Homepage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <Header />
      {/* Search */}
      <Search />

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Offers Near You */}
        <FeaturedRow
          id="123"
          title="Offers Near you"
          description="Why not support your local restaurant tonight!"
        />

        {/* Featured */}
        <FeaturedRow
          id="1234"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounta */}
        <FeaturedRow
          id="12345"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
