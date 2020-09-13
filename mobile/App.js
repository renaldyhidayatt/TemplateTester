import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const [Tester, setTester] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/afifbasya/reactjs-redux/users")
      .then((res) => setTester(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {Tester.map((item, idx) => {
        <Text>{item.nama}</Text>;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
