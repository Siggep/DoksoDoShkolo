import React, { Component } from "react";
import { Picker, SafeAreaView, Text, List } from "react-native";
import Constants from "expo-constants";

export default class PriceSelect extends Component {
  state = {
    expanded: true,
    hand: "right",
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
        <Picker
          selectedValue={this.state.hands}
          onValueChange={(hands) => this.setState({ hands })}
          style={{ width: 160, postion: "absolute", fontSize: 10 }}
          mode="dropdown"
          itemStyle={{
            fontWeight: "900",
            fontSize: 18,
            padding: 30,
          }}
        >
          <Picker.Item label="max" value="Inget" />
          <Picker.Item label="100.000" value="100.000" />
          <Picker.Item label="200.000" value="200.000" />
          <Picker.Item label="300.000" value="300.000" />
          <Picker.Item label="400.000" value="400.000" />
          <Picker.Item label="500.000" value="500.000" />
          <Picker.Item label="600.000" value="600.000" />
        </Picker>

        <Picker
          selectedValue={this.state.hand}
          onValueChange={(hand) => this.setState({ hand })}
          style={{ width: 160, postion: "absolute", fontSize: 10 }}
          mode="dropdown"
          itemStyle={{
            fontWeight: "900",
            fontSize: 18,
            padding: 30,
          }}
        >
          <Picker.Item label="min" value="Inget" />
          <Picker.Item label="100.000" value="100.000" />
          <Picker.Item label="200.000" value="200.000" />
          <Picker.Item label="300.000" value="300.000" />
          <Picker.Item label="400.000" value="400.000" />
          <Picker.Item label="500.000" value="500.000" />
          <Picker.Item label="600.000" value="600.000" />
        </Picker>
      </SafeAreaView>
    );
  }
}
