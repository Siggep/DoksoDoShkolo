import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function GoBackButton({ navigation }) {
  return (
    <View style={styles.listingButtonClose}>
      <Ionicons
        name="ios-arrow-round-back"
        size={33}
        color="#FFF"
        onPress={() => navigation.goBack()}
      ></Ionicons>
      {/* <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        color="black"
        onPress={() => navigation.goBack()}
      /> */}
      {/* <Button
        color="black"
        title="Tillbaka"
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  listingButtonClose: {
    position: "absolute",
    top: 48,
    left: 28,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GoBackButton;
