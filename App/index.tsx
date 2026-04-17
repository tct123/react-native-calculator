import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default function App() {
  const state = initialState;

  const handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };


  return (
    <View style={styles.container} >
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            size={20}
            text="C"
            theme="secondary"
            onPress={() => this.handleTap("", "clear")}
          />
          <Button
            size={20}
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap("posneg")}
          />
          <Button
            size={20}
            text="%"
            theme="secondary"
            onPress={() => this.handleTap("percentage")}
          />
          <Button
            size={20}
            text="/"
            theme="accent"
            onPress={() => this.handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button theme={null} size={20} text="7" onPress={() => this.handleTap("number", 7)} />
          <Button theme={null} size={20} text="8" onPress={() => this.handleTap("number", 8)} />
          <Button theme={null} size={20} text="9" onPress={() => this.handleTap("number", 9)} />
          <Button
            size={20}
            text="x"
            theme="accent"
            onPress={() => this.handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button size={20} theme={null} text="4" onPress={() => this.handleTap("number", 4)} />
          <Button size={20} theme={null} text="5" onPress={() => this.handleTap("number", 5)} />
          <Button size={20} theme={null} text="6" onPress={() => this.handleTap("number", 6)} />
          <Button size={20}
            text="-"
            theme="accent"
            onPress={() => this.handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button theme={null} size={20} text="1" onPress={() => this.handleTap("number", 1)} />
          <Button theme={null} size={20} text="2" onPress={() => this.handleTap("number", 2)} />
          <Button theme={null} size={20} text="3" onPress={() => this.handleTap("number", 3)} />
          <Button size={20}
            text="+"
            theme="accent"
            onPress={() => this.handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            theme={null}
            text="0"
            size="double"
            onPress={() => this.handleTap("number", 0)}
          />
          <Button text="." onPress={() => this.handleTap("number", ".")} size={undefined} theme={undefined} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap("equal")}
            size={undefined} />
        </Row>
      </SafeAreaView>
    </View>
  );
}
