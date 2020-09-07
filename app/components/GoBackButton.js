import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function GoBackButton({ navigation }) {
  return (
    <View style={styles.listingButtonClose}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Button
        color="black"
        title="Tillbaka"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listingButtonClose: {
    position: "absolute",
    top: 40,
    left: 10,
    flexDirection: "row",
  },
});

export default GoBackButton;
