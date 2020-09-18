import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

// DropDownPicker
import DropDownPicker from "react-native-dropdown-picker";

export default function SquareSelect() {
  return (
    <View style={styles.container}>
      <View
        style={{
          // The solution: Apply zIndex to any device except Android
          ...(Platform.OS !== "android" && {
            zIndex: 10,
          }),
        }}
      >
        <View style={styles.priceContainer}>
          <View style={styles.minSizes}>
            <DropDownPicker
              style={styles.minPrice}
              items={[
                { label: "100m2", value: "100m2" },
                { label: "200m2", value: "200m2" },
                { label: "300m2", value: "300m2" },
              ]}
              placeholder="Max Boarea"
              containerStyle={{ height: 45 }}
              style={{ backgroundColor: "#ffffff" }}
              dropDownStyle={{ backgroundColor: "white" }}
            />
          </View>
          <View style={styles.maxSizes}>
            <DropDownPicker
              items={[
                { label: "300m2", value: "300m2" },
                { label: "200m2", value: "200m2" },
                { label: "100m2", value: "100m2" },
              ]}
              placeholder="Min Boarea"
              containerStyle={{ height: 45 }}
              style={{ backgroundColor: "#ffffff" }}
              dropDownStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginLeft: 30,
  },

  priceContainer: {
    flexDirection: "row",
  },
  minSizes: {
    width: "35%",
  },
  maxSizes: {
    width: "35%",
  },
});
