import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StartNewTripCard() {
  const navigation = useNavigation(); // Use useNavigation for navigation

  return (
    <View
      style={{
        padding: 25,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Ionicons name="location" size={24} color="black" />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 25,
        }}
      >
        No Trip Plan Yet
      </Text>
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 15,
          textAlign: "center",
          marginTop: 10,
          color: Colors.GRAY,
        }}
      >
        Looks like it's time to plan a new travel experience! Get started by
        clicking the button below.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("create-trip/search-place")} // Use navigation.navigate
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
            fontSize: 15,
          }}
        >
          Start a New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
